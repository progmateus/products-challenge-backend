import { Model } from "sequelize-typescript";
import { IProductDTO } from "../dtos/IProductDTO";
import { Product } from "../infra/sequelize/Models/Product";
import { IFakeProductDTO } from "../dtos/IFakeProductDTO";

interface IProductsRepository {
  create(data: Omit<IProductDTO, "id">): Promise<Product>;
  findById(id: number): Promise<Product>
  update(data: Omit<IProductDTO, | "userId">): Promise<void>
  delete(id: number): Promise<void>
  findByIdAndUserId(id: number, userId: number): Promise<Product>
  list(params: string): Promise<Product[]>
  createMany(products: IFakeProductDTO[]): Promise<Product[]>
}

export { IProductsRepository }