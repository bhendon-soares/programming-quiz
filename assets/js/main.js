const perguntas = [
    {
        pergunta: "O que é uma variável em programação?",
        respostas: [
            "Uma função matemática",
            "Um valor constante",
            "Um local de armazenamento para dados",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do operador '==' em JavaScript?",
        respostas: [
            "Comparação de valor e tipo",
            "Atribuição de valor",
            "Comparação de valor apenas",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um loop 'for' utilizado para fazer?",
        respostas: [
            "Ordenar arrays",
            "Executar um bloco de código várias vezes",
            "Criar funções",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do comando 'if' em programação?",
        respostas: [
            "Executar um bloco de código repetidamente",
            "Realizar uma comparação e executar um bloco de código condicional",
            "Declarar uma variável",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado para armazenar apenas números",
            "Um tipo de dado para armazenar múltiplos valores ordenados",
            "Uma estrutura de controle de fluxo",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um método de ordenação de dados",
            "Uma linguagem de programação",
            "Uma interface que representa a estrutura de uma página HTML",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em programação?",
        respostas: [
            "Um tipo de dado para armazenar textos",
            "Um bloco de código que realiza uma tarefa específica",
            "Um operador de comparação",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o operador '&&' em JavaScript?",
        respostas: [
            "Operador de adição",
            "Operador lógico 'OU'",
            "Operador lógico 'E'",
        ],
        correta: 2
    },
    {
        pergunta: "O que significa a sigla 'HTTP'?",
        respostas: [
            "HyperText Transfer Protocol",
            "High-Level Programming",
            "Hardware Testing and Performance",
        ],
        correta: 0
    },
    {
        pergunta: "O que é um objeto em JavaScript?",
        respostas: [
            "Uma estrutura de controle de fluxo",
            "Um tipo de dado para armazenar apenas números",
            "Uma coleção de propriedades e métodos",
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        quizItem.querySelector('dl').appendChild(dt);
    }

    //remove a "Resposta A"
    quizItem.querySelector('dl dt').remove();

    // coloca a pergunta na tela
    quiz.appendChild(quizItem);
}