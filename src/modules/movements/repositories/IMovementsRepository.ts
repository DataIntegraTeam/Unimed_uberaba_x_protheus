import { Movement } from '../model/Movement';

interface IMovementsRepository {
  create(data: Movement): Promise<void | Error>;
}

export { IMovementsRepository };
