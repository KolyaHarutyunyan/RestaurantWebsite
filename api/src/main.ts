import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './util/swagger';
import * as session from 'express-session';
import { PORT } from './app/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      preflightContinue: false,
    },
  });

  //Middleware
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
 setupSwagger(app);

  
  await app
    .listen(PORT)
    .then(() => console.log(`server running on port ${PORT}`));
}
bootstrap();
