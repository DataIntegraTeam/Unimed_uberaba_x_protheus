import { Movement } from '../../model/Movement';
import { IMovementsRepository } from '../../repositories/IMovementsRepository';

class GetMovementsUseCase {
  constructor(private movementsRepository: IMovementsRepository) { }

  async execute(): Promise<Movement | Error> {
    return this.movementsRepository.get()
  }
}

export { GetMovementsUseCase };
