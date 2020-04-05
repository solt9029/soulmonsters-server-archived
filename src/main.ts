import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

const { CORS_ORIGIN } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: CORS_ORIGIN,
  });

  await app.listen(3000);
}
bootstrap();
