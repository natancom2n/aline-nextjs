FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Instala ferramentas básicas
RUN apk add --no-cache bash git

# Cria usuário não-root (boa prática)
RUN addgroup -g 1001 app && adduser -G app -u 1001 -D app
USER app

# Mantém o container ativo
CMD ["sh"]
