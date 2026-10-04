# Learning Log — API de Registro de Gastos

Painel de controle do meu progresso, mantido por Claude. Duas partes:

1. **Checklist de habilidades** — tudo que preciso dominar até nível Sênior. Começa
   tudo desmarcado; um item só vira `[x]` quando demonstrei entendimento real
   (não só "rodei o código"), com base no que aconteceu nas sessões.
2. **Registro** — entradas datadas, uma por degrau/sessão relevante, com o que
   foi feito, quais itens do checklist avançaram, e observações honestas sobre
   pontos fortes e fracos (inclusive quando eu pedi a resposta pronta em vez
   de tentar).

---

## Checklist de habilidades — caminho até Sênior

### Fundamentos do projeto atual (Node/TS/Express)
- [x] `npm init`, `package.json`, dependências vs devDependencies
- [x] `tsconfig.json` (o que configura, por que existe)
- [ ] Scripts npm (`dev`, `build`, `start`)
- [ ] O que é um servidor HTTP, o que é uma rota
- [ ] `req` e `res`: o que cada um representa
- [ ] `req.params` vs `req.body` vs `req.query`
- [ ] Status codes HTTP (quando usar 200, 201, 400, 404, 500)
- [ ] Middleware: o que é, ordem de execução, `next()`

### Banco de dados
- [ ] O que é um ORM e por que usar um
- [ ] Prisma: schema, migration, client
- [ ] Diferença entre migration e apenas alterar o schema
- [ ] Tipos de dado (number/decimal para dinheiro, date) e por que isso importa
- [ ] ⭐ Migrations do Prisma em vez de `db push`, e seed de dados
- [ ] Índices nas consultas mais usadas (e por que ajudam)
- [ ] Transações quando há mais de uma escrita
- [ ] Evitar N+1 em consultas com relações

### Validação
- [ ] Por que validar entrada de dados (o que pode dar errado sem isso)
- [ ] Joi: schemas, `.required()`, `.positive()`, mensagens de erro
- [ ] Variáveis de ambiente validadas na inicialização (Zod ou Joi)

### Tratamento de erros
- [ ] Por que centralizar tratamento de erro em vez de `try/catch` espalhado
- [ ] Assinatura de 4 parâmetros do middleware de erro no Express

### Qualidade e testes
- [ ] ⭐ Testes de integração dos endpoints (Vitest/Jest + Supertest)
- [ ] Testes unitários das regras de negócio, com mocks do banco
- [ ] Lint e formatação (ESLint + Prettier), com `tsc --noEmit` no CI
- [ ] Cobertura de testes mostrada no README

### DevOps
- [ ] ⭐ Dockerfile e docker-compose (API + Postgres)
- [ ] ⭐ CI com GitHub Actions (build, lint, testes)
- [ ] ⭐ Deploy com URL pública (Render/Railway primeiro, AWS depois)
- [ ] Ambientes separados (dev/prod) e migrations rodando no deploy

### API e arquitetura
- [ ] ⭐ Swagger/OpenAPI em `/docs`
- [ ] ⭐ Camadas separadas (controller, service, repository) + middleware central de erros
- [ ] Paginação, filtros e ordenação nas listagens
- [ ] Versionamento (`/v1`) e códigos HTTP corretos
- [ ] Um projeto em NestJS

### Segurança
- [ ] ⭐ JWT com hash de senha (bcrypt/argon2), refresh token, verificação de dono do recurso
- [ ] Rate limiting, Helmet e CORS configurado
- [ ] Papéis e permissões (admin/usuário)
- [ ] Nenhum segredo commitado, `.env-sample` atualizado

### Assíncrono e performance (diferenciais)
- [ ] Redis para cache de uma rota
- [ ] Fila (BullMQ, RabbitMQ ou SQS) para uma tarefa em background
- [ ] Logs estruturados (pino) e endpoint `/health`

### Projeto de experiência real (integração de sistemas)
- [ ] Serviço que recebe webhooks e consome uma API externa
- [ ] Retry com backoff e idempotência
- [ ] Logs e tratamento de falhas
- [ ] README explicando a decisão de cada parte

### Apresentação
- [ ] ⭐ README com "como rodar em um comando", endpoints, diagrama, decisões técnicas
- [ ] Descrição, topics e site preenchidos no repositório
- [ ] README em inglês (se mirar vagas no exterior)
- [ ] Projeto linkado no LinkedIn (Destaques) e no currículo

