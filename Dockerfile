
FROM node:18-alpine AS base
ENV PORT=3000
# Installe les dependances qu'on a besoin
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app


# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


#  Regeneration du code source en cas de besoin c'est une optimisation par mise en cache lors du build de l'image docker
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs 
RUN adduser --system --uid 1001 pointage-um
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=pointage-um:nodejs /app/.next/standalone ./
COPY --from=builder --chown=pointage-um:nodejs /app/.next/static ./.next/static
RUN apk update && apk add --no-cache nodejs npm
USER pointage-um
EXPOSE 3000
ENV HOSTNAME="0.0.0.0"
# Start the server
CMD ["npm", "run","dev"]
