import { Movement } from '../../model/Movement';
import { IMovementsRepository } from '../IMovementsRepository';
import knex from '../../../../database/db';

export class MovementsRepository implements IMovementsRepository {
  private static INSTANCE: MovementsRepository;

  private constructor() { }
  public static getInstance(): MovementsRepository {
    if (!MovementsRepository.INSTANCE) {
      MovementsRepository.INSTANCE = new MovementsRepository();
    }
    return MovementsRepository.INSTANCE;
  }

  async create(data: Movement): Promise<void | Error> {
    console.log(data);

    // const url_SAMES = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-sames-mv/interno/v1/dre'
    // const url_HEMO = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-hemodinamica-mv/interno/v1/dre'

    try {
      const seq_agenda = await knex.raw(
        `SELECT dataintegra.seq_dti_agendamento.nextval seq_dti from dual`,
      );
      console.log(seq_agenda[0].SEQ_DTI);

      const sql = `
        SELECT DISTINCT dataintegra.tbl_dti_agendamento(
        cd_dti_agenda,
        tp_fluxo,
        tp_status,
        ds_erro,
        dt_gerado,
        tp_registro,
        dt_processado, 
        tp_movimento,
        cd_multi_empresa,
        ds_cancelamento,
        cd_it_agenda_central,
        CD_AGENDAMENTO_INTEGRA, 
        CD_PRESTADOR, 
        CD_UNIDADE_ATENDIMENTO, 
        CD_PRODUTO,
        SN_TELEMEDICINA, 
        NR_CARTEIRA, 
        NR_FONE, 
        EMAIL, 
        NM_PACIENTE, 
        DT_NASCIMENTO, 
        NR_CPF)        
        VALUES 
        ('${seq_agenda[0].SEQ_DTI}',
        '${(data.tp_fluxo = 'S')}',
        '${(data.tp_status = 'A')}',
        '${data.ds_erro}',
        to_Date('${new Date().toISOString().split('T')[0]}','YYYY-MM-DD'),
        '${(data.tp_registro = '001')}',
        '${data.dt_processado}',
        '${(data.tp_movimento = 'I')}',
        '${data.cd_multi_empresa}',
        '${data.reason}',
        '${data.slotId}', 
        '${data.appointmentId}',
        '${data.professionalId}', 
        '${data.unitId}', 
        '${data.productId}',
        '${data.telemedicine}',
        '${data.patient.benefitCode}', 
        '${data.patient.phone}', 
        '${data.patient.email}', 
        '${data.patient.name}', 
        to_Date('${data.patient.birthDate}','YYYY-MM-DD'), 
        '${data.patient.document.number}')
        `;
      await knex.raw(sql);

      console.log(result.length)

      if (!result || result.length === 0) {
        console.log('Não encontrado registro no banco de dados')
        return {
          result: 'ERROR',
          debug_msg: 'Não encontrado registro no banco de dados',
        };
      }

      const dados = [];
      result.forEach(element => {
        dados.push({
          MES: element.MES,
          ANO: element.ANO,
          DATA: element.DATA,
          COD_UNIDADE: element.COD_UNID,
          COD_CC: element.COD_CC,
          DESC_CC: element.DESC_CC,
          COD_CONTA: element.COD_CONTA,
          DESC_CONTA: element.DESC_CONTA,
          DOCUMENTO: element.DOC,
          NATUREZA: element.NATUREZA,
          VALOR: element.VALOR,
          HISTORICO: element.HIS,
          COD_PROJETO: null,
          GERADOR: null,
          COD_DIMENSAO: null,
          RATEIO: element.RATEIO
        });
      });

      console.log(result[0].COD_UNID)

      if (result[0].COD_UNID === 19) {
        console.log('Entrou SAMES')
        const data = { PAGINAS: 1, COMPETENCIA: result[0].COMP, CARGA_ADICIONAL: 0, PAGINA: 1, IMPORTACAO: dados }
        const response = await axios.post(url_SAMES, data, {
          headers: {
            'client_id': 'dd117c3f-2887-3eae-baab-84477ce72029',
            'Content-Type': 'application/json',
          }
        })
      }

      if (result[0].COD_UNID === 7) {
        console.log('Entrou HEMO')
        const data = { PAGINAS: 1, COMPETENCIA: result[0].COMP, CARGA_ADICIONAL: 0, PAGINA: 1, IMPORTACAO: dados }
        const response = await axios.post(url_HEMO, data, {
          headers: {
            'client_id': '5ec63be2-138d-3086-a6fa-903bc3af53df',
            'Content-Type': 'application/json',
          }
        })
      }
      console.log(result_func_agenda);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
