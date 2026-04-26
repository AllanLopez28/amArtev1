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
        img: "/p1.png",
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
        img: "/p3.png",
      },
    ],

    testimonyTitle: "Historias",
    histories: [
      {
        id: "beca",
        title: "AMARTE genera entornos de confianza ",
        desc: "Permiten a cada niño y niña expresar sus emociones y pensamientos con libertad",
        img: "/s1.JPG",
      },
      {
        id: "taller",
        title: " Talento en el arte",
        desc: "Nuestros niños encuentran en la pintura un lenguaje para expresar sus emociones y pensamientos más profundos. El Salvador",
        img: "/s2.JPG",
      },
      {
        id: "apoyo",
        title: "Escuela Cantón El Triunfo",
        desc: "Gracias al valioso respaldo de AMARTE, todas las aulas de la Escuela Cantón El Triunfo han sido equipadas con espacios creativos dedicados al arte.",
        img: "/s5.JPG",
      },
      {
        id: "musica",
        title: "Jornada educativa",
        desc: "Nix y Morena Hernández desarrollan una jornada educativa, enfocada en potenciar el bienestar emocional y autoestima de los ninos. El Salvador",
        img: "/s4.jpg",
      },
      {
        id: "comunidad",
        title: "El apoyo de AMARTE abraza a los niños y también a quienes los rodean.",
        desc: "",
        img: "/s3.JPG",
      },
      {
        id: "voluntario",
        title: "A veces, lo que sentimos es difícil de expresar con palabras",
        desc: "Sin embargo, encontramos en la pintura una forma de liberar nuestro mundo interior. El Salvador",
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
        "Talleres de arte y autoestima para niños y sus familias.",
        "Becas para garantizar la continuidad de la educación de quienes más lo necesitan.",
        "Actividades recreativas y culturales que integran a los ninos, sus familias y su comunidad. ",
        "Donaciones estratégicas de suministros básicos para mejorar el entorno de los niños.",
      ],
      summary:
        "Cada acción que realizamos busca abrir oportunidades, sembrar sueños y construir un futuro lleno de posibilidades.",
      statsAlt: "Cifras de impacto de AMARTE",
      missionLabel: "Nuestra Visión",
      mission:
        "Imaginamos un mundo donde cada niño, independientemente de su situación socioeconómica, tenga la oportunidad de explorar su creatividad, sentirse apoyado y desarrollar las habilidades que necesita para alcanzar su potencial.",
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
      subtitle: "",
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
        img: "/p1.png",
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
        img: "/p3.png",
      },
    ],

    testimonyTitle: "Stories",
    histories: [
      {
        id: "beca",
        title: "AMARTE creates environments of trust",
        desc: "empower every child to express their emotions and thoughts with freedom.",
        img: "/s1.JPG",
      },
      {
        id: "taller",
        title: "Talent through art",
        desc: "Our children find in painting a language to express their deepest emotions and thoughts. El Salvador",
        img: "/s2.JPG",
      },
      {
        id: "apoyo",
        title: "Cantón El Triunfo School (El Salvador)",
        desc: "Every classroom at Cantón El Triunfo School (El Salvador) now has its own art station, thanks to the generous support of AMARTE",
        img: "/s5.JPG",
      },
      {
        id: "musica",
        title: "Educational workshop",
        desc: "Nix and Morena Hernández are leading an educational workshop focused on strengthening the emotional well-being and self-esteem of children. El Salvador.",
        img: "/s4.jpg",
      },
      {
        id: "comunidad",
        title: "",
        desc: "The support from AMARTE embraces the children and everyone who surrounds them.",
        img: "/s3.JPG",
      },
      {
        id: "voluntario",
        title: "Sometimes, what we feel is difficult to express with words",
        desc: "however, we find in painting a way to set our inner world free. El Salvador",
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
        "Art and self-esteem workshops for children and their families.",
        "Scholarships to ensure the continuity of education for those who need it most.",
        "Recreational and cultural activities that integrate children, their families, and their community.",
        "Strategic donations of basic supplies to improve the children's environment.",
      ],
      summary:
        "Each action we take seeks to open opportunities, sow dreams, and build a future full of possibilities.",
      statsAlt: "AMARTE impact figures",
      missionLabel: "Our Vision",
      mission:
        "We envision a world where every child regardless of their socioeconomic background has the chance to explore their creativity, feel supported, and build the skills they need to reach their potential.",
    },
    faq: {
      title: "Frequently Asked Questions",
      intro:
        "Here you'll find answers to common questions. We will expand this section.",
      items: [
        {
          q: "How can I make a donation?",
          a: "You can donate in the Donate section. We accept Stripe (cards and other methods).",
        },
        {
          q: "Can I volunteer?",
          a: "Yes. In the Get Involved section you'll find a volunteer application form.",
        },
        {
          q: "Will I receive a donation receipt?",
          a: "Yes, once the payment is completed you'll receive a receipt via email.",
        },
      ],
    },
  },
} as const;

export function t(lang: Lang) {
  return dict[lang];
}