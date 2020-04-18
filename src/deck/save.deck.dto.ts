import { IsNotEmpty, MaxLength } from 'class-validator';

export class SaveDeckDto {
  @IsNotEmpty()
  @MaxLength(64)
  name: string;
}
