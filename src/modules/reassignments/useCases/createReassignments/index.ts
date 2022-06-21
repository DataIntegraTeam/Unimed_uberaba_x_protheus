import { ReassignmentsRepository } from '../../repositories/implementations/ReassignmentsRepository';
import { CreateReassignmentsController } from './CreateReassignmentsController';
import { CreateReassignmentsUseCase } from './CreateReassignmentsUseCase';

const reassignmentsRepository = ReassignmentsRepository.getInstance();

const createReassignmentsUseCase = new CreateReassignmentsUseCase(
  reassignmentsRepository,
);

const createReassignmentsController = new CreateReassignmentsController(
  createReassignmentsUseCase,
);

export { createReassignmentsController };
