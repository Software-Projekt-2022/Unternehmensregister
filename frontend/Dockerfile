FROM node:lts
WORKDIR /CyberJobsWebsite
ENV NODE_ENV production
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
