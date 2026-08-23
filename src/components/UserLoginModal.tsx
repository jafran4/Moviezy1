import React, { useState } from "react";
import {
  X,
  User,
  Lock,
  Mail,
  Tv,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Eye,
  EyeOff,
  LogOut,
  Zap,
  Radio,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { AuthUser, UserProfile } from "../types";
import { PROFILES } from "../data/fallbackData";
import { TigerLogo } from "./TigerLogo";
import { OFFICIAL_FACEBOOK_PAGE } from "./TigerSubscriptionSection";

interface UserLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: AuthUser | null;
  onLogin: (user: AuthUser) => void;
  onLogout: () => void;
  onSelectProfile?: (profile: UserProfile) => void;
  onOpenPlans?: () => void;
}

export const UserLoginModal: React.FC<UserLoginModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
  onSelectProfile,
  onOpenPlans,
}) => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup" | "iptv">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Form states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // IPTV Subscriber Login
  const [iptvServer, setIptvServer] = useState("http://tiger-ott.pro:8080");
  const [iptvUsername, setIptvUsername] = useState("");
  const [iptvPassword, setIptvPassword] = useState("");
  const [showIptvSecret, setShowIptvSecret] = useState(false);

  if (!isOpen) return null;

  const handleStandardLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const cleanUsername = username.trim();
    const cleanPassword = password.trim();

    if (!cleanUsername || !cleanPassword) {
      setErrorMessage("Please enter both your username and password.");
      return;
    }

    // Predefined VIP Subscriber Accounts
    const PRESET_VIP_USERS: Record<string, { pass: string; user: AuthUser }> = {
      "223385678749": {
        pass: "246458924166",
        user: {
          id: "user-223385678749",
          name: "VIP Member (223385678749)",
          username: "223385678749",
          email: "223385678749@tiger-ott.pro",
          avatar: "",
          isSubscriber: true,
          subscriptionPlan: "15 MONTH ADULT(18+) PACK + (3 months extra)",
          subscriptionDetails: "15 Month Adult(18+) Pack + 3 Months Extra (18 Months Total Validity)",
          packageType: "15 MONTH ADULT(18+) PACK + (3 months extra)",
          totalDuration: "18 Months Total (15 Months + 3 Months Extra Bonus)",
          isAdultPack: true,
          connectionsCount: 1,
          maxDevices: 1,
          expiryDate: "18 Months (February 2028)",
          iptvUsername: "223385678749",
          iptvPassword: "246458924166",
          iptvServer: "http://tiger-ott.pro:8080",
          role: "subscriber",
        },
      },
      "730863825335": {
        pass: "246985399883",
        user: {
          id: "user-730863825335",
          name: "VIP Member (730863825335)",
          username: "730863825335",
          email: "730863825335@tiger-ott.pro",
          avatar: "",
          isSubscriber: true,
          subscriptionPlan: "12 MONTH ADULT(18+) PACK",
          subscriptionDetails: "12 Month Adult(18+) Ultra 4K UHD Pass",
          packageType: "12 MONTH ADULT(18+) PACK",
          totalDuration: "12 Months Full Access",
          isAdultPack: true,
          connectionsCount: 1,
          maxDevices: 1,
          expiryDate: "12 Months (August 2027)",
          iptvUsername: "730863825335",
          iptvPassword: "246985399883",
          iptvServer: "http://tiger-ott.pro:8080",
          role: "subscriber",
        },
      },
      "146685776172": {
        pass: "221069247041",
        user: {
          id: "user-146685776172",
          name: "VIP Member (146685776172)",
          username: "146685776172",
          email: "146685776172@tiger-ott.pro",
          avatar: "",
          isSubscriber: true,
          subscriptionPlan: "3 MONTH FAMILY PACK",
          subscriptionDetails: "3 Month Family Pack (All Ages 4K Streaming)",
          packageType: "3 MONTH FAMILY PACK",
          totalDuration: "3 Months Full Access",
          isAdultPack: false,
          connectionsCount: 1,
          maxDevices: 1,
          expiryDate: "3 Months (November 2026)",
          iptvUsername: "146685776172",
          iptvPassword: "221069247041",
          iptvServer: "http://tiger-ott.pro:8080",
          role: "subscriber",
        },
      },
      "272544749436": {
        pass: "354756648510",
        user: {
          id: "user-272544749436",
          name: "VIP Member (272544749436)",
          username: "272544749436",
          email: "272544749436@tiger-ott.pro",
          avatar: "",
          isSubscriber: true,
          subscriptionPlan: "3 MONTH ADULT(18+) PACK",
          subscriptionDetails: "3 Month Adult(18+) Pack (Ultra 4K HD)",
          packageType: "3 MONTH ADULT(18+) PACK",
          totalDuration: "3 Months Full Access",
          isAdultPack: true,
          connectionsCount: 1,
          maxDevices: 1,
          expiryDate: "3 Months (November 2026)",
          iptvUsername: "272544749436",
          iptvPassword: "354756648510",
          iptvServer: "http://tiger-ott.pro:8080",
          role: "subscriber",
        },
      },
      "149031707125": {
        pass: "567616611190",
        user: {
          id: "user-149031707125",
          name: "VIP Member (149031707125)",
          username: "149031707125",
          email: "149031707125@tiger-ott.pro",
          avatar: "",
          isSubscriber: true,
          subscriptionPlan: "12 MONTH ADULT(18+) PACK",
          subscriptionDetails: "12 Month Adult(18+) Ultra 4K UHD Pass",
          packageType: "12 MONTH ADULT(18+) PACK",
          totalDuration: "12 Months Full Access",
          isAdultPack: true,
          connectionsCount: 1,
          maxDevices: 1,
          expiryDate: "12 Months (August 2027)",
          iptvUsername: "149031707125",
          iptvPassword: "567616611190",
          iptvServer: "http://tiger-ott.pro:8080",
          role: "subscriber",
        },
      },
    };

    if (PRESET_VIP_USERS[cleanUsername]) {
      const target = PRESET_VIP_USERS[cleanUsername];
      if (cleanPassword !== target.pass) {
        setErrorMessage(`Invalid password for account ${cleanUsername}. Please check your password code.`);
        return;
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onLogin(target.user);
        setSuccessMessage(`Logged in as VIP Subscriber! ${target.user.subscriptionPlan} active.`);
        setTimeout(() => {
          onClose();
        }, 600);
      }, 500);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const displayName = cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1);
      const loggedUser: AuthUser = {
        id: `user-${cleanUsername.toLowerCase()}`,
        name: displayName,
        username: cleanUsername,
        email: `${cleanUsername.toLowerCase()}@tiger-ott.pro`,
        avatar: "",
        isSubscriber: true,
        subscriptionPlan: "Tiger 4K VIP Premium (Active)",
        subscriptionDetails: "All-in-One 4K IPTV Streaming Pass",
        expiryDate: "Aug 2027",
        role: "user",
        connectionsCount: 1,
        maxDevices: 1,
      };
      onLogin(loggedUser);
      setSuccessMessage(`Welcome back, ${displayName}! Logged in successfully.`);
      setTimeout(() => {
        onClose();
      }, 600);
    }, 500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!username.trim()) {
      setErrorMessage("Please enter a username.");
      return;
    }
    if (password.length < 4) {
      setErrorMessage("Password must be at least 4 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const cleanUsername = username.trim();
      const displayName = cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1);
      const newUser: AuthUser = {
        id: `user-${cleanUsername.toLowerCase()}-${Date.now()}`,
        name: displayName,
        username: cleanUsername,
        email: `${cleanUsername.toLowerCase()}@tiger-ott.pro`,
        avatar: "",
        isSubscriber: true,
        subscriptionPlan: "Tiger VIP Access Pass",
        expiryDate: "30 Days Access",
        role: "user",
        connectionsCount: 2,
      };
      onLogin(newUser);
      setSuccessMessage(`Account created for ${displayName}! Welcome to Tiger OTT.`);
      setTimeout(() => {
        onClose();
      }, 600);
    }, 500);
  };

  const handleIptvLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!iptvUsername.trim() || !iptvPassword.trim()) {
      setErrorMessage("Please enter your IPTV Username and Password.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const subscriberUser: AuthUser = {
        id: `sub-${iptvUsername.trim()}`,
        name: `Subscriber (${iptvUsername.trim()})`,
        username: iptvUsername.trim(),
        email: `${iptvUsername.trim()}@tiger-iptv.net`,
        avatar: "",
        isSubscriber: true,
        subscriptionPlan: "Tiger Xtream Codes 4K IPTV Pass",
        expiryDate: "Active Lifetime Subscription",
        iptvUsername: iptvUsername.trim(),
        iptvServer: iptvServer.trim(),
        connectionsCount: 4,
        role: "subscriber",
      };
      onLogin(subscriberUser);
      setSuccessMessage("IPTV Xtream Subscriber Account connected!");
      setTimeout(() => {
        onClose();
      }, 700);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white border border-neutral-200 text-neutral-900 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-scaleUp relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center space-x-3">
            <TigerLogo size="sm" />
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-1.5">
                {currentUser ? "My Tiger OTT Account" : "Sign In & Manage Account"}
              </h3>
              <p className="text-xs text-neutral-400">
                {currentUser
                  ? `Logged in as ${currentUser.name}`
                  : "Access 25,000+ live channels, 4K movies & synchronized watchlist"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ===================== LOGGED IN VIEW ===================== */}
        {currentUser ? (
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* User Profile Card */}
            <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-2xl p-5 border border-neutral-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 text-black flex items-center justify-center font-black text-xl shadow-lg ring-2 ring-amber-400/80 flex-shrink-0">
                  <User className="w-7 h-7 text-neutral-950" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-lg font-black text-white truncate">
                      {currentUser.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-400 text-black font-mono">
                      VIP ACTIVE
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 truncate font-mono">{currentUser.username || currentUser.name}</p>
                  <p className="text-xs text-amber-400 font-bold mt-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{currentUser.subscriptionPlan || "15 MONTH ADULT(18+) PACK + (3 months extra)"}</span>
                  </p>
                </div>
              </div>

              {/* Status Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pt-4 border-t border-neutral-800 text-xs">
                <div className="bg-neutral-800/70 p-2.5 rounded-xl border border-neutral-700/50">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Status</span>
                  <span className="font-extrabold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Active VIP
                  </span>
                </div>
                <div className="bg-neutral-800/70 p-2.5 rounded-xl border border-neutral-700/50">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Device</span>
                  <span className="font-extrabold text-white">
                    {currentUser.connectionsCount || 1} Device (1 Screen)
                  </span>
                </div>
                <div className="bg-neutral-800/70 p-2.5 rounded-xl border border-neutral-700/50 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Expires</span>
                  <span className="font-extrabold text-amber-300">
                    {currentUser.expiryDate || "18 Months (Feb 2028)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Dedicated Subscription Details Card */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-black flex items-center justify-center font-black text-xs shadow-xs">
                    VIP
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-amber-950 tracking-wide">
                      Subscription Details
                    </h4>
                    <p className="text-[11px] text-amber-800 font-medium">
                      Official Tiger OTT VIP Package
                    </p>
                  </div>
                </div>
                {currentUser.isAdultPack ? (
                  <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">
                    18+ ADULT INCLUDED
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider">
                    FAMILY PASS (ALL AGES)
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs text-neutral-800">
                <div className="flex items-start justify-between py-1 border-b border-amber-100">
                  <span className="text-neutral-500 font-bold">Details:</span>
                  <span className="font-black text-neutral-900 text-right">
                    {currentUser.subscriptionPlan || "3 MONTH FAMILY PACK"}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-amber-100">
                  <span className="text-neutral-500 font-bold">Device Limit:</span>
                  <span className="font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Device : {currentUser.connectionsCount || 1}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-amber-100">
                  <span className="text-neutral-500 font-bold">Total Duration:</span>
                  <span className="font-extrabold text-amber-900">
                    {currentUser.totalDuration || "3 Months Full Access"}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-amber-100">
                  <span className="text-neutral-500 font-bold">Content Channels:</span>
                  <span className="font-bold text-neutral-800">
                    {currentUser.isAdultPack 
                      ? "Adult (18+) VIP + 25,000+ Global 4K Channels & VOD" 
                      : "Family HD & 4K + 25,000+ Live Channels, Movies, Sports & Kids TV"}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-neutral-500 font-bold">Stream Quality:</span>
                  <span className="font-black text-neutral-900">
                    4K Ultra HD / 60 FPS Anti-Freeze
                  </span>
                </div>
              </div>
            </div>

            {/* Xtream IPTV Credentials Section */}
            {currentUser.iptvUsername && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-amber-600" />
                    <span>IPTV Smarters Xtream Codes</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowIptvSecret(!showIptvSecret)}
                    className="text-xs text-amber-800 hover:text-amber-900 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    {showIptvSecret ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showIptvSecret ? "Hide" : "Reveal"}</span>
                  </button>
                </div>
                <div className="text-xs font-mono bg-white p-3 rounded-xl border border-amber-200 space-y-1 text-neutral-800">
                  <p>
                    <span className="text-neutral-400">Server: </span>
                    {currentUser.iptvServer || "http://tiger-ott.pro:8080"}
                  </p>
                  <p>
                    <span className="text-neutral-400">Username: </span>
                    {currentUser.iptvUsername}
                  </p>
                  <p>
                    <span className="text-neutral-400">Password / Code: </span>
                    <span className="text-amber-900 font-bold">
                      {showIptvSecret 
                        ? (currentUser.iptvPassword || "•••••••••••• (Active Tiger Token)") 
                        : "••••••••••••"}
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Switch Household Profiles */}
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-neutral-500 tracking-wider">
                Switch Household Profile
              </span>
              <div className="grid grid-cols-3 gap-2">
                {PROFILES.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      if (onSelectProfile) onSelectProfile(p);
                      setSuccessMessage(`Switched to profile: ${p.name}`);
                    }}
                    className="flex flex-col items-center p-2.5 rounded-xl border border-neutral-200 hover:border-amber-400 hover:bg-amber-50/50 transition text-center group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neutral-800 text-amber-400 flex items-center justify-center mb-1 group-hover:scale-105 transition ring-1 ring-neutral-300 font-bold text-xs">
                      <User className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-neutral-800 truncate w-full">
                      {p.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-neutral-200 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenPlans) onOpenPlans();
                  else {
                    const el = document.getElementById("tiger-ott-subscription");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl flex items-center space-x-1.5 transition shadow-sm cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Renew / Extend Subscription</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onLogout();
                  setSuccessMessage("Logged out successfully.");
                  setTimeout(() => onClose(), 400);
                }}
                className="px-4 py-2.5 bg-neutral-100 hover:bg-red-50 text-neutral-700 hover:text-red-600 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition border border-neutral-300 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        ) : (
          /* ===================== LOGGED OUT LOGIN / REGISTER VIEW ===================== */
          <div className="p-5 sm:p-8 overflow-y-auto space-y-5">
            {/* Top Auth Tabs */}
            <div className="flex bg-neutral-100 p-1 rounded-2xl border border-neutral-200">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("signin");
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-extrabold rounded-xl transition cursor-pointer ${
                  activeTab === "signin"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Member Sign In
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("signup");
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-extrabold rounded-xl transition cursor-pointer ${
                  activeTab === "signup"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                Register Free
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("iptv");
                  setErrorMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-extrabold rounded-xl transition cursor-pointer ${
                  activeTab === "iptv"
                    ? "bg-amber-500 text-black shadow-sm"
                    : "text-neutral-600 hover:text-black"
                }`}
              >
                IPTV Xtream
              </button>
            </div>

            {/* Error & Success Feedback Banners */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center space-x-2 animate-fadeIn">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center space-x-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* 1. SIGN IN FORM */}
            {activeTab === "signin" && (
              <form onSubmit={handleStandardLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      autoFocus
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                      className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-neutral-700">Password</label>
                    <a
                      href={OFFICIAL_FACEBOOK_PAGE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-[#1877F2] hover:underline font-semibold"
                    >
                      Need help? Ask on Facebook
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-900 font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#E50914] hover:bg-[#b80710] text-white font-extrabold rounded-xl text-xs sm:text-sm transition shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? "Verifying Credentials..." : "Sign In with Username & Password"}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* 2. SIGN UP FORM */}
            {activeTab === "signup" && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Choose Username
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      autoFocus
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="e.g. likhon, moviefan99"
                      className="w-full pl-10 pr-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Create Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 4 characters"
                      className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-900 font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-neutral-900 hover:bg-black text-white font-extrabold rounded-xl text-xs sm:text-sm transition shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? "Creating Account..." : "Create Account & Start Watching"}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </button>
              </form>
            )}

            {/* 3. IPTV XTREAM LOGIN */}
            {activeTab === "iptv" && (
              <form onSubmit={handleIptvLogin} className="space-y-4">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Log in with your <strong>Tiger OTT / IPTV Smarters Xtream Codes API</strong> credentials to instantly synchronize playlists, live sports channels, and 4K VOD servers.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Server URL (Default)
                  </label>
                  <input
                    type="text"
                    value={iptvServer}
                    onChange={(e) => setIptvServer(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl font-mono text-neutral-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    IPTV Username / M3U User
                  </label>
                  <input
                    type="text"
                    value={iptvUsername}
                    onChange={(e) => setIptvUsername(e.target.value)}
                    placeholder="e.g. tiger_sub_102"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    IPTV Password / Token
                  </label>
                  <input
                    type="password"
                    value={iptvPassword}
                    onChange={(e) => setIptvPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-xl text-xs sm:text-sm transition shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  <Tv className="w-4 h-4" />
                  <span>{loading ? "Authenticating Stream..." : "Connect IPTV Subscriber Account"}</span>
                </button>
              </form>
            )}

            {/* Need Subscription? */}
            <div className="pt-3 border-t border-neutral-200 text-center space-y-2">
              <p className="text-xs text-neutral-600">
                Don't have an IPTV subscription yet?
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenPlans) onOpenPlans();
                    else {
                      const el = document.getElementById("tiger-ott-subscription");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View All 20,000+ Channel Subscription Plans</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLoginModal;
