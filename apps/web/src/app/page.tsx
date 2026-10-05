"use client";

import React from "react";
import {
  Sidebar,
  Header,
  ArenaBanner,
  ArenaSummary,
  QuickActions,
  RecentEvents,
  CourtCard,
  Footer,
  MOCK_COURTS,
} from "@/components/dashboard";
import { SquaresFour } from "@phosphor-icons/react";

export default function DashboardPage() {

  return (
    <div className="flex h-screen overflow-hidden antialiased text-gray-200 bg-dark-900">
      {/* Sidebar Fixa à Esquerda */}
      <Sidebar />

      {/* Área Principal de Conteúdo */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header Superior */}
        <Header adminName="Administrador" notificationsCount={3} />

        {/* Área Rolável de Conteúdo */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="space-y-3">
            {/* Banner de Boas-Vindas do Administrador */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-850 card-glow">
              {/* Imagem de fundo com overlay */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src="/Quadra Esportiva Urbana ao Entardecer.png"
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900/85 via-dark-900/40 to-dark-900/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 px-7 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-brand-lightBlue uppercase tracking-widest mb-2">
                    BEM-VINDO
                  </p>
                  <h2 className="text-3xl font-bold text-white tracking-tight">
                    Olá, <span className="text-brand-lightBlue">Administrador!</span>{" "}
                    <span>👋</span>
                  </h2>
                  <p className="text-sm text-gray-400 mt-1.5 max-w-md">
                    Aqui está o resumo em tempo real das suas arenas e quadras.
                    Todos os sistemas operando normalmente.
                  </p>
                </div>

                {/* Indicadores rápidos no banner */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-center px-4 py-3 rounded-xl bg-dark-900/70 border border-white/10 backdrop-blur">
                    <p className="text-2xl font-black text-white">3</p>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">Ao Vivo</p>
                  </div>
                  <div className="text-center px-4 py-3 rounded-xl bg-dark-900/70 border border-white/10 backdrop-blur">
                    <p className="text-2xl font-black text-emerald-400">3/4</p>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">Quadras</p>
                  </div>
                  <div className="text-center px-4 py-3 rounded-xl bg-dark-900/70 border border-white/10 backdrop-blur">
                    <p className="text-2xl font-black text-cyan-400">6</p>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">Dispositivos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout 2 colunas: Esquerda (banner + quadras) | Direita (summary + ações) */}
            <div className="flex flex-col lg:flex-row gap-4 items-start">

              {/* Coluna Esquerda: Banner da Arena + Quadras juntos */}
              <div className="flex-1 min-w-0 flex flex-col gap-3">
                <ArenaBanner
                  arenaName="Arena Central"
                  summaryText="4 quadras configuradas • 3 partidas ao vivo • Transmissão ativa nas TVs"
                />

                {/* Título + Grid de Quadras */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/30 text-brand-lightBlue flex items-center justify-center">
                      <SquaresFour size={20} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Quadras da Arena</h3>
                      <p className="text-xs text-gray-400">Monitoramento e controle em tempo real</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {MOCK_COURTS.map((court) => (
                      <CourtCard key={court.id} court={court} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Telemetria + Ações + Eventos */}
              <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
                <ArenaSummary
                  totalCourts={4}
                  onlineCourts={3}
                  offlineCourts={1}
                  connectedDevices={6}
                  activeMatches={3}
                />
                <QuickActions defaultCourtId="quadra-01" />
                <RecentEvents />
              </div>
            </div>
          </div>

          {/* Rodapé */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
