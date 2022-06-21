import { v4 as uuidV4 } from 'uuid';

class Movements {
 
  documento: {
    filial: number; // "filial":"001001"
    numero: number; //"numero":"123456789"
    observacao: string; //"texto obeservacao"
    ccustos: number; //"ccustos":"252627"
    ccontail: number; //"ccontail":"353637"
    tipo: string; //"tipo":"E"
  }

  Auditoria: {
    usuario: string; //"admin"
    data: Date; //data":"15/01/2022" e "hora":"15:30:25"
  }
  Hospitalar: {
    paciente: string; //"paciente":"fulando da silva",
    convenio: string; //"convenio":"unimed",
    prontuario: Date; //"prontuario":"2022.06.123456",
    guia: Date; //"guia":"2022.01.252627",
    cartao: number; //"cartao":"001.0001.0001.10000"
 }
 
 Itens: [{
  produto: number; //"produto":"00100100"
  lote: string; //"lote":"ABCDEF",
  validade: Date; //"validade":"31/12/2023",
  unidade: string; //"unidade":"CX",
  armazem: number; //"armazem":"10",
  quantidade: number; //"contagem":13
},
{
  produto: number; //"produto":"00100100"
  lote: string; //"lote":"ABCDEF",
  validade: Date; //"validade":"31/12/2023",
  unidade: string; //"unidade":"CX",
  armazem: number; //"armazem":"10",
  quantidade: number; //"contagem":13
}
]
/*
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }*/
}

export { Movements };
