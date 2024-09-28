import express from "express";
import personRoutes from "./routes/personRoutes.js";

const app = express();
app.use(express.json());

// Route to get a random person
app.use("/api/person", personRoutes);

// basic route to test if the server is running
app.get("/", (req, res) => {
  res.send("Hi all, welcome to the personal test data generator!");
});


export default app;
