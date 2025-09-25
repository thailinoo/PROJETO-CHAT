// Base de dados de documentos governamentais
const documents = [
    {
        acronym: "CNDT",
        name: "Certidão Negativa de Débitos Trabalhistas",
        description: "Documento que comprova a inexistência de débitos inadimplidos perante a Justiça do Trabalho."
    },
    {
        acronym: "CND",
        name: "Certidão Negativa de Débitos",
        description: "Certidão que atesta a regularidade fiscal de pessoa física ou jurídica junto à Receita Federal."
    },
    {
        acronym: "CNPJ",
        name: "Cadastro Nacional da Pessoa Jurídica",
        description: "Registro obrigatório de empresas junto à Receita Federal do Brasil."
    },
    {
        acronym: "CPF",
        name: "Cadastro de Pessoas Físicas",
        description: "Registro de contribuintes brasileiros junto à Receita Federal."
    },
    {
        acronym: "FGTS",
        name: "Fundo de Garantia do Tempo de Serviço",
        description: "Conta vinculada do trabalhador, formada por depósitos mensais do empregador."
    },
    {
        acronym: "INSS",
        name: "Instituto Nacional do Seguro Social",
        description: "Autarquia federal responsável pela previdência social no Brasil."
    },
    {
        acronym: "MEI",
        name: "Microempreendedor Individual",
        description: "Modalidade empresarial simplificada para formalização de pequenos negócios."
    },
    {
        acronym: "SIMPLES",
        name: "Sistema Integrado de Pagamento de Impostos",
        description: "Regime tributário diferenciado para micro e pequenas empresas."
    },
    {
        acronym: "DARF",
        name: "Documento de Arrecadação de Receitas Federais",
        description: "Formulário para pagamento de tributos e contribuições federais."
    },
    {
        acronym: "GPS",
        name: "Guia da Previdência Social",
        description: "Documento para recolhimento de contribuições previdenciárias."
    },
    {
        acronym: "GFIP",
        name: "Guia de Recolhimento do FGTS e Informações à Previdência Social",
        description: "Documento mensal obrigatório para empresas com empregados."
    },
    {
        acronym: "RAIS",
        name: "Relação Anual de Informações Sociais",
        description: "Declaração anual obrigatória sobre vínculos empregatícios."
    },
    {
        acronym: "DECLARAÇÃO MENOR APRENDIZ",
        name: "Declaração de Menor Aprendiz",
        description: "Declaração para comprovação de vínculo de menor aprendiz.",
        template: `DECLARAÇÃO DE MENOR APRENDIZ

Eu, [NOME DO RESPONSÁVEL LEGAL], portador(a) do CPF nº [CPF], RG nº [RG], residente e domiciliado(a) na [ENDEREÇO COMPLETO], na qualidade de responsável legal do(a) menor [NOME DO MENOR], nascido(a) em [DATA DE NASCIMENTO], portador(a) do CPF nº [CPF DO MENOR] e RG nº [RG DO MENOR], DECLARO, sob as penas da lei, que:

1. O(A) menor acima identificado(a) está devidamente matriculado(a) e frequentando regularmente o ensino [FUNDAMENTAL/MÉDIO] na escola [NOME DA ESCOLA];

2. Autorizo o(a) menor a exercer atividades na condição de aprendiz na empresa [NOME DA EMPRESA], CNPJ nº [CNPJ], localizada na [ENDEREÇO DA EMPRESA];

3. O horário de trabalho do(a) menor não interferirá em suas atividades escolares, respeitando os limites legais estabelecidos pela CLT e pelo Estatuto da Criança e do Adolescente;

4. Estou ciente de que o contrato de aprendizagem terá duração de [PERÍODO] e que o(a) menor receberá formação técnico-profissional adequada;

5. Declaro estar ciente de todos os direitos e deveres relacionados ao contrato de aprendizagem.

Por ser verdade, firmo a presente declaração.

[CIDADE], [DATA]

_________________________________
[NOME DO RESPONSÁVEL LEGAL]
Responsável Legal`
    },
    {
        acronym: "DECLARAÇÃO RESIDÊNCIA",
        name: "Declaração de Residência",
        description: "Declaração para comprovação de endereço residencial.",
        template: `DECLARAÇÃO DE RESIDÊNCIA

Eu, [NOME COMPLETO], portador(a) do CPF nº [CPF], RG nº [RG], DECLARO, sob as penas da lei, que:

Resido no endereço: [ENDEREÇO COMPLETO - RUA, NÚMERO, BAIRRO, CIDADE, CEP, ESTADO], há [TEMPO DE RESIDÊNCIA].

Esta declaração é feita para os fins que se fizerem necessários.

Por ser verdade, firmo a presente declaração.

[CIDADE], [DATA]

_________________________________
[NOME COMPLETO]
CPF: [CPF]`
    },
    {
        acronym: "DECLARAÇÃO RENDA",
        name: "Declaração de Renda",
        description: "Declaração para comprovação de renda mensal.",
        template: `DECLARAÇÃO DE RENDA

Eu, [NOME COMPLETO], portador(a) do CPF nº [CPF], RG nº [RG], residente e domiciliado(a) na [ENDEREÇO COMPLETO], DECLARO, sob as penas da lei, que:

Possuo renda mensal de R$ [VALOR] ([VALOR POR EXTENSO]), proveniente de [FONTE DA RENDA - ex: atividade autônoma, aposentadoria, pensão, etc.].

Esta declaração é feita para os fins que se fizerem necessários, especialmente para [FINALIDADE].

Por ser verdade, firmo a presente declaração.

[CIDADE], [DATA]

_________________________________
[NOME COMPLETO]
CPF: [CPF]`
    },
    {
        acronym: "REGULARIDADE FISCAL",
        name: "Regularidade Fiscal",
        description: "Conjunto de documentos necessários para comprovar regularidade fiscal de empresa.",
        documentList: [
            "Certidão Negativa de Débitos Relativos aos Tributos Federais (CND Federal)",
            "Certidão Negativa de Débitos Estaduais (CND Estadual)",
            "Certidão Negativa de Débitos Municipais (CND Municipal)",
            "Certidão Negativa de Débitos Trabalhistas (CNDT)",
            "Certificado de Regularidade do FGTS (CRF)",
            "Certidão Negativa de Débitos Previdenciários (CND INSS)",
            "Certidão Conjunta Negativa de Débitos (PGFN/RFB)"
        ]
    },
    {
        acronym: "HABILITAÇÃO JURÍDICA",
        name: "Habilitação Jurídica",
        description: "Documentos necessários para comprovação da habilitação jurídica de empresa em licitações.",
        documentList: [
            "Ato Constitutivo (Contrato Social ou Estatuto Social)",
            "Alterações Contratuais (se houver)",
            "Cartão CNPJ atualizado",
            "Inscrição Estadual",
            "Inscrição Municipal (se aplicável)",
            "Ata de Eleição da Diretoria (para sociedades anônimas)",
            "Procuração (se representado por procurador)",
            "Documento de Identidade dos sócios/administradores",
            "CPF dos sócios/administradores"
        ]
    },
    {
        acronym: "HABILITAÇÃO ECONÔMICO-FINANCEIRA",
        name: "Habilitação Econômico-Financeira",
        description: "Documentos necessários para comprovar capacidade financeira de empresa em licitações.",
        documentList: [
            "Balanço Patrimonial do último exercício",
            "Demonstração do Resultado do Exercício (DRE)",
            "Certidão Negativa de Falência e Concordata",
            "Certidão Negativa de Recuperação Judicial",
            "Demonstrações Contábeis registradas na Junta Comercial",
            "Declaração de Patrimônio Líquido",
            "Comprovação de Capital Social integralizado",
            "Índices de Liquidez Geral ≥ 1,0",
            "Índices de Liquidez Corrente ≥ 1,0",
            "Grau de Endividamento ≤ 0,5",
            "Garantia (quando exigida no edital)"
        ]
    },
    {
        acronym: "MULTINACIONAL",
        name: "Documentos Empresa Multinacional",
        description: "Documentos necessários para empresas multinacionais operando no Brasil.",
        documentList: [
            "Certificado de Registro de Capital Estrangeiro (RDE-ROF)",
            "Declaração de Capitais Brasileiros no Exterior (CBE)",
            "Registro no Banco Central (BACEN)",
            "Comprovação de Remessa de Lucros",
            "Declaração de Transfer Pricing",
            "Comprovação de Origem dos Recursos",
            "Ato Constitutivo da Matriz no País de Origem",
            "Procuração da Matriz para Representante no Brasil",
            "Comprovação de Situação Regular da Matriz",
            "Declaração de Benefíciário Final",
            "Comprovação de Compliance Anticorrupção"
        ]
    },
    {
        acronym: "RDE",
        name: "Registro Declaratório Eletrônico",
        description: "Sistema do Banco Central para registro de investimentos estrangeiros no Brasil."
    },
    {
        acronym: "CBE",
        name: "Capitais Brasileiros no Exterior",
        description: "Declaração obrigatória de investimentos brasileiros no exterior."
    },
    {
        acronym: "TRANSFER PRICING",
        name: "Preços de Transferência",
        description: "Documentação para comprovação de preços praticados entre empresas do mesmo grupo econômico.",
        documentList: [
            "Estudo de Preços de Transferência",
            "Documentação Comprobatória Local",
            "Relatório Mestre (Master File)",
            "Relatório Local (Local File)",
            "Declaração País-a-País (CbCR)"
        ]
    },
    {
        acronym: "ALVARÁ",
        name: "Alvará de Funcionamento",
        description: "Licença municipal obrigatória para funcionamento de estabelecimentos comerciais, industriais e de prestação de serviços."
    },
    {
        acronym: "LICENÇA AMBIENTAL",
        name: "Licença Ambiental",
        description: "Autorização para atividades que possam causar impacto ambiental. Tipos: LP (Prévia), LI (Instalação), LO (Operação)."
    },
    {
        acronym: "CAGED",
        name: "Cadastro Geral de Empregados e Desempregados",
        description: "Registro mensal de admissões e demissões de empregados sob regime CLT."
    },
    {
        acronym: "DIRF",
        name: "Declaração do Imposto de Renda Retido na Fonte",
        description: "Declaração anual de valores de IR retidos na fonte e pagamentos efetuados."
    },
    {
        acronym: "DEFIS",
        name: "Declaração de Informações Socioeconômicas e Fiscais",
        description: "Declaração anual obrigatória para empresas optantes pelo Simples Nacional."
    },
    {
        acronym: "DIPJ",
        name: "Declaração de Informações Econômico-Fiscais da Pessoa Jurídica",
        description: "Declaração anual de informações econômicas e fiscais para empresas do Lucro Real ou Presumido."
    },
    {
        acronym: "SPED",
        name: "Sistema Público de Escrituração Digital",
        description: "Sistema que unifica atividades de recepção, validação e armazenamento de livros e documentos fiscais.",
        documentList: [
            "ECD - Escrituração Contábil Digital",
            "ECF - Escrituração Contábil Fiscal",
            "EFD-Contribuições",
            "EFD-ICMS/IPI",
            "EFD-Reinf",
            "eSocial"
        ]
    },
    {
        acronym: "ESOCIAL",
        name: "Sistema de Escrituração Digital das Obrigações Fiscais",
        description: "Sistema que unifica o envio de informações trabalhistas, previdenciárias, tributárias e fiscais."
    },
    {
        acronym: "CEIS",
        name: "Cadastro Nacional de Empresas Inidôneas e Suspensas",
        description: "Cadastro que relaciona pessoas físicas e jurídicas impedidas de participar de licitações."
    },
    {
        acronym: "CNEP",
        name: "Cadastro Nacional de Empresas Punidas",
        description: "Cadastro de empresas punidas por atos contra a administração pública."
    },
    {
        acronym: "SICAF",
        name: "Sistema de Cadastramento Unificado de Fornecedores",
        description: "Sistema para cadastro de fornecedores do governo federal."
    },
    {
        acronym: "CRC",
        name: "Certificado de Registro Cadastral",
        description: "Documento que comprova inscrição no SICAF para participação em licitações federais."
    },
    {
        acronym: "DECLARAÇÃO HIPOSSUFICIÊNCIA",
        name: "Declaração de Hipossuficiência Econômica",
        description: "Declaração para comprovação de baixa renda para isenções e benefícios.",
        template: `DECLARAÇÃO DE HIPOSSUFICIÊNCIA ECONÔMICA

Eu, [NOME COMPLETO], portador(a) do CPF nº [CPF], RG nº [RG], residente e domiciliado(a) na [ENDEREÇO COMPLETO], DECLARO, sob as penas da lei, que:

1. Possuo renda familiar mensal de R$ [VALOR] ([VALOR POR EXTENSO]);

2. Não possuo condições financeiras de arcar com as custas processuais e honorários advocatícios sem prejuízo do sustento próprio ou da família;

3. Declaro ser economicamente hipossuficiente, fazendo jus aos benefícios da assistência judiciária gratuita;

4. Estou ciente das penalidades por declaração falsa.

Por ser verdade, firmo a presente declaração.

[CIDADE], [DATA]

_________________________________
[NOME COMPLETO]
CPF: [CPF]`
    },
    {
        acronym: "DECLARAÇÃO UNIÃO ESTÁVEL",
        name: "Declaração de União Estável",
        description: "Declaração para comprovação de relacionamento em união estável.",
        template: `DECLARAÇÃO DE UNIÃO ESTÁVEL

Nós, [NOME COMPLETO 1], portador(a) do CPF nº [CPF 1], RG nº [RG 1], e [NOME COMPLETO 2], portador(a) do CPF nº [CPF 2], RG nº [RG 2], DECLARAMOS, sob as penas da lei, que:

1. Vivemos em união estável desde [DATA DE INÍCIO];

2. Constituímos família, mantendo relacionamento público, contínuo e duradouro;

3. Temos o objetivo de constituir família;

4. Não possuímos impedimentos legais para o casamento;

5. Esta declaração é feita para os fins que se fizerem necessários.

Por ser verdade, firmamos a presente declaração.

[CIDADE], [DATA]

_________________________________        _________________________________
[NOME COMPLETO 1]                      [NOME COMPLETO 2]
CPF: [CPF 1]                          CPF: [CPF 2]

TESTEMUNHAS:

_________________________________        _________________________________
[NOME TESTEMUNHA 1]                    [NOME TESTEMUNHA 2]
CPF: [CPF TESTEMUNHA 1]               CPF: [CPF TESTEMUNHA 2]`
    },
    {
        acronym: "PROCURAÇÃO",
        name: "Procuração Simples",
        description: "Documento que outorga poderes para representação em atos específicos.",
        template: `PROCURAÇÃO

Eu, [NOME COMPLETO OUTORGANTE], [NACIONALIDADE], [ESTADO CIVIL], [PROFISSÃO], portador(a) do CPF nº [CPF], RG nº [RG], residente e domiciliado(a) na [ENDEREÇO COMPLETO], pelo presente instrumento, nomeio e constituo meu bastante procurador(a) [NOME COMPLETO OUTORGADO], [NACIONALIDADE], [ESTADO CIVIL], [PROFISSÃO], portador(a) do CPF nº [CPF OUTORGADO], RG nº [RG OUTORGADO], residente na [ENDEREÇO OUTORGADO], a quem confiro poderes para:

[ESPECIFICAR OS PODERES - ex: representar-me perante órgãos públicos, assinar documentos, etc.]

Esta procuração é válida até [DATA DE VALIDADE] e poderá ser revogada a qualquer tempo.

Por ser verdade, firmo a presente procuração.

[CIDADE], [DATA]

_________________________________
[NOME COMPLETO OUTORGANTE]
Outorgante`
    },
    {
        acronym: "CTPS",
        name: "Carteira de Trabalho e Previdência Social",
        description: "Documento obrigatório para o trabalhador brasileiro, registra vínculos empregatícios e contribuições previdenciárias."
    },
    {
        acronym: "PIS",
        name: "Programa de Integração Social",
        description: "Cadastro do trabalhador para recebimento de benefícios como abono salarial e seguro-desemprego."
    },
    {
        acronym: "PASEP",
        name: "Programa de Formação do Patrimônio do Servidor Público",
        description: "Equivalente ao PIS para servidores públicos federais."
    },
    {
        acronym: "CBO",
        name: "Classificação Brasileira de Ocupações",
        description: "Sistema que classifica as ocupações do mercado de trabalho brasileiro."
    },
    {
        acronym: "CIPA",
        name: "Comissão Interna de Prevenção de Acidentes",
        description: "Comissão obrigatória em empresas para prevenção de acidentes e doenças do trabalho."
    },
    {
        acronym: "PPRA",
        name: "Programa de Prevenção de Riscos Ambientais",
        description: "Programa obrigatório que visa preservar a saúde dos trabalhadores através da antecipação e controle de riscos."
    },
    {
        acronym: "PCMSO",
        name: "Programa de Controle Médico de Saúde Ocupacional",
        description: "Programa que estabelece diretrizes para controle médico dos trabalhadores."
    },
    {
        acronym: "CAT",
        name: "Comunicação de Acidente do Trabalho",
        description: "Documento para comunicar acidentes de trabalho à Previdência Social."
    },
    {
        acronym: "LTCAT",
        name: "Laudo Técnico das Condições Ambientais do Trabalho",
        description: "Laudo que comprova exposição a agentes nocivos para fins de aposentadoria especial."
    },
    {
        acronym: "PPP",
        name: "Perfil Profissiográfico Previdenciário",
        description: "Documento que comprova condições de trabalho do empregado para fins previdenciários."
    }
];

