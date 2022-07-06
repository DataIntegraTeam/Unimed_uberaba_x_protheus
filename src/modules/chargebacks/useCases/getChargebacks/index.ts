import { ChargebacksRepository } from '../../repositories/implementations/ChargebacksRepository';
import { GetChargebacksUseCase } from './GetChargebacksUseCase';

const chargebacksRepository = ChargebacksRepository.getInstance();

const getChargebacksUseCase = new GetChargebacksUseCase(chargebacksRepository);

export { getChargebacksUseCase };
