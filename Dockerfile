FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn prisma generate

EXPOSE 4000

CMD ["yarn", "start"]
