FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Expõe a porta da API
EXPOSE 4000

# Comando para iniciar o servidor
CMD ["node", "src/index.js"]