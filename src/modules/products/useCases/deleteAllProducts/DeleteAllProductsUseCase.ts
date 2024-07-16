import { inject, injectable } from "tsyringe";
import { ProductsRepository } from "../../infra/sequelize/repositories/ProductsRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class DeleteAllProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository
  ) { }

  async execute(): Promise<void> {
    await this.productsRepository.deleteAll();
  }
}
export { DeleteAllProductsUseCase }