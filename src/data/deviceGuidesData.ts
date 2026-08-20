export interface DeviceGuideItem {
  id: string;
  brand: string;
  name: string;
  category: "tv" | "laptop" | "streaming_device" | "general";
  keywords: string[];
  os: string;
  appStore: string;
  appTitle: string;
  icon: string;
  badgeColor: string;
  image: string;
  summary: string;
  stepByStep: string[];
  notes?: string;
  verifiedPublisher?: string;
  videoEmbedUrl?: string;
}

export const DEVICE_GUIDES: DeviceGuideItem[] = [
  {
    id: "guide-lg-tv",
    brand: "LG",
    name: "LG Smart TV (webOS / OLED / QNED / NanoCell)",
    category: "tv",
    keywords: [
      "lg",
      "lg tv",
      "webos",
      "oled",
      "qned",
      "nanocell",
      "lg smart tv",
      "lg apps",
      "lg content store",
      "lg iptv",
      "download lg",
      "smarters on lg",
      "install lg"
    ],
    os: "LG webOS",
    appStore: "LG Content Store / Apps",
    appTitle: "IPTV Smarters Pro",
    icon: "Tv",
    badgeColor: "bg-pink-600 text-white",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&auto=format&fit=crop&q=80",
    summary: "Download IPTV Smarters Pro directly from the LG Content Store on webOS-powered LG Smart TVs.",
    stepByStep: [
      "Press the Home button on your LG Magic Remote to launch the dashboard.",
      "Navigate to and open the 'LG Content Store' (or 'Apps' icon on newer webOS).",
      "Click the Search icon (magnifying glass) at the top right.",
      "Type 'IPTV Smarters Pro' and select the official app from the search results.",
      "Click 'Install' and wait for the download to finish.",
      "Open the app, select 'Login with Xtream Codes API', and enter your Tiger OTT credentials."
    ],
    notes: "If IPTV Smarters is region-restricted in your LG Content Store, you can connect an Amazon Fire TV Stick or Google Chromecast to an HDMI port.",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/5kOQ6k5tWkQ"
  },
  {
    id: "guide-samsung-tv",
    brand: "Samsung",
    name: "Samsung Smart TV (Tizen OS / QLED / Neo QLED / Crystal UHD)",
    category: "tv",
    keywords: [
      "samsung",
      "samsung tv",
      "tizen",
      "tizen os",
      "smart hub",
      "qled",
      "neo qled",
      "crystal uhd",
      "samsung smart tv",
      "samsung apps",
      "download samsung",
      "smarters on samsung",
      "install samsung"
    ],
    os: "Samsung Tizen OS",
    appStore: "Samsung Smart Hub Apps",
    appTitle: "IPTV Smarters Pro / Smarters Player",
    icon: "Tv",
    badgeColor: "bg-blue-600 text-white",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80",
    summary: "Install IPTV Smarters Pro on Samsung Tizen OS Smart TVs via the Smart Hub Apps marketplace.",
    stepByStep: [
      "Press the Smart Hub or Home button on your Samsung One Remote.",
      "Scroll to and select 'Apps'.",
      "Click the Search icon at the top corner of the Samsung Apps screen.",
      "Type 'IPTV Smarters Pro' or 'Smarters Player'.",
      "Select the app and click the 'Install' (or 'Download') button.",
      "Once installed, click 'Open', agree to terms, and log in with your Tiger OTT M3U/Xtream credentials."
    ],
    notes: "For older Samsung models (prior to 2018) that lack native store availability, plug an Amazon Firestick into an HDMI port.",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "guide-google-android-tv",
    brand: "Google / Sony / TCL / Philips / Hisense",
    name: "Google TV & Android TV (Sony, TCL, Philips, Hisense, Xiaomi)",
    category: "tv",
    keywords: [
      "google",
      "google tv",
      "android",
      "android tv",
      "sony",
      "sony tv",
      "bravia",
      "tcl",
      "tcl tv",
      "philips",
      "philips tv",
      "hisense",
      "hisense tv",
      "xiaomi",
      "mi tv",
      "chromecast",
      "nvidia shield",
      "google play",
      "play store",
      "download google tv",
      "smarters on sony",
      "smarters on tcl"
    ],
    os: "Google TV / Android TV OS",
    appStore: "Google Play Store",
    appTitle: "IPTV Smarters Pro",
    icon: "Tv",
    badgeColor: "bg-emerald-600 text-white",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80",
    summary: "Download IPTV Smarters Pro directly from Google Play Store on Sony, TCL, Philips, Hisense, and Chromecast.",
    stepByStep: [
      "Turn on your TV and navigate to the 'Apps' tab or open 'Google Play Store'.",
      "Click Search or speak 'IPTV Smarters Pro' into your voice remote.",
      "Locate IPTV Smarters Pro in the search results.",
      "Click 'Install'.",
      "Open the application, choose 'Login with Xtream Codes API', and enter your Tiger OTT Server URL, Username, and Password."
    ],
    notes: "Supports 4K UHD 60FPS streams, electronic program guide (EPG), and multi-screen view.",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/5kOQ6k5tWkQ"
  },
  {
    id: "guide-firestick",
    brand: "Amazon",
    name: "Amazon Fire TV Stick (Firestick 4K Max / Lite / Cube)",
    category: "streaming_device",
    keywords: [
      "firestick",
      "fire tv",
      "fire stick",
      "amazon fire",
      "firestick 4k",
      "firestick max",
      "fire cube",
      "amazon firestick",
      "downloader",
      "downloader app",
      "sideload firestick",
      "download firestick"
    ],
    os: "Fire OS",
    appStore: "Amazon Appstore / Downloader",
    appTitle: "IPTV Smarters Pro / Downloader Sideload",
    icon: "Tv",
    badgeColor: "bg-amber-600 text-white",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80",
    summary: "Install IPTV Smarters Pro on any Amazon Firestick 4K or Fire TV Cube with 1-click Downloader setup.",
    stepByStep: [
      "From Firestick Home, go to Find > Search and type 'Downloader'.",
      "Download and install the orange 'Downloader' app from the Amazon Appstore.",
      "Go to Settings > My Fire TV > Developer Options > Install Unknown Apps > Turn ON for Downloader.",
      "Open Downloader, enter the quick Smarters download code or URL, and click Go.",
      "Click 'Install' when prompted, then open IPTV Smarters Pro and log in with your Tiger OTT account."
    ],
    notes: "Amazon Firestick 4K Max is the #1 recommended hardware for buttery smooth 60 FPS sports streaming.",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/5kOQ6k5tWkQ"
  },
  {
    id: "guide-windows-laptop",
    brand: "Windows / PC",
    name: "Windows Laptops & PCs (Microsoft / HP / Dell / Lenovo / Asus / Acer)",
    category: "laptop",
    keywords: [
      "windows",
      "pc",
      "laptop",
      "computer",
      "desktop",
      "microsoft",
      "microsoft store",
      "hp",
      "dell",
      "lenovo",
      "asus",
      "acer",
      "thinkpad",
      "windows 11",
      "windows 10",
      "download pc",
      "download laptop",
      "smarters for windows",
      "smarters pc"
    ],
    os: "Windows 11 / 10",
    appStore: "Microsoft Store",
    appTitle: "Smarters IPTV Pro / IPTV Smarters Pro",
    icon: "Laptop",
    badgeColor: "bg-cyan-600 text-white",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80",
    summary: "Download IPTV Smarters Pro on Windows 11/10 laptops and PCs directly from the official Microsoft Store.",
    stepByStep: [
      "Open the 'Microsoft Store' app on your Windows PC or laptop.",
      "Search for 'Smarters IPTV Pro' or 'IPTV Smarters Pro' in the top search bar.",
      "Verify the publisher is listed as 'SmartersPlayer LLC' or 'AI Tools Apps SRL'.",
      "Click 'Get' or 'Install' to download the desktop application.",
      "Launch the app, accept the license terms, and enter your Tiger OTT Xtream Codes or M3U playlist link."
    ],
    verifiedPublisher: "SmartersPlayer LLC / AI Tools Apps SRL",
    notes: "Supports external hardware acceleration (NVIDIA / AMD / Intel) for zero-lag 4K playback.",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/kJQP7kiw5Fk"
  },
  {
    id: "guide-mac-apple",
    brand: "Apple Mac",
    name: "Apple Laptops & Desktops (MacBook Air / Pro / iMac / Mac mini)",
    category: "laptop",
    keywords: [
      "mac",
      "macbook",
      "macbook air",
      "macbook pro",
      "apple",
      "imac",
      "mac mini",
      "mac studio",
      "macos",
      "mac app store",
      "download mac",
      "download macbook",
      "smarters on mac",
      "apple laptop"
    ],
    os: "Apple macOS",
    appStore: "Mac App Store",
    appTitle: "IPTV Smarters Pro",
    icon: "Laptop",
    badgeColor: "bg-neutral-800 text-white",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    summary: "Install IPTV Smarters Pro on Apple MacBook Air, MacBook Pro, and iMac directly from the Mac App Store.",
    stepByStep: [
      "Open the 'App Store' application on your Mac.",
      "Search for 'IPTV Smarters Pro' in the upper search field.",
      "Locate the app and click 'Get' (or the cloud download icon).",
      "Authorize with Touch ID or your Apple ID password.",
      "Open IPTV Smarters Pro from Launchpad or Applications and enter your Tiger OTT credentials."
    ],
    notes: "Runs natively on Apple Silicon (M1, M2, M3, M4) with ultra-low battery consumption.",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/kJQP7kiw5Fk"
  },
  {
    id: "guide-roku-legacy",
    brand: "Roku",
    name: "Roku TV / TCL Roku / Hisense Roku & Older Non-Android TVs",
    category: "tv",
    keywords: [
      "roku",
      "roku tv",
      "tcl roku",
      "hisense roku",
      "sharp roku",
      "insignia",
      "onn tv",
      "download roku",
      "smarters on roku",
      "iptv roku"
    ],
    os: "Roku OS (Proprietary)",
    appStore: "External HDMI Streaming Player Required",
    appTitle: "IPTV Smarters via Amazon Firestick / Apple TV",
    icon: "Tv",
    badgeColor: "bg-purple-600 text-white",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80",
    summary: "Roku OS does not natively support IPTV Smarters sideloading. Easily connect an external HDMI streaming stick to watch.",
    stepByStep: [
      "Roku OS operates as a closed sandbox that blocks M3U/Xtream IPTV players like Smarters Pro.",
      "Solution: Plug an Amazon Fire TV Stick ($29) or Google Chromecast with Google TV into an open HDMI port on your Roku TV.",
      "Switch your TV source/input to HDMI 1 or HDMI 2.",
      "Install IPTV Smarters Pro on the Firestick or Chromecast via its app store.",
      "Enjoy full 4K live streaming, catch-up TV, and VOD on your TV screen."
    ],
    notes: "We recommend the Fire TV Stick 4K for Roku TV owners who want instant access to all 25,000+ Tiger OTT channels."
  },
  {
    id: "guide-general-download",
    brand: "IPTV Smarters Pro",
    name: "IPTV Smarters Pro - Universal Download & Setup Guide",
    category: "general",
    keywords: [
      "download",
      "how to download",
      "install",
      "smarters",
      "iptv smarters",
      "iptv smarters pro",
      "smarters pro",
      "iptv player",
      "iptv app",
      "setup",
      "how to install",
      "how to setup",
      "xtream",
      "xtream codes",
      "m3u",
      "m3u playlist",
      "iptv",
      "ott",
      "tiger ott",
      "subscription",
      "price",
      "buy"
    ],
    os: "All Platforms (TV, Firestick, PC, Mac, Android, iOS)",
    appStore: "Google Play / App Store / Microsoft Store / LG / Samsung",
    appTitle: "IPTV Smarters Pro Official",
    icon: "Download",
    badgeColor: "bg-amber-500 text-black",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80",
    summary: "Complete master guide on how to download and configure IPTV Smarters Pro on all Smart TVs, laptops, and streaming devices.",
    stepByStep: [
      "Select your device marketplace (Google Play on Android TV/Sony/TCL; Samsung Apps on Samsung; LG Store on LG; Microsoft Store on PC; App Store on Mac).",
      "Search for 'IPTV Smarters Pro'.",
      "Download and install the official release.",
      "Open the app and select 'Login with Xtream Codes API' (recommended).",
      "Enter: 1) Any name (e.g., Tiger OTT), 2) Username, 3) Password, 4) Server URL provided in your subscription.",
      "Click 'Add User' and start enjoying live TV, sports, movies, and TV series in 4K."
    ],
    notes: "Need fast help? Message us on Facebook with your TV or laptop model for immediate 1-on-1 step-by-step setup!",
    videoEmbedUrl: "https://www.youtube-nocookie.com/embed/5kOQ6k5tWkQ"
  }
];

export function searchDeviceGuides(query: string): DeviceGuideItem[] {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  const terms = q.split(/\s+/).filter(Boolean);

  return DEVICE_GUIDES.filter((guide) => {
    // Exact or partial brand match
    if (guide.brand.toLowerCase().includes(q) || q.includes(guide.brand.toLowerCase())) return true;
    if (guide.name.toLowerCase().includes(q)) return true;
    if (guide.os.toLowerCase().includes(q)) return true;
    if (guide.appStore.toLowerCase().includes(q)) return true;

    // Check all keywords
    const matchesKeyword = guide.keywords.some((kw) => {
      if (kw === q) return true;
      if (q.includes(kw) || kw.includes(q)) return true;
      return terms.some((term) => kw.includes(term) || term.includes(kw));
    });

    if (matchesKeyword) return true;

    // Text search in summary
    return terms.some((term) => guide.summary.toLowerCase().includes(term));
  });
}
