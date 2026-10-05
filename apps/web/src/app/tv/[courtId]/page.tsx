"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Volleyball, WifiHigh } from "@phosphor-icons/react";

export default function TvCourtPage() {
  const params = useParams();
  const courtId = (params?.courtId as string) || "quadra-01";

  return (
    <div className="h-screen w-screen bg-[#070b14] text-white flex flex-col justify-between p-8 md:p-12 overflow-hidden select-none">
      {/* Barra de Topo da TV */}
      <header className="flex items-center justify-between border-b border-gray-800/80 pb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-dark-800 border border-gray-700 rounded-2xl text-brand-lightBlue">
            <Volleyball size={36} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold uppercase tracking-wide">
              {courtId.replace("-", " ")}
            </h1>
            <p className="text-gray-400 text-sm">Vôlei • Arena Central</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="bg-dark-800 border border-gray-700 px-6 py-2 rounded-2xl flex items-center gap-4">
            <span className="text-gray-400 font-semibold text-lg">SET 2</span>
            <div className="h-4 w-px bg-gray-600" />
            <span className="font-mono text-xl text-yellow-400 font-bold">22:34</span>
          </div>

          <div className="flex items-center gap-2 text-status-success text-sm bg-status-success/10 px-3 py-1.5 rounded-full border border-status-success/20">
            <WifiHigh size={18} />
            <span>AO VIVO</span>
          </div>
        </div>
      </header>

      {/* Placar Central Gigante */}
      <main className="flex-1 flex items-center justify-center py-6">
        <div className="grid grid-cols-11 items-center w-full max-w-7xl">
          {/* Time A */}
          <div className="col-span-5 flex flex-col items-center justify-center p-8 bg-dark-800/80 border border-gray-800 rounded-3xl shadow-2xl">
            <span className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-gray-300 mb-2">
              Brasil
            </span>
            <div className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-white my-2">
              18
            </div>
            <div className="flex items-center gap-3 mt-4 text-lg text-gray-400">
              <span className="text-xs uppercase tracking-widest text-gray-500">SETS VENCIDOS</span>
              <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-status-success shadow-lg shadow-status-success/50" />
                <div className="w-4 h-4 rounded-full bg-status-success shadow-lg shadow-status-success/50" />
                <div className="w-4 h-4 rounded-full bg-status-success shadow-lg shadow-status-success/50" />
              </div>
              <strong className="text-2xl text-white ml-2">1</strong>
            </div>
          </div>

          {/* Divisor VS */}
          <div className="col-span-1 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-gray-600">VS</span>
          </div>

          {/* Time B */}
          <div className="col-span-5 flex flex-col items-center justify-center p-8 bg-dark-800/80 border border-gray-800 rounded-3xl shadow-2xl">
            <span className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-gray-300 mb-2">
              Chile
            </span>
            <div className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-white my-2">
              16
            </div>
            <div className="flex items-center gap-3 mt-4 text-lg text-gray-400">
              <span className="text-xs uppercase tracking-widest text-gray-500">SETS VENCIDOS</span>
              <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-gray-700" />
                <div className="w-4 h-4 rounded-full bg-gray-700" />
                <div className="w-4 h-4 rounded-full bg-gray-700" />
              </div>
              <strong className="text-2xl text-gray-500 ml-2">0</strong>
            </div>
          </div>
        </div>
      </main>

      {/* Footer da TV */}
      <footer className="flex items-center justify-between border-t border-gray-800/80 pt-6 text-gray-500 text-sm">
        <span className="font-semibold text-gray-400">ArenaScore • Transmissão em Tempo Real</span>
        <span>Sincronizado via WebSocket</span>
      </footer>
    </div>
  );
}
