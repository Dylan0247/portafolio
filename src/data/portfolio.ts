export interface LearningItem {
  number: string;
  title: string;
  status: string;
  description: string;
  topics: string[];
}

// Cambia solo por datos que quieras publicar. Las cadenas vacías no generan enlaces.
export const profile = {
  publicName: "Dylan0247",
  role: "DevOps en formación",
  description:
    "Un portafolio de aprendizaje, automatización y sistemas conectados. Preparación en AWS y un camino hacia DevOps.",
  github: "https://github.com/Dylan0247",
  linkedin: "",
  email: "dylansolarte8@gmail.com",
  phone: "+34 634 488 484",
  phoneHref: "tel:+34634488484",
  cv: "/cv/Cv_Dilan_dev.pdf",
  about:
    "Me estoy formando para trabajar en DevOps. Mi camino pasa por AWS, la arquitectura de soluciones y la IA generativa, con Kubernetes como siguiente objetivo. Busco una oportunidad para seguir aprendiendo en un equipo y también me interesa la vía freelance.",
};

export const learning: LearningItem[] = [
  {
    number: "01",
    title: "Cloud & arquitectura",
    status: "En preparación",
    description:
      "Preparación de certificaciones AWS de nivel Associate y Professional, con interés en arquitectura de soluciones.",
    topics: ["AWS", "Arquitectura cloud"],
  },
  {
    number: "02",
    title: "Inteligencia artificial",
    status: "En preparación",
    description:
      "Formación orientada a IA generativa en AWS y exploración práctica de sistemas con modelos locales.",
    topics: ["IA generativa", "Modelos locales"],
  },
  {
    number: "03",
    title: "Contenedores & DevOps",
    status: "Próximo objetivo",
    description:
      "Quiero avanzar hacia una certificación de Kubernetes como parte de mi recorrido hacia DevOps.",
    topics: ["Kubernetes", "DevOps"],
  },
];

export const cerebro = {
  title: "Cerebro",
  subtitle: "Contexto que continúa. Conocimiento que conecta.",
  description:
    "Un sistema personal que reúne notas, automatizaciones y un modelo local para recuperar contexto al trabajar con IA.",
  repository: "https://github.com/Dylan0247/cerebro",
  tools: ["Obsidian", "n8n", "Ollama", "Qwen3", "MCP"],
};
