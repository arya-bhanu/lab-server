import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { PrismaService } from './service/prisma.service';
import { PrismaModule } from './module/prisma/prisma.module';
import { CmsModule } from './module/cms/cms.module';
import { CmsController } from './controller/cms/cms.controller';
import { CmsService } from './service/cms/cms.service';
import { ModulController } from './controller/modul/modul.controller';
import { ModulModule } from './module/modul/modul.module';
import { ModulService } from './service/modul/modul.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    CmsModule,
    ModulModule,
  ],
  controllers: [AppController, CmsController, ModulController],
  providers: [AppService, PrismaService, CmsService, ModulService],
})
export class AppModule {}
