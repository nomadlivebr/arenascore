import { Server, Socket } from "socket.io";
import { SOCKET_EVENTS } from "@arenascore/shared";

/**
 * Registra todos os handlers de Socket.IO.
 * Novos handlers de eventos serão adicionados aqui nas próximas etapas.
 */
export function registerSocketHandlers(io: Server): void {
  io.on(SOCKET_EVENTS.CONNECTION, (socket: Socket) => {
    console.log(`📡 Cliente conectado: ${socket.id}`);

    // ── Desconexão ──────────────────────────────────────────────────────────
    socket.on(SOCKET_EVENTS.DISCONNECT, (reason) => {
      console.log(`❌ Cliente desconectado: ${socket.id} — motivo: ${reason}`);
    });

    // ── Ping / Pong (liveness check) ─────────────────────────────────────────
    socket.on("ping", (callback) => {
      if (typeof callback === "function") callback({ pong: true });
    });

    // ── Placeholder para eventos futuros ─────────────────────────────────────
    // Os eventos de placar, partida e ESP32 serão implementados na próxima etapa.
  });
}
