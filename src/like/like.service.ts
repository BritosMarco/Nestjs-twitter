import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Like } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateLikeDto } from './like.dto';

@Injectable()
export class LikeService {
  constructor(private db: PrismaService) {}

  async create(data: CreateLikeDto, user: number): Promise<Like> {
    return await this.db.like.create({
      data: {
        ...data,
        userId: user,
      },
    });
  }

  async deleteOneLike(id: number, user: number): Promise<Like> {
    const userLike = await this.db.like.findUnique({
      where: { id },
      select: {
        userId: true,
      },
    });
    if (!userLike) {
      throw new NotFoundException();
    }
    if (userLike.userId != user) {
      throw new UnauthorizedException();
    }
    return this.db.like.delete({ where: { id } });
  }
}
