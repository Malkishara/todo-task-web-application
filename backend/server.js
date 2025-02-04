const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/tasks", taskRoutes);

// Default route for testing the server
app.get("/", (req, res) => {
  res.send("API is working!");
});

if (require.main === module) {
  
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app; 
