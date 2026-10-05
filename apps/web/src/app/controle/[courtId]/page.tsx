"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  SlidersHorizontal,
  ArrowCounterClockwise,
  ArrowsClockwise,
  Plus,
  Minus,
  Monitor,
} from "@phosphor-icons/react";

export default function ControleCourtPage() {
  const params = useParams();
  const courtId = (params?.courtId as string) || "quadra-01";

  const [scoreA, setScoreA] = useState(18);
  const [scoreB, setScoreB] = useState(16);
  const [setsA, setSetsA] = useState(1);
  const [setsB, setSetsB] = useState(0);

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col antialiased">
      {/* Top Header */}
      <header className="h-16 border-b border-card bg-card px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={18} /> Voltar ao Dashboard
          </Link>
          <div className="h-4 w-px bg-dark-700" />
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={20} className="text-brand-blue" />
            <h1 className="font-bold text-lg capitalize">{courtId.replace("-", " ")}</h1>
            <span className="text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full border border-status-success/20 ml-2">
              Online
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/tv/${courtId}`}
            target="_blank"
            className="flex items-center gap-2 text-xs bg-dark-700 hover:bg-dark-600 px-3 py-1.5 rounded-lg transition-colors text-gray-200"
          >
            <Monitor size={16} /> Abrir Tela da TV
          </Link>
        </div>
      </header>

      {/* Main Control Panel */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 max-w-4xl mx-auto w-full">
        {/* Banner de status da partida */}
        <div className="bg-card border border-card rounded-2xl p-4 w-full mb-6 flex items-center justify-between text-sm">
          <span className="text-gray-400">Modalidade: <strong className="text-white">Vôlei</strong></span>
          <span className="text-gray-400">Período: <strong className="text-white">SET 2</strong></span>
          <span className="text-gray-400">Duração: <strong className="text-white font-mono">22:34</strong></span>
        </div>

        {/* Placar e Botões */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          {/* TIME A */}
          <div className="bg-card border border-card rounded-3xl p-6 flex flex-col items-center shadow-lg">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
              Time A
            </span>
            <h2 className="text-2xl font-bold mb-3 text-white">Brasil</h2>

            <div className="text-7xl font-extrabold tracking-tighter my-4 text-brand-lightBlue">
              {scoreA}
            </div>

            <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
              <span>Sets:</span>
              <strong className="text-white">{setsA}</strong>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full">
              <button
                onClick={() => setScoreA((s) => s + 1)}
                className="bg-brand-blue hover:bg-brand-lightBlue active:scale-95 transition-all text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-md"
              >
                <Plus size={20} weight="bold" /> PONTO
              </button>
              <button
                onClick={() => setScoreA((s) => Math.max(0, s - 1))}
                className="bg-dark-700 hover:bg-dark-600 active:scale-95 transition-all text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
              >
                <Minus size={20} weight="bold" /> PONTO
              </button>
            </div>
          </div>

          {/* TIME B */}
          <div className="bg-card border border-card rounded-3xl p-6 flex flex-col items-center shadow-lg">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">
              Time B
            </span>
            <h2 className="text-2xl font-bold mb-3 text-white">Chile</h2>

            <div className="text-7xl font-extrabold tracking-tighter my-4 text-red-400">
              {scoreB}
            </div>

            <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
              <span>Sets:</span>
              <strong className="text-white">{setsB}</strong>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full">
              <button
                onClick={() => setScoreB((s) => s + 1)}
                className="bg-brand-blue hover:bg-brand-lightBlue active:scale-95 transition-all text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-md"
              >
                <Plus size={20} weight="bold" /> PONTO
              </button>
              <button
                onClick={() => setScoreB((s) => Math.max(0, s - 1))}
                className="bg-dark-700 hover:bg-dark-600 active:scale-95 transition-all text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
              >
                <Minus size={20} weight="bold" /> PONTO
              </button>
            </div>
          </div>
        </div>

        {/* Ações Globais de Controle */}
        <div className="flex flex-wrap gap-4 justify-center w-full">
          <button
            onClick={() => {
              // Simula ação de desfazer
            }}
            className="flex items-center gap-2 bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
          >
            <ArrowCounterClockwise size={18} /> DESFAZER (UNDO)
          </button>

          <button
            onClick={() => {
              setScoreA(0);
              setScoreB(0);
            }}
            className="flex items-center gap-2 bg-red-950/60 border border-red-800/50 hover:bg-red-900/60 text-red-300 px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
          >
            <ArrowsClockwise size={18} /> RESETAR PLACAR
          </button>
        </div>
      </main>
    </div>
  );
}
