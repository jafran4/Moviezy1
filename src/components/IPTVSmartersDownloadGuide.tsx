import React from "react";
import {
  Download,
  Laptop,
  Tv,
  Monitor,
  Apple,
  Facebook,
  ExternalLink,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";
import { OFFICIAL_FACEBOOK_PAGE } from "./TigerSubscriptionSection";

interface IPTVSmartersDownloadGuideProps {
  onOpenStore?: () => void;
}

export const IPTVSmartersDownloadGuide: React.FC<IPTVSmartersDownloadGuideProps> = ({
  onOpenStore,
}) => {
  return (
    <section
      id="how-to-download-iptv-smarters-pro-on-tv"
      className="w-full bg-neutral-950 text-white py-16 sm:py-24 border-t border-neutral-800"
      aria-label="How to Download IPTV Smarters Pro on TV and Laptop Guide"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Main Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Download className="w-3.5 h-3.5 animate-bounce" />
            <span>Official Device Installation Guide</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            How to Download <span className="text-amber-400">IPTV Smarters Pro</span> on TV &amp; Laptop
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            You can download <strong className="text-white font-bold">IPTV Smarters Pro</strong> on a laptop through official app marketplaces and on a TV via built-in app stores or dedicated streaming hardware depending on the device manufacturer.
          </p>
        </header>

        {/* ===================== SECTION 1: DOWNLOADING ON A LAPTOP (PC / MAC) ===================== */}
        <div className="mb-14 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Downloading on a Laptop (PC / Mac)
                </h3>
                <p className="text-xs text-neutral-400">
                  Official desktop marketplace installations for Windows &amp; Apple macOS
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Windows Laptops */}
            <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="relative rounded-lg overflow-hidden h-36 border border-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80"
                    alt="Windows Laptop IPTV Smarters"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Monitor className="w-3 h-3" /> Microsoft Store
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white">
                  Windows Laptops (Microsoft / HP / Dell / Lenovo / Asus / Acer)
                </h4>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Open the built-in <strong>Microsoft Store</strong>, search for <strong>Smarters IPTV Pro</strong> or <strong>IPTV Smarters Pro</strong>, and verify the publisher is listed as <strong className="text-amber-300">SmartersPlayer LLC</strong> or <strong className="text-amber-300">AI Tools Apps SRL</strong> before clicking <strong>Get</strong> or <strong>Install</strong>.
                </p>
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-200 flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Always verify official publisher details before downloading.</span>
              </div>
            </div>

            {/* Apple MacBooks */}
            <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="relative rounded-lg overflow-hidden h-36 border border-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80"
                    alt="Apple MacBook IPTV Smarters"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Apple className="w-3 h-3" /> Mac App Store
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white">
                  Apple Laptops (Apple MacBook / Air / Pro)
                </h4>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Open the <strong>App Store</strong> on your macOS device, search for <strong>IPTV Smarters Pro</strong>, and click <strong>Get</strong> to install it directly.
                </p>
              </div>

              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-neutral-400 flex items-start space-x-2">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Supports full-screen 4K playback and multi-stream grid view.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== SECTION 2: DOWNLOADING ON A TV BY MANUFACTURER ===================== */}
        <div className="mb-14 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Downloading on a TV by Manufacturer Details
                </h3>
                <p className="text-xs text-neutral-400">
                  Step-by-step instructions for Android TV, Samsung Tizen, LG webOS, and Roku
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Android TVs / Google TVs */}
            <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 space-y-3">
              <div className="relative rounded-lg overflow-hidden h-36 border border-neutral-800 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80"
                  alt="Android TV IPTV Smarters"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  Google Play Store
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Android TVs / Google TVs (Sony, TCL, Philips, Hisense, Xiaomi)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Open the <strong>Google Play Store</strong> directly from your TV home screen, search for <strong>IPTV Smarters Pro</strong>, and select <strong>Install</strong>.
              </p>
            </div>

            {/* 2. Samsung Smart TVs */}
            <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 space-y-3">
              <div className="relative rounded-lg overflow-hidden h-36 border border-neutral-800 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80"
                  alt="Samsung TV IPTV Smarters"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  Samsung Apps / Tizen OS
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Samsung Smart TVs (Samsung Tizen OS)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Press the <strong>Home button</strong>, navigate to <strong>Apps</strong>, and search for <strong>IPTV Smarters Pro</strong>.
              </p>
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-amber-200 flex items-start space-x-2">
                <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Note:</strong> If your specific older Samsung model does not feature it in the native app store, plug in an external Android-based media player like an Amazon Fire TV Stick or Google Chromecast into an HDMI port and download it from the device's app store.
                </p>
              </div>
            </div>

            {/* 3. LG Smart TVs */}
            <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 space-y-3">
              <div className="relative rounded-lg overflow-hidden h-36 border border-neutral-800 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&auto=format&fit=crop&q=80"
                  alt="LG TV IPTV Smarters"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  LG Content Store
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                LG Smart TVs (LG webOS)
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Press the <strong>Home button</strong> on your remote, open the <strong>LG Content Store</strong>, search for <strong>IPTV Smarters Pro</strong>, and click <strong>Install</strong>.
              </p>
            </div>

            {/* 4. Roku TVs & Older Non-Android Brands */}
            <div className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-5 space-y-3">
              <div className="relative rounded-lg overflow-hidden h-36 border border-neutral-800 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80"
                  alt="Roku TV Streaming Stick IPTV Smarters"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                  External HDMI Player
                </div>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Roku TVs / Older Non-Android Brands
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Roku models and certain legacy operating systems do not natively support direct sideloading or downloading of IPTV Smarters Pro. You must use an external HDMI streaming device like an <strong>Amazon Fire Stick</strong> or <strong>Apple TV 4K</strong>, connect it to your TV, and download the app through that device's store.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== PROMINENT 1-ON-1 FACEBOOK CALLOUT ===================== */}
        <div className="bg-gradient-to-r from-blue-950/80 via-neutral-900 to-blue-950/80 border-2 border-blue-500/40 rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/40 text-blue-300 text-xs font-bold">
              <Facebook className="w-3.5 h-3.5" />
              <span>Tailored 1-to-1 Device Consultation</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
              Tell Us Your Exact TV or Laptop Brand on Facebook
            </h3>

            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-medium">
              If you can tell us on facebook the exact brand and model of your TV and laptop, We can give you step-by-step instructions tailored precisely to your operating system.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={OFFICIAL_FACEBOOK_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white font-extrabold rounded-xl text-sm flex items-center justify-center space-x-2 transition shadow-lg"
              >
                <Facebook className="w-4 h-4 fill-white" />
                <span>Message Our Facebook Support Team</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("tiger-ott-subscription");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else if (onOpenStore) onOpenStore();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-extrabold rounded-xl text-sm transition cursor-pointer"
              >
                <span>View IPTV Subscription Plans</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPTVSmartersDownloadGuide;
