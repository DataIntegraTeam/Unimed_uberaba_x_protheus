import { ChargebacksRepository } from '../../repositories/implementations/ChargebacksRepository';
import { CreateChargebacksController } from './CreateChargebacksController';
import { CreateChargebacksUseCase } from './CreateChargebacksUseCase';

const chargebacksRepository = ChargebacksRepository.getInstance();

const createChargebacksUseCase = new CreateChargebacksUseCase(
  chargebacksRepository,
);

const createChargebacksController = new CreateChargebacksController(
  createChargebacksUseCase,
);

export { createChargebacksController };
