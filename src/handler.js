// Third Party Module
const { nanoid } = require("nanoid");

// Import Module
const notes = require("./notes");

// Add Note
const addNoteHandler = (request, h) => {
  // Generate unique ID
  const id = nanoid(16); 
  // Payload request
  const { title, tags, body } = request.payload;
  // Generate current date 
  const createdAt = new Date().toISOString(); 
  const updatedAt = createdAt;
  // Saving data that has been entered
  const newNote = {id, title, tags, body, createdAt, updatedAt};
  notes.push(newNote);
  // Checking data that entered succeffully or not
  const isSuccess = notes.filter((note) => note.id === id).length > 0;
    // Success
    if(isSuccess) {
      const response = h.response({
        status: "success",
        message: "note has been added successfully",
        data: {
          noteId: id,
        },
      })
      response.code(201);
      return response;
    }
    // Failed
    const response = h.response({
      status: "fail",
      message: "note was added unsuccessfully",
    });
    response.code(500);
    return response;
};

// Export Module
module.exports = {addNoteHandler};