import { Chargeback } from '../model/Chargeback';

interface IChargebacksRepository {
  get(): Promise<Chargeback | Error>;
}

export { IChargebacksRepository };
