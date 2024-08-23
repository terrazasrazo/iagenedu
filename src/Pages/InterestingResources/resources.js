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
    keywords: ["inteligencia artificial generativa ", "chatgpt", "bard"],
  },
  {
    resourceTitle: "Artificial Intelligence and Librarianship",
    resourceType: "Otro",
    resourceURL: "https://open.umn.edu/opentextbooks/textbooks/1479",
    keywords: ["chatbots", "llm", "bibliotecarios"],
  },
  {
    resourceTitle:
      "Generative AI Activities for the Writing & Language Classroom",
    resourceType: "Otro",
    resourceURL:
      "https://docs.google.com/presentation/d/1IbEBckhoOPKRWKQovCVL43-552rF4tlK/mobilepresent?slide=id.g28cd987cbf7_0_915",
    keywords: ["chatgpt", "actividades", "escritura"],
  },
  {
    resourceTitle: "AI in Education",
    resourceType: "Curso",
    resourceURL: "https://canvas.sydney.edu.au/courses/51655",
    keywords: [
      "inteligencia artificial",
      "educación",
      "aprendizaje automático",
    ],
  },
  {
    resourceTitle: "AI in Education",
    resourceType: "Sitio web",
    resourceURL:
      "https://www.educationnext.org/a-i-in-education-leap-into-new-era-machine-intelligence-carries-risks-challenges-promises/",
    keywords: [
      "inteligencia artificial",
      "educación",
      "desafíos y oportunidades",
    ],
  },
  {
    resourceTitle:
      "Sneak preview: a blueprint for an ai bill of rights for education",
    resourceType: "Sitio web",
    resourceURL:
      "https://criticalai.org/2023/07/17/a-blueprint-for-an-ai-bill-of-rights-for-education-kathryn-conrad/",
    keywords: ["inteligencia artificial", "educación", "derechos y ética"],
  },
  {
    resourceTitle: "Generative Textbooks",
    resourceType: "Sitio web",
    resourceURL: "https://opencontent.org/blog/archives/7238",
    keywords: ["inteligencia artificial", "educación", "textos generativos"],
  },
  {
    resourceTitle:
      "Why AI detectors think the US Constitution was written by AI",
    resourceType: "Sitio web",
    resourceURL:
      "https://arstechnica.com/information-technology/2023/07/why-ai-detectors-think-the-us-constitution-was-written-by-ai/amp/",
    keywords: [
      "inteligencia artificial",
      "detección de AI",
      "Constitución de EE.UU.",
    ],
  },
  {
    resourceTitle: "El sueño de la máquina creativa",
    resourceType: "Artículo",
    resourceURL:
      "https://www.danielinnerarity.es/opini%C3%B3n-preblog-2023/el-sue%C3%B1o-de-la-m%C3%A1quina-creativa/",
    keywords: ["inteligencia artificial", "creatividad", "filosofía"],
  },
  {
    resourceTitle:
      "Exploring paths for the future of free knowledge: New Wikipedia ChatGPT plugin, leveraging rich media social apps, and other experiments",
    resourceType: "Sitio web",
    resourceURL:
      "https://diff.wikimedia.org/2023/07/13/exploring-paths-for-the-future-of-free-knowledge-new-wikipedia-chatgpt-plugin-leveraging-rich-media-social-apps-and-other-experiments/",
    keywords: ["inteligencia artificial", "Wikipedia", "ChatGPT"],
  },
  {
    resourceTitle: "ChatGPT Prompt Engineering Course",
    resourceType: "Curso",
    resourceURL:
      "https://www.classcentral.com/classroom/youtube-chatgpt-prompt-engineering-course-146290/641948750c9e2",
    keywords: ["inteligencia artificial", "ChatGPT", "ingeniería de prompts"],
  },
  {
    resourceTitle: "5 things we learned at the AI x L&T week",
    resourceType: "Sitio web",
    resourceURL:
      "https://lx.uts.edu.au/blog/2023/08/07/5-things-we-learned-at-ai-week/",
    keywords: [
      "inteligencia artificial",
      "aprendizaje y enseñanza",
      "semana de AI",
    ],
  },
  {
    resourceTitle:
      "ChatGPT e inteligencia artificial generativa: ¿estrella fugaz o disrupción educativa?",
    resourceType: "Artículo",
    resourceURL:
      "https://educacion.nexos.com.mx/chatgpt-e-inteligencia-artificial-generativa-estrella-fugaz-o-disrupcion-educativa/",
    keywords: ["inteligencia artificial", "ChatGPT", "educación disruptiva"],
  },
  {
    resourceTitle: "British Journal of Education Technology Volume 54, Issue 5",
    resourceType: "Artículo",
    resourceURL:
      "https://bera-journals.onlinelibrary.wiley.com/toc/14678535/2023/54/5",
    keywords: ["inteligencia artificial", "educación", "tecnología"],
  },
  {
    resourceTitle:
      "All work is group work now: Collaborative learning as a pedagogical and assessment framework for learning with generative AI",
    resourceType: "Sitio web",
    resourceURL: "https://opencontent.org/blog/archives/7324",
    keywords: [
      "inteligencia artificial",
      "aprendizaje colaborativo",
      "evaluación",
    ],
  },
  {
    resourceTitle: "Adapting Large Language Models via Reading Comprehension",
    resourceType: "Artículo",
    resourceURL: "https://arxiv.org/abs/2309.09530",
    keywords: [
      "inteligencia artificial",
      "modelos de lenguaje",
      "comprensión lectora",
    ],
  },
  {
    resourceTitle:
      "Oportunidades y desafíos de la era de la inteligencia artificial para la educación superior",
    resourceType: "Artículo",
    resourceURL:
      "https://unesdoc.unesco.org/ark:/48223/pf0000386670_spa/PDF/386670spa.pdf.multi",
    keywords: ["inteligencia artificial", "educación superior", "UNESCO"],
  },
  {
    resourceTitle: "AI and education in China",
    resourceType: "Otro",
    resourceURL:
      "https://www.buzzsprout.com/1301377/13713790-ai-and-education-in-china",
    keywords: ["inteligencia artificial", "educación", "China"],
  },
  {
    resourceTitle:
      "The hype has abated so what now for generative AI and assessment?",
    resourceType: "Artículo",
    resourceURL:
      "https://needednowlt.substack.com/p/the-hype-has-abated-so-what-now-for?utm_campaign=post&utm_medium=web",
    keywords: ["inteligencia artificial", "generación de texto", "evaluación"],
  },
  {
    resourceTitle:
      "The human nature of generative AIs and the technological nature of humanity: implications for education",
    resourceType: "Artículo",
    resourceURL:
      "https://jondron.ca/preprint-the-human-nature-of-generative-ais-and-the-technological-nature-of-humanity-implications-for-education/",
    keywords: ["inteligencia artificial", "naturaleza humana", "educación"],
  },
  {
    resourceTitle: "Generative AI for Teaching, Learning and Assessment",
    resourceType: "Otro",
    resourceURL:
      "https://www.slideshare.net/sharplem/generative-ai-for-teaching-learning-and-assessment",
    keywords: [
      "inteligencia artificial",
      "enseñanza y aprendizaje",
      "evaluación",
    ],
  },
  {
    resourceTitle:
      "Toward non-human-centered design: designing an academic article with ChatGPT",
    resourceType: "Artículo",
    resourceURL:
      "https://revista.profesionaldelainformacion.com/index.php/EPI/article/view/87320/63485",
    keywords: ["inteligencia artificial", "ChatGPT", "diseño no humano"],
  },
  {
    resourceTitle:
      "Chat GPT Webinar #5: Assessment reform for the Age of Artificial Intelligence",
    resourceType: "Video",
    resourceURL: "https://www.youtube.com/watch?v=8F5jZrFbjJY",
    keywords: [
      "inteligencia artificial",
      "ChatGPT",
      "reforma de la evaluación",
    ],
  },
  {
    resourceTitle: "ChatGPT for assessment writing",
    resourceType: "Artículo",
    resourceURL:
      "https://www.tandfonline.com/doi/pdf/10.1080/0142159X.2023.2249239",
    keywords: ["inteligencia artificial", "ChatGPT", "escritura de evaluación"],
  },
  {
    resourceTitle:
      "How to write better ChatGPT prompts for the best generative AI results",
    resourceType: "Sitio web",
    resourceURL:
      "https://www.zdnet.com/article/how-to-write-better-chatgpt-prompts/",
    keywords: ["inteligencia artificial", "ChatGPT", "mejores prompts"],
  },
  {
    resourceTitle: "ChatGPT for assessment writing",
    resourceType: "Artículo",
    resourceURL:
      "https://www.tandfonline.com/doi/full/10.1080/0142159X.2023.2249239",
    keywords: ["inteligencia artificial", "ChatGPT", "escritura de evaluación"],
  },
  {
    resourceTitle:
      "New report: Generative Artificial Intelligence in Canadian Post-Secondary Education",
    resourceType: "Artículo",
    resourceURL:
      "https://www.veletsianos.com/2023/10/12/new-report-generative-artificial-intelligence-in-canadian-post-secondary-education/?utm_source=rss&utm_medium=rss&utm_campaign=new-report-generative-artificial-intelligence-in-canadian-post-secondary-education",
    keywords: ["inteligencia artificial", "educación superior", "Canadá"],
  },
  {
    resourceTitle:
      "Can linguists distinguish between ChatGPT/AI and human writing?: A study of research ethics and academic publishing",
    resourceType: "Artículo",
    resourceURL:
      "https://www.sciencedirect.com/science/article/pii/S2772766123000289?ref=pdf_download&fr=RR-2&rr=8269f534cdd621ac",
    keywords: ["inteligencia artificial", "ChatGPT", "lingüística"],
  },
  {
    resourceTitle:
      "Lineamientos para el uso de inteligencia artificial en contextos universitarios",
    resourceType: "Artículo",
    resourceURL: "https://gigapp.org/ewp/index.php/GIGAPP-EWP/article/view/331",
    keywords: [
      "inteligencia artificial",
      "educación universitaria",
      "lineamientos",
    ],
  },
  {
    resourceTitle:
      "ChatGPT: reflexiones sobre la irrupción de la inteligencia artificial generativa en la docencia universitaria",
    resourceType: "Artículo",
    resourceURL: "https://rua.ua.es/dspace/handle/10045/137019",
    keywords: ["inteligencia artificial", "ChatGPT", "docencia universitaria"],
  },
  {
    resourceTitle: "IAG y el momento de las máquinas imperfectas",
    resourceType: "Artículo",
    resourceURL: "http://sedici.unlp.edu.ar/handle/10915/156260",
    keywords: ["inteligencia artificial", "IAG", "máquinas imperfectas"],
  },
  {
    resourceTitle:
      "ChatGP-why: When, if ever, is synthetic text safe, appropriate, and desirable?",
    resourceType: "Video",
    resourceURL: "https://www.youtube.com/watch?v=qpE40jwMilU",
    keywords: ["inteligencia artificial", "ChatGPT", "texto sintético"],
  },
  {
    resourceTitle: "AI, Generative AI and Education and Learning",
    resourceType: "Sitio web",
    resourceURL:
      "https://i4quality.se/blog/164-ai-generative-ai-and-education-and-learning",
    keywords: [
      "inteligencia artificial",
      "generación de texto",
      "educación y aprendizaje",
    ],
  },
  {
    resourceTitle:
      "Shifting feedback agency to students by having them write their own feedback comments",
    resourceType: "Artículo",
    resourceURL:
      "https://www.tandfonline.com/doi/full/10.1080/02602938.2023.2265080",
    keywords: [
      "inteligencia artificial",
      "retroalimentación",
      "agencia estudiantil",
    ],
  },
  {
    resourceTitle:
      "It’s not like a calculator, so what is the relationship between learners and generative artificial intelligence?",
    resourceType: "Artículo",
    resourceURL:
      "https://www.tandfonline.com/doi/full/10.1080/23735082.2023.2261106",
    keywords: ["inteligencia artificial", "aprendizaje", "relación con AI"],
  },
  {
    resourceTitle:
      "Create guidance for students on using ai in your assignments",
    resourceType: "Lineamientos",
    resourceURL: "https://sites.google.com/view/aiassignments",
    keywords: ["inteligencia artificial", "asignaciones", "orientación"],
  },
  {
    resourceTitle: "ChatGPT Syllabus Statements",
    resourceType: "Lineamientos",
    resourceURL: "https://provost.umn.edu/chatgpt-syllabus-statements",
    keywords: ["inteligencia artificial", "ChatGPT", "sílabos"],
  },
  {
    resourceTitle: "Syllabi Policies for AI Generative Tools",
    resourceType: "Lineamientos",
    resourceURL:
      "https://docs.google.com/document/d/1RMVwzjc1o0Mi8Blw_-JUTcXv02b2WRH86vw7mi16W3U/edit#heading=h.1cykjn2vg2wx",
    keywords: [
      "inteligencia artificial",
      "herramientas generativas",
      "sílabos",
    ],
  },
  {
    resourceTitle:
      "Ethical guidelines on the use of artificial intelligence (AI) and data in teaching and learning for educators",
    resourceType: "Lineamientos",
    resourceURL:
      "https://op.europa.eu/en/publication-detail/-/publication/d81a0d54-5348-11ed-92ed-01aa75ed71a1/language-en",
    keywords: ["inteligencia artificial", "enseñanza y aprendizaje", "ética"],
  },
  {
    resourceTitle: "The Ethics of AI",
    resourceType: "Lineamientos",
    resourceURL: "https://ethics-of-ai.mooc.fi/?ck_subscriber_id=2143270782",
    keywords: ["inteligencia artificial", "ética", "curso"],
  },
  {
    resourceTitle:
      "Five principles for the effective ethical use of generative AI",
    resourceType: "Lineamientos",
    resourceURL:
      "https://lx.uts.edu.au/collections/artificial-intelligence-in-learning-and-teaching/resources/five-principles-for-effective-ethical-use-generative-ai/",
    keywords: ["inteligencia artificial", "generación de texto", "ética"],
  },
  {
    resourceTitle:
      "From AI to A+: Prepare Your Students for Using ChatGPT and other AI",
    resourceType: "Lineamientos",
    resourceURL:
      "https://medium.com/@rwatkins_7167/from-ai-to-a-prepare-your-students-for-using-chatgpt-and-other-ai-6ecbfb14297b",
    keywords: ["inteligencia artificial", "ChatGPT", "preparación"],
  },
  {
    resourceTitle: "Generative AI and Its Implications for Your Teaching",
    resourceType: "Artículo",
    resourceURL: "https://cetli.upenn.edu/resources/tech/generativeai/",
    keywords: ["inteligencia artificial", "generación de texto", "enseñanza"],
  },
  {
    resourceTitle: "Generative AI in education webinar series",
    resourceType: "Video",
    resourceURL:
      "https://www.monash.edu/learning-teaching/teachhq/Teaching-practices/artificial-intelligence/webinars/_nocache#tabs__3229381-04",
    keywords: ["inteligencia artificial", "educación", "webinars"],
  },
  {
    resourceTitle: "Generative AI. An Overview for Teaching and Learning",
    resourceType: "Artículo",
    resourceURL:
      "https://wordpress.kpu.ca/generativeaitlkpu/files/2023/04/Generative-AI-An-Overview-for-Teaching-and-Learning-03042023.pdf",
    keywords: [
      "inteligencia artificial",
      "generación de texto",
      "enseñanza y aprendizaje",
    ],
  },
  {
    resourceTitle: "New principles on use of AI in education",
    resourceType: "Lineamientos",
    resourceURL:
      "https://russellgroup.ac.uk/news/new-principles-on-use-of-ai-in-education/",
    keywords: ["inteligencia artificial", "educación", "principios"],
  },
  {
    resourceTitle:
      "Artificial Intelligence and the Future of Teaching and Learning",
    resourceType: "Artículo",
    resourceURL: "https://tech.ed.gov/ai-future-of-teaching-and-learning/",
    keywords: ["inteligencia artificial", "enseñanza y aprendizaje", "futuro"],
  },
  {
    resourceTitle: "Policymaking in the Pause",
    resourceType: "Lineamientos",
    resourceURL:
      "https://futureoflife.org/wp-content/uploads/2023/04/FLI_Policymaking_In_The_Pause.pdf",
    keywords: ["inteligencia artificial", "políticas públicas", "pausa"],
  },
  {
    resourceTitle: "A Generative AI Primer",
    resourceType: "Lineamientos",
    resourceURL:
      "https://nationalcentreforai.jiscinvolve.org/wp/2023/10/16/generative-ai-primer/",
    keywords: [
      "inteligencia artificial",
      "generación de texto",
      "introducción",
    ],
  },
  {
    resourceTitle: "Gamma",
    resourceType: "Herramientas",
    resourceURL: "https://gamma.app/",
    keywords: ["inteligencia artificial", "matemáticas", "cálculo"],
  },
  {
    resourceTitle: "Tome",
    resourceType: "Herramientas",
    resourceURL: "https://tome.app/",
    keywords: ["inteligencia artificial", "escritura", "productividad"],
  },
  {
    resourceTitle: "SlidesAI",
    resourceType: "Herramientas",
    resourceURL: "https://www.slidesai.io/",
    keywords: ["inteligencia artificial", "presentaciones", "diseño"],
  },
  {
    resourceTitle: "beautiful.ai",
    resourceType: "Herramientas",
    resourceURL: "https://www.beautiful.ai/",
    keywords: ["inteligencia artificial", "presentaciones", "diseño"],
  },
  {
    resourceTitle: "A Generative AI Primer",
    resourceType: "Artículo",
    resourceURL:
      "https://er.educause.edu/articles/2023/8/a-generative-ai-primer",
    keywords: [
      "inteligencia artificial",
      "generación de texto",
      "introducción",
    ],
  },
  {
    resourceTitle: "PromptBox",
    resourceType: "Herramientas",
    resourceURL: "https://www.promptbox.ai/",
    keywords: ["inteligencia artificial", "ChatGPT", "prompts"],
  },
  {
    resourceTitle: "writeout.ai",
    resourceType: "Herramientas",
    resourceURL: "https://writeout.ai/",
    keywords: ["inteligencia artificial", "escritura", "creatividad"],
  },
  {
    resourceTitle: "Reword_",
    resourceType: "Herramientas",
    resourceURL: "https://reword.com/",
    keywords: ["inteligencia artificial", "reescritura", "paráfrasis"],
  },
  {
    resourceTitle: "scite_",
    resourceType: "Herramientas",
    resourceURL: "https://scite.ai/",
    keywords: ["inteligencia artificial", "investigación", "citas"],
  },
  {
    resourceTitle: "ResearchAIde",
    resourceType: "Herramientas",
    resourceURL: "https://www.researchaide.org/",
    keywords: ["inteligencia artificial", "investigación", "ayuda"],
  },
  {
    resourceTitle: "ResearchRabbit",
    resourceType: "Herramientas",
    resourceURL: "https://researchrabbitapp.com/",
    keywords: ["inteligencia artificial", "investigación", "organización"],
  },
  {
    resourceTitle: "Elicit",
    resourceType: "Herramientas",
    resourceURL: "https://elicit.com/",
    keywords: ["inteligencia artificial", "encuestas", "análisis"],
  },
  {
    resourceTitle: "Explainpaper",
    resourceType: "Herramientas",
    resourceURL: "https://www.explainpaper.com/",
    keywords: ["inteligencia artificial", "investigación", "explicación"],
  },
  {
    resourceTitle: "Guide on the use of Generative AI",
    resourceType: "Lineamientos",
    resourceURL:
      "https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/guide-use-generative-ai.html",
    keywords: ["inteligencia artificial", "generación de texto", "guía"],
  },
  {
    resourceTitle: "Connected Papers",
    resourceType: "Herramientas",
    resourceURL: "https://www.connectedpapers.com/",
    keywords: ["inteligencia artificial", "investigación", "conexiones"],
  },
  {
    resourceTitle: "Las mejores IA para el investigador moderno",
    resourceType: "Sitio web",
    resourceURL:
      "https://observatorio.tec.mx/edu-news/las-mejores-ia-para-el-investigador-moderno/",
    keywords: ["inteligencia artificial", "investigación", "recomendaciones"],
  },
  

  /*
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
