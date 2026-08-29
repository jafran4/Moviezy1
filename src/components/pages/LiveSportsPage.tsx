import React, { useState } from "react";
import {
  Trophy,
  Play,
  Flame,
  Radio,
  Calendar,
  Sparkles,
  Shield,
  Volume2,
  Tv,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { MediaItem } from "../../types";
import { UCLLogo, PremierLeagueLogo, LaLigaLogo } from "../BrandLogos";

interface LiveSportsPageProps {
  onPlayMedia?: (item: MediaItem) => void;
  onOpenStore: () => void;
}

interface SportsMatch {
  id: string;
  league: "ucl" | "epl" | "laliga" | "f1" | "ufc" | "nba";
  leagueName: string;
  homeTeam: string;
  awayTeam: string;
  score: string;
  time: string;
  status: "LIVE" | "UPCOMING" | "TODAY";
  channel: string;
  audioLangs: string[];
  mediaItem: MediaItem;
}

const LIVE_MATCHES: SportsMatch[] = [
  {
    id: "ucl-1",
    league: "ucl",
    leagueName: "UEFA Champions League",
    homeTeam: "Real Madrid",
    awayTeam: "Manchester City",
    score: "2 - 1",
    time: "74' LIVE",
    status: "LIVE",
    channel: "TNT Sports 1 HD • beIN Sports 1 English • Movistar Liga",
    audioLangs: ["English", "Arabic", "Spanish"],
    mediaItem: {
      id: 9901,
      title: "Real Madrid vs Manchester City - UEFA Champions League Semi Final (4K)",
      overview: "Watch UEFA Champions League thrilling clash with commentary in English, Arabic, Spanish and French. 50 FPS 4K Ultra HD broadcast with zero buffering.",
      poster_path: "/4KkMz11X9Y2H4B3K8b9O3p8h.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520.jpg",
      vote_average: 9.9,
      vote_count: 8500,
      media_type: "tv",
      duration: "90 min",
    },
  },
  {
    id: "epl-1",
    league: "epl",
    leagueName: "English Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Liverpool",
    score: "1 - 1",
    time: "58' LIVE",
    status: "LIVE",
    channel: "Sky Sports Main Event 4K • USA Network • beIN Sports Premium",
    audioLangs: ["English", "Arabic"],
    mediaItem: {
      id: 9902,
      title: "Arsenal vs Liverpool - Premier League Matchday 28 (4K 50FPS)",
      overview: "Premier League top-of-the-table showdown streaming live with Dolby Surround sound and interactive multi-camera angles.",
      poster_path: "/4KkMz11X9Y2H4B3K8b9O3p8h.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520.jpg",
      vote_average: 9.8,
      vote_count: 6200,
      media_type: "tv",
      duration: "90 min",
    },
  },
  {
    id: "laliga-1",
    league: "laliga",
    leagueName: "Spanish LaLiga",
    homeTeam: "FC Barcelona",
    awayTeam: "Atletico Madrid",
    score: "0 - 0",
    time: "TODAY 20:00 GMT",
    status: "TODAY",
    channel: "DAZN LaLiga 4K • ESPN+ • beIN Sports HD 1",
    audioLangs: ["Spanish", "English", "French"],
    mediaItem: {
      id: 9903,
      title: "FC Barcelona vs Atletico Madrid - Spanish LaLiga (4K UHD)",
      overview: "El Clasico contenders face off at Camp Nou. Crisp 60fps high bitrate stream with multi-audio feeds.",
      poster_path: "/4KkMz11X9Y2H4B3K8b9O3p8h.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520.jpg",
      vote_average: 9.7,
      vote_count: 5100,
      media_type: "tv",
      duration: "90 min",
    },
  },
  {
    id: "f1-1",
    league: "f1",
    leagueName: "Formula 1 Grand Prix",
    homeTeam: "Monaco Grand Prix",
    awayTeam: "Main Race Day",
    score: "Lap 42/78",
    time: "LIVE",
    status: "LIVE",
    channel: "Sky Sports F1 UHD • ESPN • Canal+ Formula 1",
    audioLangs: ["English", "French", "German"],
    mediaItem: {
      id: 9904,
      title: "Formula 1 Grand Prix - Live Race & Driver Onboard Cams (4K)",
      overview: "Watch the world's fastest motorsport with all team radios, telemetry feeds, and 50fps Ultra HD track cameras.",
      poster_path: "/4KkMz11X9Y2H4B3K8b9O3p8h.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520.jpg",
      vote_average: 9.9,
      vote_count: 7300,
      media_type: "tv",
      duration: "120 min",
    },
  },
  {
    id: "ufc-1",
    league: "ufc",
    leagueName: "UFC Championship",
    homeTeam: "Main Card Fight Night",
    awayTeam: "World Title Bout",
    score: "Round 3",
    time: "LIVE PPV",
    status: "LIVE",
    channel: "TNT Sports Box Office • ESPN+ PPV • Sony Ten 2",
    audioLangs: ["English", "Portuguese", "Spanish"],
    mediaItem: {
      id: 9905,
      title: "UFC Championship Main Card - World Title Fight (4K UHD)",
      overview: "Every UFC PPV fight night included free with zero extra cost. Never pay $79.99 per event again!",
      poster_path: "/4KkMz11X9Y2H4B3K8b9O3p8h.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520.jpg",
      vote_average: 9.8,
      vote_count: 4800,
      media_type: "tv",
      duration: "180 min",
    },
  },
  {
    id: "nba-1",
    league: "nba",
    leagueName: "NBA Basketball",
    homeTeam: "Los Angeles Lakers",
    awayTeam: "Boston Celtics",
    score: "98 - 95",
    time: "Q4 03:20",
    status: "LIVE",
    channel: "TNT • NBA League Pass 4K • ESPN HD",
    audioLangs: ["English", "Spanish"],
    mediaItem: {
      id: 9906,
      title: "NBA Finals - Lakers vs Celtics (4K 60FPS)",
      overview: "NBA Basketball season pass with home and away local broadcasters in high definition.",
      poster_path: "/4KkMz11X9Y2H4B3K8b9O3p8h.jpg",
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520.jpg",
      vote_average: 9.7,
      vote_count: 3900,
      media_type: "tv",
      duration: "140 min",
    },
  },
];

export const LiveSportsPage: React.FC<LiveSportsPageProps> = ({
  onPlayMedia,
  onOpenStore,
}) => {
  const [selectedLeague, setSelectedLeague] = useState<string>("all");

  const filteredMatches =
    selectedLeague === "all"
      ? LIVE_MATCHES
      : LIVE_MATCHES.filter((m) => m.league === selectedLeague);

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Header Sports Banner */}
      <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white py-12 px-4 sm:px-8 md:px-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black">
              <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>LIVE 4K SPORTS BROADCASTING CENTER</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              All Major Football Leagues &amp; PPV
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Watch UEFA Champions League, Premier League, LaLiga, Serie A, Formula 1, UFC PPV, NBA, NFL, and ICC Cricket in native 4K 50/60 FPS with Anti-Freeze CDN technology.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex-shrink-0 space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Never Miss Any Match
            </span>
            <div className="text-2xl font-black text-white">$1.65 <span className="text-xs font-normal text-neutral-300">/month</span></div>
            <button
              type="button"
              onClick={onOpenStore}
              className="w-full px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs rounded-xl transition cursor-pointer shadow-md"
            >
              Get Instant Sports Access
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 space-y-8">
        {/* League Selector Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-200 pb-4">
          <button
            type="button"
            onClick={() => setSelectedLeague("all")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              selectedLeague === "all"
                ? "bg-neutral-900 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            All Sports &amp; Leagues
          </button>
          <button
            type="button"
            onClick={() => setSelectedLeague("ucl")}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              selectedLeague === "ucl"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            <UCLLogo size="sm" />
            <span>Champions League</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedLeague("epl")}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              selectedLeague === "epl"
                ? "bg-purple-700 text-white shadow-md shadow-purple-700/30"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            <PremierLeagueLogo size="sm" />
            <span>Premier League</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedLeague("laliga")}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              selectedLeague === "laliga"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            <LaLigaLogo size="sm" />
            <span>Spanish LaLiga</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedLeague("f1")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              selectedLeague === "f1"
                ? "bg-red-600 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            🏎️ Formula 1
          </button>
          <button
            type="button"
            onClick={() => setSelectedLeague("ufc")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              selectedLeague === "ufc"
                ? "bg-orange-600 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            🥊 UFC &amp; Boxing PPV
          </button>
          <button
            type="button"
            onClick={() => setSelectedLeague("nba")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              selectedLeague === "nba"
                ? "bg-blue-800 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            🏀 NBA Basketball
          </button>
        </div>

        {/* Live Matches Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900 flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Live Fixtures &amp; Today's Match Schedules</span>
              </h2>
              <p className="text-xs text-neutral-500">
                Multi-audio streams available: English, Arabic, Spanish, French, Italian &amp; German
              </p>
            </div>
            <span className="text-xs font-bold text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200">
              {filteredMatches.length} Live Feeds
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-white border border-neutral-200 hover:border-amber-500 rounded-3xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Match Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-neutral-800 flex items-center space-x-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>{match.leagueName}</span>
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                        match.status === "LIVE"
                          ? "bg-red-600 text-white animate-pulse"
                          : "bg-amber-100 text-amber-900 border border-amber-300"
                      }`}
                    >
                      {match.time}
                    </span>
                  </div>

                  {/* Team Versus Box */}
                  <div className="bg-[#f8fafc] rounded-2xl p-4 border border-neutral-200 mb-4">
                    <div className="flex items-center justify-between font-black text-base text-neutral-900 mb-2">
                      <span className="truncate pr-2">{match.homeTeam}</span>
                      <span className="text-amber-600 text-lg">{match.score.split("-")[0]?.trim() || "0"}</span>
                    </div>
                    <div className="flex items-center justify-between font-black text-base text-neutral-900">
                      <span className="truncate pr-2">{match.awayTeam}</span>
                      <span className="text-amber-600 text-lg">{match.score.split("-")[1]?.trim() || "0"}</span>
                    </div>
                  </div>

                  {/* Channels & Audio */}
                  <div className="space-y-2 mb-4 text-xs text-neutral-600">
                    <div className="flex items-start space-x-2">
                      <Tv className="w-3.5 h-3.5 text-neutral-400 mt-0.5 flex-shrink-0" />
                      <span className="font-medium line-clamp-1">{match.channel}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                      <div className="flex items-center space-x-1">
                        {match.audioLangs.map((lang) => (
                          <span key={lang} className="px-1.5 py-0.5 bg-neutral-100 text-neutral-700 text-[10px] font-bold rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stream Launch Button */}
                <button
                  type="button"
                  onClick={() => onPlayMedia && onPlayMedia(match.mediaItem)}
                  className="w-full py-3 bg-neutral-900 group-hover:bg-amber-500 text-white group-hover:text-black font-black text-xs sm:text-sm rounded-xl transition cursor-pointer flex items-center justify-center space-x-2 shadow-xs"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{match.status === "LIVE" ? "Launch 4K Live Stream" : "Watch Preview & Set Reminder"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sports Features Checklist */}
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 space-y-4">
          <h3 className="text-lg sm:text-xl font-black text-neutral-900">
            Why Tiger OTT is the #1 Sports IPTV Provider
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-neutral-700 font-medium">
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-900 block font-bold">50 &amp; 60 FPS Native Broadcast</strong>
                Smooth ball motion without micro-stuttering on big TV screens.
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-900 block font-bold">100% Anti-Freeze CDN</strong>
                Dedicated European and USA load-balanced server clusters.
              </div>
            </div>
            <div className="flex items-start space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-neutral-900 block font-bold">Multi-Audio Language Feeds</strong>
                Switch easily between Martin Tyler, Arabic beIN, or Spanish DAZN commentary.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSportsPage;
