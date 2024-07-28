import { createI18n } from 'vue-i18n';

const messages = {
  es: {
    home: {
      title: 'Bienvenido a la Plataforma Educativa TechYachay',
      // Otros textos traducidos...
    },
    about: {
      title: 'Acerca de',
      description: 'Somos estudiantes de ciencia de la computación con el objetivo de crear una plataforma bilingüe que ofrezca cursos en quechua y español, asegurando que los usuarios puedan aprender en su lengua materna y en el idioma nacional. Nuestra plataforma incluye cursos en programación, herramientas tecnológicas, y conocimientos aplicables a diversas áreas de estudio como ingeniería, letras, y medicina. Buscamos fomentar la educación inclusiva y accesible para todas las comunidades.',
      // Otros textos...
    },
    login: {
      title: 'Iniciar sesión',
      loginButton: 'Acceder',
      noAccount: '¿No tienes cuenta?',
      registerLink: 'Regístrate aquí',
    },
    register: {
      title: 'Regístrate',
      registerButton: 'Registrarse',
      haveAccount: '¿Ya tienes cuenta?',
      loginLink: 'Inicia sesión aquí',
    },
    plans: {
      title: 'Elige el plan ideal para ti',
      // Otros textos...
    },
    contact: {
      title: 'Contacto',
      description: 'Si tienes alguna pregunta, no dudes en contactarnos.',
      // Otros textos...
    },
    teacher: {
      title: 'Para Profesores',
    },
    courses: {
      title: 'Cursos',
      viewDetails: 'Ver Detalles',
      categories: {
        title: 'Categorías',
        engineering: 'Ingeniería',
        programming: 'Programación',
        mathematics: 'Matemáticas',
        bioinformatics: 'Bioinformática',
      },
      engineering: {
        intro: {
          title: 'Introducción a la Ingeniería',
          description: 'Fundamentos de la ingeniería.',
          courses: [
            {
              "title": "Curso de Circuitos Eléctricos",
              "description": "Este curso te introducirá a los principios básicos de los circuitos eléctricos. Aprenderás sobre componentes esenciales como resistencias, condensadores e inductores, y cómo se comportan en diferentes configuraciones de circuitos. También se cubrirán temas como la Ley de Ohm, la Ley de Kirchhoff y el análisis de circuitos en corriente continua y alterna. Este curso incluye ejercicios prácticos y simulaciones para reforzar los conceptos aprendidos.",
              "image": require('@/assets/circuitos.jpg')
            },
            {
              "title": "Curso de Termodinámica",
              "description": "En este curso, explorarás los conceptos fundamentales de la termodinámica. Aprenderás sobre las leyes de la termodinámica, la energía interna, el trabajo, el calor y la entropía. Además, se discutirá cómo estos conceptos se aplican en sistemas reales, como motores y refrigeradores. Este curso proporciona una sólida base teórica junto con ejemplos prácticos y problemas para resolver.",
              "image": require('@/assets/termodinamica.png')
            }
          ],
        },
        advanced: {
          title: 'Ingeniería de Software',
          description: 'Desarrollo de software a gran escala.',
          courses: [
            {
              title: "Desarrollo Ágil con Scrum",
              description: "En este curso, aprenderás los fundamentos de las metodologías ágiles con un enfoque en Scrum, un marco de trabajo utilizado para gestionar proyectos de desarrollo de software. Exploraremos los roles, eventos y artefactos de Scrum, así como las mejores prácticas para implementar Scrum en equipos de desarrollo de software. Este curso incluye estudios de caso y ejemplos prácticos para ayudar a los participantes a entender cómo aplicar Scrum en situaciones reales.",
              image: require('@/assets/scrum.jpg')
            },
            {
              title: "Arquitectura de Software",
              description: "Este curso proporciona una comprensión profunda de los principios y patrones de diseño de arquitectura de software. Los participantes aprenderán a diseñar sistemas de software escalables y mantenibles, utilizando patrones de diseño arquitectónico como Microservicios, MVC, y Arquitectura en Capas. También se cubrirán temas avanzados como la documentación de arquitectura, las decisiones de diseño y las evaluaciones de arquitectura.",
              image: require('@/assets/arquitectura.jpg')
            }
          ],
        },
      },
      programming: {
        intro: {
          title: 'Introducción a la Programación',
          description: 'Conceptos básicos de programación.',
          courses: [
            {
              title: 'Curso de Python',
              description: 'En este curso, aprenderás a programar en Python desde cero. Comenzarás con los conceptos básicos de la programación, como variables, tipos de datos, y estructuras de control. Luego, avanzarás a temas más complejos como funciones, módulos, y manejo de archivos. Al final del curso, serás capaz de crear tus propios programas en Python y resolver problemas de programación de nivel intermedio.',
              image: require('@/assets/python.jpg')
            },
            {
              title: 'Curso de JavaScript',
              description: 'Este curso te introducirá al desarrollo web utilizando JavaScript. Aprenderás sobre la sintaxis básica de JavaScript, cómo manipular el DOM, y cómo manejar eventos. También exploraremos conceptos avanzados como las promesas, la programación asíncrona, y el uso de APIs. Al final del curso, podrás construir aplicaciones web interactivas y dinámicas.',
              image: require('@/assets/javascript.jpg')
            }
          ],
        },
        advanced: {
          title: 'Programación Avanzada',
          description: 'Técnicas avanzadas de programación.',
          courses: [
            {
              "title": "Desarrollo con React",
              "description": "En este curso, aprenderás a construir aplicaciones web modernas utilizando React, una biblioteca de JavaScript para construir interfaces de usuario. Comenzarás con los conceptos básicos, incluyendo componentes, props y estado. Luego, avanzarás a temas más avanzados como el manejo del estado con hooks, el enrutamiento con React Router y la integración con APIs externas. Al final del curso, serás capaz de crear aplicaciones web dinámicas y robustas.",
              "image": require('@/assets/react.jpg')
            },
            {
              "title": "Machine Learning",
              "description": "Este curso te introducirá al mundo del aprendizaje automático, una rama de la inteligencia artificial. Aprenderás los conceptos fundamentales del machine learning, incluyendo algoritmos supervisados y no supervisados, regresión, clasificación y clustering. También explorarás herramientas y bibliotecas populares como Scikit-Learn y TensorFlow. Este curso incluye proyectos prácticos para aplicar los conceptos aprendidos y desarrollar tus habilidades en machine learning.",
              "image": require('@/assets/machinelearning.jpg')
            }
          ],
        },
      },
      mathematics: {
        intro: {
          title: 'Introducción a las Matemáticas',
          description: 'Conceptos básicos de matemáticas.',
          courses: [
            {
              "title": "Álgebra Lineal",
              "description": "Este curso te proporcionará una comprensión profunda de los fundamentos del álgebra lineal. Aprenderás sobre vectores, matrices y espacios vectoriales, así como sus aplicaciones en diferentes campos. También se cubrirán temas como la resolución de sistemas de ecuaciones lineales, valores y vectores propios, y descomposiciones de matrices. Al finalizar el curso, tendrás una base sólida para aplicar álgebra lineal en diversas áreas de estudio y trabajo.",
              "image": require('@/assets/algebra.jpg')
            },
            {
              "title": "Cálculo Diferencial",
              "description": "En este curso, explorarás los conceptos básicos del cálculo diferencial. Aprenderás sobre derivadas y su interpretación geométrica, reglas de derivación, y aplicaciones de las derivadas en problemas de optimización y análisis de funciones. Además, se discutirán técnicas avanzadas de diferenciación y sus usos en ciencias e ingeniería. Este curso incluye ejercicios prácticos para reforzar los conceptos aprendidos.",
              "image": require('@/assets/calculo.jpg')
            }
          ],
        },
        advanced: {
          title: 'Matemáticas Avanzadas',
          description: 'Técnicas avanzadas de matemáticas.',
          courses: [
            {
              "title": "Teoría de Números",
              "description": "Este curso te llevará a un estudio avanzado de la teoría de números, una rama fundamental de las matemáticas. Aprenderás sobre divisibilidad, congruencias, números primos y sus propiedades, así como sobre funciones aritméticas y teoremas importantes como el Teorema de Fermat y el Teorema de Euler. También se explorarán aplicaciones modernas de la teoría de números en criptografía y algoritmos. Este curso es ideal para aquellos que desean profundizar en la matemática pura y sus aplicaciones.",
              "image": require('@/assets/teoria.jpg')
            },
            {
              "title": "Análisis Complejo",
              "description": "En este curso, aprenderás los fundamentos del análisis complejo, una rama de las matemáticas que estudia funciones de variable compleja. Cubrirás conceptos esenciales como números complejos, funciones holomorfas, integrales de contorno y series de Laurent. Además, explorarás aplicaciones del análisis complejo en física e ingeniería, como la resolución de ecuaciones diferenciales y el estudio de la dinámica de fluidos. Este curso incluye ejercicios y problemas para afianzar los conceptos aprendidos.",
              "image": require('@/assets/analisis.jpg')
            }
          ],
        },
      },
      bioinformatics: {
        intro: {
          title: 'Introducción a la Bioinformática',
          description: 'Conceptos básicos de bioinformática.',
          courses: [
            {
              "title": "Genómica Computacional",
              "description": "Este curso te introducirá al análisis de datos genómicos utilizando herramientas y técnicas computacionales. Aprenderás sobre la secuenciación del ADN, ensamblaje de genomas, anotación génica y análisis de expresión génica. También se cubrirán métodos de bioinformática para el análisis de variaciones genéticas y estudios de asociación. Este curso incluye estudios de caso y proyectos prácticos para aplicar los conceptos aprendidos.",
              "image": require('@/assets/genomica.jpg')
            },
            {
              "title": "Proteómica",
              "description": "En este curso, estudiarás las proteínas a gran escala mediante técnicas de proteómica. Aprenderás sobre la identificación y cuantificación de proteínas, así como sobre la interacción proteína-proteína y la modificación postraduccional. También se discutirán las aplicaciones de la proteómica en la biomedicina y el desarrollo de fármacos. Este curso proporciona una base sólida en proteómica con ejemplos prácticos y proyectos de investigación.",
              "image": require('@/assets/proteomica.jpg')
            }
          ],
        },
        advanced: {
          title: 'Bioinformática Avanzada',
          description: 'Técnicas avanzadas de bioinformática.',
          courses: [
            {
              "title": "Bioinformática Estructural",
              "description": "Este curso te llevará a un estudio detallado de las estructuras moleculares utilizando herramientas y técnicas de bioinformática estructural. Aprenderás sobre la predicción y modelado de estructuras de proteínas, la simulación molecular y el análisis de interacciones proteína-ligando. También se cubrirán métodos para la visualización y anotación de estructuras moleculares. Este curso incluye proyectos prácticos y estudios de caso para aplicar los conceptos aprendidos.",
              "image": require('@/assets/estructural.jpg')
            },
            {
              "title": "Bioinformática de Sistemas",
              "description": "En este curso, aprenderás a analizar sistemas biológicos complejos utilizando enfoques de bioinformática de sistemas. Estudiarás la integración y análisis de datos omics, la modelización de redes biológicas y la simulación de procesos biológicos. Además, se explorarán aplicaciones en biomedicina y biotecnología. Este curso proporciona una base sólida en bioinformática de sistemas con ejemplos prácticos y proyectos de investigación.",
              "image": require('@/assets/sistemas.jpg')
            }
          ],
        },
      },
    },            
    access: 'Acceder',
    // Otros textos...
  },
  qu: {
    home: {
      title: 'TechYachay Yachay Pukllana Platformaman Allin Hamusunki',
      // Otros textos traducidos...
    },    
    about: {
      title: 'Imapas',
      description: 'Ñuqanchikka yachay sutikuna yachachiqkuna kanku, runasimiwan kastilla simipi yachachinakuykunapaq ruwanapaq. Platformaykuna yachayniyuqmi kanku, runasimiwan kastilla simipi yachachinakuyta yachachiyta, programanakuna, tecnologiyanakuna, ingeniería, qillqakunapi, y hampiy runakunapi. Ñuqanchik yachayta yanapanchik yachachiykunataqa, llapan runakunapaq.',
      // Otros textos...
    },
    login: {
      title: 'Qillqay',
      loginButton: 'Yaykuy',
      noAccount: '¿Manaraq cuenta kanchu?',
      registerLink: 'Qillqachiy',
    },
    register: {
      title: 'Qillqachiy',
      registerButton: 'Qillqachiy',
      haveAccount: '¿Yaykuy cuenta kan?',
      loginLink: 'Qillqay',
    },
    plans: {
      title: 'Plan idealpaq rimaykusayki',
      // Otros textos...
    },
    contact: {
      title: 'Rimanakuy',
      description: 'Manam pipas watukuyta munachkanchiktaq, churaykusayki.',
      // Otros textos...
    },
    teacher: {
      title: 'Yachachiqkunapaq',
    },
    courses: {
      title: 'Yachaykunam',
      viewDetails: 'Rikuy',
      categories: {
        title: 'Rurasqakuna',
        engineering: 'Injiniiruy',
        programming: 'Programasay',
        mathematics: 'Yupaykamay',
        bioinformatics: 'Kawsay Willakuy',
      },
      engineering: {
        intro: {
          title: 'Injiniiruy Kamay',
          description: 'Injiniiruy ruraykunam.',
          courses: [
            {
              "title": "Eleqtriyuq Circuitos Yachay",
              "description": "Kay yachaypi, eleqtriyuq circuitospa prinsipioskunata yachayta ruwan. Resistencias, condensadores, inductoresmi yachayninkunam. Ohmpa ley, Kirchhoffpa ley, corriente continua alterna ruraynin. Kay kuruspi prakticakuna simulacionespas kanman yachayninta sumaqta rurapaq.",
              "image": require('@/assets/circuitos.jpg')
            },
            {
              "title": "Termodinámica Yachay",
              "description": "Kay yachaypi, termodinámicapa prinsipioskunata yachachin. Termodinámicapa ley, energía interna, trabajo, qillqay y entropía yachaynin. Chay prinsipios real sistemakunapi imaynan ruwan. Motores, refrigeradorespas yachaynin. Kay kuruspi yachay teoria, prakticakunapas imaynan ruwanakuy.",
              "image": require('@/assets/termodinamica.png')
            }
          ],
        },
        advanced: {
          title: 'Programa Injiniiruy',
          description: 'Software yachachiy yachayta.',
          courses: [
            {
              title: "Scrumwan Ch'usaq Rikuykuna",
              description: "Kay yachaypi, software ruranapap tendensianchismi kanman. Rollin, eventonkunapaq artefactonkunapas scrumpa chaykuna kanmanmi. Imaynam scrumwan sumaqta ruwanapaq practicankunata sumaqta yachaykunam kay kuruspi. Kay yachayqa scrumpa situacionakuna yachachin.",
              image: require('@/assets/scrum.jpg')
            },            
            {
              title: "Softwarepa Arquitectura",
              description: "Kay kursuqa software arquitectura kamachikunata yachayta ruwanman. Participantekunam sistema softwarekuna allin kawayta, mantenible, microserviciomanta, MVC, capas arquitectura rurayta yachachin. Awanchik arquitecturapa documentacion, yachayninta rurayninta.",
              image: require('@/assets/arquitectura.jpg')
            }            
          ],
        },
      },
      programming: {
        intro: {
          title: 'Programasay Kamay',
          description: 'Programasay ruraykunam.',
          courses: [
            {
              title: 'Python Yachay',
              description: 'Kay yachaypi, Pythonwan programayta qillqayta yachachikunki huk pacha. Programapa prinsipioskunata, hina kaqkunata, datos tipi, mana hina ruwanakuykunata yachayninmi yachachikushanki. Chaymanta, aswan allin yachayninkunata, funciones, módulos, archivos manejokuna, yachachikunki. Kuruspa qhipapi, Pythonwan tukuy rurayninkunata yachachikunki.',
              image: require('@/assets/python.jpg')
            },
            {
              title: 'JavaScript Yachay',
              description: 'Kay yachaypi, web ruranapaq JavaScript yachachikunki. JavaScriptpa qillqay yachaynin, DOMman qhawakuy, eventos manejokuna yachachikunki. Aswan allin qillqaykunata promesas, programación asíncrona, APIs ruraynin. Kuruspa qhipapi, web apkunata ruwanaykipaq yachachikunki.',
              image: require('@/assets/javascript.jpg')
            }
          ],
        },
        advanced: {
          title: 'Allin Programasay',
          description: 'Allin programasay ruraykunam.',
          courses: [
            {
              "title": "Reactwan Desarrolluy",
              "description": "Kay yachaypi, Reactwan web apkunata ruwasqayta yachachikunki. Huk JavaScriptpa bibliotecam, interfaces de usuario ruwanapaq. Prinsipioskunawanmi kallpachakunki, hina kaqkunawanmi componentes, props, estado. Chaymanta, aswan allin yachayninkuna hooks, React Routerpa enrutamientokuna, APIswan integracion. Kuruspa qhipapi, web apkunata sumaqta ruwanaykipaq yachachikunki.",
              "image": require('@/assets/react.jpg')
            },
            {
              "title": "Machine Learning",
              "description": "Kay yachaypi, inteligencia artificialpa huk ruraynin, yachay machinta (machine learning) yachachikunki. Prinsipioskunata, hukmanta algoritmos supervisados, mana supervisados, regresion, clasificacion, clusteringmi yachachikunki. Aswan allin herramientas, bibliotecas Scikit-Learn, TensorFlow hina kaqkunawan yachachikunki. Kay kuruspi, practicakuna, proyektonkuna yachayninkunata sumaqta yachachikunki.",
              "image": require('@/assets/machinelearning.jpg')
            }
          ],
        },
      },
      mathematics: {
        intro: {
          title: 'Yupaykamay Kamay',
          description: 'Yupaykamay ruraykunam.',
          courses: [
            {
              "title": "Algebra Lineal",
              "description": "Kay yachaypi, algebra linealpa prinsipioskunata yachachikunki. Vectores, matrices, espacios vectorialkunam yachachikunki, imaynan rurayninkuna. Ecuaciones lineal sistimankuna ruranapaq, valores, vectores propionkuna, matrices descomposicionkuna yachachikunki. Kuruspa qhipapi, algebra linealpa tukuy yachayninkunata ruraynin yachachikunki.",
              "image": require('@/assets/algebra.jpg')
            },
            {
              "title": "Cálculo Diferencial",
              "description": "Kay yachaypi, cálculo diferencialpa prinsipioskunata yachachikunki. Derivadas, imaynan geometríapa interpretacion, derivacionpa reglas, derivadaspa aplicaciones optimizacion, y funciones análisispi ruwanakuykunata yachachikunki. Chaymanta, ciencias, ingeniería rural yachaynin, diferenciacionpa técnicas avanzada ruwanakuykunata yachachikunki. Kay kuruspi, practicanpa ruwanqaykunata yachachikunki.",
              "image": require('@/assets/calculo.jpg')
            }
          ],
        },
        advanced: {
          title: 'Allin Yupaykamay',
          description: 'Allin yupaykamay ruraykunam.',
          courses: [
            {
              "title": "Yupaykunapa Teoría",
              "description": "Kay kuruspi, yupaykunapa teoría allin yachaynin yachachikunki, matemáticaspa huk kawsaq ruranin. Divisibilidad, congruencias, yupaykunapa qapaqnin, hina kaqkunawanmi yachachikunki, aritméticas funciones, Fermatpa teorema, Eulerpa teoremata. Chaymanta, yupaykunapa teoríapa qhelqan ruwanaykuna, criptografía, algoritmos ruwanakuykunapas yachachikunki. Kay kurusqa allinmi tukuy, matemáticaspa sumaq yachayninta yachaykuspa.",
              "image": require('@/assets/teoria.jpg')
            },
            {
              "title": "Análisis Complejo",
              "description": "Kay kuruspi, análisis complejo, matemáticaspa huk kawsaq ruraynin yupaykunata ruwan. Yupaykunapa ruranin, holomorfas funciones, contorno integrales, Laurent series yachachikunki. Chaymanta, análisis complejopa qhelqan ruwanaykunapa ruwan, físicas e ingeniería ruraynin, ecuaciones diferenciales resolucion, fluidospa dinámicas yachachikunki. Kay kuruspi, prakticakunapa yachayninkunata sumaqta ruwanaykipaq yachachikunki.",
              "image": require('@/assets/analisis.jpg')
            }
          ],
        },
      },
      bioinformatics: {
        intro: {
          title: 'Kawsay Willakuy Kamay',
          description: 'Kawsay willakuy ruraykunam.',
          courses: [
            {
              "title": "Genómica Computacional",
              "description": "Kay yachaypi, genómicas datospa análisis ruwanapaq herramientas, técnicas computacionales yachachikunki. ADN sequenciacion, genomakuna ensamblaje, genicas anotacion, expresion genica análisis yachachikunki. Bioinformáticas metodospas, variaciones genéticas análisis, asociacion estudios ruwanakuy. Kay kuruspi, sumaqmi, yachayninkunata prakticamente ruwanaykipaq yachachikunki.",
              "image": require('@/assets/genomica.jpg')
            },
            {
              "title": "Proteómica",
              "description": "Kay yachaypi, proteínaspa allin ruranin proteómica técnicaswan yachachikunki. Identificacion, cuantificacion proteínas, proteína-proteína interaccion, postraduccional modificacion yachachikunki. Chaymanta, proteómica qhelqan ruwanaykunapaq biomedicina, fármacos qhelqan ruwanakuy. Kay kuruspi, proteómicas allin yachayninkunata ruwanaykipaq yachachikunki, practicas ejemplos, proyektonkuna ruwanaykipaq.",
              "image": require('@/assets/proteomica.jpg')
            }
          ],
        },
        advanced: {
          title: 'Allin Kawsay Willakuy',
          description: 'Allin kawsay willakuy ruraykunam.',
          courses: [
            {
              "title": "Bioinformática Estructural",
              "description": "Kay kuruspi, moléculaspa estructuraspa allin yachayninta yachachikunki bioinformática estructuralpa herramientas, técnicaswan. Proteínaspa estructuras modelado, predicción, moléculas simulacion, proteína-ligando interacciones análisis yachachikunki. Chaymanta, estructuras molecularespa visualizacion, anotacion metodospas yachachikunki. Kay kuruspi, proyektonkuna ruwanaykipaq yachayninkunata sumaqta ruwanaykipaq.",
              "image": require('@/assets/estructural.jpg')
            },
            {
              "title": "Bioinformática de Sistemas",
              "description": "Kay yachaypi, sistemas biológicospa allin ruranin bioinformática de sistemas yachachikunki. Datos omics integración, análisis, redes biológicas modelizacion, procesos biológicos simulacion yachachikunki. Chaymanta, biomedicina, biotecnologíapa qhelqan ruwanaykunapaq yachachikunki. Kay kuruspi, bioinformática de sistemaspa allin yachayninkunata sumaqta yachachikunki, practicas ejemplos, proyektonkuna ruwanaykipaq.",
              "image": require('@/assets/sistemas.jpg')
            }
          ],
        },
      },
    },            
    access: 'Yaykuy',
    // Otros textos...
  }
};

const i18n = createI18n({
  locale: 'es',
  messages,
});

export default i18n;
