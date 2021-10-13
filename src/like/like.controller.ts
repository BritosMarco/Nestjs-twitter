import {
  Body,
  Controller,
  Post,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Like } from '.prisma/client';
import { LikeService } from './like.service';
import { AuthGuard } from '@nestjs/passport';

/* A linha baixo Procura quem esta gerenciando o jwt, no nosso caso o nosso strategy.ts*/
@UseGuards(AuthGuard('jwt'))
@Controller('like')
export class LikeController {
  constructor(private service: LikeService) {}

  @Post()
  create(@Body() data: Like): Promise<Like> {
    return this.service.create(data);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    return this.service.deleteOneLike({ id: Number(id) });
  }
}
