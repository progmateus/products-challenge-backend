
import { SequelizeOptions, Sequelize } from "sequelize-typescript";
import dbConfig from "../config/config"
import { User } from "../modules/accounts/infra/sequelize/models/User";
import { UsersTokens } from "../modules/accounts/infra/sequelize/models/UsersTokens";

const dbOptions = <SequelizeOptions>dbConfig;
dbOptions.dialectModule = require("pg")

const sequelize = new Sequelize(dbOptions);

const models = [
  User,
  UsersTokens
];

sequelize.addModels(models);

export default sequelize;
