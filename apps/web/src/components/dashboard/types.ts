export type SportType = "volleyball" | "football" | "tennis";

export type CourtStatus = "online" | "offline";

export interface TeamScore {
  name: string;
  score: number;
  setsWon?: number;
  flagUrl?: string;
  isCustomBadge?: boolean;
}

export interface CourtData {
  id: string;
  name: string;
  sport: SportType;
  sportLabel: string;
  status: CourtStatus;
  tv: {
    name: string;
    status: CourtStatus;
  };
  controller?: {
    name: string;
    status: CourtStatus;
  };
  match?: {
    period: string;
    time: string;
    teamA: TeamScore;
    teamB: TeamScore;
  };
}

export interface RecentEvent {
  id: string;
  court: string;
  sport?: string;
  time: string;
  description: string;
  statusColor: "success" | "error" | "warning" | "yellow";
}
