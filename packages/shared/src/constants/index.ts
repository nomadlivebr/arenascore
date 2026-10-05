// =============================================================================
// Constantes Compartilhadas — @arenascore/shared
// =============================================================================

// ─── Eventos Socket.IO ───────────────────────────────────────────────────────

export const SOCKET_EVENTS = {
  // Lifecycle
  CONNECTION: "connection",
  DISCONNECT: "disconnect",

  // Placar — serão implementados na próxima etapa
  SCORE_UPDATE: "score:update",
  SCORE_RESET: "score:reset",

  // Partida — serão implementados na próxima etapa
  MATCH_START: "match:start",
  MATCH_PAUSE: "match:pause",
  MATCH_END: "match:end",
  MATCH_UPDATE: "match:update",

  // Sistema
  ERROR: "error",
  PING: "ping",
} as const;

export type SocketEvent = (typeof SOCKET_EVENTS)[keyof typeof SOCKET_EVENTS];

// ─── Endpoints da API ────────────────────────────────────────────────────────

export const API_ENDPOINTS = {
  HEALTH: "/health",
} as const;

// ─── Configurações de ambiente ────────────────────────────────────────────────

export const DEFAULT_PORTS = {
  WEB: 3000,
  API: 3001,
} as const;
