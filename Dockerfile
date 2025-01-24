# Используем официальный образ Node.js версии 18
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock в рабочую директорию
COPY package*.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем остальные файлы приложения
COPY . .

# Строим приложение
RUN yarn build

# Устанавливаем Nginx для раздачи статических файлов
RUN apt-get update && apt-get install -y nginx

# Копируем конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Удаляем ненужные файлы для уменьшения размера образа
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
