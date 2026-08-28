import React, { useState } from "react";
import { MediaItem, OTTPlan, OTTService } from "../types";
import {
  NetflixBrandLogo,
  PrimeVideoBrandLogo,
  LiveTVBrandLogo,
  UCLLogo,
  PremierLeagueLogo,
  LaLigaLogo,
} from "./BrandLogos";
import TigerSubscriptionSection from "./TigerSubscriptionSection";
import NetflixCard from "./NetflixCard";
import {
  Play,
  Info,
  Tv,
  Trophy,
  Flame,
  Radio,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Plus,
  Check,
  Zap,
} from "lucide-react";

interface TigerNewHomePageProps {
  trending: MediaItem[];
  top10: MediaItem[];
  popular: MediaItem[];
  tvShows: MediaItem[];
  actionHits: MediaItem[];
  scifiHits: MediaItem[];
  topRated: MediaItem[];
  upcoming: MediaItem[];
  myListIds: Set<string | number>;
  onPlayMedia: (item: MediaItem) => void;
  onOpenDetail: (item: MediaItem) => void;
  onToggleMyList: (item: MediaItem) => void;
  onSelectPlan: (plan: OTTPlan, service: OTTService) => void;
  onOpenStore: () => void;
}

// Live Matches & Feeds for UCL, Premier League, LaLiga and Live TV
interface LiveSportsMatch {
  id: string;
  league: "ucl" | "epl" | "laliga";
  leagueName: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  time: string;
  status: "LIVE" | "UPCOMING" | "REPLAY";
  score?: string;
  channel: string;
  quality: "4K UHD" | "1080p 60fps";
  mediaItem: MediaItem;
}

const LIVE_MATCHES: LiveSportsMatch[] = [
  {
    id: "match-ucl-1",
    league: "ucl",
    leagueName: "UEFA Champions League",
    homeTeam: "Real Madrid",
    awayTeam: "Manchester City",
    homeLogo: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=120&q=80",
    awayLogo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=120&q=80",
    time: "LIVE 74'",
    status: "LIVE",
    score: "2 - 2",
    channel: "TNT Sports 1 4K / Movistar Liga de Campeones UHD",
    quality: "4K UHD",
    mediaItem: {
      id: 99101,
      title: "UEFA Champions League: Real Madrid vs Manchester City (4K Ultra HD)",
      name: "UEFA Champions League: Real Madrid vs Manchester City",
      overview:
        "Full 4K HDR live broadcast with English, Spanish & Arabic commentary. Multi-angle stadium audio, zero latency and instant replay.",
      backdrop_path: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1280&q=80",
      poster_path: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
      vote_average: 9.9,
      vote_count: 8500,
      media_type: "tv",
      genres: ["Sports", "Live TV"],
      release_date: "2026-08-28",
      popularity: 9999,
    },
  },
  {
    id: "match-epl-1",
    league: "epl",
    leagueName: "Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Liverpool",
    homeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=120&q=80",
    awayLogo: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=120&q=80",
    time: "LIVE 58'",
    status: "LIVE",
    score: "1 - 0",
    channel: "Sky Sports Main Event 4K / NBC Sports 4K",
    quality: "4K UHD",
    mediaItem: {
      id: 99102,
      title: "Premier League: Arsenal vs Liverpool (Super Sunday 4K)",
      name: "Premier League: Arsenal vs Liverpool",
      overview:
        "Premier League Super Sunday live from the Emirates Stadium. Ultra HD 60FPS high bitrate stream.",
      backdrop_path: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1280&q=80",
      poster_path: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
      vote_average: 9.8,
      vote_count: 7400,
      media_type: "tv",
      genres: ["Sports", "Live TV"],
      release_date: "2026-08-28",
      popularity: 8888,
    },
  },
  {
    id: "match-laliga-1",
    league: "laliga",
    leagueName: "Spanish LaLiga",
    homeTeam: "FC Barcelona",
    awayTeam: "Atlético Madrid",
    homeLogo: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=120&q=80",
    awayLogo: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=120&q=80",
    time: "TODAY 20:00 GMT",
    status: "UPCOMING",
    score: "VS",
    channel: "DAZN LaLiga 4K / ESPN+ HD",
    quality: "4K UHD",
    mediaItem: {
      id: 99103,
      title: "LaLiga EA Sports: FC Barcelona vs Atlético de Madrid",
      name: "LaLiga: FC Barcelona vs Atlético de Madrid",
      overview:
        "Top of the table Spanish showdown live from Montjuïc / Camp Nou with Spanish and English audio options.",
      backdrop_path: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1280&q=80",
      poster_path: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80",
      vote_average: 9.7,
      vote_count: 6200,
      media_type: "tv",
      genres: ["Sports", "Live TV"],
      release_date: "2026-08-28",
      popularity: 7777,
    },
  },
  {
    id: "match-ucl-2",
    league: "ucl",
    leagueName: "UEFA Champions League",
    homeTeam: "Bayern München",
    awayTeam: "Paris Saint-Germain",
    homeLogo: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=120&q=80",
    awayLogo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=120&q=80",
    time: "TONIGHT 21:00 GMT",
    status: "UPCOMING",
    score: "VS",
    channel: "TNT Sports 2 / Canal+ Foot 4K",
    quality: "4K UHD",
    mediaItem: {
      id: 99104,
      title: "UEFA Champions League: Bayern München vs Paris Saint-Germain",
      name: "UCL: Bayern München vs PSG",
      overview:
        "European blockbuster night at the Allianz Arena. 4K HDR live feed with crystal-clear audio.",
      backdrop_path: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1280&q=80",
      poster_path: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
      vote_average: 9.6,
      vote_count: 5900,
      media_type: "tv",
      genres: ["Sports", "Live TV"],
      release_date: "2026-08-28",
      popularity: 6666,
    },
  },
];

