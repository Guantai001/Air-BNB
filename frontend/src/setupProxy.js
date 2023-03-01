const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/airbnbs', createProxyMiddleware({ target: 'http://127.0.0.1:9292', changeOrigin: true }));
};
