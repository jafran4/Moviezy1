import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

// 1. NETFLIX OFFICIAL LOGO
export const NetflixBrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClass =
    size === "sm" ? "h-5" : size === "md" ? "h-7" : size === "lg" ? "h-9" : "h-12";
  return (
    <div className={`inline-flex items-center justify-center ${sizeClass} ${className}`}>
      <svg
        viewBox="0 0 111 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <path
          d="M105.062 14.28L111 30H106.188L102.75 20.916L99.281 30H94.5L100.438 14.28L94.906 0H99.719L102.75 8.784L105.844 0H110.594L105.062 14.28ZM90.469 0V30H85.781V0H90.469ZM81.562 4.188H73.344V12.984H80.531V17.172H73.344V30H68.656V0H81.562V4.188ZM64.594 4.188H57.781V30H53.094V4.188H46.281V0H64.594V4.188ZM42.375 0V30H37.688V17.172H30.5V30H25.812V0H30.5V12.984H37.688V0H42.375ZM22 0V30H17.312V4.188H9.5V0H22ZM0 0L5.75 16.5L0 30H4.688L8.125 20.062L11.531 30H16.25L10.5 13.5L16.25 0H11.531L8.125 9.938L4.688 0H0Z"
          fill="#E50914"
        />
      </svg>
    </div>
  );
};

// 2. AMAZON PRIME VIDEO OFFICIAL LOGO
export const PrimeVideoBrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClass =
    size === "sm" ? "h-5" : size === "md" ? "h-7" : size === "lg" ? "h-9" : "h-12";
  return (
    <div className={`inline-flex items-center justify-center ${sizeClass} ${className}`}>
      <svg
        viewBox="0 0 160 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* "prime video" typography */}
        <text
          x="4"
          y="28"
          fill="#00A8E1"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="24"
          letterSpacing="-0.5"
        >
          prime
        </text>
        <text
          x="72"
          y="28"
          fill="#0F172A"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="400"
          fontSize="24"
          letterSpacing="0"
        >
          video
        </text>
        {/* Signature Amazon smile curve */}
        <path
          d="M6 38 C 30 49, 70 48, 86 37"
          stroke="#00A8E1"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Smile arrow tip */}
        <path
          d="M84 32 L91 38 L84 43 Z"
          fill="#00A8E1"
        />
      </svg>
    </div>
  );
};

// 3. LIVE TV CHANNELS LOGO
export const LiveTVBrandLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClass =
    size === "sm" ? "h-6" : size === "md" ? "h-8" : size === "lg" ? "h-10" : "h-12";
  return (
    <div className={`inline-flex items-center space-x-1.5 ${sizeClass} ${className}`}>
      <div className="flex items-center justify-center bg-gradient-to-tr from-rose-600 to-red-500 text-white rounded-lg px-2 py-1 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse mr-1.5" />
        <span className="font-black text-xs tracking-wider uppercase">LIVE</span>
      </div>
      <span className="font-black text-neutral-900 tracking-tight text-sm sm:text-base">
        TV 4K
      </span>
    </div>
  );
};

