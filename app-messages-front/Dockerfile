# Usa uma imagem oficial do Node
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que o app vai usar
EXPOSE 3000

# Comando padrão para rodar o app
CMD ["npm", "start"]
