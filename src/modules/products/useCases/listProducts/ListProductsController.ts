import { container, inject } from "tsyringe";
import { ProductsRepository } from "../../infra/sequelize/repositories/ProductsRepository";
import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";

type IndexQuery = Partial<{
  params: string;
}>;

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { params } = request.query as IndexQuery;
    console.log("PARAMS: ", params)
    const listProductsUseCase = container.resolve(ListProductsUseCase)
    const products = await listProductsUseCase.execute(params);
    return response.status(201).json(products)
  }
}
export { ListProductsController }