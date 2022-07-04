//import "dotenv/config";
import cron from 'node-cron';

import { getDre } from './server';
// import { CreateMovementsUseCase } from '../src/modules/movements/useCases';

cron.schedule('*/10 * * * *', async (request, response) => {
  console.log('Executando a tarefa a cada 5 minuto');
  const json = await getDre();
  // console.response.json(json);
  return response.json(json);
});

export default cron;
