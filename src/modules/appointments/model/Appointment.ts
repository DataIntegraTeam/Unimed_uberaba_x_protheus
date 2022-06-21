import { v4 as uuidV4 } from 'uuid';

class Appointment {
  Document: {
    nrFilial: number; // "filial":"001001"
    dcNumero: number; //"numero":"123456789"
    tpObservacao: string; //"texto obeservacao"
    nrCustos: number; //"ccustos":"252627"
    nrCcontail: number; //"ccontail":"353637"
  }

  Auditoria: {
    nmUsuario: string; //"admin"
    nrData: Date; //data":"15/01/2022" e "hora":"15:30:25"
    
 }

  Itens: {
    nrProduto: number; //"produto":"00100100"
    lote: string; //"lote":"ABCDEF",
    dtValidade: Date; //"validade":"31/12/2023",
    tpUnidade: string; //"unidade":"CX",
    cdArmazem: number; //"armazem":"10",
    qtItem: number; //"contagem":13
  /* VERIFICAR <====
    {
      "produto":"00100200",
      "lote":"GJHTUV",
      "validade":"31/12/2023",
      "unidade":"ML",
      "armazem":"10",
      "contagem":25
    }*/
  }

  constructor() {
    
    }
  }


export { Appointment };
