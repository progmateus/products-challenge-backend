import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price } = request.body;
    const { id } = request.user;
    const createProductUseCase = container.resolve(CreateProductUseCase)
    const product = await createProductUseCase.execute({
      name,
      description,
      price,
      userId: id
    });
    return response.status(201).json(product)
  }
}
export { CreateProductController }