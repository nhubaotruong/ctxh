module.exports = app => {
    const morgan = require('morgan');
    app.use(morgan('dev'));

    const helmet = require('helmet');
    app.use(helmet());

    const { expressCspHeader, INLINE, NONE, SELF, NONCE, EVAL } = require('express-csp-header');
    app.use(expressCspHeader({
        directives: {
            'default-src': [SELF],
            'script-src': [SELF, INLINE, EVAL],
            'style-src': [SELF, INLINE],
            // 'img-src': ['data:', 'images.com'],
            'worker-src': [SELF, INLINE],
            'block-all-mixed-content': false
        }
    }))


    const compression = require('compression');
    app.use(compression());

    // const cors = require('cors');
    // app.use(cors());

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