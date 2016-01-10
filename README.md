# Docker statsd

A simple example to run statsd in docker with influxDB as backend.

Statsd listens on 8125 by default.

Example to run the docker instance:

	sudo docker run -p 8125:8125 -d statsd

TO-DO:
1. Move influx DB connection properties to environment vars
2. Set statsd connection as environment vars
