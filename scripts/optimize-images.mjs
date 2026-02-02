/**
 * Image Optimization Script
 *
 * Converts source assets from _design_references/ to optimized WebP format
 * in public/images/ for production deployment.
 *
 * Usage:
 *   npm run optimize-images
 *
 * Prerequisites:
 *   npm install -D sharp glob
 */

import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SOURCE = path.join(ROOT, "_design_references");
const DEST = path.join(ROOT, "public", "images");

// Optimization configurations
const configs = {
    thumbnail: { width: 800, quality: 85 },
    hero: { width: 1920, quality: 85 },
    gallery: { width: 1400, quality: 80 },
    logo: { width: 400, quality: 90 },
    background: { width: 2560, quality: 70 },
    icon: { width: 192, quality: 95 },
};

// Track processed files
let processedCount = 0;
let skippedCount = 0;
let errorCount = 0;

/**
 * Optimize a single image
 */
async function optimizeImage(src, dest, config) {
    try {
        await fs.mkdir(path.dirname(dest), { recursive: true });

        const destWebp = dest.replace(/\.[^.]+$/, ".webp");

        await sharp(src)
            .resize(config.width, null, { withoutEnlargement: true })
            .webp({ quality: config.quality })
            .toFile(destWebp);

        processedCount++;
        console.log(`  ✓ ${path.basename(destWebp)}`);
        return destWebp;
    } catch (error) {
        errorCount++;
        console.error(`  ✗ Error processing ${path.basename(src)}: ${error.message}`);
        return null;
    }
}

/**
 * Copy SVG files directly (no conversion needed)
 */
async function copySvg(src, dest) {
    try {
        await fs.mkdir(path.dirname(dest), { recursive: true });
        await fs.copyFile(src, dest);
        processedCount++;
        console.log(`  ✓ ${path.basename(dest)} (SVG copied)`);
    } catch (error) {
        errorCount++;
        console.error(`  ✗ Error copying ${path.basename(src)}: ${error.message}`);
    }
}

/**
 * Process brand assets (logos, textures, backgrounds)
 */
async function processBrandAssets() {
    console.log("\n📁 Processing Brand Assets...");

    const brandPath = path.join(SOURCE, "Design Assets", "Thiink MG Brand Assets");
    const files = await glob(`${brandPath}/**/*.{png,jpg,jpeg,svg,PNG,JPG,JPEG,SVG}`, {
        windowsPathsNoEscape: true,
    });

    console.log(`   Found ${files.length} brand assets`);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const baseName = path.basename(file, path.extname(file));

        // Determine category based on filename/path
        let config = configs.background;
        let subDir = "brand";

        if (file.toLowerCase().includes("logo")) {
            config = configs.logo;
            subDir = "brand/logos";
        } else if (
            file.toLowerCase().includes("bg") ||
            file.toLowerCase().includes("background")
        ) {
            config = configs.background;
            subDir = "backgrounds";
        } else if (file.toLowerCase().includes("relief") || file.toLowerCase().includes("bas")) {
            config = configs.gallery;
            subDir = "brand/reliefs";
        }

        const destPath = path.join(DEST, subDir, path.basename(file));

        if (ext === ".svg") {
            await copySvg(file, destPath);
        } else {
            await optimizeImage(file, destPath, config);
        }
    }
}

/**
 * Process client portfolio assets
 */
async function processClientAssets() {
    console.log("\n📁 Processing Client Assets...");

    const clientsPath = path.join(SOURCE, "Design Assets", "Clients");
    const clientDirs = await fs.readdir(clientsPath);

    for (const clientDir of clientDirs) {
        const clientPath = path.join(clientsPath, clientDir);
        const stat = await fs.stat(clientPath);

        if (!stat.isDirectory()) continue;

        // Create slug from client name
        const slug = clientDir
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        console.log(`\n   Processing ${clientDir}...`);

        const files = await glob(`${clientPath}/**/*.{png,jpg,jpeg,PNG,JPG,JPEG}`, {
            windowsPathsNoEscape: true,
        });

        for (const file of files) {
            // Determine image type from filename
            let config = configs.gallery;
            let suffix = "";

            if (
                file.toLowerCase().includes("hero") ||
                file.toLowerCase().includes("banner") ||
                file.toLowerCase().includes("widescreen")
            ) {
                config = configs.hero;
                suffix = "-hero";
            } else if (
                file.toLowerCase().includes("thumb") ||
                file.toLowerCase().includes("mockup 1")
            ) {
                config = configs.thumbnail;
                suffix = "-thumb";
            }

            const baseName = path.basename(file, path.extname(file));
            const destFileName = `${slug}${suffix ? suffix : "-" + sanitizeFilename(baseName)}`;
            const destPath = path.join(DEST, "work", slug, destFileName + path.extname(file));

            await optimizeImage(file, destPath, config);
        }
    }
}

/**
 * Generate responsive srcset images for hero images
 */
async function generateResponsiveSizes(src, destBase) {
    const sizes = [640, 1024, 1400, 1920];

    for (const size of sizes) {
        try {
            await sharp(src)
                .resize(size, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(`${destBase}-${size}w.webp`);
        } catch {
            // Skip if source is smaller than target size
        }
    }
}

/**
 * Sanitize filename for web
 */
function sanitizeFilename(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 50);
}

/**
 * Generate path mapping file for updating component imports
 */
async function generatePathMapping() {
    console.log("\n📝 Generating path mapping...");

    const mapping = {
        note: "Map old _design_references paths to new /images paths",
        generated: new Date().toISOString(),
        mappings: {},
    };

    // This would require tracking the original paths during processing
    // For now, output a note about manual updates needed

    const mappingPath = path.join(DEST, "path-mapping.json");
    await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2));
    console.log(`   Created ${mappingPath}`);
}

/**
 * Main execution
 */
async function main() {
    console.log("🖼️  Image Optimization Pipeline");
    console.log("================================");
    console.log(`Source: ${SOURCE}`);
    console.log(`Destination: ${DEST}`);

    // Ensure destination exists
    await fs.mkdir(DEST, { recursive: true });

    try {
        await processBrandAssets();
        await processClientAssets();
        await generatePathMapping();

        console.log("\n================================");
        console.log(`✅ Optimization complete!`);
        console.log(`   Processed: ${processedCount} files`);
        console.log(`   Skipped: ${skippedCount} files`);
        console.log(`   Errors: ${errorCount} files`);
        console.log("\n📌 Next steps:");
        console.log("   1. Update component imports to use /images/ paths");
        console.log("   2. Test locally with `npm run dev`");
        console.log("   3. Verify all images load correctly");
    } catch (error) {
        console.error("\n❌ Pipeline failed:", error);
        process.exit(1);
    }
}

main();
