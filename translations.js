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
    heroSub:"Data Scientist · Sociólogo Computacional",
    wordOrigen:"Origen", descOrigen:"De la sociología de campo a los grafos de conocimiento: la historia completa.",
    wordTrayectoria:"Trayectoria", descTrayectoria:"Cada nodo es una experiencia; cada arista, lo que una dejó en la siguiente. Hover o clic ilumina las conexiones.",
    wordInvestigacion:"Investigación", descInvestigacion:"Cuatro líneas de trabajo, un mismo método: modelar lo social para poder explicarlo.",
    wordTaller:"El taller", descTaller:"Herramientas pequeñas nacidas de problemas reales: evaluar, automatizar, visualizar, enseñar.",
    wordAulas:"Aulas", descAulas:"Enseñar lo aprendido: interfaces de laboratorio, clases de ayudantía y presentaciones de curso.",
    wordFormacion:"Formación", wordHabilidades:"Habilidades", descFormacion:"El magíster, curso por curso: qué aprendí y qué construí en cada uno.",
    descHabilidades:"El stack completo: lo técnico, lo metodológico y lo sociológico, sin recortes.",
    wordPublicaciones:"Publicaciones", descPublicaciones:"Lo que quedó escrito, y lo que está en camino.",
    wordCv:"Currículum", descCv:"El registro completo, en tres idiomas.",
    leadTrayectoria:"Cada nodo es una experiencia; cada arista, lo que una dejó en la siguiente. Hover o clic ilumina las conexiones.",
    leadInterfaces:"Como ayudante del curso construí una interfaz interactiva por laboratorio: el concepto, la sintaxis y el ejercicio en una sola página. Clic abre la interfaz completa.",
    leadFds:"Cinco clases para preparar los controles de lectura del primer semestre 2026: cada una con sus lecturas, sus autores y el repaso listo para aplicar.",
    origenP0:"Partí estudiando <strong>Sociología</strong> en la Universidad Andrés Bello con una pregunta simple e insidiosa: por qué la gente termina haciendo lo que hace. Salí con título y Licenciatura con Distinción, y una sospecha que nunca me abandonó: casi nada de lo social es casualidad.",
    origenP1:"La sociología de campo llegó temprano. En <strong>2018</strong>, práctica profesional en <strong>Gendarmería de Chile</strong>, en el Departamento de Clasificación y Segmentación de la Dirección Nacional: bases de datos, instrumentos y pruebas estadísticas, y trabajo de campo dentro de las cárceles Santiago 1 y CCP Puente Alto. Ver al Estado cara a cara cambia cómo uno lee las estadísticas. Ahí aprendí que un dato administrativo es, antes que nada, una decisión sobre personas.",
    origenP2:"Entre <strong>2021 y 2023</strong> trabajé en tres proyectos que me enseñaron a sostener una pregunta durante años. Grounded Theory para la desigualdad geográfica en el FONDECYT Regular 11200602. Una base de 48.000+ publicaciones sobre think tanks chilenos en el Postdoc 3210579, donde descubrí que podía automatizar lo que antes se hacía a mano. Y la Convención Constituyente con el Mini COES: entrevistas, etnografía en el Ex Congreso y redes de expertos, presentadas en el IX Congreso COES.",
    origenP3:"En paralelo llegaron mis primeras ayudantías en la Facultad de Gobierno de la Universidad de Chile: Política Latinoamericana y Comportamiento Humano en la Organización con el profesor Luis Garrido Vergara, y Análisis Empírico de Políticas Públicas con Juan Carlos Cortázar. Enseñar me obligó a ordenar lo que creía saber.",
    origenP4:"En <strong>2024</strong> llegó el salto. Entré al Magíster en Ciencia de Datos de la FCFM y, casi al mismo tiempo, a la Iniciativa de Datos e Inteligencia Artificial (<strong>IDIA</strong>), con vínculos al Instituto Milenio Fundamento de los Datos (IMFD). Pasé de analizar datos a construirlos: pipelines, grafos, modelos. La sociología me había dado las preguntas; la ingeniería me dio la infraestructura para responderlas a escala.",
    origenP5:"Mi tesis fue el proyecto que unió las dos mitades. Construí un grafo de conocimiento en Neo4j con 16 tipos de nodos y 15 tipos de relaciones —más de tres millones de aristas de coautoría— para reconstruir la trayectoria de 3.143 becarios y becarias doctorales ANID. Sobre eso corrí detección de comunidades, métricas de centralidad validadas contra modelos nulos y topic modeling con BERTopic sobre 26.071 publicaciones. La pregunta de fondo seguía siendo sociológica: si el género y la clase social de origen estructuran lo que la ciencia chilena produce. La tesis se defendió, el paper se aceptó en <strong>AMW 2026</strong> como primer autor, y la plataforma quedó pública y navegable.",
    origenP6:"Entre medio tendí el puente hacia el mundo aplicado. En mayo de 2025 fui consultor cuantitativo para Fab Consulting en la evaluación del Programa de Valorización a la Investigación de ANID, con propuesta técnica para la Subsecretaría de Ciencia, Tecnología, Conocimiento e Innovación. Y en 2026, consultoría cualitativa para el nuevo Magíster Profesional en IA de la FCFM: focus group con egresados, entrevistas a la industria y un pipeline completo de diarización, transcripción y NLP con evidencia navegable de punta a punta.",
    origenP7:"La docencia creció conmigo. En 2026 fui ayudante de Grafos de Conocimiento en el Magíster en Ciencia de Datos, de Fundamentos de la Sociología en el Bachillerato de la UDP, y de Information Retrieval en el Diplomado en Ciencias de la Computación. Desde agosto de 2026 soy <strong>Profesor Auxiliar de Procesamiento de Lenguaje Natural</strong> en ese mismo diplomado: mi primer curso a cargo. También co-guíe la memoria de título de Matías Vega, que terminó en una plataforma pública de datos sobre financiamiento de la ciencia en Chile.",
    origenP8:"Hoy cierro un ciclo y abro otro. La sociología me enseñó a preguntar; la ciencia de datos, a responder con evidencia; la docencia, a explicarlo; y la consultoría, a que sirva. Trabajo en la intersección entre grafos de conocimiento, procesamiento de lenguaje natural e ingeniería de datos, con una convicción que no ha cambiado desde 2014: casi nada de lo social es casualidad, y casi todo se puede modelar.",
    origenQuote:"«La sociología me dio las preguntas; los datos, la disciplina para responderlas.»",
    fact0:"Sociología, UNAB, titulado con Distinción",
    fact1:"Trabajo de campo en cárceles (Gendarmería de Chile)",
    fact2:"Tres proyectos FONDECYT + Mini COES",
    fact3:"MSc Data Science FCFM + IDIA / IMFD",
    fact4:"Consultoría ANID e IDIA · docencia",
    fact5:"Tesis defendida · paper aceptado en AMW 2026",
    invMeta0:"Knowledge Graph · Tesis de Magíster", invH30:"Interrogando la Academia",
    invP0:"Un grafo de conocimiento en Neo4j reconstruye la trayectoria de 3.143 becarios/as doctorales ANID: 3M+ relaciones de coautoría, 237 tópicos BERTopic y comunidades Louvain/Leiden para responder si el género y la clase social de origen estructuran lo que la ciencia chilena produce.",
    invMeta1:"NLP · Redes · COES", invH31:"Think Tanks en Tiempos de Crisis",
    invP1:"40.000+ documentos de 20+ instituciones procesados con scraping y NLP; BERTopic y análisis de redes para mapear la influencia del conocimiento experto durante la crisis chilena (2019–2023).",
    invMeta2:"Consultoría · IDIA FCFM", invH32:"Evaluación del Magíster en IA",
    invP2:"Evaluación cualitativa del nuevo Magíster Profesional en IA: focus group con egresados, entrevistas a industria y un pipeline de diarización + NLP con evidencia navegable de punta a punta.",
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
    toolTag4:"Viz · Mercado", toolH34:"Panorama Competitivo · Palta Chilena",
    toolP4:"Un deck autocontenido de 25 láminas sobre el mercado de la palta: scraping de ODEPA y Paltas de Chile, mapas interactivos en D3.js y análisis competitivo de exportadores.",
    rolesH:"Docencia",
    roleA0:"2026", roleB0:"Profesor Auxiliar — Procesamiento de Lenguaje Natural", roleC0:"Diplomado en Ciencias de la Computación, FCFM",
    roleA1:"2026", roleB1:"Ayudante — Information Retrieval", roleC1:"Diplomado en Ciencias de la Computación, FCFM",
    roleA2:"2026", roleB2:"Ayudante — Grafos de Conocimiento", roleC2:"Magíster en Ciencia de Datos, FCFM",
    roleA3:"2026", roleB3:"Ayudante — Fundamentos de la Sociología", roleC3:"Bachillerato, Universidad Diego Portales",
    roleA4:"2025–26", roleB4:"Co-guía de memoria de título", roleC4:"DCC, FCFM, Universidad de Chile",
    roleA5:"2022", roleB5:"Ayudante — Política Latinoamericana", roleC5:"Facultad de Gobierno, U. de Chile",
    roleA6:"2022", roleB6:"Ayudante — Comportamiento Humano en la Organización", roleC6:"Facultad de Gobierno, U. de Chile",
    roleA7:"2022", roleB7:"Ayudante — Análisis Empírico de Políticas Públicas", roleC7:"Facultad de Gobierno, U. de Chile",
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
    leadFormacion:"Trece cursos entre 2024 y 2026 en la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile. No los listo como materias aprobadas, sino por lo que cada uno dejó: los métodos, las herramientas y el trabajo real que salió de ahí.",
    cursoH0:"Minería de datos",
    cursoP0:"Todos los métodos clásicos del análisis de datos y sus validaciones.",
    cursoW0:"Trabajé con la Encuesta Nacional de Empleo: reducción de dimensionalidad, clustering y modelos ensamblados sobre datos reales.",
    cursoT0:"<span class=\"tok\">k-means</span><span class=\"tok\">SVM</span><span class=\"tok\">DBSCAN</span><span class=\"tok\">PCA</span><span class=\"tok\">t-SNE</span><span class=\"tok\">UMAP</span><span class=\"tok\">Random Forest</span><span class=\"tok\">XGBoost</span><span class=\"tok\">CatBoost</span>",
    cursoH1:"Estadística",
    cursoP1:"Estadística inferencial: distribuciones normal, binomial, beta, Poisson y Dirichlet; OLS, MLE y los supuestos de OLS.",
    cursoW1:"Análisis del lobby de la Cámara de Diputados y Senadores en series de tiempo.",
    cursoT1:"<span class=\"tok\">normal</span><span class=\"tok\">binomial</span><span class=\"tok\">beta</span><span class=\"tok\">Poisson</span><span class=\"tok\">Dirichlet</span><span class=\"tok\">OLS</span><span class=\"tok\">MLE</span><span class=\"tok\">supuestos OLS</span>",
    cursoH2:"Bases de datos",
    cursoP2:"Métodos, términos y conceptos clave de las bases de datos SQL.",
    cursoW2:"",
    cursoT2:"<span class=\"tok\">INNER / OUTER JOIN</span><span class=\"tok\">LEFT / RIGHT JOIN</span><span class=\"tok\">MERGE</span><span class=\"tok\">vistas</span><span class=\"tok\">COUNT</span><span class=\"tok\">nociones de memoria</span><span class=\"tok\">construcción de queries</span><span class=\"tok\">mejores prácticas</span>",
    cursoH3:"Aprendizaje de máquinas",
    cursoP3:"Las matemáticas y los conceptos teóricos base de la inteligencia computacional.",
    cursoW3:"",
    cursoT3:"<span class=\"tok\">SGD</span><span class=\"tok\">pseudoinversa de Moore-Penrose</span><span class=\"tok\">álgebra lineal</span><span class=\"tok\">Bayes</span>",
    cursoH4:"Proyecto de ciencia de datos",
    cursoP4:"Trabajo directo con el INE y la Encuesta Nacional de Empleo.",
    cursoW4:"Construí un diagnóstico de outliers para el modelo ARIMA X13-SEATS de la tasa de desocupación.",
    cursoT4:"<span class=\"tok\">INE</span><span class=\"tok\">ARIMA X13-SEATS</span><span class=\"tok\">diagnóstico de outliers</span><span class=\"tok\">series de tiempo</span>",
    cursoH5:"Laboratorio de programación científica",
    cursoP5:"Programación y ciencia de datos con foco en calidad, rigor y fundamentos teóricos.",
    cursoW5:"Un recorrido por las mejores prácticas que uso hasta hoy: evitar el data leakage, pipelines reproducibles y monitoreo de drift.",
    cursoT5:"<span class=\"tok\">POO en Python</span><span class=\"tok\">Plotly</span><span class=\"tok\">pipelines scikit-learn</span><span class=\"tok\">anti data-leakage</span><span class=\"tok\">Prophet</span><span class=\"tok\">XGBoost</span><span class=\"tok\">Optuna con pruning</span><span class=\"tok\">SHAP</span><span class=\"tok\">Docker</span><span class=\"tok\">Airflow (data drift)</span>",
    cursoH6:"Análisis de datos e inferencia causal",
    cursoP6:"Las nociones más profundas de la inferencia estadística, a nivel causal.",
    cursoW6:"Interpretación de sesgo de variable omitida, sesgo de selección y variables latentes sobre casos reales.",
    cursoT6:"<span class=\"tok\">ATE</span><span class=\"tok\">CATE</span><span class=\"tok\">sesgo de variable omitida</span><span class=\"tok\">sesgo de selección</span><span class=\"tok\">variables latentes</span>",
    cursoH7:"Taller de visualización de datos",
    cursoP7:"El uso y la relevancia del storytelling con datos, con las herramientas que uso hasta el día de hoy.",
    cursoW7:"Perfeccioné el dashboard de la Convención Constitucional que había construido como asistente de investigación.",
    cursoT7:"<span class=\"tok\">D3.js</span><span class=\"tok\">Power BI</span><span class=\"tok\">storytelling</span>",
    cursoH8:"Grafos de conocimiento — La luz",
    cursoP8:"Desde la base hasta lo avanzado: ontologías, validación, embeddings y consulta de grafos.",
    cursoW8:"Transformé mi trabajo de asistente de investigación sobre clase social y género en un property graph multi-fuente. De aquí salió la tesis.",
    cursoT8:"<span class=\"tok\">RDF</span><span class=\"tok\">RDFS</span><span class=\"tok\">OWL</span><span class=\"tok\">SHACL</span><span class=\"tok\">graph embeddings</span><span class=\"tok\">Neo4j</span><span class=\"tok\">property graphs</span><span class=\"tok\">centralidad</span><span class=\"tok\">GQL</span><span class=\"tok\">SPARQL</span>",
    cursoH9:"Seminario de tesis",
    cursoP9:"Vínculo directo con los espacios académicos, insertado en la Iniciativa de Datos e Inteligencia Artificial.",
    cursoW9:"Construcción de la tesis junto a los profesionales del IDIA, semana a semana.",
    cursoT9:"<span class=\"tok\">IDIA</span><span class=\"tok\">tesis</span><span class=\"tok\">investigación aplicada</span>",
    cursoH10:"Business analytics",
    cursoP10:"Perfeccionamiento del storytelling de datos y de Power BI.",
    cursoW10:"Construí un dashboard de más de 8 paneles sobre los becarios ANID, a partir de mi trabajo como asistente de investigación.",
    cursoT10:"<span class=\"tok\">Power BI</span><span class=\"tok\">DAX</span><span class=\"tok\">storytelling</span><span class=\"tok\">dashboards</span>",
    cursoH11:"Procesamiento del lenguaje natural — La fuerza",
    cursoP11:"Todas las nociones matemáticas detrás del lenguaje.",
    cursoW11:"",
    cursoT11:"<span class=\"tok\">bag of words</span><span class=\"tok\">TF-IDF</span><span class=\"tok\">LDA</span><span class=\"tok\">lematización</span><span class=\"tok\">stemming</span><span class=\"tok\">similitud coseno</span><span class=\"tok\">RNN</span><span class=\"tok\">embeddings</span><span class=\"tok\">LSTM</span><span class=\"tok\">softmax</span><span class=\"tok\">tokenización</span>",
    cursoH12:"Web de datos",
    cursoP12:"Profundización en Web 3: motores de Wikidata, datos federados y enlazados.",
    cursoW12:"",
    cursoT12:"<span class=\"tok\">Web 3</span><span class=\"tok\">Wikidata</span><span class=\"tok\">datos federados</span><span class=\"tok\">datos enlazados</span><span class=\"tok\">SPARQL</span>",
    skillB0:"Lenguajes", skillB1:"Machine Learning", skillB2:"Grafos y redes",
    skillB3:"NLP e IA generativa", skillB4:"Harness Engineering & APIs de IA",
    skillB5:"Ingeniería de datos",
    skillB6:"Métodos cuantitativos", skillB7:"Métodos cualitativos",
    skillB8:"Teoría sociológica", skillB9:"Visualización y BI",
    skillB10:"Documentos e investigación",
        labGroupTitle:"Interfaces de laboratorio, MDS7205 Grafos de Conocimiento",
    fdsGroupTitle:"Controles de lectura, Fundamentos de la Sociología (Bachillerato UDP)",
    postersGroupTitle:"Posters y reportes, en PDF",
    presGroupTitle:"Presentaciones",
    pubVenue0:"AMW 2026 · CEUR-WS", pubStatus0:"Aceptado",
    pubH30:"Untangling the Academic Network: Analyzing Scientific Trajectories with Graphs and NLP",
    pubP0:"R. Molina Ávila, S. Ferrada Aliaga (IDIA, IMFD).",
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
    heroSub:"Data Scientist · Computational Sociologist",
    wordOrigen:"Origin", descOrigen:"From field sociology to knowledge graphs: the whole story.",
    wordTrayectoria:"Trajectory", descTrayectoria:"Each node is an experience; each edge, what one left in the next. Hover or click lights up the connections.",
    wordInvestigacion:"Research", descInvestigacion:"Four lines of work, one method: model the social to explain it.",
    wordTaller:"Workshop", descTaller:"Small tools born from real problems: assess, automate, visualize, teach.",
    wordAulas:"Classrooms", descAulas:"Teaching what I learned: lab interfaces, TA sessions and course presentations.",
    wordFormacion:"Education", wordHabilidades:"Skills", descFormacion:"The master's, course by course: what I learned and what I built in each one.",
    descHabilidades:"The full stack: technical, methodological and sociological, no cuts.",
    wordPublicaciones:"Publications", descPublicaciones:"What got written, and what is on its way.",
    wordCv:"CV", descCv:"The complete record, in three languages.",
    leadTrayectoria:"Each node is an experience; each edge, what one left in the next. Hover or click lights up the connections.",
    leadInterfaces:"As the course TA I built an interactive interface for each lab: the concept, the syntax and the exercise on a single page. Click opens the full interface.",
    leadFds:"Five sessions to prepare the reading quizzes of the first semester 2026: each one with its readings, its authors and a review ready to apply.",
    origenP0:"I started studying <strong>Sociology</strong> at Universidad Andrés Bello with a simple, insidious question: why do people end up doing what they do. I graduated with honours, and with a suspicion that never left me: almost nothing social is chance.",
    origenP1:"Field sociology came early. In <strong>2018</strong>, my professional internship at <strong>Gendarmería de Chile</strong>, in the National Directorate's Classification and Segmentation Department: databases, instruments and statistical tests, and fieldwork inside Santiago 1 and CCP Puente Alto prisons. Seeing the State face to face changes how you read statistics. There I learned that an administrative record is, before anything else, a decision about people.",
    origenP2:"Between <strong>2021 and 2023</strong> I worked on three projects that taught me to hold a question for years. Grounded Theory for geographic inequality in FONDECYT Regular 11200602. A database of 48,000+ publications on Chilean think tanks in Postdoc 3210579, where I discovered I could automate what used to be done by hand. And the Constitutional Convention with Mini COES: interviews, ethnography at the former National Congress and expert networks, presented at the IX COES Conference.",
    origenP3:"Alongside came my first teaching assistantships at the Faculty of Government, Universidad de Chile: Latin American Politics and Human Behaviour in Organizations with Professor Luis Garrido Vergara, and Empirical Analysis of Public Policy with Juan Carlos Cortázar. Teaching forced me to put in order what I thought I knew.",
    origenP4:"In <strong>2024</strong> came the leap. I entered the MSc in Data Science at FCFM and, almost at the same time, the Data and Artificial Intelligence Initiative (<strong>IDIA</strong>), affiliated with the Millennium Institute for Foundational Research on Data (IMFD). I moved from analysing data to building it: pipelines, graphs, models. Sociology had given me the questions; engineering gave me the infrastructure to answer them at scale.",
    origenP5:"My thesis was the project that joined both halves. I built a Neo4j knowledge graph with 16 node types and 15 relationship types —over three million co-authorship edges— to reconstruct the trajectory of 3,143 ANID doctoral fellows. On top of it I ran community detection, centrality metrics validated against null models, and BERTopic topic modelling over 26,071 publications. The underlying question remained sociological: whether gender and social class of origin structure what Chilean science produces. The thesis was defended, the paper was accepted at <strong>AMW 2026</strong> as first author, and the platform is public and navigable.",
    origenP6:"In between I built the bridge to applied work. In May 2025 I was a quantitative consultant for Fab Consulting on the evaluation of ANID's Research Valorization Program, with a technical proposal for the Undersecretariat of Science, Technology, Knowledge and Innovation. And in 2026, qualitative consulting for FCFM's new Professional Master's in AI: focus group with alumni, industry interviews and a full diarization, transcription and NLP pipeline with navigable evidence end to end.",
    origenP7:"Teaching grew with me. In 2026 I was a teaching assistant for Knowledge Graphs in the MSc in Data Science, for Fundamentals of Sociology in the UDP Bachelor program, and for Information Retrieval in the Computer Science Diploma. Since August 2026 I am <strong>Assistant Professor of Natural Language Processing</strong> in that same diploma: my first course of my own. I also co-supervised Matías Vega's undergraduate thesis, which ended in a public data platform on science funding in Chile.",
    origenP8:"Today I close one cycle and open another. Sociology taught me to ask; data science, to answer with evidence; teaching, to explain it; and consulting, to make it useful. I work at the intersection of knowledge graphs, natural language processing and data engineering, with a conviction unchanged since 2014: almost nothing social is chance, and almost everything can be modelled.",
    origenQuote:"\"Sociology gave me the questions; data, the discipline to answer them.\"",
    fact0:"Sociology, UNAB, graduated with Distinction",
    fact1:"Fieldwork in prisons (Gendarmería de Chile)",
    fact2:"Three FONDECYT projects + Mini COES",
    fact3:"MSc Data Science FCFM + IDIA / IMFD",
    fact4:"ANID and IDIA consulting · teaching",
    fact5:"Thesis defended · paper accepted at AMW 2026",
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
    toolTag4:"Viz · Market", toolH34:"Panorama Competitivo · Palta Chilena",
    toolP4:"A self-contained 25-slide deck on the Chilean avocado market: scraping ODEPA and Paltas de Chile, interactive D3.js maps and competitive analysis of exporters.",
    rolesH:"Teaching",
    roleA0:"2026", roleB0:"Assistant Professor — Natural Language Processing", roleC0:"Diploma in Computer Science, FCFM",
    roleA1:"2026", roleB1:"Teaching Assistant — Information Retrieval", roleC1:"Diploma in Computer Science, FCFM",
    roleA2:"2026", roleB2:"Teaching Assistant — Knowledge Graphs", roleC2:"MSc in Data Science, FCFM",
    roleA3:"2026", roleB3:"Teaching Assistant — Fundamentals of Sociology", roleC3:"Bachelor program, Universidad Diego Portales",
    roleA4:"2025–26", roleB4:"Undergraduate thesis co-supervision", roleC4:"DCC, FCFM, Universidad de Chile",
    roleA5:"2022", roleB5:"Teaching Assistant — Latin American Politics", roleC5:"Faculty of Government, U. de Chile",
    roleA6:"2022", roleB6:"Teaching Assistant — Human Behaviour in Organizations", roleC6:"Faculty of Government, U. de Chile",
    roleA7:"2022", roleB7:"Teaching Assistant — Empirical Analysis of Public Policy", roleC7:"Faculty of Government, U. de Chile",
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
    leadFormacion:"Thirteen courses between 2024 and 2026 at the Faculty of Physical and Mathematical Sciences, Universidad de Chile. I list them not as passed subjects but by what each one left behind: the methods, the tools and the real work that came out of them.",
    cursoH0:"Data Mining",
    cursoP0:"All the classical data analysis methods and their validation.",
    cursoW0:"I worked with the National Employment Survey: dimensionality reduction, clustering and ensemble models on real data.",
    cursoT0:"<span class=\"tok\">k-means</span><span class=\"tok\">SVM</span><span class=\"tok\">DBSCAN</span><span class=\"tok\">PCA</span><span class=\"tok\">t-SNE</span><span class=\"tok\">UMAP</span><span class=\"tok\">Random Forest</span><span class=\"tok\">XGBoost</span><span class=\"tok\">CatBoost</span>",
    cursoH1:"Statistics",
    cursoP1:"Inferential statistics: normal, binomial, beta, Poisson and Dirichlet distributions; OLS, MLE and OLS assumptions.",
    cursoW1:"Analysis of lobbying in the Chamber of Deputies and Senate as time series.",
    cursoT1:"<span class=\"tok\">normal</span><span class=\"tok\">binomial</span><span class=\"tok\">beta</span><span class=\"tok\">Poisson</span><span class=\"tok\">Dirichlet</span><span class=\"tok\">OLS</span><span class=\"tok\">MLE</span><span class=\"tok\">OLS assumptions</span>",
    cursoH2:"Databases",
    cursoP2:"Key methods, terms and concepts of SQL databases.",
    cursoW2:"",
    cursoT2:"<span class=\"tok\">INNER / OUTER JOIN</span><span class=\"tok\">LEFT / RIGHT JOIN</span><span class=\"tok\">MERGE</span><span class=\"tok\">views</span><span class=\"tok\">COUNT</span><span class=\"tok\">memory notions</span><span class=\"tok\">query building</span><span class=\"tok\">best practices</span>",
    cursoH3:"Machine Learning",
    cursoP3:"The mathematics and theoretical foundations of computational intelligence.",
    cursoW3:"",
    cursoT3:"<span class=\"tok\">SGD</span><span class=\"tok\">Moore-Penrose pseudoinverse</span><span class=\"tok\">linear algebra</span><span class=\"tok\">Bayes</span>",
    cursoH4:"Data Science Project",
    cursoP4:"Direct work with the INE and the National Employment Survey.",
    cursoW4:"I built an outlier diagnostic for the ARIMA X13-SEATS model of the unemployment rate.",
    cursoT4:"<span class=\"tok\">INE</span><span class=\"tok\">ARIMA X13-SEATS</span><span class=\"tok\">outlier diagnostics</span><span class=\"tok\">time series</span>",
    cursoH5:"Scientific Programming Lab",
    cursoP5:"Programming and data science focused on quality, rigour and theoretical foundations.",
    cursoW5:"A tour of the best practices I still use today: avoiding data leakage, reproducible pipelines and drift monitoring.",
    cursoT5:"<span class=\"tok\">Python OOP</span><span class=\"tok\">Plotly</span><span class=\"tok\">scikit-learn pipelines</span><span class=\"tok\">anti data-leakage</span><span class=\"tok\">Prophet</span><span class=\"tok\">XGBoost</span><span class=\"tok\">Optuna with pruning</span><span class=\"tok\">SHAP</span><span class=\"tok\">Docker</span><span class=\"tok\">Airflow (data drift)</span>",
    cursoH6:"Data Analysis and Causal Inference",
    cursoP6:"The deepest notions of statistical inference, at the causal level.",
    cursoW6:"Interpreting omitted variable bias, selection bias and latent variables on real cases.",
    cursoT6:"<span class=\"tok\">ATE</span><span class=\"tok\">CATE</span><span class=\"tok\">omitted variable bias</span><span class=\"tok\">selection bias</span><span class=\"tok\">latent variables</span>",
    cursoH7:"Data Visualization Workshop",
    cursoP7:"The use and relevance of data storytelling, with the tools I still use today.",
    cursoW7:"I refined the Constitutional Convention dashboard I had built as a research assistant.",
    cursoT7:"<span class=\"tok\">D3.js</span><span class=\"tok\">Power BI</span><span class=\"tok\">storytelling</span>",
    cursoH8:"Knowledge Graphs — The Light",
    cursoP8:"From the basics to advanced: ontologies, validation, embeddings and graph querying.",
    cursoW8:"I turned my research assistantship on social class and gender into a multi-source property graph. The thesis came out of here.",
    cursoT8:"<span class=\"tok\">RDF</span><span class=\"tok\">RDFS</span><span class=\"tok\">OWL</span><span class=\"tok\">SHACL</span><span class=\"tok\">graph embeddings</span><span class=\"tok\">Neo4j</span><span class=\"tok\">property graphs</span><span class=\"tok\">centrality</span><span class=\"tok\">GQL</span><span class=\"tok\">SPARQL</span>",
    cursoH9:"Thesis Seminar",
    cursoP9:"A direct link to academic spaces, embedded in the Data and AI Initiative.",
    cursoW9:"Building the thesis alongside IDIA professionals, week by week.",
    cursoT9:"<span class=\"tok\">IDIA</span><span class=\"tok\">thesis</span><span class=\"tok\">applied research</span>",
    cursoH10:"Business Analytics",
    cursoP10:"Refining data storytelling and Power BI.",
    cursoW10:"I built a dashboard with more than 8 panels on ANID fellows, from my work as a research assistant.",
    cursoT10:"<span class=\"tok\">Power BI</span><span class=\"tok\">DAX</span><span class=\"tok\">storytelling</span><span class=\"tok\">dashboards</span>",
    cursoH11:"Natural Language Processing — The Force",
    cursoP11:"All the mathematics behind language.",
    cursoW11:"",
    cursoT11:"<span class=\"tok\">bag of words</span><span class=\"tok\">TF-IDF</span><span class=\"tok\">LDA</span><span class=\"tok\">lemmatization</span><span class=\"tok\">stemming</span><span class=\"tok\">cosine similarity</span><span class=\"tok\">RNN</span><span class=\"tok\">embeddings</span><span class=\"tok\">LSTM</span><span class=\"tok\">softmax</span><span class=\"tok\">tokenization</span>",
    cursoH12:"Web of Data",
    cursoP12:"Deep dive into Web 3: Wikidata engines, federated and linked data.",
    cursoW12:"",
    cursoT12:"<span class=\"tok\">Web 3</span><span class=\"tok\">Wikidata</span><span class=\"tok\">federated data</span><span class=\"tok\">linked data</span><span class=\"tok\">SPARQL</span>",
    skillB0:"Languages", skillB1:"Machine Learning", skillB2:"Graphs and networks",
    skillB3:"NLP and generative AI", skillB4:"Harness Engineering & AI APIs",
    skillB5:"Data engineering",
    skillB6:"Quantitative methods", skillB7:"Qualitative methods",
    skillB8:"Sociological theory", skillB9:"Visualization and BI",
    skillB10:"Documents and research",
        labGroupTitle:"Lab interfaces, MDS7205 Knowledge Graphs",
    fdsGroupTitle:"Reading quizzes, Fundamentals of Sociology (Bachillerato UDP)",
    postersGroupTitle:"Posters and reports, in PDF",
    presGroupTitle:"Presentations",
    pubVenue0:"AMW 2026 · CEUR-WS", pubStatus0:"Accepted",
    pubH30:"Untangling the Academic Network: Analyzing Scientific Trajectories with Graphs and NLP",
    pubP0:"R. Molina Ávila, S. Ferrada Aliaga (IDIA, IMFD).",
    pubVenue1:"Latin American Research Review · Cambridge UP", pubStatus1:"Acknowledgment",
    pubH31:"Think Tanks and Political Crises in Chile, 2011–2022",
    pubP1:"Acknowledged for contributions (FONDECYT POSTDOC 3210579 / COES).",
    pubVenue2:"Computational sociology", pubStatus2:"In progress",
    pubH32:"Influence networks of Chilean think tanks (2019–2023)",
    catEdu:"EDUCATION",
    catRes:"RESEARCH",
    catTeach:"TEACHING",
    catConsult:"CONSULTING",
    catPub:"PUBLICATION",
    evT_soc:"Sociology, UNAB",
    evD_soc:"Start of sociological training (2014–2019).",
    evT_gend:"Internship, Gendarmería",
    evD_gend:"Classification and segmentation; fieldwork in prisons (Santiago 1, CCP Puente Alto).",
    evT_tit:"Graduated, Sociologist",
    evD_tit:"End of student years: Sociologist and Licentiate with Distinction, Universidad Andrés Bello (2019).",
    evT_coguia:"Thesis co-supervision, DCC",
    evD_coguia:"Co-supervisor of Matías Vega's undergraduate thesis (DCC, FCFM): a web platform for data on science funding in Chile. August 2025 to June 2026.",
    evT_freq:"FONDECYT Regular 11200602",
    evD_freq:"Geographic inequality; grounded theory, transcription and categorization (2021–2022).",
    evT_mcoes:"Mini COES, Convention",
    evD_mcoes:"Expert networks: migration and decentralization. Interviews, ethnography at the former Congress, Atlas.ti (2022–2023).",
    evT_doc_pl:"Latin American Politics",
    evD_doc_pl:"Teaching assistant, Faculty of Government, U. de Chile (Dr. Luis Garrido Vergara), 2nd term 2022.",
    evT_doc_co:"Organizational Behaviour",
    evD_doc_co:"Teaching assistant, Human Behaviour in Organizations, Faculty of Government (Dr. Garrido Vergara), 2nd term 2022.",
    evT_doc_ap:"Public Policy Analysis",
    evD_doc_ap:"Teaching assistant, Empirical Analysis of Public Policy (Dr. Juan Carlos Cortázar), 2nd term 2022.",
    evT_ixcoes:"IX COES Conference",
    evD_ixcoes:"Speaker: \"The Role of Expert Knowledge in the Constitutional Convention\", with R. Chiappa and M. González Hernando. November 2022, UDP.",
    evT_postdoc:"FONDECYT Postdoc 3210579",
    evD_postdoc:"Think tanks and political crises; 48k+ publications, ETL and Power BI (2023–2024).",
    evT_msc:"MSc Data Science, FCFM",
    evD_msc:"Thesis defended: a knowledge graph of 3,143 ANID fellows, with a public platform.",
    evT_idia:"Data Scientist, IDIA / IMFD",
    evD_idia:"Predictive models, multi-source ETL, Neo4j graph with 3M+ edges (Mar 2025 – Sep 2026).",
    evT_f1124:"FONDECYT 11241304",
    evD_f1124:"Inequalities in STEM academia; clustering and intersectionality (2024–2025).",
    evT_coestt:"COES, Think Tanks",
    evD_coestt:"40k+ documents, scraping + NLP, influence networks (2024–2025).",
    evT_xiicoes:"XII COES Conference",
    evD_xiicoes:"Speaker: \"Expert knowledge in turbulent times: think tanks during Chile's political crises (2019–2023)\". October 2025.",
    evT_fab:"Fab Consulting",
    evD_fab:"Quantitative consultant: results evaluation of the Research Valorization Program (ANID), for the Undersecretariat of STKI. May 2025.",
    evT_uah:"UAH presentation, MiniCOES",
    evD_uah:"Findings presentation: Chilean Think Tanks in Turbulent Times 2019–2023. Universidad Alberto Hurtado, November 2025.",
    evT_imfd:"VIII IMFD Workshop",
    evD_imfd:"Participation in the VIII IMFD Workshop. January 2026.",
    evT_cons:"IDIA consulting, AI Master's",
    evD_cons:"Qualitative evaluation with diarization and NLP (Mar–May 2026).",
    evT_amw:"AMW 2026 paper, accepted",
    evD_amw:"\"Untangling the Academic Network\" accepted at AMW 2026 (CEUR-WS) as first author, with S. Ferrada Aliaga.",
    evT_evic:"EVIC 2025",
    evD_evic:"Summer School on Computational Intelligence, Universidad de los Andes. December 2025.",
    evT_simposio:"IV FCFM Graduate Symposium",
    evD_simposio:"Speaker: \"Trajectories of ANID fellows through Knowledge Graphs and NLP\". August 2026.",
    evT_pln:"Assistant Professor, NLP",
    evD_pln:"Natural Language Processing, Diploma in Computer Science, FCFM (Aug–Dec 2026).",
    evT_lar:"LAR Review, Acknowledgment",
    evD_lar:"Acknowledged in Latin American Research Review (Cambridge UP).",
    evT_dkg:"Knowledge Graphs",
    evD_dkg:"Teaching assistant, MSc in Data Science, FCFM (March–July 2026).",
    evT_doc_udp:"Fundamentals of Sociology UDP",
    evD_doc_udp:"Teaching assistant, Universidad Diego Portales (March–July 2026).",
    evT_dir:"Information Retrieval",
    evD_dir:"Teaching assistant, FCFM Diploma (since August 2026).",
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
    heroTitle:"Rodrigo Molina Ávila",
    heroSub:"数据科学家 · 计算社会学家",
    wordOrigen:"起源", descOrigen:"从田野社会学到知识图谱：完整的故事。",
    wordTrayectoria:"经历", descTrayectoria:"每个节点是一段经历；每条边，是前一个留给后一个的。悬停或点击点亮连接。",
    wordInvestigacion:"研究", descInvestigacion:"四条工作线，同一个方法：建模社会以解释社会。",
    wordTaller:"工作坊", descTaller:"源于真实问题的小工具：评估、自动化、可视化、教学。",
    wordAulas:"课堂", descAulas:"教授所学：实验室界面、助教课程与课程演示。",
    wordFormacion:"教育", wordHabilidades:"技能", descFormacion:"硕士课程逐门回顾：每门课学到了什么、构建了什么。",
    descHabilidades:"完整技术栈：技术、方法论与社会学，不加删减。",
    wordPublicaciones:"出版物", descPublicaciones:"已写下的，与正在进行的。",
    wordCv:"简历", descCv:"完整记录，三种语言。",
    leadTrayectoria:"每个节点是一段经历；每条边，是前一个留给后一个的。悬停或点击点亮连接。",
    leadInterfaces:"作为课程助教，我为每个实验室构建了交互界面：概念、语法与练习，一页呈现。点击打开完整界面。",
    leadFds:"2026年第一学期的五次阅读测验准备课：每次都有阅读材料、作者与随时可用的复习。",
    origenP0:"我在安德斯·贝洛大学开始学习<strong>社会学</strong>，起点是一个简单而尖锐的问题：为什么人们最终会做他们所做的事。毕业时获得优等学位，也带着一个从未离开我的怀疑：社会之事几乎没有偶然。",
    origenP1:"田野社会学来得很早。<strong>2018</strong>年，我在<strong>智利监狱管理局</strong>全国总局的分类与分段处实习：数据库、工具与统计检验，并在圣地亚哥1号和Puente Alto监狱做田野工作。面对面看到国家，会永远改变你阅读统计的方式。我在那里明白：一条行政记录，首先是一个关于人的决定。",
    origenP2:"<strong>2021至2023年</strong>，我参与了三个项目，它们教会我把一个问题坚持多年。FONDECYT Regular 11200602 的地理不平等扎根理论研究。Postdoc 3210579 中 48,000+ 篇智利智库出版物的数据库——我在那里发现，过去手工完成的事可以自动化。以及 Mini COES 的制宪会议：访谈、前国民议会民族志与专家网络，并在第九届 COES 大会上报告。",
    origenP3:"与此同时，我在智利大学政府学院开始了第一批助教工作：与 Luis Garrido Vergara 教授的拉美政治与组织中的人类行为，以及与 Juan Carlos Cortázar 的公共政策实证分析。教学迫使我整理自己以为已经掌握的东西。",
    origenP4:"<strong>2024</strong>年迎来跃迁。我进入 FCFM 数据科学硕士，几乎同时加入数据与人工智能倡议（<strong>IDIA</strong>），并关联数据基础研究千年研究所（IMFD）。我从分析数据转向构建数据：流水线、图、模型。社会学给了我问题；工程给了我大规模回答它们的基础设施。",
    origenP5:"我的论文把两半合在一起。我用 Neo4j 构建了一个含 16 种节点类型与 15 种关系类型的知识图谱——超过三百万条合著边——重建 3,143 名 ANID 博士生的轨迹。在其上运行社区检测、以零模型验证的中心性指标，以及对 26,071 篇出版物做 BERTopic 主题建模。底层问题仍是社会学的：性别与出身社会阶层是否结构化智利科学所生产的内容。论文已答辩，论文以<strong>第一作者</strong>被 <strong>AMW 2026</strong> 接收，平台公开可导航。",
    origenP6:"其间我搭起了通往应用世界的桥。2025年5月，我为 Fab Consulting 担任定量顾问，评估 ANID 的研究价值提升计划，并向科学、技术、知识与创新副部提交技术提案。2026年，为新设的 FCFM 职业型 AI 硕士做定性咨询：毕业生焦点小组、业界访谈，以及端到端可追溯的语音分离、转写与 NLP 管线。",
    origenP7:"教学与我一同成长。2026年，我担任数据科学硕士知识图谱、UDP 社会学基础，以及计算机科学文凭信息检索的助教。自 2026年8月起，我在同一文凭项目中担任<strong>自然语言处理助理教授</strong>：我的第一门主讲课程。我还共同指导了 Matías Vega 的本科论文，成果是一个关于智利科学资助的公开数据平台。",
    origenP8:"今天我合上一个周期，打开另一个。社会学教会我提问；数据科学教会我用证据回答；教学教会我解释；咨询教会我让它有用。我在知识图谱、自然语言处理与数据工程的交叉处工作，带着自 2014 年未变的信念：社会之事几乎没有偶然，而几乎一切都可以被建模。",
    origenQuote:"「社会学给了我问题；数据，给了我回答它们的纪律。」",
    fact0:"社会学，UNAB，优等毕业",
    fact1:"监狱田野工作（智利监狱管理局）",
    fact2:"三个 FONDECYT 项目 + Mini COES",
    fact3:"MSc 数据科学 FCFM + IDIA / IMFD",
    fact4:"ANID 与 IDIA 咨询 · 教学",
    fact5:"论文答辩通过 · 论文被 AMW 2026 接收",
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
    toolTag4:"可视化 · 市场", toolH34:"Panorama Competitivo · Palta Chilena",
    toolP4:"关于智利牛油果市场的 25 页自包含演示：抓取 ODEPA 与 Paltas de Chile 数据、D3.js 交互地图与出口商竞争分析。",
    rolesH:"教学",
    roleA0:"2026", roleB0:"助理教授 — 自然语言处理", roleC0:"计算机科学文凭，FCFM",
    roleA1:"2026", roleB1:"助教 — 信息检索", roleC1:"计算机科学文凭，FCFM",
    roleA2:"2026", roleB2:"助教 — 知识图谱", roleC2:"数据科学硕士，FCFM",
    roleA3:"2026", roleB3:"助教 — 社会学基础", roleC3:"本科项目，迭戈·波塔莱斯大学",
    roleA4:"2025–26", roleB4:"本科论文共同指导", roleC4:"DCC，FCFM，智利大学",
    roleA5:"2022", roleB5:"助教 — 拉美政治", roleC5:"政府学院，智利大学",
    roleA6:"2022", roleB6:"助教 — 组织中的人类行为", roleC6:"政府学院，智利大学",
    roleA7:"2022", roleB7:"助教 — 公共政策实证分析", roleC7:"政府学院，智利大学",
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
    leadFormacion:"2024 至 2026 年间在智利大学物理与数学科学学院修读的十三门课程。我不把它们列为通过的科目，而是按每门课留下的东西来列：方法、工具，以及由此产生的真实工作。",
    cursoH0:"数据挖掘",
    cursoP0:"所有经典数据分析方法及其验证。",
    cursoW0:"以全国就业调查为数据：降维、聚类与集成模型，全部在真实数据上完成。",
    cursoT0:"<span class=\"tok\">k-means</span><span class=\"tok\">SVM</span><span class=\"tok\">DBSCAN</span><span class=\"tok\">PCA</span><span class=\"tok\">t-SNE</span><span class=\"tok\">UMAP</span><span class=\"tok\">随机森林</span><span class=\"tok\">XGBoost</span><span class=\"tok\">CatBoost</span>",
    cursoH1:"统计学",
    cursoP1:"推断统计：正态、二项、贝塔、泊松与狄利克雷分布；OLS、MLE 与 OLS 假设。",
    cursoW1:"以时间序列分析众议院与参议院的游说活动。",
    cursoT1:"<span class=\"tok\">正态</span><span class=\"tok\">二项</span><span class=\"tok\">贝塔</span><span class=\"tok\">泊松</span><span class=\"tok\">狄利克雷</span><span class=\"tok\">OLS</span><span class=\"tok\">MLE</span><span class=\"tok\">OLS 假设</span>",
    cursoH2:"数据库",
    cursoP2:"SQL 数据库的关键方法、术语与概念。",
    cursoW2:"",
    cursoT2:"<span class=\"tok\">INNER / OUTER JOIN</span><span class=\"tok\">LEFT / RIGHT JOIN</span><span class=\"tok\">MERGE</span><span class=\"tok\">视图</span><span class=\"tok\">COUNT</span><span class=\"tok\">内存概念</span><span class=\"tok\">查询构建</span><span class=\"tok\">最佳实践</span>",
    cursoH3:"机器学习",
    cursoP3:"计算智能的数学与理论基础。",
    cursoW3:"",
    cursoT3:"<span class=\"tok\">SGD</span><span class=\"tok\">Moore-Penrose 伪逆</span><span class=\"tok\">线性代数</span><span class=\"tok\">贝叶斯</span>",
    cursoH4:"数据科学项目",
    cursoP4:"与 INE 及全国就业调查直接合作。",
    cursoW4:"为失业率的 ARIMA X13-SEATS 模型构建了异常值诊断。",
    cursoT4:"<span class=\"tok\">INE</span><span class=\"tok\">ARIMA X13-SEATS</span><span class=\"tok\">异常值诊断</span><span class=\"tok\">时间序列</span>",
    cursoH5:"科学编程实验室",
    cursoP5:"以质量、严谨与理论基础为核心的程序设计与数据科学。",
    cursoW5:"一次对我至今仍在使用的实践的巡礼：避免数据泄漏、可复现流水线与漂移监控。",
    cursoT5:"<span class=\"tok\">Python 面向对象</span><span class=\"tok\">Plotly</span><span class=\"tok\">scikit-learn 流水线</span><span class=\"tok\">防数据泄漏</span><span class=\"tok\">Prophet</span><span class=\"tok\">XGBoost</span><span class=\"tok\">Optuna 剪枝</span><span class=\"tok\">SHAP</span><span class=\"tok\">Docker</span><span class=\"tok\">Airflow（数据漂移）</span>",
    cursoH6:"数据分析与因果推断",
    cursoP6:"统计推断中最深层的概念，达到因果层面。",
    cursoW6:"在真实案例中解读遗漏变量偏误、选择偏误与潜变量。",
    cursoT6:"<span class=\"tok\">ATE</span><span class=\"tok\">CATE</span><span class=\"tok\">遗漏变量偏误</span><span class=\"tok\">选择偏误</span><span class=\"tok\">潜变量</span>",
    cursoH7:"数据可视化工作坊",
    cursoP7:"数据叙事的使用与重要性，以及我至今仍在用的工具。",
    cursoW7:"我完善了作为研究助理时构建的制宪会议仪表板。",
    cursoT7:"<span class=\"tok\">D3.js</span><span class=\"tok\">Power BI</span><span class=\"tok\">数据叙事</span>",
    cursoH8:"知识图谱 — 光",
    cursoP8:"从基础到进阶：本体、验证、嵌入与图查询。",
    cursoW8:"我把关于社会阶层与性别的研究助理工作转化为多源 property graph。论文由此而来。",
    cursoT8:"<span class=\"tok\">RDF</span><span class=\"tok\">RDFS</span><span class=\"tok\">OWL</span><span class=\"tok\">SHACL</span><span class=\"tok\">图嵌入</span><span class=\"tok\">Neo4j</span><span class=\"tok\">property graphs</span><span class=\"tok\">中心性</span><span class=\"tok\">GQL</span><span class=\"tok\">SPARQL</span>",
    cursoH9:"论文研讨课",
    cursoP9:"与学术空间的直接连接，嵌入数据与人工智能倡议。",
    cursoW9:"与 IDIA 的专业人员一起，逐周构建论文。",
    cursoT9:"<span class=\"tok\">IDIA</span><span class=\"tok\">论文</span><span class=\"tok\">应用研究</span>",
    cursoH10:"商业分析",
    cursoP10:"精进数据叙事与 Power BI。",
    cursoW10:"基于研究助理工作，构建了超过 8 个面板的 ANID 奖学金获得者仪表板。",
    cursoT10:"<span class=\"tok\">Power BI</span><span class=\"tok\">DAX</span><span class=\"tok\">数据叙事</span><span class=\"tok\">仪表板</span>",
    cursoH11:"自然语言处理 — 力",
    cursoP11:"语言背后的全部数学。",
    cursoW11:"",
    cursoT11:"<span class=\"tok\">词袋</span><span class=\"tok\">TF-IDF</span><span class=\"tok\">LDA</span><span class=\"tok\">词形还原</span><span class=\"tok\">词干提取</span><span class=\"tok\">余弦相似度</span><span class=\"tok\">RNN</span><span class=\"tok\">嵌入</span><span class=\"tok\">LSTM</span><span class=\"tok\">softmax</span><span class=\"tok\">分词</span>",
    cursoH12:"数据之网",
    cursoP12:"深入 Web 3：Wikidata 引擎、联邦数据与关联数据。",
    cursoW12:"",
    cursoT12:"<span class=\"tok\">Web 3</span><span class=\"tok\">Wikidata</span><span class=\"tok\">联邦数据</span><span class=\"tok\">关联数据</span><span class=\"tok\">SPARQL</span>",
    skillB0:"语言", skillB1:"机器学习", skillB2:"图与网络",
    skillB3:"NLP 与生成式 AI", skillB4:"Harness 工程与 AI 接口",
    skillB5:"数据工程",
    skillB6:"定量方法", skillB7:"定性方法",
    skillB8:"社会学理论", skillB9:"可视化与 BI",
    skillB10:"文档与研究",
            labGroupTitle:"实验室界面，MDS7205 知识图谱",
    fdsGroupTitle:"阅读测验，社会学基础（Bachillerato UDP）",
    postersGroupTitle:"海报与报告，PDF",
    presGroupTitle:"演示",
    pubVenue0:"AMW 2026 · CEUR-WS", pubStatus0:"已接收",
    pubH30:"Untangling the Academic Network: Analyzing Scientific Trajectories with Graphs and NLP",
    pubP0:"R. Molina Ávila, S. Ferrada Aliaga (IDIA, IMFD).",
    pubVenue1:"Latin American Research Review · Cambridge UP", pubStatus1:"致谢",
    pubH31:"Think Tanks and Political Crises in Chile, 2011–2022",
    pubP1:"因对智利智库研究的贡献而获致谢（FONDECYT POSTDOC 3210579 / COES）。",
    pubVenue2:"计算社会学", pubStatus2:"进行中",
    pubH32:"智利智库的影响网络（2019–2023）",
    catEdu:"教育",
    catRes:"研究",
    catTeach:"教学",
    catConsult:"咨询",
    catPub:"出版",
    evT_soc:"社会学，UNAB",
    evD_soc:"社会学训练的开始（2014–2019）。",
    evT_gend:"实习，智利监狱管理局",
    evD_gend:"分类与分段；在监狱做田野工作（圣地亚哥1号、CCP Puente Alto）。",
    evT_tit:"毕业，社会学家",
    evD_tit:"学生阶段结束：社会学家与优等学士，安德斯·贝洛大学（2019）。",
    evT_coguia:"论文共同指导，DCC",
    evD_coguia:"共同指导 Matías Vega 的本科论文（DCC，FCFM）：智利科学资助数据的网络平台。2025年8月至2026年6月。",
    evT_freq:"FONDECYT Regular 11200602",
    evD_freq:"地理不平等；扎根理论、转写与编码（2021–2022）。",
    evT_mcoes:"Mini COES，制宪会议",
    evD_mcoes:"专家网络：移民与去中心化。访谈、前国会民族志、Atlas.ti（2022–2023）。",
    evT_doc_pl:"拉美政治",
    evD_doc_pl:"助教，政府学院，智利大学（Luis Garrido Vergara 博士），2022年第二学期。",
    evT_doc_co:"组织行为",
    evD_doc_co:"助教，组织中的人类行为，政府学院（Garrido Vergara 博士），2022年第二学期。",
    evT_doc_ap:"公共政策分析",
    evD_doc_ap:"助教，公共政策实证分析（Juan Carlos Cortázar 博士），2022年第二学期。",
    evT_ixcoes:"第九届 COES 大会",
    evD_ixcoes:"报告人：「专家知识在制宪会议中的作用」，与 R. Chiappa 和 M. González Hernando。2022年11月，UDP。",
    evT_postdoc:"FONDECYT Postdoc 3210579",
    evD_postdoc:"智库与政治危机；48k+ 出版物、ETL 与 Power BI（2023–2024）。",
    evT_msc:"MSc 数据科学，FCFM",
    evD_msc:"论文答辩通过：3,143 名 ANID 奖学金获得者的知识图谱，附公开平台。",
    evT_idia:"数据科学家，IDIA / IMFD",
    evD_idia:"预测模型、多源 ETL、3M+ 边的 Neo4j 图（2025年3月 – 2026年9月）。",
    evT_f1124:"FONDECYT 11241304",
    evD_f1124:"STEM 学术中的不平等；聚类与交叉性（2024–2025）。",
    evT_coestt:"COES，智库",
    evD_coestt:"40k+ 文档、爬虫 + NLP、影响网络（2024–2025）。",
    evT_xiicoes:"第十二届 COES 大会",
    evD_xiicoes:"报告人：「动荡时期的专家知识：智利政治危机期间的智库（2019–2023）」。2025年10月。",
    evT_fab:"Fab Consulting",
    evD_fab:"定量顾问：研究价值提升计划（ANID）成果评估，为科学、技术、知识与创新副部。2025年5月。",
    evT_uah:"UAH 演示，MiniCOES",
    evD_uah:"成果演示：动荡时期的智利智库 2019–2023。阿尔韦托·乌尔塔多大学，2025年11月。",
    evT_imfd:"第八届 IMFD 工作坊",
    evD_imfd:"参加第八届 IMFD 工作坊。2026年1月。",
    evT_cons:"IDIA 咨询，AI 硕士",
    evD_cons:"含语音分离与 NLP 的定性评估（2026年3–5月）。",
    evT_amw:"AMW 2026 论文，已接收",
    evD_amw:"《Untangling the Academic Network》以第一作者被 AMW 2026（CEUR-WS）接收，与 S. Ferrada Aliaga。",
    evT_evic:"EVIC 2025",
    evD_evic:"计算智能暑期学校，洛斯安第斯大学。2025年12月。",
    evT_simposio:"第四届 FCFM 研究生研讨会",
    evD_simposio:"报告人：「通过知识图谱与 NLP 分析 ANID 奖学金获得者轨迹」。2026年8月。",
    evT_pln:"助理教授，NLP",
    evD_pln:"自然语言处理，计算机科学文凭，FCFM（2026年8–12月）。",
    evT_lar:"LAR Review，致谢",
    evD_lar:"在 Latin American Research Review（剑桥大学出版社）中获致谢。",
    evT_dkg:"知识图谱",
    evD_dkg:"助教，数据科学硕士，FCFM（2026年3–7月）。",
    evT_doc_udp:"社会学基础 UDP",
    evD_doc_udp:"助教，迭戈·波塔莱斯大学（2026年3–7月）。",
    evT_dir:"信息检索",
    evD_dir:"助教，FCFM 文凭项目（2026年8月起）。",
    legendEdu:"教育", legendRes:"研究", legendTeach:"教学",
    legendConsult:"咨询", legendPub:"出版",
    footKicker:"联系", footTitle:"聊聊吧。",
    footNote:"背景图会回应你的光标：这是唯一不需要滚动的交互。",
    detailHint:"悬停或点击一个里程碑。"
  }
};


