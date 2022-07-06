import { MovementsRepository } from '../../repositories/implementations/MovementsRepository';
// import { CreateMovementsController } from './CreateMovementsController';
import { GetMovementsUseCase } from './GetMovementsUseCase';

const movementsRepository = MovementsRepository.getInstance();

const getMovementsUseCase = new GetMovementsUseCase(movementsRepository);

export { getMovementsUseCase };
