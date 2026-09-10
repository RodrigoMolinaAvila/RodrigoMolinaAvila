/* ════════════════════════════════════════════════════════════════
   Sistema de traducción completo del portafolio.
   Cada clave apunta a un elemento con data-i18n="clave".
   Los arrays (facts, tokens, authors) se traducen por índice.
   ════════════════════════════════════════════════════════════════ */
const texts = {
  es: {
    navOrigen:"Sobre mí", navTrayectoria:"Trayectoria", navInvestigacion:"Investigación",
    navTaller:"El taller", navAulas:"Aulas", navPublicaciones:"Publicaciones",
    navHabilidades:"Habilidades", navCv:"CV", navContacto:"Contacto",
    heroTitle:"Rodrigo Molina Ávila",
    heroSub:"Data scientist y sociólogo computacional en IDIA, IMFD y la Universidad de Chile.",
    wordOrigen:"Origen", descOrigen:"Sociología de campo, teoría clásica y la pregunta que lo empezó todo.",
    wordTrayectoria:"Trayectoria", descTrayectoria:"Cada nodo es una experiencia; cada arista, lo que una dejó en la siguiente. Hover o clic ilumina las conexiones.",
    wordInvestigacion:"Investigación", descInvestigacion:"Cuatro líneas de trabajo, un mismo método: modelar lo social para poder explicarlo.",
    wordTaller:"El taller", descTaller:"Herramientas pequeñas nacidas de problemas reales: evaluar, automatizar, visualizar, enseñar.",
    wordAulas:"Aulas", descAulas:"Enseñar lo aprendido: interfaces de laboratorio, clases de ayudantía y presentaciones de curso.",
    wordHabilidades:"Habilidades", descHabilidades:"El stack completo: lo técnico, lo metodológico y lo sociológico, sin recortes.",
    wordPublicaciones:"Publicaciones", descPublicaciones:"Lo que quedó escrito, y lo que está en camino.",
    wordCv:"Currículum", descCv:"El registro completo, en tres idiomas.",
    leadTrayectoria:"Cada nodo es una experiencia; cada arista, lo que una dejó en la siguiente. Hover o clic ilumina las conexiones.",
    leadInterfaces:"Como ayudante del curso construí una interfaz interactiva por laboratorio: el concepto, la sintaxis y el ejercicio en una sola página. Clic abre la interfaz completa.",
    leadFds:"Cinco clases para preparar los controles de lectura del primer semestre 2026: cada una con sus lecturas, sus autores y el repaso listo para aplicar.",
    origenP0:"Partí estudiando <strong>Sociología</strong> en la Universidad Andrés Bello con una pregunta simple e insidiosa: por qué la gente termina haciendo lo que hace. Salí con título y Licenciatura con Distinción, y una sospecha que nunca me abandonó: casi nada de lo social es casualidad.",
    origenP1:"La sociología de campo llegó temprano. En <strong>2018</strong>, práctica profesional en <strong>Gendarmería de Chile</strong>: bases de datos, instrumentos y pruebas estadísticas, y trabajo de campo dentro de las cárceles Santiago 1 y CCP Puente Alto. Ver al Estado cara a cara cambia cómo uno lee las estadísticas.",
    origenP2:"Entre <strong>2021 y 2023</strong>, tres proyectos de investigación: Grounded Theory para la desigualdad geográfica en el FONDECYT Regular 11200602, una base de 48.000+ publicaciones sobre think tanks en el Postdoc 3210579, y la Convención Constituyente con el Mini COES: etnografía en el Ex Congreso y redes de expertos presentadas en el IX Congreso COES.",
    origenP3:"En <strong>2024</strong>, el salto computacional: Magíster en Ciencia de Datos en la FCFM y Data Scientist en la <strong>IDIA</strong>, con vínculos al IMFD. Mi tesis: un grafo de conocimiento de 3.143 becarios/as ANID que pregunta si el género y la clase social de origen estructuran la producción científica chilena. Aprobada, con paper en camino y plataforma pública.",
    origenP4:"En <strong>2026</strong>: consultoría cualitativa para el nuevo Magíster en IA, docencia en Grafos de Conocimiento e Information Retrieval, ayudantías en Fundamentos de la Sociología UDP, y este sitio, que es también un grafo.",
    origenQuote:"«La sociología me dio las preguntas; los datos, la disciplina para responderlas.»",
    fact0:"Sociología, UNAB, titulado con Distinción",
    fact1:"Trabajo de campo en cárceles (Gendarmería de Chile)",
    fact2:"Tres proyectos FONDECYT + Mini COES",
    fact3:"MSc Data Science FCFM + IDIA / IMFD",
    fact4:"Tesis aprobada · consultoría · docencia",
    invMeta0:"Knowledge Graph · Tesis de Magíster", invH30:"Interrogando la Academia",
    invP0:"Un grafo de conocimiento en Neo4j reconstruye la trayectoria de 3.143 becarios/as doctorales ANID: 3M+ relaciones de coautoría, 237 tópicos BERTopic y comunidades Louvain/Leiden para responder si el género y la clase social de origen estructuran lo que la ciencia chilena produce.",
    invMeta1:"NLP · Redes · COES", invH31:"Think Tanks en Tiempos de Crisis",
    invP1:"40.000+ documentos de 20+ instituciones procesados con scraping y NLP; BERTopic y análisis de redes para mapear la influencia del conocimiento experto durante la crisis chilena (2019–2023).",
    invMeta2:"Consultoría · IDIA FCFM", invH32:"Evaluación del Magíster en IA",
    invP2:"Evaluación cualitativa del nuevo Magíster Profesional en IA: focus group con egresados, entrevistas a industria y un pipeline de diarización + NLP con evidencia navegable de punta a punta.",
    invMeta2:"ML · Interpretabilidad", invH32:"Modelos predictivos becarios ANID",
    invP2:"XGBoost y SHAP sobre trayectorias académicas: qué explica el éxito de una beca doctoral. Dashboards ejecutivos para autoridades universitarias y ANID.",
    invMeta3:"Consultoría cuantitativa · Fab Consulting", invH33:"Evaluación del Programa de Valorización a la Investigación",
    invP3:"Consultor cuantitativo para la evaluación de resultados del Programa de Valorización a la Investigación (ANID): propuesta técnica elaborada para la Subsecretaría de Ciencia, Tecnología, Conocimiento e Innovación. Mayo 2025.",
    toolTag0:"App · Educación", toolH30:"UDP Control Generator",
    toolP0:"Genera controles de lectura para Fundamentos de la Sociología: preguntas, orden aleatorio y salida lista para aplicar.",
    toolTag1:"Guía · Data Science", toolH31:"Prediction Guide",
    toolP1:"Una guía de data science escrita para un amigo: qué significa aprender de datos, el pipeline como secuencia sagrada y el salto de correlación a causalidad.",
    toolTag2:"Script · Automatización", toolH32:"tntsports-jugadorexperto",
    toolP2:"Voto automático para el «jugador experto» de TNT Sports.",
    toolRetired:"jubilado con honores: ahora piden login por voto",
    toolTag3:"Viz · El origen", toolH33:"MapViz",
    toolP3:"Mi primera creación en HTML: población indígena y afrodescendiente de Latinoamérica, país por país.",
    labLang0:"OWL · Web Ontology Language", labB0:"Conceptos OWL", labP0:"Simetría, transitividad, cadenas de propiedades y mundo abierto: lo que hace razonable un grafo.",
    labLang1:"SHACL", labB1:"Validar grafos con SHACL", labP1:"Formas y restricciones: comprobar que los datos cumplen lo que la ontología promete.",
    labLang2:"SPARQL · Wikidata", labB2:"SPARQL en Wikidata", labP2:"Consultas contra el grafo del conocimiento común: millones de entidades a una query de distancia.",
    labLang3:"Cypher · GQL", labB3:"Cypher y GQL", labP3:"Dos lenguajes, un mismo grafo: de Neo4j al estándar ISO, lado a lado.",
    fdsWhen0:"Marzo", fdsB0:"Clase 1, Control de Lectura 1", fdsP0:"Qué es la sociología y qué hace del método una ciencia.",
    fdsWhen1:"Abril", fdsB1:"Clase 2, Control de Lectura 2", fdsP1:"El oficio del sociólogo y la imaginación para conectar biografía e historia.",
    fdsWhen2:"Mayo", fdsB2:"Clase 3, Control de Lectura 3", fdsP2:"Vigilar y castigar: disciplina, panóptico y organizaciones modernas.",
    fdsWhen3:"Junio", fdsB3:"Clase 4, Control de Lectura 4", fdsP3:"Clases, conflicto y el Manifiesto de 1848.",
    fdsWhen4:"Julio", fdsB4:"Clase 5, Examen", fdsP4:"Los autores del semestre puestos a dialogar entre sí: una misma idea, muchos ángulos.",
    shotB0:"Grafo de construcción del conocimiento", shotP0:"MDS7205, con Fabricio Pezzolla. Presentación de curso, como estudiante.",
    shotB1:"Relational Learning con grafos y embeddings", shotP1:"Discusión de paper para MDS7205, como estudiante.",
    shotB2:"Seminario 1", shotP2:"Presentación de seminario.",
    shotB3:"Reunión ampliada FONDECYT 11241304", shotP3:"Presentación de proyecto.",
    shotB4:"Conocimiento experto en tiempos convulsos", shotP4:"Think tanks durante las crisis políticas de Chile (2019–2023).",
    shotB5:"Presentación UAH, MiniCOES", shotP5:"Resultados 2019–2023, noviembre 2025.",
    shotB6:"Think Tank Visualizer", shotP6:"Explorador interactivo de las 40.000+ intervenciones públicas: tópicos, autores y redes filtrables por periodo.",
    shotB7:"Visualizador GDS de becarios ANID", shotP7:"Comunidades Louvain y centralidades del grafo de coautoría, con filtros por género y clase social.",
    shotB8:"Interrogando la Academia", shotP8:"La plataforma pública del proyecto: el grafo completo, navegable y abierto.",
    skillB0:"Lenguajes", skillB1:"Machine Learning", skillB2:"Grafos y redes",
    skillB3:"NLP e IA generativa", skillB4:"Ingeniería de datos",
    skillB5:"Métodos cuantitativos", skillB6:"Métodos cualitativos",
    skillB7:"Teoría sociológica", skillB8:"Visualización y BI",
    skillB9:"Documentos e investigación",
        labGroupTitle:"Interfaces de laboratorio, MDS7205 Grafos de Conocimiento",
    fdsGroupTitle:"Controles de lectura, Fundamentos de la Sociología (Bachillerato UDP)",
    postersGroupTitle:"Posters y reportes, en PDF",
    presGroupTitle:"Presentaciones",
    pubVenue0:"AMW 2026 · CEUR-WS", pubStatus0:"审稿中",
    pubH30:"Untangling the Academic Network: Analyzing Scientific Trajectories with Graphs and NLP",
    pubP0:"R. Molina Ávila, S. Ferrada Aliaga (IDIA, IMFD).",
        pubVenue0:"AMW 2026 · CEUR-WS", pubStatus0:"审稿中",
    pubVenue1:"Latin American Research Review · Cambridge UP", pubStatus1:"Reconocimiento",
    pubH31:"Think Tanks and Political Crises in Chile, 2011–2022",
    pubP1:"Agradecido por contribuciones (FONDECYT POSTDOC 3210579 / COES).",
    pubVenue2:"Sociología computacional", pubStatus2:"En progreso",
    pubH32:"Redes de influencia de think tanks chilenos (2019–2023)",
    legendEdu:"Educación", legendRes:"Investigación", legendTeach:"Docencia",
    legendConsult:"Consultoría", legendPub:"Publicación",
    footKicker:"contacto", footTitle:"Hablemos.",
    footNote:"El grafo de fondo responde a tu cursor: es la única interacción que no pide scroll.",
    detailHint:"Hover o clic en un hito."
  },
  en: {
    navOrigen:"About", navTrayectoria:"Trajectory", navInvestigacion:"Research",
    navTaller:"Workshop", navAulas:"Classrooms", navPublicaciones:"Publications",
    navHabilidades:"Skills", navCv:"CV", navContacto:"Contact",
    heroTitle:"Rodrigo Molina Ávila",
    heroSub:"Data scientist and computational sociologist at IDIA, IMFD and Universidad de Chile.",
    wordOrigen:"Origin", descOrigen:"Field sociology, classical theory, and the question that started it all.",
    wordTrayectoria:"Trajectory", descTrayectoria:"Each node is an experience; each edge, what one left in the next. Hover or click lights up the connections.",
    wordInvestigacion:"Research", descInvestigacion:"Four lines of work, one method: model the social to explain it.",
    wordTaller:"Workshop", descTaller:"Small tools born from real problems: assess, automate, visualize, teach.",
    wordAulas:"Classrooms", descAulas:"Teaching what I learned: lab interfaces, TA sessions and course presentations.",
    wordHabilidades:"Skills", descHabilidades:"The full stack: technical, methodological and sociological, no cuts.",
    wordPublicaciones:"Publications", descPublicaciones:"What got written, and what is on its way.",
    wordCv:"CV", descCv:"The complete record, in three languages.",
    leadTrayectoria:"Each node is an experience; each edge, what one left in the next. Hover or click lights up the connections.",
    leadInterfaces:"As the course TA I built an interactive interface for each lab: the concept, the syntax and the exercise on a single page. Click opens the full interface.",
    leadFds:"Five sessions to prepare the reading quizzes of the first semester 2026: each one with its readings, its authors and a review ready to apply.",
    origenP0:"I started studying <strong>Sociology</strong> at Universidad Andrés Bello with a simple, insidious question: why do people end up doing what they do. I graduated with honors, methods in hand, and a suspicion that never left me: almost nothing social is chance.",
    origenP1:"Field sociology came early. In <strong>2018</strong>, my professional internship at <strong>Gendarmería de Chile</strong>: databases, instruments and statistical tests, and fieldwork inside Santiago 1 and CCP Puente Alto prisons. Seeing the State face to face changes how you read statistics forever.",
    origenP2:"Between <strong>2021 and 2023</strong>, three research projects: Grounded Theory for geographic inequality in FONDECYT Regular 11200602, a 48,000+ publication database on think tanks in Postdoc 3210579, and the Constitutional Convention with Mini COES: ethnography at the former National Congress and expert networks presented at the IX COES Conference.",
    origenP3:"In <strong>2024</strong>, the computational turn: MSc in Data Science at FCFM and Data Scientist at <strong>IDIA</strong>, affiliated with IMFD. My thesis turned that dual training into an object: a knowledge graph of 3,143 ANID fellows asking whether gender and social class of origin structure Chilean science. Approved, with a paper underway and a public platform.",
    origenP4:"In <strong>2026</strong>: qualitative consulting for the new AI Master's, teaching in Knowledge Graphs and Information Retrieval, TA sessions in Fundamentals of Sociology at UDP, and this site, which is also a graph.",
    origenQuote:"\"Sociology gave me the questions; data, the discipline to answer them.\"",
    fact0:"Sociology, UNAB, graduated with Distinction",
    fact1:"Fieldwork in prisons (Gendarmería de Chile)",
    fact2:"Three FONDECYT projects + Mini COES",
    fact3:"MSc Data Science FCFM + IDIA / IMFD",
    fact4:"Thesis approved · consulting · teaching",
    invMeta0:"Knowledge Graph · Master's Thesis", invH30:"Interrogating the Academy",
    invP0:"A Neo4j knowledge graph reconstructs the trajectory of 3,143 ANID doctoral fellows: 3M+ co-authorship edges, 237 BERTopic topics and Louvain/Leiden communities to answer whether gender and social class structure what Chilean science produces.",
    invMeta1:"NLP · Networks · COES", invH31:"Think Tanks in Times of Crisis",
    invP1:"40,000+ documents from 20+ institutions processed with scraping and NLP; BERTopic and network analysis to map expert influence during the Chilean crisis (2019–2023).",
    invMeta2:"Consulting · IDIA FCFM", invH32:"AI Master's Program Evaluation",
    invP2:"Qualitative evaluation of the new Professional Master's in AI: focus group with alumni, industry interviews and a diarization + NLP pipeline with navigable evidence end to end.",
    invMeta3:"Quantitative Consulting · Fab Consulting", invH33:"Research Valorization Program Evaluation",
    invP3:"Quantitative consultant for the results evaluation of the Research Valorization Program (ANID): technical proposal for the Undersecretariat of Science, Technology, Knowledge and Innovation. May 2025.",
    toolTag0:"App · Education", toolH30:"UDP Control Generator",
    toolP0:"Generates reading quizzes for Fundamentals of Sociology: questions, random order, print-ready output.",
    toolTag1:"Guide · Data Science", toolH31:"Prediction Guide",
    toolP1:"A data science guide written for a friend: what learning from data means, the pipeline as sacred sequence, and the jump from correlation to causation.",
    toolTag2:"Script · Automation", toolH32:"tntsports-jugadorexperto",
    toolP2:"Automatic voting for TNT Sports' \"expert player\".",
    toolRetired:"retired with honors — login now required per vote",
    toolTag3:"Viz · The origin", toolH33:"MapViz",
    toolP3:"My first HTML creation: Indigenous and African descendant population across Latin America, country by country.",
    labLang0:"OWL · Web Ontology Language", labB0:"OWL Concepts", labP0:"Symmetry, transitivity, property chains and the open world: what makes a graph reasonable.",
    labLang1:"SHACL", labB1:"Validating graphs with SHACL", labP1:"Shapes and constraints: checking that data keeps what the ontology promises.",
    labLang2:"SPARQL · Wikidata", labB2:"SPARQL on Wikidata", labP2:"Queries against the common knowledge graph: millions of entities one query away.",
    labLang3:"Cypher · GQL", labB3:"Cypher and GQL", labP3:"Two languages, one graph: from Neo4j to the ISO standard, side by side.",
    fdsWhen0:"March", fdsB0:"Session 1, Reading Quiz 1", fdsP0:"What sociology is and what makes its method a science.",
    fdsWhen1:"April", fdsB1:"Session 2, Reading Quiz 2", fdsP1:"The sociologist's craft and the imagination connecting biography and history.",
    fdsWhen2:"May", fdsB2:"Session 3, Reading Quiz 3", fdsP2:"Discipline, the panopticon and modern organizations.",
    fdsWhen3:"June", fdsB3:"Session 4, Reading Quiz 4", fdsP3:"Classes, conflict and the Manifesto of 1848.",
    fdsWhen4:"July", fdsB4:"Session 5, Exam", fdsP4:"The semester's authors in dialogue: one idea, many angles.",
    shotB0:"Knowledge construction graph", shotP0:"MDS7205 · with Fabricio Pezzolla — as a student",
    shotB1:"Relational Learning with graphs and embeddings", shotP1:"Paper discussion · MDS7205 — as a student",
    shotB2:"Seminar 1", shotP2:"Seminar presentation",
    shotB3:"FONDECYT 11241304 extended meeting", shotP3:"Project presentation",
    shotB4:"Expert knowledge in turbulent times", shotP4:"Think tanks during Chile's political crises (2019–2023)",
    shotB5:"UAH presentation, MiniCOES", shotP5:"Findings 2019–2023, November 2025",
    shotB6:"Think Tank Visualizer", shotP6:"Interactive explorer of 40,000+ public interventions: topics, authors and networks filterable by period.",
    shotB7:"GDS Visualizer of ANID fellows", shotP7:"Louvain communities and centralities of the co-authorship graph, filterable by gender and social class.",
    shotB8:"Interrogating the Academy", shotP8:"The project's public platform: the complete graph, navigable and open.",
    skillB0:"Languages", skillB1:"Machine Learning", skillB2:"Graphs and networks",
    skillB3:"NLP and generative AI", skillB4:"Data engineering",
    skillB5:"Quantitative methods", skillB6:"Qualitative methods",
    skillB7:"Sociological theory", skillB8:"Visualization and BI",
    skillB9:"Documents and research",
        labGroupTitle:"Lab interfaces, MDS7205 Knowledge Graphs",
    fdsGroupTitle:"Reading quizzes, Fundamentals of Sociology (Bachillerato UDP)",
    postersGroupTitle:"Posters and reports, in PDF",
    presGroupTitle:"Presentations",
    pubVenue0:"AMW 2026 · CEUR-WS", pubStatus0:"Under review",
    pubH30:"Untangling the Academic Network: Analyzing Scientific Trajectories with Graphs and NLP",
    pubP0:"R. Molina Ávila, S. Ferrada Aliaga (IDIA, IMFD).",
    pubVenue1:"Latin American Research Review · Cambridge UP", pubStatus1:"Acknowledgment",
    pubH31:"Think Tanks and Political Crises in Chile, 2011–2022",
    pubP1:"Acknowledged for contributions (FONDECYT POSTDOC 3210579 / COES).",
    pubVenue2:"Computational sociology", pubStatus2:"In progress",
    pubH32:"Influence networks of Chilean think tanks (2019–2023)",
    legendEdu:"Education", legendRes:"Research", legendTeach:"Teaching",
    legendConsult:"Consulting", legendPub:"Publication",
    footKicker:"contact", footTitle:"Let's talk.",
    footNote:"The background graph responds to your cursor: the only interaction that asks no scrolling.",
    detailHint:"Hover or click a milestone."
  },
  zh: {
    navOrigen:"关于我", navTrayectoria:"经历", navInvestigacion:"研究",
    navTaller:"工作坊", navAulas:"课堂", navPublicaciones:"出版物",
    navHabilidades:"技能", navCv:"简历", navContacto:"联系",
    heroTitle:"羅德里戈·莫利納·阿維拉 - Rodrigo Molina Ávila",
    heroSub:"数据科学家与计算社会学家，任职于 IDIA、IMFD 与智利大学。",
    wordOrigen:"起源", descOrigen:"田野社会学、经典理论与那个开启一切的问题。",
    wordTrayectoria:"经历", descTrayectoria:"每个节点是一段经历；每条边，是前一个留给后一个的。悬停或点击点亮连接。",
    wordInvestigacion:"研究", descInvestigacion:"四条工作线，同一个方法：建模社会以解释社会。",
    wordTaller:"工作坊", descTaller:"源于真实问题的小工具：评估、自动化、可视化、教学。",
    wordAulas:"课堂", descAulas:"教授所学：实验室界面、助教课程与课程演示。",
    wordHabilidades:"技能", descHabilidades:"完整技术栈：技术、方法论与社会学，不加删减。",
    wordPublicaciones:"出版物", descPublicaciones:"已写下的，与正在进行的。",
    wordCv:"简历", descCv:"完整记录，三种语言。",
    leadTrayectoria:"每个节点是一段经历；每条边，是前一个留给后一个的。悬停或点击点亮连接。",
    leadInterfaces:"作为课程助教，我为每个实验室构建了交互界面：概念、语法与练习，一页呈现。点击打开完整界面。",
    leadFds:"2026年第一学期的五次阅读测验准备课：每次都有阅读材料、作者与随时可用的复习。",
    origenP0:"我在安德斯·贝洛大学学习<strong>社会学</strong>，开始时只有一个简单的问题：为什么人们最终做他们所做的事。毕业时获优等学位，带着一个从未离开我的怀疑：社会之事几乎没有偶然。",
    origenP1:"田野社会学来得很早。<strong>2018</strong>年，在<strong>智利监狱管理局</strong>进行专业实习：数据库、工具与统计检验，以及在圣地亚哥1号和Puente Alto监狱的田野工作。面对面看到国家，永远改变你阅读统计的方式。",
    origenP2:"<strong>2021至2023年</strong>，三个研究项目：FONDECYT Regular 11200602 的扎根理论、Postdoc 3210579 的 48,000+ 出版物数据库，以及 Mini COES 的制宪会议：前国民议会的民族志与专家网络，并在 2022 年第九届 COES 大会上报告。",
    origenP3:"<strong>2024年</strong>，计算转向：智利大学 FCFM 数据科学硕士，任职于 <strong>IDIA</strong>，关联 IMFD。我的论文将双重训练化为一个对象：3,143 名 ANID 博士生的知识图谱，追问性别与社会阶层是否结构化智利的科学生产。已通过，论文投稿中，公开平台上线。",
    origenP4:"<strong>2026年</strong>：为新设 AI 硕士进行定性咨询，知识图谱与信息检索助教，UDP 社会学基础助教，以及这个本身也是图的网站。",
    origenQuote:"「社会学给了我问题；数据，给了我回答它们的纪律。」",
    fact0:"社会学，UNAB，优等毕业",
    fact1:"监狱田野工作（智利监狱管理局）",
    fact2:"三个 FONDECYT 项目 + Mini COES",
    fact3:"MSc 数据科学 FCFM + IDIA / IMFD",
    fact4:"论文通过 · 咨询 · 教学",
    invMeta0:"知识图谱 · 硕士论文", invH30:"Interrogating the Academy",
    invP0:"Neo4j 知识图谱重建 3,143 名 ANID 博士生的轨迹：3M+ 合著关系、237 个 BERTopic 主题与 Louvain/Leiden 社区，回答性别与社会阶层是否结构化智利科学。",
    invMeta1:"NLP · 网络 · COES", invH31:"危机中的智库",
    invP1:"20+ 机构的 40,000+ 文档，以爬虫与 NLP 处理；BERTopic 与网络分析映射智利危机期间的专家影响（2019–2023）。",
    invMeta2:"咨询 · IDIA FCFM", invH32:"AI 硕士项目评估",
    invP2:"新设职业型 AI 硕士的定性评估：毕业生焦点小组、业界访谈，以及端到端可追溯的语音分离与 NLP 管线。",
    invMeta3:"定量咨询 · Fab Consulting", invH33:"研究价值提升计划评估",
    invP3:"为 ANID 研究价值提升计划成果评估担任定量顾问：向科学、技术、知识与创新的副部提交技术提案。2025年5月。",
    toolTag0:"应用 · 教育", toolH30:"UDP Control Generator",
    toolP0:"为社会学基础生成阅读测验：问题、随机顺序、随时可打印。",
    toolTag1:"指南 · 数据科学", toolH31:"Prediction Guide",
    toolP1:"为朋友写的数据科学指南：从数据中学习意味着什么、流水线的神圣顺序、从相关到因果。",
    toolTag2:"脚本 · 自动化", toolH32:"tntsports-jugadorexperto",
    toolP2:"TNT Sports「专家玩家」自动投票。",
    toolRetired:"光荣退役 — 现在每次投票都要登录",
    toolTag3:"可视化 · 起点", toolH33:"MapViz",
    toolP3:"我的第一个 HTML 作品：拉丁美洲各国原住民与非洲裔人口。",
    labLang0:"OWL · 网络本体语言", labB0:"OWL 概念", labP0:"对称、传递、属性链与开放世界：让图可推理的基础。",
    labLang1:"SHACL", labB1:"用 SHACL 验证图", labP1:"形状与约束：检验数据是否兑现本体的承诺。",
    labLang2:"SPARQL · Wikidata", labB2:"Wikidata 上的 SPARQL", labP2:"对公共知识图谱的查询：一次 query，百万实体。",
    labLang3:"Cypher · GQL", labB3:"Cypher 与 GQL", labP3:"两种语言，同一个图：从 Neo4j 到 ISO 标准，并排对照。",
    fdsWhen0:"三月", fdsB0:"第一课，阅读测验 1", fdsP0:"什么是社会学，方法如何成为科学。",
    fdsWhen1:"四月", fdsB1:"第二课，阅读测验 2", fdsP1:"社会学家的手艺与连接传记和历史的想象力。",
    fdsWhen2:"五月", fdsB2:"第三课，阅读测验 3", fdsP2:"监视与惩罚：规训、全景监狱与现代组织。",
    fdsWhen3:"六月", fdsB3:"第四课，阅读测验 4", fdsP3:"阶级、冲突与 1848 年的宣言。",
    fdsWhen4:"七月", fdsB4:"第五课，考试", fdsP4:"让本学期的作者们彼此对话：同一个想法，不同的角度。",
    shotB0:"知识建构图", shotP0:"MDS7205 · 与 Fabricio Pezzolla — 学生时期",
    shotB1:"图与嵌入的关系学习", shotP1:"MDS7205 的论文讨论 — 学生时期",
    shotB2:"研讨课 1", shotP2:"研讨课演示",
    shotB3:"FONDECYT 11241304 扩大会议", shotP3:"项目演示",
    shotB4:"动荡时期的专家知识", shotP4:"智利政治危机中的智库（2019–2023）",
    shotB5:"UAH 演示，MiniCOES", shotP5:"2019–2023 结果，2025年11月",
    shotB6:"智库可视化器", shotP6:"40,000+ 公共干预的交互式探索：主题、作者与可按时期过滤的网络。",
    shotB7:"ANID 学生的 GDS 可视化器", shotP7:"合著图的 Louvain 社区与中心性，可按性别与社会阶层过滤。",
    shotB8:"Interrogating the Academy", shotP8:"项目的公开平台：完整、可导航且开放的图。",
    skillB0:"语言", skillB1:"机器学习", skillB2:"图与网络",
    skillB3:"NLP 与生成式 AI", skillB4:"数据工程",
    skillB5:"定量方法", skillB6:"定性方法",
    skillB7:"社会学理论", skillB8:"可视化与 BI",
    skillB9:"文档与研究",
            labGroupTitle:"实验室界面，MDS7205 知识图谱",
    fdsGroupTitle:"阅读测验，社会学基础（Bachillerato UDP）",
    postersGroupTitle:"海报与报告，PDF",
    presGroupTitle:"演示",
    pubVenue0:"AMW 2026 · CEUR-WS", pubStatus0:"审稿中",
    pubH30:"Untangling the Academic Network: Analyzing Scientific Trajectories with Graphs and NLP",
    pubP0:"R. Molina Ávila, S. Ferrada Aliaga (IDIA, IMFD).",
    pubVenue1:"Latin American Research Review · Cambridge UP", pubStatus1:"致谢",
    pubH31:"Think Tanks and Political Crises in Chile, 2011–2022",
    pubP1:"因对智利智库研究的贡献而获致谢（FONDECYT POSTDOC 3210579 / COES）。",
    pubVenue2:"计算社会学", pubStatus2:"进行中",
    pubH32:"智利智库的影响网络（2019–2023）",
    legendEdu:"教育", legendRes:"研究", legendTeach:"教学",
    legendConsult:"咨询", legendPub:"出版",
    footKicker:"联系", footTitle:"聊聊吧。",
    footNote:"背景图会回应你的光标：这是唯一不需要滚动的交互。",
    detailHint:"悬停或点击一个里程碑。"
  }
};

