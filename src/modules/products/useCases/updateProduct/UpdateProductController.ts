import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price } = request.body;
    const updateProductUseCase = container.resolve(UpdateProductUseCase)
    const product = await updateProductUseCase.execute({
      name,
      description,
      price,
      id: +id
    });
    return response.status(201).json(product)
  }
}
export { UpdateProductController }