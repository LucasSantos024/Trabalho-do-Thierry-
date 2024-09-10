const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que a conscientização ambiental é fundamental para a sociedade?",
        alternativas: [           
            {
                texto: "Porque ajuda a criar uma população mais informada sobre os impactos das ações humanas no planeta, promovendo mudanças de comportamento.",
                afirmacao: "Você acredita que a conscientização ambiental ajuda a criar uma população mais informada e promove mudanças de comportamento."
            },
            {
                texto: "Porque estimula a participação cidadã em questões ambientais, resultando em políticas públicas mais eficazes e sustentáveis.",
                afirmacao: "Você vê a participação cidadã em questões ambientais como crucial para a formulação de políticas públicas eficazes e sustentáveis."
            }
        ]
    },
    {
        enunciado: "Por que é importante educar as crianças sobre questões ambientais?",
        alternativas: [           
            {
                texto: "Porque elas se tornam adultos mais responsáveis e conscientes, capazes de tomar decisões que beneficiam o meio ambiente.",
                afirmacao: "Você acredita que educar as crianças sobre questões ambientais as prepara para serem adultos mais responsáveis e conscientes."
            },
            {
                texto: "Porque a educação ambiental desde cedo incentiva hábitos sustentáveis, como reciclagem e economia de recursos, que podem ser mantidos ao longo da vida.",
                afirmacao: "Você vê a educação ambiental precoce como uma forma de incentivar hábitos sustentáveis que persistem ao longo da vida."
            }
        ]
    },
    {
        enunciado: "Por que a preservação da biodiversidade é crucial para o meio ambiente?",
        alternativas: [           
            {
                texto: "Porque ecossistemas saudáveis são essenciais para o equilíbrio ambiental e fornecem serviços vitais, como polinização e purificação da água.",
                afirmacao: "Você acredita que ecossistemas saudáveis são essenciais para o equilíbrio ambiental e fornecem serviços vitais."
            },
            {
                texto: "Porque a diversidade biológica contribui para a resiliência dos ecossistemas, ajudando-os a se adaptarem às mudanças climáticas e outras pressões ambientais.",
                afirmacao: "Você vê a diversidade biológica como fundamental para a resiliência dos ecossistemas frente a mudanças climáticas e outras pressões."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
