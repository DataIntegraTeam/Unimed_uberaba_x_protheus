import { Request, Response } from 'express';

import { CreateChargebacksUseCase } from './CreateChargebacksUseCase';

class CreateChargebacksController {
  constructor(private createChargebacksUseCase: CreateChargebacksUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const chargebackId = await this.createChargebacksUseCase.execute(
        request.body,
      );

      return response.status(201).json({ chargebackId });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em Chargeback!',
      });
    }
  }
}

export { CreateChargebacksController };