/* ── Traducción del timeline (los EVENTS viven en index.html) ── */
function tradTimeline(l){
  const t = texts[l];
  if(!t || typeof EVENTS === 'undefined') return;
  // categorías
  if(t.catEdu) CAT_LABEL.edu = t.catEdu;
  if(t.catRes) CAT_LABEL.res = t.catRes;
  if(t.catTeach) CAT_LABEL.teach = t.catTeach;
  if(t.catConsult) CAT_LABEL.consult = t.catConsult;
  if(t.catPub) CAT_LABEL.pub = t.catPub;
  // títulos y descripciones
  EVENTS.forEach(function(e){
    if(t['evT_'+e.id]) e.t = t['evT_'+e.id];
    if(t['evD_'+e.id]) e.d = t['evD_'+e.id];
  });
  // re-render de etiquetas y re-layout (los anchos cambian)
  const MAX = 30;
  d3.selectAll('#timeline text.lbl')
    .text(function(d){ return d.t.length > MAX ? d.t.slice(0, MAX-1) + '…' : d.t; });
  if(typeof layoutLabels === 'function') layoutLabels();
  // detalle visible
  const det = document.getElementById('detail');
  if(det && det.dataset.ev){
    const e = EVENTS.filter(function(x){ return x.id === det.dataset.ev; })[0];
    if(e && typeof showDetail === 'function') showDetail(e);
  }
}

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
    '#trayectoria':t.leadTrayectoria, '#formacion':t.leadFormacion
  };
  Object.keys(leadMap).forEach(sel=>{
    const sec=document.querySelector(sel);
    if(sec){ const lead=sec.querySelector('.lead'); if(lead && leadMap[sel]) lead.textContent=leadMap[sel]; }
  });
  // #aulas tiene dos leads: interfaces (1º) y controles FDS (2º)
  const aulasLeads=document.querySelectorAll('#aulas .lead');
  if(aulasLeads[0] && t.leadInterfaces) aulasLeads[0].textContent=t.leadInterfaces;
  if(aulasLeads[1] && t.leadFds) aulasLeads[1].textContent=t.leadFds;
  // aulas: listado de docencia
  const rh=document.querySelector('#aulas .roles-h');
  if(rh && t.rolesH) rh.textContent=t.rolesH;
  document.querySelectorAll('#aulas .role').forEach((r,i)=>{
    const b=r.querySelector('b'), sp=r.querySelector('span'), it=r.querySelector('i');
    if(b && t['roleA'+i]) b.textContent=t['roleA'+i];
    if(sp && t['roleB'+i]) sp.textContent=t['roleB'+i];
    if(it && t['roleC'+i]) it.textContent=t['roleC'+i];
  });
  // formación: cursos
  document.querySelectorAll('#formacion .curso').forEach((c,i)=>{
    const h3=c.querySelector('h3'), p=c.querySelector('.curso-p'),
          w=c.querySelector('.curso-w'), tk=c.querySelector('.tokens');
    if(h3 && t['cursoH'+i]) h3.textContent=t['cursoH'+i];
    if(p && t['cursoP'+i]) p.innerHTML=t['cursoP'+i];
    if(w && t['cursoW'+i]!==undefined) w.innerHTML=t['cursoW'+i];
    if(tk && t['cursoT'+i]) tk.innerHTML=t['cursoT'+i];
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
  tradTimeline(l);
}
