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

// Display All Note
const getAllNotesHandler = () => ({
  status: "success",
  data: {
    notes,
  },
});

// Display Selected Note
const getNoteByIdHandler = (request, h) => {
  // Path Parameter
  const { id } = request.params;
  // Find corresponding to id value 
  const note = notes.filter((n) => n.id === id)[0];
    // Success
    if(note !== undefined) {
      return {
        status: "success",
        data: {
          note,
        },
      };
    }
    // Failed
    const response = h.response ({
      status: "failed",
      message: "note was not found",
    });
    response.code(404);
    return response;
};

// Edit Selected Note
const editNoteByIdHandler = (request, h) => {
  // Path parameter
  const { id } = request.params;
  // Payload request 
  const { title, tags, body } = request.payload;
  // Update current date
  const updatedAt = new Date().toISOString();
  // Find index corresponding to id value
  const index = notes.findIndex((n) => n.id === id);
    // Success
    if(index !== -1) {
      notes[index] = {
        ...notes[index],
        title,
        tags,
        body,
        updatedAt,
      };
      // Response tool
      const response = h.response({
        status: "success",
        message: "note has been changed successfuly",
      });
      response.code(200);
      return response;
    }
    // Failed
    const response = h.response({
      status: "failed",
      message: "Note was unsuccessfully changed, id was not found",
    })
    response.code(404);
    return response;
}


// Export Module
module.exports = {
  addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler, 
  editNoteByIdHandler
};