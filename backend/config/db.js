const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'lerosier',
  password: '',
  database: 'breizh-travel',
  logging: false,
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database successful!');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1); // Arrêter l'application si la connexion échoue
  }
};

testConnection();

module.exports = sequelize;
