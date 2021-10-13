import { IsOptional, IsNumber } from 'class-validator';

export class CreateLikeDto {
  @IsOptional()
  @IsNumber()
  tweetId?: number;

  @IsOptional()
  @IsNumber()
  userId?: number;
}
