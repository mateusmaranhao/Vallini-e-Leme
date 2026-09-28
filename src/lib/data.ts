import { 
  FileText, 
  Calculator, 
  ShieldCheck, 
  Building2, 
  type LucideIcon 
} from 'lucide-react';

export interface Service {
  id: string;
  shortTitle: string;
  title: string;
  heroSubtitle: string;
  icon: LucideIcon;
  desc: string;
  sections: {
    title: string;
    content: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Service[] = [
  { 
    id: 'consulta-aposentadoria', 
    shortTitle: 'Consulta Aposentadoria',
    title: 'Consulta Especializada em Aposentadorias do INSS',
    heroSubtitle: 'Diagnóstico jurídico preciso para garantir o melhor benefício e evitar prejuízos na concessão.',
    icon: FileText, 
    desc: 'Análise minuciosa de todo o histórico do trabalhador para identificar a regra mais vantajosa de aposentadoria (idade, tempo de contribuição, especial e regras de transição da Reforma da Previdência). Corrigimos pendências no CNIS e atuamos no INSS e na Justiça Federal.',
    sections: [
      { 
        title: 'Análise Completa do CNIS e Vínculos', 
        content: 'Conferência detalhada do Extrato Previdenciário (CNIS), identificando salários zerados, vínculos em aberto, períodos extemporâneos e inconsistências cadastrais que travam pedidos.' 
      },
      { 
        title: 'Enquadramento nas Regras de Transição', 
        content: 'Estudo comparativo entre a regra de pontos, pedágio de 50%, pedágio de 100% e regra de idade mínima progressiva, assegurando a escolha de maior retorno financeiro vitalício.' 
      },
      { 
        title: 'Reconhecimento de Atividade Especial', 
        content: 'Avaliação de PPP (Perfil Profissiográfico Previdenciário) e LTCAT para conversão de tempo insalubre ou perigoso, antecipando a data da aposentadoria ou elevando o valor da RMI.' 
      },
      { 
        title: 'Tempo Rural e Regime Próprio (RPPS)', 
        content: 'Comprovação documental de trabalho rural em regime de economia familiar e averbação de Certidão de Tempo de Contribuição (CTC) de serviço público para somatória recíproca.' 
      },
      { 
        title: 'Reversão de Indeferimentos no INSS', 
        content: 'Interposição célere de recursos perante a Junta de Recursos da Previdência Social (CRPS) ou ajuizamento direto de Ação Judicial com pedido de tutela de urgência.' 
      },
      { 
        title: 'Aposentadoria da Pessoa com Deficiência', 
        content: 'Aplicação da Lei Complementar 142/2013 com redução de tempo de contribuição e idade para segurados com deficiência leve, moderada ou grave comprovada por perícia biopsicossocial.' 
      }
    ],
    faqs: [
      { 
        question: 'Quando devo agendar minha consulta de aposentadoria?', 
        answer: 'O ideal é consultar as advogadas antes de fazer o pedido no Meu INSS. Muitas pessoas aceitam valores inferiores ou regras desfavoráveis por desconhecerem regras de transição ou períodos não averbados.' 
      },
      { 
        question: 'O que levar para a consulta de aposentadoria no escritório?', 
        answer: 'Tenha em mãos seu Extrato CNIS (baixado no Meu INSS), Carteiras de Trabalho (todas as CTPS físicas e digital), carnês de recolhimento como autônomo (se houver) e documentos pessoais (RG/CPF).' 
      }
    ]
  },
  { 
    id: 'planejamento-previdenciario',
    shortTitle: 'Planejamento Previdenciário',
    title: 'Planejamento Previdenciário Estratégico', 
    heroSubtitle: 'Estudo preventivo e financeiro para conquistar a aposentadoria no momento ideal com o maior valor possível.',
    icon: Calculator, 
    desc: 'Um parecer jurídico completo e personalizado que projeta todos os cenários futuros de aposentadoria. Indicamos exatamente quanto você deve contribuir, até quando recolher e qual o impacto no valor do seu benefício.',
    sections: [
      { 
        title: 'Diagnóstico da Vida Laboral e Contributiva', 
        content: 'Mapeamento cronológico de cada contribuição vertida ao Regime Geral (INSS) e aos Regimes Próprios, detectando períodos faltantes ou contribuições abaixo do salário mínimo.' 
      },
      { 
        title: 'Simulação Financeira de Cenários Futuros', 
        content: 'Cálculo atuarial preciso comparando o retorno sobre o investimento de cada opção: antecipar a data com benefício menor versus aguardar alguns meses para obter um teto consideravelmente superior.' 
      },
      { 
        title: 'Indicação do Valor Ideal de Recolhimento', 
        content: 'Orientações claras para profissionais autônomos, empresários e segurados facultativos sobre alíquotas e bases de cálculo, evitando jogar dinheiro fora em contribuições desnecessárias.' 
      },
      { 
        title: 'Correção Prévia de Irregularidades', 
        content: 'Saneamento preventivo de indicadores de pendência (PEXT, PREM-RET, ACI) antes da data do requerimento, garantindo uma aprovação imediata e sem exigências prolongadas.' 
      },
      { 
        title: 'Relatório Jurídico Entregue em Mãos', 
        content: 'Entrega de relatório técnico e intuitivo contendo linha do tempo, gráficos comparativos de regras e estimativa da Renda Mensal Inicial (RMI) corrigida monetariamente.' 
      },
      { 
        title: 'Economia e Segurança Jurídica', 
        content: 'Decisões com embasamento legal sólido, impedindo que o trabalhador perca dezenas ou centenas de milhares de reais ao longo da aposentadoria por escolhas precipitadas.' 
      }
    ],
    faqs: [
      { 
        question: 'Com que idade ou tempo de contribuição devo fazer o planejamento?', 
        answer: 'O planejamento é recomendado a partir dos 35 a 45 anos, ou pelo menos de 2 a 5 anos antes da idade estimada de se aposentar, permitindo tempo hábil para retificar documentos e planejar os recolhimentos.' 
      },
      { 
        question: 'O simulador automático do Meu INSS é confiável?', 
        answer: 'Não totalmente. O simulador automático do INSS ignora tempos especiais, períodos rurais, sentenças trabalhistas e considera pendências não resolvidas, muitas vezes gerando cálculos incorretos e estimativas falsas.' 
      }
    ]
  },
  { 
    id: 'auxilios-por-incapacidade',
    shortTitle: 'Auxílios por Incapacidade',
    title: 'Auxílios por Incapacidade e Benefícios por Doença', 
    heroSubtitle: 'Defesa incisiva para restabelecimento e concessão de benefícios por incapacidade física ou mental.',
    icon: ShieldCheck, 
    desc: 'Atuação célere na obtenção de Auxílio por Incapacidade Temporária (auxílio-doença), Auxílio por Incapacidade Permanente (aposentadoria por invalidez), Auxílio-Acidente e Benefício de Prestação Continuada (BPC/LOAS).',
    sections: [
      { 
        title: 'Auxílio por Incapacidade Temporária', 
        content: 'Suporte completo para o segurado afastado de suas atividades habituais por mais de 15 dias em decorrência de enfermidade comum ou relacionada ao trabalho.' 
      },
      { 
        title: 'Aposentadoria por Incapacidade Permanente', 
        content: 'Comprovação da impossibilidade total e definitiva de reabilitação profissional para o exercício de atividade que garanta a subsistência do segurado.' 
      },
      { 
        title: 'Auxílio-Acidente Indenizatório', 
        content: 'Benefício pago mensalmente ao trabalhador que sofreu acidente (de qualquer natureza) e ficou com sequela definitiva que reduz sua capacidade habitual, podendo continuar trabalhando com carteira assinada.' 
      },
      { 
        title: 'BPC / LOAS (Idosos e Pessoas com Deficiência)', 
        content: 'Garantia de 1 salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência de qualquer idade em situação de vulnerabilidade social, sem necessidade de contribuição ao INSS.' 
      },
      { 
        title: 'Preparação para a Perícia Médica', 
        content: 'Organização rigorosa de prontuários, laudos médicos detalhados com CID, exames de imagem e receituários atualizados para assegurar assertividade perante o médico perito.' 
      },
      { 
        title: 'Ação Judicial contra Alta Programada e Cortes', 
        content: 'Reversão na Justiça Federal de altas médicas arbitrárias quando o trabalhador ainda permanece incapacitado para suas funções habituais.' 
      }
    ],
    faqs: [
      { 
        question: 'Meu benefício do INSS foi negado na perícia. O que fazer?', 
        answer: 'Não se desespere. O índice de indeferimentos administrativos no INSS é alto. Com o apoio de advogadas especialistas, analisamos o laudo do perito e ingressamos na Justiça Federal, onde uma perícia judicial imparcial com médico especialista será realizada.' 
      },
      { 
        question: 'Quem recebe auxílio-acidente perde o emprego?', 
        answer: 'Não. O auxílio-acidente possui natureza indenizatória. O trabalhador pode retornar ao trabalho normalmente, receber seu salário integral e continuar recebendo o auxílio até a data de sua aposentadoria.' 
      }
    ]
  },
  { 
    id: 'consulta-pessoas-juridicas', 
    shortTitle: 'Consulta para PJs',
    title: 'Consultoria Previdenciária para Pessoas Jurídicas', 
    heroSubtitle: 'Assessoria jurídica estratégica para empresas, sócios e gestores reduzirem passivos e otimizarem encargos.',
    icon: Building2, 
    desc: 'Consultoria jurídica focada em Direito Previdenciário Empresarial e Trabalhista. Atuamos na gestão do FAP/RAT, contestação de Nexo Técnico Epidemiológico Previdenciário (NTEP), prevenção de ações regressivas do INSS e suporte aos sócios.',
    sections: [
      { 
        title: 'Gestão Estratégica do FAP e RAT', 
        content: 'Auditoria e contestação anual dos índices do Fator Acidentário de Prevenção (FAP) e alíquotas do RAT, gerando expressiva economia financeira direta sobre a folha de pagamento.' 
      },
      { 
        title: 'Contestação de NTEP e Afastamentos Ocupacionais', 
        content: 'Impugnação de conversões indevidas de benefícios comuns (B31) em acidentários (B91), evitando aumento da carga tributária e riscos de estabilidade e responsabilidade civil.' 
      },
      { 
        title: 'Defesa em Ações Regressivas do INSS', 
        content: 'Patrocínio da defesa da empresa em ações promovidas pela Procuradoria Federal exigindo o ressarcimento de valores pagos a trabalhadores acidentados.' 
      },
      { 
        title: 'Planejamento Previdenciário para Sócios e Diretores', 
        content: 'Estruturação do pró-labore e contribuições dos administradores e sócios da pessoa jurídica, garantindo coberturas adequadas e aposentadorias seguras.' 
      },
      { 
        title: 'Compliance de Medicina e Segurança do Trabalho', 
        content: 'Revisão técnica de laudos ocupacionais (PGR, PCMSO, LTCAT) em harmonia com os eventos de Segurança e Saúde no Trabalho (SST) enviados ao eSocial.' 
      },
      { 
        title: 'Consultoria Trabalhista-Previdenciária Contínua', 
        content: 'Aconselhamento preventivo a departamentos de recursos humanos e gestores para mitigação de litígios e conformidade com as exigências dos órgãos fiscalizadores.' 
      }
    ],
    faqs: [
      { 
        question: 'Como a contestação do FAP pode reduzir custos na empresa?', 
        answer: 'O FAP varia de 0,5 a 2,0 e multiplica a alíquota do RAT (que pode chegar a 3% da folha). Corrigir equívocos do INSS na contagem de acidentes e afastamentos reduz drasticamente o valor recolhido todo mês.' 
      },
      { 
        question: 'O escritório atende empresas de qualquer porte em Campinas e região?', 
        answer: 'Sim. Atendemos desde micro e pequenas empresas até médias e grandes corporações sediadas em Campinas, Paulínia, Sumaré, Hortolândia, Indaiatuba e região metropolitana.' 
      }
    ]
  }
];

export const faqData = [
  {
    question: 'Como agendar uma consulta com as advogadas especialistas em INSS?',
    answer: 'Você pode entrar em contato direto pelo WhatsApp oficial (19) 95324-3159 ou comparecer em nosso escritório situado na Rua Barão de Jaguara, 707 - Centro, Campinas - SP. Realizamos atendimento presencial ou telepresencial com agendamento prévio.'
  },
  {
    question: 'Por que contratar uma advogada especialista em vez de pedir direto no Meu INSS?',
    answer: 'O INSS é um órgão administrativo que comumente concede benefícios com valores inferiores ao devido ou indefere pedidos legítimos por detalhes documentais. Advogadas especialistas conhecem as nuances da jurisprudência, corrigem falhas no CNIS e buscam a melhor regra e o maior valor mensal legalmente possível.'
  },
  {
    question: 'Quais documentos são necessários para a primeira consulta previdenciária?',
    answer: 'Geralmente solicitamos o documento de identidade com foto (RG/CNH), CPF, Carteiras de Trabalho (todas que possuir), senha de acesso ao portal Gov.br / Meu INSS, além de laudos e exames médicos recentes se o caso envolver auxílio por incapacidade.'
  },
  {
    question: 'O que é e para quem serve o Planejamento Previdenciário?',
    answer: 'É um estudo detalhado e preventivo de todo o histórico de contribuições do segurado. Serve para qualquer trabalhador, autônomo ou empresário que deseja saber exatamente quando irá se aposentar, qual será o valor do benefício e quanto deve contribuir para obter a máxima renda com menor custo.'
  },
  {
    question: 'O escritório atende empresas e pessoas jurídicas (PJs)?',
    answer: 'Sim. Oferecemos consultoria jurídica previdenciária empresarial focada em gestão de FAP/RAT, contestação de NTEP, revisão de laudos ocupacionais e defesa em ações regressivas movidas pelo INSS.'
  },
  {
    question: 'Onde está localizado o escritório em Campinas?',
    answer: 'Nosso endereço é Rua Barão de Jaguara, 707 - Centro, Campinas - SP, CEP 13015-926. Localização de fácil acesso no coração de Campinas, com estrutura acolhedora e privativa para atendimentos.'
  }
];

export const pillarsData = [
  {
    quote: "A proteção aos direitos sociais e previdenciários é a garantia da dignidade e segurança do trabalhador e de sua família ao longo de toda a vida.",
    role: "Compromisso Institucional",
    company: "Vallini & Leme Advocacia"
  },
  {
    quote: "Advocacia artesanal e humanizada: cada história de trabalho merece um cálculo individualizado, rigor técnico e transparência absoluta.",
    role: "Prática Previdenciária",
    company: "Especialistas em Ações INSS"
  },
  {
    quote: "Planejar a aposentadoria com antecedência é a melhor decisão financeira que um trabalhador pode tomar para assegurar o maior benefício.",
    role: "Planejamento Estratégico",
    company: "Campinas e Região"
  },
  {
    quote: "Segurança jurídica para pessoas físicas e empresas: assessoria preventiva e contenciosa assertiva no INSS e na Justiça Federal.",
    role: "Atuação Consultiva & Judicial",
    company: "Direito Previdenciário Contemporâneo"
  }
];
