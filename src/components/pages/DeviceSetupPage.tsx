import React, { useState } from "react";
import {
  Tv,
  Smartphone,
  Laptop,
  Flame,
  Download,
  CheckCircle2,
  Copy,
  ExternalLink,
  Facebook,
  Shield,
  Zap,
  HelpCircle,
  Play
} from "lucide-react";
import { OFFICIAL_FACEBOOK_PAGE } from "../TigerSubscriptionSection";

interface DeviceSetupPageProps {
  onOpenStore: () => void;
}

const DEVICE_TABS = [
  { id: "firestick", label: "Amazon Firestick 4K", icon: Flame, color: "text-amber-500" },
  { id: "samsung", label: "Samsung Smart TV", icon: Tv, color: "text-blue-600" },
  { id: "lg", label: "LG Smart TV (webOS)", icon: Tv, color: "text-red-600" },
  { id: "androidtv", label: "Android TV / Google TV", icon: Tv, color: "text-emerald-600" },
  { id: "apple", label: "Apple TV & iPhone/iPad", icon: Smartphone, color: "text-neutral-800" },
  { id: "pc", label: "Windows PC & Mac", icon: Laptop, color: "text-purple-600" },
];

export const DeviceSetupPage: React.FC<DeviceSetupPageProps> = ({ onOpenStore }) => {
  const [activeDevice, setActiveDevice] = useState("firestick");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full bg-white text-neutral-900 min-h-screen pb-24 pt-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-black text-white py-12 px-4 sm:px-8 md:px-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black">
              <Download className="w-3.5 h-3.5" />
              <span>STEP-BY-STEP DEVICE INSTALLATION &amp; APP GUIDES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              How to Setup IPTV Smarters on Any Device
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Complete beginner-friendly setup guides for Firestick, Samsung TV, LG webOS, Google TV, Apple TV, PC, and Mobile. Setup takes less than 2 minutes!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center flex-shrink-0 space-y-2">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Need Instant Help?
            </span>
            <div className="text-xs text-neutral-200">24/7 Live 1-on-1 Setup Assistance</div>
            <a
              href={OFFICIAL_FACEBOOK_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-xs rounded-xl transition cursor-pointer shadow-md"
            >
              <Facebook className="w-4 h-4 fill-white" />
              <span>Chat with Support on Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 space-y-10">
        {/* Device Navigation Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-neutral-200 pb-4">
          {DEVICE_TABS.map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveDevice(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-black transition whitespace-nowrap cursor-pointer ${
                  activeDevice === tab.id
                    ? "bg-neutral-900 text-white shadow-md scale-102"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                <IconComp className={`w-4 h-4 ${tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Device Setup Guide Content */}
        <div className="bg-[#f8fafc] border border-neutral-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          {activeDevice === "firestick" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 flex items-center space-x-2">
                    <Flame className="w-6 h-6 text-amber-500" />
                    <span>How to Install IPTV Smarters Pro on Amazon Firestick</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Works on Fire TV Stick Lite, Fire TV 4K, 4K Max, and Fire TV Cube
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-lg text-xs font-black">
                  Recommended Method
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-2xs space-y-2">
                    <div className="flex items-center space-x-2 font-black text-sm text-neutral-900">
                      <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center">1</span>
                      <span>Install the "Downloader" App</span>
                    </div>
                    <p className="text-xs text-neutral-600 pl-8 leading-relaxed">
                      On your Firestick Home Screen, go to <strong>Find &gt; Search</strong> and type <strong>"Downloader"</strong> (orange icon). Click <strong>Download / Get</strong>.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-2xs space-y-2">
                    <div className="flex items-center space-x-2 font-black text-sm text-neutral-900">
                      <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center">2</span>
                      <span>Enable Unknown Sources</span>
                    </div>
                    <p className="text-xs text-neutral-600 pl-8 leading-relaxed">
                      Go to <strong>Settings &gt; My Fire TV &gt; Developer Options</strong> and toggle <strong>Install Unknown Apps</strong> to <strong>ON</strong> for Downloader.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-2xs space-y-2">
                    <div className="flex items-center space-x-2 font-black text-sm text-neutral-900">
                      <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center">3</span>
                      <span>Enter the Quick Download Code</span>
                    </div>
                    <div className="pl-8 space-y-2">
                      <p className="text-xs text-neutral-600">
                        Open Downloader, enter the 5-digit code in the URL box and click <strong>Go</strong>:
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 bg-amber-50 border border-amber-300 rounded-xl font-mono text-base font-black text-amber-900">
                          252421
                        </div>
                        <button
                          onClick={() => handleCopy("252421", "firecode")}
                          className="p-2 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-100 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copiedKey === "firecode" ? "Copied!" : "Copy"}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-2xs space-y-2">
                    <div className="flex items-center space-x-2 font-black text-sm text-neutral-900">
                      <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center">4</span>
                      <span>Log in with Xtream Codes API</span>
                    </div>
                    <p className="text-xs text-neutral-600 pl-8 leading-relaxed">
                      Launch IPTV Smarters Pro, select <strong>Login with Xtream Codes API</strong>, and enter the login details sent to your email or Facebook.
                    </p>
                  </div>
                </div>

                {/* Right Side Credentials Preview */}
                <div className="bg-white rounded-3xl p-6 border border-neutral-200 space-y-4">
                  <h3 className="font-black text-lg text-neutral-900 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span>Xtream Codes Login Example</span>
                  </h3>
                  <div className="bg-neutral-900 rounded-2xl p-4 text-white text-xs font-mono space-y-3">
                    <div>
                      <div className="text-neutral-400 text-[10px]">Any Name:</div>
                      <div className="text-amber-400 font-bold">Tiger OTT 4K</div>
                    </div>
                    <div>
                      <div className="text-neutral-400 text-[10px]">Username:</div>
                      <div className="text-white font-bold">YourUsername</div>
                    </div>
                    <div>
                      <div className="text-neutral-400 text-[10px]">Password:</div>
                      <div className="text-white font-bold">••••••••••</div>
                    </div>
                    <div>
                      <div className="text-neutral-400 text-[10px]">Server URL / Portal:</div>
                      <div className="text-emerald-400 font-bold">http://line.tiger-ott.pro:80</div>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="button"
                      onClick={onOpenStore}
                      className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm rounded-xl transition cursor-pointer shadow-md"
                    >
                      Get Login Credentials ($1.65/mo)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDevice === "samsung" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 flex items-center space-x-2">
                <Tv className="w-6 h-6 text-blue-600" />
                <span>How to Install IPTV on Samsung Smart TV (Tizen OS)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h4 className="font-bold text-sm text-neutral-900">Search Samsung App Store</h4>
                  <p className="text-xs text-neutral-600">Open Samsung Apps on your TV home bar.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h4 className="font-bold text-sm text-neutral-900">Install IPTV Smarters or IBO Player</h4>
                  <p className="text-xs text-neutral-600">Type "IPTV Smarters Pro" or "IBO Player" and install.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h4 className="font-bold text-sm text-neutral-900">Enter Xtream Codes</h4>
                  <p className="text-xs text-neutral-600">Input your Server URL, Username, and Password to load 25,000+ channels.</p>
                </div>
              </div>
            </div>
          )}

          {activeDevice === "lg" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 flex items-center space-x-2">
                <Tv className="w-6 h-6 text-red-600" />
                <span>How to Install IPTV on LG Smart TV (webOS)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h4 className="font-bold text-sm text-neutral-900">Open LG Content Store</h4>
                  <p className="text-xs text-neutral-600">Click on LG Content Store on your remote.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h4 className="font-bold text-sm text-neutral-900">Download IPTV Smarters / Nanomid</h4>
                  <p className="text-xs text-neutral-600">Search for "IPTV Smarters" or "Smart IPTV".</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h4 className="font-bold text-sm text-neutral-900">Login &amp; Stream</h4>
                  <p className="text-xs text-neutral-600">Enjoy 4K live sports and movies instantly.</p>
                </div>
              </div>
            </div>
          )}

          {activeDevice === "androidtv" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 flex items-center space-x-2">
                <Tv className="w-6 h-6 text-emerald-600" />
                <span>How to Install on Android TV &amp; Google TV (Sony, TCL, Philips, Chromecast)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h4 className="font-bold text-sm text-neutral-900">Google Play Store</h4>
                  <p className="text-xs text-neutral-600">Open Google Play Store on your Android TV.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h4 className="font-bold text-sm text-neutral-900">Search "IPTV Smarters Pro" or "TiviMate"</h4>
                  <p className="text-xs text-neutral-600">Install your favorite IPTV player directly with 1 click.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h4 className="font-bold text-sm text-neutral-900">Add Xtream Codes API</h4>
                  <p className="text-xs text-neutral-600">Login with your credentials to start watching.</p>
                </div>
              </div>
            </div>
          )}

          {activeDevice === "apple" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-neutral-800" />
                <span>How to Install on Apple TV, iPhone &amp; iPad (iOS)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-neutral-900 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h4 className="font-bold text-sm text-neutral-900">Open Apple App Store</h4>
                  <p className="text-xs text-neutral-600">Search for "IPTV Smarters Lite" or "GSE Smart IPTV".</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-neutral-900 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h4 className="font-bold text-sm text-neutral-900">Download the Free App</h4>
                  <p className="text-xs text-neutral-600">Install the app on your Apple TV, iPhone, or iPad.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-neutral-900 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h4 className="font-bold text-sm text-neutral-900">Connect via Xtream API</h4>
                  <p className="text-xs text-neutral-600">Enter your server credentials for smooth playback with AirPlay support.</p>
                </div>
              </div>
            </div>
          )}

          {activeDevice === "pc" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 flex items-center space-x-2">
                <Laptop className="w-6 h-6 text-purple-600" />
                <span>How to Install on Windows PC &amp; Apple Mac</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h4 className="font-bold text-sm text-neutral-900">Download IPTV Smarters for PC/Mac</h4>
                  <p className="text-xs text-neutral-600">Download the official .exe for Windows or .dmg for macOS.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h4 className="font-bold text-sm text-neutral-900">Install &amp; Run</h4>
                  <p className="text-xs text-neutral-600">Run the installer and accept permissions.</p>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2">
                  <span className="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h4 className="font-bold text-sm text-neutral-900">Stream on Your Laptop</h4>
                  <p className="text-xs text-neutral-600">Watch live TV, movies, and series with crystal clear audio on your PC.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeviceSetupPage;
