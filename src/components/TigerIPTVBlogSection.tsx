import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Tag,
  Flame,
  CheckCircle2,
  Share2,
  Zap,
  ArrowRight,
  Search,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Tv,
  Star,
  Sparkles,
  Facebook
} from "lucide-react";
import { BLOG_POSTS, SEO_FAQS, BlogPost } from "../data/blogData";
import { OFFICIAL_FACEBOOK_PAGE } from "./TigerSubscriptionSection";

interface TigerIPTVBlogSectionProps {
  onOpenStore?: () => void;
  isDedicatedView?: boolean;
}

export const TigerIPTVBlogSection: React.FC<TigerIPTVBlogSectionProps> = ({
  onOpenStore,
  isDedicatedView = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = ["All", "Buyer Guide", "Reddit Review", "Comparison", "FAQ & Setup"];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.targetKeywords.some((kw) =>
          kw.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleShare = (post: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`https://tiger-ott.com/#blog-${post.slug}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section
      id="tiger-iptv-blog"
      className={`w-full bg-neutral-950 text-neutral-100 ${
        isDedicatedView ? "pt-24 pb-20" : "py-16 sm:py-24 border-t border-neutral-800"
      }`}
      aria-label="IPTV Service Insights & Buyer Guides"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            <span>IPTV Service Authority &amp; Knowledge Hub</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Best IPTV Service <span className="text-amber-400">2026 - 2027</span> &amp; Guides
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            In-depth guides, Reddit community benchmarks, and expert analysis of top{" "}
            <strong className="text-white font-bold">IPTV service providers</strong>, features, and 4K streaming technology.
          </p>
        </header>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-black shadow-md shadow-amber-400/20"
                    : "bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800"
                }`}
              >
                {cat === "All" ? "All Articles" : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search IPTV guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              id={`blog-${post.slug}`}
              className="bg-neutral-900/90 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group shadow-lg"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div>
                {/* Article Header Image */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={post.bannerImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  
                  {/* Category & Stat Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-amber-400 text-black text-[11px] font-black uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-neutral-900/80 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-amber-500/30">
                      {post.highlightStat}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-3 right-4 flex items-center space-x-1.5 text-xs text-neutral-300 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Content Preview */}
                <div className="p-6">
                  {/* Keywords Tag Row */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.targetKeywords.slice(0, 3).map((kw, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-sm font-medium"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-3"
                    itemProp="headline"
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-4"
                    itemProp="description"
                  >
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer with Meta & CTA */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-neutral-800/80 mt-auto pt-4">
                <div className="flex items-center space-x-2 text-xs text-neutral-400">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate max-w-[140px] sm:max-w-[180px]">{post.author}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActivePost(post)}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group/btn transition cursor-pointer"
                  aria-label={`Read full article: ${post.title}`}
                >
                  <span>Read Guide</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 🌟 SEO FAQ Hub: "What is best iptv service" & "What is the best iptv service" */}
        <section
          id="faq-best-iptv-service"
          className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-10 lg:p-12 mb-16"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold mb-3 border border-amber-400/20">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Direct Search Engine Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Frequently Asked Questions: What is the Best IPTV Service?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Direct, accurate answers to the most common search queries regarding top-rated IPTV service providers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {SEO_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <article
                  key={index}
                  className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-white hover:text-amber-400 transition cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <span itemProp="name" className="flex items-center gap-2">
                      <span className="text-amber-400 font-mono text-xs">Q{index + 1}.</span>
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 space-y-2.5"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p className="font-semibold text-amber-300" itemProp="text">
                        {faq.shortAnswer}
                      </p>
                      <p className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed">
                        {faq.detailedAnswer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Quick CTA to Facebook */}
          <div className="mt-10 pt-6 border-t border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-bold text-sm text-white">Have a specific question about setup or channels?</h4>
              <p className="text-xs text-neutral-400">Our support engineers are online 24/7 on Facebook to assist you.</p>
            </div>

            <a
              href={OFFICIAL_FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold rounded-xl text-xs flex items-center space-x-2 transition shadow-md whitespace-nowrap"
            >
              <Facebook className="w-4 h-4" />
              <span>Ask on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Global Summary Matrix */}
        <section className="bg-gradient-to-r from-amber-500/10 via-neutral-900 to-amber-500/10 border border-amber-500/20 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            Experience the Best IPTV Service with Zero Risk
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto mb-6">
            Get instant activation with 20,000+ live 4K channels, 60,000+ movies, and full-term warranty starting at just $1.65 / €1.52 / 6.0 QAR per month.
          </p>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("tiger-ott-subscription");
              if (el) el.scrollIntoView({ behavior: "smooth" });
              else if (onOpenStore) onOpenStore();
            }}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-extrabold rounded-xl text-xs sm:text-sm transition shadow-lg inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>View All Tiger OTT Plans</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>

      {/* Full Article Reading Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-article-title"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80 sticky top-0 z-10">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded bg-amber-400 text-black text-xs font-bold">
                  {activePost.category}
                </span>
                <span className="text-xs text-neutral-400">{activePost.readTime}</span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleShare(activePost)}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition text-xs flex items-center space-x-1 cursor-pointer"
                  title="Copy link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? "Copied!" : "Share"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition cursor-pointer text-sm font-bold"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <header className="space-y-3">
                <h1
                  id="modal-article-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight"
                >
                  {activePost.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                  <div className="flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span>{activePost.author} ({activePost.authorRole})</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{activePost.publishDate}</span>
                  </div>
                </div>
              </header>

              {/* Target Keywords Badges */}
              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Focus Keywords:
                </span>
                {activePost.targetKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded-md"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Dynamic Content Sections */}
              {activePost.content.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-2">
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-amber-400 rounded-full inline-block" />
                    {sec.heading}
                  </h2>

                  {sec.body && <p className="text-neutral-300 leading-relaxed">{sec.body}</p>}

                  {sec.subheadings && (
                    <div className="space-y-4 pl-3 sm:pl-4 border-l border-neutral-800 mt-3">
                      {sec.subheadings.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <h3 className="font-bold text-amber-300 text-sm sm:text-base">
                            {sub.title}
                          </h3>
                          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                            {sub.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Facebook Order Banner inside Modal */}
              <div className="mt-8 p-5 bg-gradient-to-br from-amber-500/10 via-neutral-950 to-neutral-900 border border-amber-500/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h4 className="font-bold text-white text-sm">Ready to get Tiger OTT activated?</h4>
                  <p className="text-xs text-neutral-400">Order directly with our verified team on Facebook.</p>
                </div>

                <a
                  href={OFFICIAL_FACEBOOK_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#E50914] hover:bg-[#b80710] text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition shadow-md whitespace-nowrap"
                >
                  <Zap className="w-4 h-4" />
                  <span>Buy on Facebook ($1.65/mo)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TigerIPTVBlogSection;
