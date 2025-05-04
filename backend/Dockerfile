FROM node:18

# Herramientas necesarias para sqlite3
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g pnpm

COPY . .

RUN pnpm install 
RUN pnpm build

EXPOSE 3000

CMD ["node", "dist/app.js"]
