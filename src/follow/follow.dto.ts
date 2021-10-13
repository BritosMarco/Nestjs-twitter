import { IsOptional, IsNumber } from 'class-validator';

export class CreateFollowDto {
  @IsOptional()
  @IsNumber()
  userId?: number;

  @IsOptional()
  @IsNumber()
  followedId?: number;
}
