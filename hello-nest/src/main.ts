import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  // 要给 create 方法传入 NestExpressApplication 的泛型参数才有 useStaticAssets这些方法
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static'
  });
  await app.listen(3000);
}
bootstrap();
