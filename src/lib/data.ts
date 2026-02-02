// ─────────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// Case study content with real assets from CLIENT_ASSETS_LOG.md
// ─────────────────────────────────────────────────────────────────────────────

export interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface ProjectVideo {
    src: string;
    title: string;
    description?: string;
    thumbnail?: string;
}

export interface ProjectSection {
    title: string;
    content: string;
    marginalia?: string;
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    client: string;
    year: string;
    duration: string;
    heroImage: string;
    thumbnailImage: string;
    description: string;
    // STAR Format
    situation: string;
    task: string;
    action: ProjectSection[];
    result: string;
    // Deliverables
    deliverables: string[];
    // Gallery
    gallery: ProjectImage[];
    // Videos (optional)
    videos?: ProjectVideo[];
    // Metrics (optional)
    metrics?: { label: string; value: string }[];
    // Colors used
    colors?: string[];
    // Next project slug
    nextProject: string;
}

export const PROJECTS: Project[] = [
    {
        slug: "kngdm",
        title: "KNGDM",
        subtitle: "Brand Identity System",
        category: "Brand Identity",
        client: "KNGDM",
        year: "2024",
        duration: "8 weeks",
        heroImage: "/_design_references/Design Assets/Clients/KNGDM/Final logo inspiration/Mockups/KNGDM - Brand Identity Mockup 1.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/KNGDM/Final logo inspiration/Mockups/KNGDM - Brand Identity Mockup 1.png",
        description: "A comprehensive brand identity system for a visionary lifestyle brand. From strategic positioning to visual execution, we crafted an identity that commands attention and inspires devotion.",
        situation: "KNGDM approached us at a pivotal moment in their growth. As a lifestyle brand with ambitious goals, they needed a visual identity that could scale from boutique exclusivity to global recognition while maintaining their core ethos of empowerment and community.",
        task: "Design a complete brand identity system that communicates authority, aspiration, and belonging. The visual language needed to work across digital platforms, physical products, and experiential touchpoints—from social media to luxury packaging.",
        action: [
            {
                title: "Strategic Discovery",
                content: "We began with intensive workshops to understand KNGDM's vision, audience, and competitive landscape. Through mood boarding and archetype mapping, we identified the intersection of 'Sovereign Authority' and 'Community Belonging' as their unique positioning.",
                marginalia: "The name KNGDM itself—Kingdom without the 'i'—speaks to collective sovereignty rather than individual rule.",
            },
            {
                title: "Visual Identity Development",
                content: "The logo draws from heraldic traditions while maintaining contemporary minimalism. We developed a custom wordmark with subtle crown references embedded in the letterforms, creating a mark that rewards closer inspection.",
                marginalia: "Multiple logo variants were created for different applications and scales.",
            },
            {
                title: "System Architecture",
                content: "Beyond the logo, we created a comprehensive brand system including typography hierarchies, color palettes, pattern libraries, and photography guidelines. Every element was designed to work in harmony while maintaining flexibility for future growth.",
            },
        ],
        result: "The new identity launched to immediate acclaim from KNGDM's community. The brand system has been successfully deployed across all touchpoints, from their e-commerce platform to limited-edition product drops. Early metrics show a 40% increase in brand recognition and a 25% lift in customer engagement.",
        deliverables: [
            "Primary & Secondary Logo Suite",
            "Brand Guidelines Document",
            "Typography System",
            "Color Palette & Usage",
            "Pattern Library",
            "Business Card Design",
            "Social Media Templates",
            "Packaging Guidelines",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/KNGDM/Final logo inspiration/Mockups/KNGDM - Brand Identity Mockup 1.png",
                alt: "KNGDM Brand Identity Mockup",
                caption: "Fig. 1 — Primary brand identity presentation",
            },
            {
                src: "/_design_references/Design Assets/Clients/KNGDM/Final logo inspiration/Mockups/Favs/KNGDM - Full Black 2 Mockup.png",
                alt: "KNGDM Logo on Black",
                caption: "Fig. 2 — Logo application on dark backgrounds",
            },
            {
                src: "/_design_references/Design Assets/Clients/KNGDM/Case Study/KNGDM - Design Showcase 1.png",
                alt: "KNGDM Design Showcase",
                caption: "Fig. 3 — Brand system overview",
            },
        ],
        metrics: [
            { label: "Brand Recognition", value: "+40%" },
            { label: "Engagement Lift", value: "+25%" },
            { label: "Social Following", value: "2x" },
        ],
        colors: ["#000000", "#FFFFFF", "#D4A855"],
        nextProject: "neo-sophia",
    },
    {
        slug: "neo-sophia",
        title: "Neo Sophia",
        subtitle: "Educational App Design",
        category: "App Design",
        client: "Neo Sophia",
        year: "2024",
        duration: "12 weeks",
        heroImage: "/_design_references/Design Assets/Clients/Neo Sophia/Case Study/NS App Homescreen Mockup 1 Transparent.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/Neo Sophia/Case Study/NS App Homescreen Mockup 1 Transparent.png",
        description: "UI/UX design for an AI-driven educational platform that makes philosophy and wisdom traditions accessible to modern learners through engaging character interactions.",
        situation: "Neo Sophia had developed groundbreaking AI technology for philosophical education but lacked the visual design to match their innovative approach. Their existing interface was functional but failed to convey the warmth and wisdom of their content.",
        task: "Create an app experience that feels both intellectually rigorous and emotionally inviting. The design needed to make ancient wisdom feel relevant to digital-native learners while maintaining the gravitas these traditions deserve.",
        action: [
            {
                title: "Character-Driven Design",
                content: "We centered the experience around Sophie Fox and Mr. Brain—mascot characters that serve as guides through the philosophical curriculum. These characters bridge the gap between complex concepts and accessible learning.",
                marginalia: "Sophie Fox represents curiosity and intuition; Mr. Brain embodies analytical thinking.",
            },
            {
                title: "Intuitive Information Architecture",
                content: "The app structure mirrors the journey of philosophical inquiry: from wonder to investigation to understanding. Each screen was designed to reduce cognitive load while encouraging deeper exploration.",
            },
            {
                title: "Visual Language of Wisdom",
                content: "We developed a warm, inviting color palette paired with clean typography that suggests both approachability and intellectual depth. Subtle animations reward user progress and maintain engagement.",
                marginalia: "Custom illustrations blend classical philosophy references with contemporary digital aesthetics.",
            },
        ],
        result: "The redesigned app saw a 60% increase in daily active users and a 45% improvement in lesson completion rates. User feedback specifically praised the welcoming aesthetic and intuitive navigation. Neo Sophia has since secured additional funding to expand their curriculum.",
        deliverables: [
            "Complete UI/UX Redesign",
            "Character Illustration Suite",
            "Custom Icon Library",
            "Animation Specifications",
            "Design System Documentation",
            "Prototype & User Flows",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/Neo Sophia/Case Study/NS App Homescreen Mockup 1 Transparent.png",
                alt: "Neo Sophia App Homescreen",
                caption: "Fig. 1 — Main homescreen design",
            },
            {
                src: "/_design_references/Design Assets/Clients/Neo Sophia/Case Study/NS App Screens Mockup 1 Transparent.png",
                alt: "Neo Sophia App Screens",
                caption: "Fig. 2 — Key screen designs",
            },
        ],
        videos: [
            {
                src: "/_design_references/Design Assets/Clients/Neo Sophia/Final/Neo Sophia - How to Tutorial Draft 2 - Done.mp4",
                title: "App Tutorial",
                description: "Onboarding walkthrough showcasing the app's key features and user flow.",
            },
        ],
        metrics: [
            { label: "Daily Active Users", value: "+60%" },
            { label: "Lesson Completion", value: "+45%" },
            { label: "App Store Rating", value: "4.8★" },
        ],
        colors: ["#4A90A4", "#F5E6D3", "#2D3748"],
        nextProject: "aiff",
    },
    {
        slug: "aiff",
        title: "Atlanta Indian Film Festival",
        subtitle: "Event Branding",
        category: "Event Branding",
        client: "AIFF",
        year: "2024",
        duration: "6 weeks",
        heroImage: "/_design_references/Design Assets/Clients/Atlanta Indian Film Festival/Case Study/AIFF Retractable 2 Banner Mockup 1.2 - w BG.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/Atlanta Indian Film Festival/Case Study/AIFF Retractable 2 Banner Mockup 1.2 - w BG.png",
        description: "Vibrant event branding for Atlanta's premier celebration of Indian cinema, bridging cultural heritage with contemporary design sensibilities.",
        situation: "The Atlanta Indian Film Festival needed branding that would honor the rich tradition of Indian cinema while appealing to Atlanta's diverse, cosmopolitan audience. Previous years had relied on generic festival templates that failed to capture the event's unique character.",
        task: "Develop a distinctive visual identity that celebrates Indian cinematic heritage, attracts both Indian diaspora and mainstream audiences, and scales effectively from digital marketing to large-format event signage.",
        action: [
            {
                title: "Cultural Research & Synthesis",
                content: "We immersed ourselves in Indian cinema's visual history—from classic Bollywood poster art to contemporary independent film aesthetics. This research informed a design direction that felt authentically rooted yet fresh.",
                marginalia: "Indian cinema is the world's largest film industry by volume, producing over 1,500 films annually.",
            },
            {
                title: "Dynamic Visual System",
                content: "The identity centers on flowing, dance-inspired forms that suggest both film reels and classical Indian movement. A vibrant color palette draws from traditional textiles while maintaining modern accessibility.",
            },
            {
                title: "Multi-Format Execution",
                content: "We designed comprehensive event materials including banners, programs, digital assets, and wayfinding signage—ensuring visual consistency across the entire festival experience.",
            },
        ],
        result: "The 2024 festival saw record attendance with a 35% increase over the previous year. The visual identity received widespread praise on social media and was featured in local arts publications. AIFF has retained us for ongoing annual branding.",
        deliverables: [
            "Festival Logo & Identity",
            "Retractable Banners",
            "Event Program Design",
            "Digital Marketing Suite",
            "Social Media Templates",
            "Wayfinding Signage",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/Atlanta Indian Film Festival/Case Study/AIFF Retractable 2 Banner Mockup 1.2 - w BG.png",
                alt: "AIFF Banner Mockup",
                caption: "Fig. 1 — Retractable banner design",
            },
        ],
        metrics: [
            { label: "Attendance Increase", value: "+35%" },
            { label: "Social Impressions", value: "500K+" },
            { label: "Media Features", value: "12" },
        ],
        colors: ["#E53935", "#FFB300", "#1E88E5", "#FFFFFF"],
        nextProject: "jack-hoagalino",
    },
    {
        slug: "jack-hoagalino",
        title: "Jack Hoagalino",
        subtitle: "Entertainment Branding",
        category: "Entertainment",
        client: "Jack Hoagalino",
        year: "2024",
        duration: "4 weeks",
        heroImage: "/_design_references/Design Assets/Clients/Jack Hoagalino/Case Study/Corrected - Jack Hoagalino TV Show Poster - Widescreen.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/Jack Hoagalino/Case Study/Corrected - Jack Hoagalino TV Show Poster - Widescreen.png",
        description: "Cinematic poster design and visual identity for an emerging entertainment personality, blending dramatic storytelling with personal brand positioning.",
        situation: "Jack Hoagalino, an emerging figure in entertainment, needed promotional materials that would establish credibility and intrigue before formal project announcements. The challenge was creating buzz without revealing specifics.",
        task: "Design teaser materials that create cinematic anticipation, establish Jack's visual brand identity, and generate industry interest—all while maintaining strategic ambiguity about upcoming projects.",
        action: [
            {
                title: "Cinematic Positioning",
                content: "We approached the project as if designing for a major studio release. High-contrast photography, dramatic lighting, and film-inspired typography create immediate association with quality entertainment.",
                marginalia: "The poster format was chosen specifically for its cultural associations with prestige projects.",
            },
            {
                title: "Mystery as Strategy",
                content: "Rather than explaining the project, the materials suggest a story worth discovering. Compositional choices and copy create questions that drive audience curiosity and engagement.",
            },
        ],
        result: "The teaser campaign generated significant industry buzz, with the poster shared widely across entertainment networks. The materials successfully positioned Jack for upcoming announcements and opened doors for pitch meetings with production companies.",
        deliverables: [
            "Hero Poster Design",
            "Social Media Variants",
            "Press Kit Materials",
            "Digital Campaign Assets",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/Jack Hoagalino/Case Study/Corrected - Jack Hoagalino TV Show Poster - Widescreen.png",
                alt: "Jack Hoagalino Poster",
                caption: "Fig. 1 — Primary promotional poster",
            },
        ],
        videos: [
            {
                src: "/_design_references/Design Assets/Clients/Jack Hoagalino/Jack Hoagalino - Blood Ties (Animation) - Final Draft 6.mp4",
                title: "Blood Ties Teaser",
                description: "Animated title sequence and teaser trailer for the upcoming series.",
            },
        ],
        colors: ["#1A1A1A", "#D4A855", "#FFFFFF"],
        nextProject: "ai-automation",
    },
    {
        slug: "ai-automation",
        title: "Ai x Automation Podcast",
        subtitle: "Podcast Branding",
        category: "Podcast Branding",
        client: "Alex Sofranos",
        year: "2024",
        duration: "3 weeks",
        heroImage: "/_design_references/Design Assets/Clients/Alex Sofranos (Ai x Automation Podcast)/Case Study/COA - Alex Sofronas - Ai x Automation Podcast Cover Art Mockup 1 - Batch 2.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/Alex Sofranos (Ai x Automation Podcast)/Case Study/COA - Alex Sofronas - Ai x Automation Podcast Cover Art Mockup 1 - Batch 2.png",
        description: "Retro-futuristic podcast branding that captures the wonder and possibility of artificial intelligence through vintage sci-fi magazine aesthetics.",
        situation: "Alex Sofranos was launching a podcast exploring AI and automation topics but found existing tech podcast aesthetics either too sterile or too chaotic. He wanted something that captured the genuine wonder of technological possibility.",
        task: "Create podcast branding that stands out in crowded directories, communicates both optimism and thoughtfulness about AI, and establishes a distinctive visual voice for the show's long-term growth.",
        action: [
            {
                title: "Retrofuturism as Strategy",
                content: "We drew inspiration from 1950s science fiction magazines—a era when technology represented pure possibility. This aesthetic choice positions AI discussions in terms of wonder rather than fear.",
                marginalia: "The golden age of sci-fi magazines (1938-1960) shaped public imagination about technology for generations.",
            },
            {
                title: "Series-Ready Design System",
                content: "Multiple cover variants were created to allow for episode-specific customization while maintaining brand consistency. Each cover suggests a new 'issue' of the ongoing exploration.",
            },
        ],
        result: "The podcast launched to immediate visual distinction in the AI/tech category. The cover art has been praised for its unique approach and has helped the show secure notable interview guests who appreciate the thoughtful positioning.",
        deliverables: [
            "Podcast Cover Art Suite",
            "Episode Variant Templates",
            "Social Media Graphics",
            "YouTube Thumbnail System",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/Alex Sofranos (Ai x Automation Podcast)/Case Study/COA - Alex Sofronas - Ai x Automation Podcast Cover Art Mockup 1 - Batch 2.png",
                alt: "Ai x Automation Podcast Cover",
                caption: "Fig. 1 — Primary podcast cover art",
            },
        ],
        colors: ["#C62828", "#FFF8E1", "#37474F"],
        nextProject: "later-youll-understand",
    },
    {
        slug: "later-youll-understand",
        title: "Later You'll Understand",
        subtitle: "Album Art & Packaging",
        category: "Music Packaging",
        client: "Dionta Goodson",
        year: "2024",
        duration: "4 weeks",
        heroImage: "/_design_references/Design Assets/Clients/Dionta Goodson (Later You'll Understand)/Final/Later Youll Understand Album Cover Art Mockup 2 w BG.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/Dionta Goodson (Later You'll Understand)/Final/Later Youll Understand Album Cover Art Mockup 1 with BG.png",
        description: "Complete album packaging design for an underground hip-hop project, featuring motion-blur photography and lo-fi nostalgic aesthetics that capture the introspective nature of the music.",
        situation: "Dionta Goodson, an emerging hip-hop artist, was preparing to release 'Later You'll Understand Vol. 1'—a deeply personal project exploring growth, reflection, and the wisdom that comes with time. He needed artwork that would stand apart from the polished mainstream aesthetic.",
        task: "Create album packaging that visually translates the project's introspective themes, appeals to underground hip-hop audiences, and works across both digital platforms and physical formats including CD and vinyl.",
        action: [
            {
                title: "Lo-Fi Aesthetic Development",
                content: "We developed a visual language rooted in motion blur and VHS-style glitch effects. The intentional imperfection mirrors the album's raw, honest approach—beauty found in the unpolished moments.",
                marginalia: "The motion blur effect suggests movement through time, reinforcing the album's theme of eventual understanding.",
            },
            {
                title: "Typography as Identity",
                content: "Hand-drawn, almost childlike typography was chosen to contrast the adult themes within. The sage green color palette suggests growth while the casual arrangement creates an intimate, personal feeling.",
            },
            {
                title: "Multi-Format Execution",
                content: "We designed the artwork to translate seamlessly across formats—from square digital thumbnails to rectangular CD cases to large-format vinyl sleeves. Each format received careful attention to proportions and details.",
                marginalia: "Physical formats remain crucial in hip-hop culture, where vinyl and limited CDs carry collector value.",
            },
        ],
        result: "The album art has been praised for its distinctive look in a crowded market. The visual identity helped establish Dionta's artistic direction and contributed to playlist placements and blog features that cited the compelling artwork.",
        deliverables: [
            "Album Cover Art",
            "Back Cover & Track List",
            "CD Jewel Case Design",
            "Vinyl Sleeve Design",
            "Digital Platform Variants",
            "Social Media Assets",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/Dionta Goodson (Later You'll Understand)/Final/Later Youll Understand Album Cover Art Mockup 1 with BG.png",
                alt: "Later You'll Understand CD Mockup",
                caption: "Fig. 1 — CD jewel case presentation",
            },
            {
                src: "/_design_references/Design Assets/Clients/Dionta Goodson (Later You'll Understand)/Final/Later Youll Understand Album Cover Art Mockup 2 w BG.png",
                alt: "Later You'll Understand Vinyl Mockup",
                caption: "Fig. 2 — Vinyl sleeve design",
            },
            {
                src: "/_design_references/Design Assets/Clients/Dionta Goodson (Later You'll Understand)/Final/Later Youll Understand Album Cover Art Mockup 3 w BG.png",
                alt: "Later You'll Understand Gatefold",
                caption: "Fig. 3 — Gatefold packaging spread",
            },
        ],
        metrics: [
            { label: "Streaming Playlists", value: "15+" },
            { label: "Blog Features", value: "8" },
            { label: "Physical Sales", value: "500+" },
        ],
        colors: ["#8B9467", "#F5F5F0", "#E8D4D4", "#1F1A17"],
        nextProject: "fem-flow",
    },
    {
        slug: "fem-flow",
        title: "Fem Flow",
        subtitle: "Wellness Brand Identity",
        category: "Brand Identity",
        client: "Fem Flow",
        year: "2024",
        duration: "10 weeks",
        heroImage: "/_design_references/Design Assets/Clients/Fem Flow/Extras/FemFlow Logo in Meditative Harmony.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/Fem Flow/Extras/FemFlow Logo in Meditative Harmony.png",
        description: "A holistic brand identity for a women's wellness platform, merging meditation aesthetics with modern lifestyle branding to create a warm, inviting presence.",
        situation: "Fem Flow was launching as a women's wellness platform focused on meditation, movement, and community. The founders wanted to differentiate from the sterile, minimalist wellness brands dominating the market—they envisioned something warmer and more human.",
        task: "Develop a complete brand identity that communicates calm and empowerment simultaneously. The visual system needed to work across digital products, social media, video content, and potential physical merchandise.",
        action: [
            {
                title: "Symbolic Logo Development",
                content: "The logo features a figure in lotus position that subtly forms the letters 'FF.' This dual reading rewards careful observation while remaining instantly recognizable at small scales—a meditation on the brand name itself.",
                marginalia: "The lotus position represents both stillness and strength—core values for the brand.",
            },
            {
                title: "Earthy Color Philosophy",
                content: "We moved away from typical spa pastels toward forest greens and warm creams. These colors connect to nature and groundedness while maintaining the sophistication expected of a premium wellness offering.",
            },
            {
                title: "Lifestyle Visual System",
                content: "Beyond the logo, we developed a comprehensive visual language including photography guidelines, scene compositions, and video production templates. Warm golden-hour lighting became a signature element.",
                marginalia: "All lifestyle imagery was developed to feel aspirational yet attainable—real women in real moments.",
            },
        ],
        result: "Fem Flow launched to enthusiastic reception from their target audience. The brand's visual distinction helped secure partnerships with wellness influencers and earned features in lifestyle publications. Community membership exceeded projections by 60%.",
        deliverables: [
            "Primary Logo & Variants",
            "Brand Guidelines",
            "Color & Typography System",
            "Photography Direction",
            "Video Production Templates",
            "Social Media Kit",
            "Website Design Direction",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/Fem Flow/Extras/FemFlow Logo in Meditative Harmony.png",
                alt: "Fem Flow Primary Logo",
                caption: "Fig. 1 — Primary logo with figure mark",
            },
            {
                src: "/_design_references/Design Assets/Clients/Fem Flow/Extras/FF - Scene 5 - Image 1.png",
                alt: "Fem Flow Outdoor Yoga Scene",
                caption: "Fig. 2 — Lifestyle photography direction",
            },
            {
                src: "/_design_references/Design Assets/Clients/Fem Flow/Extras/FF - Scene 8 - Image 1.png",
                alt: "Fem Flow Community Gathering",
                caption: "Fig. 3 — Community-focused imagery",
            },
        ],
        videos: [
            {
                src: "/_design_references/Design Assets/Clients/Fem Flow/Final/FemFlow Promo - Final Draft 1.mp4",
                title: "Brand Promo",
                description: "Promotional video showcasing the Fem Flow lifestyle and community experience.",
            },
        ],
        metrics: [
            { label: "Membership Growth", value: "+60%" },
            { label: "Brand Partnerships", value: "12" },
            { label: "Social Following", value: "45K" },
        ],
        colors: ["#2D4A3E", "#E8DFD0", "#D4A855", "#8B9467"],
        nextProject: "my-college-finance",
    },
    {
        slug: "my-college-finance",
        title: "My College Finance",
        subtitle: "Educational Brand & Character",
        category: "Brand Identity",
        client: "My College Finance",
        year: "2024",
        duration: "8 weeks",
        heroImage: "/_design_references/Design Assets/Clients/My College Finance/Case Study/Updated Disney Oliver Owl - Illustrated Character Concept 2.2.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/My College Finance/Case Study/Updated Final - My College Finace Logo w New Oliver 1 - Thiink Media Graphics (Transparent).png",
        description: "A friendly, Disney-inspired educational brand featuring Oliver Owl—a mascot character designed to make financial literacy approachable for college students.",
        situation: "My College Finance needed to tackle a significant challenge: making financial education engaging for college students who typically find the subject intimidating or boring. The existing materials felt corporate and failed to connect with their young audience.",
        task: "Create a complete brand identity centered around a mascot character that could serve as a friendly guide through complex financial topics. The character needed to be approachable yet professional, suitable for both social media and serious educational content.",
        action: [
            {
                title: "Character Creation",
                content: "We designed Oliver Owl—a wise yet approachable owl character in professional attire. The choice of an owl leverages natural associations with wisdom while the friendly illustration style removes intimidation. His blue suit suggests professionalism without stuffiness.",
                marginalia: "Oliver's name was chosen for its associations with growth and wisdom (olive tree) and classic storytelling (Oliver Twist).",
            },
            {
                title: "Disney-Inspired Illustration",
                content: "The character design draws from the warmth of classic Disney animation while maintaining a contemporary feel. Large expressive eyes create emotional connection, while the detailed academic settings ground Oliver in the educational context.",
            },
            {
                title: "Multi-Platform Application",
                content: "We developed Oliver for various contexts—from YouTube thumbnails to webinar announcements to social media posts. Each application maintains character consistency while adapting to platform-specific requirements.",
                marginalia: "The character system includes multiple poses and expressions for different content needs.",
            },
        ],
        result: "Oliver Owl has become the beloved face of My College Finance. Student engagement with educational content increased significantly, and the brand has expanded into webinars, YouTube content, and campus partnerships. The mascot has developed genuine fan affection.",
        deliverables: [
            "Oliver Owl Character Design",
            "Character Pose Library",
            "Primary Brand Logo",
            "YouTube Channel Assets",
            "Social Media Templates",
            "Webinar Graphics",
            "Campus Marketing Materials",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/My College Finance/Case Study/Updated Final - My College Finace Logo w New Oliver 1 - Thiink Media Graphics (Transparent).png",
                alt: "My College Finance Logo with Oliver Owl",
                caption: "Fig. 1 — Primary logo with Oliver mascot",
            },
            {
                src: "/_design_references/Design Assets/Clients/My College Finance/Case Study/Updated Disney Oliver Owl - Illustrated Character Concept 2.2.png",
                alt: "Oliver Owl Full Character Illustration",
                caption: "Fig. 2 — Oliver in academic library setting",
            },
            {
                src: "/_design_references/Design Assets/Clients/My College Finance/Case Study/Final - YouTube Banner Image 3.2.png",
                alt: "My College Finance YouTube Banner",
                caption: "Fig. 3 — YouTube channel banner design",
            },
        ],
        videos: [
            {
                src: "/_design_references/Design Assets/Clients/My College Finance/V5 - MCF Money Education Intro Video w audio.mp4",
                title: "Money Education Intro",
                description: "Animated introduction sequence featuring Oliver Owl for the educational video series.",
            },
        ],
        metrics: [
            { label: "Content Engagement", value: "+85%" },
            { label: "YouTube Subscribers", value: "15K" },
            { label: "Campus Partners", value: "25" },
        ],
        colors: ["#1E3A8A", "#FFFFFF", "#D4A855", "#F5F5F0"],
        nextProject: "sins-we-share",
    },
    {
        slug: "sins-we-share",
        title: "The Sins We Share",
        subtitle: "Animation Concept Art",
        category: "Character Design",
        client: "The Sins We Share",
        year: "2024",
        duration: "6 weeks",
        heroImage: "/_design_references/Design Assets/Clients/The Sins We Share/Case Study/Final Character Refrence 1 - Edited.png",
        thumbnailImage: "/_design_references/Design Assets/Clients/The Sins We Share/Case Study/Maya Carter Character Concept Art 1.png",
        description: "Character concept art for an animated drama series, developing distinctive visual identities for complex characters navigating ambition, loyalty, and moral compromise.",
        situation: "The creators of 'The Sins We Share' were developing an animated drama series exploring themes of ambition, family loyalty, and the moral compromises people make for success. They needed character designs that could carry emotional weight in a semi-realistic animation style.",
        task: "Design key characters with distinct visual personalities that communicate their roles and relationships at a glance, while maintaining enough depth for audiences to project complex emotions onto them throughout the series.",
        action: [
            {
                title: "Character Psychology Mapping",
                content: "Before any visual work, we developed detailed character profiles exploring each figure's motivations, background, and relationship to others. Maya Carter's confident posture and sharp glasses reflect her analytical nature; Donald Wilson's imposing presence and gold accents speak to his earned power.",
                marginalia: "Visual storytelling requires characters whose design choices feel inevitable once you know their stories.",
            },
            {
                title: "Semi-Realistic Style Development",
                content: "We chose a style that bridges realistic proportions with subtle stylization—enough realism for emotional nuance, enough stylization to maintain the flexibility animation requires. The urban backgrounds ground the characters in a recognizable world.",
            },
            {
                title: "Scene Composition",
                content: "Beyond individual portraits, we developed key scene compositions showing characters in relationship. The office confrontation scene establishes visual hierarchies and tension through careful staging and lighting.",
            },
        ],
        result: "The character designs have been adopted as the official visual direction for the series development. The concepts are being used for pitch materials and early production planning, with positive reception from potential production partners.",
        deliverables: [
            "Maya Carter Character Design",
            "Donald Wilson Character Design",
            "Key Scene Compositions",
            "Character Reference Sheets",
            "Style Guide for Animation",
            "Pitch Deck Visuals",
        ],
        gallery: [
            {
                src: "/_design_references/Design Assets/Clients/The Sins We Share/Case Study/Maya Carter Character Concept Art 1.png",
                alt: "Maya Carter Character Concept",
                caption: "Fig. 1 — Maya Carter, protagonist",
            },
            {
                src: "/_design_references/Design Assets/Clients/The Sins We Share/Case Study/Donald Big Wilison Character Concept Art 1.png",
                alt: "Donald Wilson Character Concept",
                caption: "Fig. 2 — Donald 'Big' Wilson",
            },
            {
                src: "/_design_references/Design Assets/Clients/The Sins We Share/Case Study/Final Character Refrence 1 - Edited.png",
                alt: "The Sins We Share Scene Composition",
                caption: "Fig. 3 — Key scene composition",
            },
        ],
        metrics: [
            { label: "Production Interest", value: "3 Studios" },
            { label: "Pitch Success", value: "Round 2" },
            { label: "Character Approval", value: "100%" },
        ],
        colors: ["#2D3748", "#D4A855", "#8B4513", "#F5F5F0"],
        nextProject: "kngdm",
    },
];

// Helper to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug === slug);
}

// Helper to get next project
export function getNextProject(currentSlug: string): Project {
    const current = PROJECTS.find((p) => p.slug === currentSlug);
    if (current) {
        return PROJECTS.find((p) => p.slug === current.nextProject) || PROJECTS[0];
    }
    return PROJECTS[0];
}
