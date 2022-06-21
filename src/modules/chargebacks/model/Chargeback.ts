import { v4 as uuidV4 } from 'uuid';

class Chargeback {
  documento: {
    filial: number; // "filial":"001001"
    numero: number; //"numero":"123456789"
    observacao: string; //"texto obeservacao"
  }
  Auditoria: {
    usuario: string; //"admin"
    data: Date; //data":"15/01/2022" e "hora":"15:30:25"
  }

  constructor() {

    }
  }
export { Chargeback };
