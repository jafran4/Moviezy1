import React, { useState } from "react";
import {
  Crown,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Calculator,
  MessageCircle,
  Facebook,
  ExternalLink,
  Sparkles,
  Award,
  Globe2,
  DollarSign
} from "lucide-react";
import { OFFICIAL_FACEBOOK_PAGE } from "../TigerSubscriptionSection";

interface ResellerPageProps {
  onOpenStore: () => void;
}

const CREDIT_TIERS = [
  {
    id: "tier-100",
    name: "Starter Reseller",
    credits: 100,
    pricePerCredit: "$1.50",
    totalPrice: 150,
    badge: "Best for Starters",
    popular: false,
    features: [
      "100 Panel Credits (1 credit = 1 month)",
      "Full Xtream UI Reseller Panel Access",
      "Unlimited 24h Free Trial Generation",
      "Create & Manage 1, 3, 6, 12 Month Lines",
      "100% White-Label (Your Own Brand)",
      "24/7 Priority Tech Support",
    ],
  },
  {
    id: "tier-250",
    name: "Pro Reseller",
    credits: 250,
    pricePerCredit: "$1.20",
    totalPrice: 300,
    badge: "Most Popular",
    popular: true,
    features: [
      "250 Panel Credits",
      "Full Xtream UI Reseller Panel Access",
      "Create Sub-Reseller Accounts",
      "Custom DNS & Brand Portal Name",
      "Priority Anti-Freeze Server Access",
      "Unlimited 24h Free Trials",
      "Dedicated WhatsApp Account Manager",
    ],
  },
  {
    id: "tier-500",
    name: "Master Reseller",
    credits: 500,
    pricePerCredit: "$0.99",
    totalPrice: 495,
    badge: "High Margin (800% Profit)",
    popular: false,
    features: [
      "500 Panel Credits",
      "Master Reseller Privileges",
      "Create & Sell to Sub-Resellers",
      "Private Custom Brand Apps (APK)",
      "Highest Tier CDN Bandwidth Priority",
      "100% Margin Retention",
      "Direct API Webhook Integration",
    ],
  },
  {
    id: "tier-1000",
    name: "Super Distributor",
    credits: 1000,
    pricePerCredit: "$0.75",
    totalPrice: 750,
    badge: "Maximum Profit Margin",
    popular: false,
    features: [
      "1,000 Panel Credits",
      "Lowest Wholesale Cost Guaranteed",
      "Custom Branded Android & Firestick Apps",
      "Unlimited Sub-Reseller Hierarchy",
      "VIP Direct Admin Server Line",
      "Dedicated High-Speed Stream Routing",
    ],
  },
];

