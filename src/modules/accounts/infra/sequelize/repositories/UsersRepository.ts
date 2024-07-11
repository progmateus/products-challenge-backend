import { IUsersRepository } from "../../../repositories/IUsersRepository";
import sequelize from "../../../../../database";
import { User } from "../models/User";
import { Repository } from "sequelize-typescript";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = sequelize.getRepository(User)
  }
  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    await this.repository.create({
      name, email, password
    })
  }
  async findById(id: string): Promise<User> {
    return this.repository.findByPk(id);
  }
  async findByEmail(email: string): Promise<User> {
    return await this.repository.findOne({
      where: {
        email
      }
    })
  }

}
export { UsersRepository }