// Array para armazenar tarefas
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Array para armazenar aprendizados
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Navegação entre seções
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
    
    // Carregar tarefas salvas
    renderTasks();
    
    // Carregar aprendizados salvos
    renderNotes();
    updateTagsFilter();
    
    // Mensagem inicial do chat com IA melhorada
    setTimeout(() => {
        addChatMessage('🚀 **SISTEMA SALES OPS - GE HEALTHCARE**\n\n🤖 **IA AVANÇADA ATIVADA!**\n\nOlá! Sou sua assistente inteligente com conhecimento especializado em:\n\n📋 **DOCUMENTAÇÃO:**\n• Certidões e declarações\n• Processos licitatórios\n• Documentos multinacionais\n\n💼 **SALES OPERATIONS:**\n• KPIs e métricas\n• Pipeline e forecast\n• CRM e automação\n\n🧠 **CONHECIMENTO GERAL:**\n• Ciência e tecnologia\n• História e cultura\n• Matemática e física\n\n💡 **EXEMPLOS:**\n• "O que é CNDT?"\n• "Como calcular ROI?"\n• "Explique sales ops"\n• "O que é fotossíntese?"\n\n✨ **DICA:** Digite "conhecimento" para ver todos os temas disponíveis!', 'bot');
    }, 800);

    
    // Event listener para Enter na pesquisa
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDocument();
        }
    });
    
    // Placeholder dinâmico para busca
    const searchInput = document.getElementById('searchInput');
    const placeholders = [
        'Digite "documentos" para ver todos...',
        'Ex: CNDT, CND, declaração...',
        'Busque por: licitação, fiscal...',
        'Digite qualquer documento...'
    ];
    let placeholderIndex = 0;
    
    setInterval(() => {
        searchInput.placeholder = placeholders[placeholderIndex];
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
    }, 3000);
    
    // Event listener para Enter nas tarefas
    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    // Event listener para Enter no chat
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

