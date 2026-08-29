import React, { useState } from "react";
import {
  Globe2,
  Sparkles,
  CheckCircle2,
  Volume2,
  Tv,
  Film,
  Search,
  ChevronRight
} from "lucide-react";

interface LanguagesPageProps {
  onOpenStore: () => void;
}

interface LanguageRegion {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  channelCount: string;
  vodCount: string;
  popularChannels: string[];
  subtitlesAvailable: boolean;
  audioTracks: string;
}

const REGIONS_DATA: LanguageRegion[] = [
  {
    id: "en",
    name: "English (USA, UK, Canada, Australia)",
    nativeName: "English",
    flag: "🇺🇸 🇬🇧 🇨🇦 🇦🇺",
    channelCount: "5,800+ Live Channels",
    vodCount: "35,000+ Movies & Series",
    popularChannels: ["HBO Max", "Sky Sports Main Event", "ESPN UHD", "TNT Sports", "BBC One", "Discovery HD"],
    subtitlesAvailable: true,
    audioTracks: "English 5.1 Dolby Atmos & Multi-Commentary",
  },
  {
    id: "ar",
    name: "Arabic (MENA, Gulf, Egypt, Levant, Maghreb)",
    nativeName: "العربية",
    flag: "🇶🇦 🇸🇦 🇦🇪 🇪🇬",
    channelCount: "4,200+ Live Channels",
    vodCount: "15,000+ Arabic Movies & Shahid Series",
    popularChannels: ["beIN Sports 1-8 4K", "MBC 1-5 HD", "OSN Cinema 4K", "Rotana Cinema", "Abu Dhabi Sports"],
    subtitlesAvailable: true,
    audioTracks: "Arabic Commentary + Original Audio",
  },
  {
    id: "es",
    name: "Spanish (Spain & Latin America)",
    nativeName: "Español",
    flag: "🇪🇸 🇲🇽 🇦🇷 🇨🇴",
    channelCount: "3,600+ Live Channels",
    vodCount: "12,000+ Películas y Series",
    popularChannels: ["Movistar LaLiga 4K", "DAZN LaLiga", "Antena 3", "Telecinco", "ESPN Deportes", "Star Channel"],
    subtitlesAvailable: true,
    audioTracks: "Español de España y Latino",
  },
  {
    id: "fr",
    name: "French (France, Belgium, Switzerland, Canada)",
    nativeName: "Français",
    flag: "🇫🇷 🇧🇪 🇨🇭 🇨🇦",
    channelCount: "2,800+ Live Channels",
    vodCount: "10,000+ Films & Séries VF/VOSTFR",
    popularChannels: ["Canal+ 4K", "Canal+ Sport 360", "RMC Sport 1-4", "TF1 4K", "M6 HD", "beIN Sports France"],
    subtitlesAvailable: true,
    audioTracks: "Version Française (VF) & VOSTFR",
  },
  {
    id: "de",
    name: "German (Germany, Austria, Switzerland)",
    nativeName: "Deutsch",
    flag: "🇩🇪 🇦🇹 🇨🇭",
    channelCount: "2,400+ Live Channels",
    vodCount: "8,500+ Filme & Serien auf Deutsch",
    popularChannels: ["Sky Sport Bundesliga UHD", "DAZN 1&2 Deutschland", "RTL UHD", "ProSieben HD", "ZDF HD"],
    subtitlesAvailable: true,
    audioTracks: "Deutsche Tonspur & Zweikanalton",
  },
  {
    id: "it",
    name: "Italian (Italy & Switzerland)",
    nativeName: "Italiano",
    flag: "🇮🇹 🇨🇭",
    channelCount: "1,900+ Live Channels",
    vodCount: "7,000+ Film e Serie TV",
    popularChannels: ["Sky Sport Serie A 4K", "DAZN 1 Italia", "Rai 1 4K", "Mediaset Premium", "Canale 5"],
    subtitlesAvailable: true,
    audioTracks: "Audio Italiano & Inglese",
  },
  {
    id: "pt",
    name: "Portuguese (Portugal & Brazil)",
    nativeName: "Português",
    flag: "🇵🇹 🇧🇷",
    channelCount: "2,100+ Live Channels",
    vodCount: "8,000+ Filmes e Séries Dobrados",
    popularChannels: ["Sport TV 1-5 HD", "Benfica TV", "Eleven Sports Portugal", "Globo Premium", "Premiere FC"],
    subtitlesAvailable: true,
    audioTracks: "Português de Portugal e Brasileiro",
  },
  {
    id: "in",
    name: "Hindi & South Asian (India, Pakistan, Bangladesh)",
    nativeName: "हिन्दी / اردو",
    flag: "🇮🇳 🇵🇰 🇧🇩",
    channelCount: "3,100+ Live Channels",
    vodCount: "14,000+ Bollywood & Regional Cinema",
    popularChannels: ["Star Sports 1 Hindi 4K", "Sony Ten 1-3", "Colors HD", "Zee TV", "Geo News", "ARY Digital"],
    subtitlesAvailable: true,
    audioTracks: "Hindi, Urdu, Tamil, Telugu, Punjabi",
  },
  {
    id: "tr",
    name: "Turkish (Turkey & Cyprus)",
    nativeName: "Türkçe",
    flag: "🇹🇷 🇨🇾",
    channelCount: "1,400+ Live Channels",
    vodCount: "6,000+ Yerli Dizi ve Filmler",
    popularChannels: ["beIN Sports Türkiye 1-4", "S Sport 1&2", "ATV HD", "Kanal D", "Show TV", "TRT 1 4K"],
    subtitlesAvailable: true,
    audioTracks: "Türkçe Dublaj & Altyazılı",
  },
];

