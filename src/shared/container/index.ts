import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/sequelize/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUsersTokensRepository";
import { UsersTokensRepository } from "../../modules/accounts/infra/sequelize/repositories/UsersTokensRepository";

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);