const express = require('express');
const path = require('path');
const promptConfig = require('./routes/routesconfig');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

promptConfig.routesConfig(app)
app.listen(PORT, function () {
    console.log('listening at port 5000')
});



