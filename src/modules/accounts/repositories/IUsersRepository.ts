import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/sequelize/models/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: number): Promise<User>
  findByEmail(email: string): Promise<User>
}

export { IUsersRepository }