`use strict`;

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const ClothesModel = require('./src/models/clothes');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const clothesTable = ClothesModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  clothes: clothesTable,
};
