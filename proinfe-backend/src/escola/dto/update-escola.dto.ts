import { PartialType } from '@nestjs/swagger';
import { CreateEscolaDto } from './create-escola.dto';

export class UpdateEscolaDto extends PartialType(CreateEscolaDto) {}
