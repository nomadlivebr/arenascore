"use client";

import Image from "next/image";
import { WifiHigh, Heart } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="mt-8 py-5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="ArenaScore"
          width={90}
          height={30}
          className="h-5 w-auto object-contain opacity-80"
        />
        <span className="text-gray-400">• Tecnologia que conecta esporte e pessoas.</span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex items-center gap-1.5 text-status-success">
          <WifiHigh size={16} /> Conectado à rede
        </div>
        <div className="flex items-center gap-1">
          <Heart size={14} className="text-gray-600" /> Feito para quadras, clubes e arenas.
        </div>
      </div>
    </footer>
  );
}
