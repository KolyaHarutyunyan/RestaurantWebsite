import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerUtil } from './util';
import * as session from 'express-session';
import { PORT } from './constants';
// import { AllExceptionsFilter } from './all-exception.filters';

async function bootstrap() {
  const swaggerUtil = new SwaggerUtil();
  const app = await NestFactory.create(AppModule);

  //Middleware
  app.enableCors();
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  //swagger documentation setup
  swaggerUtil.setup(app);

  await app.listen(PORT).then(() => console.log(`server running on port ${PORT}`));
}
bootstrap();
