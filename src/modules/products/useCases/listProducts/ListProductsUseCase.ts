import { inject, injectable } from "tsyringe";
import { ProductsRepository } from "../../infra/sequelize/repositories/ProductsRepository";



@injectable()
class ListProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository
  ) { }

  async execute(params?: string) {
    return await this.productsRepository.list(params)
  }
}
export { ListProductsUseCase }