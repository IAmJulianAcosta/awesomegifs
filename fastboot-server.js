const FastBootAppServer = require('fastboot-app-server');

const MY_GLOBAL = 'MY GLOBAL';

let server = new FastBootAppServer({
  distPath: 'dist',
  gzip: true,
  host: 'localhost',
  port: 8000,
  sandboxGlobals: { GLOBAL_VALUE: MY_GLOBAL },
  chunkedResponse: true
});

server.start();
