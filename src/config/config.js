module.exports = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  repositoryMode: true,
  define: {
    timestamps: true
  },
  ssl: true,
  sslMode: true,
  dialectOptions: {
    ssl: {
      "require": true
    }
  }
}