const express = require('express');
const app = express();

app.use(express.static('client/dist'));

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

