import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEscolaDto } from './dto/create-escola.dto';
import { UpdateEscolaDto } from './dto/update-escola.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Escola } from './entities/escola.entity';

@Injectable()
export class EscolaService {
  constructor(
    @InjectRepository(Escola)
    private readonly escolaRepository: Repository<Escola>,
  ) {}
  create(createEscolaDto: CreateEscolaDto) {
    const escola = this.escolaRepository.create(createEscolaDto);
    return this.escolaRepository.save(escola);
  }

  async findAll() {
    try {
      const escolas = await this.escolaRepository.find();
      return escolas;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    const escola = await this.escolaRepository.findOne({
      where: { id },
    });

    if (!escola) throw new NotFoundException('Escola not found!');

    return escola;
  }

  async update(id: number, updateEscolaDto: UpdateEscolaDto) {
    const escola = await this.escolaRepository.preload({
      id: +id,
      ...updateEscolaDto,
    });

    if (!escola) {
      throw new NotFoundException('Escola not found!');
    }

    return this.escolaRepository.save(escola);
  }

  async remove(id: number) {
    const escola = await this.findOne(id);
    return this.escolaRepository.remove(escola);
  }
}
