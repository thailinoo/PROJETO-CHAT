from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import re
import random
from datetime import datetime

app = Flask(__name__)
CORS(app)

class IntelligentAI:
    def __init__(self):
        self.knowledge_base = {
            # Ciências
            'fotossintese': {
                'keywords': ['fotossintese', 'plantas', 'clorofila', 'oxigenio'],
                'response': 'A fotossíntese é o processo pelo qual plantas convertem luz solar, CO₂ e água em glicose e oxigênio. Equação: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. É fundamental para a vida na Terra!'
            },
            'dna': {
                'keywords': ['dna', 'genetica', 'cromossomo', 'gene'],
                'response': 'DNA (Ácido Desoxirribonucleico) é a molécula que carrega informações genéticas. Estrutura em dupla hélice descoberta por Watson e Crick em 1953. Contém instruções para desenvolvimento e funcionamento dos seres vivos.'
            },
            'inteligencia_artificial': {
                'keywords': ['ia', 'inteligencia artificial', 'machine learning', 'algoritmo'],
                'response': 'Inteligência Artificial é tecnologia que permite máquinas simularem inteligência humana. Inclui aprendizado de máquina, processamento de linguagem natural e visão computacional. Está revolucionando diversos setores!'
            },
            
            # História
            'segunda_guerra': {
                'keywords': ['segunda guerra', 'hitler', 'nazismo', '1939', '1945'],
                'response': 'Segunda Guerra Mundial (1939-1945) foi o maior conflito da história. Envolveu mais de 30 países, causou 70-85 milhões de mortes. Terminou com vitória dos Aliados e bombas atômicas no Japão.'
            },
            'brasil_independencia': {
                'keywords': ['independencia brasil', 'dom pedro', 'ipiranga', '1822'],
                'response': 'Independência do Brasil foi proclamada por Dom Pedro I em 7 de setembro de 1822, às margens do rio Ipiranga. "Independência ou Morte!" foi o grito que marcou a separação de Portugal.'
            },
            
            # Ciência e Tecnologia
            'blockchain': {
                'keywords': ['blockchain', 'bitcoin', 'criptomoeda', 'descentralizado'],
                'response': 'Blockchain é tecnologia de registro distribuído que mantém lista crescente de registros (blocos) ligados criptograficamente. Base das criptomoedas, garante transparência e segurança sem intermediários.'
            },
            'quantum': {
                'keywords': ['quantico', 'quantum', 'superposicao', 'entrelaçamento'],
                'response': 'Física quântica estuda comportamento de partículas subatômicas. Princípios incluem superposição (partícula em múltiplos estados) e entrelaçamento quântico. Base da computação quântica futura.'
            },
            
            # Matemática
            'pitagoras': {
                'keywords': ['pitagoras', 'triangulo retangulo', 'hipotenusa'],
                'response': 'Teorema de Pitágoras: em triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Fórmula: a² + b² = c². Fundamental na geometria!'
            },
            'pi': {
                'keywords': ['pi', 'circunferencia', 'diametro', '3.14'],
                'response': 'Pi (π) é a razão entre circunferência e diâmetro de qualquer círculo. Valor aproximado: 3,14159... É um número irracional e transcendente, usado em inúmeras fórmulas matemáticas.'
            },
            
            # Saúde
            'sistema_imunologico': {
                'keywords': ['imunidade', 'anticorpos', 'globulos brancos', 'vacina'],
                'response': 'Sistema imunológico defende o corpo contra patógenos. Inclui glóbulos brancos, anticorpos, baço e linfonodos. Vacinas treinam o sistema para reconhecer e combater doenças específicas.'
            },
            'exercicio': {
                'keywords': ['exercicio', 'atividade fisica', 'musculacao', 'cardio'],
                'response': 'Exercício físico melhora saúde cardiovascular, fortalece músculos, ossos e melhora humor. Recomenda-se 150 min/semana de atividade moderada. Benefícios incluem longevidade e qualidade de vida.'
            },
            
            # Economia e Negócios
            'inflacao': {
                'keywords': ['inflacao', 'precos', 'moeda', 'economia'],
                'response': 'Inflação é aumento generalizado de preços que reduz poder de compra. Causas: excesso de demanda, custos de produção, expectativas. Controlada por políticas monetárias do Banco Central.'
            },
            'bitcoin': {
                'keywords': ['bitcoin', 'criptomoeda', 'satoshi', 'mineracao'],
                'response': 'Bitcoin é primeira criptomoeda descentralizada, criada por Satoshi Nakamoto em 2009. Funciona sem banco central, usando blockchain. Limitado a 21 milhões de unidades.'
            },
            
            # Arte e Cultura
            'leonardo_vinci': {
                'keywords': ['leonardo', 'vinci', 'mona lisa', 'renascimento'],
                'response': 'Leonardo da Vinci (1452-1519) foi gênio renascentista: pintor (Mona Lisa, Última Ceia), inventor, cientista, engenheiro. Personifica o "homem universal" do Renascimento.'
            },
            'shakespeare': {
                'keywords': ['shakespeare', 'hamlet', 'romeu julieta', 'teatro'],
                'response': 'William Shakespeare (1564-1616) é considerado maior dramaturgo da língua inglesa. Obras famosas: Hamlet, Romeu e Julieta, Macbeth, Rei Lear. Criou mais de 1700 palavras em inglês.'
            },
            
            # Geografia
            'amazonia': {
                'keywords': ['amazonia', 'floresta', 'pulmao mundo', 'biodiversidade'],
                'response': 'Amazônia é maior floresta tropical do mundo, cobrindo 60% do Brasil. Chamada "pulmão do mundo", produz 20% do oxigênio global. Abriga 10% da biodiversidade conhecida.'
            },
            'aquecimento_global': {
                'keywords': ['aquecimento global', 'mudanca climatica', 'co2', 'efeito estufa'],
                'response': 'Aquecimento global é aumento da temperatura média da Terra devido a gases estufa (CO₂, metano). Causas: queima combustíveis fósseis, desmatamento. Consequências: derretimento geleiras, eventos climáticos extremos.'
            },
            
            # Esportes
            'futebol': {
                'keywords': ['futebol', 'copa mundo', 'fifa', 'pele'],
                'response': 'Futebol é esporte mais popular do mundo. Brasil é pentacampeão mundial (1958, 1962, 1970, 1994, 2002). Pelé é considerado maior jogador de todos os tempos.'
            },
            'olimpiadas': {
                'keywords': ['olimpiadas', 'jogos olimpicos', 'grecia', 'esporte'],
                'response': 'Jogos Olímpicos são maior evento esportivo mundial, realizados a cada 4 anos desde 1896. Inspirados nos jogos da Grécia Antiga. Promovem paz e união entre nações.'
            }
        }
        
        self.conversation_patterns = {
            'greeting': ['oi', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'hey'],
            'thanks': ['obrigado', 'obrigada', 'valeu', 'muito bom', 'excelente'],
            'how_questions': ['como funciona', 'como fazer', 'como calcular'],
            'what_questions': ['o que e', 'que e', 'qual e', 'significa'],
            'explain': ['explique', 'fale sobre', 'me conte sobre']
        }

    def preprocess_text(self, text):
        """Limpa e normaliza o texto"""
        text = text.lower().strip()
        text = re.sub(r'[^\w\s]', '', text)
        text = re.sub(r'\s+', ' ', text)
        return text

    def find_best_match(self, user_input):
        """Encontra a melhor correspondência na base de conhecimento"""
        processed_input = self.preprocess_text(user_input)
        best_match = None
        best_score = 0
        
        for topic, data in self.knowledge_base.items():
            score = 0
            for keyword in data['keywords']:
                if keyword in processed_input:
                    score += 1
            
            if score > best_score:
                best_score = score
                best_match = data
        
        return best_match if best_score > 0 else None

    def detect_question_type(self, text):
        """Detecta o tipo de pergunta"""
        text = text.lower()
        
        for pattern_type, patterns in self.conversation_patterns.items():
            for pattern in patterns:
                if pattern in text:
                    return pattern_type
        return 'general'

    def generate_contextual_response(self, user_input):
        """Gera resposta contextual baseada na entrada"""
        question_type = self.detect_question_type(user_input)
        
        # Respostas para cumprimentos
        if question_type == 'greeting':
            greetings = [
                "🤖 Olá! Sou uma IA avançada com processamento de linguagem natural. Posso responder sobre ciência, história, tecnologia, matemática e muito mais!",
                "👋 Oi! Estou aqui para esclarecer suas dúvidas sobre qualquer assunto. Minha base de conhecimento é constantemente atualizada!",
                "✨ Olá! Tenho conhecimento em diversas áreas e posso detectar o contexto das suas perguntas. Faça sua pergunta!",
                "🧠 Oi! Pronto para explorar o conhecimento juntos? Posso explicar desde conceitos básicos até temas complexos!"
            ]
            return random.choice(greetings)
        
        # Respostas para agradecimentos
        if question_type == 'thanks':
            thanks_responses = [
                "😊 Fico feliz em ajudar! Conhecimento é para ser compartilhado. Minha IA está sempre aprendendo. Mais alguma dúvida?",
                "🎉 Por nada! Adoro explicar coisas interessantes com meu processamento avançado. Próxima pergunta?",
                "✨ De nada! Sempre pronto para mais curiosidades. Posso detectar padrões e dar respostas mais precisas!",
                "🤓 Foi um prazer usar minha inteligência artificial para ajudar! O aprendizado nunca para. Que tal outro tópico?"
            ]
            return random.choice(thanks_responses)
        
        # Buscar na base de conhecimento
        match = self.find_best_match(user_input)
        if match:
            # Adicionar contexto baseado no tipo de pergunta
            context_prefix = ""
            if question_type == 'how_questions':
                context_prefix = "🔍 **Como funciona:**\n\n"
            elif question_type == 'what_questions':
                context_prefix = "📚 **Definição:**\n\n"
            elif question_type == 'explain':
                context_prefix = "🧠 **Explicação detalhada:**\n\n"
            
            return f"{context_prefix}{match['response']}\n\n💡 **Quer saber mais?** Posso detalhar aspectos específicos ou temas relacionados!"
        
        # Resposta inteligente quando não encontra
        return self.generate_smart_fallback(user_input)

    def generate_smart_fallback(self, user_input):
        """Gera resposta inteligente quando não encontra o tópico"""
        suggestions = [
            "fotossíntese", "DNA", "inteligência artificial", "Segunda Guerra Mundial",
            "independência do Brasil", "blockchain", "física quântica", "Teorema de Pitágoras",
            "sistema imunológico", "exercício físico", "Bitcoin", "Leonardo da Vinci",
            "Shakespeare", "Amazônia", "aquecimento global", "futebol", "Olimpíadas",
            "inflação", "número Pi", "evolução"
        ]
        
        random_suggestions = random.sample(suggestions, 5)
        
        return f"""🤔 **Análise da IA:** Não encontrei correspondência exata para "{user_input}" em minha base de conhecimento atual.

🧠 **Minha IA pode ajudar com:**
• {random_suggestions[0]}
• {random_suggestions[1]} 
• {random_suggestions[2]}
• {random_suggestions[3]}
• {random_suggestions[4]}

💡 **Exemplos de perguntas otimizadas:**
• "O que é {random_suggestions[0]}?"
• "Como funciona {random_suggestions[1]}?"
• "Explique sobre {random_suggestions[2]}"
• "Diferença entre {random_suggestions[3]} e {random_suggestions[4]}"

🔄 **Dica da IA:** Reformule usando palavras-chave ou escolha um tópico acima para respostas mais precisas!"""

ai_assistant = IntelligentAI()

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'Mensagem vazia'}), 400
        
        # Gerar resposta
        response = ai_assistant.generate_contextual_response(user_message)
        
        return jsonify({
            'response': response,
            'timestamp': datetime.now().isoformat()
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'IA funcionando perfeitamente!', 'version': '2.0'})

if __name__ == '__main__':
    print("Iniciando IA Avancada com Processamento de Linguagem Natural...")
    print("Base de conhecimento carregada com sucesso!")
    print(f"Topicos disponiveis: {len(ai_assistant.knowledge_base)}")
    print("Servidor rodando em http://localhost:5000")
    print("IA pronta para responder perguntas inteligentes!")
    app.run(debug=False, host='0.0.0.0', port=5000)