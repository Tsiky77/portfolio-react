const BASE = import.meta.env.BASE_URL;

export const pages = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'experience', label: 'Expérience' },
  { id: 'formation', label: 'Formation' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

export const experiences = [
  {
    label: 'ONERA',
    titre: "Stagiaire Développeur Python : interface graphique et visualisation scientifique",
    meta: "ONERA, Département Physique (DPHY), Toulouse · avril à juin 2026",
    details: [
      {
        titre: 'Contexte et objectif',
        texte: "Développement d'une interface graphique pour CSiPI, un code de simulation Monte Carlo utilisé pour étudier l'érosion par pulvérisation ionique dans le cadre de la propulsion électrique spatiale. L'objectif était de rendre les calculs plus accessibles aux chercheurs, de la préparation d'un cas de simulation à l'analyse des résultats.",
      },
      {
        titre: 'Interface et visualisation scientifique',
        texte: "Conception d'une application complète en Python, Eel, HTML et JavaScript. Mise en place de formulaires de configuration pour les paramètres physiques, de graphiques interactifs avec Plotly et de visualisations 3D afin de faciliter l'interprétation des résultats.",
      },
      {
        titre: 'Gestion des simulations',
        texte: "Mise en œuvre d'une architecture permettant de lancer plusieurs simulations en parallèle, avec isolation des jobs, suivi de leur progression en temps réel et gestion robuste des processus. Les paramètres et résultats sont structurés en YAML et JSON pour assurer leur traçabilité.",
      },
      {
        titre: "Industrialisation de l'outil",
        texte: "Développement d'une application portable sous Linux (RHEL) et Windows, avec génération automatique de rapports PDF. Travail sur la fluidité de l'IHM et l'optimisation des flux de données pour conserver une expérience réactive, même avec de nombreux paramètres de simulation.",
      },
      {
        titre: 'Collaboration et validation',
        texte: "Échanges réguliers avec les chercheurs du département de physique (DPHY/CSE) pour recueillir les besoins, tester les fonctionnalités et valider les résultats. Rédaction d'un rapport technique complet et présentation du travail devant un jury.",
      },
    ],
    images: [
      { src: `${BASE}assets/onera-configuration.png`, cap: "Onglet Configuration : paramétrage de la simulation (particule incidente, cible)" },
      { src: `${BASE}assets/onera-simulations.png`, cap: "Gestion des simulations concurrentes avec suivi de progression en temps réel" },
    ],
  },
  {
    label: 'A3D Design',
    titre: "Designer 3D : stage d'observation (modélisation et animation)",
    meta: "A3D Design, Limoges · juillet 2021",
    paras: [
      "Découverte de la conception mécanique assistée par ordinateur et de la modélisation 3D sous SolidWorks. Cette expérience m'a permis d'observer les différentes étapes de préparation d'un assemblage : lecture de pièces, positionnement des composants et contrôle de leur cohérence mécanique.",
      "Les vues d'assemblage et les vues éclatées permettent de communiquer clairement la structure d'un mécanisme. Elles facilitent l'identification des composants, la compréhension de leur montage et la préparation des opérations d'assemblage ou de maintenance.",
      "Ce stage a renforcé ma rigueur, ma minutie et ma capacité à respecter un cahier des charges ainsi que des délais de réalisation.",
    ],
    images: [
      { src: `${BASE}assets/a3d-modelisation-solidworks.jpeg`, cap: "Assemblage mécanique sous SolidWorks : visualisation d'un mécanisme composé de pièces, pignons et éléments de liaison." },
      { src: `${BASE}assets/a3d-vue-eclatee-solidworks.jpeg`, cap: "Vue éclatée sous SolidWorks : les composants sont séparés pour rendre leur positionnement et leur ordre d'assemblage immédiatement lisibles." },
    ],
  },
  {
    label: 'Natation',
    titre: "Nageur de compétition (niveau national)",
    meta: "ASPTT Toulouse Natation · depuis septembre 2008",
    paras: [
      "Entraînements intensifs (18 heures par semaine), participation aux championnats nationaux.",
      "Gestion du double projet sport-études : organisation, discipline, résilience.",
    ],
  },
];

export const projetsData = [
  {
    tag: 'Électronique analogique',
    cat: 'Électronique',
    titre: "Amplis audio & pédale d'effet Overdrive-Distorsion",
    desc: "Pédale de type Tube Screamer TS808 : simulation du circuit, rétro-ingénierie du schéma, montage sur plaque LABDEC puis réalisation de la carte électronique et du prototype final. Conception et test d'amplis audio.",
    imgSrc: `${BASE}assets/pedale-p3b.png`,
  },
  {
    tag: 'Robotique embarquée',
    cat: 'Embarqué',
    titre: 'Robot autonome à évitement d\'obstacles',
    desc: "Châssis 4 roues motrices sur Arduino Uno : capteur ultrasonique HC-SR04, pilotage des moteurs via pont en H L298N, logique d'évitement programmée en C++ (mesure d'écho, arrêt, recul, pivot).",
    imgSrc: 'https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Marília Castelli on Unsplash',
    imgCreditHref: 'https://unsplash.com/@liacastelli',
  },
  {
    tag: 'Capteurs & temps réel',
    cat: 'Embarqué',
    titre: 'Radar à ultrasons',
    desc: 'Capteur HC-SR04 et servomoteur, acquisition et visualisation de données en temps réel sous Processing.',
    imgSrc: 'https://images.unsplash.com/photo-1631378297854-185cff6b0986?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Vishnu Mohanan on Unsplash',
    imgCreditHref: 'https://unsplash.com/@vishnumaiea',
  },
  {
    tag: 'Système embarqué · PBL',
    cat: 'Embarqué',
    titre: 'StrongBox3000 — Coffre-fort électronique',
    desc: "Conception d'un coffre-fort électronique piloté par microcontrôleur : saisie d'un code d'accès sur clavier, retour utilisateur sur écran et commande du verrou par servomoteur. Projet mené en équipe selon une démarche PBL, de l'analyse du besoin aux essais d'intégration.",
    imgSrc: 'https://content.instructables.com/FYU/7V00/JASJQJKX/FYU7V00JASJQJKX.jpg',
    imgCredit: 'Image d’illustration : Instructables — Electronic Safe',
    imgCreditHref: 'https://www.instructables.com/Electronic-Safe/',
  },
  {
    tag: 'Traitement du signal',
    cat: 'Électronique',
    titre: 'Chaîne audio — microphone, filtrage et amplification',
    desc: "Conception d'une chaîne de traitement audio autour d'un microphone : préamplification par AOP, filtrage analogique pour atténuer le bruit et étage d'amplification. Dimensionnement des composants puis validation du signal à l'oscilloscope.",
    imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Alexandre Debiève on Unsplash',
    imgCreditHref: 'https://unsplash.com/@alexkixa',
  },
  {
    tag: 'Programmation embarquée',
    cat: 'Embarqué',
    titre: 'Jouet interactif à servomoteur',
    desc: "Réalisation d'un jouet animé à base de microcontrôleur et de servomoteur. Programmation de la commande PWM pour positionner l'actionneur et mise au point des séquences de mouvement, du câblage jusqu'aux essais de fonctionnement.",
    imgSrc: 'https://hackster.imgix.net/uploads/attachments/1603576/_8gKYMbBWHJ.blob?auto=compress&fit=min&fm=jpg&h=1200&w=1600',
    imgCredit: 'Image d’illustration : Neeti Thakur via Hackster.io',
    imgCreditHref: 'https://www.hackster.io/neetithakur/servo-with-arduino-uno-39065b',
  },
];

export const pedaleGallery = [
  { src: `${BASE}assets/pedale-p3b.png`, cap: "1. Schéma électronique de l'effet (simulation)" },
  { src: `${BASE}assets/pedale-p5c.png`, cap: "2. Mesure de l'écrêtage à l'oscilloscope" },
];

export const robotGallery = [
  { src: 'https://images.unsplash.com/photo-1577962144759-8dec6b55c952?q=80&w=800&auto=format&fit=crop', cap: '1. Inventaire des composants', credit: 'Photo Robin Glauser, Unsplash', creditHref: 'https://unsplash.com/@nahakiole' },
  { src: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=800&auto=format&fit=crop', cap: '2. Arduino Uno, cerveau du robot', credit: 'Photo Harrison Broadbent, Unsplash', creditHref: 'https://unsplash.com/@harrisonbroadbent' },
  { src: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop', cap: '3. Câblage capteur et moteurs', credit: 'Photo Robin Glauser, Unsplash', creditHref: 'https://unsplash.com/@nahakiole' },
  { src: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=800&auto=format&fit=crop', cap: '4. Robot assemblé, prêt à rouler', credit: 'Photo Marília Castelli, Unsplash', creditHref: 'https://unsplash.com/@liacastelli' },
];

export const projFilters = ['Tous', 'Électronique', 'Embarqué'];

export const skills = [
  { titre: 'Langages & développement', items: ['Python', 'C++ · C', 'SQL', 'HTML · JavaScript · Bash', 'POO · Git'] },
  { titre: 'Embarqué & électronique', items: ['Microcontrôleurs · Arduino', 'Électronique analogique & numérique', 'Capteurs · RF · traitement du signal', 'Automatique · PID', 'Soudure · prototypage'] },
  { titre: 'Environnements & outils', items: ['Linux (RHEL) · Windows', 'YAML · JSON', 'Plotly · visualisation de données', 'Interfaces graphiques (GUI)'] },
  { titre: "Méthodes d'ingénierie", items: ['Apprentissage par problèmes (PBL)', 'Gestion de projet', 'Gantt · MoSCoW', 'Rédaction technique', 'Tests & validation'] },
];

export const formationCards = [
  { titre: 'Électronique et signal', desc: 'Amplification, filtrage, radiofréquence (RF), traitement du signal pour systèmes communicants.' },
  { titre: 'Automatique', desc: 'Lois de commande, régulation, asservissement de systèmes linéaires : PID, stabilité, précision.' },
  { titre: 'Embarqué et informatique', desc: 'Architecture des microcontrôleurs, POO (C++, Python), protocoles réseaux, SQL.' },
  { titre: 'Méthode PBL', desc: 'Apprentissage par problèmes : travail en équipe à partir d’un cas concret, analyse du besoin, recherche de solutions, prototypage puis restitution et retour d’expérience.' },
];

export const licenceCourseGroups = [
  {
    label: 'Enseignements communs · S1 & S2',
    courses: [
      ['KEAFA02U', 'Automatique 2'],
      ['KEAFA03U', 'Informatique industrielle'],
      ['KEAFE02U', 'Électromagnétisme'],
      ['KEAFE03U', 'Énergie électrique 3'],
      ['KEAFE03U', 'Machine électrique 4'],
      ['KEAFF06U', 'Mathématiques · Fonctions & calcul 3'],
      ['KEAFF07U', 'Mathématiques · Fonctions & calcul 4'],
      ['KEAFN01U', 'Électronique · Initiation à l’analogique'],
      ['KEAFN02U', 'Électronique · Fonctions de l’analogique'],
      ['KEAFO01U', 'Outils numériques 1 pour l’EEA'],
      ['KEAFO02U', 'Outils numériques 2 pour l’EEA'],
      ['KEAFS01U', 'Introduction au traitement du signal et de l’image'],
      ['KLANE20U', 'Anglais · Ethical Issues'],
      ['KLANG20U', 'Anglais · Going Abroad'],
      ['KLANS20U', 'Anglais · Science in Fiction'],
    ],
  },
  {
    label: 'Premier semestre',
    courses: [
      ['KEAFB07U', 'Thermique'],
      ['KEAFB08U', 'Outils électriques pour l’électronique'],
      ['KEAFZ30U', 'Connaissance de l’entreprise'],
      ['KLTUT10U', 'Langue · Tutorat CRL1'],
      ['KEAIS01U', 'Biophysique pour le soin et la santé'],
    ],
  },
  {
    label: 'Second semestre',
    courses: [
      ['KEAFN03U', 'Électronique numérique'],
      ['KEAXPT10', 'Projet transversal EEA'],
      ['KEAIS02U', 'Dispositifs médicaux et imagerie'],
    ],
  },
];

export const semesters = [
  {
    label: 'Semestre 1',
    photo: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Dan Cristian Pădureț on Unsplash',
    creditHref: 'https://unsplash.com/@dancristianpaduret',
    topics: [
      'Mathématiques et logique : complexes, analyse, algèbre de Boole',
      'Électricité : courant continu et alternatif',
      'Ondes, étude fréquentielle et filtrage',
      'Mécanique et incertitudes',
      'Algorithmique : C/Arduino, Python',
    ],
  },
  {
    label: 'Semestre 2',
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Danist Soh on Unsplash',
    creditHref: 'https://unsplash.com/@danist07',
    topics: [
      'Probabilités, statistiques et algèbre',
      'Thermique et résistance des matériaux (RDM)',
      'Bases de données et langage SQL',
      'CAO et gestion de production',
      'Argumentaire technico-commercial',
    ],
  },
  {
    label: 'Semestre 3 · Spécialité SEEE',
    photo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Alexandre Debiève on Unsplash',
    creditHref: 'https://unsplash.com/@alexkixa',
    topics: [
      'Électromagnétisme et radioélectricité',
      'Électronique analogique : semi-conducteurs, AOP',
      'Réseaux : adressage IP, Ethernet, CCNA',
      'Capteurs, actionneurs, régulation et asservissement',
      'Analyse en 3 dimensions',
    ],
  },
  {
    label: 'Semestre 4',
    photo: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop',
    credit: 'Photo by Christopher Gower on Unsplash',
    creditHref: 'https://unsplash.com/@cgower',
    topics: [
      'Programmation orientée objet',
      'Programmation embarquée',
      'Architectures informatiques et assembleur',
      'Théorie du langage, structures de données, complexité',
      'Stage en entreprise (8 semaines et plus)',
    ],
  },
];

export const formationImages = [
  { src: `${BASE}assets/cesi-schema-ampli.svg`, cap: 'Amplificateur audio, montage non inverseur' },
  { src: `${BASE}assets/cesi-cablage-arduino.svg`, cap: 'Câblage capteur ultrasons et microcontrôleur' },
  { src: `${BASE}assets/cesi-oscilloscope.svg`, cap: "Mesure et validation à l'oscilloscope" },
  { src: `${BASE}assets/cesi-pcb-layout.svg`, cap: "Conception et routage d'une carte de commande" },
];

export const CV_PATH = `${BASE}CV_Tsiky_ANDRIANARISATA.pdf`;
export const EMAIL = 'andrianarisatatsiky@gmail.com';
export const PHONE_DISPLAY = '06 41 15 96 12';
export const PHONE_HREF = '+33641159612';
