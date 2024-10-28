import { Module } from '@nestjs/common';
import { ModulController } from 'src/controller/modul/modul.controller';
import { ModulService } from 'src/service/modul/modul.service';

@Module({
  controllers: [ModulController],
  providers: [ModulService],
})
export class ModulModule {}
