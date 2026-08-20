import React, { useState } from "react";
import {
  Download,
  Tv,
  Laptop,
  CheckCircle2,
  Play,
  Facebook,
  ExternalLink,
  Info,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  Sparkles,
  Zap
} from "lucide-react";
import { DeviceGuideItem, searchDeviceGuides, DEVICE_GUIDES } from "../data/deviceGuidesData";
import { BLOG_POSTS, BlogPost } from "../data/blogData";
import { OFFICIAL_FACEBOOK_PAGE } from "./TigerSubscriptionSection";

interface DeviceSearchGuideResultsProps {
  searchQuery: string;
  onOpenStore?: () => void;
  onOpenBlogArticle?: (post: BlogPost) => void;
}

export const DeviceSearchGuideResults: React.FC<DeviceSearchGuideResultsProps> = ({
  searchQuery,
  onOpenStore,
  onOpenBlogArticle,
}) => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [expandedGuideId, setExpandedGuideId] = useState<string | null>(null);

  // Match device guides
  const matchedGuides = searchDeviceGuides(searchQuery);

  // If no direct guide match, but search query is not empty, fallback to showing all top TV brands if query mentions tv/iptv/device/setup
  const displayedGuides: DeviceGuideItem[] =
    matchedGuides.length > 0
      ? matchedGuides
      : searchQuery.toLowerCase().includes("tv") ||
        searchQuery.toLowerCase().includes("iptv") ||
        searchQuery.toLowerCase().includes("download") ||
        searchQuery.toLowerCase().includes("how") ||
        searchQuery.toLowerCase().includes("app")
      ? DEVICE_GUIDES.slice(0, 3)
      : [];

  // Match blog articles
  const qLower = searchQuery.toLowerCase().trim();
  const matchedBlogs = BLOG_POSTS.filter((post) => {
    return (
      post.title.toLowerCase().includes(qLower) ||
      post.targetKeywords.some((kw) => kw.toLowerCase().includes(qLower) || qLower.includes(kw.toLowerCase())) ||
      post.excerpt.toLowerCase().includes(qLower)
    );
  });

  if (displayedGuides.length === 0 && matchedBlogs.length === 0) {
    return null;
  }

  const handleScrollToGuide = () => {
    const el = document.getElementById("how-to-download-iptv-smarters-pro-on-tv");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="mb-10 space-y-8 animate-fadeIn" id="search-device-guide-results">
      {/* Featured Header for Device & Download Guides */}
      <div className="bg-gradient-to-r from-amber-500/15 via-blue-500/10 to-amber-500/15 border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-black flex items-center justify-center flex-shrink-0 shadow-md">
              <Download className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider bg-amber-400 text-black px-2 py-0.5 rounded">
                  Official Setup Guides
                </span>
                <span className="text-xs text-neutral-500 font-semibold">
                  Matched for "{searchQuery}"
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-neutral-900 mt-1">
                How to Download &amp; Setup IPTV Smarters Pro on {displayedGuides.length > 0 ? displayedGuides.map(g => g.brand).join(", ") : "Your Device"}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={handleScrollToGuide}
              className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 transition shadow-sm cursor-pointer"
            >
              <span>Full Guide on Page</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
            <a
              href={OFFICIAL_FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 transition shadow-sm cursor-pointer"
            >
              <Facebook className="w-3.5 h-3.5 fill-white" />
              <span>Ask on Facebook</span>
            </a>
          </div>
        </div>

        {/* 1-on-1 Personalized Assistance Banner */}
        <div className="mt-4 p-3 bg-white/80 backdrop-blur-xs border border-amber-300 rounded-xl text-xs sm:text-sm text-neutral-800 flex items-start space-x-2.5 shadow-xs">
          <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Personalized Setup Help:</strong> Tell us on Facebook the exact brand and model of your TV (LG, Samsung, Sony, TCL, Philips, Hisense) or laptop (Windows/Mac), and our support team will give you step-by-step instructions tailored precisely to your operating system!
          </p>
        </div>
      </div>

      {/* Device Step-by-Step Cards */}
      {displayedGuides.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base sm:text-lg font-black text-neutral-900 flex items-center space-x-2">
              <Tv className="w-4 h-4 text-amber-600" />
              <span>Download Instructions by Device</span>
            </h4>
            <span className="text-xs text-neutral-500 font-semibold">
              Showing {displayedGuides.length} matching device guide{displayedGuides.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {displayedGuides.map((guide) => {
              const isExpanded = expandedGuideId === guide.id || displayedGuides.length === 1;

              return (
                <div
                  key={guide.id}
                  className="bg-white border-2 border-neutral-200 hover:border-amber-400 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header Image & Store Badge */}
                    <div className="relative h-40 w-full overflow-hidden bg-neutral-900">
                      <img
                        src={guide.image}
                        alt={guide.name}
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-3.5">
                        <div className="flex items-center justify-between">
                          <span className={`px-2.5 py-1 rounded-md text-[11px] font-black uppercase tracking-wider ${guide.badgeColor} shadow-md`}>
                            {guide.brand}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-black/70 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                            {guide.appStore}
                          </span>
                        </div>

                        <div>
                          <p className="text-xs text-neutral-300 font-medium">{guide.os}</p>
                          <h5 className="text-sm sm:text-base font-black text-white leading-snug drop-shadow-sm">
                            {guide.name}
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-4 sm:p-5 space-y-3">
                      <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                        {guide.summary}
                      </p>

                      {/* Step-by-Step Instructions */}
                      <div className="space-y-2 bg-neutral-50 border border-neutral-200 rounded-xl p-3.5">
                        <p className="text-xs font-extrabold text-neutral-900 flex items-center justify-between">
                          <span className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Installation Steps ({guide.stepByStep.length} steps):</span>
                          </span>
                          {guide.stepByStep.length > 3 && (
                            <button
                              type="button"
                              onClick={() => setExpandedGuideId(isExpanded ? null : guide.id)}
                              className="text-[11px] text-amber-700 hover:text-amber-800 font-bold underline cursor-pointer"
                            >
                              {isExpanded ? "Show Less" : "View All Steps"}
                            </button>
                          )}
                        </p>

                        <ol className="space-y-1.5 text-xs text-neutral-700 list-decimal list-inside pl-1">
                          {(isExpanded ? guide.stepByStep : guide.stepByStep.slice(0, 3)).map((step, idx) => (
                            <li key={idx} className="leading-relaxed">
                              <span className="font-normal text-neutral-800">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Notes / Special Publisher Details */}
                      {guide.verifiedPublisher && (
                        <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 flex items-start space-x-2">
                          <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Official Publisher:</strong> {guide.verifiedPublisher}
                          </span>
                        </div>
                      )}

                      {guide.notes && (
                        <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start space-x-2">
                          <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{guide.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      {guide.videoEmbedUrl && (
                        <button
                          type="button"
                          onClick={() => setActiveVideoModal(guide.videoEmbedUrl || null)}
                          className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center space-x-1 transition shadow-xs cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-white" />
                          <span>Video Tutorial</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={handleScrollToGuide}
                        className="px-3 py-1.5 bg-neutral-800 hover:bg-black text-white rounded-lg text-xs font-bold flex items-center space-x-1 transition cursor-pointer"
                      >
                        <span>Download Page</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <a
                      href={OFFICIAL_FACEBOOK_PAGE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#1877F2] hover:underline flex items-center space-x-1"
                    >
                      <Facebook className="w-3 h-3 fill-[#1877F2]" />
                      <span>Get {guide.brand} Help</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Matched Blog Guides & Knowledge Articles */}
      {matchedBlogs.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-neutral-200">
          <h4 className="text-base sm:text-lg font-black text-neutral-900 flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Matching IPTV Guides &amp; Articles ({matchedBlogs.length})</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchedBlogs.map((post) => (
              <div
                key={post.id}
                onClick={() => onOpenBlogArticle && onOpenBlogArticle(post)}
                className="bg-white border border-neutral-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-lg transition cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-2">
                    <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h5 className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition leading-snug mb-2">
                    {post.title}
                  </h5>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-amber-700">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Play className="w-4 h-4 text-red-500 fill-red-500" />
                <span>IPTV Smarters Pro Setup Tutorial</span>
              </span>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition text-xs font-bold cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="relative pb-[56.25%] h-0 w-full bg-black">
              <iframe
                src={activeVideoModal}
                title="IPTV Smarters Pro Installation Video Tutorial"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceSearchGuideResults;
