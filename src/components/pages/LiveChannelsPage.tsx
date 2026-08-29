import React, { useState, useMemo } from "react";
import {
  Tv,
  Search,
  Globe2,
  Sparkles,
  Radio,
  Play,
  CheckCircle2,
  Filter,
  Flame,
  Volume2,
  Zap
} from "lucide-react";
import { MediaItem } from "../../types";

interface LiveChannelsPageProps {
  onPlayMedia?: (item: MediaItem) => void;
  onOpenStore: () => void;
}

interface ChannelItem {
  id: string;
  name: string;
  category: string;
  country: string;
  countryFlag: string;
  resolution: "4K UHD" | "FHD 1080p" | "HD 720p";
  epgCurrent: string;
  epgNext: string;
  serverStatus: "Online (99.9%)";
  fps: "60 FPS" | "50 FPS";
}

const CHANNELS_DATA: ChannelItem[] = [
  // USA Channels
  { id: "us-1", name: "HBO HD USA", category: "USA Premium", country: "United States", countryFlag: "🇺🇸", resolution: "4K UHD", epgCurrent: "House of the Dragon S2", epgNext: "The Last of Us S2", serverStatus: "Online (99.9%)", fps: "60 FPS" },
  { id: "us-2", name: "ESPN USA 4K", category: "USA Sports", country: "United States", countryFlag: "🇺🇸", resolution: "4K UHD", epgCurrent: "SportsCenter Live", epgNext: "NBA Countdown", serverStatus: "Online (99.9%)", fps: "60 FPS" },
  { id: "us-3", name: "FOX Sports 1 (FS1)", category: "USA Sports", country: "United States", countryFlag: "🇺🇸", resolution: "FHD 1080p", epgCurrent: "Live MLB Baseball", epgNext: "Undisputed", serverStatus: "Online (99.9%)", fps: "60 FPS" },
  { id: "us-4", name: "CNN HD USA", category: "USA News", country: "United States", countryFlag: "🇺🇸", resolution: "FHD 1080p", epgCurrent: "The Situation Room", epgNext: "Anderson Cooper 360", serverStatus: "Online (99.9%)", fps: "60 FPS" },
  { id: "us-5", name: "Discovery Channel USA", category: "USA Documentaries", country: "United States", countryFlag: "🇺🇸", resolution: "4K UHD", epgCurrent: "Deadliest Catch", epgNext: "Expedition Unknown", serverStatus: "Online (99.9%)", fps: "60 FPS" },
  { id: "us-6", name: "Cartoon Network HD", category: "Kids & Family", country: "United States", countryFlag: "🇺🇸", resolution: "FHD 1080p", epgCurrent: "Adventure Time", epgNext: "Teen Titans Go!", serverStatus: "Online (99.9%)", fps: "60 FPS" },

  // UK Channels
  { id: "uk-1", name: "Sky Sports Main Event UHD", category: "UK Sports", country: "United Kingdom", countryFlag: "🇬🇧", resolution: "4K UHD", epgCurrent: "Super Sunday Live: Premier League", epgNext: "Monday Night Football", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "uk-2", name: "TNT Sports 1 4K", category: "UK Sports", country: "United Kingdom", countryFlag: "🇬🇧", resolution: "4K UHD", epgCurrent: "UEFA Champions League Pre-Match", epgNext: "Live Match UCL", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "uk-3", name: "BBC One HD", category: "UK Entertainment", country: "United Kingdom", countryFlag: "🇬🇧", resolution: "FHD 1080p", epgCurrent: "BBC News at Six", epgNext: "EastEnders", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "uk-4", name: "Sky Cinema Premiere HD", category: "UK Movies", country: "United Kingdom", countryFlag: "🇬🇧", resolution: "4K UHD", epgCurrent: "Oppenheimer (4K HDR)", epgNext: "Dune: Part Two", serverStatus: "Online (99.9%)", fps: "50 FPS" },

  // Arab & Middle East
  { id: "ar-1", name: "beIN Sports 1 Premium 4K", category: "Arab Sports", country: "Qatar / MENA", countryFlag: "🇶🇦", resolution: "4K UHD", epgCurrent: "استوديو دوري أبطال أوروبا", epgNext: "مباراة اليوم بث مباشر", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "ar-2", name: "beIN Sports 2 HD", category: "Arab Sports", country: "Qatar / MENA", countryFlag: "🇶🇦", resolution: "FHD 1080p", epgCurrent: "الدوري الإنجليزي الممتاز", epgNext: "حصاد الأسبوع", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "ar-3", name: "MBC 1 HD", category: "Arab General", country: "Saudi Arabia", countryFlag: "🇸🇦", resolution: "FHD 1080p", epgCurrent: "صباح الخير يا عرب", epgNext: "مسلسل الليلة", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "ar-4", name: "OSN Movies Premiere HD", category: "Arab Cinema", country: "UAE", countryFlag: "🇦🇪", resolution: "4K UHD", epgCurrent: "Top Hollywood Hits", epgNext: "Action Night", serverStatus: "Online (99.9%)", fps: "50 FPS" },

  // Spain & Latin America
  { id: "es-1", name: "Movistar LaLiga 4K", category: "Spain Sports", country: "Spain", countryFlag: "🇪🇸", resolution: "4K UHD", epgCurrent: "El Partidazo: LaLiga en Directo", epgNext: "Resumen de la Jornada", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "es-2", name: "DAZN F1 4K España", category: "Spain Sports", country: "Spain", countryFlag: "🇪🇸", resolution: "4K UHD", epgCurrent: "Formula 1 Carrera en Directo", epgNext: "El Ojo Clínico F1", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "es-3", name: "Antena 3 HD", category: "Spain Entertainment", country: "Spain", countryFlag: "🇪🇸", resolution: "FHD 1080p", epgCurrent: "Antena 3 Noticias", epgNext: "El Hormiguero", serverStatus: "Online (99.9%)", fps: "50 FPS" },

  // France & Europe
  { id: "fr-1", name: "Canal+ Sport 360 4K", category: "France Sports", country: "France", countryFlag: "🇫🇷", resolution: "4K UHD", epgCurrent: "Ligue 1 Uber Eats", epgNext: "Canal Football Club", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "fr-2", name: "TF1 4K France", category: "France General", country: "France", countryFlag: "🇫🇷", resolution: "4K UHD", epgCurrent: "Le 20H de TF1", epgNext: "Grand Film du Soir", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "de-1", name: "Sky Sport Bundesliga UHD", category: "Germany Sports", country: "Germany", countryFlag: "🇩🇪", resolution: "4K UHD", epgCurrent: "Bundesliga Konferenz", epgNext: "Alle Spiele, Alle Tore", serverStatus: "Online (99.9%)", fps: "50 FPS" },
  { id: "it-1", name: "Sky Sport Serie A 4K", category: "Italy Sports", country: "Italy", countryFlag: "🇮🇹", resolution: "4K UHD", epgCurrent: "Serie A TIM Live", epgNext: "Sky Calcio Club", serverStatus: "Online (99.9%)", fps: "50 FPS" },

  // 24/7 Channels
  { id: "v24-1", name: "24/7 Marvel Cinematic Universe (4K)", category: "24/7 Movies", country: "Global", countryFlag: "🌐", resolution: "4K UHD", epgCurrent: "Avengers: Endgame", epgNext: "Spider-Man: No Way Home", serverStatus: "Online (99.9%)", fps: "60 FPS" },
  { id: "v24-2", name: "24/7 Friends & Comedy Sitcoms", category: "24/7 Series", country: "Global", countryFlag: "🌐", resolution: "FHD 1080p", epgCurrent: "Friends S05E14", epgNext: "The Office S04E01", serverStatus: "Online (99.9%)", fps: "60 FPS" },
];

