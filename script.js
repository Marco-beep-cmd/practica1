const questions = [
    {
        "question": "¿Cuál es el menú para ir a Marca de agua, color de página y bordes de página (Apartado: Fondo de página)?",
        "image": "images/1.0.jpg",
        "options": [
            { "text": "Archivo", "isCorrect": false },
            { "text": "Referencias", "isCorrect": false },
            { "text": "Diseño", "isCorrect": true }
        ]
    },
    {
        "question": "¿Cuál es el menú para ir a resaltado y tablas (Apartados: Fuente - Tablas)?",
        "image": "images/1.0.jpg",
        "options": [
            { "text": "Insertar - Inicio", "isCorrect": false },
            { "text": "Inicio - Insertar", "isCorrect": true },
            { "text": "Diseño", "isCorrect": false }
        ]
    },
    {
        "question": "¿Como se llama el menu para guardar el documento?",
        "image": "images/1.0.jpg",
        "options": [
            { "text": "Diseño", "isCorrect": false },
            { "text": "Configuración", "isCorrect": false },
            { "text": "Archivo", "isCorrect": true }
        ]
    },
    {
        "question": "¿Cómo se llama el apartado donde se encuentran la Marca de agua, color de página y bordes de página?",
        "image": "images/1.0.jpg",
        "options": [
            { "text": "Fondos", "isCorrect": false },
            { "text": "Fondo de página", "isCorrect": true },
            { "text": "Configurar fondo", "isCorrect": false }
        ]
    },
    {
        "question": "¿Cómo se llama el apartado donde se encuentran Tablas?",
        "image": "images/1.0.jpg",
        "options": [
            { "text": "Fondos", "isCorrect": false },
            { "text": "Insertar", "isCorrect": true },
            { "text": "Insercion", "isCorrect": false }
        ]
    },
    {
        "question": "Responde",
        "image": "wordprimaria/12.png",
        "options": [
            { "text": "A", "isCorrect": false },
            { "text": "B", "isCorrect": true },
            { "text": "C", "isCorrect": false }
        ]
    },
    {
        "question": "Responde",
        "image": "wordprimaria/13.png",
        "options": [
            { "text": "A", "isCorrect": true },
            { "text": "B", "isCorrect": false },
            { "text": "C", "isCorrect": false }
        ]
    },
    {
        "question": "Responde",
        "image": "wordprimaria/14.png",
        "options": [
            { "text": "A", "isCorrect": false },
            { "text": "B", "isCorrect": false },
            { "text": "C", "isCorrect": true }
        ]
    },
    {
        "question": "Responde",
        "image": "wordprimaria/15.png",
        "options": [
            { "text": "1A", "isCorrect": false },
            { "text": "3A", "isCorrect": false },
            { "text": "2A", "isCorrect": true }
        ]
    },
    {
        "question": "Responde",
        "image": "wordprimaria/16.png",
        "options": [
            { "text": "NA", "isCorrect": false },
            { "text": "1", "isCorrect": false },
            { "text": "2", "isCorrect": true }
        ]
    },
    {
        "question": "Responde",
        "image": "wordprimaria/17.png",
        "options": [
            { "text": "NA", "isCorrect": false },
            { "text": "1", "isCorrect": true },
            { "text": "2", "isCorrect": false }
        ]
    },
    {
        "question": "Responde",
        "image": "QUESTION/12.png",
        "options": [
            { "text": "C", "isCorrect": false },
            { "text": "A", "isCorrect": false },
            { "text": "B", "isCorrect": true }
        ]
    },
    {
        "question": "Responde",
        "image": "QUESTION/13.png",
        "options": [
            { "text": "A", "isCorrect": false },
            { "text": "B", "isCorrect": true },
            { "text": "C", "isCorrect": false }
        ]
    },
    {
        "question": "Responde",
        "image": "QUESTION/15.png",
        "options": [
            { "text": "A", "isCorrect": false },
            { "text": "B", "isCorrect": false },
            { "text": "C", "isCorrect": true }
        ]
    },
    {
        "question": "Cual es salto de página",
        "image": "QUESTION/17.png",
        "options": [
            { "text": "C", "isCorrect": false },
            { "text": "B", "isCorrect": false },
            { "text": "A", "isCorrect": true }
        ]
    },
    {
        "question": "Cual es hoja en blanco",
        "image": "QUESTION/17.png",
        "options": [
            { "text": "C", "isCorrect": false },
            { "text": "B", "isCorrect": true },
            { "text": "A", "isCorrect": false }
        ]
    },
    {
        "question": "Cual de los apartados estan bien mencionados en el menú insertar.",
        "image": "4.1.png",
        "options": [
            { "text": "C", "isCorrect": false },
            { "text": "B", "isCorrect": false },
            { "text": "A", "isCorrect": true }
        ]
    },
    {
        "question": "¿Como se llaman estas 2 herramientas?",
        "image": "10.png",
        "options": [
            { "text": "Graficos - SmartArt", "isCorrect": false },
            { "text": "Formas - Mapas conceptuales", "isCorrect": false },
            { "text": "SmartArt - Graficos", "isCorrect": true }
        ]
    },
    {
        "question": "¿Cómo se llama la herramienta",
        "image": "18.png",
        "options": [
            { "text": "Imagenes", "isCorrect": false },
            { "text": "Ilustración", "isCorrect": false },
            { "text": "Iconos", "isCorrect": true }
        ]
    }

];


