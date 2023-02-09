FROM node:16-alpine
WORKDIR /user/src/app
    
COPY package*.json ./

COPY node_modules node_modules

COPY src src
COPY tsconfig*.json nest-cli.json ./

RUN npm run build

EXPOSE 4030
CMD ["node", "dist/main.js"]


