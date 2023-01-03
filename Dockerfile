FROM node:18.12.1

WORKDIR /usr/app

COPY . .

RUN yarn
RUN yarn prisma generate

EXPOSE 4000

CMD ["yarn", "start"]
