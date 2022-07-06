//import "dotenv/config";
import cron from 'node-cron';

import { getMovementsUseCase } from './modules/movements/useCases/getMovements';

cron.schedule('*/10 * * * *', async () => {
  console.log('Executando a tarefa a cada 5 minuto');
  const response = await getMovementsUseCase.execute();
  // const response = await getMovementsUseCase.execute()

  console.log(response);
});

export default cron;
