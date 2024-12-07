import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cms as CmsModel } from '@prisma/client';
import { CmsService } from 'src/service/cms-home/cms.-homeservice';

@Controller('cms/home')
export class CmsController {
  constructor(private cmsService: CmsService) {}

  @Get('all')
  async findAllContentHome() {
    return await this.cmsService.getAll();
  }

  @Post('hero')
  async createHero(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({ section: 'hero', body });
  }
  @Get('hero')
  async getHero() {
    return await this.cmsService.get({ section: 'hero' });
  }

  @Post('benefits')
  async createBenefits(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({ section: 'benefits', body });
  }
  @Get('benefits')
  async getBenefits() {
    return await this.cmsService.get({ section: 'benefits' });
  }

  @Post('program-dimension/program')
  async createProgram(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({
      section: 'program-dimension/program',
      body,
    });
  }
  @Get('program-dimension/program')
  async getProgramDimensionProgam() {
    return await this.cmsService.get({ section: 'program-dimension/program' });
  }

  @Post('program-dimension/card-carrier')
  async createProgramCardCarrier(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({
      section: 'program-dimension/card-carrier',
      body,
    });
  }
  @Get('program-dimension/card-carrier')
  async getProgramDimensionCardCarrier() {
    return await this.cmsService.get({
      section: 'program-dimension/card-carrier',
    });
  }

  @Post('super-class')
  async createSuperClass(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({
      section: 'super-class',
      body,
    });
  }
  @Get('super-class')
  async getSuperClass() {
    return await this.cmsService.get({
      section: 'super-class',
    });
  }

  @Post('user-story')
  async createUserStory(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({
      section: 'user-story',
      body,
    });
  }
  @Get('user-story')
  async getUserStory() {
    return await this.cmsService.get({
      section: 'user-story',
    });
  }

  @Post('partners')
  async createPartners(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({
      section: 'partners',
      body,
    });
  }
  @Get('partners')
  async getPartners() {
    return await this.cmsService.get({
      section: 'partners',
    });
  }

  @Post('news-letter-subscription')
  async createNewsLetterSubscription(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({
      section: 'news-letter-subscription',
      body,
    });
  }
  @Get('news-letter-subscription')
  async getNewsLetterSubscription() {
    return await this.cmsService.get({
      section: 'news-letter-subscription',
    });
  }

  @Post('footer/social-media')
  async createFooterSocialMedia(@Body() { body }: Pick<CmsModel, 'body'>) {
    return await this.cmsService.post({
      section: 'footer/social-media',
      body,
    });
  }
  @Get('footer/social-media')
  async getFooterSocialMedia() {
    return await this.cmsService.get({
      section: 'footer/social-media',
    });
  }
}
