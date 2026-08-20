import React from "react";
import { Tv, X, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CornerDownLeft, Undo2, Play, Volume2 } from "lucide-react";

interface TVRemoteHelpModalProps {
  onClose: () => void;
  isTVMode: boolean;
  onToggleTVMode: () => void;
}

export const TVRemoteHelpModal: React.FC<TVRemoteHelpModalProps> = ({
  onClose,
  isTVMode,
  onToggleTVMode,
}) => {
  return (
    <div
      id="tv-remote-help-modal"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 text-neutral-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 cursor-pointer transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2.5 bg-amber-500 rounded-xl shadow-xs text-white">
            <Tv className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 flex items-center space-x-2">
              <span>Tiger OTT Smart TV &amp; Remote Navigation</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Designed for 1080p, 4K, Android TV, Google TV, Apple TV, and Smart TV browsers
            </p>
          </div>
        </div>

        {/* Remote Guide Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6">
          <div className="flex items-center space-x-3 bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center space-x-1 bg-white px-2.5 py-1.5 rounded-lg border border-neutral-200 text-amber-600 shadow-2xs">
              <ArrowLeft className="w-4 h-4" />
              <ArrowRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Left / Right Arrows</div>
              <div className="text-xs text-neutral-600">Navigate cards within a row or seek ±10s in player</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center space-x-1 bg-white px-2.5 py-1.5 rounded-lg border border-neutral-200 text-amber-600 shadow-2xs">
              <ArrowUp className="w-4 h-4" />
              <ArrowDown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Up / Down Arrows</div>
              <div className="text-xs text-neutral-600">Move between categories, rows, and top navbar</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center space-x-1 bg-white px-2.5 py-1.5 rounded-lg border border-neutral-200 text-emerald-700 font-mono text-xs font-bold shadow-2xs">
              <span>OK / ENTER</span>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">OK / Center Button</div>
              <div className="text-xs text-neutral-600">Open movie details, play video, or select menu item</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-neutral-50 border border-neutral-200 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center space-x-1 bg-white px-2.5 py-1.5 rounded-lg border border-neutral-200 text-red-600 shadow-2xs">
              <Undo2 className="w-4 h-4" />
              <span className="font-mono text-xs font-bold">BACK</span>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Back / Return / ESC</div>
              <div className="text-xs text-neutral-600">Close modal, exit player, and return to exact card</div>
            </div>
          </div>
        </div>

        {/* Mode switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-neutral-700">TV Focus Enhanced Mode:</span>
            <button
              onClick={onToggleTVMode}
              className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer border ${
                isTVMode
                  ? "bg-amber-500 text-neutral-950 font-extrabold border-amber-500 shadow-sm"
                  : "bg-neutral-100 text-neutral-700 border-neutral-300 hover:bg-neutral-200"
              }`}
            >
              {isTVMode ? "🟢 TV Mode ON" : "⚪ Normal Mode"}
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl text-sm transition cursor-pointer shadow-xs"
          >
            Got It (Press OK)
          </button>
        </div>
      </div>
    </div>
  );
};
