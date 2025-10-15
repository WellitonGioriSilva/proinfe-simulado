import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Escola {
  @PrimaryColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  cidade: string;
  @Column()
  uf: string;
}
