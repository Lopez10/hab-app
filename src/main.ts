import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(port: number) {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Server listen on port ${port}`);
}
bootstrap(3000);
