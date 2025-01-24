# Используем официальный образ Node.js версии 18
FROM node:18 AS builder

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

# Используем официальный образ Nginx
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=builder /app/build /usr/share/nginx/html

# Копируем конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
