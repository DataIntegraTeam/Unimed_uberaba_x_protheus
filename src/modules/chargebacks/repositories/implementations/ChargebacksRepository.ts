import { Chargeback } from '../../model/Chargeback';
import { IChargebacksRepository } from '../IChargebacksRepository';
import knex from '../../../../database/db';

export class ChargebacksRepository implements IChargebacksRepository {
  private static INSTANCE: ChargebacksRepository;

  private constructor() { }
  public static getInstance(): ChargebacksRepository {
    if (!ChargebacksRepository.INSTANCE) {
      ChargebacksRepository.INSTANCE = new ChargebacksRepository();
    }
    return ChargebacksRepository.INSTANCE;
  }

  async get(): Promise<Chargeback | Error> {
    // const url_SAMES = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-sames-mv/interno/v1/dre'
    // const url_HEMO = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-hemodinamica-mv/interno/v1/dre'

    try {
      const sql = ``;

      const result = await knex.raw(sql);

      return result;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