export const ResellerPage: React.FC<ResellerPageProps> = ({ onOpenStore }) => {
  const [salesPrice, setSalesPrice] = useState<number>(10);
  const [creditsPurchased, setCreditsPurchased] = useState<number>(250);

  const costPerCredit = creditsPurchased >= 1000 ? 0.75 : creditsPurchased >= 500 ? 0.99 : creditsPurchased >= 250 ? 1.20 : 1.50;
  const totalCost = creditsPurchased * costPerCredit;
  const totalRevenue = creditsPurchased * salesPrice;
  const totalProfit = totalRevenue - totalCost;
  const profitMargin = Math.round((totalProfit / totalCost) * 100);

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-black text-white py-14 px-4 sm:px-8 md:px-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black">
              <Crown className="w-3.5 h-3.5" />
              <span>OFFICIAL TIGER OTT RESELLER &amp; MASTER PANEL PROGRAM</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Start Your Own IPTV Business Today
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Earn $3,000 to $10,000+ per month with our 100% white-label reseller panel. Buy credits at wholesale rates starting at $0.75/month and sell to your customers for $10 to $15/month.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={OFFICIAL_FACEBOOK_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-lg"
              >
                <Facebook className="w-4 h-4 fill-white" />
                <span>Contact to Order Reseller Panel</span>
              </a>
            </div>
          </div>

          <div className="bg-neutral-900/90 border border-amber-500/40 rounded-3xl p-6 text-center space-y-3 w-full md:w-80 shadow-2xl backdrop-blur-md">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Wholesale Panel Credits
            </div>
            <div className="text-3xl font-black text-white">From $0.75 <span className="text-xs font-normal text-neutral-400">/ credit</span></div>
            <p className="text-[11px] text-neutral-300">
              1 Credit = 1 Month of VIP Tiger OTT Access. Credits NEVER expire.
            </p>
            <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-[11px] text-amber-300 font-semibold">
              ● Instant Automated Panel Activation in 5 Minutes
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10 space-y-12">
        {/* Reseller Profit Margin Calculator */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 border-2 border-amber-400 rounded-3xl p-6 sm:p-10 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-200/60 text-amber-950 text-xs font-black mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Profit Calculator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">
                Calculate Your Monthly Reseller Earnings
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600">
                Estimate how much profit you will earn based on wholesale credit costs and your resale price.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="flex items-center justify-between text-xs font-bold text-neutral-800 mb-2">
                  <span>How many credits do you want to purchase?</span>
                  <span className="text-sm font-black text-amber-700">{creditsPurchased} Credits</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={creditsPurchased}
                  onChange={(e) => setCreditsPurchased(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-medium">
                  <span>100 Credits ($1.50/ea)</span>
                  <span>250 ($1.20/ea)</span>
                  <span>500 ($0.99/ea)</span>
                  <span>1000 ($0.75/ea)</span>
                </div>
              </div>

              <div>
                <label className="flex items-center justify-between text-xs font-bold text-neutral-800 mb-2">
                  <span>What price will you sell each 1-month account for?</span>
                  <span className="text-sm font-black text-emerald-700">${salesPrice} / month</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={salesPrice}
                  onChange={(e) => setSalesPrice(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-medium">
                  <span>$5/mo (Budget)</span>
                  <span>$10/mo (Recommended)</span>
                  <span>$25/mo (Premium)</span>
                </div>
              </div>
            </div>

            {/* Profit Outcome Box */}
            <div className="bg-neutral-900 rounded-3xl p-6 text-white space-y-4 flex flex-col justify-between shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                  <span>Your Wholesale Cost:</span>
                  <span className="font-mono text-neutral-200 font-bold">${totalCost.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                  <span>Total Customer Revenue:</span>
                  <span className="font-mono text-neutral-200 font-bold">${totalRevenue.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Estimated Net Profit</div>
                    <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                      +${totalProfit.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-black border border-emerald-500/30">
                      +{profitMargin}% ROI
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={OFFICIAL_FACEBOOK_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm rounded-xl transition cursor-pointer text-center block shadow-md"
              >
                Buy {creditsPurchased} Credits on Facebook Now
              </a>
            </div>
          </div>
        </div>

        {/* Wholesale Credit Pricing Cards */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900">
              Wholesale Reseller Panel Packages
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Select your tier to unlock the master Xtream UI reseller dashboard immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDIT_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-neutral-900 text-white shadow-2xl ring-2 ring-amber-400 scale-102"
                    : "bg-white border border-neutral-200 text-neutral-900 hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                        tier.popular
                          ? "bg-amber-500 text-black"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black mb-1">{tier.name}</h3>
                  <div className="text-xs text-neutral-400 mb-4">{tier.credits} Panel Credits</div>

                  <div className="mb-6">
                    <div className="text-3xl font-black font-mono">${tier.totalPrice}</div>
                    <div className="text-xs text-amber-500 font-bold">Only {tier.pricePerCredit} per month credit</div>
                  </div>

                  <ul className="space-y-2.5 text-xs mb-6">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className={tier.popular ? "text-neutral-300" : "text-neutral-600"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={OFFICIAL_FACEBOOK_PAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-black text-xs text-center transition cursor-pointer block ${
                    tier.popular
                      ? "bg-amber-500 hover:bg-amber-400 text-black shadow-md"
                      : "bg-neutral-900 hover:bg-black text-white"
                  }`}
                >
                  Order {tier.credits} Credits ($ {tier.totalPrice})
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Reseller Features Matrix */}
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 space-y-6">
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
            Xtream UI Reseller Panel Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs sm:text-sm text-neutral-700 font-medium">
            <div className="space-y-1.5">
              <strong className="text-neutral-900 block font-bold text-sm">⚡ Instant Line Creation</strong>
              Generate M3U playlists, Xtream Codes credentials, and MAG portal accounts in 5 seconds.
            </div>
            <div className="space-y-1.5">
              <strong className="text-neutral-900 block font-bold text-sm">🛡️ Unlimited Free Trials</strong>
              Offer 24-hour test trials to prospects to easily convert them into paying clients.
            </div>
            <div className="space-y-1.5">
              <strong className="text-neutral-900 block font-bold text-sm">🌐 100% White-Label Branding</strong>
              Point your own domain and DNS so customers see your brand name, not Tiger OTT.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerPage;
