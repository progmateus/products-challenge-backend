import { instanceToInstance } from "class-transformer"
import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/sequelize/models/User";

class userMap {
  static toDTO({
    id,
    name,
    email

  }: User): IUserResponseDTO {
    const user = instanceToInstance({
      id,
      name,
      email,
    })

    return user
  }
}

export { userMap };