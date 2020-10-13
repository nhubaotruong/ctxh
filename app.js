const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.port = 3000;

app.fs = fs;
app.path = path;
app.mongodb = `mongodb+srv://ctxh:vqrAmJBytc7FsZXG@ctxh.bkxra.mongodb.net/ctxh?retryWrites=true&w=majority`;

// app.modulePath = path.join(__dirname, 'modules');
// const serveStatic = require('serve-static');
// app.use('/public', serveStatic(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));

require('./configs/common')(app);
require('./configs/packages')(app);
require('./configs/database')(app);

app.fs.readdirSync('./models').forEach(file => {
    require(app.path.join(__dirname, 'models', file))(app);
});

app.fs.readdirSync('./controllers').forEach(file => {
    require(app.path.join(__dirname, 'controllers', file))(app);
});

app.get('/api/test', (req, res) => {
    res.send({ result: 'success' });
});

// const sirv = require('sirv');
// const frontEnd = sirv(path.join(__dirname, 'public', 'build'), {
//     maxAge: 31536000, // 1Y
//     immutable: true
// });

// app.use(frontEnd);

app.listen(app.port, () => {
    console.log('App started');
});

module.exports = app;