function applyLang(l){
  const t=texts[l];
  // nav + rail
  const navMap={
    '#origen':t.navOrigen, '#trayectoria':t.navTrayectoria,
    '#investigacion':t.navInvestigacion, '#taller':t.navTaller,
    '#aulas':t.navAulas, '#publicaciones':t.navPublicaciones,
    '#habilidades':t.navHabilidades, '#cv':t.navCv, '#contacto':t.navContacto
  };
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href=a.getAttribute('href');
    if(navMap[href]) a.textContent=navMap[href];
  });
  document.querySelectorAll('.rail a span').forEach(s=>{
    const href=s.closest('.rail a').getAttribute('href');
    if(navMap[href]) s.textContent=navMap[href];
  });
  // hero
  const heroH=document.querySelector('.hero h1');
  if(heroH) heroH.innerHTML=t.heroTitle;
  const heroS=document.querySelector('.hero p.sub');
  if(heroS) heroS.textContent=t.heroSub;
  // capítulos: palabra + descripción
  document.querySelectorAll('.chapter').forEach(ch=>{
    const id=ch.id;
    const wordEl=ch.querySelector('.chapter-word');
    const descEl=ch.querySelector('.chapter-desc');
    if(wordEl && t['word'+id.charAt(0).toUpperCase()+id.slice(1)]) wordEl.textContent=t['word'+id.charAt(0).toUpperCase()+id.slice(1)];
    if(descEl && t['desc'+id.charAt(0).toUpperCase()+id.slice(1)]) descEl.textContent=t['desc'+id.charAt(0).toUpperCase()+id.slice(1)];
  });
  // origen: párrafos + cita + facts
  const origenCopy=document.querySelector('#origen .origen-copy');
  if(origenCopy){
    const ps=origenCopy.querySelectorAll(':scope > p');
    ps.forEach((p,i)=>{ if(t['origenP'+i]!==undefined) p.innerHTML=t['origenP'+i]; });
    const bq=origenCopy.querySelector('blockquote');
    if(bq && t.origenQuote) bq.textContent=t.origenQuote;
  }
  document.querySelectorAll('#origen .fact span').forEach((sp,i)=>{
    if(t['fact'+i]!==undefined) sp.textContent=t['fact'+i];
  });
  // leads por sección
  const leadMap={
    '#trayectoria':t.leadTrayectoria, '#aulas':t.leadAulas
  };
  Object.keys(leadMap).forEach(sel=>{
    const sec=document.querySelector(sel);
    if(sec){ const lead=sec.querySelector('.lead'); if(lead) lead.textContent=leadMap[sel]; }
  });
  // group-h de aulas
  const aulasGroups=document.querySelectorAll('#aulas .group-h');
  const groupKeys=['labGroupTitle','fdsGroupTitle','postersGroupTitle','presGroupTitle'];
  aulasGroups.forEach((g,i)=>{
    if(t[groupKeys[i]]) g.textContent=t[groupKeys[i]];
  });
  // inv-body (investigación)
  document.querySelectorAll('#investigacion .inv-body').forEach((body,i)=>{
    const meta=body.querySelector('.meta-line');
    const h3=body.querySelector('h3');
    const p=body.querySelector('p');
    if(meta && t['invMeta'+i]) meta.textContent=t['invMeta'+i];
    if(h3 && t['invH3'+i]) h3.textContent=t['invH3'+i];
    if(p && t['invP'+i]) p.innerHTML=t['invP'+i];
  });
  // tools
  document.querySelectorAll('#taller .tool').forEach((tool,i)=>{
    const tag=tool.querySelector('.tag');
    const h3=tool.querySelector('h3');
    const p=tool.querySelector('p');
    if(tag && t['toolTag'+i]) tag.textContent=t['toolTag'+i];
    if(h3 && t['toolH3'+i]) h3.textContent=t['toolH3'+i];
    if(p && t['toolP'+i]) p.innerHTML=t['toolP'+i];
  });
  // labs
  document.querySelectorAll('#aulas .aula').forEach((aula,i)=>{
    const lang=aula.querySelector('.lang');
    const b=aula.querySelector('.meta b');
    const p=aula.querySelector('.meta p');
    if(lang && t['labLang'+i]) lang.textContent=t['labLang'+i];
    if(b && t['labB'+i]) b.textContent=t['labB'+i];
    if(p && t['labP'+i]) p.textContent=t['labP'+i];
  });
  // fds
  document.querySelectorAll('#aulas .fds-card').forEach((card,i)=>{
    const when=card.querySelector('.when');
    const b=card.querySelector('.meta b');
    const p=card.querySelector('.meta p');
    if(when && t['fdsWhen'+i]) when.textContent=t['fdsWhen'+i];
    if(b && t['fdsB'+i]) b.textContent=t['fdsB'+i];
    if(p && t['fdsP'+i]) p.textContent=t['fdsP'+i];
  });
  // shot-rows y shot-cards de aulas (presentaciones + visualizadores)
  const shotMetas=document.querySelectorAll('#aulas .shot-meta b, #aulas .shot-meta p');
  // shot-rows: b y p alternan
  const shotBs=[...document.querySelectorAll('#aulas .shot-meta b')];
  const shotPs=[...document.querySelectorAll('#aulas .shot-meta p')];
  shotBs.forEach((b,i)=>{ if(t['shotB'+i]!==undefined) b.textContent=t['shotB'+i]; });
  shotPs.forEach((p,i)=>{ if(t['shotP'+i]!==undefined) p.textContent=t['shotP'+i]; });
  // skill-blocks
  document.querySelectorAll('#habilidades .skill-block b').forEach((b,i)=>{
    if(t['skillB'+i]!==undefined) b.textContent=t['skillB'+i];
  });
  // publicaciones
  const pubs=document.querySelectorAll('#publicaciones .pub');
  pubs.forEach((pub,i)=>{
    const venue=pub.querySelector('.venue');
    const status=pub.querySelector('.status');
    const h3=pub.querySelector('h3');
    const p=pub.querySelector('p');
    if(venue && t['pubVenue'+i]) venue.textContent=t['pubVenue'+i];
    if(status && t['pubStatus'+i]) status.textContent=t['pubStatus'+i];
    if(h3 && t['pubH3'+i]) h3.textContent=t['pubH3'+i];
    if(p && t['pubP'+i]!==undefined) p.innerHTML=t['pubP'+i];
  });
  // footer
  const fk=document.querySelector('footer .kicker');
  if(fk && t.footKicker) fk.textContent=t.footKicker;
  const ft=document.querySelector('footer h2');
  if(ft && t.footTitle) ft.textContent=t.footTitle;
  const fn=document.querySelector('.copyright');
  if(fn && t.footNote) fn.innerHTML=t.footNote;
  // detail hint
  const hint=document.querySelector('#detail p');
  if(hint && t.detailHint) hint.textContent=t.detailHint;
  // botones de idioma
  ['es','en','zh'].forEach(lang=>{
    const btn=document.getElementById('btn-'+lang);
    if(btn){ btn.style.background=lang===l?'var(--accent)':'transparent'; btn.style.color=lang===l?'var(--accent-ink)':'var(--ink)'; btn.style.borderColor=lang===l?'var(--accent)':'var(--border)'; }
  });
  document.documentElement.lang=l==='zh'?'zh':l;
}
