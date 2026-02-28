export type Lang = "es" | "en";

export const dict = {
  es: {
    nav: {
      home: "Inicio",
      about: "Quiénes somos",
      programs: "Programas",
      impact: "Impacto",
      getInvolved: "Involúcrate",
      donate: "Donar",
      contact: "Contacto",
      faq: "FAQ",
    },
    hero: {
      title: "Donde el amor \ny el arte\nSe unen",
      subtitle: "",
      cta: "¡DONA!",
    },
    quickImpact: {
      kits: "BECAS",
      talleres: "KITS ESCOLARES",
      fondos: "COMUNIDADES",
    },

    featuresTitle:
      "Puedes marcar la diferencia apoyando una causa que te importa. Tu donación puede cambiar vidas.",
    features: [
      {
        title: "Ayuda directa",
        desc: "Cada aporte llega a proyectos reales en comunidades locales.",
      },
      {
        title: "Información y educación",
        desc: "Compartimos recursos para multiplicar el impacto.",
      },
      {
        title: "Conciencia",
        desc: "Tu voz también suma: difunde y participa.",
      },
      {
        title: "Alivio a la pobreza",
        desc: "Con arte y educación, abrimos caminos de oportunidad.",
      },
    ],

    programsTitle: "Nuestros Programas",
    programs: [
      {
        id: "art",
        title: "Art Supply Drives & Giveaways",
        desc: "Kits con colores, cuadernos y pinceles.",
        imgAlt: "Niños con kits de arte",
        img: "/p3.png",
      },
      {
        id: "scholarships",
        title: "Scholarship & Mentorship",
        desc: "Apoyo económico para continuar estudios.",
        imgAlt: "Niños recibiendo becas",
        img: "/p2.png",
      },
      {
        id: "wellbeing",
        title: "Community Engagement",
        desc: "Actividades para autoestima y resiliencia.",
        imgAlt: "Actividades de bienestar",
        img: "/p2.png",
      },
    ],

    testimonyTitle: "Historias",
    histories: [
      {
        id: "beca",
        title: "María – Beca para continuar sus estudios",
        desc: "María soñaba con ser maestra, pero su familia no podía cubrir los gastos de su educación. Gracias a una beca de Amarte, pudo continuar sus estudios y hoy cursa su tercer año de docencia. 'Este apoyo me devolvió la esperanza', nos cuenta con una sonrisa.",
        img: "/s1.JPG",
      },
      {
        id: "taller",
        title: "Carlos – Descubrió su talento en el arte",
        desc: "Carlos, de 10 años, participó en uno de nuestros talleres de arte en su comunidad. Allí descubrió su pasión por la pintura y aprendió a expresar sus emociones a través del color. 'Nunca había tenido mis propios pinceles. Ahora pinto todos los días', dice orgulloso.",
        img: "/s2.JPG",
      },
      {
        id: "apoyo",
        title: "Ana – No dejó la escuela gracias al acompañamiento",
        desc: "Ana estaba a punto de abandonar sus clases por falta de recursos. Nuestro programa de continuidad educativa le brindó materiales y apoyo emocional. Hoy sigue estudiando y quiere ser enfermera para ayudar a otros como la ayudaron a ella.",
        img: "/s5.JPG",
      },
      {
        id: "musica",
        title: "El coro de Santa Ana – La música que une corazones",
        desc: "Niños y niñas del coro de Santa Ana ensayan cada semana con entusiasmo. La música ha fortalecido su disciplina, confianza y trabajo en equipo. 'Aquí aprendí que todos tenemos una voz que vale', dice Sofía, una de las integrantes más jóvenes.",
        img: "/s4.jpg",
      },
      {
        id: "comunidad",
        title: "Rosa – Unidos por su comunidad",
        desc: "Rosa vive en una zona rural donde los niños caminaban largos trayectos para llegar a la escuela. Con el apoyo de Amarte, organizaron jornadas comunitarias para mejorar el acceso y crear un espacio seguro para estudiar. 'No solo ayudaron a mis hijos, ayudaron a todo el caserío', comparte emocionada.",
        img: "/s3.JPG",
      },
      {
        id: "voluntario",
        title: "Diego – De beneficiario a voluntario",
        desc: "Diego conoció Amarte cuando era estudiante y recibió un kit escolar que lo motivó a continuar. Años después, se unió como voluntario para entregar materiales a otros niños. 'Ahora me toca devolver lo que una vez recibí', dice mientras acomoda cajas llenas de colores y sonrisas.",
        img: "/escuela1.png",
      },

    ],

    donateBlock: {
      title: "Hacer una donación",
      body: "Tu generosidad financia materiales, talleres y becas.",
      cta: "¡DONA!",
    },
    teamTitle: "Quiénes somos",
    teamRole: "Voluntario",
    contactTitle: "Contacto y Transparencia",
    contactBody:
      "Escríbenos con tus preguntas o ideas. Responderemos pronto.",
    footer: {
      rights: "© AMARTE. Todos los derechos reservados.",
    },
    whatWeDoTitle: "¿Qué hacemos?",
    whatWeDo: {
      bullets: [
        "Entrega de kits escolares",
        "Programas educativos y artísticos que fomentan la creatividad, el pensamiento crítico y el amor por el aprendizaje.",
        "Actividades recreativas y culturales",
        "Becas de estudio para dar continuidad al proceso educativo de quienes más lo necesitan.",
      ],
      summary:
        "Cada acción que realizamos busca abrir oportunidades, sembrar sueños y construir un futuro lleno de posibilidades.",
      statsAlt: "Cifras de impacto de AMARTE",
    },
    faq: {
      title: "Preguntas frecuentes",
      intro:
        "Aquí encontrarás respuestas a dudas comunes. Iremos ampliando esta sección.",
      items: [
        {
          q: "¿Cómo puedo hacer una donación?",
          a: "Puedes donar en la sección Donar. Aceptamos pagos con Stripe (tarjeta y otros métodos).",
        },
        {
          q: "¿Puedo ser voluntario?",
          a: "Sí. En la sección Involúcrate encontrarás un formulario para postularte como voluntario.",
        },
        {
          q: "¿Recibiré comprobante de donación?",
          a: "Sí, una vez completado el pago recibirás el comprobante por correo.",
        },
      ],
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      programs: "Programs",
      impact: "Impact",
      getInvolved: "Get Involved",
      donate: "Donate",
      contact: "Contact",
      faq: "FAQ",
    },
    hero: {
      
      title: "Where Love\nand Art\nCome Together",
      subtitle:
        "",
      cta: "Donate now",
    },
    quickImpact: {
      kits: "SCHOLARSHIPS",
      talleres: "SCHOOL KITS",
      fondos: "COMMUNITIES",
    },
    featuresTitle:
      "You can make a difference by supporting a cause you care about. Your donation can change lives.",
    features: [
      {
        title: "Direct Help",
        desc: "Every contribution reaches real projects in local communities.",
      },
      {
        title: "Giving Information",
        desc: "We share resources to multiply the impact.",
      },
      {
        title: "Raising Awareness",
        desc: "Your voice matters: spread the word and join.",
      },
      {
        title: "Relieving Poverty",
        desc: "Through art and education, we open opportunities.",
      },
    ],

    programsTitle: "Our Programs",
    programs: [
      {
        id: "art",
        title: "Art Supply Drives & Giveaways",
        desc: "Kits with crayons, notebooks and brushes.",
        imgAlt: "Kids with art kits",
        img: "/p2.png",
      },
      {
        id: "scholarships",
        title: "Scholarship & Mentorship",
        desc: "Financial support to stay in school.",
        imgAlt: "Children receiving scholarships",
        img: "/p2.png",
      },
      {
        id: "wellbeing",
        title: "Community Engagement",
        desc: "Activities to boost self-esteem and resilience.",
        imgAlt: "Wellbeing activities",
        img: "/p2.png",
      },
    ],

    testimonyTitle: "Stories",
    histories: [
      {
        id: "beca",
        title: "María – Scholarship to continue her studies",
        desc: "María dreamed of becoming a teacher, but her family couldn’t afford the cost of her education. Thanks to an Amarte scholarship, she was able to continue her studies and is now in her third year of teaching school. 'This support gave me hope again,' she shares with a smile.",
        img: "/s1.JPG",
      },
      {
        id: "taller",
        title: "Carlos – Discovered his talent through art",
        desc: "Carlos, age 10, took part in one of our community art workshops. There, he discovered his passion for painting and learned to express his emotions through color. 'I had never owned my own brushes before. Now I paint every day,' he says proudly.",
        img: "/s2.JPG",
      },
      {
        id: "apoyo",
        title: "Ana – Stayed in school thanks to support",
        desc: "Ana was about to leave school due to financial difficulties. Our educational continuity program provided her with supplies and emotional support. Today, she continues studying and dreams of becoming a nurse to help others just as she was helped.",
        img: "/s5.JPG",
      },
      {
        id: "musica",
        title: "The Santa Ana Choir – Music that unites hearts",
        desc: "The boys and girls of the Santa Ana Choir rehearse every week with enthusiasm. Music has strengthened their discipline, confidence, and teamwork. 'Here I learned that every voice matters,' says Sofía, one of the youngest members.",
        img: "/s4.jpg",
      },
      {
        id: "comunidad",
        title: "Rosa – United for her community",
        desc: "Rosa lives in a rural area where children used to walk long distances to get to school. With Amarte’s support, the community organized workdays to improve access and create a safe place to learn. 'They didn’t just help my children—they helped the whole village,' she says with emotion.",
        img: "/s3.JPG",
      },
      {
        id: "voluntario",
        title: "Diego – From beneficiary to volunteer",
        desc: "Diego first met Amarte as a student when he received a school kit that encouraged him to keep studying. Years later, he joined as a volunteer to deliver materials to other children. 'Now it’s my turn to give back what I once received,' he says while arranging boxes full of colors and smiles.",
        img: "/escuela1.png",
      },
    ],

    donateBlock: {
      title: "Make a donation",
      body: "Your generosity funds materials, workshops and scholarships.",
      cta: "Donate now",
    },
    teamTitle: "About us",
    teamRole: "Volunteer",
    contactTitle: "Contact & Transparency",
    contactBody:
      "Write us with your questions or ideas. We'll get back to you soon.",
    footer: {
      rights: "© AMARTE. All rights reserved.",
    },
    whatWeDoTitle: "What we do",
    whatWeDo: {
      bullets: [
        "Delivery of school kits",
        "Educational and artistic programs that foster creativity, critical thinking, and a love for learning.",
        "Recreational and cultural activities",
        "Scholarships to ensure continuity of education for those who need it most.",
      ],
      summary:
        "Each action we take seeks to open opportunities, sow dreams, and build a future full of possibilities.",
      statsAlt: "AMARTE impact figures",
    },
    faq: {
      title: "Frequently Asked Questions",
      intro:
        "Here you’ll find answers to common questions. We will expand this section.",
      items: [
        {
          q: "How can I make a donation?",
          a: "You can donate in the Donate section. We accept Stripe (cards and other methods).",
        },
        {
          q: "Can I volunteer?",
          a: "Yes. In the Get Involved section you’ll find a volunteer application form.",
        },
        {
          q: "Will I receive a donation receipt?",
          a: "Yes, once the payment is completed you’ll receive a receipt via email.",
        },
      ],
    },
  },
} as const;

export function t(lang: Lang) {
  return dict[lang];
}
