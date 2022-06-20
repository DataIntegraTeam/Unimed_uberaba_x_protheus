import { Router } from 'express';
import { createMovementsController } from '../modules/movements/useCases/createMovements';

const movementsRoutes = Router();

movementsRoutes.post('/movements', (request, response) => {
  return createMovementsController.handle(request, response);
});

export { movementsRoutes };
