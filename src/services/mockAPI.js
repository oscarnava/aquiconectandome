const MOCK_DATA = {
  esp: {
    bitacora: [
      { id: 1, img: 'dia-01.jpg', header: 'Cinco cosas que te hacen super feliz.', text: 'Escribe cinco cosas que te hacen super feliz. Describe porqué.', audio: 'intro.ogg' }, /* ,video: 'kdZfu48lnD4' */
      { id: 2, img: 'dia-02.jpg', header: '¿Cuál es tu mayor temor?', text: '¿Cuál es tu mayor temor? ¿Esto que te asusta es algo racional?' },
      { id: 3, img: 'dia-03.jpg', header: 'Cinco maneras en que puedes mejorar tu vida.', text: 'Escribe cinco maneras en que puedes mejorar tu vida en los siguientes 6 meses ¿Cómo puedes lograr cada una? ' },
      { id: 4, img: 'conectandome.svg', header: 'Meditación sobre el temor', text: 'Meditación guiada sobre el temor' },
      { id: 5, img: 'dia-05.jpg', header: '¿Cuáles de tu cualidades te gustan más?', text: '¿Cuáles de tu cualidades te gustan más? ¿Por qué? ¿Cómo te ha ayudado ésta cualidad en tu vida? ¿Te ha causado algún problema?' },
      { id: 6, img: 'dia-06.jpg', header: 'Tres recuerdos felices sobre ti mismo.', text: 'Escribe sobre tres recuerdos felices que tienes sobre ti mismo. Considera que no se trata de hijos, familia, mascotas etc. Ve a los recuerdos que tienen que ver directamente contigo' },
      { id: 7, img: 'dia-07.jpg', header: 'Personas que te hacen sentir mejor.', text: 'Escribe acerca de las personas que en tu vida te hacen sentir mejor. ¿Qué cualidades tienen estas personas que te hacen sentir así?' },
      { id: 8, img: 'dia-08.jpg', header: '', text: 'Escribe acerca de un evento difícil que hayas tenido que enfrentar en tu vida. ¿Cómo lidiaste con eso? En retrospectiva, ¿podías haberlo manejado diferente? ¿Cómo? ' },
      { id: 9, img: 'dia-09.jpg', header: '', text: 'Describe a una persona que sea totalmente lo opuesto a ti, y trata de ser muy específico con respecto a sus cualidades. ¿Será que los opuestos se atraen?' },
      { id: 10, img: 'dia-10.jpg', header: '', text: 'Escribe sobre tres cosas que siempre te hacen llorar. ¿Llorar ayuda a la situación? ¿Cómo?' },
      { id: 11, img: 'dia-11.jpg', header: '', text: 'Escribe sobre alguna vez que reíste tan fuerte que hasta te salieron lágrimas. ¿Qué ocasionó la risa? ¿Recordar el evento te hace reír?' },
      { id: 12, img: 'dia-12.jpg', header: '', text: 'Escribe sobre los momentos en que reconociste y honraste una emoción importante. ¿Cómo te sentiste al reconocer la verdad de tus sentimientos?' },
      { id: 13, img: 'dia-13.jpg', header: '', text: 'Escribe una carta a tus padres, abuelos o hermanos. La intención NO es que se las des. Tampoco es necesario que estén con vida. La intención es que tu puedas decir lo que hay en ti, y qué impactó tu vida ya sea positivamente o negativamente cuando eras más joven' },
      { id: 14, img: 'dia-14.jpg', header: '', text: 'Escribe sobre las maneras en que eres particular, diferente, peculiar. ¿Porqué tienes éstas características?' },
      { id: 15, img: 'dia-15.jpg', header: '', text: 'Escribe sobre un momento en que tomaste una mala decisión en tu vida. ¿Cuánto tiempo te tomó darte cuenta del error? ¿Has repetido ese error otra vez?' },
      { id: 16, img: 'dia-16.jpg', header: '', text: 'Escribe sobre lo que has aprendido de ti mismo sobre la ansiedad.' },
      { id: 17, img: 'dia-17.jpg', header: '', text: 'Describe con mucho detalle cómo es para tí un día de felicidad ¿Cómo es cada momento? ¿Cómo se siente?' },
      { id: 18, img: 'dia-18.jpg', header: '', text: 'Lee lo que has escrito en la bitácora y haz una lista de los patrones que has cargado durante mucho tiempo y ahora quieres soltar.' },
      { id: 19, img: 'dia-19.jpg', header: '', text: '' },
      { id: 20, img: 'dia-20.jpg', header: '', text: 'Escribe sobre lo que has aprendido de ti mismo sobre la ansiedad' },
      { id: 21, img: 'dia-21.jpg', header: '', text: 'Mirate un buen rato en el espejo. ¿Qué es lo primero que notas? Mira tus ojos. ¿Cómo los ves? ¿Cómo te sientes?' },
      { id: 22, img: 'dia-22.jpg', header: '', text: 'Escribe sobre aquello que te produce curiosidad. ¿Qué es algo que quieres aprender o redescubrir? ¿Cómo puedes alcanzar aquello que llama tu curiosidad?' },
      { id: 23, img: 'dia-23.jpg', header: '', text: '' },
      { id: 24, img: 'dia-24.jpg', header: '', text: 'Escribe sobre lo que más quisieras que los otros superan de ti.' },
      { id: 25, img: 'dia-25.jpg', header: '', text: '¿Qué es aquello de lo que quieres más? Describe cuándo para tí es suficiente.' },
      { id: 26, img: 'dia-26.jpg', header: '', text: 'Describe tu salud física del 1 al 10. Con la misma escala, tu salud emocional. ¿Alguna de estas es más difiícil que la otra? ¿Usar la misma escala funciona para ti, o no? ¿Porqué?' },
      { id: 27, img: 'dia-27.jpg', header: '', text: 'Higiene emocional.' },
      { id: 28, img: 'dia-28.jpg', header: '', text: 'Escribe sobre 5 cosas a las que quieres decir NO, y escribe cuál sería el beneficio para ti de decir no.' },
      { id: 29, img: 'dia-29.jpg', header: '', text: 'A veces nos sentimos solos aún cuando estamos entre personas. Escribe sobre un momento en que te sentiste solo. ¿Que ocasionó que te sintieras así?' },
      { id: 30, img: 'dia-30.jpg', header: '', text: 'Haz una lista de tus 5 canciones favoritas. ¿Qué letra de canción está más presente en tu memoria? ¿Hay algún tema en común?' },
      { id: 31, img: 'dia-31.jpg', header: '', text: 'Escribe 5 halagos hacia ti mismo ¿Es fácil para ti, o te cuesta trabajo regalarte halagos? ¿Porqué?' },
      { id: 32, img: 'dia-32.jpg', header: '', text: 'Date tiempo para revisar y ponerte al día. Sé que no es fácil pero no abandones; hemos avanzado mucho. Solemos poner la excusa de que estamos muy ocupados, a pesar de que las intenciones iniciales son buenas le damos prioridad a otras cosas. Pero algo que es fundamental es el tiempo que te das para cuidar de ti mismo.' },
      { id: 33, img: 'dia-33.jpg', header: '', text: 'Describe qué es amor para ti, y no solo el amor romántico o de pareja. ¿Como ves el amor? ¿Cómo se escucha? ¿Como lo tocas? ¿cómo lo sientes? Regalate algunos detalles.' },
      { id: 34, img: 'dia-34.jpg', header: '', text: 'Escribe sobre una tradición familiar o cultural que quisieras cambiar, ¿qué te gustaría hacer diferente?' },
      { id: 35, img: 'dia-35.jpg', header: '', text: 'Haz una lista con al menos 8 cosas que puedes hacer por ti para cuidar de ti en medio de las rutinas, las demandas, los retos emocionales, y las exigencias laborales.' },
      { id: 36, img: 'dia-36.jpg', header: '', text: 'Escribe sobre qué es lo que te hace sentir más auténtico y cómodo.' },
      { id: 37, img: 'dia-37.jpg', header: '', text: 'Escribe sobre los inicios que han impactado tu vida.' },
      { id: 38, img: 'dia-38.jpg', header: '', text: 'Escribe sobre qué es lo que te ayuda a sentirte física y emocionalmente a salvo, seguro.' },
      { id: 39, img: 'dia-39.jpg', header: '', text: 'Escribe sobre los recuerdos de tu niñez, y habla sobre las mujeres que dejaron una huella en tu vida. ¿Cuáles fueron las cualidades que te impactaron?' },
      { id: 40, img: 'dia-40.jpg', header: '', text: 'Escribe sobre lo que para ti es perdonar.' },
      { id: 41, img: 'dia-41.jpg', header: '', text: 'Escribe sobre alguna tradición familiar que cambiarías. ¿Que harías en vez de lo de siempre?' },
      { id: 42, img: 'dia-42.jpg', header: '', text: 'Regresa y lee lo que respondiste previamente en tu bitácora ¿En cuál entrada quisieras cambiar lo que escribiste, y responder algo distinto? ¿Porqué?' },
    ],
  },
};

const request = ({ language, cmd }) => Promise.resolve(MOCK_DATA[language][cmd] || null);

export default request;
