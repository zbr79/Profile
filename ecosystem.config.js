module.exports = {
  apps: [
    {
      name: "profile-frontend",
      cwd: "/home/ubuntu/Profile/frontend",
      script: "npm",
      args: "run start",
      interpreter: "none",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    },
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
