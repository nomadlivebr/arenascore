"use client";

import React from "react";
import {
  ShieldCheck,
  SquaresFour,
  Broadcast,
  GameController,
  Monitor,
} from "@phosphor-icons/react";

interface ArenaSummaryProps {
  totalCourts?: number;
  onlineCourts?: number;
  offlineCourts?: number;
  connectedDevices?: number;
  activeMatches?: number;
}

export function ArenaSummary({
  totalCourts = 4,
  onlineCourts = 3,
  offlineCourts = 1,
  connectedDevices = 6,
  activeMatches = 3,
}: ArenaSummaryProps) {
  const occupancyRate = Math.round((onlineCourts / totalCourts) * 100);

  return (
    <div className="bg-card border border-card rounded-2xl p-5 card-glow flex flex-col justify-between">
      {/* Cabeçalho de Status */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} weight="fill" className="text-emerald-400" />
            <h3 className="font-semibold text-base text-white">Telemetria da Arena</h3>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            98% Estável
          </span>
        </div>

        {/* Mini Grid 2x2 de Indicadores Rápidos */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="bg-dark-800/80 border border-white/5 rounded-xl p-3">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-xs">Quadras</span>
              <SquaresFour size={16} className="text-brand-lightBlue" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-white tracking-tight">{onlineCourts}</span>
              <span className="text-xs text-gray-500 font-medium">/ {totalCourts} ativas</span>
            </div>
          </div>

          <div className="bg-dark-800/80 border border-white/5 rounded-xl p-3">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-xs">Ao Vivo</span>
              <Broadcast size={16} className="text-rose-400" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-white tracking-tight">{activeMatches}</span>
              <span className="text-xs text-rose-400 font-medium">jogos</span>
            </div>
          </div>

          <div className="bg-dark-800/80 border border-white/5 rounded-xl p-3">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-xs">Telas (TVs)</span>
              <Monitor size={16} className="text-cyan-400" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-white tracking-tight">3</span>
              <span className="text-xs text-emerald-400 font-medium">sincronizadas</span>
            </div>
          </div>

          <div className="bg-dark-800/80 border border-white/5 rounded-xl p-3">
            <div className="flex items-center justify-between text-gray-400 mb-1">
              <span className="text-xs">Controles</span>
              <GameController size={16} className="text-amber-400" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-white tracking-tight">3</span>
              <span className="text-xs text-gray-500 font-medium">/ 4 online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Ocupação da Arena */}
      <div className="pt-3 border-t border-white/5">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>Ocupação das quadras</span>
          <span className="font-semibold text-white">{occupancyRate}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-dark-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-blue to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${occupancyRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}
