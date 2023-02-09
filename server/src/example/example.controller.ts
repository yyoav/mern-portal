import { InternalServerErrorException } from '@nestjs/common';
import { Controller, Get, HttpCode } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('api')
export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService) { }

  @Get('hello')
  @HttpCode(200)

  async getHello(): Promise<string> {
    try {
      return await this.exampleService.getHello();
    } catch (err) {
      const error = err as Error;
      throw new InternalServerErrorException(`Error: ${error.message}`);
    }
  }
}
