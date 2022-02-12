module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '192.168.1.82'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'vaxim-api'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'mysecretpassword'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
