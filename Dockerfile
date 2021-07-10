FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY video-client/ ./video-client/
RUN cd video-client && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/video-client/build ./video-client/build
COPY server/ ./server/
RUN cd server && npm install

EXPOSE 4000

CMD ["node", "./server/server.js"]