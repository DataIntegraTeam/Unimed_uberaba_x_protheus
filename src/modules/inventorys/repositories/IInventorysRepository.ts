import { Inventory } from '../model/Inventory';

interface IInventorysRepository {
  create(data: Inventory): Promise<void | Error>;
}

export { IInventorysRepository };
