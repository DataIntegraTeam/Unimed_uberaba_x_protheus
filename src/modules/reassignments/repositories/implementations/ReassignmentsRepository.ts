import { Reassignment } from '../../model/Reassignment';
import { IReassignmentsRepository } from '../IReassignmentsRepository';
import knex from '../../../../database/db';

export class ReassignmentsRepository implements IReassignmentsRepository {
  private static INSTANCE: ReassignmentsRepository;

  private constructor() {}
  public static getInstance(): ReassignmentsRepository {
    if (!ReassignmentsRepository.INSTANCE) {
      ReassignmentsRepository.INSTANCE = new ReassignmentsRepository();
    }
    return ReassignmentsRepository.INSTANCE;
  }

  async get(): Promise<Reassignment | Error> {
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
