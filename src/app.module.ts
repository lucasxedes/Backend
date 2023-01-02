import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnityModule } from './unity/unity.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UnityModule, PrismaModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
