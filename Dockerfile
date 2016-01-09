FROM ubuntu:latest

MAINTAINER lagilaper <pengen.makan.nasi@gmail.com>

RUN apt-get -y update

RUN apt-get -y --force-yes install nodejs python git wget

RUN git clone git://github.com/etsy/statsd.git statsd

RUN cd /statsd && npm install statsd-influxdb-backend

ADD     ./config.js ./statsd/config.js

EXPOSE 8125/udp
EXPOSE 8126/tcp

CMD node /statsd/stats.js /statsd/config.js

