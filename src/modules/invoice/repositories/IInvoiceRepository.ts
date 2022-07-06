import { Invoice } from '../model/Invoice';

interface IInvoiceRepository {
  get(): Promise<Invoice | Error>;
}

export { IInvoiceRepository };
