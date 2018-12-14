import { NestFactory } from '@nestjs/core';
import { RootModule } from './modules/root.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  // await app.listen(3000);
  await app.listen(app.get(ConfigService).port);
}
bootstrap();
