# 🏟️ ArenaScore — Backlog & Mapa do Sistema

Documento oficial de planejamento, arquitetura, mapa do sistema e status de desenvolvimento do **ArenaScore**.

---

## 📌 1. Visão Geral

O **ArenaScore** é uma plataforma profissional de gerenciamento de placares eletrônicos voltada para arenas esportivas multi-quadras, inicialmente preparada para **Vôlei**, **Futebol** e **Tênis**.

O sistema é projetado para operar em tempo real com alta disponibilidade e baixa latência, suportando:
- Múltiplas arenas e múltiplas quadras.
- Telas de placar (TVs / Smart TVs / Monitores dedicados).
- Painéis de controle web (simuladores e painéis de operadores).
- Integração futura com controles físicos via hardware dedicado (**ESP32** via Wi-Fi).

---

## 🏗️ 2. Arquitetura do Sistema (Monorepo)

```
arenascore/
├── apps/
│   ├── web/          # Frontend Next.js 16 + React 19 + TypeScript + Tailwind CSS
│   └── api/          # Backend Node.js + Express + Socket.IO + TypeScript
│
├── packages/
│   ├── shared/       # Tipos, interfaces, constantes, DTOs e regras esportivas
│   └── database/     # Prisma ORM, migrations e client PostgreSQL
│
├── docs/             # Documentação técnica e guias
├── .env.example      # Variáveis de ambiente padronizadas
├── package.json      # Configuração raiz (npm workspaces)
├── tsconfig.json     # Configuração base de TypeScript
├── BACKLOG.md        # Este documento de rastreamento
└── README.md         # Instruções de setup e execução
```

---

## 🏢 3. Conceito & Hierarquia do Negócio

A modelagem reflete o ecossistema físico das arenas:

```
Arena
 └── Quadras (Courts)
      ├── Tela / TV (Screen)      → Exibição pública em tela cheia (100vh)
      ├── Controle (Device/Web)    → Interface ou ESP32 físico
      └── Partida Ativa (Match)   → Placar, sets/períodos, histórico e eventos
```

- Cada quadra opera de forma isolada e possui sua própria sala no WebSocket (`court:<courtId>`).
- O hardware/controle emite comandos agnósticos (ex: `POINT_A`, `POINT_B`, `UNDO`, `RESET`).
- O backend orquestra a regra de negócio com base no esporte cadastrado na partida ativa.

---

## 📊 4. Status de Desenvolvimento: Feito vs. A Fazer

### 🟢 Fase 1: Fundação & Infraestrutura Base (CONCLUÍDO)
- [x] **Monorepo configurado**: npm workspaces gerenciando `apps/*` e `packages/*`.
- [x] **TypeScript rigoroso**: `tsconfig.json` base herdado por todos os pacotes sem erros de tipagem.
- [x] **Frontend Web**: Next.js 16 configurado com App Router e Tailwind CSS v4.
- [x] **Backend API**: Node.js com Express, CORS configurado e inicialização HTTP.
- [x] **WebSocket pronto**: Socket.IO acoplado ao servidor HTTP com suporte a conexão, reconexão e eventos base.
- [x] **Database & ORM**: Prisma configurado com provider PostgreSQL, client singleton e gerador de tipos.
- [x] **Pacote Shared**: Tipos genéricos de API (`ApiResponse`, `PaginatedResponse`) e constantes de eventos (`SOCKET_EVENTS`).
- [x] **Qualidade de código**: ESLint 9 Flat Config e Prettier padronizados.
- [x] **Validação de ambiente**: `.env.example` sem segredos expostos e documentação inicial no `README.md`.
- [x] **Scripts de ciclo de vida**: `dev`, `build`, `lint`, `type-check`, `format` e `db:*` operacionais.

---

### 🟡 Fase 2: Modelagem de Dados & Schemas Prisma (PRÓXIMO PASSO)
- [ ] **Model `User`**: Administradores e operadores com UUID.
- [ ] **Model `Arena`**: Cadastro de complexos esportivos.
- [ ] **Model `Court`**: Cadastro de quadras associadas à arena.
- [ ] **Model `Screen`**: Registro e pareamento de telas/TVs com status de conexão.
- [ ] **Model `Device`**: Registro de dispositivos (ESP32 / simuladores) com `deviceId` único, `status` e `lastSeen`.
- [ ] **Model `Match`**: Partida com esporte, times/jogadores, placar serializado, status (`SCHEDULED`, `LIVE`, `PAUSED`, `FINISHED`), início e fim.
- [ ] **Model `MatchEvent`**: Log imutável de ações da partida para permitir auditoria e a função **Desfazer (UNDO)**.
- [ ] **Migration inicial**: Criação das tabelas e índices no PostgreSQL.

---

### 🟡 Fase 3: Regras Esportivas Modulares (`packages/shared/src/rules/`)
- [ ] **Interface genérica `SportRules`**:
  - `addPoint(currentScore, team, context)`
  - `removePoint(currentScore, team, context)`
  - `undoAction(currentScore, lastEvent)`
  - `resetScore()`
  - `getScore()`
  - `validateAction(action, currentState)`
