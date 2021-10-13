import { Injectable } from '@nestjs/common';
import { Prisma, Like, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LikeService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.LikeCreateInput): Promise<Like> {
    const like = await this.db.like.create({ data });

    return like;
  }

  async deleteOneLike(where: Prisma.LikeWhereUniqueInput): Promise<Like> {
    return this.db.like.delete({ where });
  }
}
