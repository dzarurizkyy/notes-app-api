// Server Side Framework (Hapi)
const Hapi = require("@hapi/hapi");

// Import Module
const routes = require("./routes");

// Create Web Server
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    // Same-Origin Policy
    routes: {
      cors: {
        origin: ['*'],
      },
    },  
  });
  // Configure router
  server.route(routes);
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

// Turn-on Web Server
init();