// 4. UEFA CHAMPIONS LEAGUE (UCL) LOGO
export const UCLLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClass =
    size === "sm" ? "h-7" : size === "md" ? "h-9" : size === "lg" ? "h-11" : "h-14";
  return (
    <div className={`inline-flex items-center space-x-2 ${sizeClass} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square flex-shrink-0"
      >
        <circle cx="50" cy="50" r="48" fill="#0B1A40" stroke="#2563EB" strokeWidth="2.5" />
        {/* Iconic UCL 8 Starball pattern */}
        <g fill="#FFFFFF">
          {/* Top Star */}
          <polygon points="50,14 53,24 64,24 55,30 58,40 50,34 42,40 45,30 36,24 47,24" />
          {/* Top Right Star */}
          <polygon points="76,26 77,36 88,38 79,43 81,54 73,47 66,52 70,42 62,37 72,37" />
          {/* Right Star */}
          <polygon points="86,52 83,62 92,68 82,70 80,81 74,72 65,75 72,66 67,58 77,61" />
          {/* Bottom Right Star */}
          <polygon points="68,78 63,86 70,95 60,93 54,102 51,92 42,92 48,84 45,75 54,80" />
          {/* Bottom Star */}
          <polygon points="38,82 34,91 40,100 31,96 24,103 23,93 14,91 21,84 19,75 28,81" />
          {/* Bottom Left Star */}
          <polygon points="18,60 13,69 21,76 11,76 7,86 4,76 -5,76 3,70 -1,61 8,65" />
          {/* Top Left Star */}
          <polygon points="26,30 25,40 14,42 23,48 20,59 29,53 36,58 33,48 41,43 31,43" />
        </g>
        <circle cx="50" cy="50" r="18" fill="#09142E" stroke="#3B82F6" strokeWidth="1" />
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fill="#60A5FA"
          fontSize="9"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.5"
        >
          UEFA
        </text>
      </svg>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-extrabold text-blue-900 tracking-wider uppercase">
          CHAMPIONS
        </span>
        <span className="text-xs sm:text-sm font-black text-blue-950 tracking-tight">
          LEAGUE
        </span>
      </div>
    </div>
  );
};

// 5. PREMIER LEAGUE (EPL) LOGO
export const PremierLeagueLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClass =
    size === "sm" ? "h-7" : size === "md" ? "h-9" : size === "lg" ? "h-11" : "h-14";
  return (
    <div className={`inline-flex items-center space-x-2 ${sizeClass} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square flex-shrink-0"
      >
        <rect width="100" height="100" rx="24" fill="#38003C" />
        {/* Crowned Lion Head of Premier League in Cyan/White */}
        <g fill="#00FF87">
          {/* Crown */}
          <path d="M30 26 L38 34 L50 20 L62 34 L70 26 L66 42 L34 42 Z" />
          {/* Lion Mane & Face */}
          <path d="M24 44 C20 54, 22 66, 32 74 C36 78, 42 82, 50 82 C58 82, 64 78, 68 74 C78 66, 80 54, 76 44 C72 40, 68 38, 62 44 C58 48, 54 48, 50 48 C46 48, 42 48, 38 44 C32 38, 28 40, 24 44 Z" />
          {/* Eyes & Snout details in deep purple */}
          <circle cx="42" cy="56" r="3" fill="#38003C" />
          <circle cx="58" cy="56" r="3" fill="#38003C" />
          <path d="M46 66 L54 66 L50 72 Z" fill="#38003C" />
        </g>
      </svg>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-extrabold text-purple-900 tracking-wider uppercase">
          PREMIER
        </span>
        <span className="text-xs sm:text-sm font-black text-purple-950 tracking-tight">
          LEAGUE
        </span>
      </div>
    </div>
  );
};

// 6. SPANISH LEAGUE (LALIGA EA SPORTS) LOGO
export const LaLigaLogo: React.FC<BrandLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClass =
    size === "sm" ? "h-7" : size === "md" ? "h-9" : size === "lg" ? "h-11" : "h-14";
  return (
    <div className={`inline-flex items-center space-x-2 ${sizeClass} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square flex-shrink-0"
      >
        <rect width="100" height="100" rx="24" fill="#FF4B44" />
        {/* Modern Double LL Stylized Mark */}
        <g fill="#FFFFFF">
          <path d="M28 22 L40 22 L40 64 L60 64 L60 76 L28 76 Z" />
          <path d="M48 22 L60 22 L60 52 L74 52 L74 64 L48 64 Z" />
        </g>
      </svg>
      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] font-extrabold text-red-900 tracking-wider uppercase">
          LALIGA
        </span>
        <span className="text-xs sm:text-sm font-black text-red-950 tracking-tight">
          EA SPORTS
        </span>
      </div>
    </div>
  );
};
