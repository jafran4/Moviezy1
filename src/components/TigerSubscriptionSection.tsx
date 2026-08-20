import React, { useState } from "react";
import {
  Crown,
  Zap,
  ShieldCheck,
  Tv,
  Smartphone,
  Laptop,
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  Lock,
  ArrowRight,
  Facebook,
  ExternalLink
} from "lucide-react";
import { OTTPlan, OTTService } from "../types";
import { TigerLogo } from "./TigerLogo";

export const OFFICIAL_FACEBOOK_PAGE = "https://www.facebook.com/profile.php?id=61565847062555";

export interface TigerSubscriptionSectionProps {
  onSelectPlan: (plan: OTTPlan, service: OTTService) => void;
}

export const QAR_PER_USD = 3.64;
export const EUR_PER_USD = 0.92;

export const TIGER_OTT_SERVICE: OTTService = {
  id: "tiger-ott-master",
  name: "Tiger OTT",
  category: "Streaming",
  tagline: "High-definition streaming pass for Smart TVs, mobile, and web.",
  logo: "https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico",
  brandColor: "#FFE000",
  gradient: "from-neutral-900 via-neutral-900 to-black",
  rating: 4.95,
  reviewsCount: 48900,
  popular: true,
  bestValue: true,
  warranty: "Direct activation with complete term replacement support",
  stockStatus: "Instant Auto-Delivery",
  features: [
    "4K Ultra HD, HDR10 & Dolby Audio playback",
    "Multi-device support: Smart TVs, Android, iOS, Windows, macOS",
    "Private profile with dedicated PIN protection",
    "High-speed CDN routing for zero-buffering playback",
    "Automated instant credentials delivery",
    "Worldwide access with no geo-restrictions",
  ],
  plans: [
    {
      id: "tiger-3m",
      duration: "3 Months",
      price: 7.97,
      currency: "USD",
      originalPrice: 32.99,
      screens: "2 Simultaneous Screens",
      quality: "4K Ultra HD",
      savePercent: 76,
      badge: "Quarterly",
      instantDelivery: true,
    },
    {
      id: "tiger-6m",
      duration: "6 Months",
      price: 13.46,
      currency: "USD",
      originalPrice: 60.99,
      screens: "4 Simultaneous Screens",
      quality: "4K Ultra HD + Dolby Atmos",
      savePercent: 78,
      badge: "Semi-Annual",
      instantDelivery: true,
    },
    {
      id: "tiger-12m",
      duration: "1 Year",
      price: 24.45,
      currency: "USD",
      originalPrice: 115.99,
      screens: "Unlimited Devices",
      quality: "Master 4K UHD",
      savePercent: 79,
      badge: "Annual",
      instantDelivery: true,
    },
    {
      id: "tiger-15m",
      duration: "15 Months",
      price: 27.20,
      currency: "USD",
      originalPrice: 142.99,
      screens: "Unlimited Devices",
      quality: "Master 4K UHD",
      savePercent: 81,
      badge: "Extended",
      instantDelivery: true,
    },
    {
      id: "tiger-24m",
      duration: "24 Months",
      price: 43.95,
      currency: "USD",
      originalPrice: 220.00,
      screens: "Unlimited Devices",
      quality: "Master 4K UHD",
      savePercent: 80,
      badge: "2-Year",
      instantDelivery: true,
    },
    {
      id: "tiger-30m",
      duration: "30 Months",
      price: 49.45,
      currency: "USD",
      originalPrice: 275.00,
      screens: "Unlimited Devices",
      quality: "Master 4K UHD",
      savePercent: 82,
      badge: "Long-Term",
      instantDelivery: true,
    },
  ],
};

