//import { v4 as uuidV4 } from 'uuid';

class Inventory {

  documento: {
    filial: number; // "filial":"001001"
    numero: number; //"numero":"123456789"
    textoObservacao: string; //"texto obeservacao"
    cCustos: number; //"ccustos":"252627"
    cContail: number; //"ccontail":"353637"
    tipo: string; //"tipo":"E"
  }

  Auditoria: {
    usuario: string; //"admin"
    data: Date; //data":"15/01/2022" e "hora":"15:30:25"
  }

  Itens: {
    produto: number; //"produto":"00100100"
    lote: string; //"lote":"ABCDEF",
    validade: Date; //"validade":"31/12/2023",
    unidade: string; //"unidade":"CX",
    armazem: number; //"armazem":"10",
    contagem: number; //"contagem":13
  }
    constructor() {
    
    }
  }

export { Inventory };
