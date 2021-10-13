import {
  IsString,
  Length,
  IsNotEmpty,
  IsNumber,
  IsDate,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 30)
  password: string;

  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(10, 50)
  email: string;

  @IsString()
  @Length(2, 80)
  img: string;

  @IsString()
  @Length(2, 30)
  birth: string;

  @IsString()
  @Length(2, 162)
  bio: string;

  @IsDate()
  CreatedAd: Date;

  @IsDate()
  UpdatedAd: Date;

  @IsOptional()
  @IsNumber({}, { each: true })
  tweets: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  follows: number[];

  @IsOptional()
  @IsNumber({}, { each: true })
  likes: number[];
}
