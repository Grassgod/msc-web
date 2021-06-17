const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://34.105.223.74:8999/',
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
      })
    );
  };