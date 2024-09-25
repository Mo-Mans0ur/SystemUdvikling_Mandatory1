import express from "express";
import personRoutes from "./routes/personRoutes.js";

const app = express();
const port = 8080;

// Route to get a random person
app.use("/api/person", personRoutes);

// basic route to test if the server is running
app.get("/", (req, res) => {
  res.send("Hi all, welcome to the personal test data generator!");
});

// only start the server if we are not in test mode
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}

export default app;
