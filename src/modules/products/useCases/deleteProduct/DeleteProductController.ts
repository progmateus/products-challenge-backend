import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeteleProductUseCase";
import { container } from "tsyringe";

class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProductUseCase = container.resolve(DeleteProductUseCase)
    await deleteProductUseCase.execute(+id);
    return response.status(201).json({ message: "DELETED" })
  }
}
export { DeleteProductController }