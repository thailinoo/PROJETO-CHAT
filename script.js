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
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Carregar tarefas salvas
    renderTasks();
    
    // Carregar aprendizados salvos
    renderNotes();
    updateTagsFilter();
    
    // Mensagem inicial do chat
    setTimeout(() => {
        addChatMessage('Olá! 🚀 Sou seu assistente virtual para dúvidas sobre negócios, sales ops, documentação e muito mais!\n\nPosso explicar termos como: faturamento, ROI, KPI, pipeline, CRM, CNDT, transfer pricing, etc.\n\nQual sua dúvida?', 'bot');
    }, 500);
    
    // Event listener para Enter na pesquisa
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDocument();
        }
    });
    
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
    
    const results = documents.filter(doc => 
        doc.acronym.toLowerCase().includes(searchTerm) ||
        doc.name.toLowerCase().includes(searchTerm) ||
        (searchTerm.includes('multinacional') && doc.acronym === 'MULTINACIONAL') ||
        (searchTerm.includes('empresa estrangeira') && doc.acronym === 'MULTINACIONAL')
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">Nenhum documento encontrado</div>';
        return;
    }
    
    const resultsHTML = results.map(doc => `
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
    `).join('');
    
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
        <div class="note-card">
            <div class="note-header">
                <h3 class="note-title">${note.title}</h3>
                <span class="note-date">${note.timestamp}</span>
            </div>
            <div class="note-content">${note.content}</div>
            <div class="note-tags-display">
                ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="note-actions">
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

// Base de conhecimento expandida para o chat
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
    'postmortem': 'Postmortem é análise após incidente para identificar causas e melhorias. Aprendizado importante.'
};

// Função para enviar mensagem no chat
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Adicionar mensagem do usuário
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Simular digitando
    addTypingIndicator();
    
    // Resposta do bot após delay
    setTimeout(() => {
        removeTypingIndicator();
        const response = generateResponse(message);
        addChatMessage(response, 'bot');
    }, 1500);
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

// Função para gerar resposta do bot
function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Remover palavras comuns para melhor matching
    const cleanMessage = lowerMessage.replace(/\b(o que é|que é|qual|como|onde|quando|por que|significa|signifca)\b/g, '').trim();
    
    // Buscar na base de conhecimento (busca exata primeiro)
    for (const [key, value] of Object.entries(chatKnowledge)) {
        if (cleanMessage.includes(key) || lowerMessage.includes(key)) {
            return `💡 **${key.toUpperCase()}**\n\n${value}`;
        }
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
    
    // Respostas contextuais inteligentes
    if (lowerMessage.includes('calcular') && (lowerMessage.includes('roi') || lowerMessage.includes('retorno'))) {
        return '📊 **Como calcular ROI:**\n\nFórmula: (Ganho - Investimento) / Investimento x 100\n\nExemplo: Investiu R$ 1.000, ganhou R$ 1.500\nROI = (1.500 - 1.000) / 1.000 x 100 = 50%';
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
    if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('bom dia') || lowerMessage.includes('boa tarde')) {
        return '😊 Olá! Como posso ajudar você hoje? Posso explicar termos de negócios, sales ops, documentação e muito mais!';
    }
    
    if (lowerMessage.includes('obrigad') || lowerMessage.includes('valeu')) {
        return '😊 Por nada! Fico feliz em ajudar. Se tiver mais dúvidas, é só perguntar!';
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
    
    // Resposta padrão mais inteligente
    const topics = ['faturamento', 'ROI', 'KPI', 'pipeline', 'CRM', 'delegação', 'escalação', 'autonomia', 'troubleshooting', 'priority matrix', 'SOP', 'backup', 'handover', 'ASAP', 'compliance'];
    const randomTopics = topics.sort(() => 0.5 - Math.random()).slice(0, 6);
    
    return `🤔 Não encontrei informações específicas sobre isso.\n\n💡 **Posso ajudar com:**\n${randomTopics.map(topic => `• ${topic}`).join('\n')}\n\nTente reformular sua pergunta ou escolha um dos temas acima!`;
}