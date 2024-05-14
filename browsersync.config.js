module.exports = {
  files: ['./public/manifest.json'],
  server: {
    baseDir: './public',
  },
  middleware: [
    function (_req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

      next();
    },
  ],
};
