import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TweetModule } from './tweet/tweet.module';
import { FollowModule } from './follow/follow.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [UsersModule, AuthModule, TweetModule, FollowModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
