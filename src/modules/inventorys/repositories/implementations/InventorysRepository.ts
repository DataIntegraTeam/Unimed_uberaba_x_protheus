import { Inventory } from '../../model/Inventory';
import { IInventorysRepository } from '../IInventorysRepository';
import knex from '../../../../database/db';

export class InventorysRepository implements IInventorysRepository {
  private static INSTANCE: InventorysRepository;

  private constructor() {}
  public static getInstance(): InventorysRepository {
    if (!InventorysRepository.INSTANCE) {
      InventorysRepository.INSTANCE = new InventorysRepository();
    }
    return InventorysRepository.INSTANCE;
  }

  async get(): Promise<Inventory | Error> {
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
