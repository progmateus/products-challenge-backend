import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { hash } from "bcryptjs";
import { IProductDTO } from "../../dtos/IProductDTO";
import { ProductsRepository } from "../../infra/sequelize/repositories/ProductsRepository";
import { Product } from "../../infra/sequelize/Models/Product";

@injectable()
class CreateProductUseCase {

  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository
  ) { }

  async execute({ name, description, userId, price }: Omit<IProductDTO, "id">): Promise<Product> {

    return await this.productsRepository.create({
      name,
      description,
      userId,
      price
    })
  }
}
export { CreateProductUseCase }