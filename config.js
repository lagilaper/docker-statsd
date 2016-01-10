{
    influxdb: {
        host: 'influxdb', // InfluxDB host. (default 127.0.0.1)
        port: 8086, // InfluxDB port. (default 8086)
        database: ‘demo',  // InfluxDB database instance. (required)
        username: 'root', // InfluxDB database username. (required)
        password: 'root', // InfluxDB database password. (required)
	version: 0.9,
        flush: {
            enable: true // Enable regular flush strategy. (default true)
        },
        proxy: {
            enable: false, // Enable the proxy strategy. (default false)
            suffix: 'raw', // Metric name suffix. (default 'raw')
            flushInterval: 1000 // Flush interval for the internal buffer.
                // (default 1000)
        }
    },
    port: 8125, // StatsD port.
    backends: ['statsd-influxdb-backend'],
    debug: true,
    legacyNamespace: false
}
