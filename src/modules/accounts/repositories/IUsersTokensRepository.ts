import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UsersTokens } from "../infra/sequelize/models/UsersTokens";

interface IUsersTokensRepository {
  create(data: ICreateUserTokenDTO): Promise<UsersTokens>;
  findByrefreshToken(refreshToken: string): Promise<UsersTokens>
}

export { IUsersTokensRepository }