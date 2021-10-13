import {
  Body,
  Controller,
  Post,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Tweet } from '.prisma/client';
import { TweetService } from './tweet.service';
import { AuthGuard } from '@nestjs/passport';

/* A linha baixo Procura quem esta gerenciando o jwt, no nosso caso o nosso strategy.ts*/
@UseGuards(AuthGuard('jwt'))
@Controller('tweet')
export class TweetController {
  constructor(private service: TweetService) {}

  @Post()
  create(@Body() data: Tweet): Promise<Tweet> {
    return this.service.create(data);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return this.service.deleteOneTweet({ id: Number(id) });
  }
}
