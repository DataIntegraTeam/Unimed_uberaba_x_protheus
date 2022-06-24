import { InventorysRepository } from '../../repositories/implementations/InventorysRepository';
import { CreateInventorysController } from './CreateInventorysController';
import { CreateInventorysUseCase } from './CreateInventorysUseCase';

const inventorysRepository = InventorysRepository.getInstance();

const createInventorysUseCase = new CreateInventorysUseCase(
  inventorysRepository,
);

const createInventorysController = new CreateInventorysController(
  createInventorysUseCase,
);

export { createInventorysController };
