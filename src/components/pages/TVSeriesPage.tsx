import React, { useState } from "react";
import {
  Tv,
  Sparkles,
  Flame,
  Star,
  Play,
  Info,
  Layers,
  ChevronRight,
  Filter,
  Check
} from "lucide-react";
import { MediaItem } from "../../types";
import NetflixCard from "../NetflixCard";
import { NetflixBrandLogo, PrimeVideoBrandLogo } from "../BrandLogos";

interface TVSeriesPageProps {
  tvShows: MediaItem[];
  trending: MediaItem[];
  topRated: MediaItem[];
  myListIds: Set<string | number>;
  onPlayMedia: (item: MediaItem) => void;
  onOpenDetail: (item: MediaItem) => void;
  onToggleMyList: (item: MediaItem) => void;
  onOpenStore: () => void;
}

const NETWORKS = [
  { id: "all", name: "All Networks", color: "bg-neutral-900 text-white" },
  { id: "netflix", name: "Netflix Originals", color: "bg-red-600 text-white" },
  { id: "hbo", name: "HBO / Max", color: "bg-purple-700 text-white" },
  { id: "prime", name: "Amazon Prime", color: "bg-[#007399] text-white" },
  { id: "disney", name: "Disney+", color: "bg-blue-700 text-white" },
  { id: "apple", name: "Apple TV+", color: "bg-neutral-800 text-white" },
  { id: "amc", name: "AMC", color: "bg-amber-600 text-white" },
];

const TV_GENRES = [
  "All Series",
  "Crime & Drama",
  "Sci-Fi & Fantasy",
  "Action & Adventure",
  "Comedy & Sitcoms",
  "Anime & Animation",
  "Documentary & Reality",
];

