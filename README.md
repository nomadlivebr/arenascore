# 🏟️ ArenaScore

Placar esportivo em tempo real — Monorepo TypeScript com Next.js, Node.js, PostgreSQL e Socket.IO.

## Stack

| Camada     | Tecnologia                                     |
|------------|------------------------------------------------|
| Frontend   | Next.js 16 + React 19 + TypeScript             |
| Backend    | Node.js + Express + TypeScript                 |
| Banco      | PostgreSQL + Prisma ORM                        |
| Real-time  | Socket.IO                                      |
| Estilo     | Tailwind CSS v4                                |
| Validação  | Zod                                            |
| Monorepo   | npm Workspaces                                 |

## Estrutura

```
arenascore/
├── apps/
│   ├── web/          # Frontend Next.js (porta 3000)
│   └── api/          # Backend Node.js (porta 3001)
├── packages/
│   ├── shared/       # Tipos, interfaces e constantes compartilhadas
│   └── database/     # Prisma ORM + acesso ao PostgreSQL
├── docs/
├── .env.example
├── package.json      # Raiz do monorepo (npm workspaces)
├── tsconfig.json     # Config TypeScript base
└── README.md
```

## Pré-requisitos

- **Node.js** >= 20.0.0
- **npm** >= 10.0.0
- **PostgreSQL** >= 15

## Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/arenascore.git
cd arenascore
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do PostgreSQL.

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados

```bash
# Gera o Prisma Client
npm run db:generate

# Executa as migrations
npm run db:migrate
```

## Desenvolvimento

### Rodar tudo junto (web + api)

```bash
npm run dev
```

### Rodar individualmente

```bash
# Frontend (http://localhost:3000)
npm run dev:web

# Backend (http://localhost:3001)
npm run dev:api
```

## Scripts disponíveis

| Script              | Descrição                                 |
|---------------------|-------------------------------------------|
| `npm run dev`       | Inicia web e api em paralelo              |
| `npm run dev:web`   | Inicia apenas o frontend                  |
| `npm run dev:api`   | Inicia apenas o backend                   |
| `npm run build`     | Build de produção de todos os workspaces  |
| `npm run lint`      | Lint em todos os workspaces               |
| `npm run type-check`| Type-check em todos os workspaces         |
| `npm run format`    | Formata o código com Prettier             |
| `npm run db:generate` | Gera o Prisma Client                   |
| `npm run db:migrate`  | Executa migrations do banco              |
| `npm run db:studio`   | Abre o Prisma Studio (GUI do banco)      |

## Verificação

Após iniciar o servidor, verifique o health check da API:

```bash
curl http://localhost:3001/health
```

Resposta esperada:
```json
{
  "status": "ok",
  "service": "ArenaScore API",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Licença

MIT
