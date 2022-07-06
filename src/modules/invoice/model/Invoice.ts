import { v4 as uuidV4 } from 'uuid';

class Invoice {
  id: string;
  NotaFiscal: {
    numeroSerie: number;//"001",
    horaEntrada: Date; // "08:42",
    codigoFornecedorDePara: number; // "04692611",
    codigoFornecedor: number;// "890709",
    codigoCfop: number;//"23",
    codigoEstoque: number; //"01",
    dataEmissao: number; // "20220418",
    empresaDestino: number; //"3",
    codigoTipoDocumento: string; //"N",
    dataEntrada: number;//"20220506",
    operacao: string;//"I",
    valorTotalNota: number;//"3800.81",
    numeroDocumento: number;//"000007567",
    valorIpi: number; //"0",
    Produto: [
      {
        lotes: [
          {
            lote: string; //"HJRA567",
            validade: number;//"20221206",
            quantidadeEntrada: number;//"130"
          }
        ],
        valorTotal: number;//"116.5",
        codigoUnidade: string; //"KG",
        quantidade: number; //"31.15",
        valorIpiProduto: number; //"0",
        codigoProdutoDePara: number; //"0100200500113",
        codigoProduto: number; //"123232",
        valorUnitario: number; //"3.74"
      },
      {
        lotes: [
          {
            lote: number; //"HJRA567",
            validade: number; //"20221206",
            quantidadeEntrada: number; //"130"
          }
        ],
        valorTotal: number; //"388.7",
        codigoUnidade: string; //"UND",
        quantidade: number;//"130",
        valorIpiProduto: number; //"0",
        codigoProdutoDePara: number; //"0100200500119",
        codigoProduto: number; //"123232",
        valorUnitario: number; //"2.99"
      }
    ]
  }
  constructor() {}
}

export { Invoice };
