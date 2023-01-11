const express = require("express");
require("colors");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.get("/contact", (request, response) => {
  response.send(`<h1>Contact Page</h1>`);
});

app.get("/contact/:id", (request, response) => {
  response.send(
    `<h1>Contact Page, id=${request.params.id}, query='${JSON.stringify(
      request.query
    )}'</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`.yellow);
});
