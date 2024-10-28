import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cms as CmsModel } from '@prisma/client';

@Injectable()
export class CmsService {
  constructor(private prisma: PrismaService) {}
  async post({ body, section }: Pick<CmsModel, 'section' | 'body'>) {
    return await this.prisma.cms.create({ data: { body, section } });
  }
  async get({ section }: Pick<CmsModel, 'section'>) {
    return await this.prisma.cms.findUnique({ where: { section } });
  }
  async getAll() {
    return await this.prisma.cms.findMany();
  }
}