const TigerSubscriptionSection: React.FC<TigerSubscriptionSectionProps> = ({
  onSelectPlan,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("tiger-12m");
  const [billingCurrency, setBillingCurrency] = useState<"USD" | "EUR" | "QAR">("USD");
  const [showExtendedTiers, setShowExtendedTiers] = useState<boolean>(false);

  const plans = [
    {
      id: "tiger-3m",
      name: "Quarterly Pass",
      period: "3 Months Access",
      duration: "3 Months",
      usdPrice: 7.97,
      eurPrice: 7.33,
      qarPrice: 29,
      originalUsd: 32.99,
      originalEur: 30.35,
      originalQar: 120,
      monthlyUsd: "$2.66 / mo",
      monthlyEur: "€2.44 / mo",
      monthlyQar: "9.6 QAR / mo",
      discount: "76% Off",
      recommended: false,
      tierBadge: "Standard",
      features: [
        "4K Ultra HD resolution",
        "2 concurrent streams",
        "Standard high-speed CDN",
        "Standard replacement warranty",
      ],
      planData: TIGER_OTT_SERVICE.plans[0],
    },
    {
      id: "tiger-6m",
      name: "Semi-Annual Pass",
      period: "6 Months Access",
      duration: "6 Months",
      usdPrice: 13.46,
      eurPrice: 12.38,
      qarPrice: 49,
      originalUsd: 60.99,
      originalEur: 56.11,
      originalQar: 220,
      monthlyUsd: "$2.24 / mo",
      monthlyEur: "€2.06 / mo",
      monthlyQar: "8.1 QAR / mo",
      discount: "78% Off",
      recommended: false,
      tierBadge: "Popular",
      features: [
        "4K Ultra HD & Dolby Atmos",
        "4 concurrent streams",
        "Priority CDN routing",
        "Standard replacement warranty",
      ],
      planData: TIGER_OTT_SERVICE.plans[1],
    },
    {
      id: "tiger-12m",
      name: "Annual Membership",
      period: "12 Months Access",
      duration: "1 Year",
      usdPrice: 24.45,
      eurPrice: 22.50,
      qarPrice: 89,
      originalUsd: 115.99,
      originalEur: 106.71,
      originalQar: 420,
      monthlyUsd: "$2.04 / mo",
      monthlyEur: "€1.88 / mo",
      monthlyQar: "7.4 QAR / mo",
      discount: "79% Off",
      recommended: true,
      tierBadge: "Most Recommended",
      features: [
        "Master 4K UHD & HDR10+",
        "Multi-device streaming",
        "Private profile with PIN lock",
        "Full 365-day replacement warranty",
      ],
      planData: TIGER_OTT_SERVICE.plans[2],
    },
    {
      id: "tiger-15m",
      name: "Extended 15M",
      period: "15 Months Access",
      duration: "15 Months",
      usdPrice: 27.20,
      eurPrice: 25.02,
      qarPrice: 99,
      originalUsd: 142.99,
      originalEur: 131.55,
      originalQar: 520,
      monthlyUsd: "$1.81 / mo",
      monthlyEur: "€1.67 / mo",
      monthlyQar: "6.6 QAR / mo",
      discount: "81% Off",
      recommended: false,
      tierBadge: "Value Tier",
      features: [
        "Master 4K UHD playback",
        "Multi-device streaming",
        "Offline playback compatible",
        "Full 15-month replacement support",
      ],
      planData: TIGER_OTT_SERVICE.plans[3],
    },
    {
      id: "tiger-24m",
      name: "2-Year Plan",
      period: "24 Months Access",
      duration: "24 Months",
      usdPrice: 43.95,
      eurPrice: 40.43,
      qarPrice: 160,
      originalUsd: 220.00,
      originalEur: 202.40,
      originalQar: 800,
      monthlyUsd: "$1.83 / mo",
      monthlyEur: "€1.68 / mo",
      monthlyQar: "6.6 QAR / mo",
      discount: "80% Off",
      recommended: false,
      tierBadge: "Multi-Year",
      features: [
        "High-bitrate 4K streams",
        "Unlimited home devices",
        "Priority customer support",
        "2-year warranty coverage",
      ],
      planData: TIGER_OTT_SERVICE.plans[4],
    },
    {
      id: "tiger-30m",
      name: "30-Month Membership",
      period: "30 Months Access",
      duration: "30 Months",
      usdPrice: 49.45,
      eurPrice: 45.50,
      qarPrice: 180,
      originalUsd: 275.00,
      originalEur: 253.00,
      originalQar: 1000,
      monthlyUsd: "$1.65 / mo",
      monthlyEur: "€1.52 / mo",
      monthlyQar: "6.0 QAR / mo",
      discount: "82% Off",
      recommended: false,
      tierBadge: "Maximum Term",
      features: [
        "Master 4K UHD VIP routing",
        "Lowest effective monthly rate",
        "Private profile security",
        "Full 30-month term protection",
      ],
      planData: TIGER_OTT_SERVICE.plans[5],
    },
  ];

  const visiblePlans = showExtendedTiers ? plans : plans.slice(0, 3);

  return (
    <section
      id="tiger-ott-subscription"
      className="w-full my-6 sm:my-10"
      aria-label="Subscription Plans"
    >
      <div className="w-full bg-[#f8fafc] border-t border-b border-neutral-200 py-10 sm:py-14 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-16 shadow-xs">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header Block */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="mb-3">
              <TigerLogo size="lg" glow={false} />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Cheapest IPTV Service Provider in the World</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight mb-2.5">
              Select Your 4K IPTV &amp; OTT Subscription Plan
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              Direct high-speed account activations with 20,000+ live TV channels &amp; 50,000+ movies in 4K UHD. Choose a duration to proceed to instant checkout.
            </p>

            {/* Facebook Quick Buy Banner */}
            <div className="mt-4 mb-2 max-w-xl w-full bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-blue-950 shadow-2xs">
              <div className="flex items-center space-x-2 text-xs font-semibold text-center sm:text-left">
                <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2] flex-shrink-0" />
                <span>Want to purchase or ask questions directly? Contact our Facebook Page.</span>
              </div>
              <a
                href={OFFICIAL_FACEBOOK_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-lg text-xs font-bold transition flex items-center space-x-1.5 flex-shrink-0 shadow-2xs hover:scale-102"
              >
                <Facebook className="w-3.5 h-3.5 fill-white text-[#1877F2]" />
                <span>Message on Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Currency Selector */}
            <div className="mt-4 flex items-center bg-neutral-200/80 p-1 rounded-lg border border-neutral-300">
              <button
                type="button"
                onClick={() => setBillingCurrency("USD")}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  billingCurrency === "USD"
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-700 hover:text-neutral-950"
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setBillingCurrency("EUR")}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  billingCurrency === "EUR"
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-700 hover:text-neutral-950"
                }`}
              >
                EUR (€)
              </button>
              <button
                type="button"
                onClick={() => setBillingCurrency("QAR")}
                className={`px-3 sm:px-4 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  billingCurrency === "QAR"
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-700 hover:text-neutral-950"
                }`}
              >
                QAR (ر.ق)
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 items-stretch">
            {visiblePlans.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              const price =
                billingCurrency === "USD"
                  ? `$${plan.usdPrice.toFixed(2)}`
                  : billingCurrency === "EUR"
                  ? `€${plan.eurPrice.toFixed(2)}`
                  : `${plan.qarPrice} QAR`;
              const originalPrice =
                billingCurrency === "USD"
                  ? `$${plan.originalUsd.toFixed(2)}`
                  : billingCurrency === "EUR"
                  ? `€${plan.originalEur.toFixed(2)}`
                  : `${plan.originalQar} QAR`;
              const monthlyRate =
                billingCurrency === "USD"
                  ? plan.monthlyUsd
                  : billingCurrency === "EUR"
                  ? plan.monthlyEur
                  : plan.monthlyQar;

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`rounded-2xl p-4 sm:p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 cursor-pointer border ${
                    plan.recommended
                      ? "bg-white border-amber-400 shadow-md ring-2 ring-amber-400/20"
                      : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-lg shadow-xs"
                  }`}
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider truncate">
                        {plan.tierBadge}
                      </span>
                      <span className="text-[9px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                        {plan.discount}
                      </span>
                    </div>

                    {/* Plan Name & Period */}
                    <h3 className="text-sm sm:text-xl font-black text-neutral-900 mb-0.5 line-clamp-1">
                      {plan.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-neutral-500 mb-2 sm:mb-4">{plan.period}</p>

                    {/* Pricing */}
                    <div className="mb-2.5 sm:mb-4">
                      <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                        <span className="text-xl sm:text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                          {price}
                        </span>
                        <span className="text-[10px] sm:text-xs text-neutral-400 line-through">
                          {originalPrice}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs font-semibold text-neutral-500 mt-0.5">
                        {monthlyRate}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-neutral-200 my-2.5 sm:my-4" />

                    {/* Features List */}
                    <ul className="space-y-1.5 sm:space-y-2.5 mb-4 sm:mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs sm:text-sm text-neutral-700">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTAs */}
                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        const selectedConvertedPlan: OTTPlan = {
                          ...plan.planData,
                          currency: billingCurrency,
                          price:
                            billingCurrency === "EUR"
                              ? plan.eurPrice
                              : billingCurrency === "QAR"
                              ? plan.qarPrice
                              : plan.usdPrice,
                          originalPrice:
                            billingCurrency === "EUR"
                              ? plan.originalEur
                              : billingCurrency === "QAR"
                              ? plan.originalQar
                              : plan.originalUsd,
                        };
                        onSelectPlan(selectedConvertedPlan, TIGER_OTT_SERVICE);
                      }}
                      className={`w-full py-2 sm:py-3 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-2 shadow-xs ${
                        plan.recommended
                          ? "bg-[#FFE000] text-black hover:bg-[#ebd000] hover:scale-102"
                          : "bg-neutral-900 text-white hover:bg-neutral-800"
                      }`}
                    >
                      <span>Select {plan.duration}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>

                    <a
                      href={OFFICIAL_FACEBOOK_PAGE}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-1.5 sm:py-2 px-2 rounded-lg text-[10px] sm:text-xs font-bold text-[#1877F2] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Facebook className="w-3 h-3 fill-[#1877F2]" />
                      <span>Buy via Facebook Page</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Tiers Toggle */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowExtendedTiers((prev) => !prev)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer px-4 py-2 bg-white rounded-lg border border-neutral-200 shadow-xs"
            >
              <span>
                {showExtendedTiers ? "Show Fewer Tiers" : "View All Subscription Tiers"}
              </span>
              {showExtendedTiers ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Technical Specifications & Guarantees */}
          <div className="mt-10 pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-neutral-600">
            <div className="flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Instant credentials dispatch post-confirmation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Full-term replacement warranty &amp; support</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Tv className="w-4 h-4 text-indigo-600 flex-shrink-0" />
              <span>Compatible with Smart TVs, Mobile, and Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TigerSubscriptionSection;
