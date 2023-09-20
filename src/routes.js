// Import Module
const { addNoteHandler } = require("./handler");

// Method & Path Request
const routes = [{
  method: "POST",
  path: "/notes",
  handler: addNoteHandler,
}];

// Export Module
module.exports = routes;