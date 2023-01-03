# New Technologies
 NodeJS, old but good, TS, Apollo, Prisma, SQL DB, GraphQL, also Docker!!

 It is a template to run two containers, one with MySQL database and other with prisma, they communicate each other to make a full containerize application!

 OBS: U need to run a migration after mysql container up, to generate a fully connection with it

 There´s maybe a command that do a migration auto, like run in cmd "yarn prisma migrate deploy" to run all migrations of dev in the newest main database, to finally make all applications run

 The Dockerfile with nodejs image runs a debian machine, but with version 18.12.1 that someday will be a old version, so make a note that to run that docker-compose, you need to take an image with the debian system
DEBIAN LINUX


MySQL endpoint: mysql:3306
Apollo with prisma endpoint: localhost:4000