const CATEGORIES = [
  "All Channels",
  "USA Premium",
  "USA Sports",
  "UK Sports",
  "Arab Sports",
  "Spain Sports",
  "France Sports",
  "Germany Sports",
  "Kids & Family",
  "24/7 Movies",
];

export const LiveChannelsPage: React.FC<LiveChannelsPageProps> = ({
  onPlayMedia,
  onOpenStore,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Channels");

  const filteredChannels = useMemo(() => {
    return CHANNELS_DATA.filter((ch) => {
      const matchCat = selectedCategory === "All Channels" || ch.category === selectedCategory;
      const matchSearch =
        !searchQuery ||
        ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.epgCurrent.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleLaunchChannel = (ch: ChannelItem) => {
    if (onPlayMedia) {
      onPlayMedia({
        id: parseInt(ch.id.replace(/[^0-9]/g, "")) || 8888,
        title: `${ch.name} (${ch.resolution})`,
        overview: `Live streaming ${ch.name} with Electronic Program Guide (EPG). Currently airing: ${ch.epgCurrent}. Next up: ${ch.epgNext}.`,
        poster_path: "/4KkMz11X9Y2H4B3K8b9O3p8h.jpg",
        backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s520.jpg",
        vote_average: 9.9,
        vote_count: 5000,
        media_type: "tv",
        duration: "LIVE",
      });
    }
  };

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-black text-white py-12 px-4 sm:px-8 md:px-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>25,000+ WORLDWIDE LIVE TV CHANNELS ONLINE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Global Live TV &amp; EPG Directory
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Explore live premium networks across USA, UK, Canada, Europe, Arab MENA, Latin America, and Asia with 7-Day Catch-Up and Electronic Program Guide (EPG).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex-shrink-0 space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Instant Activation
            </span>
            <div className="text-2xl font-black text-white">$1.65 <span className="text-xs font-normal text-neutral-300">/mo</span></div>
            <button
              type="button"
              onClick={onOpenStore}
              className="w-full px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs rounded-xl transition cursor-pointer shadow-md"
            >
              Unlock 25,000+ Channels
            </button>
          </div>
        </div>
      </div>

      {/* Main Filter & Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 space-y-6">
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search channels (e.g. 'Sky Sports', 'HBO', 'beIN', 'ESPN', 'Movistar', 'Discovery')..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-neutral-300 focus:border-amber-500 rounded-2xl text-sm font-semibold text-neutral-900 outline-none transition shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-neutral-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-neutral-900 text-white shadow-xs font-black"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channels Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-black text-neutral-900 flex items-center space-x-2">
              <Tv className="w-5 h-5 text-amber-500" />
              <span>Channels List</span>
            </h2>
            <span className="text-xs font-bold text-neutral-500">
              Showing {filteredChannels.length} Live Channels
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredChannels.map((ch) => (
              <div
                key={ch.id}
                className="bg-white border border-neutral-200 hover:border-amber-500 rounded-2xl p-4 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{ch.countryFlag}</span>
                      <span className="text-xs font-black text-neutral-900 truncate max-w-[160px]">
                        {ch.name}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] font-black uppercase">
                      {ch.resolution}
                    </span>
                  </div>

                  {/* EPG Program Box */}
                  <div className="bg-[#f8fafc] rounded-xl p-2.5 border border-neutral-200 space-y-1 mb-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-red-600 flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        <span>NOW:</span>
                      </span>
                      <span className="text-[10px] text-neutral-500 font-medium">{ch.fps}</span>
                    </div>
                    <p className="font-bold text-neutral-900 truncate text-[11px]">{ch.epgCurrent}</p>
                    <p className="text-[10px] text-neutral-500 truncate">Next: {ch.epgNext}</p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-3">
                    <span>{ch.country}</span>
                    <span className="text-emerald-600 font-bold">● {ch.serverStatus}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleLaunchChannel(ch)}
                  className="w-full py-2.5 bg-neutral-900 group-hover:bg-amber-500 text-white group-hover:text-black font-black text-xs rounded-xl transition cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Preview Live Channel</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChannelsPage;
