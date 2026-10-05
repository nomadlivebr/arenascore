"use client";

import React from "react";
import Link from "next/link";
import {
  Volleyball,
  SoccerBall,
  TennisBall,
  Monitor,
  SlidersHorizontal,
  Gear,
  ArrowRight,
  Plugs,
  ShieldCheck,
  Broadcast,
} from "@phosphor-icons/react";
import { CourtData } from "./types";

interface CourtCardProps {
  court: CourtData;
}

export function CourtCard({ court }: CourtCardProps) {
  const isOnline = court.status === "online";
  const hasMatch = isOnline && !!court.match;

  const getSportBadge = (sport: CourtData["sport"]) => {
    switch (sport) {
      case "volleyball":
        return {
          icon: <Volleyball size={16} weight="duotone" className="text-amber-400" />,
          bg: "bg-amber-400/10 border-amber-400/20 text-amber-300",
        };
      case "football":
        return {
          icon: <SoccerBall size={16} weight="duotone" className="text-brand-lightBlue" />,
          bg: "bg-brand-blue/10 border-brand-blue/20 text-brand-lightBlue",
        };
      case "tennis":
        return {
          icon: <TennisBall size={16} weight="duotone" className="text-emerald-400" />,
          bg: "bg-emerald-400/10 border-emerald-400/20 text-emerald-300",
        };
      default:
        return {
          icon: <Volleyball size={16} weight="duotone" className="text-gray-400" />,
          bg: "bg-gray-800 border-gray-700 text-gray-300",
        };
    }
  };

  const sportBadge = getSportBadge(court.sport);

  const renderTeamBadge = (teamName: string, sport: CourtData["sport"], isTeamA: boolean) => {
    if (teamName.toLowerCase().includes("brasil")) {
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-yellow-500 p-0.5 shadow-md flex items-center justify-center font-bold text-xs text-white uppercase tracking-wider">
          <span className="bg-dark-900 w-full h-full rounded-full flex items-center justify-center text-yellow-400 font-extrabold text-xs">
            BRA
          </span>
        </div>
      );
    }
    if (teamName.toLowerCase().includes("chile")) {
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-blue-600 p-0.5 shadow-md flex items-center justify-center font-bold text-xs text-white uppercase tracking-wider">
          <span className="bg-dark-900 w-full h-full rounded-full flex items-center justify-center text-red-400 font-extrabold text-xs">
            CHI
          </span>
        </div>
      );
    }
    if (sport === "football") {
      return (
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-md ${
            isTeamA
              ? "bg-gradient-to-br from-blue-600 to-brand-darkBlue text-white border border-blue-400/30"
              : "bg-gradient-to-br from-rose-600 to-rose-900 text-white border border-rose-400/30"
          }`}
        >
          {isTeamA ? "A" : "B"}
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center font-bold text-sm text-gray-200">
        {teamName.charAt(0)}
      </div>
    );
  };

  return (
    <div
      className={`bg-card border border-white/10 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 card-glow card-glow-hover ${
        !isOnline ? "opacity-75" : ""
      }`}
    >
      {/* Topo do Card */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold ${sportBadge.bg}`}
            >
              {sportBadge.icon}
              {court.sportLabel}
            </span>
            <h4 className="font-bold text-lg text-white tracking-tight">{court.name}</h4>
          </div>

          {/* Status Badge */}
          {hasMatch ? (
            <span className="flex items-center gap-1.5 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              AO VIVO
            </span>
          ) : isOnline ? (
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Disponível
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-dark-800 px-2.5 py-1 rounded-full border border-white/5">
              <span className="w-2 h-2 rounded-full bg-gray-500" /> Offline
            </span>
          )}
        </div>

        {/* Telemetria de Dispositivos (TV & Controle) */}
        <div className="flex items-center justify-between text-xs text-gray-400 bg-dark-900/60 rounded-xl px-3 py-2 mb-5 border border-white/5">
          <div className="flex items-center gap-1.5">
            <Monitor
              size={15}
              className={court.tv.status === "online" ? "text-cyan-400" : "text-gray-500"}
            />
            <span className="text-gray-300 font-medium">{court.tv.name}</span>
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                court.tv.status === "online" ? "bg-cyan-400" : "bg-gray-600"
              }`}
            />
          </div>

          {court.controller ? (
            <div className="flex items-center gap-1.5">
              <span className="text-gray-500">Controle:</span>
              <span className="text-gray-300 font-medium">{court.controller.name}</span>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  court.controller.status === "online" ? "bg-emerald-400" : "bg-rose-500"
                }`}
              />
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-gray-500">
              <span>Sem controle</span>
            </div>
          )}
        </div>

        {/* Placar Central Ao Vivo */}
        {hasMatch && court.match ? (
          <div className="py-2 mb-6">
            <div className="flex items-center justify-between">
              {/* Time A */}
              <div className="flex flex-col items-center w-5/12 text-center">
                {renderTeamBadge(court.match.teamA.name, court.sport, true)}
                <span className="text-sm font-semibold text-white mt-2 truncate max-w-full">
                  {court.match.teamA.name}
                </span>
                <span className="text-5xl font-black font-mono tracking-tight text-white mt-1">
                  {court.match.teamA.score}
                </span>

                {typeof court.match.teamA.setsWon === "number" && (
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[10px] uppercase font-bold text-gray-500 mr-1">
                      Sets
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                      {court.match.teamA.setsWon}
                    </span>
                  </div>
                )}
              </div>

              {/* Centro: Cronômetro e Período */}
              <div className="flex flex-col items-center justify-center w-2/12">
                <div className="bg-dark-900 border border-white/10 rounded-xl px-2.5 py-2 flex flex-col items-center shadow-inner">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-lightBlue whitespace-nowrap">
                    {court.match.period}
                  </span>
                  <span className="text-xs font-mono font-bold text-white mt-0.5">
                    {court.match.time}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-gray-600 mt-2">VS</span>
              </div>

              {/* Time B */}
              <div className="flex flex-col items-center w-5/12 text-center">
                {renderTeamBadge(court.match.teamB.name, court.sport, false)}
                <span className="text-sm font-semibold text-white mt-2 truncate max-w-full">
                  {court.match.teamB.name}
                </span>
                <span className="text-5xl font-black font-mono tracking-tight text-white mt-1">
                  {court.match.teamB.score}
                </span>

                {typeof court.match.teamB.setsWon === "number" && (
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[10px] uppercase font-bold text-gray-500 mr-1">
                      Sets
                    </span>
                    <span className="text-xs font-bold text-gray-400 bg-dark-800 border border-white/5 px-1.5 py-0.2 rounded">
                      {court.match.teamB.setsWon}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Estado Offline ou Sem Jogo */
          <div className="flex flex-col items-center justify-center py-9 mb-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-dark-800/80 border border-white/5 flex items-center justify-center mb-3">
              <Plugs size={28} className="text-gray-500" />
            </div>
            <p className="text-white font-semibold text-sm">Dispositivo aguardando sincronização</p>
            <p className="text-xs text-gray-400 mt-1 max-w-xs">
              Ligue o controle ou conecte a Smart TV da quadra para iniciar o placar.
            </p>
          </div>
        )}
      </div>

      {/* Barra de Ações Rápidas da Quadra */}
      <div className="grid grid-cols-12 gap-2 pt-2 border-t border-white/5">
        {isOnline ? (
          <>
            <Link
              href={`/controle/${court.id}`}
              className="col-span-6 bg-brand-blue hover:bg-brand-lightBlue text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-brand-blue/20"
            >
              <SlidersHorizontal size={16} weight="bold" />
              Controlar
            </Link>
            <Link
              href={`/tv/${court.id}`}
              className="col-span-4 bg-dark-800 hover:bg-dark-750 border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-white py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <Monitor size={16} className="text-cyan-400" />
              Placar TV
            </Link>
            <button
              type="button"
              title="Configurações da Quadra"
              className="col-span-2 bg-dark-800 hover:bg-dark-750 border border-white/10 text-gray-400 hover:text-white py-2.5 rounded-xl flex items-center justify-center transition-colors"
            >
              <Gear size={16} />
            </button>
          </>
        ) : (
          <>
            <button
              disabled
              className="col-span-6 bg-dark-800 text-gray-500 cursor-not-allowed py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 border border-white/5"
            >
              <SlidersHorizontal size={16} />
              Controlar
            </button>
            <button
              disabled
              className="col-span-4 bg-dark-800 text-gray-500 cursor-not-allowed py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-1.5 border border-white/5"
            >
              <Monitor size={16} />
              Placar TV
            </button>
            <button
              disabled
              className="col-span-2 bg-dark-800 text-gray-600 cursor-not-allowed py-2.5 rounded-xl flex items-center justify-center border border-white/5"
            >
              <Gear size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
