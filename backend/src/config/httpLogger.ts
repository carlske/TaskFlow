import PinoHttp from 'express-pino-logger';

const httpLogger = PinoHttp({
  level: 'info',
});

export default httpLogger;