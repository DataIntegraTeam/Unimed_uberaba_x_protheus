import { Chargeback } from '../../model/Chargeback';
import { IChargebacksRepository } from '../../repositories/IChargebacksRepository';

class GetChargebacksUseCase {
  constructor(private chargebacksRepository: IChargebacksRepository) {}

  async execute(): Promise<Chargeback | Error> {
    return this.chargebacksRepository.get();
  }
}

export { GetChargebacksUseCase };