// Curated Prime Video Showcase Items
const PRIME_VIDEO_ITEMS: MediaItem[] = [
  {
    id: 99201,
    title: "The Boys (Season 4 & 5)",
    name: "The Boys",
    overview:
      "A fun and irreverent take on what happens when superheroes abuse their superpowers. 4K Ultra HD & HDR10+.",
    backdrop_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1280&q=80",
    poster_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    vote_average: 8.8,
    vote_count: 14200,
    media_type: "tv",
    genres: ["Action", "Sci-Fi"],
    release_date: "2024-06-13",
    popularity: 9500,
  },
  {
    id: 99202,
    title: "Fallout (Season 1 & 2)",
    name: "Fallout",
    overview:
      "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers. 4K Dolby Atmos.",
    backdrop_path: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1280&q=80",
    poster_path: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    vote_average: 8.7,
    vote_count: 11500,
    media_type: "tv",
    genres: ["Sci-Fi", "Adventure"],
    release_date: "2024-04-10",
    popularity: 9100,
  },
  {
    id: 99203,
    title: "Reacher (Season 3)",
    name: "Reacher",
    overview:
      "Jack Reacher, a veteran military police investigator, enters civilian life with nothing but the clothes on his back. 4K UHD.",
    backdrop_path: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1280&q=80",
    poster_path: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80",
    vote_average: 8.6,
    vote_count: 9800,
    media_type: "tv",
    genres: ["Action", "Crime"],
    release_date: "2023-12-15",
    popularity: 8400,
  },
  {
    id: 99204,
    title: "The Lord of the Rings: The Rings of Power",
    name: "The Lord of the Rings: The Rings of Power",
    overview:
      "Epic drama set thousands of years before the events of J.R.R. Tolkien's The Hobbit. Cinematic 4K HDR10+.",
    backdrop_path: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1280&q=80",
    poster_path: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80",
    vote_average: 7.9,
    vote_count: 8500,
    media_type: "tv",
    genres: ["Fantasy", "Adventure"],
    release_date: "2022-09-01",
    popularity: 8000,
  },
];

// Curated Live TV Channel Categories
const LIVE_TV_CATEGORIES = [
  { name: "Sports 4K (UCL, EPL, LaLiga, F1)", count: "850+ Channels", icon: Trophy, color: "from-blue-600 to-indigo-700" },
  { name: "USA & UK Cinema (HBO, Sky, Starz)", count: "1,200+ Channels", icon: Flame, color: "from-red-600 to-rose-700" },
  { name: "Spanish & European TV (Movistar, Canal+)", count: "2,400+ Channels", icon: Radio, color: "from-amber-600 to-orange-700" },
  { name: "Global News (BBC, CNN, Sky, Al Jazeera)", count: "650+ Channels", icon: Tv, color: "from-emerald-600 to-teal-700" },
];

