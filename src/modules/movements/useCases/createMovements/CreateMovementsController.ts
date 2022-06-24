import { Request, Response } from 'express';

import { CreateMovementsUseCase } from './CreateMovementsUseCase';

class CreateMovementsController {
  constructor(private createMovementsUseCase: CreateMovementsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const movementId = await this.createMovementsUseCase.execute(
        request.body,
      );

      return response.status(201).json({ movementId });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em Movement!',
      });
    }
  }
}

export { CreateMovementsController };
