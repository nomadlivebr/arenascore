"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Volleyball, SoccerBall, TennisBall, Sparkle } from "@phosphor-icons/react";

interface ArenaBannerProps {
  arenaName?: string;
  summaryText?: string;
  onSelectSport?: (sport: string) => void;
  selectedSport?: string;
}

export function ArenaBanner({
  arenaName = "Arena Central",
  summaryText = "4 quadras configuradas • 3 partidas ao vivo • Transmissão ativa nas TVs",
  onSelectSport,
  selectedSport = "all",
}: ArenaBannerProps) {
  const sports = [
    { id: "volleyball", name: "Vôlei", count: "2 partidas", icon: Volleyball, accent: "text-amber-400" },
    { id: "football", name: "Futebol", count: "1 partida", icon: SoccerBall, accent: "text-brand-lightBlue" },
    { id: "tennis", name: "Tênis", count: "1 partida", icon: TennisBall, accent: "text-emerald-400" },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-card card-glow">
      {/* Background com iluminação esportiva e imagem local de Padel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/Ação Noturna no Padel em Azul.png"
          alt="Ação Noturna no Padel"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 75vw"
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/55 to-dark-950/40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-lightBlue flex items-center justify-center shrink-0">
              <MapPin size={26} weight="duotone" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{arenaName}</h3>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Operando
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-1">{summaryText}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto bg-dark-900/80 border border-white/5 px-3 py-1.5 rounded-xl backdrop-blur">
            <Sparkle size={16} className="text-brand-lightBlue" />
            <span className="text-xs font-medium text-gray-300">Tempo Real • WebSocket Conectado</span>
          </div>
        </div>

        {/* Resumo e Filtro de Modalidades */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/5">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
            Modalidades:
          </span>
          {sports.map((sport) => {
            const Icon = sport.icon;
            const isSelected = selectedSport === sport.id;
            return (
              <button
                key={sport.id}
                type="button"
                onClick={() => onSelectSport?.(isSelected ? "all" : sport.id)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? "bg-brand-blue/20 border-brand-blue text-white shadow-sm"
                    : "bg-dark-800/80 hover:bg-dark-750 border-white/5 hover:border-white/10 text-gray-300"
                }`}
              >
                <div className={`p-1 rounded-lg bg-dark-900/60 ${sport.accent}`}>
                  <Icon size={18} weight="duotone" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">{sport.name}</span>
                  <span className="text-[11px] text-gray-400">{sport.count}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
