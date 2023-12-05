const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

app.use(bodyParser.json())
app.use(cors())
app.use("/static", express.static('assets'));
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./routes/workshops')(app);
require('./routes/lightnings')(app);
require('./routes/resources')(app);
require('./routes/mainsessions')(app);
require('./routes/keywords')(app);
require('./routes/users')(app);

const PORT = process.env.PORT || 6600;
app.listen(PORT);
