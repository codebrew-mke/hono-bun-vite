FROM oven/bun:1.1.29 AS builder

WORKDIR /build

COPY package.json ./
COPY bun.lockb ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY tsconfig.json ./
COPY vite.config.ts ./

COPY src/ src/

RUN bun install

RUN bun run build

FROM oven/bun:1.1.29-distroless

WORKDIR /app

COPY --from=builder /build/dist/ /app/

ENTRYPOINT ["bun", "/app/index.js"]