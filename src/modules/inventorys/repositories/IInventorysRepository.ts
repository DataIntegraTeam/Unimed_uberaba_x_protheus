import { Inventory } from '../model/Inventory';

interface IInventorysRepository {
  get(): Promise<Inventory | Error>;
}

export { IInventorysRepository };
