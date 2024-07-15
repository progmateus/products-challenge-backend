import { IProductsRepository } from "../../../repositories/IProductsRepository";
import sequelize from "../../../../../database";
import { Model, Repository } from "sequelize-typescript";
import { IProductDTO } from "../../../dtos/IProductDTO";
import { Product } from "../Models/Product";
import { Op, Sequelize } from "sequelize";
import { IFakeProductDTO } from "../../../dtos/IFakeProductDTO";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>

  constructor() {
    this.repository = sequelize.getRepository(Product)
  }

  async create({ name, description, userId, price }: Omit<IProductDTO, "id">): Promise<Product> {
    return await this.repository.create({
      name, description, userId, price
    })
  }
  async findById(id: number): Promise<Product> {
    return await this.repository.findByPk(id)
  }

  async update({ id, name, description, price }: Omit<IProductDTO, | "userId">): Promise<void> {
    await this.repository.update({
      name,
      description,
      price
    },
      {
        where: {
          id
        }
      })
  }

  async delete(id: number): Promise<void> {
    await this.repository.destroy({ where: { id } })
  }


  async list(params = ""): Promise<Product[]> {
    console.log("PARAMS: ", params)
    return await this.repository.findAll({
      where: {
        [Op.or]: {
          name: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("name")),
            "LIKE",
            `%${params.toLowerCase().trim()}%`
          ),
          description: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("description")),
            "LIKE",
            `%${params.toLowerCase().trim()}%`
          )
        }
      }
    })
  }
  async findByIdAndUserId(id: number, userId: number): Promise<Product> {
    return this.repository.findOne({
      where: {
        id,
        userId
      }
    })
  }

  async createMany(products: any[]): Promise<Product[]> {
    return await this.repository.bulkCreate(products)
  }

}
export { ProductsRepository }