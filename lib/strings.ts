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
    },
    hero: {
      title: "Dona futuro\nDona\nsueños",
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
        img: "/p2.png",
      },
      {
        id: "wellbeing",
        title: "Bienestar emocional",
        desc: "Actividades para autoestima y resiliencia.",
        imgAlt: "Actividades de bienestar",
        img: "/p2.png",
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
    },
    hero: {
      title: "Your donation keeps a child in school.",
      subtitle:
        "With your help, more children in El Salvador keep learning and creating.",
      cta: "Donate now",
    },
    quickImpact: {
      kits: "Art kits delivered",
      talleres: "Children in workshops",
      fondos: "Funds raised",
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
  },
} as const;

export function t(lang: Lang) {
  return dict[lang];
}