// Função de pesquisa de documentos
function searchDocument() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if (!searchTerm) {
        resultsContainer.innerHTML = '<div class="no-results">Digite uma sigla ou nome para pesquisar</div>';
        return;
    }
    
    // Termos que mostram todos os documentos
    const showAllTerms = ['documento', 'documentos', 'buscar', 'lista', 'todos', 'ver todos', 'mostrar', 'listar'];
    const shouldShowAll = showAllTerms.some(term => searchTerm.includes(term));
    
    let results;
    
    if (shouldShowAll) {
        // Mostrar todos os documentos organizados por categoria
        results = documents;
        const totalDocs = results.length;
        
        const resultsHTML = `
            <div class="search-header">
                <h3>📋 Todos os Documentos Disponíveis (${totalDocs})</h3>
                <p>Lista completa de documentos governamentais e declarações</p>
            </div>
            ${results.map(doc => `
                <div class="document-card">
                    <div class="document-title">${doc.acronym} - ${doc.name}</div>
                    <div class="document-description">${doc.description}</div>
                    ${doc.template ? `
                        <div class="template-section">
                            <strong>📄 Modelo de Declaração:</strong>
                            <div class="template-content">${doc.template}</div>
                            <button class="copy-btn" onclick="copyTemplate('${doc.acronym}')">📋 Copiar Modelo</button>
                        </div>
                    ` : ''}
                    ${doc.documentList ? `
                        <div class="document-list">
                            <h4>📋 Documentos Necessários:</h4>
                            <ul>
                                ${doc.documentList.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        `;
        
        resultsContainer.innerHTML = resultsHTML;
        return;
    }
    
    // Busca específica
    results = documents.filter(doc => 
        doc.acronym.toLowerCase().includes(searchTerm) ||
        doc.name.toLowerCase().includes(searchTerm) ||
        doc.description.toLowerCase().includes(searchTerm) ||
        (searchTerm.includes('multinacional') && doc.acronym === 'MULTINACIONAL') ||
        (searchTerm.includes('empresa estrangeira') && doc.acronym === 'MULTINACIONAL') ||
        (searchTerm.includes('trabalho') && ['CTPS', 'PIS', 'CIPA', 'PPRA', 'CAT'].includes(doc.acronym)) ||
        (searchTerm.includes('saude') && ['PCMSO', 'PPRA', 'CIPA'].includes(doc.acronym)) ||
        (searchTerm.includes('ambiental') && ['LICENÇA AMBIENTAL', 'PPRA'].includes(doc.acronym)) ||
        (searchTerm.includes('declaracao') && doc.name.toLowerCase().includes('declaração')) ||
        (searchTerm.includes('procuracao') && doc.acronym === 'PROCURAÇÃO') ||
        (searchTerm.includes('licitacao') && ['HABILITAÇÃO JURÍDICA', 'HABILITAÇÃO ECONÔMICO-FINANCEIRA', 'REGULARIDADE FISCAL'].includes(doc.acronym)) ||
        (searchTerm.includes('financeira') && doc.acronym === 'HABILITAÇÃO ECONÔMICO-FINANCEIRA') ||
        (searchTerm.includes('juridica') && doc.acronym === 'HABILITAÇÃO JURÍDICA') ||
        (searchTerm.includes('fiscal') && doc.acronym === 'REGULARIDADE FISCAL') ||
        (doc.documentList && doc.documentList.some(item => item.toLowerCase().includes(searchTerm)))
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>❌ Nenhum documento encontrado para "${searchTerm}"</h3>
                <p>💡 <strong>Dicas:</strong></p>
                <ul>
                    <li>Digite "documentos" para ver todos</li>
                    <li>Use siglas como: CNDT, CND, CNPJ</li>
                    <li>Termos como: declaração, certidão, habilitação</li>
                </ul>
            </div>
        `;
        return;
    }
    
    const resultsHTML = `
        <div class="search-header">
            <h3>🔍 Resultados para "${searchTerm}" (${results.length})</h3>
        </div>
        ${results.map(doc => `
            <div class="document-card">
                <div class="document-title">${doc.acronym} - ${doc.name}</div>
                <div class="document-description">${doc.description}</div>
                ${doc.template ? `
                    <div class="template-section">
                        <strong>📄 Modelo de Declaração:</strong>
                        <div class="template-content">${doc.template}</div>
                        <button class="copy-btn" onclick="copyTemplate('${doc.acronym}')">📋 Copiar Modelo</button>
                    </div>
                ` : ''}
                ${doc.documentList ? `
                    <div class="document-list">
                        <h4>📋 Documentos Necessários:</h4>
                        <ul>
                            ${doc.documentList.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        `).join('')}
    `;
    
    resultsContainer.innerHTML = resultsHTML;
}

// Função para adicionar tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (!taskText) return;
    
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        date: new Date().toLocaleDateString('pt-BR')
    };
    
    tasks.unshift(task);
    saveTasks();
    renderTasks();
    taskInput.value = '';
}

// Função para renderizar tarefas
function renderTasks() {
    const taskList = document.getElementById('taskList');
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="no-results">Nenhuma atividade pendente</div>';
        return;
    }
    
    const tasksHTML = tasks.map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}">
            <div>
                <strong>${task.text}</strong>
                <small style="display: block; color: #666; margin-top: 0.2rem;">${task.date}</small>
            </div>
            <div class="task-actions">
                <button class="btn-small btn-complete" onclick="toggleTask(${task.id})">
                    ${task.completed ? 'Reabrir' : 'Concluir'}
                </button>
                <button class="btn-small btn-delete" onclick="deleteTask(${task.id})">
                    Excluir
                </button>
            </div>
        </li>
    `).join('');
    
    taskList.innerHTML = tasksHTML;
}

// Função para alternar status da tarefa
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

// Função para excluir tarefa
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

// Função para salvar tarefas no localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Funções para gestão de aprendizados
function addNote() {
    const title = document.getElementById('noteTitle').value.trim();
    const content = document.getElementById('noteContent').value.trim();
    const tags = document.getElementById('noteTags').value.trim();
    
    if (!title || !content) {
        alert('Preencha título e conteúdo!');
        return;
    }
    
    const note = {
        id: Date.now(),
        title: title,
        content: content,
        tags: tags ? tags.split(',').map(tag => tag.trim().toLowerCase()) : [],
        date: new Date().toLocaleDateString('pt-BR'),
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    notes.unshift(note);
    saveNotes();
    renderNotes();
    updateTagsFilter();
    
    // Limpar campos
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    document.getElementById('noteTags').value = '';
}

function renderNotes() {
    const notesList = document.getElementById('notesList');
    const searchTerm = document.getElementById('searchNotes').value.toLowerCase();
    const selectedTag = document.getElementById('filterTags').value;
    
    let filteredNotes = notes;
    
    // Filtrar por busca
    if (searchTerm) {
        filteredNotes = filteredNotes.filter(note => 
            note.title.toLowerCase().includes(searchTerm) ||
            note.content.toLowerCase().includes(searchTerm) ||
            note.tags.some(tag => tag.includes(searchTerm))
        );
    }
    
    // Filtrar por tag
    if (selectedTag) {
        filteredNotes = filteredNotes.filter(note => 
            note.tags.includes(selectedTag)
        );
    }
    
    if (filteredNotes.length === 0) {
        notesList.innerHTML = '<div class="no-notes">Nenhum aprendizado encontrado. Comece anotando algo novo!</div>';
        return;
    }
    
    const notesHTML = filteredNotes.map(note => `
        <div class="note-card" onclick="viewNote(${note.id})" style="cursor: pointer;">
            <div class="note-header">
                <h3 class="note-title">${note.title}</h3>
                <span class="note-date">${note.timestamp}</span>
            </div>
            <div class="note-tags-display">
                ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="note-actions" onclick="event.stopPropagation()">
                <button class="btn-edit" onclick="editNote(${note.id})">Editar</button>
                <button class="btn-delete" onclick="deleteNote(${note.id})">Excluir</button>
            </div>
        </div>
    `).join('');
    
    notesList.innerHTML = notesHTML;
}

function filterNotes() {
    renderNotes();
}

function updateTagsFilter() {
    const filterTags = document.getElementById('filterTags');
    const allTags = [...new Set(notes.flatMap(note => note.tags))].sort();
    
    const currentValue = filterTags.value;
    filterTags.innerHTML = '<option value="">Todas as tags</option>';
    
    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        if (tag === currentValue) option.selected = true;
        filterTags.appendChild(option);
    });
}

function editNote(id) {
    const note = notes.find(n => n.id === id);
    if (!note) return;
    
    document.getElementById('noteTitle').value = note.title;
    document.getElementById('noteContent').value = note.content;
    document.getElementById('noteTags').value = note.tags.join(', ');
    
    deleteNote(id);
    document.getElementById('noteTitle').focus();
}

function deleteNote(id) {
    if (confirm('Tem certeza que deseja excluir este aprendizado?')) {
        notes = notes.filter(n => n.id !== id);
        saveNotes();
        renderNotes();
        updateTagsFilter();
    }
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Função para visualizar aprendizado no modal
function viewNote(id) {
    const note = notes.find(n => n.id === id);
    if (!note) return;
    
    document.getElementById('modalTitle').textContent = note.title;
    document.getElementById('modalContent').textContent = note.content;
    document.getElementById('modalTags').innerHTML = note.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    document.getElementById('modalDate').textContent = `Criado em: ${note.timestamp}`;
    
    document.getElementById('noteModal').style.display = 'block';
}

// Função para fechar modal
function closeNoteModal() {
    document.getElementById('noteModal').style.display = 'none';
}

// Fechar modal clicando fora
window.onclick = function(event) {
    const modal = document.getElementById('noteModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Função para copiar modelo de declaração
function copyTemplate(acronym) {
    const doc = documents.find(d => d.acronym === acronym);
    if (doc && doc.template) {
        navigator.clipboard.writeText(doc.template).then(() => {
            // Feedback visual
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = '✅ Copiado!';
            btn.style.background = '#28a745';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#28a745';
            }, 2000);
        }).catch(() => {
            alert('Erro ao copiar. Selecione o texto manualmente.');
        });
    }
}

// Base de conhecimento universal expandida
const chatKnowledge = {
    // Documentação
    'cndt': 'CNDT é a Certidão Negativa de Débitos Trabalhistas. Emitida pelo TST, comprova que não há débitos trabalhistas. Validade: 180 dias.',
    'cnd': 'CND é a Certidão Negativa de Débitos. Pode ser federal, estadual ou municipal. Comprova regularidade fiscal.',
    'rde': 'RDE é o Registro Declaratório Eletrônico do Banco Central. Obrigatório para investimentos estrangeiros no Brasil.',
    
    // Termos de Negócios
    'faturamento': 'Faturamento é o valor total das vendas de uma empresa em um período. Representa a receita bruta antes de descontar custos e despesas.',
    'receita': 'Receita é o dinheiro que entra na empresa através das vendas de produtos ou serviços. Pode ser bruta (total) ou líquida (após descontos).',
    'lucro': 'Lucro é o que sobra da receita após subtrair todos os custos e despesas. Pode ser bruto (receita - custos) ou líquido (após impostos).',
    'roi': 'ROI (Return on Investment) é o retorno sobre investimento. Fórmula: (Ganho - Investimento) / Investimento x 100. Mede a eficiência de um investimento.',
    'kpi': 'KPI (Key Performance Indicator) são indicadores-chave de desempenho. Métricas usadas para medir o sucesso de objetivos estratégicos.',
    'pipeline': 'Pipeline de vendas é o processo que acompanha leads desde o primeiro contato até o fechamento da venda. Dividido em etapas.',
    'lead': 'Lead é um potencial cliente que demonstrou interesse no produto/serviço. Pode ser qualificado (MQL/SQL) ou não qualificado.',
    'crm': 'CRM (Customer Relationship Management) é um sistema para gerenciar relacionamento com clientes, vendas e marketing.',
    'churn': 'Churn é a taxa de cancelamento/perda de clientes. Fórmula: (Clientes perdidos / Total de clientes) x 100.',
    'ltv': 'LTV (Lifetime Value) é o valor total que um cliente gera durante todo relacionamento com a empresa.',
    'cac': 'CAC (Customer Acquisition Cost) é o custo para adquirir um novo cliente. Fórmula: Gastos com marketing e vendas / Número de clientes adquiridos.',
    'mrr': 'MRR (Monthly Recurring Revenue) é a receita recorrente mensal. Comum em modelos de assinatura/SaaS.',
    'arr': 'ARR (Annual Recurring Revenue) é a receita recorrente anual. MRR x 12 meses.',
    
    // Sales Ops
    'sales ops': 'Sales Operations é a área responsável por otimizar processos de vendas, analisar dados, gerenciar ferramentas e dar suporte estratégico ao time comercial.',
    'forecast': 'Forecast é a previsão de vendas baseada em dados históricos e pipeline atual. Ajuda no planejamento estratégico.',
    'quota': 'Quota é a meta de vendas estabelecida para vendedores ou equipes em um período específico.',
    'territory': 'Território de vendas é a área geográfica ou segmento de mercado atribuído a um vendedor.',
    'commission': 'Comissão é a remuneração variável paga aos vendedores baseada em suas vendas ou resultados.',
    
    // Financeiro
    'fluxo de caixa': 'Fluxo de caixa é o movimento de entrada e saída de dinheiro da empresa. Essencial para gestão financeira.',
    'capital de giro': 'Capital de giro é o dinheiro necessário para manter as operações diárias da empresa funcionando.',
    'ebitda': 'EBITDA é o lucro antes de juros, impostos, depreciação e amortização. Mede a performance operacional.',
    'margem': 'Margem é a diferença entre preço de venda e custo. Pode ser bruta (%) ou absoluta (R$).',
    
    // Marketing
    'ctr': 'CTR (Click-Through Rate) é a taxa de cliques. Fórmula: (Cliques / Impressões) x 100.',
    'cpm': 'CPM (Cost Per Mille) é o custo por mil impressões em campanhas publicitárias.',
    'cpc': 'CPC (Cost Per Click) é o custo por clique em campanhas de marketing digital.',
    'conversion rate': 'Taxa de conversão é o percentual de visitantes que realizam a ação desejada (compra, cadastro, etc.).',
    
    // Tecnologia
    'api': 'API (Application Programming Interface) é um conjunto de protocolos que permite comunicação entre diferentes sistemas.',
    'saas': 'SaaS (Software as a Service) é um modelo onde o software é oferecido como serviço via internet, geralmente por assinatura.',
    'cloud': 'Cloud (nuvem) é a entrega de serviços de computação via internet, incluindo armazenamento, processamento e software.',
    
    // Gestão
    'okr': 'OKR (Objectives and Key Results) é uma metodologia de gestão que define objetivos e resultados-chave mensuráveis.',
    'kra': 'KRA (Key Result Area) são áreas-chave de resultado onde o foco e esforço devem ser concentrados.',
    'sla': 'SLA (Service Level Agreement) é um acordo que define níveis de serviço esperados entre fornecedor e cliente.',
    
    // Períodos e Tempo
    'quarter': 'Quarter (trimestre) é um período de 3 meses. Usado para planejamento e análise de resultados empresariais.',
    'q1': 'Q1 é o primeiro trimestre do ano (janeiro, fevereiro, março). Usado em planejamento e relatórios financeiros.',
    'q2': 'Q2 é o segundo trimestre do ano (abril, maio, junho). Período importante para revisão de metas.',
    'q3': 'Q3 é o terceiro trimestre do ano (julho, agosto, setembro). Momento de aceleração para atingir metas anuais.',
    'q4': 'Q4 é o quarto trimestre do ano (outubro, novembro, dezembro). Período final para fechamento de metas anuais.',
    'ytd': 'YTD (Year to Date) significa "do início do ano até agora". Usado para comparar performance acumulada no ano.',
    'mtd': 'MTD (Month to Date) significa "do início do mês até agora". Métrica para acompanhar performance mensal.',
    'qtd': 'QTD (Quarter to Date) significa "do início do trimestre até agora". Acompanha performance trimestral.',
    'fiscal year': 'Ano fiscal é o período de 12 meses usado para contabilidade. Pode diferir do ano calendário.',
    
    // Métricas Avançadas
    'nps': 'NPS (Net Promoter Score) mede satisfação do cliente. Escala de 0-10: Promotores (9-10), Neutros (7-8), Detratores (0-6).',
    'csat': 'CSAT (Customer Satisfaction) mede satisfação do cliente em interações específicas. Geralmente em escala de 1-5.',
    'ces': 'CES (Customer Effort Score) mede o esforço que o cliente precisa fazer para resolver um problema.',
    'aov': 'AOV (Average Order Value) é o valor médio por pedido. Fórmula: Receita total / Número de pedidos.',
    'arpu': 'ARPU (Average Revenue Per User) é a receita média por usuário. Comum em SaaS e telecomunicações.',
    'dau': 'DAU (Daily Active Users) é o número de usuários ativos diários. Métrica importante para apps e plataformas.',
    'mau': 'MAU (Monthly Active Users) é o número de usuários ativos mensais. Indica engajamento de longo prazo.',
    'retention': 'Retention (retenção) é a capacidade de manter clientes ao longo do tempo. Oposto do churn.',
    
    // Vendas Avançado
    'upsell': 'Upsell é vender um produto/serviço mais caro ou premium para cliente existente.',
    'cross-sell': 'Cross-sell é vender produtos/serviços complementares para cliente existente.',
    'downsell': 'Downsell é oferecer opção mais barata quando cliente recusa oferta principal.',
    'win rate': 'Win rate é a taxa de fechamento de vendas. Fórmula: Vendas fechadas / Total de oportunidades x 100.',
    'sales velocity': 'Sales velocity mede velocidade de geração de receita. Fórmula: (Oportunidades x Win rate x Ticket médio) / Ciclo de vendas.',
    'deal size': 'Deal size é o valor médio dos contratos fechados. Também chamado de ticket médio.',
    'sales cycle': 'Sales cycle (ciclo de vendas) é o tempo médio desde o primeiro contato até o fechamento.',
    'qualified lead': 'Qualified lead é um prospect que atende critérios específicos e tem potencial real de compra.',
    'mql': 'MQL (Marketing Qualified Lead) é lead qualificado pelo marketing, pronto para nutrição.',
    'sql': 'SQL (Sales Qualified Lead) é lead qualificado por vendas, pronto para abordagem comercial.',
    
    // Financeiro Avançado
    'burn rate': 'Burn rate é a velocidade que empresa gasta dinheiro. Importante para startups e controle de caixa.',
    'runway': 'Runway é quanto tempo empresa consegue operar com dinheiro atual. Fórmula: Caixa / Burn rate.',
    'gross margin': 'Gross margin (margem bruta) é a diferença entre receita e custo dos produtos vendidos.',
    'net margin': 'Net margin (margem líquida) é o lucro líquido como percentual da receita.',
    'working capital': 'Working capital (capital de giro) é ativo circulante menos passivo circulante.',
    'cash flow': 'Cash flow (fluxo de caixa) é entrada menos saída de dinheiro em período específico.',
    'break-even': 'Break-even é o ponto onde receitas igualam custos totais. Não há lucro nem prejuízo.',
    'valuation': 'Valuation (avaliação) é o valor estimado de uma empresa baseado em diferentes metodologias.',
    
    // Tecnologia e Processos
    'automation': 'Automation (automação) é usar tecnologia para executar tarefas sem intervenção humana.',
    'integration': 'Integration (integração) é conectar diferentes sistemas para compartilhar dados automaticamente.',
    'dashboard': 'Dashboard é painel visual que apresenta métricas e KPIs importantes de forma consolidada.',
    'analytics': 'Analytics é análise de dados para extrair insights e tomar decisões baseadas em evidências.',
    'big data': 'Big Data são conjuntos de dados muito grandes e complexos que requerem ferramentas especiais para análise.',
    'machine learning': 'Machine Learning é inteligência artificial que permite sistemas aprenderem automaticamente com dados.',
    
    // Estratégia
    'market share': 'Market share (participação de mercado) é o percentual que empresa representa no mercado total.',
    'competitive advantage': 'Competitive advantage (vantagem competitiva) é o que diferencia empresa dos concorrentes.',
    'value proposition': 'Value proposition (proposta de valor) é o benefício único que produto/serviço oferece ao cliente.',
    'go-to-market': 'Go-to-market (GTM) é a estratégia para lançar produto no mercado e alcançar clientes.',
    'product-market fit': 'Product-market fit é quando produto satisfaz demanda de mercado viável.',
    'scalability': 'Scalability (escalabilidade) é capacidade de crescer sem aumentar custos proporcionalmente.',
    
    // Recursos Humanos
    'onboarding': 'Onboarding é processo de integração de novos funcionários ou clientes.',
    'turnover': 'Turnover é taxa de rotatividade de funcionários. Alto turnover indica problemas organizacionais.',
    'headcount': 'Headcount é o número total de funcionários da empresa.',
    'performance review': 'Performance review é avaliação periódica do desempenho dos funcionários.',
    
    // Outros Termos Importantes
    'benchmark': 'Benchmark é ponto de referência usado para comparar performance com padrões do mercado.',
    'milestone': 'Milestone é marco importante no cronograma de projeto ou desenvolvimento de negócio.',
    'pivot': 'Pivot é mudança estratégica significativa no modelo de negócio ou produto.',
    'mvp': 'MVP (Minimum Viable Product) é versão mínima do produto com funcionalidades essenciais.',
    'proof of concept': 'Proof of concept (POC) é demonstração de viabilidade de ideia ou tecnologia.',
    'stakeholder': 'Stakeholder é qualquer pessoa ou grupo interessado ou afetado pelos resultados da empresa.',
    'bottleneck': 'Bottleneck (gargalo) é ponto de congestionamento que limita capacidade ou performance do processo.',
    
    // Situações Específicas para Ausência da Chefe
    'delegação': 'Delegação é transferir responsabilidade e autoridade para outra pessoa. Durante ausência do gestor, é essencial ter delegações claras.',
    'escalação': 'Escalação é processo de elevar questões para nível hierárquico superior quando necessário. Importante saber quando e como escalar.',
    'autonomia': 'Autonomia é capacidade de tomar decisões independentes dentro do escopo de responsabilidade. Fundamental durante ausência do gestor.',
    'backup': 'Backup é pessoa ou processo alternativo para situações de emergência. Sempre tenha backup para processos críticos.',
    'handover': 'Handover é processo de transferência de responsabilidades e informações entre pessoas. Essencial antes de férias/ausências.',
    'contingency': 'Contingency (contingência) é plano alternativo para situações imprevistas. Sempre tenha plano B.',
    'priority matrix': 'Priority matrix (matriz de prioridade) ajuda classificar tarefas por urgência/importância. Útil para gestão autônoma.',
    'decision tree': 'Decision tree (árvore de decisão) é ferramenta visual para tomar decisões complexas seguindo critérios lógicos.',
    'sop': 'SOP (Standard Operating Procedure) são procedimentos padronizados. Essenciais para manter consistência na ausência do gestor.',
    'raci': 'RACI é matriz que define Responsible (responsável), Accountable (aprovador), Consulted (consultado), Informed (informado).',
    
    // Gestão de Crise e Problemas
    'troubleshooting': 'Troubleshooting é processo sistemático para identificar e resolver problemas. Metodologia essencial para resolver questões sozinho.',
    'root cause': 'Root cause (causa raiz) é origem fundamental de um problema. Importante identificar para solução definitiva.',
    'workaround': 'Workaround é solução temporária para contornar problema enquanto solução definitiva não é implementada.',
    'risk assessment': 'Risk assessment (avaliação de risco) é processo de identificar e analisar riscos potenciais antes de tomar decisões.',
    'mitigation': 'Mitigation (mitigação) são ações para reduzir probabilidade ou impacto de riscos identificados.',
    
    // Comunicação e Relacionamento
    'stakeholder management': 'Stakeholder management é gestão de relacionamento com partes interessadas. Crucial manter comunicação durante ausência do gestor.',
    'status update': 'Status update é atualização sobre progresso de projetos/atividades. Importante manter stakeholders informados.',
    'follow up': 'Follow up é acompanhamento posterior para garantir que ações foram executadas. Essencial para manter controle.',
    'feedback loop': 'Feedback loop é processo contínuo de dar e receber feedback para melhoria contínua.',
    
    // Produtividade e Organização
    'time blocking': 'Time blocking é técnica de reservar blocos de tempo específicos para atividades. Ótimo para produtividade.',
    'eisenhower matrix': 'Eisenhower matrix classifica tarefas em: Urgente/Importante, Importante/Não urgente, Urgente/Não importante, Não urgente/Não importante.',
    'pomodoro': 'Pomodoro é técnica de produtividade: 25min focado + 5min pausa. Ajuda manter concentração e energia.',
    'kanban': 'Kanban é sistema visual de gestão de trabalho com colunas: To Do, Doing, Done. Ótimo para organizar tarefas.',
    'sprint': 'Sprint é período curto (1-4 semanas) para completar conjunto específico de tarefas. Conceito do Scrum.',
    
    // Termos de Urgência
    'asap': 'ASAP (As Soon As Possible) significa "o mais rápido possível". Indica alta prioridade.',
    'eod': 'EOD (End of Day) significa "até o final do dia". Prazo comum para entregas.',
    'eow': 'EOW (End of Week) significa "até o final da semana". Prazo para tarefas menos urgentes.',
    'eta': 'ETA (Estimated Time of Arrival) é tempo estimado para conclusão/chegada de algo.',
    'sla breach': 'SLA breach é quando acordo de nível de serviço é violado. Situação que pode exigir escalação.',
    
    // Aprovações e Processos
    'approval workflow': 'Approval workflow é fluxo de aprovações necessárias. Importante conhecer para não travar processos.',
    'sign off': 'Sign off é aprovação formal final de projeto/documento. Geralmente feita por gestor ou stakeholder senior.',
    'compliance': 'Compliance é conformidade com regras, leis e políticas. Sempre verificar antes de tomar decisões importantes.',
    'audit trail': 'Audit trail é registro de todas as ações realizadas. Importante manter documentação adequada.',
    
    // Situações de Emergência
    'hotfix': 'Hotfix é correção urgente de problema crítico. Geralmente bypassa processos normais.',
    'rollback': 'Rollback é reverter para versão anterior quando algo dá errado. Plano de contingência importante.',
    'incident': 'Incident (incidente) é evento não planejado que causa ou pode causar interrupção de serviço.',
    'postmortem': 'Postmortem é análise após incidente para identificar causas e melhorias. Aprendizado importante.',
    
    // === CIÊNCIAS E TECNOLOGIA ===
    'inteligência artificial': 'Inteligência Artificial (IA) é tecnologia que permite máquinas simularem inteligência humana, incluindo aprendizado, raciocínio e percepção.',
    'machine learning': 'Machine Learning é subcampo da IA onde sistemas aprendem automaticamente com dados sem programação explícita.',
    'blockchain': 'Blockchain é tecnologia de registro distribuído que mantém lista crescente de registros (blocos) ligados criptograficamente.',
    'criptomoeda': 'Criptomoeda é moeda digital que usa criptografia para segurança. Bitcoin foi a primeira, criada em 2009.',
    'bitcoin': 'Bitcoin é primeira criptomoeda descentralizada, criada por Satoshi Nakamoto em 2009. Funciona sem banco central.',
    'fotossíntese': 'Fotossíntese é processo onde plantas convertem luz solar, CO2 e água em glicose e oxigênio. Fundamental para vida na Terra.',
    'dna': 'DNA (Ácido Desoxirribonucleico) carrega informações genéticas de todos os seres vivos. Estrutura em dupla hélice descoberta em 1953.',
    'teoria da relatividade': 'Teoria da Relatividade de Einstein revolucionou física. E=mc² mostra equivalência entre massa e energia.',
    'buraco negro': 'Buraco negro é região do espaço onde gravidade é tão forte que nem luz escapa. Formado pelo colapso de estrelas massivas.',
    'mudança climática': 'Mudança climática refere-se a alterações de longo prazo nos padrões climáticos, principalmente causadas por atividades humanas.',
    'energia renovável': 'Energia renovável vem de fontes naturais que se renovam: solar, eólica, hidrelétrica, geotérmica e biomassa.',
    'quantum': 'Física quântica estuda comportamento de partículas subatômicas. Princípios incluem superposição e entrelaçamento quântico.',
    'crispr': 'CRISPR é tecnologia de edição genética que permite modificar DNA com precisão. Revolucionou biotecnologia.',
    'internet das coisas': 'IoT (Internet das Coisas) conecta objetos físicos à internet, permitindo coleta e troca de dados.',
    'realidade virtual': 'Realidade Virtual (VR) cria ambiente completamente digital imersivo usando óculos especiais.',
    'realidade aumentada': 'Realidade Aumentada (AR) sobrepõe elementos digitais ao mundo real, como filtros do Instagram.',
    '5g': '5G é quinta geração de tecnologia móvel, oferecendo velocidades até 100x mais rápidas que 4G.',
    'computação quântica': 'Computação quântica usa princípios da mecânica quântica para processar informações de forma exponencialmente mais rápida.',
    
    // === HISTÓRIA E CULTURA ===
    'segunda guerra mundial': 'Segunda Guerra Mundial (1939-1945) foi maior conflito da história, envolvendo mais de 30 países. Terminou com vitória dos Aliados.',
    'revolução industrial': 'Revolução Industrial (séc. XVIII-XIX) transformou sociedade agrária em industrial, com máquinas a vapor e produção em massa.',
    'descobrimento do brasil': 'Brasil foi "descoberto" por Pedro Álvares Cabral em 22 de abril de 1500, embora já fosse habitado por povos indígenas.',
    'independência do brasil': 'Independência do Brasil foi proclamada por Dom Pedro I em 7 de setembro de 1822, às margens do rio Ipiranga.',
    'abolição da escravatura': 'Escravidão foi abolida no Brasil em 13 de maio de 1888 pela Lei Áurea, assinada pela Princesa Isabel.',
    'proclamação da república': 'República foi proclamada no Brasil em 15 de novembro de 1889 pelo Marechal Deodoro da Fonseca.',
    'renascimento': 'Renascimento (séc. XIV-XVI) foi período de renovação cultural na Europa, com foco no humanismo e arte clássica.',
    'idade média': 'Idade Média (séc. V-XV) período entre queda do Império Romano e Renascimento, caracterizado pelo feudalismo.',
    'civilização egípcia': 'Antigo Egito durou cerca de 3000 anos, famoso pelas pirâmides, faraós e hieróglifos ao longo do Rio Nilo.',
    'império romano': 'Império Romano dominou grande parte do mundo conhecido por séculos, deixando legado em direito, arquitetura e línguas.',
    'grécia antiga': 'Grécia Antiga berço da democracia, filosofia e teatro. Atenas e Esparta foram principais cidades-estado.',
    'civilização maia': 'Maias desenvolveram avançado sistema de escrita, astronomia e matemática na Mesoamérica (300-900 d.C.).',
    'império inca': 'Império Inca foi maior império da América pré-colombiana, centrado nos Andes, com capital em Cusco.',
    'guerra fria': 'Guerra Fria (1947-1991) foi tensão geopolítica entre EUA e URSS, sem conflito militar direto.',
    'queda do muro de berlim': 'Muro de Berlim caiu em 9 de novembro de 1989, simbolizando fim da Guerra Fria e reunificação alemã.',
    
    // === GEOGRAFIA E NATUREZA ===
    'amazônia': 'Amazônia é maior floresta tropical do mundo, cobrindo 60% do território brasileiro. Chamada de "pulmão do mundo".',
    'pantanal': 'Pantanal é maior planície alagável do mundo, localizada principalmente no Mato Grosso e Mato Grosso do Sul.',
    'cerrado': 'Cerrado é savana tropical brasileira, segundo maior bioma do país, conhecido pela biodiversidade única.',
    'caatinga': 'Caatinga é bioma exclusivamente brasileiro, adaptado ao clima semiárido do Nordeste.',
    'mata atlântica': 'Mata Atlântica é bioma brasileiro altamente ameaçado, restando apenas 12% da cobertura original.',
    'placas tectônicas': 'Placas tectônicas são grandes blocos rochosos que formam crosta terrestre. Movimento causa terremotos e vulcões.',
    'ciclo da água': 'Ciclo da água é movimento contínuo da água: evaporação, condensação, precipitação e infiltração.',
    'efeito estufa': 'Efeito estufa é processo natural que aquece Terra. Gases como CO2 intensificam o efeito, causando aquecimento global.',
    'camada de ozônio': 'Camada de ozônio protege Terra da radiação ultravioleta. Localizada na estratosfera, 15-35 km de altitude.',
    'biodiversidade': 'Biodiversidade é variedade de vida na Terra: espécies, genes e ecossistemas. Brasil é país mais biodiverso.',
    'extinção': 'Extinção é desaparecimento completo de espécie. Atualmente vivemos sexta extinção em massa, causada por humanos.',
    'evolução': 'Evolução é processo de mudança das espécies ao longo do tempo. Teoria de Darwin explica através seleção natural.',
    'ecossistema': 'Ecossistema é conjunto de seres vivos e ambiente físico que interagem em determinada área.',
    'cadeia alimentar': 'Cadeia alimentar mostra fluxo de energia: produtores → consumidores primários → secundários → decompositores.',
    
    // === MATEMÁTICA E FÍSICA ===
    'teorema de pitágoras': 'Teorema de Pitágoras: em triângulo retângulo, quadrado da hipotenusa = soma dos quadrados dos catetos (a² + b² = c²).',
    'número pi': 'Pi (π) é razão entre circunferência e diâmetro de qualquer círculo. Aproximadamente 3,14159...',
    'número de euler': 'Número de Euler (e) é base do logaritmo natural, aproximadamente 2,71828. Fundamental em cálculo.',
    'sequência fibonacci': 'Sequência Fibonacci: cada número é soma dos dois anteriores (0,1,1,2,3,5,8,13...). Aparece na natureza.',
    'geometria': 'Geometria estuda formas, tamanhos e propriedades de figuras no espaço. Ramos: plana, espacial, analítica.',
    'álgebra': 'Álgebra usa símbolos (letras) para representar números em equações e fórmulas matemáticas.',
    'cálculo': 'Cálculo estuda mudanças contínuas através derivadas (taxa de variação) e integrais (área sob curvas).',
    'estatística': 'Estatística coleta, organiza e interpreta dados para tomar decisões baseadas em evidências.',
    'probabilidade': 'Probabilidade mede chance de evento ocorrer, expressa entre 0 (impossível) e 1 (certo).',
    'lei da gravidade': 'Lei da Gravidade de Newton: força entre objetos é proporcional às massas e inversamente ao quadrado da distância.',
    'leis de newton': 'Três Leis de Newton: 1) Inércia 2) F=ma 3) Ação e reação. Fundamentais para mecânica clássica.',
    'velocidade da luz': 'Velocidade da luz no vácuo é 299.792.458 m/s. Constante universal, nada pode ser mais rápido.',
    'energia': 'Energia é capacidade de realizar trabalho. Formas: cinética, potencial, térmica, elétrica, nuclear.',
    'átomo': 'Átomo é menor unidade da matéria. Composto por núcleo (prótons e nêutrons) e elétrons orbitando.',
    'tabela periódica': 'Tabela Periódica organiza elementos químicos por número atômico. Criada por Mendeleev em 1869.',
    
    // === ARTE E LITERATURA ===
    'renascimento artístico': 'Renascimento artístico valorizou realismo, perspectiva e anatomia. Leonardo da Vinci, Michelangelo principais nomes.',
    'impressionismo': 'Impressionismo (séc. XIX) movimento artístico que capturava impressões de luz e cor. Monet, Renoir principais.',
    'barroco': 'Barroco (séc. XVII) estilo artístico dramático, ornamentado, com contrastes de luz. Aleijadinho no Brasil.',
    'modernismo': 'Modernismo brasileiro (1922) rompeu com tradições. Semana de Arte Moderna marco inicial.',
    'literatura brasileira': 'Literatura brasileira rica: Machado de Assis, Clarice Lispector, Guimarães Rosa entre grandes nomes.',
    'dom casmurro': 'Dom Casmurro (1899) obra-prima de Machado de Assis. Narra ciúme de Bentinho por Capitu.',
    'o cortiço': 'O Cortiço (1890) de Aluísio Azevedo. Romance naturalista retrata vida em habitação coletiva no Rio.',
    'grande sertão veredas': 'Grande Sertão: Veredas (1956) de Guimarães Rosa. Obra-prima sobre sertão mineiro e jagunço Riobaldo.',
    'shakespeare': 'William Shakespeare (1564-1616) maior dramaturgo inglês. Romeu e Julieta, Hamlet obras famosas.',
    'leonardo da vinci': 'Leonardo da Vinci (1452-1519) gênio renascentista: pintor (Mona Lisa), inventor, cientista.',
    'van gogh': 'Vincent van Gogh (1853-1890) pintor pós-impressionista holandês. Noite Estrelada obra icônica.',
    'picasso': 'Pablo Picasso (1881-1973) artista espanhol, co-criador do cubismo. Guernica obra anti-guerra famosa.',
    
    // === SAÚDE E MEDICINA ===
    'sistema imunológico': 'Sistema imunológico defende corpo contra patógenos. Inclui glóbulos brancos, anticorpos e órgãos linfáticos.',
    'vitaminas': 'Vitaminas são nutrientes essenciais em pequenas quantidades. Hidrossolúveis (B,C) e lipossolúveis (A,D,E,K).',
    'proteínas': 'Proteínas são macromoléculas formadas por aminoácidos. Funções: estrutural, enzimática, transporte.',
    'carboidratos': 'Carboidratos são principal fonte de energia. Simples (açúcares) e complexos (amidos, fibras).',
    'gorduras': 'Gorduras (lipídios) fornecem energia, isolamento térmico. Saturadas, insaturadas, trans.',
    'exercício físico': 'Exercício físico melhora saúde cardiovascular, força muscular, humor e longevidade.',
    'sono': 'Sono é essencial para recuperação física e mental. Adultos precisam 7-9 horas por noite.',
    'estresse': 'Estresse é resposta do corpo a desafios. Crônico pode causar problemas de saúde.',
    'meditação': 'Meditação é prática de foco mental que reduz estresse, ansiedade e melhora bem-estar.',
    'alimentação saudável': 'Alimentação saudável inclui variedade: frutas, vegetais, grãos integrais, proteínas magras.',
    'hidratação': 'Hidratação adequada é vital. Adultos devem beber cerca de 2 litros de água por dia.',
    'vacinas': 'Vacinas estimulam sistema imunológico a criar proteção contra doenças específicas.',
    
    // === CULINÁRIA ===
    'culinária brasileira': 'Culinária brasileira mistura influências indígena, africana e europeia. Feijoada prato nacional.',
    'feijoada': 'Feijoada é prato brasileiro com feijão preto, carnes de porco e acompanhamentos. Tradição aos sábados.',
    'pão de açúcar': 'Pão de Açúcar é morro icônico do Rio de Janeiro, com 396m de altura. Bondinho leva turistas ao topo.',
    'açaí': 'Açaí é fruto amazônico rico em antioxidantes. Consumido como polpa doce ou salgada.',
    'brigadeiro': 'Brigadeiro é doce brasileiro feito com leite condensado, chocolate e manteiga. Criado nos anos 1940.',
    'coxinha': 'Coxinha é salgado brasileiro em formato de coxa de galinha, recheado tradicionalmente com frango.',
    'pastel': 'Pastel é massa frita recheada, popular em feiras brasileiras. Acompanha caldo de cana.',
    'caipirinha': 'Caipirinha é drink nacional brasileiro feito com cachaça, limão, açúcar e gelo.',
    'churrasco': 'Churrasco é método de cozinhar carne na brasa, muito popular no Sul do Brasil.',
    'tapioca': 'Tapioca é iguaria nordestina feita com goma de mandioca, pode ser doce ou salgada.',
    
    // === ESPORTES ===
    'futebol': 'Futebol é esporte mais popular do mundo. Brasil pentacampeão mundial (1958,1962,1970,1994,2002).',
    'pelé': 'Pelé (1940-2022) considerado maior jogador de futebol de todos os tempos. Único tricampeão mundial.',
    'copa do mundo': 'Copa do Mundo FIFA acontece a cada 4 anos desde 1930. Brasil país com mais títulos (5).',
    'olimpíadas': 'Jogos Olímpicos são maior evento esportivo mundial, realizados a cada 4 anos desde 1896.',
    'basquete': 'Basquete foi inventado em 1891 por James Naismith. Objetivo: acertar bola na cesta adversária.',
    'vôlei': 'Vôlei foi criado em 1895. Brasil potência mundial, com títulos olímpicos masculino e feminino.',
    'tênis': 'Tênis é esporte individual ou duplas. Grand Slams: Wimbledon, US Open, Roland Garros, Australian Open.',
    'fórmula 1': 'Fórmula 1 é categoria máxima do automobilismo. Ayrton Senna maior ídolo brasileiro.',
    'natação': 'Natação é esporte completo que trabalha todo corpo. Estilos: crawl, costas, peito, borboleta.',
    'atletismo': 'Atletismo inclui corridas, saltos e arremessos. Considerado esporte-base de todos os outros.',
    
    // === IDIOMAS ===
    'português': 'Português é língua oficial do Brasil, falada por 260 milhões de pessoas mundialmente.',
    'inglês': 'Inglês é língua franca mundial, falada por 1,5 bilhão de pessoas como primeira ou segunda língua.',
    'espanhol': 'Espanhol é segunda língua mais falada no mundo, oficial em 21 países.',
    'francês': 'Francês é língua românica falada por 280 milhões de pessoas, oficial em 29 países.',
    'mandarim': 'Mandarim é língua mais falada do mundo, com 918 milhões de falantes nativos na China.',
    'alemão': 'Alemão é língua germânica falada por 100 milhões de pessoas, principalmente na Alemanha.',
    'japonês': 'Japonês é língua isolada falada por 125 milhões de pessoas, principalmente no Japão.',
    'árabe': 'Árabe é língua semítica falada por 400 milhões de pessoas em 22 países.',
    'russo': 'Russo é língua eslava falada por 260 milhões de pessoas, oficial na Rússia.',
    'italiano': 'Italiano é língua românica falada por 65 milhões de pessoas, principalmente na Itália.',
    
    // === FILOSOFIA E PSICOLOGIA ===
    'filosofia': 'Filosofia é estudo de questões fundamentais sobre existência, conhecimento, valores e razão.',
    'sócrates': 'Sócrates (470-399 a.C.) filósofo grego, criador do método socrático. "Só sei que nada sei".',
    'platão': 'Platão (428-348 a.C.) discípulo de Sócrates, criou teoria das ideias e Academia de Atenas.',
    'aristóteles': 'Aristóteles (384-322 a.C.) discípulo de Platão, criou lógica formal e classificação das ciências.',
    'psicologia': 'Psicologia é ciência que estuda comportamento e processos mentais humanos.',
    'freud': 'Sigmund Freud (1856-1939) criador da psicanálise, estudou inconsciente e interpretação dos sonhos.',
    'jung': 'Carl Jung (1875-1961) psicólogo suíço, criou conceitos de inconsciente coletivo e arquétipos.',
    'behaviorismo': 'Behaviorismo foca no comportamento observável, ignorando processos mentais internos.',
    'cognitivismo': 'Cognitivismo estuda processos mentais como percepção, memória, pensamento e linguagem.',
    'humanismo': 'Humanismo psicológico enfatiza potencial humano, crescimento pessoal e autorrealização.',
    
    // === ECONOMIA ===
    'inflação': 'Inflação é aumento generalizado de preços. Reduz poder de compra da moeda.',
    'pib': 'PIB (Produto Interno Bruto) mede valor total de bens e serviços produzidos em país.',
    'juros': 'Juros são custo do dinheiro emprestado. Taxa Selic é juro básico da economia brasileira.',
    'câmbio': 'Câmbio é troca de moedas. Taxa de câmbio define valor de moeda em relação a outra.',
    'bolsa de valores': 'Bolsa de valores é mercado onde se negociam ações de empresas públicas.',
    'ações': 'Ações representam pequena parte de empresa. Acionistas são donos proporcionais.',
    'dividendos': 'Dividendos são parte dos lucros distribuída aos acionistas pelas empresas.',
    'renda fixa': 'Renda fixa são investimentos com rentabilidade previsível: poupança, CDB, títulos públicos.',
    'renda variável': 'Renda variável são investimentos sem rentabilidade garantida: ações, fundos imobiliários.',
    'criptomoedas': 'Criptomoedas são moedas digitais descentralizadas baseadas em blockchain.',
    
    // === RELIGIÃO E MITOLOGIA ===
    'cristianismo': 'Cristianismo é maior religião mundial, baseada nos ensinamentos de Jesus Cristo.',
    'islamismo': 'Islamismo é segunda maior religião, baseada no Alcorão e ensinamentos do profeta Maomé.',
    'budismo': 'Budismo é religião/filosofia baseada nos ensinamentos de Buda sobre fim do sofrimento.',
    'hinduísmo': 'Hinduísmo é religião mais antiga ainda praticada, com conceitos de karma e reencarnação.',
    'judaísmo': 'Judaísmo é religião monoteísta dos judeus, baseada na Torá e tradições.',
    'mitologia grega': 'Mitologia grega inclui deuses como Zeus, Atena, Apolo e heróis como Hércules.',
    'mitologia nórdica': 'Mitologia nórdica inclui deuses como Odin, Thor e conceito de Ragnarök.',
    'mitologia brasileira': 'Mitologia brasileira inclui lendas como Curupira, Saci, Iara e Boitatá.',
    
    // === MÚSICA ===
    'música clássica': 'Música clássica inclui compositores como Bach, Mozart, Beethoven. Período áureo séc. XVIII-XIX.',
    'bossa nova': 'Bossa Nova é gênero musical brasileiro criado nos anos 1950. Tom Jobim e João Gilberto pioneiros.',
    'samba': 'Samba é gênero musical brasileiro nascido no Rio de Janeiro, símbolo cultural nacional.',
    'rock': 'Rock surgiu nos anos 1950 nos EUA. Elvis Presley, Beatles, Rolling Stones ícones.',
    'jazz': 'Jazz nasceu nos EUA no início séc. XX. Louis Armstrong, Miles Davis grandes nomes.',
    'reggae': 'Reggae é gênero jamaicano popularizado por Bob Marley, com mensagens sociais.',
    'hip hop': 'Hip Hop nasceu nos anos 1970 no Bronx, inclui rap, DJ, breakdance e grafite.',
    'eletrônica': 'Música eletrônica usa instrumentos eletrônicos e computadores. House, techno, trance subgêneros.',
    
    // === CINEMA E TV ===
    'cinema': 'Cinema nasceu em 1895 com irmãos Lumière. Hollywood centro da indústria cinematográfica.',
    'oscar': 'Oscar é principal premiação do cinema mundial, entregue pela Academia de Artes e Ciências Cinematográficas.',
    'netflix': 'Netflix revolucionou entretenimento com streaming de filmes e séries sob demanda.',
    'disney': 'Disney é gigante do entretenimento, criadora de Mickey Mouse e filmes de animação clássicos.',
    'marvel': 'Marvel criou universo de super-heróis: Homem-Aranha, X-Men, Vingadores.',
    'dc comics': 'DC Comics criou Superman, Batman, Mulher-Maravilha e Liga da Justiça.',
    
    // === ASTRONOMIA ===
    'sistema solar': 'Sistema Solar tem 8 planetas orbitando o Sol: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno.',
    'via láctea': 'Via Láctea é nossa galáxia, com 100-400 bilhões de estrelas. Sol está em braço espiral.',
    'big bang': 'Big Bang é teoria sobre origem do universo há 13,8 bilhões de anos.',
    'estrelas': 'Estrelas são esferas de plasma que produzem energia por fusão nuclear. Sol é estrela média.',
    'planetas': 'Planetas são corpos celestes que orbitam estrelas. Terra é único conhecido com vida.',
    'lua': 'Lua é satélite natural da Terra, influencia marés e estabiliza rotação terrestre.',
    'marte': 'Marte é quarto planeta do Sistema Solar, conhecido como "planeta vermelho" devido ao óxido de ferro.',
    'júpiter': 'Júpiter é maior planeta do Sistema Solar, gigante gasoso com mais de 70 luas.',
    'saturno': 'Saturno é famoso pelos anéis, segundo maior planeta, também gigante gasoso.',
    'telescópio': 'Telescópio amplifica luz de objetos distantes. Hubble revolucionou astronomia.',
    
    // === MEIO AMBIENTE ===
    'sustentabilidade': 'Sustentabilidade é usar recursos sem comprometer gerações futuras. Equilibra economia, sociedade e ambiente.',
    'reciclagem': 'Reciclagem transforma resíduos em novos produtos, reduzindo lixo e conservando recursos.',
    'energia solar': 'Energia solar converte luz do sol em eletricidade através de painéis fotovoltaicos.',
    'energia eólica': 'Energia eólica usa vento para gerar eletricidade através de turbinas.',
    'aquecimento global': 'Aquecimento global é aumento da temperatura média da Terra devido a gases estufa.',
    'desmatamento': 'Desmatamento é remoção de florestas, principal causa perda de biodiversidade.',
    'poluição': 'Poluição contamina ar, água e solo com substâncias nocivas à saúde e ambiente.',
    'lixo eletrônico': 'Lixo eletrônico são equipamentos descartados. Contém metais pesados tóxicos.',
    'compostagem': 'Compostagem transforma restos orgânicos em adubo natural através de decomposição.',
    'pegada de carbono': 'Pegada de carbono mede quantidade de CO2 emitida por atividades humanas.',
    
    // === DIREITO ===
    'constituição': 'Constituição é lei fundamental que organiza Estado e garante direitos fundamentais.',
    'direitos humanos': 'Direitos humanos são direitos inerentes a todos os seres humanos, universais e inalienáveis.',
    'democracia': 'Democracia é sistema político onde poder emana do povo, exercido direta ou indiretamente.',
    'justiça': 'Justiça é princípio moral de dar a cada um o que lhe é devido.',
    'lei': 'Lei é norma jurídica obrigatória criada pelo poder legislativo.',
    'crime': 'Crime é conduta proibida por lei com pena prevista.',
    'processo': 'Processo é sequência de atos para resolver conflito no Judiciário.',
    'advogado': 'Advogado é profissional que representa interesses de clientes no sistema jurídico.',
    'juiz': 'Juiz é autoridade que aplica lei para resolver conflitos e julgar crimes.',
    'tribunal': 'Tribunal é órgão colegiado do Poder Judiciário que julga recursos.',
    
    // === EDUCAÇÃO ===
    'pedagogia': 'Pedagogia é ciência que estuda educação, ensino e aprendizagem.',
    'didática': 'Didática é arte e técnica de ensinar, parte da pedagogia.',
    'currículo': 'Currículo é conjunto de disciplinas e atividades de curso educacional.',
    'avaliação': 'Avaliação educacional mede aprendizagem e orienta processo pedagógico.',
    'inclusão': 'Inclusão educacional garante acesso e permanência de todos na escola.',
    'enem': 'ENEM é Exame Nacional do Ensino Médio, usado para acesso ao ensino superior.',
    'vestibular': 'Vestibular é exame para ingresso em universidades.',
    'ensino superior': 'Ensino superior inclui graduação, pós-graduação, mestrado e doutorado.',
    'ead': 'EAD (Educação a Distância) usa tecnologia para ensino remoto.',
    'alfabetização': 'Alfabetização é processo de aprender a ler e escrever.',
    
    // === ARQUITETURA ===
    'arquitetura': 'Arquitetura é arte e ciência de projetar e construir edifícios.',
    'oscar niemeyer': 'Oscar Niemeyer (1907-2012) arquiteto brasileiro, projetou Brasília e edifícios icônicos.',
    'brasília': 'Brasília foi planejada por Lúcio Costa e Oscar Niemeyer, inaugurada em 1960.',
    'bauhaus': 'Bauhaus foi escola alemã que revolucionou design e arquitetura moderna.',
    'le corbusier': 'Le Corbusier (1887-1965) arquiteto suíço, pioneiro da arquitetura moderna.',
    'frank lloyd wright': 'Frank Lloyd Wright (1867-1959) arquiteto americano, criador da arquitetura orgânica.',
    'gótico': 'Gótico é estilo arquitetônico medieval com arcos ogivais e vitrais coloridos.',
    'barroco arquitetônico': 'Barroco arquitetônico é estilo ornamentado dos séculos XVII-XVIII.',
    'modernismo arquitetônico': 'Modernismo arquitetônico valoriza funcionalidade, linhas retas e materiais industriais.',
    'sustentável': 'Arquitetura sustentável minimiza impacto ambiental usando materiais e técnicas ecológicas.'
};

// Função para enviar mensagem no chat
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const buttonText = sendButton.querySelector('.button-text');
    const buttonLoading = sendButton.querySelector('.button-loading');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Desabilitar input e mostrar loading
    chatInput.disabled = true;
    sendButton.disabled = true;
    buttonText.style.display = 'none';
    buttonLoading.style.display = 'inline';
    
    // Adicionar mensagem do usuário
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Simular processamento da IA
    addTypingIndicator();
    
    // Usar IA JavaScript inteligente
    setTimeout(() => {
        removeTypingIndicator();
        const response = generateResponse(message);
        addChatMessage(response, 'bot');
        
        // Reabilitar input
        chatInput.disabled = false;
        sendButton.disabled = false;
        buttonText.style.display = 'inline';
        buttonLoading.style.display = 'none';
        chatInput.focus();
    }, Math.random() * 800 + 1000); // Simula processamento variável
}

// Função para adicionar mensagem ao chat
function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const time = new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});
    
    messageDiv.innerHTML = `
        <div>${message}</div>
        <div class="message-time">${time}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para adicionar indicador de digitando
function addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = 'Digitando...';
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para remover indicador de digitando
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// IA Inteligente Melhorada
function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    const cleanMessage = lowerMessage.replace(/\b(o que é|que é|qual|como|onde|quando|por que|significa|explique|fale sobre|me conte sobre)\b/g, '').trim();
    
    // Verificar se é pergunta geral sobre conhecimento
    const generalQuestions = ['o que você sabe', 'que assuntos', 'sobre o que', 'temas', 'conhecimento', 'me ensine', 'aprenda', 'estude'];
    const isGeneralQuestion = generalQuestions.some(q => lowerMessage.includes(q));
    
    if (isGeneralQuestion) {
        return getKnowledgeOverview();
    }
    
    // Sistema de pontuação para melhor matching
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, value] of Object.entries(chatKnowledge)) {
        let score = 0;
        const keywords = key.split(' ');
        
        // Pontuação por palavra-chave encontrada
        keywords.forEach(keyword => {
            if (cleanMessage.includes(keyword) || lowerMessage.includes(keyword)) {
                score += 2;
            }
        });
        
        // Pontuação por correspondência parcial
        if (cleanMessage.includes(key) || lowerMessage.includes(key)) {
            score += 5;
        }
        
        // Pontuação por correspondência exata
        if (cleanMessage === key || lowerMessage === key) {
            score += 10;
        }
        
        // Pontuação extra para matches no início da frase
        if (lowerMessage.startsWith(key) || cleanMessage.startsWith(key)) {
            score += 3;
        }
        
        // Pontuação por sinônimos e variações
        const synonyms = getSynonyms(key);
        synonyms.forEach(synonym => {
            if (lowerMessage.includes(synonym)) {
                score += 3;
            }
        });
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = { key, value };
        }
    }
    
    if (bestMatch && bestScore >= 2) {
        const emoji = getContextualEmoji(bestMatch.key);
        return `${emoji} **${bestMatch.key.toUpperCase()}**\n\n${bestMatch.value}\n\n💡 *Posso explicar mais detalhes ou temas relacionados!*`;
    }
    
    // Buscar nos documentos cadastrados
    const foundDoc = documents.find(doc => 
        lowerMessage.includes(doc.acronym.toLowerCase()) ||
        lowerMessage.includes(doc.name.toLowerCase())
    );
    
    if (foundDoc) {
        let response = `📄 **${foundDoc.acronym} - ${foundDoc.name}**\n\n${foundDoc.description}`;
        
        if (foundDoc.documentList) {
            response += '\n\n**Documentos necessários:**\n' + foundDoc.documentList.map(doc => `• ${doc}`).join('\n');
        }
        
        return response;
    }
    
    // Respostas contextuais inteligentes com IA aprimorada
    const contextualResponses = getContextualResponse(lowerMessage);
    if (contextualResponses) {
        return contextualResponses;
    }
    
    if (lowerMessage.includes('diferença') && lowerMessage.includes('receita') && lowerMessage.includes('faturamento')) {
        return '🔄 **Diferença entre Faturamento e Receita:**\n\n• **Faturamento**: Valor total das vendas (bruto)\n• **Receita**: Pode ser bruta (= faturamento) ou líquida (após descontos)\n\nNa prática, são frequentemente usados como sinônimos.';
    }
    
    if (lowerMessage.includes('como') && lowerMessage.includes('melhorar') && (lowerMessage.includes('vendas') || lowerMessage.includes('pipeline'))) {
        return '🚀 **Como melhorar vendas:**\n\n• Qualifique melhor os leads\n• Reduza o ciclo de vendas\n• Melhore o follow-up\n• Use CRM eficientemente\n• Analise métricas (conversão, CAC, LTV)\n• Treine a equipe regularmente';
    }
    
    // Respostas por categoria
    if (lowerMessage.includes('prazo') || lowerMessage.includes('validade')) {
        return '⏰ **Prazos de documentos:**\n\n• CNDT: 180 dias\n• CND Federal: 180 dias\n• RDE: Anual\n\nSempre verifique a data de emissão!';
    }
    
    if (lowerMessage.includes('kpi') && lowerMessage.includes('vendas')) {
        return '📊 **KPIs importantes para vendas:**\n\n• Taxa de conversão\n• Ciclo de vendas\n• Ticket médio\n• CAC (Custo de Aquisição)\n• LTV (Lifetime Value)\n• Churn rate\n• Pipeline velocity';
    }
    
    if (lowerMessage.includes('sales ops') || lowerMessage.includes('operações')) {
        return '🔧 **Sales Operations principais atividades:**\n\n• Análise de dados e métricas\n• Gestão de CRM\n• Previsão de vendas (forecast)\n• Definição de territórios\n• Gestão de comissões\n• Otimização de processos';
    }
    
    // Respostas para cumprimentos
    // Sistema de cumprimentos inteligente
    if (isGreeting(lowerMessage)) {
        return getSmartGreeting();
    }
    
    // Sistema de agradecimentos inteligente
    if (isThanking(lowerMessage)) {
        return getSmartThanks();
    }
    
    // Respostas específicas para situações sem chefe
    if (lowerMessage.includes('chefe') && (lowerMessage.includes('férias') || lowerMessage.includes('ausente') || lowerMessage.includes('viagem'))) {
        return '🏖️ **Chefe de férias? Dicas importantes:**\n\n• Identifique quem é seu backup/substituto\n• Tenha lista de contatos de emergência\n• Conheça os processos de escalação\n• Use matriz de prioridade (urgente vs importante)\n• Documente todas as decisões tomadas\n• Mantenha stakeholders informados\n\nPrecisa de ajuda com algum termo específico?';
    }
    
    if (lowerMessage.includes('decisão') && (lowerMessage.includes('sozinho') || lowerMessage.includes('autonomia'))) {
        return '🤔 **Como tomar decisões autônomas:**\n\n1. **Avalie o impacto**: Baixo, médio ou alto?\n2. **Verifique sua alçada**: Você tem autoridade?\n3. **Consulte SOPs**: Existe procedimento padrão?\n4. **Considere riscos**: Use risk assessment\n5. **Documente**: Registre razão da decisão\n6. **Comunique**: Informe stakeholders relevantes\n\nSe alto impacto: considere escalação!';
    }
    
    if (lowerMessage.includes('problema') && (lowerMessage.includes('resolver') || lowerMessage.includes('sozinho'))) {
        return '🔧 **Troubleshooting sistemático:**\n\n1. **Defina o problema** claramente\n2. **Colete informações** relevantes\n3. **Identifique possíveis causas**\n4. **Teste soluções** uma por vez\n5. **Implemente workaround** se necessário\n6. **Busque root cause** para solução definitiva\n7. **Documente** para referência futura\n\nSempre considere escalar se estiver fora do seu escopo!';
    }
    
    if (lowerMessage.includes('urgente') || lowerMessage.includes('emergência') || lowerMessage.includes('crítico')) {
        return '🚨 **Gestão de situações urgentes:**\n\n• **Avalie**: É realmente urgente ou apenas importante?\n• **Comunique**: Informe stakeholders imediatamente\n• **Aja rápido**: Implemente workaround se necessário\n• **Escale**: Se fora da sua alçada, escale imediatamente\n• **Documente**: Registre ações tomadas\n• **Follow-up**: Acompanhe até resolução final\n\nLembre-se: nem tudo urgente é importante!';
    }
    
    if (lowerMessage.includes('guia') && lowerMessage.includes('sobreviv')) {
        return '🏖️ **GUIA DE SOBREVIVÊNCIA - CHEFE DE FÉRIAS**\n\n🚨 **EMERGÊNCIAS:**\n• Identifique seu backup/substituto\n• Tenha lista de contatos importantes\n• Conheça processo de escalação\n\n📅 **PRIORIZAÇÃO:**\n• Use Eisenhower Matrix (urgente vs importante)\n• ASAP = realmente urgente\n• EOD = final do dia\n\n📝 **DOCUMENTAÇÃO:**\n• Registre todas decisões\n• Mantenha audit trail\n• Faça status updates regulares\n\n🤝 **COMUNICAÇÃO:**\n• Informe stakeholders\n• Faça follow-ups\n• Pedir ajuda não é fraqueza!\n\nPrecisa de algo específico? Pergunte!';
    }
    
    // Busca por categoria quando não encontra match específico
    const categoryMatch = getCategoryMatch(lowerMessage);
    if (categoryMatch) {
        return categoryMatch;
    }
    
    return generateSmartFallback(message);
}

