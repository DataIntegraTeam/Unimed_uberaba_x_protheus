import { Chargeback } from '../../model/Chargeback';
import { IChargebacksRepository } from '../../repositories/IChargebacksRepository';

class CreateChargebacksUseCase {
  constructor(private chargebacksRepository: IChargebacksRepository) { }

  async execute(data: Chargeback): Promise<string | Error> {
    const date = new Date(data.patient.birthDate);
    const result = new Date().getFullYear() - date.getFullYear();
    console.log(result);
    if (!(result >= 18 && result <= 50)) {
      throw new Error('preRequisiteChargeback');
    }
    data.chargebackId = data.slotId;
    await this.chargebacksRepository.create(data);

    return data.chargebackId;
  }
}

export { CreateChargebacksUseCase };
