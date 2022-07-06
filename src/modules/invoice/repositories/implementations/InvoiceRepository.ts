import { Invoice } from '../../model/Invoice';
import { IInvoiceRepository } from '../IInvoiceRepository';
import knex from '../../../../database/db';

export class InvoiceRepository implements IInvoiceRepository {
  private static INSTANCE: InvoiceRepository;

  private constructor() {}
  public static getInstance(): InvoiceRepository {
    if (!InvoiceRepository.INSTANCE) {
      InvoiceRepository.INSTANCE = new InvoiceRepository();
    }
    return InvoiceRepository.INSTANCE;
  }

  async get(): Promise<Invoice | Error> {
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
