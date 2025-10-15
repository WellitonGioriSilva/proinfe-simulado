import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove chaves que estão no dto
      forbidNonWhitelisted: true, // Retorna erro se tiver chaves que não estão no dto
      transform: true, // Converte o tipo da requisição para o tipo do dto - ex: string para number
    }),
  );

  const documentBuilderConfig = new DocumentBuilder()
    .setTitle('API Escola')
    .setDescription('API para gerenciar escolas')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilderConfig);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ['http://localhost:3000'], // frontends permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // métodos permitidos
    // credentials: true, // se precisar enviar cookies
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