let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const introSlides = document.querySelectorAll('.intro-slide');
let currentSlideIndex = 0;

function showSlide(index) {
    introSlides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.querySelectorAll('.next-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showSlide(index + 1);
    });
});

document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('intro-container').style.display = 'none'; 
    quizContainer.style.display = 'block'; 
    showQuestion(); 
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <img src="${currentQuestion.image}" alt="Question Image">
        <div>
            ${currentQuestion.options.map((option, index) => `
                <button class="option-btn" data-is-correct="${option.isCorrect}">${option.text}</button>
            `).join('')}
        </div>
    `;

    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (button.getAttribute('data-is-correct') === 'true') {
                button.style.backgroundColor = 'green';
                score += 1.25; // Cada pregunta vale 1.1 puntos
            } else {
                button.style.backgroundColor = 'red';
            }
            document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }, 100); // Esperar 0.1 segundos antes de pasar a la siguiente pregunta
        });
    });
}

function showResult() {
    let finalScore = Math.round(score); // Redondear el puntaje al número entero más cercano
    let message = '';
    if (finalScore <= 10) {
        message = 'Hay que mejorar 😕. Repíte los ejercicios para que ganes tu caramelito.';
    } else if (finalScore <= 17) {
        message = 'Poco a poco pero hay que seguir para adelante 💪🏻. Repíte los ejercicios para que ganes tu caramelito.';
    } else if (finalScore <= 20) {
        message = '¡FELICITACIONES, TÓMA TU CARAMELITO 🍬!';
    }
    quizContainer.innerHTML = `
        <h2>¡Has completado todas las preguntas!</h2>
        <p>Tu puntaje es ${finalScore} de 20.</p>
        <p>${message}</p>
        ${finalScore <= 20 ? '<div id="caramelito">🍬</div>' : ''}
    `;

    if (finalScore >= 20) {
        const caramelito = document.getElementById('caramelito');
        caramelito.addEventListener('click', () => {
            createExplosion(caramelito);
            createCandyRain(); // Añadir la lluvia de caramelos
        });
    }
}

function createExplosion(caramelito) {
    const explosionContainer = document.createElement('div');
    explosionContainer.style.position = 'relative';
    explosionContainer.style.width = '100%';
    explosionContainer.style.height = '100%';
    quizContainer.appendChild(explosionContainer);

    for (let i = 0; i < 20; i++) {
        const candy = document.createElement('div');
        candy.innerHTML = '🍬';
        candy.style.position = 'absolute';
        candy.style.animation = `explode 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both`;
        candy.style.top = `${caramelito.offsetTop}px`;
        candy.style.left = `${caramelito.offsetLeft}px`;
        explosionContainer.appendChild(candy);
    }

    setTimeout(() => {
        explosionContainer.remove();
    }, 800);
}

function createCandyRain() {
    const candyRainContainer = document.createElement('div');
    candyRainContainer.style.position = 'fixed';
    candyRainContainer.style.top = '0';
    candyRainContainer.style.left = '0';
    candyRainContainer.style.width = '100%';
    candyRainContainer.style.height = '100%';
    candyRainContainer.style.pointerEvents = 'none';
    candyRainContainer.style.zIndex = '1000';
    document.body.appendChild(candyRainContainer);

    for (let i = 0; i < 50; i++) {
        const candy = document.createElement('div');
        candy.innerHTML = '🍬';
        candy.style.position = 'absolute';
        candy.style.top = `${Math.random() * -100}px`;
        candy.style.left = `${Math.random() * 100}%`;
        candy.style.fontSize = '10rem'; // Cambiar el tamaño de la fuente a 10 rem
        candy.style.animation = `fall ${2 + Math.random() * 3}s linear infinite`;
        candyRainContainer.appendChild(candy);
    }

    setTimeout(() => {
        candyRainContainer.remove();
    }, 5000);
}
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('colorful-h1');
    const words = h1.innerText.split(' ');
    h1.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

    const spans = h1.querySelectorAll('span');
    let currentIndex = 0;
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A6'];

    setInterval(() => {
        spans.forEach((span, index) => {
            span.style.animation = 'none'; // Reset animation
            span.style.color = '#ffffff'; // Default color
        });

        spans[currentIndex].style.animation = 'fadeColor 1s ease-in-out';
        spans[currentIndex].style.color = colors[currentIndex % colors.length];
        currentIndex = (currentIndex + 1) % spans.length;
    }, 1000); // Change color every 1000ms (1 second)
});


showSlide(0);
