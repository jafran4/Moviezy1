import React, { useState } from "react";
import {
  Film,
  Sparkles,
  Flame,
  Star,
  Play,
  Info,
  Layers,
  Filter,
  Check,
  Clapperboard,
  Tv
} from "lucide-react";
import { MediaItem } from "../../types";
import NetflixCard from "../NetflixCard";

interface MoviesPageProps {
  trending: MediaItem[];
  popular: MediaItem[];
  actionHits: MediaItem[];
  scifiHits: MediaItem[];
  topRated: MediaItem[];
  myListIds: Set<string | number>;
  onPlayMedia: (item: MediaItem) => void;
  onOpenDetail: (item: MediaItem) => void;
  onToggleMyList: (item: MediaItem) => void;
  onOpenStore: () => void;
}

const MOVIE_GENRES = [
  "All Movies",
  "Action & Adventure",
  "Sci-Fi & Cyberpunk",
  "Crime & Thriller",
  "Comedy & Romance",
  "Horror & Supernatural",
  "Award Winners & Classics",
];

const QUALITIES = [
  { id: "all", label: "All Formats" },
  { id: "4k", label: "4K Ultra HD (HDR10+)" },
  { id: "imax", label: "IMAX Enhanced" },
  { id: "dolby", label: "Dolby Atmos 7.1" },
  { id: "1080p", label: "1080p FHD" },
];

export const MoviesPage: React.FC<MoviesPageProps> = ({
  trending,
  popular,
  actionHits,
  scifiHits,
  topRated,
  myListIds,
  onPlayMedia,
  onOpenDetail,
  onToggleMyList,
  onOpenStore,
}) => {
  const [selectedGenre, setSelectedGenre] = useState("All Movies");
  const [selectedQuality, setSelectedQuality] = useState("all");

  const heroMovie = trending[1] || trending[0];

  const getFilteredMovies = () => {
    if (selectedGenre === "Action & Adventure") {
      return actionHits.length > 0 ? actionHits : popular;
    }
    if (selectedGenre === "Sci-Fi & Cyberpunk") {
      return scifiHits.length > 0 ? scifiHits : trending;
    }
    if (selectedGenre === "Award Winners & Classics") {
      return topRated.length > 0 ? topRated : popular;
    }
    return popular.length > 0 ? popular : trending;
  };

  const moviesList = getFilteredMovies();

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Featured 4K Movie Hero Billboard */}
      {heroMovie && (
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] bg-black overflow-hidden mb-8">
          <img
            src={`https://image.tmdb.org/t/p/original${heroMovie.backdrop_path || heroMovie.poster_path}`}
            alt={heroMovie.title}
            className="w-full h-full object-cover object-center opacity-70 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-12 left-4 sm:left-10 md:left-14 max-w-2xl text-white space-y-3 z-10">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-500 text-black font-black text-xs uppercase tracking-wider">
                4K UHD Movie Cinema
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/20 text-white font-bold text-xs uppercase backdrop-blur-xs">
                Dolby Vision
              </span>
              <span className="text-xs font-bold text-neutral-300">
                ⭐ {heroMovie.vote_average?.toFixed(1) || "8.7"} IMDb
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
              {heroMovie.title}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-200 line-clamp-3 max-w-xl font-normal leading-relaxed">
              {heroMovie.overview}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={() => onPlayMedia(heroMovie)}
                className="flex items-center space-x-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-lg shadow-amber-500/30"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Play Movie in 4K</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenDetail(heroMovie)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer border border-white/30"
              >
                <Info className="w-4 h-4" />
                <span>Trailer &amp; Cast</span>
              </button>
              <button
                type="button"
                onClick={onOpenStore}
                className="hidden sm:flex items-center space-x-1.5 px-4 py-2.5 bg-neutral-900/80 hover:bg-neutral-900 text-amber-400 font-bold text-xs rounded-xl transition cursor-pointer border border-amber-500/40"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>60,000+ Movies ($1.65/mo)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-10">
        {/* Format & Quality Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
          <div className="flex items-center space-x-2">
            <Film className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900">
              60,000+ VOD Cinema Library
            </h2>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {QUALITIES.map((q) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setSelectedQuality(q.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  selectedQuality === q.id
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        {/* Movie Genres Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {MOVIE_GENRES.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedGenre === genre
                  ? "bg-amber-500 text-black font-black shadow-xs"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Primary Filtered Movies Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-black text-neutral-900">
              {selectedGenre === "All Movies" ? "Top 4K Cinema Hits & Blockbusters" : selectedGenre}
            </h3>
            <span className="text-xs font-bold text-neutral-500">
              Showing {moviesList.length} Titles
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
            {moviesList.map((item) => (
              <NetflixCard
                key={`movie-${item.id}`}
                media={item}
                onPlay={onPlayMedia}
                onOpenDetail={onOpenDetail}
                isInMyList={myListIds.has(item.id)}
                onToggleMyList={onToggleMyList}
              />
            ))}
          </div>
        </div>

        {/* Action Hits Section */}
        {actionHits.length > 0 && selectedGenre === "All Movies" && (
          <div className="pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-red-600" />
                <h3 className="text-lg sm:text-xl font-black text-neutral-900">
                  Explosive Action &amp; Superhero Blockbusters
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
              {actionHits.slice(0, 5).map((item) => (
                <NetflixCard
                  key={`action-${item.id}`}
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

        {/* Sci-Fi Section */}
        {scifiHits.length > 0 && selectedGenre === "All Movies" && (
          <div className="pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg sm:text-xl font-black text-neutral-900">
                  Sci-Fi &amp; Futuristic Epics
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
              {scifiHits.slice(0, 5).map((item) => (
                <NetflixCard
                  key={`scifi-${item.id}`}
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
      </div>
    </div>
  );
};

export default MoviesPage;
