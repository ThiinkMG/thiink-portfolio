import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // Get parameters
    const title = searchParams.get("title") || "Thiink Media Graphics";
    const subtitle =
        searchParams.get("subtitle") || "Where Ancient Wisdom Meets Digital Innovation";
    const type = searchParams.get("type") || "default"; // default, project, about

    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Georgia, serif",
                    position: "relative",
                }}
            >
                {/* Decorative border */}
                <div
                    style={{
                        position: "absolute",
                        top: "24px",
                        left: "24px",
                        right: "24px",
                        bottom: "24px",
                        border: "1px solid rgba(212, 168, 85, 0.3)",
                        display: "flex",
                    }}
                />

                {/* Inner border */}
                <div
                    style={{
                        position: "absolute",
                        top: "32px",
                        left: "32px",
                        right: "32px",
                        bottom: "32px",
                        border: "1px solid rgba(212, 168, 85, 0.15)",
                        display: "flex",
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "60px",
                        textAlign: "center",
                    }}
                >
                    {/* Category/Type badge */}
                    {type === "project" && (
                        <div
                            style={{
                                color: "#D4A855",
                                fontSize: "16px",
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                marginBottom: "24px",
                            }}
                        >
                            Case Study
                        </div>
                    )}

                    {/* Main title */}
                    <div
                        style={{
                            color: "#F0EFE9",
                            fontSize: type === "project" ? "56px" : "64px",
                            fontWeight: "bold",
                            lineHeight: 1.1,
                            marginBottom: "24px",
                            maxWidth: "900px",
                        }}
                    >
                        {title}
                    </div>

                    {/* Divider */}
                    <div
                        style={{
                            width: "80px",
                            height: "2px",
                            background: "#D4A855",
                            marginBottom: "24px",
                            display: "flex",
                        }}
                    />

                    {/* Subtitle */}
                    <div
                        style={{
                            color: "#9CA3AF",
                            fontSize: "24px",
                            maxWidth: "700px",
                            lineHeight: 1.4,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>

                {/* Brand mark at bottom */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "48px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <div
                        style={{
                            color: "#D4A855",
                            fontSize: "18px",
                            letterSpacing: "3px",
                        }}
                    >
                        THIINK MEDIA GRAPHICS
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
