import React from "react";

interface EmojiDrawerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

const EMOJIS = ["👍", "❤️", "🔥", "💯", "😂"];

export const EmojiDrawer: React.FC<EmojiDrawerProps> = ({ onSelect, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-label="Close emoji drawer overlay"
      />
      {/* Drawer */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex flex-col items-center animate-slideup">
        <div
          className="relative flex flex-wrap justify-center items-center gap-4 bg-white rounded-t-2xl shadow-lg py-6 px-3 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
          style={{ minWidth: 0 }}
        >
          {EMOJIS.map((emoji) => (
            <button
              key={emoji}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#e2e3e9] flex items-center justify-center text-3xl focus:outline-none transition hover:scale-110"
              onClick={() => onSelect(emoji)}
              aria-label={`Add emoji ${emoji}`}
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
            >
              {emoji}
            </button>
          ))}
          {/* Close (X) button */}
          <button
            className="absolute top-2 right-2 text-2xl text-[#6c6c80] hover:text-black focus:outline-none"
            onClick={onClose}
            aria-label="Close emoji drawer"
            style={{ right: -48 }}
          >
            ×
          </button>
        </div>
        {/* Drawer handle */}
        <div className="w-16 h-1 bg-gray-300 rounded-full mt-2 mb-4 mx-auto" />
      </div>
      <style>{`
        @keyframes slideup {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slideup {
          animation: slideup 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};
