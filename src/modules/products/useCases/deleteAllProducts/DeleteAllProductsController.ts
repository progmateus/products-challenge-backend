import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteAllProductsUseCase } from "./DeleteAllProductsUseCase";

class DeleteAllProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteAllProductsUseCase = container.resolve(DeleteAllProductsUseCase)
    await deleteAllProductsUseCase.execute();
    return response.status(204).json({ message: "DELETED" })
  }
}
export { DeleteAllProductsController }