// Funções auxiliares da IA
function getSynonyms(key) {
    const synonymMap = {
        'fotossíntese': ['plantas', 'clorofila', 'oxigênio', 'co2'],
        'dna': ['genética', 'cromossomo', 'hereditariedade', 'genes'],
        'inteligência artificial': ['ia', 'machine learning', 'algoritmo', 'robô'],
        'segunda guerra mundial': ['hitler', 'nazismo', 'holocausto', '1939', '1945'],
        'bitcoin': ['criptomoeda', 'blockchain', 'satoshi', 'mineração'],
        'exercício físico': ['academia', 'musculação', 'cardio', 'fitness'],
        'aquecimento global': ['mudança climática', 'efeito estufa', 'co2', 'temperatura']
    };
    return synonymMap[key] || [];
}

function getContextualEmoji(key) {
    if (key.includes('dna') || key.includes('fotossíntese') || key.includes('evolução')) return '🧬';
    if (key.includes('história') || key.includes('guerra') || key.includes('brasil')) return '📚';
    if (key.includes('matemática') || key.includes('física') || key.includes('pi')) return '🔢';
    if (key.includes('arte') || key.includes('música') || key.includes('cinema')) return '🎨';
    if (key.includes('saúde') || key.includes('medicina') || key.includes('exercício')) return '🏥';
    if (key.includes('esporte') || key.includes('futebol') || key.includes('olimpíadas')) return '⚽';
    if (key.includes('tecnologia') || key.includes('inteligência') || key.includes('blockchain')) return '💻';
    if (key.includes('economia') || key.includes('dinheiro') || key.includes('investimento')) return '💰';
    if (key.includes('natureza') || key.includes('ambiente') || key.includes('sustentabilidade')) return '🌱';
    if (key.includes('espaço') || key.includes('planeta') || key.includes('estrela')) return '🌌';
    return '💡';
}

