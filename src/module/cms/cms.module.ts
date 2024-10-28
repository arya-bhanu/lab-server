import { Module } from '@nestjs/common';
import { CmsController } from 'src/controller/cms/cms.controller';
import { CmsService } from 'src/service/cms/cms.service';

@Module({
  controllers: [CmsController],
  providers: [CmsService],
})
export class CmsModule {}
