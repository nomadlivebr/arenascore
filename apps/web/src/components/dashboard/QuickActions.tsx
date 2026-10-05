"use client";

import React from "react";
import Link from "next/link";
import {
  Lightning,
  Monitor,
  GameController,
  Gear,
  Plus,
  ArrowUpRight,
} from "@phosphor-icons/react";

interface QuickActionsProps {
  defaultCourtId?: string;
}

export function QuickActions({ defaultCourtId = "quadra-01" }: QuickActionsProps) {
  return (
    <div className="bg-card border border-card rounded-2xl p-5 card-glow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Lightning size={20} weight="fill" className="text-brand-blue" />
          <h3 className="font-semibold text-base text-white">Ações Rápidas</h3>
        </div>
        <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Atalhos</span>
      </div>

      <div className="space-y-2.5">
        {/* Nova Partida - Ação Primária em Destaque */}
        <button
          type="button"
          className="w-full group relative overflow-hidden bg-gradient-to-r from-brand-blue/20 via-brand-blue/10 to-transparent hover:from-brand-blue/30 hover:via-brand-blue/20 border border-brand-blue/40 hover:border-brand-blue rounded-xl p-3 flex items-center justify-between transition-all duration-200 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20 shrink-0 group-hover:scale-105 transition-transform">
              <Plus size={20} weight="bold" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white flex items-center gap-1.5">
                Nova Partida
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-blue/30 text-brand-lightBlue border border-brand-blue/40">
                  Novo
                </span>
              </p>
              <p className="text-xs text-gray-400">Iniciar jogo imediatamente</p>
            </div>
          </div>
          <ArrowUpRight size={18} className="text-brand-lightBlue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Abrir Tela da TV */}
        <Link
          href={`/tv/${defaultCourtId}`}
          className="w-full group bg-dark-800/80 hover:bg-dark-750 border border-white/5 hover:border-cyan-500/40 rounded-xl p-3 flex items-center justify-between transition-all duration-200 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Monitor size={20} weight="duotone" />
            </div>
            <div>
              <p className="font-medium text-sm text-white group-hover:text-cyan-300 transition-colors">
                Tela do Placar (TV)
              </p>
              <p className="text-xs text-gray-400">Exibir transmissão em tela cheia</p>
            </div>
          </div>
          <ArrowUpRight size={18} className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </Link>

        {/* Controle da Quadra */}
        <Link
          href={`/controle/${defaultCourtId}`}
          className="w-full group bg-dark-800/80 hover:bg-dark-750 border border-white/5 hover:border-emerald-500/40 rounded-xl p-3 flex items-center justify-between transition-all duration-200 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <GameController size={20} weight="duotone" />
            </div>
            <div>
              <p className="font-medium text-sm text-white group-hover:text-emerald-300 transition-colors">
                Controle de Mesa
              </p>
              <p className="text-xs text-gray-400">Operar pontuação e sets</p>
            </div>
          </div>
          <ArrowUpRight size={18} className="text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </Link>

        {/* Configurar Arena */}
        <button
          type="button"
          className="w-full group bg-dark-800/80 hover:bg-dark-750 border border-white/5 hover:border-purple-500/40 rounded-xl p-3 flex items-center justify-between transition-all duration-200 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Gear size={20} weight="duotone" />
            </div>
            <div>
              <p className="font-medium text-sm text-white group-hover:text-purple-300 transition-colors">
                Configurações da Arena
              </p>
              <p className="text-xs text-gray-400">Regras, esportes e dispositivos</p>
            </div>
          </div>
          <ArrowUpRight size={18} className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>
      </div>
    </div>
  );
}

