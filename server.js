/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();

// Middleware para redirecionar www para o domínio raiz
app.use((req, res, next) => {
    if (req.headers.host.startsWith('www.')) {
        var newHost = req.headers.host.slice(4);
        return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
    }
    next();
});

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);