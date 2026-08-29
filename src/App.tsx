import React, { useState, useEffect, useMemo, useRef } from "react";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixHero from "./components/NetflixHero";
import NetflixRow from "./components/NetflixRow";
import NetflixCard from "./components/NetflixCard";
import NetflixDetailModal from "./components/NetflixDetailModal";
import NetflixPlayer from "./components/NetflixPlayer";
import { TVVirtualKeyboard } from "./components/TVVirtualKeyboard";
import { TVRemoteHelpModal } from "./components/TVRemoteHelpModal";
import TigerSubscriptionSection from "./components/TigerSubscriptionSection";
import { TigerSEOSection } from "./components/TigerSEOSection";
import { TigerIPTVBlogSection } from "./components/TigerIPTVBlogSection";
import { IPTVSmartersDownloadGuide } from "./components/IPTVSmartersDownloadGuide";
import { DeviceSearchGuideResults } from "./components/DeviceSearchGuideResults";
import { UserLoginModal } from "./components/UserLoginModal";
import OTTCheckoutModal from "./components/OTTCheckoutModal";
import { TigerLogo } from "./components/TigerLogo";
import { TigerNewHomePage } from "./components/TigerNewHomePage";
import { TVSeriesPage } from "./components/pages/TVSeriesPage";
import { MoviesPage } from "./components/pages/MoviesPage";
import { LiveSportsPage } from "./components/pages/LiveSportsPage";
import { LiveChannelsPage } from "./components/pages/LiveChannelsPage";
import { NewReleasesPage } from "./components/pages/NewReleasesPage";
import { DeviceSetupPage } from "./components/pages/DeviceSetupPage";
import { ResellerPage } from "./components/pages/ResellerPage";
import { LanguagesPage } from "./components/pages/LanguagesPage";
import { FAQPage } from "./components/pages/FAQPage";
import { MediaItem, ActiveNavTab, UserProfile, OTTPlan, OTTService, AuthUser } from "./types";
import {
  fetchCategoryMedia,
  searchTMDb,
} from "./services/tmdb";
import {
  PROFILES,
  FALLBACK_HERO,
  FALLBACK_TRENDING,
} from "./data/fallbackData";
import {
  detectTVDevice,
  findNextFocusable,
  saveFocusState,
  restoreFocus,
  focusElement,
} from "./services/spatialNav";
import { Facebook, Instagram, Twitter, Youtube, Tv, Sparkles, Filter } from "lucide-react";

