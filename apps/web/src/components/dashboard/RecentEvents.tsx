"use client";

import React from "react";
import { ClockCounterClockwise, ArrowRight, Pulse } from "@phosphor-icons/react";
import { RecentEvent } from "./types";
import { MOCK_EVENTS } from "./mockData";

interface RecentEventsProps {
  events?: RecentEvent[];
}

export function RecentEvents({ events = MOCK_EVENTS }: RecentEventsProps) {
  const getBadgeStyle = (color: RecentEvent["statusColor"]) => {
    switch (color) {
      case "error":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      case "success":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "warning":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "yellow":
        return "bg-yellow-500/10 text-yellow-300 border-yellow-500/30";
      default:
        return "bg-gray-800 text-gray-300 border-gray-700";
    }
  };

  return (
    <div className="bg-card border border-white/10 rounded-2xl p-5 card-glow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Pulse size={20} className="text-brand-lightBlue" />
          <h3 className="font-semibold text-base text-white">Últimos Eventos</h3>
        </div>
        <button
          type="button"
          className="text-xs text-brand-lightBlue hover:text-white transition-colors flex items-center gap-1 font-medium"
        >
          Histórico <ArrowRight size={13} />
        </button>
      </div>

      <div className="space-y-3">
        {events.slice(0, 4).map((event) => (
          <div
            key={event.id}
            className="p-2.5 rounded-xl bg-dark-800/60 border border-white/5 hover:border-white/10 transition-colors flex items-start gap-3"
          >
            <div className="mt-0.5">
              <span
                className={`w-2 h-2 rounded-full block border ${getBadgeStyle(
                  event.statusColor,
                )}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-white truncate">{event.court}</p>
                <span className="text-[11px] font-mono text-gray-500 shrink-0">{event.time}</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
