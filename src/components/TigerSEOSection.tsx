import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  Tv,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Crown,
  HelpCircle,
  Globe,
  Radio,
  Clock,
  ArrowRight,
  Monitor,
  Smartphone,
  Flame,
  Facebook,
  ExternalLink,
  Layers
} from "lucide-react";

interface TigerSEOSectionProps {
  onOpenStore?: () => void;
}

export const TigerSEOSection: React.FC<TigerSEOSectionProps> = ({ onOpenStore }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToPlans = () => {
    if (onOpenStore) {
      onOpenStore();
    }
    const el = document.getElementById("tiger-ott-subscription");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const faqList = [
    {
      question: "What is the best IPTV service provider in 2026?",
      answer:
        "Tiger OTT is recognized as the #1 best IPTV service provider in 2026, delivering ultra-stable 4K Ultra HD, 60 FPS live sports, and Full HD streaming with over 20,000+ live premium TV channels and 60,000+ on-demand movies & series. Engineered with dedicated global high-speed CDN edge routing and proprietary anti-freeze buffering protection, Tiger OTT eliminates lagging on Smart TVs (Samsung, LG), Android TV boxes, Amazon Firestick, Apple TV, iOS, Windows, and macOS.",
    },
    {
      question: "Why is Tiger OTT the cheapest IPTV service provider in the world?",
      answer:
        "Tiger OTT delivers direct high-bitrate streaming passes starting at just $1.65 / €1.52 / 6.0 QAR per month with savings over 82% off traditional retail cable. As the cheapest IPTV service provider globally, Tiger OTT combines rock-bottom subscription pricing with instant automated credential delivery, multi-screen access, M3U playlists, Xtream codes support, and 100% full-term replacement warranty coverage.",
    },
    {
      question: "How do I set up Tiger OTT cheap IPTV services on my device?",
      answer:
        "Setting up your Tiger OTT IPTV service takes under 2 minutes. Once you select your plan, our support team dispatches your direct login credentials and setup guides. Tiger OTT is 100% compatible with Samsung Tizen, LG webOS, Android TV, Amazon Firestick 4K, Apple TV, MAG boxes, IPTV Smarters Pro, TiviMate, IBO Player, and VLC media player.",
    },
    {
      question: "What channels, live sports, and VOD are included with Tiger OTT?",
      answer:
        "Subscribers gain unrestricted worldwide access to live sports (English Premier League, UEFA Champions League, La Liga, Serie A, NFL Sunday Ticket, NBA League Pass, UFC PPV, Formula 1, ICC Cricket), premium cinema channels (HBO Max, Showtime, Sky Cinema), international broadcast networks (USA, UK, Canada, Arab, European, Asian), and a massive library of 4K HDR movies updated daily.",
    },
    {
      question: "How do Tiger OTT IPTV service providers ensure zero buffering and 99.9% uptime?",
      answer:
        "Unlike standard unverified IPTV service providers, Tiger OTT utilizes distributed tier-1 cloud edge servers located across North America, Europe, Asia, and the Middle East with automatic failover and load balancing. Even during peak global live sports events like the Super Bowl or FIFA World Cup, our anti-buffering protocols maintain seamless 60 FPS crystal-clear playback.",
    },
    {
      question: "How do I buy or renew Tiger OTT safely without recurring hidden fees?",
      answer:
        "You can buy or renew directly with our verified team on the official Tiger OTT Facebook Page (https://www.facebook.com/profile.php?id=61565847062555). We provide transparent 1-time payments with no recurring auto-charges, custom profile PINs, and dedicated 24/7 human technical assistance.",
    },
  ];

  return (
    <article
      id="tiger-iptv-seo-section"
      className="w-full bg-white border-t border-b border-neutral-200 py-12 sm:py-16 lg:py-20 text-neutral-800"
      aria-label="IPTV Service Provider Complete Guide & FAQ"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* SEO Header & Authority Tagline */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
            <Crown className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>#1 Ranked Global IPTV &amp; OTT Service Provider</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-snug mb-4">
            The World&apos;s Cheapest IPTV Service &amp; Premium OTT Provider
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Discover why millions of streaming enthusiasts worldwide choose <strong className="text-neutral-950 font-bold">Tiger OTT</strong> as their trusted <strong className="text-amber-600 font-bold">IPTV service provider</strong>. Experience seamless 4K Ultra HD playback, zero buffering, over 20,000 live channels, 60,000+ movies, and the <strong className="text-neutral-950 font-bold">cheapest IPTV service</strong> plans starting from $1.65 / €1.52 / 6.0 QAR monthly.
          </p>
        </header>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-18">
          <section className="bg-neutral-50 p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 border border-amber-200">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-neutral-900 mb-2">
                Cheapest IPTV Service
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Save up to 82% compared to cable. Direct 4K IPTV service plans starting as low as $1.65 / €1.52 / 6.0 QAR monthly with instant setup.
              </p>
            </div>
          </section>

          <section className="bg-neutral-50 p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-neutral-900 mb-2">
                20,000+ Live Channels
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Stream live sports, international TV networks, news, and 60,000+ VOD blockbuster movies in true 4K HDR &amp; 60 FPS.
              </p>
            </div>
          </section>

          <section className="bg-neutral-50 p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4 border border-sky-200">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-neutral-900 mb-2">
                Anti-Freeze CDN Tech
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Dedicated high-speed CDN routing ensures 99.9% uptime and zero buffering during high-traffic live championship events.
              </p>
            </div>
          </section>

          <section className="bg-neutral-50 p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4 border border-purple-200">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-neutral-900 mb-2">
                Universal Multi-Device
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Compatible with Samsung Smart TV, LG webOS, Amazon Firestick, Android TV, iOS, Windows, macOS, TiviMate, and Smarters.
              </p>
            </div>
          </section>
        </div>

        {/* Device Compatibility Quick Guide */}
        <section className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 mb-14 sm:mb-18 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              Universal Platform Support
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mt-1 mb-2">
              Compatible With Every Screen &amp; IPTV Player
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Tiger OTT provides instant M3U URL, Xtream Codes API, and Portal MAC credentials for effortless plug-and-play setup.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
              <Monitor className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-white">Smart TVs</h4>
              <p className="text-[11px] text-neutral-400 mt-1">Samsung Tizen, LG webOS, Sony, TCL</p>
            </div>

            <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
              <Flame className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-white">Streaming Sticks</h4>
              <p className="text-[11px] text-neutral-400 mt-1">Firestick 4K Max, Roku, Apple TV 4K</p>
            </div>

            <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
              <Smartphone className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-white">Mobile &amp; Tablets</h4>
              <p className="text-[11px] text-neutral-400 mt-1">iPhone, iPad, Android Phones, Galaxy Tab</p>
            </div>

            <div className="bg-neutral-800/80 p-4 rounded-xl border border-neutral-700">
              <Layers className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-white">IPTV Apps</h4>
              <p className="text-[11px] text-neutral-400 mt-1">TiviMate, IPTV Smarters, IBO, XCIPTV</p>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="bg-neutral-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-neutral-200 mb-14 sm:mb-18 shadow-xs">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-2">
              Why Tiger OTT Leads All IPTV Service Providers
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              See how our cheap IPTV services compare to traditional cable and other IPTV service providers in performance, channels, and value.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-neutral-300 text-neutral-600">
                  <th className="pb-3 font-bold">Feature / Quality</th>
                  <th className="pb-3 font-black text-amber-700">Tiger OTT (Cheapest)</th>
                  <th className="pb-3 font-semibold text-neutral-600">Other IPTV Providers</th>
                  <th className="pb-3 font-semibold text-neutral-600">Traditional Cable TV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-3.5 font-bold text-neutral-900">Monthly Effective Cost</td>
                  <td className="py-3.5 text-emerald-700 font-black">From $1.65 / €1.52 / 6.0 QAR</td>
                  <td className="py-3.5 text-neutral-600">$10.00 – $18.00 / mo</td>
                  <td className="py-3.5 text-red-600 font-semibold">$75.00 – $140.00 / mo</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-neutral-900">4K UHD &amp; 60FPS Sports</td>
                  <td className="py-3.5 text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Included (All Tiers)</span>
                  </td>
                  <td className="py-3.5 text-neutral-600">Extra fee or 720p only</td>
                  <td className="py-3.5 text-neutral-600">Expensive HD tier</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-neutral-900">Instant Automated Delivery</td>
                  <td className="py-3.5 text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Instant Digital Dispatch</span>
                  </td>
                  <td className="py-3.5 text-neutral-600">1 – 24 hour delay</td>
                  <td className="py-3.5 text-neutral-600">Technician visit required</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-neutral-900">Replacement Warranty</td>
                  <td className="py-3.5 text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>100% Full-Term Warranty</span>
                  </td>
                  <td className="py-3.5 text-neutral-600">Limited or No support</td>
                  <td className="py-3.5 text-neutral-600">Expensive contracts</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-bold text-neutral-900">Multi-Device Compatibility</td>
                  <td className="py-3.5 text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Smart TV, Mobile, Web</span>
                  </td>
                  <td className="py-3.5 text-neutral-600">Device restricted</td>
                  <td className="py-3.5 text-neutral-600">Proprietary TV box only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-300">
            <span className="text-xs text-neutral-600 text-center sm:text-left">
              Ready to start? Select your subscription plan and activate your account on our Facebook page in minutes.
            </span>
            <button
              type="button"
              onClick={scrollToPlans}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#FFE000] hover:bg-[#ebd000] text-black font-black text-xs rounded-xl transition-transform hover:scale-102 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Cheap IPTV Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* SEO FAQ Section with Accordion */}
        <section className="max-w-4xl mx-auto">
          <header className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              <span>Frequently Asked Questions About IPTV Service</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Everything you need to know about choosing what is the best IPTV service and getting started with Tiger OTT.
            </p>
          </header>

          <div className="space-y-3">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <article
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden transition-colors"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-neutral-900 hover:text-amber-600 transition cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <span itemProp="name">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p itemProp="text">{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </article>
  );
};

export default TigerSEOSection;
