import { Module } from '@nestjs/common';
import { CmsController } from 'src/controller/cms-home/cms-home.controller';
import { CmsService } from 'src/service/cms-home/cms.-homeservice';

@Module({
  controllers: [CmsController],
  providers: [CmsService],
})
export class CmsModule {}
