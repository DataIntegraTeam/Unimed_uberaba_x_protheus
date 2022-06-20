import { Movement } from '../../model/Movement';
import { IMovementsRepository } from '../../repositories/IMovementsRepository';

class CreateMovementsUseCase {
  constructor(private movementsRepository: IMovementsRepository) { }

  async execute(data: Movement): Promise<string | Error> {
    const date = new Date(data.patient.birthDate);
    const result = new Date().getFullYear() - date.getFullYear();
    console.log(result);
    if (!(result >= 18 && result <= 50)) {
      throw new Error('preRequisiteMovement');
    }
    data.movementId = data.slotId;
    await this.movementsRepository.create(data);

    return data.movementId;
  }
}

export { CreateMovementsUseCase };
