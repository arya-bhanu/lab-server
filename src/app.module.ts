import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { PrismaService } from './service/prisma.service';
import { PrismaModule } from './module/prisma/prisma.module';
import { CmsModule } from './module/cms-home/cms-home.module';
import { CmsController } from './controller/cms-home/cms-home.controller';
import { CmsService } from './service/cms-home/cms.-homeservice';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    CmsModule,
  ],
  controllers: [AppController, CmsController],
  providers: [AppService, PrismaService, CmsService],
})
export class AppModule {}
