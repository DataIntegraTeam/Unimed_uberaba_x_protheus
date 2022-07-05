import { Inventory } from '../../model/Inventory';
import { IInventorysRepository } from '../../repositories/IInventorysRepository';

class CreateInventorysUseCase {
  constructor(private inventorysRepository: IInventorysRepository) {}

  async execute(data: Inventory): Promise<string | Error> {
    const date = new Date(data.patient.birthDate);
    const result = new Date().getFullYear() - date.getFullYear();
    console.log(result);
    if (!(result >= 18 && result <= 50)) {
      throw new Error('preRequisiteInventory');
    }
    data.InventoryId = data.slotId;
    await this.InventorysRepository.create(data);

    return data.InventoryId;
  }
}

export { CreateInventorysUseCase };
