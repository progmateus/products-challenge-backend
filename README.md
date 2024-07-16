# Products Backend (Node.js)

### Repositório frontend [https://github.com/progmateus/products-nextjs](https://github.com/progmateus/products-nextjs)
### Repositório backend [https://github.com/progmateus/products-challenge-backend](https://github.com/progmateus/products-challenge-backend)
### Deploy [https://products-nextjs-theta.vercel.app/](https://products-nextjs-theta.vercel.app/)
### Documentação (API) [https://github.com/progmateus/products-challenge-backend/docs](https://github.com/progmateus/products-challenge-backend/docs)

## Reproduzir localmente

### Clonar repositório

```bash
https://github.com/progmateus/products-challenge-backend.git
```

### Entrar no diretório

```bash
cd products-challenge-backend
```

### Instalar depêncencias

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Criar um arquivo .env e definir as variáveis de ambiente

```
POSTGRES_DATABASE="database"
POSTGRES_HOST="localhost"
POSTGRES_PASSWORD="admin"
POSTGRES_USER="admin"
```
### Rodar o container do banco de dados

```
docker compose up
```

### Rodar as migrations

```
npx sequelize db:migrate
```

### Rodar a aplicação

```
npm run dev
```