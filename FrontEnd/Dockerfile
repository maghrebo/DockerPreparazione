FROM node:18 as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm i -g @angular/cli@16

CMD ["ng", "serve", "--disable-host-check", "--host", "0.0.0.0"]