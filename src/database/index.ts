
import { SequelizeOptions, Sequelize } from "sequelize-typescript";
import dbConfig from "../config/config"
import { User } from "../modules/accounts/infra/sequelize/models/User";
import { UsersTokens } from "../modules/accounts/infra/sequelize/models/UsersTokens";
import { Product } from "../modules/products/infra/sequelize/Models/Product";

const dbOptions = <SequelizeOptions>dbConfig;
dbOptions.dialectModule = require("pg")

const sequelize = new Sequelize(dbOptions);

const models = [
  User,
  UsersTokens,
  Product
];

sequelize.addModels(models);

export default sequelize;
