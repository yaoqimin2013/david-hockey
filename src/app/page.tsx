"use client";

import { useState } from "react";

const highlights = [
  {
    id: 1,
    game: "10U AA Scrimmage",
    src: "https://qazwggeughquiqhxbxho.supabase.co/storage/v1/object/public/highlights/10U%20AA%20Scrimmage.mp4",
    type: "video",
  },
  {
    id: 2,
    game: "First Scrimmage 2026",
    src: "https://qazwggeughquiqhxbxho.supabase.co/storage/v1/object/public/highlights/David_First_Scrimmage_2026.mp4",
    type: "video",
  },
];

export default function Home() {
  const [featured, setFeatured] = useState(highlights[0]);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">

      {/* Navbar */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-[#38bdf8] font-bold text-xl tracking-tight">
            🏒 David Hockey
          </span>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/gallery" className="hover:text-white transition-colors">Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-block bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-sm px-4 py-1.5 rounded-full mb-6">
          East Cobb Ice Hawks · #7
        </div>
        <h1 className="text-7xl font-bold mb-4 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          David Yao
        </h1>
        <p className="text-white/40 text-lg max-w-sm mx-auto">
          A hockey journey — one game at a time.
        </p>
      </section>

      {/* Featured Highlight */}
      <section className="max-w-5xl mx-auto px-6 pb-6">
        <h2 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
          Highlights
        </h2>

        {/* Big featured player */}
        <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video w-full">
          <video
            key={featured.src}
            src={featured.src}
            controls
            className="w-full h-full object-cover"
          />
          {/* Game name overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4 pointer-events-none">
            <span className="text-white font-semibold text-lg">{featured.game}</span>
          </div>
        </div>
      </section>

      {/* Thumbnail strip */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex gap-3">
          {highlights.map((h) => (
            <button
              key={h.id}
              onClick={() => setFeatured(h)}
              className={`relative flex-1 rounded-xl overflow-hidden aspect-video border-2 transition-all ${
                featured.id === h.id
                  ? "border-[#38bdf8]"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <video
                src={h.src}
                className="w-full h-full object-cover"
                muted
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white fill-white ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Game name */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white text-xs font-medium">{h.game}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-8 text-white/20 text-sm">
        David Hockey · Est. 2024
      </footer>

    </div>
  );
}
