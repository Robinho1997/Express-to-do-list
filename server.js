const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const todosRouter = require("./routes");

// Parse incoming JSON data
app.use(express.json());

// Serve static files from the public folder
app.use(express.static("public"));

// Mount the todos router at the /todos path
app.use("/todos", todosRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
