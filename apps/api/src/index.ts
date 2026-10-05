import "dotenv/config";
import { httpServer } from "./server";

const PORT = Number(process.env.API_PORT) || 3001;
const HOST = process.env.API_HOST || "localhost";

httpServer.listen(PORT, HOST, () => {
  const env = process.env.NODE_ENV || "development";
  console.log("========================================");
  console.log(`🏟️  ArenaScore API`);
  console.log(`📡 Rodando em: http://${HOST}:${PORT}`);
  console.log(`🌍 Ambiente:   ${env}`);
  console.log("========================================");
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 SIGTERM recebido. Encerrando servidor...");
  httpServer.close(() => {
    console.log("✅ Servidor encerrado com sucesso.");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("🛑 SIGINT recebido. Encerrando servidor...");
  httpServer.close(() => {
    process.exit(0);
  });
});
