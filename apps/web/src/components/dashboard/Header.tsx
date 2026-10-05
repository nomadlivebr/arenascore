"use client";

import React from "react";
import {
  List,
  Bell,
  CaretDown,
  MagnifyingGlass,
  MapPin,
  Circle,
} from "@phosphor-icons/react";

interface HeaderProps {
  onToggleMobileMenu?: () => void;
  adminName?: string;
  notificationsCount?: number;
}

export function Header({
  onToggleMobileMenu,
  adminName = "Administrador",
  notificationsCount = 3,
}: HeaderProps) {
  return (
    <header className="h-16 border-b border-white/10 bg-dark-900/90 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
      {/* Mobile Menu Button + Seletor de Arena */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMobileMenu}
          className="md:hidden text-gray-400 hover:text-white p-2 rounded-lg"
          aria-label="Abrir Menu"
        >
          <List size={22} />
        </button>

        {/* Seletor de Arena */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-800/80 border border-white/10 hover:border-brand-blue/40 cursor-pointer transition-colors">
          <MapPin size={16} weight="duotone" className="text-brand-lightBlue" />
          <span className="text-sm font-semibold text-white">Arena Central</span>
          <span className="text-xs text-gray-500 font-normal">São Paulo</span>
          <CaretDown size={12} className="text-gray-400 ml-1" />
        </div>
      </div>

      {/* Barra de Pesquisa Rápida / Status */}
      <div className="hidden lg:flex items-center max-w-xs w-full mx-6">
        <div className="relative w-full">
          <MagnifyingGlass
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Buscar quadras ou partidas..."
            className="w-full bg-dark-800/60 border border-white/5 rounded-xl pl-9 pr-4 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-4">
        {/* Status de Sincronização */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-800 border border-white/5 text-xs text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Sincronizado</span>
        </div>

        {/* Notificações */}
        <button
          className="relative text-gray-400 hover:text-white transition-colors p-2 rounded-xl hover:bg-dark-800"
          aria-label="Notificações"
        >
          <Bell size={20} />
          {notificationsCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-dark-900" />
          )}
        </button>

        <div className="w-px h-6 bg-white/10" />

        {/* Perfil */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-dark-800/80 p-1.5 pr-2.5 rounded-xl transition-colors">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-cyan-500 flex items-center justify-center text-xs font-extrabold text-white shadow-sm">
            AD
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-semibold text-white leading-tight">{adminName}</span>
            <span className="text-[10px] text-gray-400 leading-tight">Gerente Geral</span>
          </div>
          <CaretDown size={12} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
