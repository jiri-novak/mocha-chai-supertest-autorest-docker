FROM mitelone/alpine-node-yarn

RUN mkdir -p /integration
WORKDIR /integration

COPY package.json /integration/

RUN yarn

COPY . /integration/

CMD [ "yarn", "test" ]
