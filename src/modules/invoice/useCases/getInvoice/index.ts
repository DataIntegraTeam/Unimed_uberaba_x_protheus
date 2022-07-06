import { InvoiceRepository } from '../../repositories/implementations/InvoiceRepository';
import { GetInvoiceUseCase } from './GetInvoiceUseCase';

const invoiceRepository = InvoiceRepository.getInstance();

const getInvoiceUseCase = new GetInvoiceUseCase(invoiceRepository);

export { getInvoiceUseCase };
