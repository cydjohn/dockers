const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(5001, function () {
    console.log('Web application is listening on port 5001');
});
