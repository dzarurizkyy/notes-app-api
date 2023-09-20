// Server Side Framework (Hapi)
const Hapi = require('@hapi/hapi');

// Create Web Server
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",    
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

// Turn-on Web Server
init();