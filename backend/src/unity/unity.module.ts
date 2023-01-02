import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnityRepository } from './repository/unity.repository';
import { UnityController } from './unity.controller';
import { UnityService } from './unity.service';

@Module({
  controllers: [UnityController],
  providers: [UnityService, UnityRepository, PrismaService],
})
export class UnityModule {}
