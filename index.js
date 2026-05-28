const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
