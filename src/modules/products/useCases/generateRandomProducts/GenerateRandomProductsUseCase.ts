import { inject, injectable } from "tsyringe";
import { faker } from '@faker-js/faker';
import { ProductsRepository } from "../../infra/sequelize/repositories/ProductsRepository";
import { Product } from "../../infra/sequelize/Models/Product";

export function createRandomProduct() {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
}

@injectable()
class GenerateRandomProductsUseCase {

  constructor(
    @inject("ProductsRepository")
    private productsRepository: ProductsRepository
  ) { }

  async execute(userId: number): Promise<Product[]> {
    const fakeProducts = faker.helpers.multiple(createRandomProduct, {
      count: 50,
    });

    return await this.productsRepository.createMany(
      fakeProducts.map(({ name, description, price }) => {
        return ({
          name,
          description,
          price: +price,
          userId
        })
      })
    )
  }

}
export { GenerateRandomProductsUseCase }