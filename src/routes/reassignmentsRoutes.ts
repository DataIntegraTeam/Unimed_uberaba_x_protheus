import { Router } from 'express';
import { createReassignmentsController } from '../modules/reassignments/useCases/createReassignments';

const reassignmentsRoutes = Router();

reassignmentsRoutes.post('/reassignments', (request, response) => {
  return createReassignmentsController.handle(request, response);
});

export { reassignmentsRoutes };