const App: React.FC = () => {
  // Navigation & User State
  const [activeTab, setActiveTab] = useState<ActiveNavTab>("home");
  const [currentProfile, setCurrentProfile] = useState<UserProfile>(PROFILES[0]);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem("tiger_ott_auth_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<MediaItem[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  // TV Remote & Device Mode State
  const [isTVMode, setIsTVMode] = useState<boolean>(() => detectTVDevice());
  const [showTVHelp, setShowTVHelp] = useState<boolean>(false);
  const lastFocusedCardRef = useRef<string | null>(null);

  // Active Modals & Player State
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [playingMedia, setPlayingMedia] = useState<MediaItem | null>(null);
  const [checkoutPlan, setCheckoutPlan] = useState<OTTPlan | null>(null);
  const [checkoutService, setCheckoutService] = useState<OTTService | null>(null);

  // Category Media Feeds
  const [heroMedia, setHeroMedia] = useState<MediaItem | null>(FALLBACK_HERO);
  const [trending, setTrending] = useState<MediaItem[]>(FALLBACK_TRENDING);
  const [top10, setTop10] = useState<MediaItem[]>(FALLBACK_TRENDING);
  const [popular, setPopular] = useState<MediaItem[]>(FALLBACK_TRENDING);
  const [tvShows, setTvShows] = useState<MediaItem[]>([]);
  const [actionHits, setActionHits] = useState<MediaItem[]>([]);
  const [scifiHits, setScifiHits] = useState<MediaItem[]>([]);
  const [topRated, setTopRated] = useState<MediaItem[]>([]);
  const [upcoming, setUpcoming] = useState<MediaItem[]>([]);
  const [comedies, setComedies] = useState<MediaItem[]>([]);
  const [horrors, setHorrors] = useState<MediaItem[]>([]);

  // Watchlist (My List)
  const [myList, setMyList] = useState<MediaItem[]>(() => {
    try {
      const saved = localStorage.getItem("netflix_my_list");
      return saved ? JSON.parse(saved) : [FALLBACK_HERO, FALLBACK_TRENDING[1]];
    } catch {
      return [FALLBACK_HERO];
    }
  });

  const myListIds = useMemo(() => new Set(myList.map((m) => m.id)), [myList]);

  // Continue Watching List with Simulated Watch Progress
  const [continueWatching, setContinueWatching] = useState<MediaItem[]>(() => [
    FALLBACK_TRENDING[1],
    FALLBACK_TRENDING[2],
  ]);

  // Load category data on boot
  useEffect(() => {
    const loadAllFeeds = async () => {
      try {
        const [
          trendRes,
          top10Res,
          popRes,
          tvRes,
          actionRes,
          scifiRes,
          topRatedRes,
          upcomingRes,
          comedyRes,
          horrorRes,
        ] = await Promise.all([
          fetchCategoryMedia("trending"),
          fetchCategoryMedia("top10"),
          fetchCategoryMedia("popular"),
          fetchCategoryMedia("tv"),
          fetchCategoryMedia("action"),
          fetchCategoryMedia("scifi"),
          fetchCategoryMedia("topRated"),
          fetchCategoryMedia("upcoming"),
          fetchCategoryMedia("comedy"),
          fetchCategoryMedia("horror"),
        ]);

        if (trendRes.length > 0) {
          setTrending(trendRes);
          const candidate = trendRes.find((m) => m.backdrop_path && m.vote_average >= 7.8) || trendRes[0];
          setHeroMedia(candidate);
        }
        if (top10Res.length > 0) setTop10(top10Res.slice(0, 10));
        if (popRes.length > 0) setPopular(popRes);
        if (tvRes.length > 0) setTvShows(tvRes);
        if (actionRes.length > 0) setActionHits(actionRes);
        if (scifiRes.length > 0) setScifiHits(scifiRes);
        if (topRatedRes.length > 0) setTopRated(topRatedRes);
        if (upcomingRes.length > 0) setUpcoming(upcomingRes);
        if (comedyRes.length > 0) setComedies(comedyRes);
        if (horrorRes.length > 0) setHorrors(horrorRes);
      } catch (err) {
        console.warn("Failed to load some TMDb rows", err);
      }
    };

    loadAllFeeds();
  }, []);

  // Save watchlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("netflix_my_list", JSON.stringify(myList));
    } catch (e) {
      console.warn("Failed to persist watchlist", e);
    }
  }, [myList]);

  // Save authenticated user to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem("tiger_ott_auth_user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("tiger_ott_auth_user");
      }
    } catch (e) {
      console.warn("Failed to persist auth user", e);
    }
  }, [currentUser]);

  // Handle Search Input (Debounced)
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setSearchLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      setSearchLoading(true);
      const results = await searchTMDb(searchQuery.trim());
      setSearchResults(results);
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Global D-Pad Spatial Navigation & Remote Control Engine
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Don't hijack typing if user is focused inside a real text input
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        if (e.key === "Escape") {
          (document.activeElement as HTMLElement).blur();
        }
        return;
      }

      // 1. Back Keys: Escape, Backspace, or TV Remote KeyCodes (10009 Samsung Tizen, 461 LG webOS)
      if (
        e.key === "Escape" ||
        e.key === "Backspace" ||
        e.key === "BrowserBack" ||
        e.keyCode === 10009 ||
        e.keyCode === 461 ||
        e.keyCode === 27
      ) {
        if (playingMedia) {
          e.preventDefault();
          setPlayingMedia(null);
          restoreFocus(lastFocusedCardRef.current || undefined);
          return;
        }
        if (selectedMedia) {
          e.preventDefault();
          setSelectedMedia(null);
          restoreFocus(lastFocusedCardRef.current || undefined);
          return;
        }
        if (showTVHelp) {
          e.preventDefault();
          setShowTVHelp(false);
          return;
        }
        if (checkoutPlan) {
          e.preventDefault();
          setCheckoutPlan(null);
          setCheckoutService(null);
          return;
        }
        if (searchQuery) {
          e.preventDefault();
          setSearchQuery("");
          return;
        }
      }

      // 2. Spatial Navigation Arrows: Up, Down, Left, Right
      const arrowMap: { [key: string]: "up" | "down" | "left" | "right" } = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };

      const direction = arrowMap[e.key];
      if (direction) {
        // If modal or player is active, let them handle internal navigation
        if (playingMedia) return;

        const currentActive = (document.activeElement as HTMLElement) || document.body;
        const next = findNextFocusable(currentActive, direction);

        if (next) {
          e.preventDefault();
          focusElement(next);
          // Save card ID if focused element is a movie card
          const cardId = next.id || next.getAttribute("data-tv-id");
          if (cardId) {
            lastFocusedCardRef.current = cardId;
            saveFocusState(cardId);
          }
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [playingMedia, selectedMedia, showTVHelp, checkoutPlan, searchQuery]);

  // Toggle My List item
  const handleToggleMyList = (media: MediaItem) => {
    setMyList((prev) => {
      if (prev.some((item) => item.id === media.id)) {
        return prev.filter((item) => item.id !== media.id);
      } else {
        return [media, ...prev];
      }
    });
  };

  // Open Details Modal with focus memory
  const handleOpenDetailModal = (media: MediaItem) => {
    const activeEl = document.activeElement as HTMLElement | null;
    if (activeEl?.id) {
      lastFocusedCardRef.current = activeEl.id;
    }
    setSelectedMedia(media);
  };

  // Play handler
  const handlePlayMedia = (media: MediaItem) => {
    const activeEl = document.activeElement as HTMLElement | null;
    if (activeEl?.id) {
      lastFocusedCardRef.current = activeEl.id;
    }
    setPlayingMedia(media);
    setContinueWatching((prev) => {
      const filtered = prev.filter((m) => m.id !== media.id);
      return [media, ...filtered];
    });
  };

  const handleSelectTab = (tab: ActiveNavTab) => {
    if (tab === "ott_store" || tab === "reseller") {
      setActiveTab("home");
      setSearchQuery("");
      setTimeout(() => {
        const el = document.getElementById("tiger-ott-subscription");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      setActiveTab(tab);
      setActiveGenre(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Filter items by selected genre if set
  const filteredAction = useMemo(() => {
    if (!activeGenre) return actionHits;
    return actionHits;
  }, [actionHits, activeGenre]);

  return (
    <div className={`min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-amber-400 selection:text-neutral-950 font-sans ${
      isTVMode ? "text-[1.05rem]" : ""
    }`}>
      {/* Tiger OTT Top Navigation */}
      <NetflixNavbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={() => setSearchQuery("")}
        currentProfile={currentProfile}
        onSelectProfile={setCurrentProfile}
        myListCount={myList.length}
        currentUser={currentUser}
        onOpenLoginModal={() => setShowLoginModal(true)}
        onLogout={() => {
          setCurrentUser(null);
          try {
            localStorage.removeItem("tiger_ott_auth_user");
          } catch (e) {
            console.warn(e);
          }
        }}
        onOpenDetailModal={handleOpenDetailModal}
        onOpenTVHelp={() => setShowTVHelp(true)}
        isTVMode={isTVMode}
        onSelectGenre={(genre) => {
          setActiveGenre(genre);
          if (genre) {
            setTimeout(() => {
              const el = document.getElementById(`row-${genre.toLowerCase()}`);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
          }
        }}
        activeGenre={activeGenre}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-20">
        {/* If Search is Active: Show Virtual D-Pad Keyboard & Search Results */}
        {searchQuery.trim() || activeTab === "home" && searchQuery ? (
          <section className="pt-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto animate-fadeIn min-h-[75vh]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 mb-4">
              TV Search: <span className="text-amber-600 font-black">"{searchQuery || 'Start typing...'}"</span>
            </h2>

            {/* TV On-Screen Virtual Keyboard for Remote Control Typing */}
            <div className="mb-6">
              <TVVirtualKeyboard
                value={searchQuery}
                onChange={setSearchQuery}
                onSearch={(q) => setSearchQuery(q)}
                onClose={() => setSearchQuery("")}
              />
            </div>

            {/* Quick Device & Setup Search Tags */}
            <div className="mb-8 flex items-center flex-wrap gap-2">
              <span className="text-xs font-black uppercase text-neutral-400 mr-1 flex items-center gap-1">
                <Tv className="w-3.5 h-3.5 text-amber-500" />
                <span>Search by Device:</span>
              </span>
              {[
                { label: "LG TV (webOS)", q: "lg" },
                { label: "Samsung TV (Tizen)", q: "samsung" },
                { label: "Google TV / Sony / TCL", q: "google tv" },
                { label: "Amazon Firestick 4K", q: "firestick" },
                { label: "Windows PC / Laptop", q: "laptop" },
                { label: "Apple Mac App Store", q: "mac" },
                { label: "Roku TV Setup", q: "roku" },
                { label: "Tiger OTT Plans", q: "iptv" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => setSearchQuery(chip.q)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full transition cursor-pointer ${
                    searchQuery.toLowerCase().includes(chip.q)
                      ? "bg-amber-500 text-black shadow-sm"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Matching Device Setup Guides & IPTV Smarters Downloads (LG, Samsung, Google TV, PC, Mac, Firestick, etc.) */}
            {searchQuery.trim() && (
              <DeviceSearchGuideResults
                searchQuery={searchQuery}
                onOpenStore={() => handleSelectTab("ott_store")}
                onOpenBlogArticle={() => handleSelectTab("blog")}
              />
            )}

            <div className="flex items-center justify-between mb-4 pt-4 border-t border-neutral-200">
              <p className="text-xs sm:text-sm text-neutral-600 font-semibold">
                {searchResults.length > 0
                  ? `Found ${searchResults.length} movies & TV titles matching "${searchQuery}"`
                  : `Movie & TV Titles`}
              </p>
            </div>

            {searchLoading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[2/3] rounded-xl bg-neutral-200 animate-pulse"
                  />
                ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {searchResults.map((item) => (
                  <NetflixCard
                    key={item.id}
                    media={item}
                    onPlay={handlePlayMedia}
                    onOpenDetail={handleOpenDetailModal}
                    isInMyList={myListIds.has(item.id)}
                    onToggleMyList={handleToggleMyList}
                  />
                ))}
              </div>
            ) : searchQuery.trim() ? (
              <div className="text-center py-12 text-neutral-600 bg-neutral-50 rounded-2xl border border-neutral-200 p-8 shadow-xs">
                <p className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                  Device Setup Guides &amp; IPTV Instructions Loaded Above
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto mb-6">
                  Check out the step-by-step download guide and video tutorial matched above for <strong>"{searchQuery}"</strong>, or message us on Facebook for instant 1-on-1 assistance!
                </p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <button
                    data-tv-focusable="true"
                    onClick={() => {
                      const el = document.getElementById("how-to-download-iptv-smarters-pro-on-tv");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="px-5 py-2.5 bg-neutral-900 hover:bg-black text-white font-bold rounded-xl text-xs transition cursor-pointer"
                  >
                    View Complete TV Installation Page
                  </button>
                  <button
                    data-tv-focusable="true"
                    onClick={() => {
                      setSearchQuery("");
                      handleSelectTab("home");
                    }}
                    className="px-5 py-2.5 bg-[#E50914] hover:bg-[#b80710] text-white font-bold rounded-xl text-xs transition cursor-pointer"
                  >
                    Browse Trending Movies &amp; Shows
                  </button>
                </div>
              </div>
            ) : null}
          </section>
        ) : activeTab === "tv" ? (
          /* Dedicated TV Series Page */
          <section className="animate-fadeIn min-h-[85vh]">
            <TVSeriesPage
              tvShows={tvShows}
              trending={trending}
              topRated={topRated}
              myListIds={myListIds}
              onPlayMedia={handlePlayMedia}
              onOpenDetail={handleOpenDetailModal}
              onToggleMyList={handleToggleMyList}
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "movies" ? (
          /* Dedicated 4K Movies & Cinema Page */
          <section className="animate-fadeIn min-h-[85vh]">
            <MoviesPage
              trending={trending}
              popular={popular}
              actionHits={filteredAction}
              scifiHits={scifiHits}
              topRated={topRated}
              myListIds={myListIds}
              onPlayMedia={handlePlayMedia}
              onOpenDetail={handleOpenDetailModal}
              onToggleMyList={handleToggleMyList}
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "sports" ? (
          /* Dedicated 4K Live Sports & PPV Page */
          <section className="animate-fadeIn min-h-[85vh]">
            <LiveSportsPage
              onPlayMedia={handlePlayMedia}
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "channels" ? (
          /* Dedicated 25,000+ Worldwide Live TV Channels Directory */
          <section className="animate-fadeIn min-h-[85vh]">
            <LiveChannelsPage
              onPlayMedia={handlePlayMedia}
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "new" ? (
          /* Dedicated New Releases & Trending Leaderboard Page */
          <section className="animate-fadeIn min-h-[85vh]">
            <NewReleasesPage
              top10={top10}
              trending={trending}
              upcoming={upcoming}
              myListIds={myListIds}
              onPlayMedia={handlePlayMedia}
              onOpenDetail={handleOpenDetailModal}
              onToggleMyList={handleToggleMyList}
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "devices" ? (
          /* Dedicated Device Installation & App Setup Guides */
          <section className="animate-fadeIn min-h-[85vh]">
            <DeviceSetupPage
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "reseller" ? (
          /* Dedicated Reseller Panel & Wholesale Earnings Page */
          <section className="animate-fadeIn min-h-[85vh]">
            <ResellerPage
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "languages" ? (
          /* Dedicated Global Languages & Regional Bouquets Page */
          <section className="animate-fadeIn min-h-[85vh]">
            <LanguagesPage
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "faq" ? (
          /* Dedicated FAQ & Customer Support Center Page */
          <section className="animate-fadeIn min-h-[85vh]">
            <FAQPage
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : activeTab === "mylist" ? (
          /* My List Tab View */
          <section className="pt-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto animate-fadeIn min-h-[75vh]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              My Watchlist
            </h2>

            {myList.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {myList.map((item) => (
                  <NetflixCard
                    key={item.id}
                    media={item}
                    onPlay={handlePlayMedia}
                    onOpenDetail={handleOpenDetailModal}
                    isInMyList={myListIds.has(item.id)}
                    onToggleMyList={handleToggleMyList}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 text-neutral-600 bg-neutral-50 rounded-2xl border border-neutral-200 p-8 shadow-xs">
                <p className="text-lg font-bold text-neutral-900 mb-2">
                  You haven't added any titles to your list yet.
                </p>
                <p className="text-sm text-neutral-600 mb-6">
                  Browse movies and TV shows and click the <strong>+</strong> button to add them here.
                </p>
                <button
                  data-tv-focusable="true"
                  onClick={() => setActiveTab("home")}
                  className="px-6 py-3 bg-[#E50914] hover:bg-[#b80710] text-white font-extrabold rounded-xl text-sm transition focus:ring-4 focus:ring-amber-400 shadow-md"
                >
                  Browse Now
                </button>
              </div>
            )}
          </section>
        ) : activeTab === "blog" ? (
          /* Dedicated Blog & SEO Guides Tab View */
          <section className="animate-fadeIn min-h-[80vh]">
            <TigerIPTVBlogSection
              isDedicatedView={true}
              onOpenStore={() => handleSelectTab("ott_store")}
            />
          </section>
        ) : (
          /* Brand New Unified Home Page with Netflix, Amazon Prime, Live TV, UCL, Premier League & Spanish League */
          <TigerNewHomePage
            trending={trending}
            top10={top10}
            popular={popular}
            tvShows={tvShows}
            actionHits={filteredAction}
            scifiHits={scifiHits}
            topRated={topRated}
            upcoming={upcoming}
            myListIds={myListIds}
            onPlayMedia={handlePlayMedia}
            onOpenDetail={handleOpenDetailModal}
            onToggleMyList={handleToggleMyList}
            onSelectPlan={(plan, service) => {
              setCheckoutPlan(plan);
              setCheckoutService(service);
            }}
            onOpenStore={() => handleSelectTab("ott_store")}
          />
        )}
      </main>

      {/* Netflix Detail Modal ("More Info") */}
      {selectedMedia && (
        <NetflixDetailModal
          media={selectedMedia}
          onClose={() => {
            setSelectedMedia(null);
            restoreFocus(lastFocusedCardRef.current || undefined);
          }}
          onPlay={handlePlayMedia}
          isInMyList={myListIds.has(selectedMedia.id)}
          onToggleMyList={handleToggleMyList}
          onSelectSimilar={(sim) => setSelectedMedia(sim)}
          onOpenStore={() => {
            setSelectedMedia(null);
            handleSelectTab("ott_store");
          }}
        />
      )}

      {/* Full-Screen Cinema Video Player */}
      {playingMedia && (
        <NetflixPlayer
          media={playingMedia}
          onClose={() => {
            setPlayingMedia(null);
            restoreFocus(lastFocusedCardRef.current || undefined);
          }}
        />
      )}

      {/* Tiger OTT Instant Checkout Modal */}
      {checkoutPlan && checkoutService && (
        <OTTCheckoutModal
          service={checkoutService}
          selectedPlan={checkoutPlan}
          onClose={() => {
            setCheckoutPlan(null);
            setCheckoutService(null);
          }}
        />
      )}

      {/* User Login & Account Management Modal */}
      {showLoginModal && (
        <UserLoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          currentUser={currentUser}
          onLogin={(user) => {
            setCurrentUser(user);
            setShowLoginModal(false);
          }}
          onLogout={() => {
            setCurrentUser(null);
            setShowLoginModal(false);
            try {
              localStorage.removeItem("tiger_ott_auth_user");
            } catch (e) {
              console.warn(e);
            }
          }}
          onSelectProfile={(p) => {
            setCurrentProfile(p);
          }}
          onOpenPlans={() => {
            setShowLoginModal(false);
            handleSelectTab("ott_store");
          }}
        />
      )}

      {/* TV Remote Navigation Help Guide Modal */}
      {showTVHelp && (
        <TVRemoteHelpModal
          onClose={() => setShowTVHelp(false)}
          isTVMode={isTVMode}
          onToggleTVMode={() => setIsTVMode(!isTVMode)}
        />
      )}

      {/* IPTV Service & Best IPTV Blog Knowledge Hub */}
      <TigerIPTVBlogSection onOpenStore={() => handleSelectTab("ott_store")} />

      {/* How to Download IPTV Smarters Pro on TV & Laptop Guide */}
      <IPTVSmartersDownloadGuide onOpenStore={() => handleSelectTab("ott_store")} />

      {/* SEO & IPTV Service Provider FAQ Section */}
      <TigerSEOSection onOpenStore={() => handleSelectTab("ott_store")} />

      {/* Netflix / Tiger OTT Footer */}
      <footer className="w-full bg-neutral-50 border-t border-neutral-200 py-12 text-neutral-600 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <TigerLogo size="md" glow={false} />
            </div>

            <div className="flex items-center space-x-4 text-neutral-700">
              <a
                href="https://www.facebook.com/profile.php?id=61565847062555"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#166fe5] transition"
                aria-label="Official Facebook Page"
              >
                <Facebook className="w-5 h-5 fill-[#1877F2]" />
              </a>
              <a href="#instagram" className="hover:text-amber-500 transition" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#twitter" className="hover:text-amber-500 transition" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#youtube" className="hover:text-amber-500 transition" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* SEO Targeted Keyword Anchors Matrix */}
          <div className="p-4 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-2">
            <div className="font-bold text-neutral-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Popular Search Queries &amp; IPTV Service Directories:</span>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <button
                onClick={() => {
                  setActiveTab("blog");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-amber-600 font-semibold cursor-pointer underline decoration-neutral-300"
              >
                Best IPTV Service 2026- 2027
              </button>
              <span className="text-neutral-300">•</span>
              <button
                onClick={() => {
                  setActiveTab("blog");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-amber-600 font-semibold cursor-pointer underline decoration-neutral-300"
              >
                Best IPTV Service Reddit
              </button>
              <span className="text-neutral-300">•</span>
              <button
                onClick={() => {
                  const el = document.getElementById("faq-best-iptv-service");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-amber-600 font-semibold cursor-pointer underline decoration-neutral-300"
              >
                What is Best IPTV Service?
              </button>
              <span className="text-neutral-300">•</span>
              <button
                onClick={() => {
                  const el = document.getElementById("faq-best-iptv-service");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-amber-600 font-semibold cursor-pointer underline decoration-neutral-300"
              >
                What is the Best IPTV Service?
              </button>
              <span className="text-neutral-300">•</span>
              <button
                onClick={() => {
                  setActiveTab("blog");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-amber-600 font-semibold cursor-pointer underline decoration-neutral-300"
              >
                IPTV Streaming Services
              </button>
              <span className="text-neutral-300">•</span>
              <button
                onClick={() => {
                  const el = document.getElementById("how-to-download-iptv-smarters-pro-on-tv");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-amber-600 font-semibold cursor-pointer underline decoration-neutral-300"
              >
                How to Download IPTV Smarters Pro on TV
              </button>
              <span className="text-neutral-300">•</span>
              <button
                onClick={() => {
                  const el = document.getElementById("tiger-ott-subscription");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-amber-600 font-semibold cursor-pointer underline decoration-neutral-300"
              >
                Top IPTV Service Providers ($1.65/mo)
              </button>
            </div>
          </div>

          {/* 4-column link grid with active page routing */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-neutral-500">
            <div className="space-y-2">
              <button
                onClick={() => {
                  setActiveTab("tv");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                TV Series (15,000+ Shows)
              </button>
              <button
                onClick={() => {
                  setActiveTab("movies");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                4K Movies &amp; VOD
              </button>
              <button
                onClick={() => {
                  setActiveTab("sports");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                Live Sports &amp; PPV (60FPS)
              </button>
              <a
                href="https://www.facebook.com/profile.php?id=61565847062555"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#1877F2] font-bold hover:underline"
              >
                Contact Us on Facebook (24/7)
              </a>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setActiveTab("channels");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                25,000+ Live Channels
              </button>
              <button
                onClick={() => {
                  setActiveTab("devices");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                Device Setup &amp; Smarters App
              </button>
              <button
                onClick={() => {
                  setActiveTab("reseller");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-purple-600 font-bold hover:underline text-left cursor-pointer"
              >
                Reseller Panel (Wholesale)
              </button>
              <button
                onClick={() => {
                  setActiveTab("languages");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                50+ Worldwide Languages
              </button>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setActiveTab("faq");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                FAQ &amp; Knowledge Base
              </button>
              <button
                onClick={() => {
                  handleSelectTab("ott_store");
                }}
                className="block hover:text-amber-600 font-bold hover:underline text-left cursor-pointer"
              >
                IPTV &amp; OTT Subscriptions ($1.65/mo)
              </button>
              <button
                onClick={() => {
                  setActiveTab("blog");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                IPTV Guides &amp; Blog
              </button>
              <button
                onClick={() => {
                  setActiveTab("mylist");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block hover:text-neutral-900 hover:underline text-left cursor-pointer"
              >
                My Watchlist
              </button>
            </div>
            <div className="space-y-2">
              <span className="block text-neutral-400">99.9% Server Uptime</span>
              <span className="block text-neutral-400">Anti-Freeze 9.3 Engine</span>
              <span className="block text-neutral-400">Instant M3U / Xtream Delivery</span>
              <span className="block text-emerald-600 font-semibold">100% Anti-Freeze Guarantee</span>
            </div>
          </div>

          <p className="text-neutral-400 text-[11px] pt-4 border-t border-neutral-200">
            &copy; 1997-2026 Tiger OTT, Inc. The World&apos;s #1 Cheapest IPTV &amp; OTT Service Provider. Universal Edition powered by TMDb.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
