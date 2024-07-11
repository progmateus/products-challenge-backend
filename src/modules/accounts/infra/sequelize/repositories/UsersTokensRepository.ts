import sequelize from "../../../../../database";
import { Repository } from "sequelize-typescript";
import { IUsersTokensRepository } from "../../../repositories/IUsersTokensRepository";
import { ICreateUserTokenDTO } from "../../../dtos/ICreateUserTokenDTO";
import { UsersTokens } from "../models/UsersTokens";

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UsersTokens>

  constructor() {
    this.repository = sequelize.getRepository(UsersTokens)
  }
  async create({ refreshToken, expiresDate, userId }: ICreateUserTokenDTO): Promise<UsersTokens> {
    return await this.repository.create({
      refreshToken, expiresDate, userId
    })
  }
  async findByrefreshToken(refreshToken: string): Promise<UsersTokens> {
    return this.repository.findOne({
      where: {
        refreshToken
      }
    })
  }

}
export { UsersTokensRepository }