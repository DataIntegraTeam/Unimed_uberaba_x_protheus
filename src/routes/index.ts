import { Router } from 'express';

import { movementsRoutes } from './movementsRoutes';
import { inventorysRoutes } from './inventorysRoutes';
import { reassignmentsRoutes } from './reassignmentsRoutes';

import { authentication } from '../middleware/authentication';

const router = Router();

router.use(authentication);

router.use('/api/v1', inventorysRoutes);
router.use('/api/v1', movementsRoutes);
router.use('/api/v1', reassignmentsRoutes);

export { router };
