# Node.js 18 sürümünü temel imaj olarak kullan
FROM node:18-alpine

# Çalışma dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kaynak kodlarını kopyala
COPY . .

# Uygulamayı derle
RUN npm run build

# Nginx'i yükle ve yapılandır
FROM nginx:alpine
COPY --from=0 / /usr/share/nginx/html
EXPOSE 80

# Nginx'i başlat
CMD ["nginx", "-g", "daemon off;"]
