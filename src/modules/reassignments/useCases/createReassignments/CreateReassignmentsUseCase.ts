import { Reassignment } from '../../model/Reassignment';
import { IReassignmentsRepository } from '../../repositories/IReassignmentsRepository';

class CreateReassignmentsUseCase {
  constructor(private reassignmentsRepository: IReassignmentsRepository) { }

  async execute(data: Reassignment): Promise<string | Error> {
    const date = new Date(data.patient.birthDate);
    const result = new Date().getFullYear() - date.getFullYear();
    console.log(result);
    if (!(result >= 18 && result <= 50)) {
      throw new Error('preRequisiteReassignment');
    }
    data.reassignmentId = data.slotId;
    await this.reassignmentsRepository.create(data);

    return data.reassignmentId;
  }
}

export { CreateReassignmentsUseCase };