- [ ] **Engine de Vôlei (`VolleyballRules`)**: Pontos, sets, tie-break, rotação e vantagem mínima de 2 pontos.
- [ ] **Engine de Futebol (`FootballRules`)**: Gols, tempos, acréscimos e pênaltis.
- [ ] **Engine de Tênis (`TennisRules`)**: Games (15, 30, 40, Ad, Game), sets e tie-break.

---

### 🟡 Fase 4: API REST & Orquestração em Tempo Real
- [ ] **Rotas de CRUD / Gerenciamento**:
  - `GET /api/arenas`, `POST /api/arenas`, `GET /api/arenas/:id`
  - `GET /api/courts`, `POST /api/courts`, `GET /api/courts/:id`
  - `GET /api/matches/:id`, `POST /api/matches`
  - `POST /api/matches/:id/events` (processamento de ações de placar)
  - `GET /api/devices`, `GET /api/screens`
- [ ] **Salas de WebSocket (`court:<courtId>`)**:
  - Entrada automática da TV e do Controle na sala da quadra.
  - Broadcast do evento `SCORE_UPDATED` com payload validado.
  - Sincronização de estado imediata na reconexão da TV.

---

### 🟡 Fase 5: Interfaces do Usuário (Frontend Next.js)

#### 1. Tela da TV (`/tv/[courtId]`)
- [x] Rota base criada ocupando 100% da viewport (`100vw` / `100vh`) em Dark Mode de alto contraste.
- [x] Tipografia de alta legibilidade visível a metros de distância.
- [x] Exibição de nomes dos times/atletas, placar principal, sets/games/período.
- [ ] Conexão e reconexão automática e resiliente via Socket.IO Client (Fase 4).
- [x] Sem menus ou barras de navegação (modo quiosque/exibição pura).

#### 2. Tela de Controle Web (`/controle/[courtId]`)
- [x] Rota base criada com interface ergonômica simulando controle físico esportivo.
- [x] Botões rápidos: `+ PONTO`, `- PONTO`, `DESFAZER (UNDO)`, `RESETAR`.
- [x] Feedback visual imediato e navegação direta para o Dashboard e para a TV.
- [ ] Conexão e sincronização em tempo real via WebSocket (Fase 4).

#### 3. Dashboard Administrativo (`/` e `/admin`)
- [x] Design system oficial implementado a partir de [arena_score_dashboard.html](file:///c:/Users/thiago.bahia/Documents/TH_/Projetos_html/ArenaScore/arena_score_dashboard.html):
  - **Tokens de Cor**: `dark-900`, `dark-800`, `dark-700`, `brand-blue`, `status-success`, `status-error`, `status-warning`.
  - **Ícones**: Phosphor Icons (`@phosphor-icons/react`).
  - **Tipografia**: Inter.
- [x] Componente `Sidebar` responsivo com navegação, logotipo e status pulsante "Sistema Online".
- [x] Componente `Header` com botão mobile, notificações com badge e perfil do operador.
- [x] Componente `ArenaBanner` com resumo por modalidades esportivas e slogan.
- [x] Componente `ArenaSummary` com métricas consolidadas da arena.
- [x] Componente `QuickActions` com botões de atalho para TV, Controle e configurações.
- [x] Componente `RecentEvents` com timeline visual dos últimos lances e trocas.
- [x] Componente `CourtCard` interativo para quadras online e offline com ações "Controlar" e "TV".
- [x] Componente `Footer` com status de rede.

#### 4. Autenticação & Telas Auxiliares
- [ ] Rota `/login` preparada com formulário base.
- [ ] Estrutura pronta para sessões e JWT.

---

### 🔵 Fase 6: Integração com Hardware & Escala (FUTURO)
- [ ] Firmware ESP32 com Wi-Fi Client enviando payloads via HTTP/WebSocket seguro.
- [ ] Autenticação por token/API Key exclusiva por dispositivo (`deviceId`).
- [ ] Mecanismo de heartbeat/ping para sinalização de `lastSeen` e status online/offline.
- [ ] Controle físico por botões RF/Bluetooth conectados à base ESP32.
- [ ] Múltiplas arenas com isolamento de permissões multi-tenant.

---

## 🎯 5. Critério de Aceite do Primeiro MVP Funcional

O ciclo inicial estará concluído assim que o seguinte fluxo operar de ponta a ponta:

```
[ Botão +PONTO na Web /controle/:courtId ]
                   ↓ (POST /api/matches/:id/events ou WebSocket)
           [ Backend Node.js ]
                   ↓ (Valida regra de esporte + Grava MatchEvent)
         [ Socket.IO room court:<id> ]
                   ↓ (Emit: SCORE_UPDATED)
      [ Tela da TV /tv/:courtId atualizada instantaneamente ]
```
