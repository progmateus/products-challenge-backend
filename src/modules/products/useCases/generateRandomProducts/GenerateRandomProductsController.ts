import { Request, Response } from "express";
import { container } from "tsyringe";
import { GenerateRandomProductsUseCase } from "./GenerateRandomProductsUseCase";

class GenerateRandomProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const generateRandomProductsUseCase = container.resolve(GenerateRandomProductsUseCase)
    const products = await generateRandomProductsUseCase.execute(id);
    return response.status(201).json(products)
  }
}
export { GenerateRandomProductsController }