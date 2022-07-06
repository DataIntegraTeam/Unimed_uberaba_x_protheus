import { Movement } from '../model/Movement';

interface IMovementsRepository {
  get(): Promise<Movement | Error>;
}

export { IMovementsRepository };
