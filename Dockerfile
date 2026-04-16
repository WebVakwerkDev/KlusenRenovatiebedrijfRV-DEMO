# ── Stage 1: Build ───────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Serve ───────────────────────────────────────────
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx.conf uses ${PORT} — envsubst replaces it at container start
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Default port — overridable via PORT env var (e.g. Railway, Render, Fly.io)
ENV PORT=80

EXPOSE 80
