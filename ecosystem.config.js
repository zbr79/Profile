module.exports = {
  apps: [
    {
      name: "profile-backend",
      cwd: "/home/ubuntu/Profile/backend",
      script: "npm",
      args: "run start",
      interpreter: "none",
      env: {
        PORT: 5000,
        NODE_ENV: "production"
      }
    }
  ]
};
