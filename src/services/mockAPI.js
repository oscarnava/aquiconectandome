const MOCK_DATA = {
  bitacora: [{
    img: 'dia-01.jpg',
    head: 'Cosas que te hacen feliz.',
    text: 'La felicidad es un trabajo interior. Escribe cinco cosas que te hacen feliz. Describe por qué.',
    video: ['JKUNWx-vebM'],
    $_en: {
      head: 'Things that make you happy.',
      text: 'Happiness is an inner job. Write about 5 things that make you happy, extend your response considering why?',
      video: ['KLD8LPapPC4'],
    },
  },
  {
    img: 'dia-02.jpg',
    head: '¿Cuál es tu mayor temor?',
    text: 'Hoy en es un día para ver hacia adentro, escribe sobre ¿Cuál es tu temor más grande? Esto que te asusta mientras haces este ejercicio mindful de parar y ver, piensa: ¿Es algo racional? ("Temor es la reacción natural cuando te acercas a la verdad" -Pema Chödron)',
    video: ['iIehqq3ktrQ'],
    audio: ['calmando_el_miedo_es.mp3'],
    $_en: {
      head: 'Which is your biggest fear?',
      text: 'Today is a day to turn inside and be aware, write about which is your biggest fear? As you make this excercise to pause and see think: this thing that scares you, is it something rational? ("“Fear is a natural reaction to moving closer to the truth.” Pema Chödron)',
      video: ['qeObZjzH5Gc'],
      audio: ['calmando_el_miedo_en.ogg'],
    },
  },
  {
    img: 'dia-03.jpg',
    head: 'Maneras en que puedes mejorar tu vida.',
    text: 'Escribe cinco maneras en que puedes mejorar tu vida en los siguientes 6 meses ¿Cómo puedes lograr cada una?',
    audio: ['meditacion_del_cambio_es.mp3'],
    $_en: {
      head: 'Ways in which you can improve your life.',
      text: 'Write about five ways in which you can improve your life in the next 6 months. How would you accomplish each one?',
      audio: ['meditacion_del_cambio_en.ogg'],
    },
  },
  {
    img: 'dia-04.jpg',
    head: 'Tus cualidades.',
    text: '¿Cuál de tus cualidades te gusta más? ¿Por qué? ¿Cómo te ayuda esta cualidad en tu vida? ¿Te ha causado algún problema?',
    video: ['IC3BaAmYA5I  '],
    $_en: {
      head: 'Your qualities',
      text: 'Think about your qualities, which one do you like the best? why? how this quality has been helpful in your life? which one could have brought you a problem?',
      video: ['SrbVznz3GYQ'],
    },
  },
  {
    img: 'dia-05.jpg',
    head: 'Tres recuerdos felices sobre ti mismo.',
    text: 'Escribe sobre tres recuerdos felices que tienes sobre ti mismo. No se trata de los hijos, familia o mascotas; ve a los recuerdos que tienen que ver directamente contigo, con lo que tú has hecho.',
    video: ['J2RUYa22Utc'],
    $_en: {
      head: 'Three happy memories about yourself',
      text: 'Write about three happy memories you have of yourself. This is not about others bring to mind things that have to do directly with you, with what you have done.',
      video: ['lkg18xDasRU'],
    },
  },
  {
    img: 'dia-06.jpg',
    head: 'Abriendo un universo nuevo',
    text: 'Cambia tú. Cambia radicalmente, deja de hacer las cosas que siempre has estado haciendo. Este es el momento de hacer cosas que no haya hecho nunca. Cambia radicalmente, vuélvete una persona nueva y te sorprenderás, nunca esperes que el otro cambie.',
    video: ['kdZfu48lnD4'],
    $_en: {
      head: 'Opening to a new universe',
      text: 'You change. Make a radical change and stop doing the things that you have been doing. This is the time to do things that you have not done ever before. Change and become a new person, and let yourself be surprised, don\'t expect the other to change.',
    },
  },
  {
    img: 'dia-07.jpg',
    head: 'Personas que te hacen sentir mejor.',
    text: 'Escribe acerca de las personas que en tu vida te hacen sentir mejor. ¿Qué cualidades tienen estas personas que te hacen sentir así?',
    $_en: {
      head: 'People that make you feel better.',
      text: 'Write about people in your life that make you feel better. which are the qualities this person has that make you feel this way?',
    },
  },
  {
    img: 'dia-08.jpg',
    head: 'Un evento difícil en tu vida.',
    text: 'Escribe acerca de un evento difícil que has tenido que enfrentar en tu vida. ¿Cómo lidiaste con eso? Viéndolo en retrospectiva ¿Podías haberlo manejado diferente? ¿Cómo?',
    $_en: {
      head: 'A difficult experience in your life.',
      text: 'Write about a difficult experience you had to face in your life. How did you cope with it? In hindsight could you have manage it differently? How?',
    },
  },
  {
    img: 'dia-09.jpg',
    head: 'Describe a tu opuesto.',
    text: 'Describe a una persona que sea totalmente opuesto a ti, y trata de ser muy específico con respecto a sus cualidades. ¿Será que los opuestos se complementan?',
    video: ['Ji5CB0UDFLQ'],
    $_en: {
      head: 'Describe your opposite.',
      text: 'Describe a person that you consider is the opposite from you. Try to describe her qualities. Do you think opposites complement the whole?',
      video: ['Ji5CB0UDFLQ'],
    },
  },
  {
    img: 'dia-10.jpg',
    head: 'Cosas que te hacen llorar.',
    text: 'Escribe sobre tres cosas que siempre te hacen llorar. ¿Llorar ayuda a la situación? ¿Si sí, cómo?',
    $_en: {
      head: 'Things that make you cry.',
      text: 'Write about three things that always make you cry. Does crying help the situation? If your answer is yes, how?',
    },
  },
  {
    img: 'dia-11.jpg',
    head: 'Lo que te hace reir.',
    text: 'Escribe sobre alguna vez que reíste tan fuerte que hasta te salieron lágrimas. ¿Qué ocasionó la risa? ¿Recordar el evento te hace reír?',
    $_en: {
      head: 'What makes you laugh.',
      text: 'Write about a time when you laugh so hard that you had tears in your eyes. What caused the laugh? Does remembering this makes you laugh or smile?',
    },
  },
  {
    img: 'dia-12.jpg',
    head: 'Una emoción importante.',
    text: 'Escribe sobre los momentos en que te reconociste y honraste una emoción importante. ¿Cómo te hizo sentir el reconocer la verdad de tus sentimientos? "La autenticidad es la práctica diaria de liberarnos de lo que creemos que deberíamos ser, y abrazar en cambio lo que realmente somos" Brene Brown',
    video: ['tEntuVUc7PM'],
    $_en: {
      head: 'An important feeling.',
      text: 'Write about a time when you recognized and honor an important feeling. How did recognizing the truth of that feeling made you feel? "Authenticity is the daily practice of letting go of who we think we\'re supposed to be and embracing who we are." Brené Brown',
      video: ['NDQ1Mi5I4rg'],
    },
  },
  {
    img: 'dia-13.jpg',
    head: 'Carta a un familiar.',
    text: 'Escribe una carta a tus padres, abuelos o hermanos. La intención NO es que se las des. No es necesario que estén con vida. La intención es que tú puedas decir lo que hay en ti, lo que impactó tu vida ya sea positivamente o negativamente cuando eras más joven.',
    $_en: {
      head: 'A letter for a relative.',
      text: 'Write a letter to your parents, grandparents, or siblings. The intention is not that you will give it to them, and they don´t need to be alive. The intention is that you can really say what is inside of you, what has left a mark in your life in a positive or negative way when you were younger.',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Cómo eres diferente?',
    text: 'Escribe sobre las maneras en que eres particular, diferente, peculiar. ¿Por qué tienes estas características?',
    $_en: {
      head: 'How are you different?',
      text: 'Write about the ways you are particular, different, peculiar. ¿Why do you have these characteristics?',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¡Una mala decisión!',
    text: 'Escribe sobre un momento en que tomaste una mala decisión en tu vida. ¿Cuánto tiempo te tomó darte cuenta del error? ¿Has repetido ese mismo error alguna otra vez?',
    $_en: {
      head: 'A bad decision!',
      text: 'Remember and write about a time when you made a bad decision in your life. How much time passes for you to realize the mistake? Has something like this presented again?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Tu ansiedad.',
    text: 'Escribe sobre lo que has aprendido de ti mismo acerca de la ansiedad.',
    $_en: {
      head: 'Your anxiety.',
      text: 'Write about what you have learned of yourself when there is anxiety.',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Un día de felicidad.',
    text: 'Describe con mucho detalle cómo es para tí un día de felicidad. ¿Cómo es cada momento? ¿Cómo se siente dentro?',
    $_en: {
      head: 'A happy day.',
      text: 'Write with a lot of detail, how a very happy day looks like. How is each moment? how do you feel from the inside?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Lo que quisieras que otros supieran sobre ti.',
    text: 'Escribe sobre lo que más quisieras que otros supieran sobre ti.',
    $_en: {
      head: 'What would you like others to know about you.',
      text: 'Write about something that you would like others to know about you.',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Mírate en el espejo.',
    text: 'Mírate en el espejo. ¿Qué es lo primero que notas? Quédate un buen rato ahí. Mira tus ojos. ¿Qué ves en ellos? ¿Cómo te sientes?',
    $_en: {
      head: 'Take a look in the mirror.',
      text: 'Take a look at yourself in the mirror, what is the first thing you notice? Stay there for a while, and take a deep look into your eyes. What do you see on them? How do you feel?',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Qué te produce curiosidad?',
    text: 'Escribe sobre aquello que te produce curiosidad. ¿Qué es eso que quieres aprender o redescubrir? ¿Cómo puedes alcanzar aquello que llama tu curiosidad?',
    $_en: {
      head: 'What makes you curious?',
      text: 'Write about something that makes you very curious. What is something that you would like to learn or discover? How can you accomplish that?',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Cuándo es suficiente?',
    text: '¿Qué es eso de lo que quisieras más? Describe cuándo para ti es suficiente.',
    $_en: {
      head: 'When it\'s enough?',
      text: 'What is something you would like to have more of? When do you feel it\'s enough for you?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Tu salud física y emocional.',
    text: 'Del 1 al 10 califica tu salud física, donde 1 es pésimo y 10 excelente. Con la misma escala, tu salud emocional. ¿Alguna de estas te resulta más difícil que la otra? ¿Usar la misma escala funciona para ti o no? ¿Porqué?',
    $_en: {
      head: 'Your physical and emotional health.',
      text: 'On a scale from 1 to 10, 1 being terrible and 10 excellent, how is your physical health? Using the same scale, how is your emotional health? Is one of these more difficult than the other? Why? Does using the same scale for both works for you?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Diciendo ¡No!',
    text: 'Escribe 5 cosas a las que quieres decir ¡NO!. Escribe cuál sería el beneficio para ti de hacerlo.',
    $_en: {
      head: 'Saying NO!',
      text: 'Write about 5 things you would rather say NO. Why would it be good for you to do so?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'El sentimiento de soledad.',
    text: 'A veces nos sentimos solos aún cuando estamos entre personas. Escribe sobre un momento en que te sentiste solo. ¿Qué ocasionó que te sintieras así?',
    $_en: {
      head: 'Feeling loneliness.',
      text: 'Sometimes we feel alone among others. Write about a moment when you felt alone. What happened for you to feel this way?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Tus canciones favoritas.',
    text: 'Haz una lista de tus 5 canciones favoritas. ¿Qué letra de canción está más presente en tu memoria? ¿Hay algún tema en común?',
    $_en: {
      head: 'Your favorite songs.',
      text: 'Make a list with your top 5 favorite songs. Is there a song lyric that stuck with you in your memory? Do these songs have a common thread?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Halágate.',
    text: 'Escribe 5 halagos hacia ti mismo ¿Es fácil para ti, o te cuesta trabajo regalarte halagos? ¿Porqué?',
    $_en: {
      head: 'Compliment yourself.',
      text: 'Write 5 compliments to yourself. Is it easy or difficult for you to offer yourself compliments? Why?',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¡Ponte al día!',
    text: 'Date tiempo para revisar y ponerte al día. Sé que no es fácil pero no abandones, hemos avanzado mucho. Solemos poner la excusa de que estamos muy ocupados; a pesar de que las intenciones iniciales son buenas le damos prioridad a otras cosas. pero algo que es fundamental es el tiempo que te das para cuidar de ti mismo. Reconoce en este momento tu esfuerzo y restablece tu propósito.',
    $_en: {
      head: 'Catch up!',
      text: 'Give yourself time to catch up. Some days are more difficult than others but don´t give up, you have accomplished so much. We often have some good excuses as being too busy. Remember that despite our initial intention, we give priority to other things, but it\'s something fundamental that you take care of yourself. Take this time to recognize the effort you\'ve put into this and renew your purpose.',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Qué es el amor?',
    text: 'Describe qué es amor para ti, no solo el amor romántico o de pareja. ¿Cómo ves el amor? ¿Cómo se escucha? ¿Cómo lo tocas? ¿Cómo lo sientes? Regalate algunos detalles a ti mismo y siéntelo.',
    $_en: {
      head: 'What is love?',
      text: 'Write about what is love for you? Not just romantic love. How do you see love? How do you hear, or touch love? How does it feel in your body. Give yourself some time to get into the loving and feel it.',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Tus tradiciones.',
    text: 'Escribe sobre una tradición familiar o cultural que quisieras cambiar. ¿Qué te gustaría hacer diferente?',
    $_en: {
      head: 'Your traditions.',
      text: 'Write about a family or cultural tradition you would like to change. What would you do differently?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Cuida de ti.',
    text: 'Haz una lista con al menos 8 cosas que puedes hacer por ti, para cuidar de ti en medio de las rutinas, las demandas, los retos emocionales, las exigencias laborales.',
    $_en: {
      head: 'Take care of yourself.',
      text: 'Make a list of at least 8 things that you can make for you, to take care of yourself in the middle of your every day, with all its routines, challenges, emotional ups and downs, and work-related demands.',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Qué te hace sentir auténtico?',
    text: 'Escribe sobre qué es lo que te hace sentir más auténtico y cómodo.',
    $_en: {
      head: 'What makes you feel authentic?',
      text: 'Write about what makes you feel more authentic and comfortable in your own skin.',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Los inicios.',
    text: 'Escribe sobre los inicios que han impactado tu vida',
    $_en: {
      head: 'The starts',
      text: 'Write about a moment when something new happened and impacted your life.',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Qué te hace sentir a salvo?',
    text: 'Escribe sobre qué es lo que te ayuda a sentirte física y emocionalmente a salvo, seguro.',
    $_en: {
      head: 'What makes you feel safe?',
      text: 'Write about something that makes you feel physically and emotionally safe and sound.',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Los recuerdos de tu niñez.',
    text: 'Escribe sobre recuerdos de tu niñez y habla sobre las mujeres que dejaron una huella en tu vida. ¿Cuáles fueron las cualidades que te impactaron?',
    $_en: {
      head: 'Your childhood memories',
      text: 'Write about childhood memories, and write about the women that left you something that you cherish. which qualities this woman, or women had that made an imprint in your life?',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Qué es para ti perdonar?',
    text: 'Escribe sobre lo que es para ti perdonar.',
    $_en: {
      head: 'What does forgiveness mean to you?',
      text: 'What does forgiveness mean to you?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Regresa y revisa tu bitácora.',
    text: 'Regresa y lee lo que respondiste antes en tu bitácora. ¿Hay alguna respuesta que quisieras cambiar, escribir algo diferente? ¿Porqué?',
    $_en: {
      head: 'Go back and review',
      text: 'Go back and read some of the things that you wrote in this binnacle. Is there some answer that you would like to change, and write something different? Why?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Cosas que agradeces.',
    text: 'Escribe sobre 10 cosas que agradeces, porque ya las tienes.',
    $_en: {
      head: 'Things that you feel thankful for.',
      text: 'Write about 10 things that you feel thankful because you already have them.',
    },
  },
  {
    img: 'conectandome.svg',
    head: '¿Eres perfeccionista?',
    text: '¿Eres perfeccionista? ¿Hay algunas cosas que necesitan estar perfectas, más que otras? Si te parece así, ¿Por que?',
    $_en: {
      head: 'Are you a perfectionist?',
      text: 'Are you a perfectionist? Do you think some things need to be perfect more than others? If you think so, why? ',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Retando tu paciencia...',
    text: 'Escribe sobre una persona o una situación que realmente es un reto a tu paciencia.',
    $_en: {
      head: 'A challenge to your patience...',
      text: 'Write about a person or a situation that is a real challenge to your patience.',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'Los eventos de tu pasado.',
    text: 'Los eventos del pasado le dan forma al presente, pero no tienen porqué darle forma al futuro. ¿Qué eventos del pasado causaron que algo en ti se cerrara? ¿Fue para protegerte? ¿Cómo te ha lastimado esto a ti o a tus relaciones actuales?¿Qué cambios benéficos quieres crear para la siguiente temporada?',
    $_en: {
      head: 'The events in your past.',
      text: 'Some events in our past have given shape to the present, but they don’t need to give form to the future. Write about an event in your past that made you close up. Was this a form of protection? How being closed has hurt you or others in your relationships? Which could it be a beneficial change for you to incorporate in this next season?',
    },
  },
  {
    img: 'conectandome.svg',
    head: 'La magia de los inicios.',
    text: 'Confía en la magia de los inicios. Escribe sobre momentos en que has sentido la magia del asombro, y cómo puedes mantenerte abierto para permitir que sigan apareciendo.',
    $_en: {
      head: 'The magic of the beginnings.',
      text: 'Trust the magic of the beginnings. Write about those moments when you have felt awe. How can you remain open for this magic to continue?',
    },
  },
  ],
};

MOCK_DATA.bitacora.forEach((entry, idx) => {
  entry.id = idx + 1;
});

const request = ({
  cmd,
}) => Promise.resolve(MOCK_DATA[cmd] || null);

export default request;

// let output = '';
// MOCK_DATA.bitacora.forEach((r) => {
//   output += `${r.id},${r.img},"${r.head}","${r.$_en.head}","${r.text}","${r.$_en.text}"\n`;
// });

// console.log(output);
