import { ReassignmentsRepository } from '../../repositories/implementations/ReassignmentsRepository';
import { GetReassignmentsUseCase } from './GetReassignmentsUseCase';

const reassignmentsRepository = ReassignmentsRepository.getInstance();

const getReassignmentsUseCase = new GetReassignmentsUseCase(reassignmentsRepository);

export { getReassignmentsUseCase };
