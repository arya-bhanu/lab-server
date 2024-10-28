export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  DATABASE_URL: process.env.DATABASE_URL,
  enabled_client: process.env.ENABLED_CLIENT,
});
