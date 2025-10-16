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

  // Entidade aluno
  // ✅ Uma escola tem muitos alunos
  //@OneToMany(() => Aluno, (aluno) => aluno.escola)
  //alunos: Aluno[];
  
  // Entidade escola
  // ✅ FK para escola
  //@ManyToOne(() => Escola, (escola) => escola.alunos, { onDelete: 'CASCADE' })
  //@JoinColumn({ name: 'escola_id' }) // nome da coluna FK no banco
  //escola: Escola;

  //@Column()
  //escola_id: number;

  // Vai no module de escola exports: [TypeOrmModule], // 👈 permite que outros módulos (como Alunos) usem Escola
  // Vai no module de aluno imports: [TypeOrmModule.forFeature([Aluno, Escola])], // 👈 registra as duas

  // Sempre registar no app.ts
}
