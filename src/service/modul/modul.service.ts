import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ModulBackoffice as ModulBackofficeModel } from '@prisma/client';

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
  async addOne(data: Omit<ModulBackofficeModel, 'id'>) {
    return await this.prisma.modulBackoffice.create({ data });
  }
  async performOperations() {
    for (let i = 1; i <= 5; i++) {
      const firstRow = await this.prisma.modulBackoffice.findFirst();
      if (i % 2 === 1) {
        if (firstRow) {
          await this.prisma.modulBackoffice.delete({
            where: { id: firstRow.id }, // Delete by the fetched ID
          });
          console.log(
            `Deleted the first row (ID: ${firstRow.id}) on iteration ${i}`,
          );
        } else {
          console.log(`No rows to delete on iteration ${i}`);
        }
      } else {
        if (firstRow) {
          await this.prisma.modulBackoffice.update({
            where: { id: firstRow.id }, // Update by the fetched ID
            data: {
              code: '1231234-123-443',
              name: 'updated-experiment',
              active: 'ACTIVE',
            },
          });
          console.log(
            `Updated the first row (ID: ${firstRow.id}) on iteration ${i}`,
          );
        } else {
          console.log(`No rows to update on iteration ${i}`);
        }
      }

      await this.delay(1000);
    }
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
