import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ModulService } from 'src/service/modul/modul.service';

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
}
