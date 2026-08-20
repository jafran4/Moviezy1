import React, { useState } from "react";
import {
  Tv,
  Film,
  Clapperboard,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle2,
  Crown,
  Play,
  ArrowRight,
  TrendingUp,
  Flame,
  Layers,
  Radio,
  Trophy,
  Check,
  ExternalLink,
  Facebook
} from "lucide-react";
import { OTTPlan, OTTService } from "../types";
import { TIGER_OTT_SERVICE, OFFICIAL_FACEBOOK_PAGE } from "./TigerSubscriptionSection";

interface TigerOfferingsShowcaseProps {
  onSelectPlan?: (plan: OTTPlan, service: OTTService) => void;
  onOpenStore?: () => void;
}

export const TigerOfferingsShowcase: React.FC<TigerOfferingsShowcaseProps> = ({
  onSelectPlan,
  onOpenStore,
}) => {
  const [activeCategory, setActiveCategory] = useState<"all" | "iptv" | "vod" | "ott" | "sports">("all");

  const handleCtaClick = () => {
    const el = document.getElementById("tiger-ott-subscription");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (onOpenStore) {
      onOpenStore();
    }
  };

  const offerings = [
    {
      id: "iptv-live",
      category: "iptv",
      badge: "Flagship Service",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      title: "IPTV / Live TV Service",
      highlight: "20,000+ Live Channels Worldwide",
      description:
        "Crystal-clear 4K UHD & Full HD live broadcasting with zero buffering. Engineered with tier-1 anti-freeze CDN edge servers, real-time Electronic Program Guide (EPG), and 99.9% server uptime.",
      stats: [
        { label: "Live Channels", value: "20,000+" },
        { label: "Broadcast Quality", value: "4K / 60FPS" },
        { label: "Anti-Freeze CDN", value: "Tier-1 Cloud" },
      ],
      features: [
        "USA, UK, Canada, Europe, Arab, Asian & Global local channels",
        "Interactive Electronic Program Guide (EPG) with Catch-Up TV",
        "Multi-screen simultaneous streaming on Smart TVs, Firestick & Mobile",
        "Instant automated setup & activation within 60 seconds",
      ],
      icon: Tv,
      iconBg: "bg-amber-500/10 text-amber-600 border-amber-200",
      featured: true,
    },
    {
      id: "movies-catalog",
      category: "vod",
      badge: "Daily Updates",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300",
      title: "50,000+ Movies (VOD)",
      highlight: "Massive 4K Ultra HD & Dolby Cinema Library",
      description:
        "Unlimited instant on-demand access to over 50,000 blockbuster movies ranging from the newest theatrical releases to timeless classics with multi-language audio tracks and subtitles.",
      stats: [
        { label: "Movie Titles", value: "50,000+" },
        { label: "Video Quality", value: "4K HDR10+" },
        { label: "Audio", value: "Dolby Atmos" },
      ],
      features: [
        "Latest cinema releases added within 24 hours of availability",
        "Complete collections: Hollywood, Bollywood, International & Indie",
        "True 4K Ultra HD, HDR10, and Dolby Vision bitrates",
        "Multiple audio dubs and customizable multi-language subtitles",
      ],
      icon: Film,
      iconBg: "bg-rose-500/10 text-rose-600 border-rose-200",
      featured: false,
    },
    {
      id: "tv-shows",
      category: "vod",
      badge: "Complete Seasons",
      badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      title: "1M+ TV Shows & Episodes",
      highlight: "Binge-Worthy Global Series & Daily Episodes",
      description:
        "Explore over one million TV episodes across top premium networks. Watch entire seasons from Pilot to Finale with automatic next-episode autoplay and zero ads.",
      stats: [
        { label: "Episodes", value: "1,000,000+" },
        { label: "Series", value: "25,000+" },
        { label: "Playback", value: "Ad-Free" },
      ],
      features: [
        "Full series box sets from HBO, Netflix, BBC, Hulu, FX & AMC",
        "Same-day release for ongoing TV shows and weekly dramas",
        "Dedicated anime, K-drama, Turkish series, and telenovela vaults",
        "Auto-resume playback across phone, tablet, PC, and Smart TV",
      ],
      icon: Clapperboard,
      iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
      featured: false,
    },
    {
      id: "netflix-sub",
      category: "ott",
      badge: "Premium 4K UHD",
      badgeColor: "bg-red-100 text-red-900 border-red-300",
      title: "Netflix Subscription",
      highlight: "Official 4K UHD 4-Screen Ultra Pass",
      description:
        "Direct access passes to official Netflix 4K Ultra HD with private personal profiles, custom PIN protection, and full-term warranty at over 80% discount off retail.",
      stats: [
        { label: "Resolution", value: "4K UHD + HDR" },
        { label: "Screens", value: "4 Devices" },
        { label: "Warranty", value: "Full-Term" },
      ],
      features: [
        "Private profile with dedicated 4-digit PIN lock",
        "Official credentials with uninterrupted streaming",
        "Complete access to all Netflix global region libraries",
        "100% full-term replacement warranty guarantee",
      ],
      icon: Crown,
      iconBg: "bg-red-500/10 text-[#E50914] border-red-200",
      featured: true,
    },
    {
      id: "amazon-prime",
      category: "ott",
      badge: "Official Pass",
      badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
      title: "Amazon Prime Subscription",
      highlight: "Prime Video 4K HDR & Original Series",
      description:
        "Enjoy Amazon Prime Video 4K HDR originals including The Boys, Rings of Power, Reacher, and thousands of movies with guaranteed uptime and instant activation.",
      stats: [
        { label: "Quality", value: "4K HDR" },
        { label: "Delivery", value: "Instant" },
        { label: "Support", value: "24/7 Priority" },
      ],
      features: [
        "Access to all Amazon Originals and licensed blockbuster movies",
        "Download for offline viewing on mobile devices and tablets",
        "Seamless compatibility with Fire TV, Android TV, Apple TV, & iOS",
        "Guaranteed renewal options and direct automated credentials",
      ],
      icon: Zap,
      iconBg: "bg-sky-500/10 text-sky-600 border-sky-200",
      featured: false,
    },
    {
      id: "other-ott",
      category: "ott",
      badge: "300+ Services",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      title: "300+ Other OTT Subscriptions",
      highlight: "All Premium Streaming Platforms Under One Roof",
      description:
        "Get direct discounted passes for Disney+, HBO Max, Apple TV+, Hulu, Paramount+, Peacock, YouTube Premium, Crunchyroll, DAZN, Shahid VIP, SonyLIV, and 300+ more.",
      stats: [
        { label: "OTT Platforms", value: "300+" },
        { label: "Savings", value: "Up to 85%" },
        { label: "Activation", value: "< 2 Minutes" },
      ],
      features: [
        "Disney+ (Marvel, Star Wars, Pixar, Disney+ Originals)",
        "HBO Max / Warner Bros, Discovery+, Apple TV+, and Paramount+",
        "Anime platforms: Crunchyroll Mega Fan, Funimation & HiDive",
        "International hubs: Shahid VIP, OSN+, Zee5, SonyLIV, JioCinema",
      ],
      icon: Layers,
      iconBg: "bg-purple-500/10 text-purple-600 border-purple-200",
      featured: false,
    },
    {
      id: "sports-licensed",
      category: "sports",
      badge: "Live Sports & PPV",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      title: "Live TV & Sports Packages",
      highlight: "Where Officially Licensed & 60 FPS Ultra Streams",
      description:
        "Never miss a goal, touchdown, knockout, or race. Dedicated high-frame-rate sports channels with zero lag for Premier League, Champions League, NFL, NBA, UFC & F1.",
      stats: [
        { label: "Sports Channels", value: "1,500+" },
        { label: "Frame Rate", value: "60 FPS UHD" },
        { label: "PPV Events", value: "Included" },
      ],
      features: [
        "Football: Premier League, UEFA Champions League, La Liga, Serie A",
        "US Sports: NFL Sunday Ticket, NBA League Pass, MLB, NHL, MLS",
        "Combat Sports: UFC Main Cards, Boxing Championship PPVs, WWE",
        "Motorsport & Racing: Formula 1 UHD, MotoGP, NASCAR & IndyCar",
      ],
      icon: Trophy,
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
      featured: true,
    },
  ];

  const filteredOfferings =
    activeCategory === "all"
      ? offerings
      : offerings.filter((item) => item.category === activeCategory);

  return (
    <section
      id="tiger-what-we-sell"
      className="w-full bg-white border-t border-b border-neutral-200/90 py-12 sm:py-16 lg:py-20 text-neutral-900 shadow-xs"
      aria-label="What Tiger OTT Sells - Products and Services"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Top Header Badge & Headline */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
            <Crown className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Complete Product Catalog &amp; Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
            Everything We Offer at <span className="text-amber-500">Tiger OTT</span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            We are the world&apos;s leading and cheapest IPTV and OTT subscription provider. Get instant access to live television, massive 4K movie vaults, full TV series, and premium OTT passes.
          </p>

          {/* Quick Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-100 rounded-xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-white text-neutral-900 shadow-sm border border-neutral-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              All Offerings ({offerings.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("iptv")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === "iptv"
                  ? "bg-white text-neutral-900 shadow-sm border border-neutral-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              IPTV &amp; Live TV
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("vod")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === "vod"
                  ? "bg-white text-neutral-900 shadow-sm border border-neutral-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Movies &amp; Series (VOD)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("ott")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === "ott"
                  ? "bg-white text-neutral-900 shadow-sm border border-neutral-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              OTT Subscriptions (300+)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("sports")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === "sports"
                  ? "bg-white text-neutral-900 shadow-sm border border-neutral-200"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Live Sports Packages
            </button>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {filteredOfferings.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl bg-white border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl ${
                  item.featured
                    ? "border-amber-400/90 shadow-md ring-1 ring-amber-400/30"
                    : "border-neutral-200 hover:border-neutral-300 shadow-xs"
                }`}
              >
                {/* Header item */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.iconBg}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-600 mb-3">
                    {item.highlight}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* 3-Column Key Stats Box */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 mb-5 text-center">
                    {item.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] text-neutral-500 font-medium">
                          {stat.label}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-neutral-900">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-neutral-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action CTA */}
                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    className="w-full py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Get Instant Access</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>

                  <a
                    href={OFFICIAL_FACEBOOK_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#1877F2] text-xs font-bold transition-colors flex items-center justify-center gap-1.5 flex-shrink-0"
                  >
                    <Facebook className="w-3.5 h-3.5 fill-[#1877F2]" />
                    <span>Buy on Facebook</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Value Proposition / Trust Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
              <span>100% Instant Delivery Guaranteed</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2">
              Ready to Upgrade to the Cheapest 4K IPTV &amp; OTT Service?
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Join over 150,000+ satisfied subscribers streaming 20,000+ live channels, 50,000+ movies, and 300+ OTT accounts with zero buffering and 24/7 dedicated support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={OFFICIAL_FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-sm rounded-xl transition-transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              <Facebook className="w-4 h-4 fill-white text-[#1877F2]" />
              <span>Contact to Buy on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#FFE000] hover:bg-[#ebd000] text-black font-black text-sm rounded-xl transition-transform hover:scale-105 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              <span>View All Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
