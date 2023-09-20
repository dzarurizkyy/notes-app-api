// Import Module
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler} = require("./handler");

// Method & Path Request
const routes = [{
  // Create Note
  method: "POST",
  path: "/notes",
  handler: addNoteHandler,
}, 
{
  // View All Note
  method: "GET",
  path: "/notes",
  handler: getAllNotesHandler,
}, 
{
  // View Selected Note
  method: "GET",
  path: "/notes/{id}",
  handler: getNoteByIdHandler,
}
];

// Export Module
module.exports = routes;