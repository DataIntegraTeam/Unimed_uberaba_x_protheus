import { Router } from 'express';
import { createChargebacksController } from '../modules/chargebacks/useCases/createChargebacks';

const chargebacksRoutes = Router();

chargebacksRoutes.post('/chargebacks', (request, response) => {
  return createChargebacksController.handle(request, response);
});

export { chargebacksRoutes };
