import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ModulService } from 'src/service/modul/modul.service';
import { ModulBackoffice as ModulBackofficeModel } from '@prisma/client';

@Controller('backoffice/modul')
export class ModulController {
  constructor(private modulService: ModulService) {}
  @Get()
  async getAllModul() {
    return await this.modulService.findAll();
  }

  @Delete(':id')
  async deleteModul(@Param('id', ParseIntPipe) id: number) {
    return await this.modulService.deleteOne(id);
  }

  @Post()
  async createModul(@Param() data: Omit<ModulBackofficeModel, 'id'>) {
    return await this.modulService.addOne(data);
  }
}
