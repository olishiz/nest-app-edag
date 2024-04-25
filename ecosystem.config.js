// ecosystem.config.js
// this is for configuring if using PM2 instead
module.exports = {
  apps: [
    {
      name: 'nestjs-app',
      script: './dist/main.js',
      cwd: '/dist/main.js',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