export const TVSeriesPage: React.FC<TVSeriesPageProps> = ({
  tvShows,
  trending,
  topRated,
  myListIds,
  onPlayMedia,
  onOpenDetail,
  onToggleMyList,
  onOpenStore,
}) => {
  const [selectedNetwork, setSelectedNetwork] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("All Series");

  // Filter TV shows
  const allTV = tvShows.length > 0 ? tvShows : trending;
  const filteredShows = allTV.filter((show) => {
    if (selectedGenre === "All Series") return true;
    if (selectedGenre === "Crime & Drama") {
      return show.overview.toLowerCase().includes("crime") || show.overview.toLowerCase().includes("drama") || (show.genre_ids && show.genre_ids.includes(18));
    }
    if (selectedGenre === "Sci-Fi & Fantasy") {
      return show.overview.toLowerCase().includes("sci-fi") || show.overview.toLowerCase().includes("magic") || (show.genre_ids && show.genre_ids.includes(10765));
    }
    if (selectedGenre === "Action & Adventure") {
      return show.overview.toLowerCase().includes("action") || (show.genre_ids && show.genre_ids.includes(10759));
    }
    if (selectedGenre === "Comedy & Sitcoms") {
      return show.overview.toLowerCase().includes("comedy") || show.overview.toLowerCase().includes("funny") || (show.genre_ids && show.genre_ids.includes(35));
    }
    return true;
  });

  const featuredShow = allTV[0] || trending[0];

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Featured TV Show Hero Banner */}
      {featuredShow && (
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-black overflow-hidden mb-8">
          <img
            src={`https://image.tmdb.org/t/p/original${featuredShow.backdrop_path || featuredShow.poster_path}`}
            alt={featuredShow.title || featuredShow.name}
            className="w-full h-full object-cover object-center opacity-70 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-10 md:left-14 max-w-2xl text-white space-y-3 z-10">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-md bg-red-600 text-white font-black text-xs uppercase tracking-wider">
                TV Series Spotlight
              </span>
              <span className="px-2.5 py-1 rounded-md bg-amber-500 text-black font-black text-xs uppercase">
                4K Ultra HD
              </span>
              <span className="text-xs font-bold text-neutral-300">
                ⭐ {featuredShow.vote_average?.toFixed(1) || "8.9"} IMDb
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
              {featuredShow.title || featuredShow.name}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-200 line-clamp-3 max-w-xl font-normal leading-relaxed">
              {featuredShow.overview}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => onPlayMedia(featuredShow)}
                className="flex items-center space-x-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-lg shadow-amber-500/30"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Season 1 (Ep 1)</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenDetail(featuredShow)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer border border-white/30"
              >
                <Info className="w-4 h-4" />
                <span>All Episodes &amp; Details</span>
              </button>
              <button
                type="button"
                onClick={onOpenStore}
                className="hidden sm:flex items-center space-x-1.5 px-4 py-2.5 bg-neutral-900/80 hover:bg-neutral-900 text-amber-400 font-bold text-xs rounded-xl transition cursor-pointer border border-amber-500/40"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unlock All TV Series ($2.99)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-10">
        {/* Network Selection Bar */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base sm:text-lg font-black text-neutral-900 flex items-center space-x-2">
              <Tv className="w-4 h-4 text-amber-500" />
              <span>Browse by Network &amp; Platform</span>
            </h2>
            <span className="text-xs text-neutral-500 font-medium">Included in Tiger OTT VIP</span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {NETWORKS.map((net) => (
              <button
                key={net.id}
                type="button"
                onClick={() => setSelectedNetwork(net.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition whitespace-nowrap cursor-pointer ${
                  selectedNetwork === net.id
                    ? `${net.color} shadow-md scale-102`
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                {net.name}
              </button>
            ))}
          </div>
        </div>

        {/* TV Genres Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-200 pb-4">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-neutral-500 pr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Genre:</span>
          </div>
          {TV_GENRES.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setSelectedGenre(genre)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedGenre === genre
                  ? "bg-amber-500 text-black shadow-xs font-black"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Grid of Filtered TV Shows */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
                {selectedGenre === "All Series" ? "Popular & Trending TV Shows" : `${selectedGenre}`}
              </h3>
              <p className="text-xs text-neutral-500">
                Complete Seasons • Multi-Audio (English, Spanish, Arabic, French) • 4K HDR
              </p>
            </div>
            <span className="text-xs font-bold text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200">
              {filteredShows.length} Titles Available
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
            {filteredShows.map((item) => (
              <NetflixCard
                key={`tv-show-${item.id}`}
                media={item}
                onPlay={onPlayMedia}
                onOpenDetail={onOpenDetail}
                isInMyList={myListIds.has(item.id)}
                onToggleMyList={onToggleMyList}
              />
            ))}
          </div>
        </div>

        {/* Top Rated Series Section */}
        {topRated.length > 0 && (
          <div className="pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span>Critically Acclaimed &amp; Highest Rated (9.0+ IMDb)</span>
                </h3>
                <p className="text-xs text-neutral-500">
                  Award-winning dramas, mind-bending thrillers, and fan favorites
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
              {topRated.slice(0, 5).map((item) => (
                <NetflixCard
                  key={`top-rated-tv-${item.id}`}
                  media={item}
                  onPlay={onPlayMedia}
                  onOpenDetail={onOpenDetail}
                  isInMyList={myListIds.has(item.id)}
                  onToggleMyList={onToggleMyList}
                />
              ))}
            </div>
          </div>
        )}

        {/* Banner Callout for TV Series Lovers */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-black rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-black border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>30,000+ Complete TV Series Boxsets</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Never Miss a New Episode Again
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              Get auto-updated daily episodes from Netflix, HBO Max, Prime Video, Hulu, Disney+, and Paramount+ with zero buffering.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenStore}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm rounded-xl transition cursor-pointer shadow-lg whitespace-nowrap"
          >
            Get Tiger OTT All-Access ($1.65/mo)
          </button>
        </div>
      </div>
    </div>
  );
};

export default TVSeriesPage;
