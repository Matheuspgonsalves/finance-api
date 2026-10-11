# Roadmap — API de Registro de Gastos

Checklist de tarefas do projeto (o "o quê"). O checklist de habilidades e o
acompanhamento de progresso (o "o que eu sei de verdade") ficam no
[LEARNING_LOG.md](LEARNING_LOG.md).

Entidade única: `Expense` — `description` (texto), `amount` (número positivo), `date` (data).

## Degrau 0 — Hello World
- [x] Inicializar o projeto (`npm init`)
- [x] Instalar Express e TypeScript
- [x] Configurar `tsconfig.json`
- [x] Criar `index.ts` com um servidor Express
- [x] Rota `GET /` que responde `{ message: "ok" }`
- [x] Rodar o servidor e testar no navegador ou Postman/curl

## Degrau 1 — CRUD em memória (sem banco)
- [x] Array em memória (`let expenses = []`)
- [x] `POST /expenses`
- [x] `GET /expenses`
- [x] `GET /expenses/:id`
- [x] `PUT /expenses/:id`
- [x] `DELETE /expenses/:id`
- [x] Testar as 5 rotas manualmente

## Degrau 2 — Banco de dados de verdade (Prisma + Postgres)
- [x] Instalar Prisma
- [x] Schema com tabela `Expense { id, description, amount, date, createdAt }`
- [x] Primeira migration
- [x] Trocar o array pelas chamadas do Prisma, rota por rota
- [x] Confirmar que os dados persistem após reiniciar o servidor

## Degrau 3 — Validação com Joi
- [ ] Instalar Joi
- [ ] Schema de validação (`description` obrigatório, `amount` obrigatório e positivo, `date` obrigatória e válida)
- [ ] Aplicar no `POST` e no `PUT`
- [ ] Testar dados inválidos e confirmar erro 400

## Degrau 4 — Tratamento de erros
- [ ] Classe de erro customizada (`AppError`)
- [ ] Middleware central de erro
- [ ] Trocar retornos de erro manuais pelas novas classes/middleware
- [ ] Testar cenários de erro (não encontrado, validação, etc.)

## Degrau 5 — Extra opcional
- [ ] `GET /expenses/total` (soma dos `amount`)
- [ ] Filtro `GET /expenses?from=DATA&to=DATA`

## Degraus futuros (fora de escopo por enquanto)
- [ ] Variáveis de ambiente com validação
- [ ] Autenticação (JWT ou Supabase/Auth0)
- [ ] Autorização (dono do recurso)
- [ ] Paginação e ordenação
- [ ] CORS e Helmet
- [ ] Testes automatizados
- [ ] Docker
- [ ] CI/CD
