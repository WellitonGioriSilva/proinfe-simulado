import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscolaModule } from '../escola/escola.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_DATABASE || 'db_escola',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    EscolaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
