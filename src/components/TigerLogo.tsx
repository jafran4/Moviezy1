import React from "react";

interface TigerLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  glow?: boolean;
  showIconOnly?: boolean;
}

export const TigerLogo: React.FC<TigerLogoProps> = ({
  className = "",
  size = "md",
  glow = true,
  showIconOnly = false,
}) => {
  // Height & scale presets for the luxury golden logo
  const sizeClasses = {
    sm: "h-9 sm:h-11 md:h-12",
    md: "h-12 sm:h-14 md:h-16",
    lg: "h-16 sm:h-20 md:h-24",
    xl: "h-24 sm:h-28 md:h-32",
    hero: "h-32 sm:h-40 md:h-48",
  };

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${sizeClasses[size]} ${className} ${
        glow
          ? "drop-shadow-[0_4px_16px_rgba(234,179,8,0.45)] hover:drop-shadow-[0_6px_24px_rgba(245,158,11,0.65)]"
          : "drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
      } transition-all duration-300`}
      aria-label="TIGER"
    >
      <svg
        viewBox={showIconOnly ? "0 0 160 160" : "0 0 460 130"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto max-h-full max-w-full overflow-visible"
      >
        <defs>
          {/* Main 24K Luxury Gold Metallic Gradient */}
          <linearGradient id="tigerGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="20%" stopColor="#F5D061" />
            <stop offset="45%" stopColor="#E5A91E" />
            <stop offset="70%" stopColor="#FDE047" />
            <stop offset="85%" stopColor="#CA8A04" />
            <stop offset="100%" stopColor="#854D0E" />
          </linearGradient>

          {/* Gold Bevel Highlight */}
          <linearGradient id="tigerGoldLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="35%" stopColor="#FDE68A" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Deep Amber Shadow */}
          <linearGradient id="tigerGoldDark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="50%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Text Horizontal Shimmer */}
          <linearGradient id="tigerTextGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EAB308" />
            <stop offset="25%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#CA8A04" />
            <stop offset="75%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>

          {/* Glowing Ambient Filter */}
          <filter id="goldAura" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ==================================================== */}
        {/* TIGER CREST EMBLEM (Geometric Luxury Gold Tiger Face) */}
        {/* ==================================================== */}
        <g id="tiger-emblem" transform={showIconOnly ? "translate(15, 5)" : "translate(6, 6)"}>
          {/* Shield / Diamond Backplate Contour */}
          <polygon
            points="60,4 108,30 114,78 60,118 6,78 12,30"
            fill="url(#tigerGoldDark)"
            stroke="url(#tigerGoldLight)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Outer Tiger Head Facets (Gold Shimmer) */}
          {/* Left Forehead & Ear */}
          <polygon
            points="60,16 32,22 18,38 34,48 46,38 60,42"
            fill="url(#tigerGoldMain)"
            stroke="#FFF2B2"
            strokeWidth="0.75"
          />
          {/* Right Forehead & Ear */}
          <polygon
            points="60,16 88,22 102,38 86,48 74,38 60,42"
            fill="url(#tigerGoldLight)"
            stroke="#FFF2B2"
            strokeWidth="0.75"
          />

          {/* Ear Inner Accents */}
          <polygon points="26,28 36,32 30,42" fill="#78350F" />
          <polygon points="94,28 84,32 90,42" fill="#78350F" />

          {/* Crown Forehead Center Diamond Stripe */}
          <polygon points="60,18 68,36 60,54 52,36" fill="url(#tigerGoldLight)" stroke="#FFFFFF" strokeWidth="0.5" />
          <polygon points="60,26 64,36 60,46 56,36" fill="#451A03" />

          {/* Forehead Side Slash Stripes */}
          <polygon points="44,28 50,38 42,42" fill="#451A03" />
          <polygon points="76,28 70,38 78,42" fill="#451A03" />

          {/* Cheeks - Left */}
          <polygon
            points="18,48 40,52 30,72 12,74 20,60"
            fill="url(#tigerGoldMain)"
            stroke="#FFF2B2"
            strokeWidth="0.5"
          />
          <polygon points="24,54 36,58 28,68" fill="#451A03" />

          {/* Cheeks - Right */}
          <polygon
            points="102,48 80,52 90,72 108,74 100,60"
            fill="url(#tigerGoldLight)"
            stroke="#FFF2B2"
            strokeWidth="0.5"
          />
          <polygon points="96,54 84,58 92,68" fill="#451A03" />

          {/* Fierce Eyes */}
          {/* Left Eye Socket & Eye */}
          <polygon points="34,48 50,48 48,58 32,56" fill="#1C1917" />
          <polygon points="36,50 48,50 44,55 36,54" fill="#F59E0B" />
          <polygon points="40,51 44,51 42,54" fill="#FFFFFF" />

          {/* Right Eye Socket & Eye */}
          <polygon points="86,48 70,48 72,58 88,56" fill="#1C1917" />
          <polygon points="84,50 72,50 76,55 84,54" fill="#F59E0B" />
          <polygon points="80,51 76,51 78,54" fill="#FFFFFF" />

          {/* Nose Bridge & Snout */}
          <polygon points="60,44 68,64 60,74 52,64" fill="url(#tigerGoldMain)" />
          <polygon points="56,66 64,66 60,74" fill="#292524" />

          {/* Upper Muzzle & Whiskers Plate */}
          <polygon points="42,70 54,68 60,76 48,84" fill="url(#tigerGoldLight)" />
          <polygon points="78,70 66,68 60,76 72,84" fill="url(#tigerGoldMain)" />

          {/* Whiskers Slits */}
          <circle cx="48" cy="74" r="1.2" fill="#451A03" />
          <circle cx="44" cy="77" r="1.2" fill="#451A03" />
          <circle cx="72" cy="74" r="1.2" fill="#451A03" />
          <circle cx="76" cy="77" r="1.2" fill="#451A03" />

          {/* Roaring Fangs & Open Jaws */}
          <polygon points="46,84 74,84 68,102 60,108 52,102" fill="#1C1917" />
          {/* Upper Fangs */}
          <polygon points="48,84 53,84 51,93" fill="#FFFBEB" />
          <polygon points="72,84 67,84 69,93" fill="#FFFBEB" />
          {/* Lower Fangs */}
          <polygon points="53,101 56,101 55,95" fill="#FFFBEB" />
          <polygon points="67,101 64,101 65,95" fill="#FFFBEB" />
          {/* Tongue/Mouth Glow */}
          <polygon points="56,92 64,92 60,98" fill="#B91C1C" />

          {/* Lower Chin */}
          <polygon
            points="48,104 60,114 72,104 60,98"
            fill="url(#tigerGoldLight)"
            stroke="#FEF08A"
            strokeWidth="0.5"
          />
        </g>

        {/* ==================================================== */}
        {/* LUXURY GOLDEN TYPOGRAPHY: "TIGER"                    */}
        {/* ==================================================== */}
        {!showIconOnly && (
          <g id="tiger-text" transform="translate(138, 14)">
            {/* Beveled 3D Shadow Layer */}
            <text
              x="0"
              y="74"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Impact', sans-serif"
              fontSize="70"
              fontWeight="900"
              letterSpacing="6"
              fill="url(#tigerGoldDark)"
              stroke="#451A03"
              strokeWidth="5"
              strokeLinejoin="round"
            >
              TIGER
            </text>

            {/* Middle Metallic Gold Base */}
            <text
              x="0"
              y="72"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Impact', sans-serif"
              fontSize="70"
              fontWeight="900"
              letterSpacing="6"
              fill="url(#tigerGoldMain)"
              stroke="url(#tigerGoldLight)"
              strokeWidth="2.5"
              strokeLinejoin="round"
            >
              TIGER
            </text>

            {/* Top Gloss & Chrome Reflection Layer */}
            <text
              x="0"
              y="71"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Impact', sans-serif"
              fontSize="70"
              fontWeight="900"
              letterSpacing="6"
              fill="url(#tigerTextGold)"
            >
              TIGER
            </text>

            {/* Sub-bar / Premium Golden Accent Underline */}
            <rect
              x="2"
              y="86"
              width="248"
              height="4.5"
              rx="2.25"
              fill="url(#tigerGoldMain)"
            />
            {/* Golden Star / Diamond Accent in underline */}
            <polygon
              points="126,81 129,88.5 136,88.5 130.5,93 133,100 126,95.5 119,100 121.5,93 116,88.5 123,88.5"
              fill="url(#tigerGoldLight)"
              stroke="#FFFBEB"
              strokeWidth="0.5"
            />

            {/* Small Golden Badge (ULTRA 4K STREAMING) */}
            <text
              x="4"
              y="105"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="9.5"
              fontWeight="800"
              letterSpacing="3.5"
              fill="#D97706"
              opacity="0.9"
            >
              ULTRA 4K OTT STREAMING
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default TigerLogo;