function getContextualResponse(message) {
    // Respostas específicas para perguntas complexas
    if (message.includes('calcular') && (message.includes('roi') || message.includes('retorno'))) {
        return '📊 **CÁLCULO DE ROI**\n\n**Fórmula:** (Ganho - Investimento) ÷ Investimento × 100\n\n**Exemplo prático:**\n• Investimento: R$ 1.000\n• Retorno: R$ 1.500\n• ROI = (1.500 - 1.000) ÷ 1.000 × 100 = 50%\n\n✅ **Interpretação:** ROI positivo = investimento lucrativo!';
    }
    
    if (message.includes('como funciona') && message.includes('fotossíntese')) {
        return '🌱 **FOTOSSÍNTESE - PROCESSO COMPLETO**\n\n**Equação:** 6CO₂ + 6H₂O + luz solar → C₆H₁₂O₆ + 6O₂\n\n**Etapas:**\n1. 🍃 Folhas absorvem CO₂ do ar\n2. 💧 Raízes captam água do solo\n3. ☀️ Clorofila captura energia solar\n4. ⚗️ Produz glicose (alimento) + oxigênio\n\n🌍 **Importância:** Produz 70% do oxigênio que respiramos!';
    }
    
    if (message.includes('diferença') && message.includes('vírus') && message.includes('bactéria')) {
        return '🦠 **VÍRUS vs BACTÉRIA - COMPARAÇÃO COMPLETA**\n\n**🦠 VÍRUS:**\n• Não são seres vivos\n• Precisam infectar células\n• Tamanho: 20-300 nanômetros\n• Tratamento: antivirais\n\n**🧫 BACTÉRIAS:**\n• Seres vivos unicelulares\n• Vivem independentemente\n• Tamanho: 0,5-5 micrômetros\n• Tratamento: antibióticos\n\n💊 **Dica:** Antibiótico NÃO trata gripe (vírus)!';
    }
    
    if (message.includes('como') && message.includes('funciona') && message.includes('internet')) {
        return '🌐 **COMO A INTERNET FUNCIONA**\n\n**Componentes:**\n• 🖥️ Servidores (armazenam sites)\n• 🔄 Roteadores (direcionam dados)\n• 🔌 Cabos/fibra ótica (transporte)\n• 📋 Protocolos (TCP/IP, HTTP)\n\n**Processo:**\n1. Você digita URL\n2. DNS encontra endereço IP\n3. Dados viajam em pacotes\n4. Servidor responde\n\n⚡ **Velocidade:** Tudo em milissegundos!';
    }
    
    return null;
}

