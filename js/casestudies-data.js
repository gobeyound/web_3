/* ============================================================
   BLINK BEYOND — CASE STUDIES DATASET (12 RICH PROJECTS)
   ============================================================ */

window.CASE_STUDIES_DATA = [
  /* ---------------- WEB DEVELOPMENT (3) ---------------- */
  {
    id: 'webdev-1',
    category: 'webdev',
    categoryName: 'Web Development',
    title: 'LuxeCart — Premium Headless E-Commerce',
    tagline: 'Next-Gen Headless Storefront for High-End Fashion & Apparel',
    client: 'LuxeCart Couture',
    industry: 'Luxury Fashion & Apparel',
    timeline: '8 Weeks (Q1 2026)',
    liveUrl: 'https://luxecart-demo.blinkbeyond.co.in',
    stats: ['+340% Conversion Rate', '0.8s Page Speed', '₹4.2M Monthly Sales'],
    heroImage: 'assets/images/case-webdev-1.jpg',
    badgeText: '01 — HEADLESS E-COMMERCE',
    thumbnailGradient: 'linear-gradient(135deg, #101428 0%, #080a14 100%)',
    accentColor: '#3D3DFF',
    viewsCount: '18.4K',
    likesCount: '1.2K',
    description: 'Built a lightning-fast headless e-commerce experience combining Next.js 14, Shopify Storefront API, and custom WebGL micro-interactions. Reduced checkout friction to achieve a record-breaking 3.4x conversion uplift.',
    challenge: 'LuxeCart\'s existing monolithic store was suffering from 4.8s load times, high bounce rates on mobile devices (68%), and a clunky 5-step checkout process that severely alienated high-net-worth fashion shoppers.',
    solution: 'Engineered a custom headless storefront with instant client-side page transitions, optimistic cart state management, edge-cached product catalogs, and seamless one-click UPI and Apple Pay checkout integration.',
    painPoints: [
      '4.8s monolithic store load time causing 68% mobile drop-off rate',
      'Cumbersome 5-step checkout process leading to cart abandonment',
      'Static image galleries failing to showcase luxury fabric textures'
    ],
    targetGoals: [
      'Achieve sub-1.0s global edge page render time on Vercel Edge',
      'Streamline checkout to 1-click instant mobile payment',
      'Boost conversion rate by at least 250% within 60 days'
    ],
    workflow: [
      { phase: 'PHASE 01', title: 'Shopify Storefront GraphQL Schema Design', desc: 'Mapped luxury apparel catalog into custom GraphQL queries for rapid data fetching.' },
      { phase: 'PHASE 02', title: 'Next.js 14 Edge Rendering & WebGL 360 Viewer', desc: 'Built dynamic fabric inspection canvas with fluid WebGL micro-interactions.' },
      { phase: 'PHASE 03', title: 'Optimistic Cart & Apple Pay / Razorpay Sync', desc: 'Implemented zero-latency client state management and 1-click checkout.' },
      { phase: 'PHASE 04', title: 'Vercel Edge Global Caching & Core Web Vitals', desc: 'Deployed edge functions to deliver sub-second response times worldwide.' }
    ],
    features: [
      'Headless Next.js 14 Storefront with Shopify GraphQL API',
      'Sub-second edge-cached page loading globally via Vercel Edge',
      'WebGL 360-degree interactive product inspector & fabric zoom',
      'Optimistic instant add-to-cart state engine without page reload',
      'Integrated native Razorpay, Apple Pay & Google Pay 1-click checkout'
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Framer Motion', 'Vercel Edge'],
    testimonial: {
      quote: 'Blink Beyond transformed our store into a high-speed digital flagship. Our conversion jumped 3.4x within 30 days of deployment!',
      author: 'Alexander Vance',
      role: 'Chief Digital Officer, LuxeCart Couture'
    },
    results: 'The headless overhaul drove ₹4.2M in monthly online revenue, slashed mobile bounce rate by 52%, and achieved a perfect 100/100 Lighthouse performance score across all mobile and desktop viewports.'
  },
  {
    id: 'webdev-2',
    category: 'webdev',
    categoryName: 'Web Development',
    title: 'NovaSaaS — AI Workflow Analytics Hub',
    tagline: 'Enterprise AI Agent Dashboard & Automation Control Canvas',
    client: 'Nova Tech AI',
    industry: 'SaaS & Enterprise AI',
    timeline: '10 Weeks (Q2 2026)',
    liveUrl: 'https://novasaas-demo.blinkbeyond.co.in',
    stats: ['100/100 Lighthouse', '+210% User Retention', '50K Active Users'],
    heroImage: 'assets/images/case-webdev-2.jpg',
    badgeText: '02 — AI WORKFLOW HUB',
    thumbnailGradient: 'linear-gradient(135deg, #0b1a28 0%, #050d18 100%)',
    accentColor: '#00d2ff',
    viewsCount: '24.1K',
    likesCount: '1.9K',
    description: 'Designed and developed a sleek, high-density dark-mode web application for AI workflow automation. Real-time WebSocket data feeds, drag-and-drop node graph canvas, and sub-100ms UI responsiveness.',
    challenge: 'Enterprise users needed a clean interface to visualize complex multi-agent AI pipelines without being overwhelmed by technical logs, laggy browser DOM renders, or complex authorization hierarchies.',
    solution: 'Implemented HTML5 Canvas node rendering for 60fps graph performance, Zustand state orchestration, and server-sent events for zero-latency AI execution tracking with customizable widgets.',
    painPoints: [
      'Heavy DOM re-renders causing freeze during 1,000+ node AI graph executions',
      'Fragmented real-time logging resulting in 12s telemetry reporting delays',
      'Cluttered light theme UI with poor contrast for dark-room AI engineers'
    ],
    targetGoals: [
      '60 FPS smooth canvas graph rendering for 5,000+ multi-agent nodes',
      'Sub-50ms WebSocket telemetry log streaming and real-time canvas updates',
      'Sleek dark glassmorphism interface optimized for high-density developer workflows'
    ],
    workflow: [
      { phase: 'PHASE 01', title: 'Node Graph Canvas Architecture & Custom Shaders', desc: 'Designed hardware-accelerated canvas renderer for complex AI execution graphs.' },
      { phase: 'PHASE 02', title: 'Zustand State Orchestration & Agent Pipelines', desc: 'Engineered lightweight client state management for multi-agent workflows.' },
      { phase: 'PHASE 03', title: 'High-throughput WebSocket Server-Sent Events', desc: 'Built real-time telemetry stream listener delivering sub-50ms updates.' },
      { phase: 'PHASE 04', title: 'Enterprise RBAC Security & Automated Exporter', desc: 'Added granular team permissions and automated executive PDF report generator.' }
    ],
    features: [
      'Real-time Canvas-rendered drag & drop node workflow editor',
      'Dark glassmorphism UI with custom accessibility color contrast',
      'WebSocket stream listener for instant AI telemetry log rendering',
      'Role-based granular team permission control panel (RBAC)',
      'Automated scheduled CSV & executive PDF analytics exporter'
    ],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas API', 'Node.js', 'WebSockets'],
    testimonial: {
      quote: 'The node canvas handles thousands of real-time AI agents effortlessly. Our developer retention skyrocketed by +210%!',
      author: 'Dr. Elena Rostova',
      role: 'VP of Engineering, Nova Tech AI'
    },
    results: 'NovaSaaS now powers 50,000 active AI engineers globally, maintaining zero UI lag during peak multi-agent orchestration loads with 100/100 Lighthouse scores.'
  },
  {
    id: 'webdev-3',
    category: 'webdev',
    categoryName: 'Web Development',
    title: 'AuraPortal — Healthcare & Telemedicine Hub',
    tagline: 'HIPAA-Compliant Patient Portal & Instant Consultation Engine',
    client: 'Aura Health Group',
    industry: 'Healthcare & Telehealth',
    timeline: '6 Weeks (Q1 2026)',
    liveUrl: 'https://auraportal-demo.blinkbeyond.co.in',
    stats: ['99.9% Server Uptime', '-45% Booking Friction', '120K Appointments'],
    heroImage: 'assets/images/case-webdev-3.jpg',
    badgeText: '03 — HEALTHCARE TELEHEALTH',
    thumbnailGradient: 'linear-gradient(135deg, #1d0f28 0%, #0d0618 100%)',
    accentColor: '#b43dff',
    viewsCount: '15.8K',
    likesCount: '980',
    description: 'An intuitive patient portal with instant WebRTC video consultations, secure digital prescription downloads, and automated WhatsApp appointment reminders.',
    challenge: 'Patients of all age groups struggled with multi-step appointment bookings and frequently lost track of past medical records, prescriptions, and follow-up consultation dates.',
    solution: 'Designed an accessible, high-contrast, multi-lingual portal featuring a 2-step booking flow, encrypted records vault, and automated SMS/WhatsApp sync.',
    painPoints: [
      'Complicated 7-step appointment booking leading to 45% drop-offs',
      'Insecure third-party video call plugins breaking during live doctor consultations',
      'Manual prescription delivery causing high support ticket volume and patient delay'
    ],
    targetGoals: [
      'Streamline appointment booking to a simple 2-step intuitive flow',
      'Native end-to-end encrypted WebRTC video consultation room in-browser',
      'Automated WhatsApp sync for instant prescription downloads and appointment reminders'
    ],
    workflow: [
      { phase: 'PHASE 01', title: 'HIPAA-Compliant UX Wireframing & Accessibility Audit', desc: 'Designed high-contrast WCAG AA screens for senior patients and mobile devices.' },
      { phase: 'PHASE 02', title: 'Custom WebRTC E2EE Video Consultation Engine', desc: 'Built secure peer-to-peer browser video calling without external plugins.' },
      { phase: 'PHASE 03', title: 'PostgreSQL Patient Vault & WhatsApp Messaging API', desc: 'Architected encrypted health records storage and automated notification dispatch.' },
      { phase: 'PHASE 04', title: 'Multi-lingual Localization & SSL Audit', desc: 'Localized interface into English, Hindi, and Marathi with 256-bit encryption.' }
    ],
    features: [
      'WebRTC end-to-end encrypted video call consultation room',
      'Smart Doctor Slot Finder with real-time calendar availability sync',
      'WhatsApp Notification Engine for instant appointment reminders & links',
      'Multi-lingual support (English, Hindi, Marathi) with instant toggle',
      'Digital prescription generator with instant QR verification code'
    ],
    techStack: ['Vue.js 3', 'Node.js', 'WebRTC', 'Tailwind CSS', 'Express.js', 'PostgreSQL'],
    testimonial: {
      quote: 'Patients love how simple it is to consult doctors and download prescriptions. Consultation booking friction dropped by 45% immediately!',
      author: 'Dr. Rajesh Sharma',
      role: 'Medical Director, Aura Health Group'
    },
    results: 'AuraPortal successfully facilitated 120,000+ patient appointments with 99.9% server uptime, reducing patient support inquiries by 60% and earning high patient satisfaction ratings.'
  },

  /* ---------------- SEO & PERFORMANCE MARKETING (3) ---------------- */
  {
    id: 'seo-ads-1',
    category: 'seo-ads',
    categoryName: 'SEO & Performance Marketing',
    title: 'GrowthScale — D2C Skincare Paid Scaling Engine',
    tagline: 'Omnichannel Meta & Google Ads Scaling Engine for D2C',
    client: 'GlowAura Skincare',
    industry: 'D2C Personal Care & Beauty',
    timeline: 'Ongoing Campaign (6 Months)',
    liveUrl: 'https://growthscale-case.blinkbeyond.co.in',
    stats: ['5.4x ROAS Achieved', '-42% Acquisition Cost', '₹1.8M Revenue Scale'],
    heroImage: 'assets/images/case-seo-1.jpg',
    badgeText: '01 — D2C PAID MEDIA',
    thumbnailGradient: 'linear-gradient(135deg, #201018 0%, #0e050a 100%)',
    accentColor: '#ff3d71',
    viewsCount: '32.6K',
    likesCount: '2.4K',
    description: 'Scaled a direct-to-consumer skincare brand from ₹2L to ₹18L monthly revenue using high-converting UGC ad creatives, Meta Advantage+, and targeted Google Shopping Performance Max campaigns.',
    challenge: 'Ad fatigue and rising customer acquisition costs (CPA) were severely eroding profitability across Meta platforms.',
    solution: 'Built an agile creative testing framework producing 15+ UGC hook variations weekly, combined with post-purchase cross-sell email & WhatsApp funnels.',
    features: [
      'UGC Hook & Angle Testing Matrix (15+ creative iterations/week)',
      'Meta Advantage+ Shopping Campaign scaling structure',
      'Google Performance Max + High-Intent Search Keyword strategy',
      'Post-purchase cross-sell funnel boosting average order value (AOV)',
      'Automated Klaviyo & WhatsApp retention sequences'
    ],
    techStack: ['Meta Ads Manager', 'Google Ads', 'Triple Whale', 'Klaviyo', 'Google Analytics 4']
  },
  {
    id: 'seo-ads-2',
    category: 'seo-ads',
    categoryName: 'SEO & Performance Marketing',
    title: 'ApexRank — Pan-India Freight Organic Dominance',
    tagline: 'Technical & Local SEO Organic Traffic Transformation',
    client: 'Apex Express Logistics',
    industry: 'Supply Chain & Freight Logistics',
    timeline: '9 Months Execution',
    liveUrl: 'https://apexrank-case.blinkbeyond.co.in',
    stats: ['Rank #1 for 45+ Keywords', '+280% Organic Traffic', '500+ Monthly Leads'],
    heroImage: 'assets/images/case-seo-2.jpg',
    badgeText: '02 — TECHNICAL & LOCAL SEO',
    thumbnailGradient: 'linear-gradient(135deg, #102418 0%, #051008 100%)',
    accentColor: '#00ffaa',
    viewsCount: '21.3K',
    likesCount: '1.6K',
    description: 'Executed a comprehensive technical, content, and local SEO campaign that propelled Apex Logistics to top Google rankings for high-intent B2B search terms across 12 major commercial hubs in India.',
    challenge: 'Zero organic search visibility for high-ticket commercial freight inquiries, making the company heavily reliant on expensive cold calling and broker margins.',
    solution: 'Fixed core web vitals, published 60+ authoritative B2B industry guides, optimized schema markup, and dominated local Google Business profiles in 12 tier-1 cities.',
    features: [
      'Comprehensive Core Web Vitals site speed & crawlability audit',
      'B2B commercial intent keyword clustering & pillar content strategy',
      'Google Map Pack local SEO optimization across 12 city hubs',
      'Programmatic location-based service landing pages',
      'High-authority B2B digital PR link acquisition'
    ],
    techStack: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console', 'Schema.org']
  },
  {
    id: 'seo-ads-3',
    category: 'seo-ads',
    categoryName: 'SEO & Performance Marketing',
    title: 'FinLead — High-Ticket B2B Lead Generation',
    tagline: 'LinkedIn InMail & Google Search Campaign for HNI Advisory',
    client: 'Vanguard Wealth Partners',
    industry: 'Financial Advisory & Wealth Management',
    timeline: '4 Months Campaign',
    liveUrl: 'https://finlead-case.blinkbeyond.co.in',
    stats: ['₹85L Pipeline Value', '3.8x Campaign ROI', '140+ CXO Inquiries'],
    heroImage: 'assets/images/case-seo-3.jpg',
    badgeText: '03 — B2B LEAD ENGINE',
    thumbnailGradient: 'linear-gradient(135deg, #181c28 0%, #0a0d14 100%)',
    accentColor: '#3d8bff',
    viewsCount: '19.7K',
    likesCount: '1.1K',
    description: 'Generated over 140 qualified HNI and CXO consultation inquiries for wealth management through hyper-targeted LinkedIn Lead Gen forms and high-intent Google Search campaigns.',
    challenge: 'Low trust and high bounce rates on generic landing pages targeting ultra-high-net-worth business owners and corporate executives.',
    solution: 'Created bespoke financial calculator landing pages paired with executive thought leadership ads on LinkedIn and branded search protection on Google.',
    features: [
      'LinkedIn Account-Based Marketing (ABM) targeting C-Suite executives',
      'Custom interactive Wealth Yield Calculator landing page',
      'Automated multi-step lead verification phone sync',
      'HubSpot CRM instant notification pipeline for advisors',
      'Sequence retargeting ads highlighting client case studies'
    ],
    techStack: ['LinkedIn Campaign Manager', 'Google Search Ads', 'HubSpot CRM', 'Zapier', 'Typeform']
  },

  /* ---------------- CONTENT & BRANDING (3) ---------------- */
  {
    id: 'branding-1',
    category: 'branding',
    categoryName: 'Content & Branding',
    title: 'Veloce — Electric Mobility Brand Identity',
    tagline: 'Futuristic Kinetic Visual System & Launch Design Kit',
    client: 'Veloce Electric Motors',
    industry: 'EV & Clean Energy Mobility',
    timeline: '12 Weeks (Q4 2025)',
    liveUrl: 'https://veloce-brand.blinkbeyond.co.in',
    stats: ['10x Brand Recall Score', '350K Launch Impressions', 'DesignWeek Featured'],
    heroImage: 'assets/images/case-brand-1.jpg',
    badgeText: '01 — EV BRAND SYSTEM',
    thumbnailGradient: 'linear-gradient(135deg, #241410 0%, #100805 100%)',
    accentColor: '#ff7b3d',
    viewsCount: '29.5K',
    likesCount: '2.1K',
    description: 'Crafted a futuristic brand identity for an EV startup, including logo design, motion typography, vehicle livery, showroom spatial graphics, and digital launch assets.',
    challenge: 'Needed a distinct, premium identity that avoided generic "green leaf" EV clichés and radiated high-performance automotive engineering.',
    solution: 'Developed an electric-neon kinetic logo system inspired by speed vectors, complete with 3D motion typography and showroom spatial design guidelines.',
    features: [
      'Kinetic Vector Logo System & Dynamic Wordmark',
      '120-page Master Brand Style Guidelines & Typography System',
      '3D Motion Graphics & Launch Teaser Reel Assets',
      'Showroom Spatial Graphics & Experience Design Blueprint',
      'Vehicle Livery & Merchandising Design System'
    ],
    techStack: ['Adobe Illustrator', 'After Effects', 'Cinema 4D', 'Figma', 'Photoshop']
  },
  {
    id: 'branding-2',
    category: 'branding',
    categoryName: 'Content & Branding',
    title: 'Kalyan Heritage — Sustainable Luxury Packaging',
    tagline: 'Heritage Storytelling & Hand-Embossed Unboxing Overhaul',
    client: 'Kalyan Textiles & Crafts',
    industry: 'Luxury Artisan Crafts & Handlooms',
    timeline: '8 Weeks Execution',
    liveUrl: 'https://kalyan-heritage.blinkbeyond.co.in',
    stats: ['+180% Retail Presence', 'Global Export Ready', '25K Brand Books'],
    heroImage: 'assets/images/case-brand-2.jpg',
    badgeText: '02 — PACKAGING & EDITORIAL',
    thumbnailGradient: 'linear-gradient(135deg, #221d10 0%, #100e06 100%)',
    accentColor: '#ffc83d',
    viewsCount: '17.2K',
    likesCount: '1.4K',
    description: 'Reimagined a 40-year-old traditional textile brand for international markets through rich editorial photography, gold-embossed packaging, and digital documentary storytelling.',
    challenge: 'A heritage brand failing to appeal to younger luxury consumers and international export boutique buyers.',
    solution: 'Blended golden ratio typography with tactile unboxing packaging experiences and documentary-style artisan films.',
    features: [
      'Gold foil hand-embossed rigid unboxing package design',
      'Artisan Documentary Mini-Film & Social Video Assets',
      'Editorial Hardcover Product Lookbook & Brand Book',
      'Digital E-Commerce Visual Style Guide',
      'Retail Boutique Window & Display Graphics Kit'
    ],
    techStack: ['Adobe InDesign', 'Lightroom', 'Premiere Pro', 'Figma', 'Photoshop']
  },
  {
    id: 'branding-3',
    category: 'branding',
    categoryName: 'Content & Branding',
    title: 'Pulse — Gen-Z Audio Campaign & Motion Kit',
    tagline: 'High-Energy Brand Positioning & Glitch Motion Graphics',
    client: 'Pulse Audio Tech',
    industry: 'Consumer Audio & Tech Accessories',
    timeline: '6 Weeks Campaign',
    liveUrl: 'https://pulse-audio.blinkbeyond.co.in',
    stats: ['4.8x Engagement Rate', 'Top 5 Audio Brand 2025', '50+ Creator Kits'],
    heroImage: 'assets/images/case-brand-3.jpg',
    badgeText: '03 — YOUTH BRAND LAUNCH',
    thumbnailGradient: 'linear-gradient(135deg, #201024 0%, #0d0610 100%)',
    accentColor: '#e03dff',
    viewsCount: '31.0K',
    likesCount: '2.8K',
    description: 'Defined the brand voice, visual aesthetics, glitch motion design pack, and unboxing PR box for noise-canceling headphones, driving viral organic adoption among Gen-Z creators.',
    challenge: 'Breaking into a saturated audio market dominated by legacy global audio giants.',
    solution: 'Positioned Pulse as the sound of urban culture with neon glitch aesthetics, hip-hop rhythm branding, and influencer PR kits.',
    features: [
      'Gen-Z Voice, Tone & Messaging Strategy Guide',
      'Glitch Motion Graphics Overlay Pack for Video Content',
      'Custom PR Influencer Unboxing Box & Holographic Sticker Kit',
      'Short-form TikTok & Instagram Reel Ad Creative Assets',
      'In-Store Standee & Festival Banner Display Graphics'
    ],
    techStack: ['Adobe After Effects', 'Photoshop', 'Figma', 'DaVinci Resolve']
  }
];

/* ---------------- SOCIAL MEDIA (INSTAGRAM REELS DATA - ALL HOME PAGE REELS) ---------------- */
window.INSTAGRAM_GRID_DATA = [
  {
    id: 'insta-1',
    type: 'reel',
    videoUrl: 'assets/media/reels/01.mp4',
    title: 'Viral Brand Teaser',
    likes: '84.2K',
    comments: '1,420',
    views: '1.2M',
    badge: 'REEL 🎬',
    caption: 'How we took brands from 0 to 1M+ impressions in 14 days 💥 Motion graphics + raw UGC angles = explosive growth! What service is your brand missing? #BlinkBeyond #DigitalAgency #GrowthHacking #ReelsViral #BrandBoom',
    audio: 'Blink Beyond Original Audio • Trending',
    date: '2 DAYS AGO'
  },
  {
    id: 'insta-2',
    type: 'reel',
    videoUrl: 'assets/media/reels/02.mp4',
    title: 'High-Impact Brand Motion Showcase',
    likes: '62.8K',
    comments: '931',
    views: '850K',
    badge: 'REEL 🎬',
    caption: 'Stop losing customers at checkout! 🛒 Psychological design triggers + dynamic motion graphics = record breaking 340% conversion uplift. Save this reel for your brand! #WebDesign #EcommerceTips #UXDesign #ConversionRate #BlinkBeyond',
    audio: 'Blink Beyond Beats • Trending Audio',
    date: '4 DAYS AGO'
  },
  {
    id: 'insta-3',
    type: 'reel',
    videoUrl: 'assets/media/reels/03.mp4',
    title: 'Inside Blink Beyond Agency Studio ⚡',
    likes: '95.1K',
    comments: '1,840',
    views: '1.5M',
    badge: 'REEL 🎬',
    caption: 'Late night strategy sessions, caffeine, and pixel-perfect renders ☕💻 This is where brands blink and boom! Drop a 💥 in the comments for a free social audit! #AgencyLife #DesignStudio #BlinkBeyond #PalgharBusiness #CreativeMinds',
    audio: 'Ambient Synthwave • Deep Focus',
    date: '1 WEEK AGO'
  },
  {
    id: 'insta-4',
    type: 'reel',
    videoUrl: 'assets/media/reels/04.mp4',
    title: 'Meta Ads vs Google Ads Strategy',
    likes: '51.4K',
    comments: '730',
    views: '720K',
    badge: 'REEL 🎬',
    caption: 'Meta Ads build demand. Google Ads capture demand. 💡 Here is the exact budget split formula we use to hit 5x+ ROAS for D2C brands. Watch till the end! #PerformanceMarketing #MetaAds #GoogleAds #DigitalMarketing #ROI',
    audio: 'Trending Business Beat • High Energy',
    date: '1 WEEK AGO'
  },
  {
    id: 'insta-5',
    type: 'reel',
    videoUrl: 'assets/media/reels/05.mp4',
    title: 'Futuristic EV Brand Identity ⚡',
    likes: '45.3K',
    comments: '510',
    views: '490K',
    badge: 'REEL 🎬',
    caption: 'Clean, futuristic, electric. ⚡ Our kinetic visual identity kit for next-gen mobility startups. Custom-drawn vector geometry and 3D motion typography! #Branding #LogoDesign #GraphicDesign #EVFuture #DesignInspiration',
    audio: 'Futuristic Cyber Ambient • Synth',
    date: '2 WEEKS AGO'
  },
  {
    id: 'insta-6',
    type: 'reel',
    videoUrl: 'assets/media/reels/06.mp4',
    title: 'SEO Audit & Technical Overhaul 🚀',
    likes: '41.0K',
    comments: '612',
    views: '610K',
    badge: 'REEL 🎬',
    caption: 'Rank #1 on Google Page 1! 🚀 10-point Technical SEO framework used by our lead engineers to dominate high-intent commercial keywords. Tag a business owner! #SEOTips #GoogleRankings #OrganicTraffic #B2BMarketing',
    audio: 'Chillhop Beats • Relaxing',
    date: '2 WEEKS AGO'
  },
  {
    id: 'insta-7',
    type: 'reel',
    videoUrl: 'assets/media/reels/07.mp4',
    title: 'Unboxing $50K Creator Kit Launch 🎁',
    likes: '78.5K',
    comments: '1,210',
    views: '980K',
    badge: 'REEL 🎬',
    caption: 'Creating an unboxing experience that creators CANNOT stop posting about! 📦✨ High-energy packaging design + viral influencer kit strategy. #Unboxing #PackagingDesign #InfluencerMarketing #BrandLaunch',
    audio: 'Viral Trap Rhythm • Bass Boosted',
    date: '3 WEEKS AGO'
  },
  {
    id: 'insta-8',
    type: 'reel',
    videoUrl: 'assets/media/reels/08.mp4',
    title: 'D2C Skincare Scaling Milestone 📈',
    likes: '68.0K',
    comments: '1,120',
    views: '890K',
    badge: 'REEL 🎬',
    caption: 'When data meets creative execution, magic happens! ✨ Scaled to ₹18 Lakhs monthly sales with a 5.4x ROAS! Onward to ₹50L revenue scale! #ClientSuccess #GrowthAgency #BlinkBeyond #ScaleYourBrand',
    audio: 'Success Motivation • Cinematic Ambient',
    date: '3 WEEKS AGO'
  },
  {
    id: 'insta-9',
    type: 'reel',
    videoUrl: 'assets/media/reels/09.mp4',
    title: 'Gen-Z Content & Motion Graphics Pack',
    likes: '89.4K',
    comments: '1,650',
    views: '1.4M',
    badge: 'REEL 🎬',
    caption: 'Why generic content fails in 2026 🛑 Authority, Entertainment, and Conversion pillars engineered into every single short-form reel video we release! #SocialMediaStrategy #ContentPillars #GrowthTips #BlinkBeyond',
    audio: 'Lofi Hip Hop Beat • Relaxing',
    date: '1 MONTH AGO'
  }
];
