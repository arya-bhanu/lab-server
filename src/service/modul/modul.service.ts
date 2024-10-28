import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ModulService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return await this.prisma.modulBackoffice.findMany();
  }
  async deleteOne(id: number) {
    return await this.prisma.modulBackoffice.delete({
      where: {
        id,
      },
    });
  }
}
