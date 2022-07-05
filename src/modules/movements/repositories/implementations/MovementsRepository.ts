import { Movement } from '../../model/Movement';
import { IMovementsRepository } from '../IMovementsRepository';
import knex from '../../../../database/db';

export class MovementsRepository implements IMovementsRepository {
  private static INSTANCE: MovementsRepository;

  private constructor() { }
  public static getInstance(): MovementsRepository {
    if (!MovementsRepository.INSTANCE) {
      MovementsRepository.INSTANCE = new MovementsRepository();
    }
    return MovementsRepository.INSTANCE;
  }

  async get(): Promise<Movement | Error> {

    // const url_SAMES = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-sames-mv/interno/v1/dre'
    // const url_HEMO = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-hemodinamica-mv/interno/v1/dre'

    try {

      const sql = ``;

      const result = await knex.raw(sql);

      return result
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
