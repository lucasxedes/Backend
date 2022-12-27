import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnityController } from './unity/unity.controller';
import { UnityService } from './unity/unity.service';
import { UnityModule } from './unity/unity.module';

@Module({
  imports: [UnityModule],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}
