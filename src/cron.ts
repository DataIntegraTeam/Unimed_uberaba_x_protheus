//import "dotenv/config";
import cron from 'node-cron';

import { getMovementsUseCase } from './modules/movements/useCases/getMovements';
import { getInventorysUseCase } from './modules/inventorys/useCases/getInventorys';
import { getChargebacksUseCase } from './modules/chargebacks/useCases/getChargebacks';
import { getReassignmentsUseCase } from './modules/reassignments/useCases/getReassignments';

cron.schedule('*/10 * * * *', async () => {
  console.log('Executando a tarefa a cada 5 minuto');
  const response = await getMovementsUseCase.execute();
  //const response = await getInventorysUseCase.execute();
  //const response = await getChargebacksUseCase.execute();
  //const response = await getReassignmentsUseCase.execute();

  console.log(response);
});

export default cron;
