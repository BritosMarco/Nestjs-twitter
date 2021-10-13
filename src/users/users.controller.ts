import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { User } from '.prisma/client';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './users.dto';

/* A linha baixo Procura quem esta gerenciando o jwt, no nosso caso o nosso strategy.ts*/
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() data: User): Promise<User> {
    return this.service.create(data);
  }

  @Get(':username')
  findUnique(@Param('username') username: string): Promise<User> {
    return this.service.findUnique(username);
  }
}

/*  @Get()
  findMany(): Promise<User[]> {
    return this.service.findMany();
  }
 */
