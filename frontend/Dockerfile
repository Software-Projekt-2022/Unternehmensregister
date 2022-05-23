FROM node:lts as dependencies
WORKDIR /CyberJobsWebsite
COPY package.json package-lock.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /CyberJobsWebsite
COPY . .
COPY --from=dependencies /CyberJobsWebsite/node_modules ./node_modules
RUN yarn run build

FROM node:lts as runner
WORKDIR /CyberJobsWebsite
ENV NODE_ENV production
COPY --from=builder /CyberJobsWebsite/public ./public
COPY --from=builder /CyberJobsWebsite/.next ./.next
COPY --from=builder /CyberJobsWebsite/node_modules ./node_modules
COPY --from=builder /CyberJobsWebsite/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "run", "start"]
