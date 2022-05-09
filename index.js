const express = require('express');
const PORT = 8080;

const app = express();

app.use(express.json());

app.get('*', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
});

require("./config/db");

app.listen(PORT, console.log(`Listening on port ${PORT}`));

