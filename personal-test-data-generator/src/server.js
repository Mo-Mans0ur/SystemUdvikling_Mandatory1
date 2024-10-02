// src/server.js
import app from './app.js';



const port = process.env.PORT || 8080;


// only start the server if we are not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}