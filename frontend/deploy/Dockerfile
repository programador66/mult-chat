# Imagem de Origem
FROM node:12-buster-slim
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
ADD ./frontend/package*.json  /app/
# Instalando dependências da aplicação e armazenando em cache.
RUN npm install && npm install react-scripts@3.3.1 -g --silent
COPY . .
# Inicializa a aplicação
CMD npm run start
