import { Request, Response } from 'express';

import { CancelingUseCase } from './CancelingUseCase';

class CancelingController {
  constructor(private cancelingUseCase: CancelingUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { movementId } = request.params;
    const { reason, patientBenefitCode, tp_status, tp_movimento } =
      request.body;
    try {
      const result = await this.cancelingUseCase.execute({
        movementId,
        reason,
        patientBenefitCode,
        tp_status,
        tp_movimento,
      });

      return response.status(result.status).json({ message: result.message });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em canceling MovementId!',
      });
    }
  }
}

export { CancelingController };
