import { Inventory } from '../../model/Inventory';
import { IInventorysRepository } from '../../repositories/IInventorysRepository';

class GetInventorysUseCase {
  constructor(private inventorysRepository: IInventorysRepository) {}

 async execute(): Promise<Inventory | Error>{
    return this.inventorysRepository.get();
 }
}

export { GetInventorysUseCase };
