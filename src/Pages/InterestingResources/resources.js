const interestingResources = [
  {
    resourceTitle: "ChatGPT y generadores de texto con inteligencia artificial",
    resourceType: "Video",
    resourceURL: "https://youtu.be/jpFTtmHs-R4",
    keywords: [
      "chatgpt",
      "inteligencia artificial generativa",
      "generadores de texto",
    ],
  },
  {
    resourceTitle:
      "Curso: Transformando la escritura de investigación: Explorando el potencial del ChatGPT y modelos de lenguaje grandes para el futuro del trabajo",
    resourceType: "Video",
    resourceURL: "https://www.youtube.com/watch?v=sNrsns8IqUE",
    keywords: ["escritura", "chatgpt", "investigación"],
  },
  {
    resourceTitle:
      "¿Qué hacer cuando un sistema fácilmente accesible a un estudiante puede escribir en segundos la tarea que les dejamos a nuestros alumnos?",
    resourceType: "Video",
    resourceURL: "https://youtu.be/eMuMkQwdReg?t=4031",
    keywords: ["chatgpt", "narrativas", "generadores de texto"],
  },
  {
    resourceTitle:
      "Can linguists distinguish between ChatGPT/AI and human writing?: A study of research ethics and academic publishing",
    resourceType: "Artículo",
    resourceURL:
      "https://www.sciencedirect.com/science/article/pii/S2772766123000289?ref=pdf_download&fr=RR-2&rr=817d22615a4821b3",
    keywords: ["chatgpt", "research ethics", "academic publishing"],
  },
  {
    resourceTitle: "Teaching with AI",
    resourceType: "Sitio web",
    resourceURL: "https://openai.com/blog/teaching-with-ai",
    keywords: ["chatgpt", "educación", "docentes"],
  },
  {
    resourceTitle: "Generative AI exists because of the transformer",
    resourceType: "Sitio web",
    resourceURL: "https://ig.ft.com/generative-ai/",
    keywords: [
      "visualización",
      "grandes modelos de lenguaje",
      "inteligencia artificial generativa",
    ],
  },
  {
    resourceTitle: "Ideogram",
    resourceType: "Herramientas",
    resourceURL: "https://ideogram.ai/",
    keywords: ["imágenes", "textos", "modelos de difusión"],
  },
  {
    resourceTitle: "Midjourney Prompt Builder",
    resourceType: "Herramientas",
    resourceURL: "https://promptomania.com/midjourney-prompt-builder/",
    keywords: ["midjourney", "text2image", "modelos de difusión"],
  },
  {
    resourceTitle: "Introducing Duet AI for Google Workspace",
    resourceType: "Sitio web",
    resourceURL:
      "https://workspace.google.com/blog/product-announcements/duet-ai",
    keywords: ["google", "ofimática", "asistente"],
  },
  {
    resourceTitle: "Using Bing with ChatGPT to Create a Course",
    resourceType: "Tutorial",
    resourceURL:
      "https://docs.google.com/document/d/11woKGoOwCJY23Stm3tRhNnoKpuesOxLoLHQ5hwHpy8U/mobilebasic",
    keywords: ["bingchat", "cursos", "estrategias"],
  },
  {
    resourceTitle: "My Assessments Next Semester",
    resourceType: "Sitio web",
    resourceURL:
      "https://blog.mahabali.me/educational-technology-2/my-assessments-next-semester-modified-for-avoiding-embracing-ai/",
    keywords: ["chatgpt", "evaluación", "soluciones"],
  },
  {
    resourceTitle: "Cómo entender la inteligencia artificial",
    resourceType: "Sitio web",
    resourceURL: "https://atozofai.withgoogle.com/intl/es/",
    keywords: ["términos", "definiciones", "enseñanza"],
  },
  {
    resourceTitle: "Teacher and Student Guide to Analyzing AI Writing Tools",
    resourceType: "Sitio web",
    resourceURL:
      "https://edtechbooks.org/mediaandciviclearning/cmlguides#h2_xqej",
    keywords: ["chatgpt", "preguntas", "guía"],
  },
  {
    resourceTitle: "Guidelines for Use: Thinking Inside the Box",
    resourceType: "Lineamientos",
    resourceURL: "https://wordpress.kpu.ca/generativeaitlkpu/guidelines/",
    keywords: ["creación", "recursos", "guía"],
  },
  {
    resourceTitle:
      "I challenged an AI to design a city and the results are SURPRISING",
    resourceType: "Video",
    resourceURL: "https://www.youtube.com/watch?v=EKHgP2EHDos",
    keywords: ["chatgpt", "ejemplos", "diseño"],
  },
  {
    resourceTitle: "Artificial Intelligence in Education: Coming of Age?",
    resourceType: "Artículo",
    resourceURL:
      "https://link.springer.com/journal/40593/topicalCollection/AC_f804344dfc96faadcea8f587e128b693",
    keywords: ["educación", "ética", "sociedad"],
  },
  {
    resourceTitle: "The AI Assessment Scale: From no AI to full AI",
    resourceType: "Sitio web",
    resourceURL:
      "https://leonfurze.com/2023/04/29/the-ai-assessment-scale-from-no-ai-to-full-ai/",
    keywords: ["chatgpt", "evaluación", "retroalimentación"],
  },
  {
    resourceTitle: "Universitas 21 Educational Innovation Symposium",
    resourceType: "Sitio web",
    resourceURL:
      "https://simon.buckinghamshum.net/2023/08/universitas21-learning-at-scale-keynotes/",
    keywords: [
      "educación",
      "analítica del aprendizaje",
      "inteligencia colectiva",
    ],
  },
  {
    resourceTitle: "The AI Pedagogy Project",
    resourceType: "Sitio web",
    resourceURL: "https://aipedagogy.org/",
    keywords: ["colección", "evaluación", "beneficios"],
  },
  {
    resourceTitle: "The Generative Age: AI in Education",
    resourceType: "Otro",
    resourceURL:
      "https://podcasters.spotify.com/pod/show/generative-age/episodes/Deep-Fakes-and-AI-Risk-Taking-with-Carl-Hooker-Live-at-ISTE-e27vco4",
    keywords: ["ia generativa", "salón de clases", "la era generativa"],
  },
  {
    resourceTitle: "Student Use Cases for AI",
    resourceType: "Sitio web",
    resourceURL:
      "https://hbsp.harvard.edu/inspiring-minds/student-use-cases-for-ai",
    keywords: ["retroalimentación", "tutor personal", "estudiante"],
  },
  {
    resourceTitle:
      "An Introduction to Teaching with Text Generation Technologies",
    resourceType: "Artículo",
    resourceURL: "https://wac.colostate.edu/repository/collections/textgened/",
    keywords: [
      "large language models",
      "writing teachers",
      "economies of authorship",
    ],
  },
  {
    resourceTitle: "¿Podrá resolver la ia todos los problemas que genera?",
    resourceType: "Artículo",
    resourceURL:
      "https://otrosdialogos.colmex.mx/podra-resolver-la-ia-todos-los-problemas-que-genera-una-entrevista-con-wendell-wallach",
    keywords: ["ética", "contenido", "información"],
  },
  {
    resourceTitle: "Using Generative Artificial Intelligence - A Student Guide",
    resourceType: "Artículo",
    resourceURL:
      "https://figshare.edgehill.ac.uk/articles/educational_resource/Using_Generative_Artificial_Intelligence_-_A_Student_Guide_pdf/24259597/1",
    keywords: ["generative ai", "assesment measures", "academic interity"],
  },
  {
    resourceTitle: "Student guidance for the responsible use of AI",
    resourceType: "Sitio web",
    resourceURL:
      "https://altc.alt.ac.uk/blog/2023/10/student-guidance-for-the-responsible-use-of-ai",
    keywords: ["chatgpt", "guidance ", "written assessments"],
  },
  {
    resourceTitle: "Las mejores IA para el investigador moderno",
    resourceType: "Sitio web",
    resourceURL:
      "https://observatorio.tec.mx/edu-news/las-mejores-ia-para-el-investigador-moderno/",
    keywords: [
      "investigación",
      "collaboration review",
      "referencias bibliográficas",
    ],
  },
  {
    resourceTitle:
      "Hacia revisiones de la literatura más eficientes potenciadas por inteligencia artificial",
    resourceType: "Artículo",
    resourceURL: "https://doi.org/10.22201/fm.20075057e.2023.47.23526",
    keywords: [
      "revisión de la literatura",
      "aprendizaje automático",
      "aprendizaje profundo",
    ],
  },
  {
    resourceTitle:
      "Serie: Cómo sobrevivir a la IAG en el aula. Primera cápsula: Sistemas de Inteligencia artificial generativa. Qué son. Cómo funcionan",
    resourceType: "Video",
    resourceURL: "https://youtu.be/fdx8P3lUvfY",
    keywords: [
      "inteligencia artificial generativa ",
      "chatgpt",
      "bard",
    ],
  },
  {
    resourceTitle:
      "Artificial Intelligence and Librarianship",
    resourceType: "Otro",
    resourceURL: "https://open.umn.edu/opentextbooks/textbooks/1479",
    keywords: [
      "chatbots",
      "llm",
      "bibliotecarios",
    ],
  },
  {
    resourceTitle: "Generative AI Activities for the Writing & Language Classroom",
    resourceType: "Otro",
    resourceURL: "https://docs.google.com/presentation/d/1IbEBckhoOPKRWKQovCVL43-552rF4tlK/mobilepresent?slide=id.g28cd987cbf7_0_915",
    keywords: ["chatgpt", "actividades", "escritura"],
  },/*
  {
    resourceTitle: "",
    resourceType: "",
    resourceURL: "",
    keywords: [],
  },{
    resourceTitle: "",
    resourceType: "",
    resourceURL: "",
    keywords: [],
  },{
    resourceTitle: "",
    resourceType: "",
    resourceURL: "",
    keywords: [],
  },*/
];

export default interestingResources;
