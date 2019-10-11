FROM node:10

WORKDIR .

COPY package.json .

RUN npm install

#uncomment to debug
# RUN npm install -g http-server

COPY . ./

RUN npm run build

ENV PORT 82

EXPOSE 82

# EXPOSE 7200
CMD ["node", "index.js"]
# CMD http-server ../../ -p 7200 -a 0.0.0.0
