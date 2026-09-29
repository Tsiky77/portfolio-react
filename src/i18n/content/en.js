// Traduction anglaise du contenu de src/data/portfolioData.js.
// Même structure, dans le même ordre : seuls les textes sont repris ici.
export default {
  parcours: [
    { date: 'Since 2008', titre: 'Competitive swimming', type: 'Sport' },
    { date: 'July 2021', titre: '3D design observation internship', type: 'Internship' },
    { date: '2024 to 2026', titre: 'Integrated preparatory cycle, SEEE', lieu: 'CESI School of Engineering, Toulouse', type: 'Education' },
    { date: 'June to July 2026', titre: 'Python developer internship', type: 'Internship' },
    { date: 'Since September 2026', titre: 'Bachelor L2 EEA, CUPGE', type: 'Education' },
    { date: 'June 2027', titre: '2-month internship in embedded systems', lieu: 'Wanted', type: 'Goal' },
  ],

  experiences: [
    {
      titre: 'Python Developer Intern: graphical user interface and scientific visualisation',
      meta: 'ONERA, Physics Department (DPHY), Toulouse · 8 June to 27 July 2026',
      chiffres: [
        { valeur: '≈ 9,700', label: 'lines of code (Python, JavaScript, HTML)' },
        { label: 'deviation from the original workflow' },
        { label: 'bilingual interface' },
      ],
      details: [
        {
          titre: 'Context and goal',
          texte: 'ONERA researchers use CSiPI, a simulation code that until now could only be run from the command line. My mission: design a graphical interface that makes this tool accessible, from preparing a simulation case to displaying the results.',
        },
        {
          titre: 'Interface architecture',
          texte: 'A web interface (HTML, JavaScript, Bootstrap, Plotly.js) connected to a Python application layer through Eel, over WebSocket. The existing computation code stays untouched: the interface prepares the configuration, launches the simulation and reads the result files to display them.',
        },
        {
          titre: 'Parallel, isolated simulations with real-time tracking',
          texte: 'Each simulation runs in its own sandbox so that results never get mixed up. A semaphore limits the number of simultaneous runs and queues the others. Progress and logs are streamed live to the browser, and stopping a run leaves no orphan process behind.',
        },
        {
          titre: 'Reliable input',
          texte: 'Values typed into a form always arrive as text, whereas the simulation expects strict types. I wrote an object-oriented validator that checks and converts the whole configuration before launch, and clearly reports every error to the user.',
        },
        {
          titre: 'Testing and validation',
          texte: 'Several reference cases were run both through the old command-line workflow and through the interface, then compared automatically. Acceptance criterion: a relative deviation below 1% on all results, to guarantee that the interface changes nothing.',
        },
        {
          titre: 'Deployment and handover',
          texte: 'Portable application for Linux (RHEL) and Windows, installable without administrator rights, with a standalone executable built with PyInstaller. I wrote a user manual and a complete developer guide so the tool remains maintainable after my departure, then presented the work to a jury.',
        },
      ],
      images: [
        { cap: 'Configuration tab: simulation settings form' },
        { cap: 'Managing concurrent simulations with real-time progress tracking' },
        { cap: 'Lifecycle of a simulation: queued, running, success, failure or stopped' },
      ],
    },
    {
      titre: '3D Designer: observation internship (modelling and animation)',
      meta: 'A3D Design, Limoges · July 2021',
      paras: [
        'An introduction to computer-aided mechanical design and 3D modelling with SolidWorks. This experience let me observe the different steps in preparing an assembly: reading parts, positioning components and checking their mechanical consistency.',
        'Assembly views and exploded views communicate the structure of a mechanism clearly. They make it easier to identify components, understand how they fit together and prepare assembly or maintenance operations.',
        'This internship strengthened my rigour, my attention to detail and my ability to meet specifications and deadlines.',
      ],
      images: [
        { cap: 'Mechanical assembly in SolidWorks: a mechanism made of parts, gears and connecting elements.' },
        { cap: 'Exploded view in SolidWorks: the components are separated so their position and assembly order are immediately clear.' },
      ],
    },
  ],

  natation: {
    stats: [
      { valeur: '18 years', label: 'of club swimming, since 2008' },
      { valeur: '18 h', label: 'of training per week' },
      { valeur: 'National', label: 'French championships' },
    ],
    atouts: [
      {
        titre: 'Time management',
        texte: 'Fitting 18 hours of training a week alongside a CUPGE requires rigorous organisation. I have learned to plan, prioritise and stay effective under pressure.',
      },
      {
        titre: 'Measurable progress',
        texte: 'In swimming, every improvement is measured to the hundredth of a second. I analyse my times, adjust my training and start again: the same loop as measuring, correcting and iterating on a circuit.',
      },
      {
        titre: 'Perseverance',
        texte: 'Eighteen years in the same sport, up to national level. This consistency helps me see technical projects through, especially when a circuit does not work the first time.',
      },
    ],
  },

  projetsData: [
    {
      tag: 'Analogue electronics',
      titre: 'Audio amplifiers & Overdrive-Distortion effects pedal',
      probleme: 'Understand and reproduce the characteristic clipping of a Tube Screamer TS808 pedal from an existing circuit.',
      solution: 'Reverse-engineering of the schematic, circuit simulation, breadboard prototyping on LABDEC, then building the circuit board. Audio amplifiers designed and tested in parallel.',
      resultat: 'Working final prototype, with the clipping measured and verified on the oscilloscope.',
    },
    {
      tag: 'Embedded robotics',
      titre: 'Autonomous obstacle-avoiding robot',
      probleme: 'Make a robot drive on its own without hitting the obstacles in its path.',
      solution: '4-wheel-drive chassis controlled by an Arduino Uno: HC-SR04 ultrasonic sensor to measure distances, L298N H-bridge to drive the motors, avoidance logic written in C++ (echo measurement, stop, reverse, pivot).',
      resultat: 'Assembled robot that detects an obstacle, stops, backs up and changes direction on its own.',
    },
    {
      tag: 'Sensors & real time',
      titre: 'Ultrasonic radar',
      probleme: 'Map the nearby surroundings with a simple distance sensor.',
      solution: 'HC-SR04 sensor mounted on a servo motor that sweeps the area, with data sent over a serial link and displayed in Processing.',
      resultat: 'Real-time display of detected obstacles as a radar screen.',
    },
    {
      tag: 'Embedded system · PBL',
      titre: 'StrongBox3000: electronic safe',
      probleme: 'Secure access to a safe with a code, with clear feedback for the user.',
      solution: 'Microcontroller connected to a keypad for code entry, a display for messages and a servo motor for the lock. Team project following a PBL approach.',
      resultat: 'Working safe validated during integration tests, from needs analysis to prototype.',
      imgCredit: 'Illustration: Instructables, Electronic Safe',
    },
    {
      tag: 'Signal processing',
      titre: 'Audio chain: microphone, filtering and amplification',
      probleme: 'Make use of the very weak and noisy signal from a microphone.',
      solution: 'Op-amp preamplification, analogue filtering to reduce noise, then an amplification stage, with every component sized by calculation.',
      resultat: 'Amplified and filtered signal, validated on the oscilloscope.',
    },
    {
      tag: 'Embedded programming',
      titre: 'Interactive servo-driven toy',
      probleme: 'Animate a toy with precise, repeatable movements.',
      solution: 'Microcontroller and servo motor, PWM control to position the actuator, and programmed movement sequences.',
      resultat: 'Working animated toy, taken from wiring through to functional testing.',
      imgCredit: 'Illustration: Neeti Thakur via Hackster.io',
    },
  ],

  pedaleGallery: [
    { cap: '1. Schematic of the effect (simulation)' },
    { cap: '2. Measuring the clipping on the oscilloscope' },
  ],

  robotGallery: [
    { cap: '1. Component inventory', credit: 'Photo Robin Glauser, Unsplash' },
    { cap: '2. Arduino Uno, the robot’s brain', credit: 'Photo Harrison Broadbent, Unsplash' },
    { cap: '3. Wiring the sensor and motors', credit: 'Photo Robin Glauser, Unsplash' },
    { cap: '4. Assembled robot, ready to drive', credit: 'Photo Marília Castelli, Unsplash' },
  ],

  skills: [
    { titre: 'Languages & development', items: ['Python', 'C++ · C', 'SQL', 'HTML · JavaScript · Bash', 'OOP · Git'] },
    { titre: 'Embedded & electronics', items: ['Microcontrollers · Arduino', 'Analogue & digital electronics', 'Sensors · RF · signal processing', 'Control engineering · PID', 'Soldering · prototyping'] },
    { titre: 'Environments & tools', items: ['Linux (RHEL) · Windows', 'YAML · JSON', 'Plotly · data visualisation', 'Graphical user interfaces (GUI)'] },
    { titre: 'Engineering methods', items: ['Problem-based learning (PBL)', 'Project management', 'Gantt · MoSCoW', 'Technical writing', 'Testing & validation'] },
  ],

  formationCards: [
    { titre: 'Electronics and signals', desc: 'Amplification, filtering, radio frequency (RF), signal processing for communication systems.' },
    { titre: 'Control engineering', desc: 'Control laws, regulation, feedback control of linear systems: PID, stability, accuracy.' },
    { titre: 'Embedded systems and computing', desc: 'Microcontroller architecture, OOP (C++, Python), network protocols, SQL.' },
    { titre: 'PBL method', desc: 'Problem-based learning: teamwork on a real case, needs analysis, search for solutions, prototyping, then presentation and lessons learned.' },
  ],

  licenceSubjects: [
    {
      titre: 'Electronics',
      texte: 'I study electrical circuits and filters in depth: Kirchhoff’s laws, transient responses, transfer functions and Bode plots. This subject gives me the foundations to design and analyse the circuits I then use in my embedded projects.',
    },
    {
      titre: 'Thermodynamics',
      texte: 'I study the phenomena involved in energy exchanges: heat transfer, the first and second laws, energy balances. It is essential for understanding component heating and the efficiency of electrical systems.',
    },
    {
      titre: 'Electromagnetism',
      texte: 'This subject helps me understand what physically happens inside electrical circuits: electric and magnetic fields, induction, propagation. It links theory to how coils, motors and transformers actually work.',
    },
  ],

  semesters: [
    {
      label: 'Semester 1',
      topics: [
        'Mathematics and logic: complex numbers, analysis, Boolean algebra',
        'Electricity: direct and alternating current',
        'Waves, frequency analysis and filtering',
        'Mechanics and uncertainty',
        'Algorithms: C/Arduino, Python',
      ],
    },
    {
      label: 'Semester 2',
      topics: [
        'Probability, statistics and algebra',
        'Heat transfer and strength of materials',
        'Databases and SQL',
        'CAD and production management',
        'Technical sales pitch',
      ],
    },
    {
      label: 'Semester 3 · SEEE major',
      topics: [
        'Electromagnetism and radio electronics',
        'Analogue electronics: semiconductors, op-amps',
        'Networks: IP addressing, Ethernet, CCNA',
        'Sensors, actuators, regulation and feedback control',
        '3D analysis',
      ],
    },
    {
      label: 'Semester 4',
      topics: [
        'Object-oriented programming',
        'Embedded programming',
        'Computer architecture and assembly language',
        'Language theory, data structures, complexity',
        'Company internship (8 weeks or more)',
      ],
    },
  ],

  formationImages: [
    { cap: 'Audio amplifier, non-inverting configuration' },
    { cap: 'Wiring an ultrasonic sensor to a microcontroller' },
    { cap: 'Measurement and validation on the oscilloscope' },
    { cap: 'Design and routing of a control board' },
  ],
};
