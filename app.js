const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = 3000;

app.fs = fs;
app.path = path;
app.mongodb = `mongodb+srv://ctxh:vqrAmJBytc7FsZXG@ctxh.bkxra.mongodb.net/ctxh?retryWrites=true&w=majority`;

app.modulePath = path.join(__dirname, 'modules');

app.use(express.static(path.join(__dirname, 'public')));

//webpack
// const webpack = require('webpack');
// const middleware = require('webpack-dev-middleware');
// const compiler = webpack(require('./webpack.config')());

// app.use(middleware(compiler, {
//     noInfo: true,
//     publicPath: '/'
// }));

require('./configs/common')(app);
require('./configs/packages')(app);
require('./configs/database')(app);

app.loadModules();

app.get('/api/test', (req, res) => {
    res.send({ result: 'success' });
});

// development
// app.get('*', (req, res) => {
//     const filename = path.join(compiler.outputPath, 'index.html');
//     compiler.outputFileSystem.readFile(filename, (err, result) => {
//         if (err) {
//             return next(err);
//         }
//         res.set('content-type', 'text/html');
//         res.send(result);
//         res.end();
//     });
// });

// production

// app.get('/*.js', (req, res) => {
//     res.sendFile('/public' + req.originalUrl);
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('*', (req, res) => {
//     console.log(req.originalUrl);
//     res.sendFile(req.originalUrl);
// });

app.listen(port, () => {
    console.log('App started');
});

module.exports = app;