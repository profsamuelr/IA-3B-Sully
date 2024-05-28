const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const perguntas = [
    {
        enunciado: "Voce acabou de sair da escola, no caminho para casa voce se depara com uma figura desconhecida, o que voce decide fazer?",
        alternativas: [
            "Me aproximo para descobrir o que é essa figura desconhecida",
            "Me afasto rapidamente sem olhar para trás"
        ]
    },
    {
        enunciado: "Voce percebe ao se aproximar, que se tratava de uma pessoa, so que ela estava espumando pela boca e aparentava estar desorientada.",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 3",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 4",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "pergunta 5",
        alternativas: [
            "alternativa 1",
            "alternativa 2"
        ]
    }
];