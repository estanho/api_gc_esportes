import { prismaClient as prisma } from './prismaClient';

async function main() {
  const cidades = [
    {
      id: 4568,
      nome: 'Alecrim',
    },
    {
      id: 4569,
      nome: 'Cândido Godói',
    },
    {
      id: 4570,
      nome: 'Independência',
    },
    {
      id: 4571,
      nome: 'Novo Machado',
    },
    {
      id: 4572,
      nome: 'Porto Lucena',
    },
    {
      id: 4573,
      nome: 'Porto Mauá',
    },
    {
      id: 4574,
      nome: 'Porto Vera Cruz',
    },
    {
      id: 4575,
      nome: 'Santa Rosa',
    },
    {
      id: 4576,
      nome: 'Santo Cristo',
    },
    {
      id: 4577,
      nome: 'São José do Inhacorá',
    },
    {
      id: 4578,
      nome: 'Três de Maio',
    },
    {
      id: 4579,
      nome: 'Tucunduva',
    },
    {
      id: 4580,
      nome: 'Tuparendi',
    },
    {
      id: 4581,
      nome: 'Barra do Guarita',
    },
    {
      id: 4582,
      nome: 'Boa Vista do Buricá',
    },
    {
      id: 4583,
      nome: 'Bom Progresso',
    },
    {
      id: 4584,
      nome: 'Braga',
    },
    {
      id: 4585,
      nome: 'Campo Novo',
    },
    {
      id: 4586,
      nome: 'Crissiumal',
    },
    {
      id: 4587,
      nome: 'Derrubadas',
    },
    {
      id: 4588,
      nome: 'Doutor Maurício Cardoso',
    },
    {
      id: 4589,
      nome: 'Esperança do Sul',
    },
    {
      id: 4590,
      nome: 'Horizontina',
    },
    {
      id: 4591,
      nome: 'Humaitá',
    },
    {
      id: 4592,
      nome: 'Miraguaí',
    },
    {
      id: 4593,
      nome: 'Nova Candelária',
    },
    {
      id: 4594,
      nome: 'Redentora',
    },
    {
      id: 4595,
      nome: 'São Martinho',
    },
    {
      id: 4596,
      nome: 'Sede Nova',
    },
    {
      id: 4597,
      nome: 'Tenente Portela',
    },
    {
      id: 4598,
      nome: 'Tiradentes do Sul',
    },
    {
      id: 4599,
      nome: 'Três Passos',
    },
    {
      id: 4600,
      nome: 'Vista Gaúcha',
    },
    {
      id: 4601,
      nome: 'Alpestre',
    },
    {
      id: 4602,
      nome: 'Ametista do Sul',
    },
    {
      id: 4603,
      nome: 'Caiçara',
    },
    {
      id: 4604,
      nome: 'Constantina',
    },
    {
      id: 4605,
      nome: 'Cristal do Sul',
    },
    {
      id: 4606,
      nome: 'Dois Irmãos das Missões',
    },
    {
      id: 4607,
      nome: 'Engenho Velho',
    },
    {
      id: 4608,
      nome: 'Erval Seco',
    },
    {
      id: 4609,
      nome: 'Frederico Westphalen',
    },
    {
      id: 4610,
      nome: 'Gramado dos Loureiros',
    },
    {
      id: 4611,
      nome: 'Iraí',
    },
    {
      id: 4612,
      nome: 'Liberato Salzano',
    },
    {
      id: 4613,
      nome: 'Nonoai',
    },
    {
      id: 4614,
      nome: 'Novo Tiradentes',
    },
    {
      id: 4615,
      nome: 'Novo Xingu',
    },
    {
      id: 4616,
      nome: 'Palmitinho',
    },
    {
      id: 4617,
      nome: 'Pinheirinho do Vale',
    },
    {
      id: 4618,
      nome: 'Planalto',
    },
    {
      id: 4619,
      nome: 'Rio dos Índios',
    },
    {
      id: 4620,
      nome: 'Rodeio Bonito',
    },
    {
      id: 4621,
      nome: 'Rondinha',
    },
    {
      id: 4622,
      nome: 'Seberi',
    },
    {
      id: 4623,
      nome: 'Taquaruçu do Sul',
    },
    {
      id: 4624,
      nome: 'Três Palmeiras',
    },
    {
      id: 4625,
      nome: 'Trindade do Sul',
    },
    {
      id: 4626,
      nome: 'Vicente Dutra',
    },
    {
      id: 4627,
      nome: 'Vista Alegre',
    },
    {
      id: 4628,
      nome: 'Aratiba',
    },
    {
      id: 4629,
      nome: 'Áurea',
    },
    {
      id: 4630,
      nome: 'Barão de Cotegipe',
    },
    {
      id: 4631,
      nome: 'Barra do Rio Azul',
    },
    {
      id: 4632,
      nome: 'Benjamin Constant do Sul',
    },
    {
      id: 4633,
      nome: 'Campinas do Sul',
    },
    {
      id: 4634,
      nome: 'Carlos Gomes',
    },
    {
      id: 4635,
      nome: 'Centenário',
    },
    {
      id: 4636,
      nome: 'Cruzaltense',
    },
    {
      id: 4637,
      nome: 'Entre Rios do Sul',
    },
    {
      id: 4638,
      nome: 'Erebango',
    },
    {
      id: 4639,
      nome: 'Erechim',
    },
    {
      id: 4640,
      nome: 'Erval Grande',
    },
    {
      id: 4641,
      nome: 'Estação',
    },
    {
      id: 4642,
      nome: 'Faxinalzinho',
    },
    {
      id: 4643,
      nome: 'Floriano Peixoto',
    },
    {
      id: 4644,
      nome: 'Gaurama',
    },
    {
      id: 4645,
      nome: 'Getúlio Vargas',
    },
    {
      id: 4646,
      nome: 'Ipiranga do Sul',
    },
    {
      id: 4647,
      nome: 'Itatiba do Sul',
    },
    {
      id: 4648,
      nome: 'Jacutinga',
    },
    {
      id: 4649,
      nome: 'Marcelino Ramos',
    },
    {
      id: 4650,
      nome: 'Mariano Moro',
    },
    {
      id: 4651,
      nome: 'Paulo Bento',
    },
    {
      id: 4652,
      nome: 'Ponte Preta',
    },
    {
      id: 4653,
      nome: 'Quatro Irmãos',
    },
    {
      id: 4654,
      nome: 'São Valentim',
    },
    {
      id: 4655,
      nome: 'Severiano de Almeida',
    },
    {
      id: 4656,
      nome: 'Três Arroios',
    },
    {
      id: 4657,
      nome: 'Viadutos',
    },
    {
      id: 4658,
      nome: 'Barracão',
    },
    {
      id: 4659,
      nome: 'Cacique Doble',
    },
    {
      id: 4660,
      nome: 'Ibiaçá',
    },
    {
      id: 4661,
      nome: 'Machadinho',
    },
    {
      id: 4662,
      nome: 'Maximiliano de Almeida',
    },
    {
      id: 4663,
      nome: 'Paim Filho',
    },
    {
      id: 4664,
      nome: 'Sananduva',
    },
    {
      id: 4665,
      nome: 'Santo Expedito do Sul',
    },
    {
      id: 4666,
      nome: 'São João da Urtiga',
    },
    {
      id: 4667,
      nome: 'São José do Ouro',
    },
    {
      id: 4668,
      nome: 'Tupanci do Sul',
    },
    {
      id: 4669,
      nome: 'Caibaté',
    },
    {
      id: 4670,
      nome: 'Campina das Missões',
    },
    {
      id: 4671,
      nome: 'Cerro Largo',
    },
    {
      id: 4672,
      nome: 'Guarani das Missões',
    },
    {
      id: 4673,
      nome: 'Mato Queimado',
    },
    {
      id: 4674,
      nome: 'Porto Xavier',
    },
    {
      id: 4675,
      nome: 'Roque Gonzales',
    },
    {
      id: 4676,
      nome: 'Salvador das Missões',
    },
    {
      id: 4677,
      nome: 'São Paulo das Missões',
    },
    {
      id: 4678,
      nome: 'São Pedro do Butiá',
    },
    {
      id: 4679,
      nome: 'Sete de Setembro',
    },
    {
      id: 4680,
      nome: 'Bossoroca',
    },
    {
      id: 4681,
      nome: 'Catuípe',
    },
    {
      id: 4682,
      nome: 'Dezesseis de Novembro',
    },
    {
      id: 4683,
      nome: 'Entre-Ijuís',
    },
    {
      id: 4684,
      nome: 'Eugênio de Castro',
    },
    {
      id: 4685,
      nome: 'Giruá',
    },
    {
      id: 4686,
      nome: 'Pirapó',
    },
    {
      id: 4687,
      nome: 'Rolador',
    },
    {
      id: 4688,
      nome: 'Santo Ângelo',
    },
    {
      id: 4689,
      nome: 'Santo Antônio das Missões',
    },
    {
      id: 4690,
      nome: 'São Luiz Gonzaga',
    },
    {
      id: 4691,
      nome: 'São Miguel das Missões',
    },
    {
      id: 4692,
      nome: 'São Nicolau',
    },
    {
      id: 4693,
      nome: 'Senador Salgado Filho',
    },
    {
      id: 4694,
      nome: 'Ubiretama',
    },
    {
      id: 4695,
      nome: 'Vitória das Missões',
    },
    {
      id: 4696,
      nome: 'Ajuricaba',
    },
    {
      id: 4697,
      nome: 'Alegria',
    },
    {
      id: 4698,
      nome: 'Augusto Pestana',
    },
    {
      id: 4699,
      nome: 'Bozano',
    },
    {
      id: 4700,
      nome: 'Chiapetta',
    },
    {
      id: 4701,
      nome: 'Condor',
    },
    {
      id: 4702,
      nome: 'Coronel Barros',
    },
    {
      id: 4703,
      nome: 'Coronel Bicaco',
    },
    {
      id: 4704,
      nome: 'Ijuí',
    },
    {
      id: 4705,
      nome: 'Inhacorá',
    },
    {
      id: 4706,
      nome: 'Nova Ramada',
    },
    {
      id: 4707,
      nome: 'Panambi',
    },
    {
      id: 4708,
      nome: 'Pejuçara',
    },
    {
      id: 4709,
      nome: 'Santo Augusto',
    },
    {
      id: 4710,
      nome: 'São Valério do Sul',
    },
    {
      id: 4711,
      nome: 'Almirante Tamandaré do Sul',
    },
    {
      id: 4712,
      nome: 'Barra Funda',
    },
    {
      id: 4713,
      nome: 'Boa Vista das Missões',
    },
    {
      id: 4714,
      nome: 'Carazinho',
    },
    {
      id: 4715,
      nome: 'Cerro Grande',
    },
    {
      id: 4716,
      nome: 'Chapada',
    },
    {
      id: 4717,
      nome: 'Coqueiros do Sul',
    },
    {
      id: 4718,
      nome: 'Jaboticaba',
    },
    {
      id: 4719,
      nome: 'Lajeado do Bugre',
    },
    {
      id: 4720,
      nome: 'Nova Boa Vista',
    },
    {
      id: 4721,
      nome: 'Novo Barreiro',
    },
    {
      id: 4722,
      nome: 'Palmeira das Missões',
    },
    {
      id: 4723,
      nome: 'Pinhal',
    },
    {
      id: 4724,
      nome: 'Sagrada Família',
    },
    {
      id: 4725,
      nome: 'Santo Antônio do Planalto',
    },
    {
      id: 4726,
      nome: 'São José das Missões',
    },
    {
      id: 4727,
      nome: 'São Pedro das Missões',
    },
    {
      id: 4728,
      nome: 'Sarandi',
    },
    {
      id: 4729,
      nome: 'Água Santa',
    },
    {
      id: 4730,
      nome: 'Camargo',
    },
    {
      id: 4731,
      nome: 'Casca',
    },
    {
      id: 4732,
      nome: 'Caseiros',
    },
    {
      id: 4733,
      nome: 'Charrua',
    },
    {
      id: 4734,
      nome: 'Ciríaco',
    },
    {
      id: 4735,
      nome: 'Coxilha',
    },
    {
      id: 4736,
      nome: 'David Canabarro',
    },
    {
      id: 4737,
      nome: 'Ernestina',
    },
    {
      id: 4738,
      nome: 'Gentil',
    },
    {
      id: 4739,
      nome: 'Ibiraiaras',
    },
    {
      id: 4740,
      nome: 'Marau',
    },
    {
      id: 4741,
      nome: 'Mato Castelhano',
    },
    {
      id: 4742,
      nome: 'Muliterno',
    },
    {
      id: 4743,
      nome: 'Nicolau Vergueiro',
    },
    {
      id: 4744,
      nome: 'Passo Fundo',
    },
    {
      id: 4745,
      nome: 'Pontão',
    },
    {
      id: 4746,
      nome: 'Ronda Alta',
    },
    {
      id: 4747,
      nome: 'Santa Cecília do Sul',
    },
    {
      id: 4748,
      nome: 'Santo Antônio do Palma',
    },
    {
      id: 4749,
      nome: 'São Domingos do Sul',
    },
    {
      id: 4750,
      nome: 'Sertão',
    },
    {
      id: 4751,
      nome: 'Tapejara',
    },
    {
      id: 4752,
      nome: 'Vanini',
    },
    {
      id: 4753,
      nome: 'Vila Lângaro',
    },
    {
      id: 4754,
      nome: 'Vila Maria',
    },
    {
      id: 4755,
      nome: 'Alto Alegre',
    },
    {
      id: 4756,
      nome: 'Boa Vista do Cadeado',
    },
    {
      id: 4757,
      nome: 'Boa Vista do Incra',
    },
    {
      id: 4758,
      nome: 'Campos Borges',
    },
    {
      id: 4759,
      nome: 'Cruz Alta',
    },
    {
      id: 4760,
      nome: 'Espumoso',
    },
    {
      id: 4761,
      nome: 'Fortaleza dos Valos',
    },
    {
      id: 4762,
      nome: 'Ibirubá',
    },
    {
      id: 4763,
      nome: 'Jacuizinho',
    },
    {
      id: 4764,
      nome: 'Jóia',
    },
    {
      id: 4765,
      nome: 'Quinze de Novembro',
    },
    {
      id: 4766,
      nome: 'Saldanha Marinho',
    },
    {
      id: 4767,
      nome: 'Salto do Jacuí',
    },
    {
      id: 4768,
      nome: 'Santa Bárbara do Sul',
    },
    {
      id: 4769,
      nome: 'Colorado',
    },
    {
      id: 4770,
      nome: 'Lagoa dos Três Cantos',
    },
    {
      id: 4771,
      nome: 'Não-Me-Toque',
    },
    {
      id: 4772,
      nome: 'Selbach',
    },
    {
      id: 4773,
      nome: 'Tapera',
    },
    {
      id: 4774,
      nome: 'Tio Hugo',
    },
    {
      id: 4775,
      nome: 'Victor Graeff',
    },
    {
      id: 4776,
      nome: 'Barros Cassal',
    },
    {
      id: 4777,
      nome: 'Fontoura Xavier',
    },
    {
      id: 4778,
      nome: 'Ibirapuitã',
    },
    {
      id: 4779,
      nome: 'Lagoão',
    },
    {
      id: 4780,
      nome: 'Mormaço',
    },
    {
      id: 4781,
      nome: 'São José do Herval',
    },
    {
      id: 4782,
      nome: 'Soledade',
    },
    {
      id: 4783,
      nome: 'Tunas',
    },
    {
      id: 4784,
      nome: 'André da Rocha',
    },
    {
      id: 4785,
      nome: 'Anta Gorda',
    },
    {
      id: 4786,
      nome: 'Arvorezinha',
    },
    {
      id: 4787,
      nome: 'Dois Lajeados',
    },
    {
      id: 4788,
      nome: 'Guabiju',
    },
    {
      id: 4789,
      nome: 'Guaporé',
    },
    {
      id: 4790,
      nome: 'Ilópolis',
    },
    {
      id: 4791,
      nome: 'Itapuca',
    },
    {
      id: 4792,
      nome: 'Montauri',
    },
    {
      id: 4793,
      nome: 'Nova Alvorada',
    },
    {
      id: 4794,
      nome: 'Nova Araçá',
    },
    {
      id: 4795,
      nome: 'Nova Bassano',
    },
    {
      id: 4796,
      nome: 'Nova Prata',
    },
    {
      id: 4797,
      nome: 'Paraí',
    },
    {
      id: 4798,
      nome: 'Protásio Alves',
    },
    {
      id: 4799,
      nome: 'Putinga',
    },
    {
      id: 4800,
      nome: 'São Jorge',
    },
    {
      id: 4801,
      nome: 'São Valentim do Sul',
    },
    {
      id: 4802,
      nome: 'Serafina Corrêa',
    },
    {
      id: 4803,
      nome: 'União da Serra',
    },
    {
      id: 4804,
      nome: 'Vista Alegre do Prata',
    },
    {
      id: 4805,
      nome: 'Bom Jesus',
    },
    {
      id: 4806,
      nome: 'Cambará do Sul',
    },
    {
      id: 4807,
      nome: 'Campestre da Serra',
    },
    {
      id: 4808,
      nome: 'Capão Bonito do Sul',
    },
    {
      id: 4809,
      nome: 'Esmeralda',
    },
    {
      id: 4810,
      nome: 'Ipê',
    },
    {
      id: 4811,
      nome: 'Jaquirana',
    },
    {
      id: 4812,
      nome: 'Lagoa Vermelha',
    },
    {
      id: 4813,
      nome: 'Monte Alegre dos Campos',
    },
    {
      id: 4814,
      nome: 'Muitos Capões',
    },
    {
      id: 4815,
      nome: 'Pinhal da Serra',
    },
    {
      id: 4816,
      nome: 'São Francisco de Paula',
    },
    {
      id: 4817,
      nome: 'São José dos Ausentes',
    },
    {
      id: 4818,
      nome: 'Vacaria',
    },
    {
      id: 4819,
      nome: 'Antônio Prado',
    },
    {
      id: 4820,
      nome: 'Bento Gonçalves',
    },
    {
      id: 4821,
      nome: 'Boa Vista do Sul',
    },
    {
      id: 4822,
      nome: 'Carlos Barbosa',
    },
    {
      id: 4823,
      nome: 'Caxias do Sul',
    },
    {
      id: 4824,
      nome: 'Coronel Pilar',
    },
    {
      id: 4825,
      nome: 'Cotiporã',
    },
    {
      id: 4826,
      nome: 'Fagundes Varela',
    },
    {
      id: 4827,
      nome: 'Farroupilha',
    },
    {
      id: 4828,
      nome: 'Flores da Cunha',
    },
    {
      id: 4829,
      nome: 'Garibaldi',
    },
    {
      id: 4830,
      nome: 'Monte Belo do Sul',
    },
    {
      id: 4831,
      nome: 'Nova Pádua',
    },
    {
      id: 4832,
      nome: 'Nova Roma do Sul',
    },
    {
      id: 4833,
      nome: 'Pinto Bandeira',
    },
    {
      id: 4834,
      nome: 'Santa Tereza',
    },
    {
      id: 4835,
      nome: 'São Marcos',
    },
    {
      id: 4836,
      nome: 'Veranópolis',
    },
    {
      id: 4837,
      nome: 'Vila Flores',
    },
    {
      id: 4838,
      nome: 'Capão do Cipó',
    },
    {
      id: 4839,
      nome: 'Itacurubi',
    },
    {
      id: 4840,
      nome: 'Jari',
    },
    {
      id: 4841,
      nome: 'Júlio de Castilhos',
    },
    {
      id: 4842,
      nome: 'Pinhal Grande',
    },
    {
      id: 4843,
      nome: 'Quevedos',
    },
    {
      id: 4844,
      nome: 'Santiago',
    },
    {
      id: 4845,
      nome: 'Tupanciretã',
    },
    {
      id: 4846,
      nome: 'Unistalda',
    },
    {
      id: 4847,
      nome: 'Cacequi',
    },
    {
      id: 4848,
      nome: 'Dilermando de Aguiar',
    },
    {
      id: 4849,
      nome: 'Itaara',
    },
    {
      id: 4850,
      nome: 'Jaguari',
    },
    {
      id: 4851,
      nome: 'Mata',
    },
    {
      id: 4852,
      nome: 'Nova Esperança do Sul',
    },
    {
      id: 4853,
      nome: 'Santa Maria',
    },
    {
      id: 4854,
      nome: 'São Martinho da Serra',
    },
    {
      id: 4855,
      nome: 'São Pedro do Sul',
    },
    {
      id: 4856,
      nome: 'São Sepé',
    },
    {
      id: 4857,
      nome: 'São Vicente do Sul',
    },
    {
      id: 4858,
      nome: 'Toropi',
    },
    {
      id: 4859,
      nome: 'Vila Nova do Sul',
    },
    {
      id: 4860,
      nome: 'Agudo',
    },
    {
      id: 4861,
      nome: 'Dona Francisca',
    },
    {
      id: 4862,
      nome: 'Faxinal do Soturno',
    },
    {
      id: 4863,
      nome: 'Formigueiro',
    },
    {
      id: 4864,
      nome: 'Ivorá',
    },
    {
      id: 4865,
      nome: 'Nova Palma',
    },
    {
      id: 4866,
      nome: 'Restinga Seca',
    },
    {
      id: 4867,
      nome: 'São João do Polêsine',
    },
    {
      id: 4868,
      nome: 'Silveira Martins',
    },
    {
      id: 4869,
      nome: 'Arroio do Tigre',
    },
    {
      id: 4870,
      nome: 'Candelária',
    },
    {
      id: 4871,
      nome: 'Estrela Velha',
    },
    {
      id: 4872,
      nome: 'Gramado Xavier',
    },
    {
      id: 4873,
      nome: 'Herveiras',
    },
    {
      id: 4874,
      nome: 'Ibarama',
    },
    {
      id: 4875,
      nome: 'Lagoa Bonita do Sul',
    },
    {
      id: 4876,
      nome: 'Mato Leitão',
    },
    {
      id: 4877,
      nome: 'Passa Sete',
    },
    {
      id: 4878,
      nome: 'Santa Cruz do Sul',
    },
    {
      id: 4879,
      nome: 'Segredo',
    },
    {
      id: 4880,
      nome: 'Sinimbu',
    },
    {
      id: 4881,
      nome: 'Sobradinho',
    },
    {
      id: 4882,
      nome: 'Vale do Sol',
    },
    {
      id: 4883,
      nome: 'Venâncio Aires',
    },
    {
      id: 4884,
      nome: 'Vera Cruz',
    },
    {
      id: 4885,
      nome: 'Arroio do Meio',
    },
    {
      id: 4886,
      nome: 'Bom Retiro do Sul',
    },
    {
      id: 4887,
      nome: 'Boqueirão do Leão',
    },
    {
      id: 4888,
      nome: 'Canudos do Vale',
    },
    {
      id: 4889,
      nome: 'Capitão',
    },
    {
      id: 4890,
      nome: 'Colinas',
    },
    {
      id: 4891,
      nome: 'Coqueiro Baixo',
    },
    {
      id: 4892,
      nome: 'Cruzeiro do Sul',
    },
    {
      id: 4893,
      nome: 'Doutor Ricardo',
    },
    {
      id: 4894,
      nome: 'Encantado',
    },
    {
      id: 4895,
      nome: 'Estrela',
    },
    {
      id: 4896,
      nome: 'Fazenda Vilanova',
    },
    {
      id: 4897,
      nome: 'Forquetinha',
    },
    {
      id: 4898,
      nome: 'Imigrante',
    },
    {
      id: 4899,
      nome: 'Lajeado',
    },
    {
      id: 4900,
      nome: 'Marques de Souza',
    },
    {
      id: 4901,
      nome: 'Muçum',
    },
    {
      id: 4902,
      nome: 'Nova Bréscia',
    },
    {
      id: 4903,
      nome: 'Paverama',
    },
    {
      id: 4904,
      nome: 'Pouso Novo',
    },
    {
      id: 4905,
      nome: 'Progresso',
    },
    {
      id: 4906,
      nome: 'Relvado',
    },
    {
      id: 4907,
      nome: 'Roca Sales',
    },
    {
      id: 4908,
      nome: 'Santa Clara do Sul',
    },
    {
      id: 4909,
      nome: 'Sério',
    },
    {
      id: 4910,
      nome: 'Tabaí',
    },
    {
      id: 4911,
      nome: 'Taquari',
    },
    {
      id: 4912,
      nome: 'Teutônia',
    },
    {
      id: 4913,
      nome: 'Travesseiro',
    },
    {
      id: 4914,
      nome: 'Vespasiano Correa',
    },
    {
      id: 4915,
      nome: 'Westfalia',
    },
    {
      id: 4916,
      nome: 'Cachoeira do Sul',
    },
    {
      id: 4917,
      nome: 'Cerro Branco',
    },
    {
      id: 4918,
      nome: 'Novo Cabrais',
    },
    {
      id: 4919,
      nome: 'Pantano Grande',
    },
    {
      id: 4920,
      nome: 'Paraíso do Sul',
    },
    {
      id: 4921,
      nome: 'Passo do Sobrado',
    },
    {
      id: 4922,
      nome: 'Rio Pardo',
    },
    {
      id: 4923,
      nome: 'Alto Feliz',
    },
    {
      id: 4924,
      nome: 'Barão',
    },
    {
      id: 4925,
      nome: 'Bom Princípio',
    },
    {
      id: 4926,
      nome: 'Brochier',
    },
    {
      id: 4927,
      nome: 'Capela de Santana',
    },
    {
      id: 4928,
      nome: 'Feliz',
    },
    {
      id: 4929,
      nome: 'Harmonia',
    },
    {
      id: 4930,
      nome: 'Linha Nova',
    },
    {
      id: 4931,
      nome: 'Maratá',
    },
    {
      id: 4932,
      nome: 'Montenegro',
    },
    {
      id: 4933,
      nome: 'Pareci Novo',
    },
    {
      id: 4934,
      nome: 'Poço das Antas',
    },
    {
      id: 4935,
      nome: 'Portão',
    },
    {
      id: 4936,
      nome: 'Salvador do Sul',
    },
    {
      id: 4937,
      nome: 'São José do Hortêncio',
    },
    {
      id: 4938,
      nome: 'São José do Sul',
    },
    {
      id: 4939,
      nome: 'São Pedro da Serra',
    },
    {
      id: 4940,
      nome: 'São Sebastião do Caí',
    },
    {
      id: 4941,
      nome: 'São Vendelino',
    },
    {
      id: 4942,
      nome: 'Tupandi',
    },
    {
      id: 4943,
      nome: 'Vale Real',
    },
    {
      id: 4944,
      nome: 'Canela',
    },
    {
      id: 4945,
      nome: 'Dois Irmãos',
    },
    {
      id: 4946,
      nome: 'Gramado',
    },
    {
      id: 4947,
      nome: 'Igrejinha',
    },
    {
      id: 4948,
      nome: 'Ivoti',
    },
    {
      id: 4949,
      nome: 'Lindolfo Collor',
    },
    {
      id: 4950,
      nome: 'Morro Reuter',
    },
    {
      id: 4951,
      nome: 'Nova Petrópolis',
    },
    {
      id: 4952,
      nome: 'Picada Café',
    },
    {
      id: 4953,
      nome: 'Presidente Lucena',
    },
    {
      id: 4954,
      nome: 'Riozinho',
    },
    {
      id: 4955,
      nome: 'Rolante',
    },
    {
      id: 4956,
      nome: 'Santa Maria do Herval',
    },
    {
      id: 4957,
      nome: 'Taquara',
    },
    {
      id: 4958,
      nome: 'Três Coroas',
    },
    {
      id: 4959,
      nome: 'Arroio dos Ratos',
    },
    {
      id: 4960,
      nome: 'Barão do Triunfo',
    },
    {
      id: 4961,
      nome: 'Butiá',
    },
    {
      id: 4962,
      nome: 'Charqueadas',
    },
    {
      id: 4963,
      nome: 'General Câmara',
    },
    {
      id: 4964,
      nome: 'Minas do Leão',
    },
    {
      id: 4965,
      nome: 'São Jerônimo',
    },
    {
      id: 4966,
      nome: 'Triunfo',
    },
    {
      id: 4967,
      nome: 'Vale Verde',
    },
    {
      id: 4968,
      nome: 'Alvorada',
    },
    {
      id: 4969,
      nome: 'Araricá',
    },
    {
      id: 4970,
      nome: 'Cachoeirinha',
    },
    {
      id: 4971,
      nome: 'Campo Bom',
    },
    {
      id: 4972,
      nome: 'Canoas',
    },
    {
      id: 4973,
      nome: 'Eldorado do Sul',
    },
    {
      id: 4974,
      nome: 'Estância Velha',
    },
    {
      id: 4975,
      nome: 'Esteio',
    },
    {
      id: 4976,
      nome: 'Glorinha',
    },
    {
      id: 4977,
      nome: 'Gravataí',
    },
    {
      id: 4978,
      nome: 'Guaíba',
    },
    {
      id: 4979,
      nome: 'Mariana Pimentel',
    },
    {
      id: 4980,
      nome: 'Nova Hartz',
    },
    {
      id: 4981,
      nome: 'Nova Santa Rita',
    },
    {
      id: 4982,
      nome: 'Novo Hamburgo',
    },
    {
      id: 4983,
      nome: 'Parobé',
    },
    {
      id: 4984,
      nome: 'Porto Alegre',
    },
    {
      id: 4985,
      nome: 'São Leopoldo',
    },
    {
      id: 4986,
      nome: 'Sapiranga',
    },
    {
      id: 4987,
      nome: 'Sapucaia do Sul',
    },
    {
      id: 4988,
      nome: 'Sertão Santana',
    },
    {
      id: 4989,
      nome: 'Viamão',
    },
    {
      id: 4990,
      nome: 'Arroio do Sal',
    },
    {
      id: 4991,
      nome: 'Balneário Pinhal',
    },
    {
      id: 4992,
      nome: 'Capão da Canoa',
    },
    {
      id: 4993,
      nome: 'Capivari do Sul',
    },
    {
      id: 4994,
      nome: 'Caraá',
    },
    {
      id: 4995,
      nome: 'Cidreira',
    },
    {
      id: 4996,
      nome: 'Dom Pedro de Alcântara',
    },
    {
      id: 4997,
      nome: 'Imbé',
    },
    {
      id: 4998,
      nome: 'Itati',
    },
    {
      id: 4999,
      nome: 'Mampituba',
    },
    {
      id: 5000,
      nome: 'Maquiné',
    },
    {
      id: 5001,
      nome: 'Morrinhos do Sul',
    },
    {
      id: 5002,
      nome: 'Mostardas',
    },
    {
      id: 5003,
      nome: 'Osório',
    },
    {
      id: 5004,
      nome: 'Palmares do Sul',
    },
    {
      id: 5005,
      nome: 'Santo Antônio da Patrulha',
    },
    {
      id: 5006,
      nome: 'Tavares',
    },
    {
      id: 5007,
      nome: 'Terra de Areia',
    },
    {
      id: 5008,
      nome: 'Torres',
    },
    {
      id: 5009,
      nome: 'Tramandaí',
    },
    {
      id: 5010,
      nome: 'Três Cachoeiras',
    },
    {
      id: 5011,
      nome: 'Três Forquilhas',
    },
    {
      id: 5012,
      nome: 'Xangri-lá',
    },
    {
      id: 5013,
      nome: 'Arambaré',
    },
    {
      id: 5014,
      nome: 'Barra do Ribeiro',
    },
    {
      id: 5015,
      nome: 'Camaquã',
    },
    {
      id: 5016,
      nome: 'Cerro Grande do Sul',
    },
    {
      id: 5017,
      nome: 'Chuvisca',
    },
    {
      id: 5018,
      nome: 'Dom Feliciano',
    },
    {
      id: 5019,
      nome: 'Sentinela do Sul',
    },
    {
      id: 5020,
      nome: 'Tapes',
    },
    {
      id: 5021,
      nome: 'Alegrete',
    },
    {
      id: 5022,
      nome: 'Barra do Quaraí',
    },
    {
      id: 5023,
      nome: 'Garruchos',
    },
    {
      id: 5024,
      nome: 'Itaqui',
    },
    {
      id: 5025,
      nome: 'Maçambará',
    },
    {
      id: 5026,
      nome: 'Manoel Viana',
    },
    {
      id: 5027,
      nome: 'Quaraí',
    },
    {
      id: 5028,
      nome: 'São Borja',
    },
    {
      id: 5029,
      nome: 'São Francisco de Assis',
    },
    {
      id: 5030,
      nome: 'Uruguaiana',
    },
    {
      id: 5031,
      nome: 'Rosário do Sul',
    },
    {
      id: 5032,
      nome: 'Santa Margarida do Sul',
    },
    {
      id: 5033,
      nome: 'São Gabriel',
    },
    {
      id: 5034,
      nome: 'Aceguá',
    },
    {
      id: 5035,
      nome: 'Bagé',
    },
    {
      id: 5036,
      nome: 'Dom Pedrito',
    },
    {
      id: 5037,
      nome: 'Hulha Negra',
    },
    {
      id: 5038,
      nome: 'Lavras do Sul',
    },
    {
      id: 5039,
      nome: 'Amaral Ferrador',
    },
    {
      id: 5040,
      nome: 'Caçapava do Sul',
    },
    {
      id: 5041,
      nome: 'Candiota',
    },
    {
      id: 5042,
      nome: 'Encruzilhada do Sul',
    },
    {
      id: 5043,
      nome: 'Pedras Altas',
    },
    {
      id: 5044,
      nome: 'Pinheiro Machado',
    },
    {
      id: 5045,
      nome: 'Piratini',
    },
    {
      id: 5046,
      nome: 'Santana da Boa Vista',
    },
    {
      id: 5047,
      nome: 'Arroio do Padre',
    },
    {
      id: 5048,
      nome: 'Canguçu',
    },
    {
      id: 5049,
      nome: 'Capão do Leão',
    },
    {
      id: 5050,
      nome: 'Cerrito',
    },
    {
      id: 5051,
      nome: 'Cristal',
    },
    {
      id: 5052,
      nome: 'Morro Redondo',
    },
    {
      id: 5053,
      nome: 'Pedro Osório',
    },
    {
      id: 5054,
      nome: 'Pelotas',
    },
    {
      id: 5055,
      nome: 'São Lourenço do Sul',
    },
    {
      id: 5056,
      nome: 'Turuçu',
    },
    {
      id: 5057,
      nome: 'Arroio Grande',
    },
    {
      id: 5058,
      nome: 'Herval',
    },
    {
      id: 5059,
      nome: 'Jaguarão',
    },
    {
      id: 5060,
      nome: 'Chuí',
    },
    {
      id: 5061,
      nome: 'Rio Grande',
    },
    {
      id: 5062,
      nome: 'Santa Vitória do Palmar',
    },
    {
      id: 5063,
      nome: 'São José do Norte',
    },
  ];

  const esportes = [
    {
      id: 1,
      nome: 'Futebol',
    },
    {
      id: 2,
      nome: 'Basquete',
    },
    {
      id: 3,
      nome: 'Vôlei',
    },
  ];

  // Exclui as tabelas se ela já existir
  await prisma.cidade.deleteMany({});
  await prisma.esporte.deleteMany({});

  // Cria as tabelas com os dados fixos
  await prisma.cidade.createMany({
    data: cidades,
  });
  await prisma.esporte.createMany({
    data: esportes,
  });

  console.log('Tabelas de cidades e esportes criadas com dados fixos.');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
