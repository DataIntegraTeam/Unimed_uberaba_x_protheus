import { Chargeback } from '../model/Chargeback';

interface IChargebacksRepository {
  create(data: Chargeback): Promise<void | Error>;
}

export { IChargebacksRepository };
