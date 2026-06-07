// PM2 process file — keeps Next.js running 24/7 on the VPS
// Usage on the server: pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "codewave-studio",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/var/www/codewave-studio",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
