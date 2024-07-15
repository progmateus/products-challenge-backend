import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { userMap } from "../../mapper/userMap";
import { IUserResponseDTO } from "../../dtos/IUserResponseDTO";

@injectable()
class GetUserProfileUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: number): Promise<IUserResponseDTO> {

    const user = await this.usersRepository.findById(id);

    return userMap.toDTO(user);
  }
}
export { GetUserProfileUseCase }