export const LanguagesPage: React.FC<LanguagesPageProps> = ({ onOpenStore }) => {
  const [search, setSearch] = useState("");

  const filteredRegions = REGIONS_DATA.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.nativeName.toLowerCase().includes(search.toLowerCase()) ||
      r.popularChannels.some((c) => c.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-black text-white py-12 px-4 sm:px-8 md:px-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black">
              <Globe2 className="w-3.5 h-3.5" />
              <span>MULTILINGUAL &amp; GLOBAL STREAMING DIRECTORY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Watch in Your Native Language
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Tiger OTT features dedicated localized channel bouquets and on-demand libraries for over 50 countries, with multi-audio commentary feeds and selectable subtitles.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex-shrink-0 space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Global Coverage
            </span>
            <div className="text-2xl font-black text-white">50+ Countries</div>
            <button
              type="button"
              onClick={onOpenStore}
              className="w-full px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs rounded-xl transition cursor-pointer shadow-md"
            >
              Get Global Pass ($1.65/mo)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by country, language, or network (e.g. 'Arabic', 'Spanish', 'beIN', 'Canal+')..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-neutral-300 focus:border-amber-500 rounded-2xl text-sm font-semibold text-neutral-900 outline-none transition shadow-2xs"
          />
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRegions.map((region) => (
            <div
              key={region.id}
              className="bg-white border border-neutral-200 hover:border-amber-500 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{region.flag}</span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-black font-mono">
                    {region.nativeName}
                  </span>
                </div>

                <h3 className="font-black text-lg text-neutral-900 mb-2">{region.name}</h3>

                <div className="flex items-center space-x-3 text-xs text-neutral-600 font-bold mb-4">
                  <span className="flex items-center space-x-1">
                    <Tv className="w-3.5 h-3.5 text-amber-600" />
                    <span>{region.channelCount}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Film className="w-3.5 h-3.5 text-blue-600" />
                    <span>{region.vodCount}</span>
                  </span>
                </div>

                {/* Popular Channels List */}
                <div className="bg-[#f8fafc] rounded-2xl p-3.5 border border-neutral-200 mb-4 space-y-2">
                  <div className="text-[11px] font-black text-neutral-700 uppercase tracking-wider">
                    Featured Channels:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {region.popularChannels.map((ch, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white border border-neutral-200 rounded-md text-[11px] font-bold text-neutral-800"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 text-xs text-neutral-500 mb-4">
                  <div className="flex items-center space-x-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="font-medium truncate">{region.audioTracks}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-medium text-emerald-700">Subtitles &amp; Closed Captions Included</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenStore}
                className="w-full py-2.5 bg-neutral-900 hover:bg-amber-500 text-white hover:text-black font-black text-xs rounded-xl transition cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>Select {region.nativeName} Package</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesPage;
