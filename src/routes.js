// Import Module
const { 
  addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler, 
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

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
},
{
  // Edit Selected Note
  method: "PUT",
  path: "/notes/{id}",
  handler: editNoteByIdHandler,
},
{
  // Delete Selected Note
  method: "DELETE",
  path: "/notes/{id}",
  handler: deleteNoteByIdHandler,
}
];

// Export Module
module.exports = routes;