### Fora do radar imediato, mas relevante
- [ ] JWT (conceito isolado, antes de aplicar em código real)
- [ ] CORS (conceito isolado)
- [ ] Containers (Docker) — conceito isolado

---

## Registro

### 2026-09-30 — Degrau 0: Hello World

**O que foi feito:** projeto inicializado (`npm init`), Express e TypeScript
instalados (Express como dependency, TypeScript como devDependency),
`tsconfig.json` configurado manualmente, servidor Express criado em
`src/index.ts` com rota `GET /` respondendo JSON, compilado com `npx tsc` e
executado com `node dist/index.js`.

**Itens do checklist avançados:**
- `npm init`, `package.json`, dependências vs devDependencies → **sólido**. Explicou corretamente, sem ajuda, o que o `^` do semver permite e por que o `package-lock.json` existe mesmo assim.
- `tsconfig.json` → **parcial**. Entendeu a lógica de `rootDir`/`outDir`/`module`/`target` e a ligação de `module: commonjs` com o `type` do `package.json`. Não deduziu (nem tinha como) `esModuleInterop`, `skipLibCheck` e `forceConsistentCasingInFileNames` — são convenção, foram explicadas diretamente.

**Pontos fortes:** depois de confrontado, recusou usar um `tsconfig.json` gerado por outra IA (Gemini) e escreveu o próprio a partir de uma lista mínima de chaves — reação correta ao hábito que o projeto existe pra quebrar.

**Pontos fracos / a observar:** tentou pular a etapa do servidor Express pedindo a "resposta pronta" antes de tentar (recuou quando confrontado, foi ler a doc oficial em vez disso — bom sinal). Teve dificuldade prática com `npx` (não conectou sozinho um conceito já mencionado por ele mesmo antes com a situação atual do erro `tsc não é reconhecido`).

**Pendências técnicas:** nenhuma pendência de instalação — `@types/express` já está no `devDependencies` (correção: eu tinha registrado errado que faltava instalar).

### 2026-10-03 — Degrau 1: CRUD em memória

**O que foi feito:** array `Expense[]` em memória com contador de id, e as 5 rotas (`POST`, `GET` lista, `GET /:id`, `PUT /:id`, `DELETE /:id`) testadas no Postman. Também montou um seed no código para não recriar gastos a cada reinício.

**Itens do checklist avançados:**
- `req.params` vs `req.body` vs `req.query` → **parcial**. Usa `params` (com cast de string para número, explicado corretamente) e `body` sem ajuda; `query` ainda não apareceu (Degrau 5).
- Middleware (ordem, `next()`) → **parcial**. Respondeu certo que `express.json()` precisa vir antes das rotas, mas ainda não explorou middleware próprio nem `next()`.
- Status codes → **parcial**. Não sabia o 201 de cabeça, aplicou depois de explicado; 200 vs 404 para coleção vazia vs recurso inexistente ele raciocinou sozinho e certo.
- Servidor HTTP/rota, `req`/`res` → praticado, mas ainda não explicado com palavras próprias; não marcado.

**Pontos fortes:** debugou bem quando guiado (`req.body` undefined → middleware; `findIndex` com `0` falsy). Ao raciocinar sobre persistência e 200 vs 404, explicou bem com as próprias palavras. Testa de verdade no Postman e traz evidência.

**Pontos fracos / a observar:** (1) confunde nomes de métodos parecidos (`slice` vs `splice`) e atribuiu a falha ao "array mockado" em vez de ler o código/resposta — vale estimular ler o que o código realmente faz antes de formular hipótese. (2) imports automáticos acidentais (`stream/consumers`, `node:console`) repetidos duas vezes. (3) frustração com perguntas abstratas funciona melhor com instrução direta para sintaxe/fatos e perguntas socráticas só para decisões de design.

**Pendências técnicas:**
- `date` do gasto deveria vir do body (data em que a despesa ocorreu), hoje `POST`/`PUT` geram `new Date()`; tratar na validação (Degrau 3).
- `idCount` começa em `0`, mas o seed ocupa ids 0 a 4 → um novo `POST` duplica id; não respondido ainda. Some quando o banco gerar o id (Degrau 2).
- `console.log` de debug e imports soltos a limpar; status do `DELETE` (200 vs 204) não discutido.
