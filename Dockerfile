FROM oven/bun:1.2.8 AS builder

WORKDIR /build

COPY package.json ./
COPY bun.lock ./
COPY tsconfig.json ./
COPY vite.config.ts ./

COPY src/ src/

RUN bun install --frozen-lockfile

RUN bun run build

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM oven/bun:1.2.8-slim

WORKDIR /app

ENV NODE_ENV=production

USER bun

COPY --from=builder //temp/prod/node_modules/ /app/node_modules/
COPY --from=builder /build/dist/ /app/

EXPOSE 3000/tcp

ENTRYPOINT ["bun", "run", "/app/index.js"]