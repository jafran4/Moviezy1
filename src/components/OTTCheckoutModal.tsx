import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Clock,
  Sparkles,
  Crown,
  Facebook,
  Tv,
  CheckCheck
} from "lucide-react";
import { OTTService, OTTPlan } from "../types";

export const OFFICIAL_FACEBOOK_PAGE = "https://www.facebook.com/profile.php?id=61565847062555";

interface OTTCheckoutModalProps {
  service: OTTService;
  selectedPlan: OTTPlan;
  onClose: () => void;
}

const OTTCheckoutModal: React.FC<OTTCheckoutModalProps> = ({
  service,
  selectedPlan,
  onClose,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState("");
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleApplyCoupon = () => {
    if (
      couponCode.trim().toUpperCase() === "OTT1" ||
      couponCode.trim().toUpperCase() === "NUMBER1" ||
      couponCode.trim().toUpperCase() === "SAVE10" ||
      couponCode.trim().toUpperCase() === "TIGER10"
    ) {
      setAppliedDiscount(10);
      setCouponMsg("🎉 Coupon Applied: 10% Extra Discount on Facebook Order!");
    } else {
      setCouponMsg("Invalid coupon code. Use 'TIGER10' for 10% off!");
    }
  };

  const formatPrice = (val: number) => {
    if (selectedPlan.currency === "QAR") {
      return `${Math.round(val)} QAR`;
    }
    if (selectedPlan.currency === "EUR") {
      return `€${val.toFixed(2)}`;
    }
    return `$${val.toFixed(2)}`;
  };

  const eurEquivalent =
    selectedPlan.currency === "USD"
      ? `€${(selectedPlan.price * 0.92).toFixed(2)}`
      : selectedPlan.currency === "QAR"
      ? `€${((selectedPlan.price / 3.64) * 0.92).toFixed(2)}`
      : null;

  const qarEquivalent =
    selectedPlan.currency === "USD"
      ? `${Math.round(selectedPlan.price * 3.64)} QAR`
      : selectedPlan.currency === "EUR"
      ? `${Math.round((selectedPlan.price / 0.92) * 3.64)} QAR`
      : null;

  const finalPrice = Math.max(
    1,
    Number((selectedPlan.price * (1 - appliedDiscount / 100)).toFixed(2))
  );

  const finalEurPrice =
    selectedPlan.currency === "USD"
      ? (finalPrice * 0.92).toFixed(2)
      : selectedPlan.currency === "EUR"
      ? finalPrice.toFixed(2)
      : ((finalPrice / 3.64) * 0.92).toFixed(2);

  const finalQarPrice =
    selectedPlan.currency === "USD"
      ? Math.round(finalPrice * 3.64)
      : selectedPlan.currency === "EUR"
      ? Math.round((finalPrice / 0.92) * 3.64)
      : Math.round(finalPrice);

  const orderMessageText = `Hello Tiger OTT Support, I would like to buy:
Package: ${service.name} (${selectedPlan.duration})
Screens: ${selectedPlan.screens}
Price: ${formatPrice(finalPrice)} (≈ €${finalEurPrice} / ${finalQarPrice} QAR)${appliedDiscount > 0 ? ` (Coupon Applied: ${couponCode.toUpperCase()})` : ""}
Please send payment details and activate my account.`;

  const copyOrderMessage = () => {
    navigator.clipboard.writeText(orderMessageText);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  return (
    <div
      id="ott-checkout-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden text-neutral-900 my-auto animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-neutral-100 bg-neutral-50">
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-xs text-base"
              style={{ backgroundColor: service.brandColor || "#1877F2" }}
            >
              {service.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-black text-neutral-900 leading-none">
                  {service.name}
                </h3>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-[10px] font-extrabold uppercase">
                  Official Store
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">
                {selectedPlan.duration} • {selectedPlan.screens}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-200 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Facebook Official Channel Highlight Banner */}
          <div className="bg-[#1877F2]/10 border-2 border-[#1877F2]/40 rounded-2xl p-4 text-neutral-900 shadow-2xs">
            <div className="flex items-start space-x-3">
              <div className="p-2.5 bg-[#1877F2] text-white rounded-xl flex-shrink-0 shadow-sm mt-0.5">
                <Facebook className="w-6 h-6 fill-white text-[#1877F2]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-black text-neutral-950 flex items-center gap-1.5">
                  <span>Official Facebook Buying &amp; Support Channel</span>
                </h4>
                <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                  All orders, custom renewals, and account activations are handled exclusively through our verified Facebook page for 100% security.
                </p>
              </div>
            </div>
          </div>

          {/* Selected Plan Summary Card */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-2xs">
            <div>
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                Selected Plan
              </span>
              <p className="text-base font-black text-neutral-900 mt-0.5">
                {service.name} ({selectedPlan.duration})
              </p>
              <p className="text-xs text-emerald-600 font-bold mt-1 flex items-center space-x-1">
                <Zap className="w-3.5 h-3.5 fill-emerald-600" />
                <span>Instant Setup via Facebook</span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs line-through text-neutral-400 block">
                {formatPrice(selectedPlan.originalPrice)}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-neutral-900">
                {formatPrice(finalPrice)}
              </span>
              <div className="flex flex-col items-end text-[11px] font-mono text-neutral-600 font-semibold space-y-0.5 mt-0.5">
                {selectedPlan.currency !== "EUR" && (
                  <span className="text-indigo-700 font-bold">
                    ≈ €{finalEurPrice} EUR
                  </span>
                )}
                {selectedPlan.currency !== "QAR" && (
                  <span>
                    ≈ {finalQarPrice} QAR
                  </span>
                )}
              </div>
              <span className="inline-block mt-0.5 px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-[10px] font-bold">
                Save {selectedPlan.savePercent}%
              </span>
            </div>
          </div>

          {/* Promo code field */}
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Promo Code (e.g. TIGER10)"
                className="flex-1 bg-white border border-neutral-300 rounded-xl px-3.5 py-2 text-xs text-neutral-900 uppercase focus:outline-none focus:border-amber-500 font-mono shadow-2xs"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Apply
              </button>
            </div>
            {couponMsg && (
              <p className={`text-xs font-bold ${appliedDiscount > 0 ? "text-emerald-600" : "text-amber-600"}`}>
                {couponMsg}
              </p>
            )}
          </div>

          {/* Quick 3-Step Ordering Guide */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 space-y-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-700 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>How to Complete Your Purchase:</span>
            </h4>
            <ol className="space-y-2 text-xs text-neutral-700">
              <li className="flex items-start space-x-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1877F2] font-black text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>Click <strong>"Open Facebook to Buy"</strong> below or copy your order message.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1877F2] font-black text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>Send a message to our official page support team.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1877F2] font-black text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>Complete payment directly with our agent &amp; receive your instant login credentials in minutes!</span>
              </li>
            </ol>
          </div>

          {/* Pre-formatted Message Copy Box */}
          <div className="bg-white border border-neutral-200 rounded-xl p-3.5 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider">
                Order Message Template
              </span>
              <button
                type="button"
                onClick={copyOrderMessage}
                className="inline-flex items-center space-x-1 text-xs font-bold text-[#1877F2] hover:text-[#166fe5] transition cursor-pointer"
              >
                {copiedMessage ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Message</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-[11px] font-mono bg-neutral-50 p-2.5 rounded-lg border border-neutral-200 text-neutral-800 whitespace-pre-wrap leading-relaxed">
              {orderMessageText}
            </pre>
          </div>

          {/* Primary Action Button to Open Facebook */}
          <div className="space-y-2.5 pt-1">
            <a
              href={OFFICIAL_FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black rounded-xl text-sm sm:text-base flex items-center justify-center space-x-2 shadow-lg transition duration-200 active:scale-[0.99] cursor-pointer hover:shadow-blue-500/25"
            >
              <Facebook className="w-5 h-5 fill-white text-[#1877F2]" />
              <span>Open Facebook Page to Buy &amp; Activate</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={copyOrderMessage}
              className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition cursor-pointer border border-neutral-200"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedMessage ? "✓ Copied! Now Paste on Facebook" : "Copy Order Text First"}</span>
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-2 border-t border-neutral-100 grid grid-cols-3 gap-2 text-center text-[10px] text-neutral-600">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mb-0.5" />
              <span className="font-bold text-neutral-800">100% Guaranteed</span>
              <span>Full replacement</span>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-4 h-4 text-amber-600 mb-0.5" />
              <span className="font-bold text-neutral-800">Instant Delivery</span>
              <span>Under 5 mins</span>
            </div>
            <div className="flex flex-col items-center">
              <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2] mb-0.5" />
              <span className="font-bold text-neutral-800">24/7 Facebook</span>
              <span>Live Human Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTTCheckoutModal;

