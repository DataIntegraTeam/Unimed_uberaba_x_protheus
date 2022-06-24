import { Request, Response } from 'express';

import { CreateInventorysUseCase } from './CreateInventorysUseCase';

class CreateInventorysController {
  constructor(private createInventorysUseCase: CreateInventorysUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const inventoryId = await this.createInventorysUseCase.execute(
        request.body,
      );

      return response.status(201).json({ inventoryId });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em Inventory!',
      });
    }
  }
}

export { CreateInventorysController };
