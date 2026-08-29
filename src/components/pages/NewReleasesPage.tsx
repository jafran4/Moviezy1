import React from "react";
import {
  Flame,
  Sparkles,
  Calendar,
  Star,
  Play,
  Info,
  Clock,
  BellRing
} from "lucide-react";
import { MediaItem } from "../../types";
import NetflixCard from "../NetflixCard";

interface NewReleasesPageProps {
  top10: MediaItem[];
  trending: MediaItem[];
  upcoming: MediaItem[];
  myListIds: Set<string | number>;
  onPlayMedia: (item: MediaItem) => void;
  onOpenDetail: (item: MediaItem) => void;
  onToggleMyList: (item: MediaItem) => void;
  onOpenStore: () => void;
}

export const NewReleasesPage: React.FC<NewReleasesPageProps> = ({
  top10,
  trending,
  upcoming,
  myListIds,
  onPlayMedia,
  onOpenDetail,
  onToggleMyList,
  onOpenStore,
}) => {
  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-black text-white py-12 px-4 sm:px-8 md:px-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>FRESH 4K RELEASES &amp; PREMIERES (2026 - 2027)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              New &amp; Trending Releases
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Discover what's trending across all global streaming networks. Daily updated 4K HDR releases from Netflix, HBO Max, Apple TV+, and Amazon Prime.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex-shrink-0 space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Auto-Updated Daily
            </span>
            <div className="text-2xl font-black text-white">60,000+ <span className="text-xs font-normal text-neutral-300">VOD Titles</span></div>
            <button
              type="button"
              onClick={onOpenStore}
              className="w-full px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs rounded-xl transition cursor-pointer shadow-md"
            >
              Get Tiger OTT VIP
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 space-y-12">
        {/* Top 10 Today Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900 flex items-center space-x-2">
                <Flame className="w-6 h-6 text-red-600" />
                <span>🔥 Top 10 Most Streamed Today</span>
              </h2>
              <p className="text-xs text-neutral-500">
                Ranked by real-time viewer count across 50,000+ Tiger OTT active subscribers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {top10.slice(0, 10).map((item, idx) => (
              <div key={`top10-new-${item.id}`} className="relative group">
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
        </div>

        {/* Trending This Week */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Trending Worldwide</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {trending.map((item) => (
              <NetflixCard
                key={`trending-new-${item.id}`}
                media={item}
                onPlay={onPlayMedia}
                onOpenDetail={onOpenDetail}
                isInMyList={myListIds.has(item.id)}
                onToggleMyList={onToggleMyList}
              />
            ))}
          </div>
        </div>

        {/* Upcoming in 2026-2027 Calendar */}
        {upcoming.length > 0 && (
          <div className="pt-8 border-t border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Coming Soon (2026 - 2027 Premieres)</span>
                </h3>
                <p className="text-xs text-neutral-500">
                  Add to your watchlist to receive instant notifications when these release in 4K
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {upcoming.slice(0, 5).map((item) => (
                <NetflixCard
                  key={`upcoming-new-${item.id}`}
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

export default NewReleasesPage;
