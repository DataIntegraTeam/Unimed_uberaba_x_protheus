import { InventorysRepository } from '../../repositories/implementations/InventorysRepository';
import { GetInventorysUseCase } from './GetInventorysUseCase';

const inventorysRepository = InventorysRepository.getInstance();

const getInventorysUseCase = new GetInventorysUseCase(inventorysRepository);


export { getInventorysUseCase };
