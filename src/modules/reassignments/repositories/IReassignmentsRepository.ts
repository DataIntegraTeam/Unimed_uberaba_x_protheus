import { Reassignment } from '../model/Reassignment';

interface IReassignmentsRepository {
  create(data: Reassignment): Promise<void | Error>;
}

export { IReassignmentsRepository };
