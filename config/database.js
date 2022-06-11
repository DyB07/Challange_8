const secretdata = {
    JWT_SIGNATURE_KEY: 'Rahasia',
    DB_USER: 'ngnlwiwtopofwg',
    DB_PASSWORD: 'f406179f928092ed71d83c6455456105797ec2402f1b24df38dc8534b5f1f7aa',
    DB_NAME: 'd4nv4nt2q61b23',
    DB_HOST: 'ec2-54-165-178-178.compute-1.amazonaws.com',
    DB_PORT: '5432'
}

const {
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = "bcr",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
} = secretdata;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },

  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },

  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },

  }
}
