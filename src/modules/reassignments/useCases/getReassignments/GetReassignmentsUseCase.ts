import { Reassignment } from '../../model/Reassignment';
import { IReassignmentsRepository } from '../../repositories/IReassignmentsRepository';

class GetReassignmentsUseCase {
  constructor(private reassignmentsRepository: IReassignmentsRepository) {}

  async execute(): Promise<Reassignment | Error> {
    return this.reassignmentsRepository.get();
  }
}

export { GetReassignmentsUseCase };
