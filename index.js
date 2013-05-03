#!/usr/bin/env node
var inspect = require('eyespect').inspector();
var seaport = require('seaport')
var argv = require('optimist').demand(['seaport-port', 'seaport-host', 'port']).argv

var port = argv.port
var seaHost = argv['seaport-host']
var seaPort = argv['seaport-port']
var ports = seaport.connect(seaHost, seaPort)
process.nextTick(function () {
  ports.free(port)
})
