import { Module } from '@nestjs/common';
import { EscolaService } from './escola.service';
import { EscolaController } from './escola.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escola } from './entities/escola.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Escola])],
  controllers: [EscolaController],
  providers: [EscolaService],
})
export class EscolaModule {}
