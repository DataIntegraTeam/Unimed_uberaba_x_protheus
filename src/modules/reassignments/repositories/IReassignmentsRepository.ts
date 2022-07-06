import { Reassignment } from '../model/Reassignment';

interface IReassignmentsRepository {
  get(): Promise<Reassignment | Error>;
}

export { IReassignmentsRepository };