export const TigerNewHomePage: React.FC<TigerNewHomePageProps> = ({
  trending,
  top10,
  popular,
  tvShows,
  actionHits,
  myListIds,
  onPlayMedia,
  onOpenDetail,
  onToggleMyList,
  onSelectPlan,
  onOpenStore,
}) => {
  const [selectedHub, setSelectedHub] = useState<
    "all" | "netflix" | "prime" | "livetv" | "ucl" | "epl" | "laliga"
  >("all");

  const [activeSportsFilter, setActiveSportsFilter] = useState<"all" | "ucl" | "epl" | "laliga">("all");

  const filteredMatches =
    activeSportsFilter === "all"
      ? LIVE_MATCHES
      : LIVE_MATCHES.filter((m) => m.league === activeSportsFilter);

  const heroMatch = LIVE_MATCHES[0];

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-20 selection:bg-amber-500 selection:text-black pt-16 sm:pt-20">
      {/* ========================================================= */}
      {/* 1. TIGER OTT SUBSCRIPTION & PRICING PLANS (FEATURED TOP) */}
      {/* ========================================================= */}
      <section className="mt-2">
        <TigerSubscriptionSection onSelectPlan={onSelectPlan} />
      </section>

      {/* ========================================================= */}
      {/* 3. LIVE SPORTS CENTER (UCL, PREMIER LEAGUE, LALIGA)        */}
      {/* ========================================================= */}
      <section className="px-3 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-2.5">
              <Trophy className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
                Live Football &amp; Top Leagues
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Watch UEFA Champions League, English Premier League, and Spanish LaLiga with multi-audio commentary
            </p>
          </div>

          {/* League Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setActiveSportsFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                activeSportsFilter === "all"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200"
              }`}
            >
              All Leagues
            </button>
            <button
              type="button"
              onClick={() => setActiveSportsFilter("ucl")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                activeSportsFilter === "ucl"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200"
              }`}
            >
              <UCLLogo size="sm" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSportsFilter("epl")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                activeSportsFilter === "epl"
                  ? "bg-purple-700 text-white shadow-md shadow-purple-700/30"
                  : "bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200"
              }`}
            >
              <PremierLeagueLogo size="sm" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSportsFilter("laliga")}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer ${
                activeSportsFilter === "laliga"
                  ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                  : "bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200"
              }`}
            >
              <LaLigaLogo size="sm" />
            </button>
          </div>
        </div>

        {/* Live Match Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-white border border-neutral-200 hover:border-amber-500/80 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div>
                {/* Header with League Badge & Status */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {match.league === "ucl" && <UCLLogo size="sm" />}
                    {match.league === "epl" && <PremierLeagueLogo size="sm" />}
                    {match.league === "laliga" && <LaLigaLogo size="sm" />}
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                      match.status === "LIVE"
                        ? "bg-red-600 text-white animate-pulse"
                        : "bg-amber-100 text-amber-800 border border-amber-300"
                    }`}
                  >
                    {match.time}
                  </span>
                </div>

                {/* Teams & Score Box */}
                <div className="bg-[#f8fafc] rounded-xl p-3 border border-neutral-200 mb-3">
                  <div className="flex items-center justify-between text-sm font-extrabold text-neutral-900 mb-2">
                    <span className="truncate pr-2">{match.homeTeam}</span>
                    <span className="text-amber-600 font-black">{match.score.split("-")[0]?.trim() || "0"}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-extrabold text-neutral-900">
                    <span className="truncate pr-2">{match.awayTeam}</span>
                    <span className="text-amber-600 font-black">{match.score.split("-")[1]?.trim() || "0"}</span>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-500 font-medium line-clamp-1 mb-3">
                  📺 {match.channel}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onPlayMedia(match.mediaItem)}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-neutral-900 group-hover:bg-amber-500 text-white group-hover:text-black font-black text-xs rounded-xl transition cursor-pointer shadow-xs"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{match.status === "LIVE" ? "Watch Live Stream (4K)" : "Set Reminder & Watch"}</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. NETFLIX 4K ULTRA HD SPOTLIGHT                          */}
      {/* ========================================================= */}
      {(selectedHub === "all" || selectedHub === "netflix") && (
        <section className="px-3 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto mt-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <NetflixBrandLogo size="md" />
              <div>
                <h2 className="text-lg sm:text-2xl font-black text-neutral-900">
                  Trending on Netflix 4K UHD
                </h2>
                <p className="text-xs text-neutral-600">
                  Included free with your Tiger OTT subscription
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenStore}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 cursor-pointer"
            >
              <span>View All Netflix Titles</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {trending.slice(0, 5).map((item) => (
              <NetflixCard
                key={`nflx-${item.id}`}
                media={item}
                onPlay={onPlayMedia}
                onOpenDetail={onOpenDetail}
                isInMyList={myListIds.has(item.id)}
                onToggleMyList={onToggleMyList}
              />
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 5. AMAZON PRIME VIDEO SPOTLIGHT                           */}
      {/* ========================================================= */}
      {(selectedHub === "all" || selectedHub === "prime") && (
        <section className="px-3 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto mt-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <PrimeVideoBrandLogo size="md" />
              <div>
                <h2 className="text-lg sm:text-2xl font-black text-neutral-900">
                  Amazon Prime Video Originals &amp; Hits
                </h2>
                <p className="text-xs text-neutral-600">
                  The Boys, Fallout, Reacher, Rings of Power in 4K HDR
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenStore}
              className="text-xs font-bold text-[#007399] hover:text-[#005a78] flex items-center space-x-1 cursor-pointer"
            >
              <span>Explore Prime Hub</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {PRIME_VIDEO_ITEMS.map((item) => (
              <NetflixCard
                key={`prime-${item.id}`}
                media={item}
                onPlay={onPlayMedia}
                onOpenDetail={onOpenDetail}
                isInMyList={myListIds.has(item.id)}
                onToggleMyList={onToggleMyList}
              />
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 6. 25,000+ LIVE TV CHANNELS HUB                           */}
      {/* ========================================================= */}
      {(selectedHub === "all" || selectedHub === "livetv") && (
        <section className="px-3 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto mt-14">
          <div className="bg-[#f8fafc] border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <LiveTVBrandLogo size="lg" />
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900">
                    25,000+ Worldwide Live TV Channels
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    USA, UK, Canada, Spain, Europe, Arab, LatAm &amp; Asia with Electronic Program Guide (EPG)
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenStore}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-xl text-xs sm:text-sm transition cursor-pointer shadow-xs"
              >
                Instant Activation ($2.99)
              </button>
            </div>

            {/* Live TV Channels categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {LIVE_TV_CATEGORIES.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 hover:border-neutral-300 rounded-2xl p-4 transition-all hover:-translate-y-1 shadow-2xs"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white mb-3 shadow-xs`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-sm text-neutral-900 mb-1">{cat.name}</h3>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{cat.count}</span>
                      <span className="text-emerald-600 font-bold">● 99.9% Uptime</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 7. POPULAR MOVIES & TV SERIES TOP 10                      */}
      {/* ========================================================= */}
      <section className="px-3 sm:px-6 md:px-10 lg:px-14 max-w-7xl mx-auto mt-14">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-neutral-900">
              🔥 Top 10 Most Watched Today
            </h2>
            <p className="text-xs text-neutral-600">
              Ranked by real-time streams across Tiger OTT users
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {top10.slice(0, 5).map((item, idx) => (
            <div key={`top10-${item.id}`} className="relative group">
              {/* Big Rank Number Badge */}
              <div className="absolute top-2 left-2 z-20 w-8 h-8 rounded-full bg-white/95 border-2 border-amber-500 text-neutral-900 font-black text-sm flex items-center justify-center shadow-md">
                #{idx + 1}
              </div>
              <NetflixCard
                media={item}
                onPlay={onPlayMedia}
                onOpenDetail={onOpenDetail}
                isInMyList={myListIds.has(item.id)}
                onToggleMyList={onToggleMyList}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TigerNewHomePage;
