import { Get, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { async } from 'rxjs/internal/scheduler/async';

const messages= [{
  message: 'hello'
},
{
  message: 'hello2'
},
{
  message: 'hell03'
}]

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home')
  root(): string {
    //return this.appService.root();
    return messages.toString();
  }

  @Post('/home')
  create(query) {
    messages.push(query);
    return 'This action adds a new cat';
  }

}
