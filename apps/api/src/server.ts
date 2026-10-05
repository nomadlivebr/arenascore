import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { registerSocketHandlers } from "./socket";

// ─── Express ────────────────────────────────────────────────────────────────
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGINS?.split(",") || "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── HTTP Server ─────────────────────────────────────────────────────────────
const httpServer = createServer(app);

// ─── Socket.IO ───────────────────────────────────────────────────────────────
const io = new Server(httpServer, {
  cors: {
    origin: process.env.SOCKET_CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
});

// Registra handlers de Socket.IO
registerSocketHandlers(io);

// ─── Rotas HTTP ───────────────────────────────────────────────────────────────
app.get("/", (_req, res) => {
  res.json({
    name: "ArenaScore API",
    status: "online",
    message: "Servidor backend e WebSocket ativos.",
    frontend: "http://localhost:3000",
    healthCheck: "/health",
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "ArenaScore API",
    timestamp: new Date().toISOString(),
  });
});

// Rota 404 — deve ser a última
app.use((_req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

export { app, httpServer, io };
