import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IProductDTO } from "../../dtos/IProductDTO";
import { ProductsRepository } from "../../infra/sequelize/repositories/ProductsRepository";
import { Product } from "../../infra/sequelize/Models/Product";

@injectable()
class UpdateProductUseCase {

  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository
  ) { }

  async execute({ id, name, description, price }: Omit<IProductDTO, "userId">): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError("ERR_PRODUCT_NOT_FOUND");
    }

    await this.productsRepository.update({
      id,
      name,
      description,
      price
    })

    return product.reload();
  }
}
export { UpdateProductUseCase }