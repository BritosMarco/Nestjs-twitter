import { IsOptional, IsNumber, IsString, IsDate } from 'class-validator';

export class CreateTweetDto {
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsNumber()
  userId?: number;

  @IsNumber()
  likes: number[];

  @IsString()
  text: string;
}
