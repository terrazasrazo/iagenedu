const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routes/workshops')(app);

const PORT = process.env.PORT || 6600;
app.listen(PORT);
