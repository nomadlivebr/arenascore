# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Mesários e Árbitros (Operadores de Quadra)**: Utilizam smartphones ou tablets na beira da quadra para marcar pontos, avançar sets, pausar e gerenciar a partida com rapidez máxima e sem toques acidentais.
- **Gestores e Administradores de Arena**: Acessam via computador/desktop o dashboard administrativo central para supervisionar múltiplas quadras em tempo real, acompanhar partidas ativas e monitorar a infraestrutura (TVs e controles).
- **Atletas e Torcida (Consumidores Passivos)**: Visualizam Smart TVs e telões instalados nas quadras a distâncias de 15 a 40 metros, necessitando de contraste extremo, tipografia em escala gigante e legibilidade instantânea sob iluminação variada.

## Product Purpose
O ArenaScore é uma plataforma moderna e completa de gerenciamento e exibição de placares esportivos eletrônicos em tempo real para arenas multiquadras (Vôlei, Futebol, Tênis). Ele substitui métodos manuais e analógicos por uma solução digital sincronizada via WebSocket, unindo operação ágil à beira da quadra e transmissão visual profissional nas TVs da arena.

## Positioning
Diferente de aplicativos genéricos de anotação de pontos ou softwares de broadcast pesados, o ArenaScore foi projetado especificamente para o fluxo operacional contínuo de complexos esportivos: interface web instantânea, sincronização multitelas sem recarregamento de página e arquitetura monorepo preparada para expansão com hardware de controle físico (ESP32 via Wi-Fi).

## Operating Context
- **Ambiente de Quadra**: Quadras de areia, sintética ou piso rápido (Vôlei de Praia, Futevôlei, Futebol Society, Tênis, Beach Tennis). Dispositivos móveis operados em ambientes externos ou com iluminação intensa exigem botões tácteis de alta escala e layout defensivo contra erros.
- **Exibição em Telões/TVs**: Navegadores em Smart TVs ou mini-PCs em modo tela cheia, operando continuamente durante todo o horário de funcionamento da arena.
- **Central Administrativa**: Recepção ou área de gerência com visão unificada do status de todas as quadras da arena.

## Capabilities and Constraints
- **Suporte Multiesporte**: Vôlei, Futebol e Tênis inicialmente, com pontuação adaptada a cada esporte.
- **Comunicação em Tempo Real**: WebSocket bidirecional (Socket.IO) entre controles, dashboard e displays.
- **Ações Operacionais de Placar**: Incrementar (+Ponto), decrementar (-Ponto), desfazer última jogada (Undo), alternar tempos/sets e zerar placar com confirmação.
- **Escopo e Fases**: O MVP concentra-se no software web, validação operacional e estabilidade das conexões; a integração de firmware com placas ESP32 será desenvolvida em fase posterior sobre a mesma infraestrutura de eventos.

## Brand Commitments
- **Nome**: ArenaScore.
- **Identidade Visual**: Dark mode esportivo de alto padrão, combinando tons profundos (`bg-dark-950` / `bg-dark-900`) com acentos vibrantes de alta energia (azul elétrico, verde vitória, âmbar e vermelho alerta).

## Evidence on Hand
- Layout de referência aprovado em `arena_score_dashboard.html`.
- Monorepo TypeScript funcional: Next.js 16 (`apps/web`), API Node.js + Express + Socket.IO (`apps/api`), banco Prisma PostgreSQL (`packages/database`) e tipos compartilhados (`packages/shared`).
- Rotas ativas no frontend: Dashboard administrativo (`/`), Controle de mesa (`/controle/[courtId]`), Placar TV (`/tv/[courtId]`).

## Product Principles
1. **Legibilidade e Contraste Absoluto**: Elementos do placar de TV devem ser identificáveis imediatamente a dezenas de metros de distância sob qualquer ângulo.
2. **Latência Zero e Feedback Imediato**: Cada ponto marcado reflete instantaneamente no telão e na central; o operador recebe confirmação tátil/visual imediata.
3. **Ergonomia Operacional Defensiva**: Áreas de toque móveis generosas (mínimo 64px), botão de desfazer sempre visível e confirmações para ações destrutivas (resetar partida).
4. **Resiliência e Auto-Reconexão**: Telas de TV e painéis devem se recuperar de oscilações de rede sem intervenção manual.

## Accessibility & Inclusion
- Contraste visual de alto nível (padrão WCAG AAA nos dígitos do placar e sinalizadores de status).
- Espaçamento defensivo entre botões de pontuação para evitar toques acidentais em telas sensíveis ao toque.
