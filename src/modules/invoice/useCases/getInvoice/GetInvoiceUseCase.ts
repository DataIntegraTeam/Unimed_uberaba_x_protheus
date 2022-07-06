import { Invoice } from '../../model/Invoice';
import { IInvoiceRepository } from '../../repositories/IInvoiceRepository';

class GetInvoiceUseCase {
  constructor(private invoiceRepository: IInvoiceRepository) {}

  async execute(): Promise<Invoice | Error> {
    return this.invoiceRepository.get();
  }
}

export { GetInvoiceUseCase };
