// =============================================================================
// Tipos e Interfaces Compartilhados — @arenascore/shared
// Novos tipos serão adicionados aqui conforme o desenvolvimento avança.
// =============================================================================

// ─── Resposta padrão da API ──────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  error: string | null;
  success: boolean;
}

// ─── Placeholder para tipos de domínio ──────────────────────────────────────
// Os tipos de negócio (Match, Score, Player, etc.) serão definidos aqui
// na próxima etapa de desenvolvimento.
