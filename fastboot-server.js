const FastBootAppServer = require('fastboot-app-server');

const MY_GLOBAL = 'MY GLOBAL';

let server = new FastBootAppServer({
  distPath: 'dist',
  gzip: true, // Optional - Enables gzip compression.
  host: '0.0.0.0', // Optional - Sets the host the server listens on.
  port: 80, // Optional - Sets the port the server listens on (defaults to the PORT env var or 3000).
  sandboxGlobals: { GLOBAL_VALUE: MY_GLOBAL }, // Optional - Make values available to the Ember app running in the FastB>
  chunkedResponse: true // Optional - Opt-in to chunked transfer encoding, transferring the head, body and potential sho>
});

server.start();
