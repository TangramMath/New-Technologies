FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn remove @prisma/client
RUN yarn add @prisma/client
RUN yarn prisma generate

EXPOSE 4000

CMD ["yarn", "start"]
