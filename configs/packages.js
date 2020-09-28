module.exports = app => {
    const compression = require('compression');
    app.use(compression());

    const helmet = require('helmet');
    app.use(helmet());

    const bb = require('express-busboy');
    bb.extend(app);

    const session = require('express-session');
    const sessionOptions = {
        secret: '8K^eIL0N&S9f!Eoidqy3K7z0$#$Mg6pIJcJP5A7Bbt9RBC@!CVd*IYLVI0JFKSvMu4*P6rovPN^Uww!&8USo4tsEYG7C8CaX#pJ5',
        key: 'ctxh',
        resave: true,
        saveUninitialized: true,
        unset: 'destroy'
    };

    app.use(session(sessionOptions));

    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
}