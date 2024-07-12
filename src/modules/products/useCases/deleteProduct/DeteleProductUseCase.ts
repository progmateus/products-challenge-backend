import { inject, injectable } from "tsyringe";
import { ProductsRepository } from "../../infra/sequelize/repositories/ProductsRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository
  ) { }

  async execute(id: number): Promise<void> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError("ERR_PRODUCT_NOT_FOUND", 404);
    }

    await this.productsRepository.delete(id);
  }
}
export { DeleteProductUseCase }