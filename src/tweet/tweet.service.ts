import { Injectable } from '@nestjs/common';
import { Prisma, Tweet, User } from '@prisma/client';
import { UsersController } from 'src/users/users.controller';
import { PrismaService } from '../prisma.service';
import { CreateTweetDto } from './create.tweet.dto';

@Injectable()
export class TweetService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.TweetCreateInput): Promise<Tweet> {
    const tweet = await this.db.tweet.create({ data });

    return tweet;
  }

  async deleteOneTweet(where: Prisma.TweetWhereUniqueInput): Promise<Tweet> {
    return this.db.tweet.delete({ where });
  }
}
