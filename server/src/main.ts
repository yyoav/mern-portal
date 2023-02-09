import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import 'reflect-metadata';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  await app.init();

  // global configuration definition
  const listenPort = config.get<number>('LISTENING_PORT', 3000);
  Logger.log(`[bootstrap] Running ${process.env.ENV || 'default'} environment configuration`);
  Logger.log(`[bootstrap] Application started, listening to port ${listenPort}`);

  await app.listen(listenPort);
}

bootstrap();