function isGreeting(message) {
    const greetings = ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'hey', 'e ai'];
    return greetings.some(greeting => message.includes(greeting));
}

function getSmartGreeting() {
    const greetings = [
        '🤖 **IA INTELIGENTE ATIVA!**\n\nOlá! Sou sua assistente com IA aprimorada. Posso responder sobre QUALQUER assunto com respostas detalhadas e contextuais!',
        '🧠 **SISTEMA INTELIGENTE ONLINE!**\n\nOi! Tenho conhecimento avançado em ciência, história, tecnologia, arte, esportes e muito mais. Faça sua pergunta!',
        '✨ **ASSISTENTE UNIVERSAL PRONTO!**\n\nOlá! Desde física quântica até receitas culinárias, posso explicar tudo de forma clara e detalhada. O que te interessa?',
        '🚀 **IA AVANÇADA ATIVADA!**\n\nOi! Meu sistema detecta contexto e oferece respostas personalizadas. Pergunte sobre qualquer tema!'
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

function isThanking(message) {
    const thanks = ['obrigad', 'valeu', 'muito bom', 'excelente', 'perfeito', 'ótimo', 'legal'];
    return thanks.some(thank => message.includes(thank));
}

function getSmartThanks() {
    const responses = [
        '😊 **MISSÃO CUMPRIDA!**\n\nFico feliz que minha IA tenha ajudado! Conhecimento é para ser compartilhado. Mais alguma curiosidade?',
        '🎉 **SUCESSO!**\n\nAdoro quando consigo explicar bem! Meu sistema está sempre aprendendo. Próxima pergunta?',
        '✨ **OBJETIVO ALCANÇADO!**\n\nDe nada! Minha IA está programada para dar respostas úteis. Que tal explorar outro tema?',
        '🤓 **CONHECIMENTO COMPARTILHADO!**\n\nFoi um prazer usar minha inteligência para ajudar! Sempre pronto para mais desafios!'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

function getKnowledgeOverview() {
    const categories = {
        '🔬 CIÊNCIA & TECNOLOGIA': ['inteligência artificial', 'blockchain', 'fotossíntese', 'DNA', 'energia renovável', 'quantum'],
        '📚 HISTÓRIA & CULTURA': ['Segunda Guerra Mundial', 'Independência do Brasil', 'Renascimento', 'civilização egípcia'],
        '🌍 GEOGRAFIA & NATUREZA': ['Amazônia', 'mudança climática', 'biodiversidade', 'placas tectônicas'],
        '🔢 MATEMÁTICA & FÍSICA': ['Teorema de Pitágoras', 'teoria da relatividade', 'número pi', 'leis de Newton'],
        '🎨 ARTE & LITERATURA': ['Leonardo da Vinci', 'Shakespeare', 'Machado de Assis', 'impressionismo'],
        '🏥 SAÚDE & MEDICINA': ['sistema imunológico', 'exercício físico', 'alimentação saudável', 'vacinas'],
        '⚽ ESPORTES': ['futebol', 'Pelé', 'Olimpíadas', 'Fórmula 1', 'basquete'],
        '💰 ECONOMIA & NEGÓCIOS': ['inflação', 'PIB', 'bolsa de valores', 'ROI', 'KPI', 'sales ops'],
        '🌌 ASTRONOMIA': ['sistema solar', 'Via Láctea', 'Big Bang', 'buraco negro'],
        '🌱 MEIO AMBIENTE': ['sustentabilidade', 'reciclagem', 'energia solar', 'aquecimento global']
    };
    
    let response = '🧠 **MINHA BASE DE CONHECIMENTO COMPLETA**\n\n';
    
    for (const [category, topics] of Object.entries(categories)) {
        response += `${category}\n${topics.map(topic => `• ${topic}`).join('\n')}\n\n`;
    }
    
    response += '💡 **COMO USAR:**\n• Faça perguntas específicas: "O que é fotossíntese?"\n• Use "como funciona": "Como funciona blockchain?"\n• Peça explicações: "Explique DNA"\n• Compare: "Diferença entre vírus e bactéria"\n\n🚀 **EXEMPLOS PRÁTICOS:**\n• "Como calcular ROI?"\n• "O que é inteligência artificial?"\n• "Fale sobre Segunda Guerra Mundial"\n• "Como funciona fotossíntese?"';
    
    return response;
}

function getCategoryMatch(message) {
    // Respostas por categoria quando não encontra match específico
    if (message.includes('história') || message.includes('histórico') || message.includes('guerra') || message.includes('brasil')) {
        const historyTopics = ['Segunda Guerra Mundial', 'Independência do Brasil', 'Renascimento', 'civilização egípcia', 'Guerra Fria', 'Revolução Industrial'];
        const randomHistory = historyTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
        return `📚 **HISTÓRIA - MINHA ESPECIALIDADE!**\n\nPosso explicar qualquer período ou evento histórico:\n\n${randomHistory.map(topic => `• ${topic}`).join('\n')}\n\n💡 **Exemplos de perguntas:**\n• "O que foi a ${randomHistory[0]}?"\n• "Como aconteceu a ${randomHistory[1]}?"\n• "Fale sobre ${randomHistory[2]}"\n\n🎯 **Seja específico para respostas detalhadas!**`;
    }
    
    if (message.includes('ciência') || message.includes('científico') || message.includes('biologia') || message.includes('física')) {
        const scienceTopics = ['fotossíntese', 'DNA', 'inteligência artificial', 'energia renovável', 'quantum', 'evolução'];
        const randomScience = scienceTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
        return `🔬 **CIÊNCIA - ÁREA DE CONHECIMENTO!**\n\nPosso explicar desde conceitos básicos até descobertas recentes:\n\n${randomScience.map(topic => `• ${topic}`).join('\n')}\n\n💡 **Exemplos de perguntas:**\n• "Como funciona ${randomScience[0]}?"\n• "O que é ${randomScience[1]}?"\n• "Explique ${randomScience[2]}"\n\n🧬 **Ciência é fascinante - pergunte qualquer coisa!**`;
    }
    
    if (message.includes('tecnologia') || message.includes('computador') || message.includes('internet') || message.includes('digital')) {
        const techTopics = ['inteligência artificial', 'blockchain', 'internet das coisas', 'realidade virtual', '5G', 'computação quântica'];
        const randomTech = techTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
        return `💻 **TECNOLOGIA - MINHA PAIXÃO!**\n\nPosso explicar desde smartphones até IA avançada:\n\n${randomTech.map(topic => `• ${topic}`).join('\n')}\n\n💡 **Exemplos de perguntas:**\n• "Como funciona ${randomTech[0]}?"\n• "O que é ${randomTech[1]}?"\n• "Explique ${randomTech[2]}"\n\n🚀 **Tecnologia move o mundo - vamos explorar!**`;
    }
    
    if (message.includes('saúde') || message.includes('corpo') || message.includes('medicina') || message.includes('doença')) {
        const healthTopics = ['sistema imunológico', 'exercício físico', 'alimentação saudável', 'vacinas', 'vitaminas', 'sono'];
        const randomHealth = healthTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
        return `🏥 **SAÚDE - FUNDAMENTAL PARA VIDA!**\n\nPosso falar sobre prevenção, anatomia e bem-estar:\n\n${randomHealth.map(topic => `• ${topic}`).join('\n')}\n\n💡 **Exemplos de perguntas:**\n• "Como funciona ${randomHealth[0]}?"\n• "Benefícios do ${randomHealth[1]}"\n• "O que são ${randomHealth[2]}?"\n\n💪 **Saúde é riqueza - cuide-se bem!**`;
    }
    
    if (message.includes('negócio') || message.includes('empresa') || message.includes('vendas') || message.includes('marketing')) {
        const businessTopics = ['ROI', 'KPI', 'sales ops', 'pipeline', 'CRM', 'lead', 'conversion rate', 'churn'];
        const randomBusiness = businessTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
        return `💼 **NEGÓCIOS - ÁREA ESTRATÉGICA!**\n\nPosso explicar métricas, processos e estratégias:\n\n${randomBusiness.map(topic => `• ${topic}`).join('\n')}\n\n💡 **Exemplos de perguntas:**\n• "Como calcular ${randomBusiness[0]}?"\n• "O que é ${randomBusiness[1]}?"\n• "Como melhorar ${randomBusiness[2]}?"\n\n📈 **Sucesso nos negócios com conhecimento!**`;
    }
    
    return null;
}

function generateSmartFallback(message) {
    const allTopics = Object.keys(chatKnowledge);
    const randomTopics = allTopics.sort(() => 0.5 - Math.random()).slice(0, 8);
    
    // Sugestões inteligentes baseadas na mensagem
    let smartSuggestions = [];
    if (message.includes('como')) {
        smartSuggestions = ['Como funciona fotossíntese?', 'Como calcular ROI?', 'Como funciona blockchain?'];
    } else if (message.includes('que') || message.includes('o que')) {
        smartSuggestions = ['O que é DNA?', 'O que é inteligência artificial?', 'O que foi Segunda Guerra Mundial?'];
    } else {
        smartSuggestions = ['Explique fotossíntese', 'Fale sobre Bitcoin', 'Diferença entre vírus e bactéria'];
    }
    
    return `🤔 **NÃO ENCONTREI MATCH PARA:** "${message}"\n\n🧠 **TEMAS DISPONÍVEIS (${allTopics.length}+ assuntos):**\n${randomTopics.map(topic => `• ${topic}`).join('\n')}\n\n💡 **SUGESTÕES INTELIGENTES:**\n${smartSuggestions.map(s => `• "${s}"`).join('\n')}\n\n🔍 **DICAS PARA MELHORES RESPOSTAS:**\n• Use termos específicos\n• Faça perguntas diretas\n• Digite "conhecimento" para ver todos os temas\n\n🚀 **Tenho ${allTopics.length}+ assuntos na minha base de dados!**`;
}