import React, { useState } from "react";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Zap,
  Tv,
  CreditCard
} from "lucide-react";
import { OFFICIAL_FACEBOOK_PAGE } from "../TigerSubscriptionSection";

interface FAQPageProps {
  onOpenStore: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "setup" | "billing" | "troubleshooting";
}

const FAQS_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Tiger OTT and what is included in the subscription?",
    answer: "Tiger OTT is a premier universal streaming and IPTV service provider. One single subscription gives you full access to 25,000+ live premium TV channels, 60,000+ movies, 30,000+ complete TV series, UEFA Champions League, Premier League, Formula 1, and UFC fight nights in 4K Ultra HD with Anti-Freeze CDN technology.",
    category: "general",
  },
  {
    id: "faq-2",
    question: "How fast do I receive my login credentials after ordering?",
    answer: "Our automated delivery system issues your Xtream Codes API (Username, Password, Server URL) and M3U playlist link immediately via email and direct Facebook messenger confirmation within 2 to 5 minutes after purchase.",
    category: "billing",
  },
  {
    id: "faq-3",
    question: "Which apps can I use to stream Tiger OTT on my TV or phone?",
    answer: "Tiger OTT is compatible with all top player applications, including IPTV Smarters Pro, TiviMate 4K, IBO Player, XCIPTV, Smart IPTV, GSE Smart IPTV, Nanomid, Flix IPTV, VLC Player, and Kodi. No expensive hardware is required!",
    category: "setup",
  },
  {
    id: "faq-4",
    question: "Do I need a VPN to use Tiger OTT?",
    answer: "No, a VPN is 100% optional. Our servers utilize private encrypted connections with Anti-ISP throttling. However, if your local internet service provider throttles streaming speeds during live football matches, Tiger OTT is fully compatible with ExpressVPN, NordVPN, and Surfshark.",
    category: "troubleshooting",
  },
  {
    id: "faq-5",
    question: "How many devices can I use simultaneously?",
    answer: "Depending on your selected plan, you can stream on 1 to 5 devices simultaneously. You can also install the application on all your devices (TV, phone, tablet, laptop) and switch between them anytime.",
    category: "general",
  },
  {
    id: "faq-6",
    question: "What should I do if a stream freezes or buffers?",
    answer: "99% of buffering is resolved in seconds by: 1) Restarting your home Wi-Fi router, 2) Switching from Wi-Fi to an Ethernet LAN cable, or 3) Changing the stream format in IPTV Smarters settings from HLS to MPEG-TS. You can also message our 24/7 Facebook tech support for instant server routing re-checks.",
    category: "troubleshooting",
  },
  {
    id: "faq-7",
    question: "Can I test the service before purchasing a long-term plan?",
    answer: "Yes! You can start with our 1-Month Trial for only $2.99 or message our Facebook support team to request a 24-hour instant test line.",
    category: "billing",
  },
  {
    id: "faq-8",
    question: "How do I become an IPTV Reseller with Tiger OTT?",
    answer: "Simply visit our Reseller page or contact us on Facebook. You can purchase panel credits starting at $0.75/month and receive a full Xtream UI master management dashboard with your own brand name and custom DNS.",
    category: "general",
  },
];

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenStore }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");

  const filteredFaqs = FAQS_LIST.filter((item) => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-black text-white py-12 px-4 sm:px-8 md:px-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>24/7 CUSTOMER SUPPORT &amp; HELP CENTER</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Frequently Asked Questions &amp; Support
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Find quick answers to common questions about Tiger OTT setup, app downloads, pricing, payment methods, and live sports streaming.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex-shrink-0 space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Direct Human Support
            </span>
            <div className="text-xs text-neutral-200">Average response time: &lt; 2 mins</div>
            <a
              href={OFFICIAL_FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-xs rounded-xl transition cursor-pointer shadow-md"
            >
              <Facebook className="w-4 h-4 fill-white" />
              <span>Chat with Live Agent</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. 'buffering', 'activation', 'Firestick', 'VPN')..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-neutral-300 focus:border-amber-500 rounded-2xl text-sm font-semibold text-neutral-900 outline-none transition shadow-2xs"
          />
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeCategory === "all"
                ? "bg-neutral-900 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            All Questions
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("general")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeCategory === "general"
                ? "bg-neutral-900 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            General &amp; Features
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("setup")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeCategory === "setup"
                ? "bg-neutral-900 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            Apps &amp; Setup
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("billing")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeCategory === "billing"
                ? "bg-neutral-900 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            Pricing &amp; Delivery
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("troubleshooting")}
            className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer ${
              activeCategory === "troubleshooting"
                ? "bg-neutral-900 text-white shadow-xs"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
            }`}
          >
            Troubleshooting &amp; Anti-Freeze
          </button>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#f8fafc] border border-neutral-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-sm sm:text-base text-neutral-900 hover:bg-neutral-100 transition cursor-pointer"
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-black text-neutral-900">
            Still have questions or need custom setup assistance?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto">
            Our customer service specialists are online 24 hours a day, 7 days a week to help you get started in minutes.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <a
              href={OFFICIAL_FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-md inline-flex items-center space-x-2"
            >
              <Facebook className="w-4 h-4 fill-white" />
              <span>Message Us on Facebook</span>
            </a>
            <button
              type="button"
              onClick={onOpenStore}
              className="px-6 py-3 bg-neutral-900 hover:bg-black text-white font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-md"
            >
              View All Tiger OTT Plans ($1.65/mo)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
