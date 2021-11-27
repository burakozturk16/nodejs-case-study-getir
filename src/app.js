const express = require('express');
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const config = require('./config/config');
const morgan = require('./config/morgan');
const routes = require('./routes/v1');
const { response, responseType } = require('./utils/response');

const app = express();

Sentry.init({
  dsn: 'https://7aa27fa44a054474ba5abe8dbb27c1da@o1078859.ingest.sentry.io/6083316',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/v1', routes);

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  response(res, responseType.NOT_FOUND);
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    response(res, responseType.BAD_REQUEST);
  }

  next();
});

module.exports = app;
