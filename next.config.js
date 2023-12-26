module.exports = {
  // Настройки прокси для решения проблем с CORS
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
      {
        source: '/:path*',
        destination: '/pageNotFound', // Перенаправляем все остальные запросы на страницу 404
      },
    ];
  },

  // Настройки для компонента next/image
  images: {
    domains: ["www.shutterstock.com"], // Домен сайта
  },
};