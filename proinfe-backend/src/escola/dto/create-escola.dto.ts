import {
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEscolaDto {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  nome: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  cidade: string;

  @IsString()
  @MinLength(2)
  @MaxLength(2)
  uf: string;
}
