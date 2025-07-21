/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройки для Netlify
  trailingSlash: true,
  
  // Оптимизация изображений
  images: {
    unoptimized: true, // Для статического экспорта
  },
  
  // Отключаем строгие проверки ESLint для сборки
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Отключаем строгие проверки TypeScript для сборки
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Оптимизация сборки
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
