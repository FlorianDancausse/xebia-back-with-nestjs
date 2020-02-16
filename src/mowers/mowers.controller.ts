/** nestjs */
import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common';
/** end nestjs */

/** service */
import { MowersService } from './mowers.service';
/** end service */

@Controller('mowers')
export class MowersController {
    constructor(private readonly mowersService: MowersService) {}

    @Post('instructions')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      return this.mowersService.getInstructions(file);
    }
}
