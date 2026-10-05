"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  House,
  MapPinLine,
  SquaresFour,
  Monitor,
  GameController,
  Trophy,
  Users,
  Gear,
} from "@phosphor-icons/react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function Sidebar() {
  const pathname = usePathname();

  const mainNavItems: NavItem[] = [
    { label: "Dashboard", href: "/", icon: <House size={20} /> },
    { label: "Arenas", href: "/admin/arenas", icon: <MapPinLine size={20} /> },
    { label: "Quadras", href: "/admin/quadras", icon: <SquaresFour size={20} /> },
    { label: "Telas (TVs)", href: "/admin/telas", icon: <Monitor size={20} /> },
    { label: "Controles", href: "/admin/controles", icon: <GameController size={20} /> },
    { label: "Partidas", href: "/admin/partidas", icon: <Trophy size={20} /> },
  ];

  const secondaryNavItems: NavItem[] = [
    { label: "Usuários", href: "/admin/usuarios", icon: <Users size={20} /> },
    { label: "Configurações", href: "/admin/configuracoes", icon: <Gear size={20} /> },
  ];

  const isItemActive = (href: string) => {
    if (href === "/" && (pathname === "/" || pathname === "/admin")) return true;
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-card border-r border-card hidden md:flex flex-col justify-between z-20 shrink-0 select-none">
      {/* Logo e Menu Principal */}
      <div>
        <div className="p-5 pb-3">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90 group">
            <Image
              src="/favicon_arenascore.png"
              alt="ArenaScore"
              width={54}
              height={54}
              priority
              className="h-12 w-auto object-contain shrink-0 drop-shadow-[0_2px_10px_rgba(0,144,255,0.3)]"
            />
            <div className="flex flex-col min-w-0 justify-center">
              <span className="text-[22px] font-extrabold tracking-tight text-white leading-none">
                Arena<span className="text-[#0090FF]">Score</span>
              </span>
              <span className="text-[9px] font-bold tracking-wider text-gray-400 uppercase mt-1 leading-tight whitespace-nowrap">
                Gestão e Placares Esportivos
              </span>
            </div>
          </Link>
        </div>

        <nav className="px-3 mt-2 space-y-1">
          {mainNavItems.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  active
                    ? "bg-brand-blue/15 text-white border border-brand-blue/30 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-dark-800/80 border border-transparent"
                }`}
              >
                <span className={active ? "text-brand-lightBlue" : "text-gray-400"}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-lightBlue ml-auto shadow-sm shadow-brand-lightBlue" />
                )}
              </Link>
            );
          })}

          <div className="pt-4 space-y-1">
            <span className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-2">
              Gestão
            </span>
            {secondaryNavItems.map((item) => {
              const active = isItemActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    active
                      ? "bg-brand-blue/15 text-white border border-brand-blue/30 shadow-sm"
                      : "text-gray-400 hover:text-white hover:bg-dark-800/80 border border-transparent"
                  }`}
                >
                  <span className={active ? "text-brand-lightBlue" : "text-gray-400"}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Status do Sistema */}
      <div className="p-4">
        <div className="bg-dark-900 border border-card rounded-xl p-4 flex items-center gap-3 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-status-success animate-pulse shrink-0" />
          <div>
            <p className="text-sm font-medium text-status-success">
              Sistema Online
            </p>
            <p className="text-xs text-gray-500">Todos os dispositivos conectados</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 px-2">v1.0.0</p>
      </div>
    </aside>
  );
}
