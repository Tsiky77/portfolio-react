// Traduction espagnole du contenu de src/data/portfolioData.js.
// Même structure, dans le même ordre : seuls les textes sont repris ici.
export default {
  parcours: [
    { date: 'Desde 2008', titre: 'Natación de competición', type: 'Deporte' },
    { date: 'Julio de 2021', titre: 'Prácticas de observación en diseño 3D', type: 'Prácticas' },
    { date: '2024 a 2026', titre: 'Ciclo preparatorio integrado SEEE', lieu: 'CESI Escuela de Ingenieros, Toulouse', type: 'Formación' },
    { date: 'Junio a julio de 2026', titre: 'Prácticas de desarrollador Python', type: 'Prácticas' },
    { date: 'Desde septiembre de 2026', titre: 'Grado L2 EEA en CUPGE', type: 'Formación' },
    { date: 'Junio de 2027', titre: 'Prácticas de 2 meses en sistemas embebidos', lieu: 'En búsqueda', type: 'Objetivo' },
  ],

  experiences: [
    {
      titre: 'Becario desarrollador Python: interfaz gráfica y visualización científica',
      meta: 'ONERA, Departamento de Física (DPHY), Toulouse · del 8 de junio al 27 de julio de 2026',
      chiffres: [
        { valeur: '≈ 9700', label: 'líneas de código (Python, JavaScript, HTML)' },
        { label: 'de diferencia con el flujo de trabajo original' },
        { label: 'interfaz bilingüe' },
      ],
      details: [
        {
          titre: 'Contexto y objetivo',
          texte: 'Los investigadores de la ONERA utilizan CSiPI, un código de simulación que hasta ahora solo se manejaba por línea de comandos. Mi misión: diseñar una interfaz gráfica que haga accesible esta herramienta, desde la preparación de un caso de simulación hasta la visualización de los resultados.',
        },
        {
          titre: 'Arquitectura de la interfaz',
          texte: 'Una interfaz web (HTML, JavaScript, Bootstrap, Plotly.js) conectada a una capa de aplicación en Python mediante Eel, a través de WebSocket. El código de cálculo existente permanece intacto: la interfaz prepara la configuración, lanza la simulación y lee los archivos de resultados para mostrarlos.',
        },
        {
          titre: 'Simulaciones en paralelo, aisladas y seguidas en tiempo real',
          texte: 'Cada simulación se ejecuta en su propio entorno aislado para que los resultados nunca se mezclen. Un semáforo limita el número de cálculos simultáneos y pone los demás en cola. El progreso y el registro llegan en directo al navegador, y detener una simulación no deja ningún proceso huérfano.',
        },
        {
          titre: 'Fiabilidad de los datos introducidos',
          texte: 'Los valores introducidos en un formulario llegan siempre como texto, mientras que la simulación espera tipos estrictos. Escribí un validador orientado a objetos que comprueba y convierte toda la configuración antes del lanzamiento, e indica claramente cada error al usuario.',
        },
        {
          titre: 'Pruebas y validación',
          texte: 'Varios casos de referencia se ejecutaron a la vez con el antiguo flujo por línea de comandos y con la interfaz, y luego se compararon automáticamente. Criterio de aceptación: una desviación relativa inferior al 1 % en todos los resultados, para garantizar que la interfaz no modifica nada.',
        },
        {
          titre: 'Despliegue y transmisión',
          texte: 'Aplicación portable en Linux (RHEL) y Windows, instalable sin derechos de administrador, con una versión ejecutable autónoma generada con PyInstaller. Redacté un manual de usuario y una guía completa para desarrolladores para que la herramienta siga siendo mantenible tras mi marcha, y presenté el trabajo ante un tribunal.',
        },
      ],
      images: [
        { cap: 'Pestaña Configuración: formulario de parámetros de una simulación' },
        { cap: 'Gestión de simulaciones simultáneas con seguimiento del progreso en tiempo real' },
        { cap: 'Ciclo de vida de una simulación: en cola, en ejecución, éxito, fallo o detenida' },
      ],
    },
    {
      titre: 'Diseñador 3D: prácticas de observación (modelado y animación)',
      meta: 'A3D Design, Limoges · julio de 2021',
      paras: [
        'Descubrimiento del diseño mecánico asistido por ordenador y del modelado 3D con SolidWorks. Esta experiencia me permitió observar las distintas etapas de preparación de un ensamblaje: lectura de piezas, colocación de los componentes y control de su coherencia mecánica.',
        'Las vistas de ensamblaje y las vistas explosionadas permiten comunicar con claridad la estructura de un mecanismo. Facilitan la identificación de los componentes, la comprensión de su montaje y la preparación de las operaciones de ensamblaje o mantenimiento.',
        'Estas prácticas reforzaron mi rigor, mi minuciosidad y mi capacidad para respetar un pliego de condiciones y unos plazos de realización.',
      ],
      images: [
        { cap: 'Ensamblaje mecánico en SolidWorks: un mecanismo compuesto por piezas, engranajes y elementos de unión.' },
        { cap: 'Vista explosionada en SolidWorks: los componentes están separados para que su posición y su orden de montaje se lean de inmediato.' },
      ],
    },
  ],

  natation: {
    stats: [
      { valeur: '18 años', label: 'de natación en club, desde 2008' },
      { valeur: '18 h', label: 'de entrenamiento por semana' },
      { valeur: 'Nacional', label: 'campeonatos de Francia' },
    ],
    atouts: [
      {
        titre: 'Gestión del tiempo',
        texte: 'Compaginar 18 horas de entrenamiento a la semana con una CUPGE exige una organización rigurosa. He aprendido a planificar, priorizar y mantenerme eficaz bajo presión.',
      },
      {
        titre: 'Progreso medible',
        texte: 'En natación, cada progreso se mide en centésimas. Analizo mis tiempos, ajusto mi entrenamiento y vuelvo a empezar: el mismo ciclo que medir, corregir e iterar sobre un circuito.',
      },
      {
        titre: 'Perseverancia',
        texte: 'Dieciocho años en la misma disciplina, hasta el nivel nacional. Esta constancia me ayuda a llevar a término los proyectos técnicos, sobre todo cuando un montaje no funciona a la primera.',
      },
    ],
  },

  projetsData: [
    {
      tag: 'Electrónica analógica',
      titre: 'Amplificadores de audio y pedal de efecto Overdrive-Distorsión',
      probleme: 'Comprender y reproducir el recorte característico de un pedal Tube Screamer TS808 a partir de un circuito existente.',
      solution: 'Ingeniería inversa del esquema, simulación del circuito, montaje en placa LABDEC y después fabricación de la placa electrónica. Diseño y prueba de amplificadores de audio en paralelo.',
      resultat: 'Prototipo final funcional, con el recorte medido y verificado en el osciloscopio.',
    },
    {
      tag: 'Robótica embebida',
      titre: 'Robot autónomo que esquiva obstáculos',
      probleme: 'Hacer que un robot circule de forma autónoma sin chocar con los obstáculos de su camino.',
      solution: 'Chasis de tracción a las 4 ruedas controlado por un Arduino Uno: sensor ultrasónico HC-SR04 para medir distancias, puente H L298N para controlar los motores, lógica de evasión programada en C++ (medición del eco, parada, retroceso, giro).',
      resultat: 'Robot montado que detecta un obstáculo, se detiene, retrocede y cambia de dirección por sí solo.',
    },
    {
      tag: 'Sensores y tiempo real',
      titre: 'Radar por ultrasonidos',
      probleme: 'Cartografiar el entorno cercano con un simple sensor de distancia.',
      solution: 'Sensor HC-SR04 montado sobre un servomotor que barre la zona, con datos enviados por enlace serie y mostrados en Processing.',
      resultat: 'Visualización en tiempo real de los obstáculos detectados, en forma de pantalla de radar.',
    },
    {
      tag: 'Sistema embebido · PBL',
      titre: 'StrongBox3000: caja fuerte electrónica',
      probleme: 'Proteger el acceso a una caja fuerte mediante un código, con una respuesta clara para el usuario.',
      solution: 'Microcontrolador conectado a un teclado para introducir el código, a una pantalla para los mensajes y a un servomotor para el cerrojo. Proyecto en equipo con metodología PBL.',
      resultat: 'Caja fuerte funcional validada en las pruebas de integración, desde el análisis de necesidades hasta el prototipo.',
      imgCredit: 'Imagen ilustrativa: Instructables, Electronic Safe',
    },
    {
      tag: 'Procesamiento de señales',
      titre: 'Cadena de audio: micrófono, filtrado y amplificación',
      probleme: 'Aprovechar la señal muy débil y ruidosa de un micrófono.',
      solution: 'Preamplificación con amplificador operacional, filtrado analógico para atenuar el ruido y etapa de amplificación, con el dimensionamiento de cada componente.',
      resultat: 'Señal amplificada y filtrada, validada en el osciloscopio.',
    },
    {
      tag: 'Programación embebida',
      titre: 'Juguete interactivo con servomotor',
      probleme: 'Animar un juguete con movimientos precisos y repetibles.',
      solution: 'Microcontrolador y servomotor, control PWM para posicionar el actuador y secuencias de movimiento programadas.',
      resultat: 'Juguete animado funcional, llevado desde el cableado hasta las pruebas de funcionamiento.',
      imgCredit: 'Imagen ilustrativa: Neeti Thakur vía Hackster.io',
    },
  ],

  pedaleGallery: [
    { cap: '1. Esquema electrónico del efecto (simulación)' },
    { cap: '2. Medición del recorte en el osciloscopio' },
  ],

  robotGallery: [
    { cap: '1. Inventario de componentes', credit: 'Foto Robin Glauser, Unsplash' },
    { cap: '2. Arduino Uno, el cerebro del robot', credit: 'Foto Harrison Broadbent, Unsplash' },
    { cap: '3. Cableado del sensor y los motores', credit: 'Foto Robin Glauser, Unsplash' },
    { cap: '4. Robot montado, listo para rodar', credit: 'Foto Marília Castelli, Unsplash' },
  ],

  skills: [
    { titre: 'Lenguajes y desarrollo', items: ['Python', 'C++ · C', 'SQL', 'HTML · JavaScript · Bash', 'POO · Git'] },
    { titre: 'Embebido y electrónica', items: ['Microcontroladores · Arduino', 'Electrónica analógica y digital', 'Sensores · RF · procesamiento de señales', 'Automática · PID', 'Soldadura · prototipado'] },
    { titre: 'Entornos y herramientas', items: ['Linux (RHEL) · Windows', 'YAML · JSON', 'Plotly · visualización de datos', 'Interfaces gráficas (GUI)'] },
    { titre: 'Métodos de ingeniería', items: ['Aprendizaje basado en problemas (PBL)', 'Gestión de proyectos', 'Gantt · MoSCoW', 'Redacción técnica', 'Pruebas y validación'] },
  ],

  formationCards: [
    { titre: 'Electrónica y señal', desc: 'Amplificación, filtrado, radiofrecuencia (RF), procesamiento de señales para sistemas de comunicación.' },
    { titre: 'Automática', desc: 'Leyes de control, regulación, control realimentado de sistemas lineales: PID, estabilidad, precisión.' },
    { titre: 'Embebido e informática', desc: 'Arquitectura de microcontroladores, POO (C++, Python), protocolos de red, SQL.' },
    { titre: 'Método PBL', desc: 'Aprendizaje basado en problemas: trabajo en equipo a partir de un caso real, análisis de necesidades, búsqueda de soluciones, prototipado y, por último, presentación y balance de la experiencia.' },
  ],

  licenceSubjects: [
    {
      titre: 'Electrónica',
      texte: 'Estudio a fondo los circuitos eléctricos y los filtros: leyes de Kirchhoff, regímenes transitorios, funciones de transferencia y diagramas de Bode. Esta asignatura me da las bases para diseñar y analizar los montajes que después utilizo en mis proyectos embebidos.',
    },
    {
      titre: 'Termodinámica',
      texte: 'Estudio los distintos fenómenos que intervienen en los intercambios de energía: transferencia de calor, primer y segundo principio, balances energéticos. Es esencial para comprender el calentamiento de los componentes y el rendimiento de los sistemas eléctricos.',
    },
    {
      titre: 'Electromagnetismo',
      texte: 'Esta asignatura me permite comprender lo que ocurre físicamente dentro de los circuitos eléctricos: campos eléctrico y magnético, inducción, propagación. Relaciona la teoría con el funcionamiento real de las bobinas, los motores y los transformadores.',
    },
  ],

  semesters: [
    {
      label: 'Semestre 1',
      credit: 'Foto de Dan Cristian Pădureț en Unsplash',
      topics: [
        'Matemáticas y lógica: números complejos, análisis, álgebra de Boole',
        'Electricidad: corriente continua y alterna',
        'Ondas, análisis frecuencial y filtrado',
        'Mecánica e incertidumbres',
        'Algoritmia: C/Arduino, Python',
      ],
    },
    {
      label: 'Semestre 2',
      credit: 'Foto de Danist Soh en Unsplash',
      topics: [
        'Probabilidad, estadística y álgebra',
        'Térmica y resistencia de materiales',
        'Bases de datos y lenguaje SQL',
        'CAD y gestión de la producción',
        'Argumentario técnico-comercial',
      ],
    },
    {
      label: 'Semestre 3 · Especialidad SEEE',
      credit: 'Foto de Alexandre Debiève en Unsplash',
      topics: [
        'Electromagnetismo y radioelectricidad',
        'Electrónica analógica: semiconductores, amplificadores operacionales',
        'Redes: direccionamiento IP, Ethernet, CCNA',
        'Sensores, actuadores, regulación y control',
        'Análisis en 3 dimensiones',
      ],
    },
    {
      label: 'Semestre 4',
      credit: 'Foto de Christopher Gower en Unsplash',
      topics: [
        'Programación orientada a objetos',
        'Programación embebida',
        'Arquitectura de computadores y ensamblador',
        'Teoría de lenguajes, estructuras de datos, complejidad',
        'Prácticas en empresa (8 semanas o más)',
      ],
    },
  ],

  formationImages: [
    { cap: 'Amplificador de audio, montaje no inversor' },
    { cap: 'Cableado de un sensor ultrasónico y un microcontrolador' },
    { cap: 'Medición y validación en el osciloscopio' },
    { cap: 'Diseño y trazado de una placa de control' },
  ],
};
