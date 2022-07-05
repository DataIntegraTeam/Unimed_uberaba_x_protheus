import { Request, Response } from 'express';

import { CreateReassignmentsUseCase } from './CreateReassignmentsUseCase';

class CreateReassignmentsController {
  constructor(private createReassignmentsUseCase: CreateReassignmentsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const reassignmentId = await this.createReassignmentsUseCase.execute(
        request.body,
      );

      return response.status(201).json({ reassignmentId });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em Reassignment!',
      });
    }
  }
}

export { CreateReassignmentsController };
