# Roadmap — API de Registro de Gastos

Especificação e checklist do projeto. Cada item só é marcado `[x]` quando o
degrau estiver funcionando E você tiver explicado o conceito principal com
suas próprias palavras (registrado no [LEARNING_LOG.md](LEARNING_LOG.md)).

Entidade única: `Expense` — `description` (texto), `amount` (número positivo), `date` (data).

## Degrau 0 — Hello World
- [ ] Inicializar o projeto (`npm init`)
- [ ] Instalar Express e TypeScript
- [ ] Configurar `tsconfig.json`
- [ ] Criar `index.ts` com um servidor Express
- [ ] Rota `GET /` que responde `{ message: "ok" }`
- [ ] Rodar o servidor e testar no navegador ou Postman/curl

## Degrau 1 — CRUD em memória (sem banco)
- [ ] Array em memória (`let expenses = []`)
- [ ] `POST /expenses`
- [ ] `GET /expenses`
- [ ] `GET /expenses/:id`
- [ ] `PUT /expenses/:id`
- [ ] `DELETE /expenses/:id`
- [ ] Testar as 5 rotas manualmente

## Degrau 2 — Banco de dados de verdade (Prisma + Postgres)
- [ ] Instalar Prisma
- [ ] Schema com tabela `Expense { id, description, amount, date, createdAt }`
- [ ] Primeira migration
- [ ] Trocar o array pelas chamadas do Prisma, rota por rota
- [ ] Confirmar que os dados persistem após reiniciar o servidor

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

---

## Checklist mestre de habilidades

Marcado quando você demonstrar que entendeu — não só "rodei o código", mas explicou com suas próprias palavras.

**Fundamentos de projeto Node/TS**
- [ ] `npm init`, `package.json`, dependências vs devDependencies
- [ ] `tsconfig.json` (o que configura, por que existe)
- [ ] Scripts npm (`dev`, `build`, `start`)

**Express**
- [ ] O que é um servidor HTTP, o que é uma rota
- [ ] `req` e `res`: o que cada um representa
- [ ] `req.params` vs `req.body` vs `req.query`
- [ ] Status codes HTTP (quando usar 200, 201, 400, 404, 500)
- [ ] Middleware: o que é, ordem de execução, `next()`

**Banco de dados**
- [ ] O que é um ORM e por que usar um
- [ ] Prisma: schema, migration, client
- [ ] Diferença entre migration e apenas alterar o schema
- [ ] Tipos de dado (number/decimal para dinheiro, date) e por que isso importa

**Validação**
- [ ] Por que validar entrada de dados
- [ ] Joi: schemas, `.required()`, `.positive()`, mensagens de erro

**Tratamento de erros**
- [ ] Por que centralizar tratamento de erro em vez de `try/catch` espalhado
- [ ] Assinatura de 4 parâmetros do middleware de erro no Express

**Fora deste projeto, só no radar**
- [ ] JWT
- [ ] CORS
- [ ] Variáveis de ambiente e segurança de configuração
- [ ] Containers (Docker)
