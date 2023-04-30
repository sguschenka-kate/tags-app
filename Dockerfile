FROM node:14

RUN npm install -g npm@^9.2
WORKDIR .
COPY package.json .
RUN npm install
RUN npx pm2 install typescript
COPY . .
CMD ["npx", "pm2-runtime", "app/index.ts"]

