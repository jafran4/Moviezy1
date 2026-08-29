/**
 * Ensures the Tiger OTT Golden Crest Logo is always visible on the Chrome and browser tab bar.
 */
export function ensureTigerFavicon() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF7CD" />
        <stop offset="25%" stop-color="#F5D061" />
        <stop offset="50%" stop-color="#E5A91E" />
        <stop offset="75%" stop-color="#FDE047" />
        <stop offset="100%" stop-color="#854D0E" />
      </linearGradient>
      <linearGradient id="goldLight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="40%" stop-color="#FDE68A" />
        <stop offset="80%" stop-color="#D97706" />
        <stop offset="100%" stop-color="#78350F" />
      </linearGradient>
      <linearGradient id="goldDark" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1C1917" />
        <stop offset="50%" stop-color="#451A03" />
        <stop offset="100%" stop-color="#92400E" />
      </linearGradient>
      <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#18181B" />
        <stop offset="85%" stop-color="#09090B" />
        <stop offset="100%" stop-color="#000000" />
      </radialGradient>
    </defs>
    <circle cx="64" cy="64" r="62" fill="url(#bgGlow)" stroke="url(#goldGradient)" stroke-width="3.5" />
    <circle cx="64" cy="64" r="57" fill="none" stroke="#F5D061" stroke-width="0.75" opacity="0.6" />
    <g transform="translate(64, 62) scale(0.82) translate(-60, -60)">
      <polygon points="60,6 106,30 112,76 60,116 8,76 14,30" fill="url(#goldDark)" stroke="url(#goldLight)" stroke-width="3" stroke-linejoin="round" />
      <polygon points="60,18 34,24 20,40 36,48 48,38 60,42" fill="url(#goldGradient)" stroke="#FFF7CD" stroke-width="0.8" />
      <polygon points="60,18 86,24 100,40 84,48 72,38 60,42" fill="url(#goldLight)" stroke="#FFF7CD" stroke-width="0.8" />
      <polygon points="28,30 36,34 30,42" fill="#78350F" />
      <polygon points="92,30 84,34 90,42" fill="#78350F" />
      <polygon points="60,20 68,36 60,54 52,36" fill="url(#goldLight)" stroke="#FFFFFF" stroke-width="0.6" />
      <polygon points="60,28 64,36 60,46 56,36" fill="#451A03" />
      <polygon points="46,30 51,38 43,42" fill="#451A03" />
      <polygon points="74,30 69,38 77,42" fill="#451A03" />
      <polygon points="20,50 42,54 32,72 14,74 22,60" fill="url(#goldGradient)" stroke="#FFF7CD" stroke-width="0.6" />
      <polygon points="26,56 38,60 30,68" fill="#451A03" />
      <polygon points="100,50 78,54 88,72 106,74 98,60" fill="url(#goldLight)" stroke="#FFF7CD" stroke-width="0.6" />
      <polygon points="94,56 82,60 90,68" fill="#451A03" />
      <polygon points="34,48 50,48 48,58 32,56" fill="#09090B" />
      <polygon points="36,50 48,50 44,55 36,54" fill="#F59E0B" />
      <polygon points="40,51 44,51 42,54" fill="#FFFFFF" />
      <polygon points="86,48 70,48 72,58 88,56" fill="#09090B" />
      <polygon points="84,50 72,50 76,55 84,54" fill="#F59E0B" />
      <polygon points="80,51 76,51 78,54" fill="#FFFFFF" />
      <polygon points="60,44 68,64 60,74 52,64" fill="url(#goldGradient)" />
      <polygon points="56,66 64,66 60,74" fill="#1C1917" />
      <polygon points="44,70 54,68 60,76 48,84" fill="url(#goldLight)" />
      <polygon points="76,70 66,68 60,76 72,84" fill="url(#goldGradient)" />
      <polygon points="46,84 74,84 68,102 60,108 52,102" fill="#09090B" />
      <polygon points="48,84 53,84 51,93" fill="#FFFBEB" />
      <polygon points="72,84 67,84 69,93" fill="#FFFBEB" />
      <polygon points="53,101 56,101 55,95" fill="#FFFBEB" />
      <polygon points="67,101 64,101 65,95" fill="#FFFBEB" />
      <polygon points="56,92 64,92 60,98" fill="#DC2626" />
      <polygon points="48,104 60,114 72,104 60,98" fill="url(#goldLight)" stroke="#FEF08A" stroke-width="0.6" />
    </g>
  </svg>`;

  try {
    const svgBlob = new Blob([svgContent], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);

    // Update or create favicon link elements
    const linkTypes = [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "shortcut icon", type: "image/svg+xml", href: svgUrl },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
    ];

    linkTypes.forEach(({ rel, type, href }) => {
      let link = document.querySelector(`link[rel*='${rel}']`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        if (type) link.type = type;
        document.head.appendChild(link);
      }
      link.href = href;
    });

    // Also draw to a 64x64 canvas to generate a high-res PNG data URI fallback for browsers requiring PNG
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgContent);
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, 64, 64);
          const pngDataUrl = canvas.toDataURL("image/png");
          
          let pngLink = document.querySelector("link[rel='icon'][type='image/png']") as HTMLLinkElement | null;
          if (!pngLink) {
            pngLink = document.createElement("link");
            pngLink.rel = "icon";
            pngLink.type = "image/png";
            document.head.appendChild(pngLink);
          }
          pngLink.href = pngDataUrl;
        }
      } catch (err) {
        console.debug("Canvas favicon fallback skipped:", err);
      }
    };
  } catch (err) {
    console.debug("Favicon setup error:", err);
  }
}
