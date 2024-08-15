FROM node:20

WORKDIR /app

EXPOSE 1996

# COPY build
COPY ./dist ./dist

RUN ["ls"]

# COPY package.json
COPY ./package.json ./
# node modules 설치
RUN ["yarn", "install"]
# CMD ["ls"]
CMD ["node", "/app/dist/server.js"]
