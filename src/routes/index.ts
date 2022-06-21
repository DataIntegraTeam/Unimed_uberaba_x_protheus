import { Router } from 'express';

import { unitsRoutes } from './unitsRoutes';
import { slotsRoutes } from './slotsRoutes';
import { movementsRoutes } from './movementsRoutes';
import { inventorysRoutes } from './inventorysRoutes';

import { authentication } from '../middleware/authentication';

const router = Router();

router.use(authentication);

router.use('/api/v1', unitsRoutes);
router.use('/api/v1', slotsRoutes);
router.use('/api/v1', inventorysRoutes);
router.use('/api/v1', movementsRoutes);

export { router };
