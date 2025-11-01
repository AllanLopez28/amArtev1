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
      title: "Where the Love\nand Art\nCome Together",
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
        title: "Materiales de arte",
        desc: "Kits con colores, cuadernos y pinceles.",
        imgAlt: "Niños con kits de arte",
        img: "/p2.png",
      },
      {
        id: "scholarships",
        title: "Becas y premios",
        desc: "Apoyo económico para continuar estudios.",
        imgAlt: "Niños recibiendo becas",
        img: "/p2.png",
      },
      {
        id: "workshops",
        title: "Clases y talleres",
        desc: "Arte, música, escritura y deportes.",
        imgAlt: "Taller de arte",
        img: "/p1.png",
      },
      {
        id: "wellbeing",
        title: "Bienestar emocional",
        desc: "Actividades para autoestima y resiliencia.",
        imgAlt: "Actividades de bienestar",
        img: "/p2.png",
      },
    ],

    testimonyTitle: "Historias",
    histories: [
      {
        id: "beca",
        title: "Beneficiaria de beca escolar",
        desc: "Beca completa para estudios superiores.",
        img: "/escuela13.jpg",
      },
      {
        id: "taller",
        title: "Participante de taller de arte",
        desc: "Taller creativo para niños en situación de vulnerabilidad.",
        img: "/escuela13.jpg",
      },
      {
        id: "apoyo",
        title: "Apoyo a la continuidad educativa",
        desc: "Acompañamiento y materiales para no abandonar la escuela.",
        img: "/escuela13.jpg",
      },
      {
        id: "musica",
        title: "Música para crecer",
        desc: "El coro infantil fortalece autoestima y disciplina.",
        img: "/escuela13.jpg",
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
      title: "Your donation keeps a child in school.",
      subtitle:
        "With your help, more children in El Salvador keep learning and creating.",
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
        title: "Art materials",
        desc: "Kits with crayons, notebooks and brushes.",
        imgAlt: "Kids with art kits",
        img: "/p2.png",
      },
      {
        id: "scholarships",
        title: "Scholarships & awards",
        desc: "Financial support to stay in school.",
        imgAlt: "Children receiving scholarships",
        img: "/p2.png",
      },
      {
        id: "workshops",
        title: "Classes & workshops",
        desc: "Art, music, writing and sports.",
        imgAlt: "Art workshop",
        img: "/p2.png",
      },
      {
        id: "wellbeing",
        title: "Emotional wellbeing",
        desc: "Activities to boost self-esteem and resilience.",
        imgAlt: "Wellbeing activities",
        img: "/p2.png",
      },
    ],

    testimonyTitle: "Stories",
    histories: [
      {
        id: "scholar",
        title: "Scholarship recipient",
        desc: "Full scholarship to continue higher education.",
        img: "/escuela13.jpg",
      },
      {
        id: "artworkshop",
        title: "Art workshop participant",
        desc: "Creative workshop for children in vulnerable situations.",
        img: "/escuela13.jpg",
      },
      {
        id: "continuity",
        title: "Learning continuity support",
        desc: "Mentoring and supplies to prevent school dropout.",
        img: "/escuela13.jpg",
      },
      {
        id: "music",
        title: "Music to grow",
        desc: "The children’s choir builds discipline and self-esteem.",
        img: "/escuela13.jpg",
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
