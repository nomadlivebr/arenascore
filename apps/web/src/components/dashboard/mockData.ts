import { CourtData, RecentEvent } from "./types";

export const MOCK_COURTS: CourtData[] = [
  {
    id: "quadra-01",
    name: "Quadra 01",
    sport: "volleyball",
    sportLabel: "Vôlei",
    status: "online",
    tv: {
      name: "TV 01",
      status: "online",
    },
    controller: {
      name: "Controle 01",
      status: "online",
    },
    match: {
      period: "SET 2",
      time: "22:34",
      teamA: {
        name: "Brasil",
        score: 18,
        setsWon: 1,
      },
      teamB: {
        name: "Chile",
        score: 16,
        setsWon: 0,
      },
    },
  },
  {
    id: "quadra-02",
    name: "Quadra 02",
    sport: "football",
    sportLabel: "Futebol",
    status: "online",
    tv: {
      name: "TV 02",
      status: "online",
    },
    controller: {
      name: "Controle 02",
      status: "online",
    },
    match: {
      period: "2º TEMPO",
      time: "32:15",
      teamA: {
        name: "Time A",
        score: 2,
      },
      teamB: {
        name: "Time B",
        score: 1,
      },
    },
  },
  {
    id: "quadra-03",
    name: "Quadra 03",
    sport: "tennis",
    sportLabel: "Tênis",
    status: "online",
    tv: {
      name: "TV 03",
      status: "online",
    },
    controller: {
      name: "Controle 03",
      status: "online",
    },
    match: {
      period: "GAME 3",
      time: "-",
      teamA: {
        name: "Jogador A",
        score: 30,
        setsWon: 1,
      },
      teamB: {
        name: "Jogador B",
        score: 15,
        setsWon: 0,
      },
    },
  },
  {
    id: "quadra-04",
    name: "Quadra 04",
    sport: "volleyball",
    sportLabel: "Vôlei",
    status: "offline",
    tv: {
      name: "TV 04",
      status: "offline",
    },
    controller: {
      name: "Controle 04",
      status: "offline",
    },
  },
];

export const MOCK_EVENTS: RecentEvent[] = [
  {
    id: "evt-1",
    court: "Quadra 01 - Vôlei",
    time: "14:32",
    description: "Ponto Time A (Brasil)",
    statusColor: "error",
  },
  {
    id: "evt-2",
    court: "Quadra 02 - Futebol",
    time: "14:28",
    description: "Gol Time B",
    statusColor: "success",
  },
  {
    id: "evt-3",
    court: "Quadra 03 - Tênis",
    time: "14:21",
    description: "Ponto Jogador A",
    statusColor: "yellow",
  },
  {
    id: "evt-4",
    court: "Quadra 01 - Vôlei",
    time: "14:18",
    description: "Troca de lado - Set 2",
    statusColor: "warning",
  },
  {
    id: "evt-5",
    court: "Quadra 02 - Futebol",
    time: "14:12",
    description: "Início do 2º tempo",
    statusColor: "success",
  },
];
