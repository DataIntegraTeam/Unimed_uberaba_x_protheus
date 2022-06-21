import { Router } from 'express';
import { createInventorysController } from '../modules/inventorys/useCases/createInventorys';

const inventorysRoutes = Router();

inventorysRoutes.post('/inventorys', (request, response) => {
  return createInventorysController.handle(request, response);
});

export { inventorysRoutes };
