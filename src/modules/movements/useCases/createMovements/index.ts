import { MovementsRepository } from '../../repositories/implementations/MovementsRepository';
import { CreateMovementsController } from './CreateMovementsController';
import { CreateMovementsUseCase } from './CreateMovementsUseCase';

const movementsRepository = MovementsRepository.getInstance();

const createMovementsUseCase = new CreateMovementsUseCase(movementsRepository);

const createMovementsController = new CreateMovementsController(
  createMovementsUseCase,
);

export { createMovementsController };
