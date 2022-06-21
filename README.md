# Unimed-uberaba-x-Protheus
Integração Unimed Uberaba x Protejus

1 - Movimentação = Movement
2 - Inventário = Inventory
3 - Transferência = Reassignment
4 - Estorno = Chargeback


Movimentação
Post 

```
JSON de envio
{
	"Documento": {
		 "filial":"001001",
		 "numero":"123456789",
		 "observacao":"texto obeservacao",
		 "ccustos":"252627",
		 "ccontail":"353637",
		 "tipo":"E"
	},
	"Auditoria": {
		 "usuario":"admin",
		 "data":"15/01/2022",
		 "hora":"15:30:25"
	},
	"Hospitalar": {
		 "paciente":"fulando da silva",
		 "convenio":"unimed",
		 "prontuario":"2022.06.123456",
		 "guia":"2022.01.252627",
		 "cartao":"001.0001.0001.10000"
	},
	"Itens": [
		{
			"produto":"00100100",
			"lote":"ABCDEF",
			"validade":"31/12/2023",
			"unidade":"CX",
			"armazem":"10",
			"quantidade":9.0
		},
		{
			"produto":"00100200",
			"lote":"GJHTUV",
			"validade":"31/12/2023",
			"unidade":"ML",
			"armazem":"10",
			"quantidade":10.5
		}
	]
}
```