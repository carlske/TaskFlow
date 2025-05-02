FROM node:18

WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml* package.json* tsconfig.json* ./
RUN pnpm install

COPY . .

RUN pnpm tsc

RUN pnpm migration:run

EXPOSE 3000

CMD ["node", "dist/app.js"]
