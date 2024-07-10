import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}