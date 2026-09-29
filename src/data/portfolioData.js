const BASE = import.meta.env.BASE_URL;

export const pages = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'experience', label: 'Expérience' },
  { id: 'formation', label: 'Formation' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'natation', label: 'Natation' },
  { id: 'contact', label: 'Contact' },
];

export const experiences = [
  {
    label: 'ONERA',
    titre: "Stagiaire Développeur Python : interface graphique et visualisation scientifique",
    meta: "ONERA, Département Physique (DPHY), Toulouse · 8 juin au 27 juillet 2026",
    chiffres: [
      { valeur: '≈ 9 700', label: 'lignes de code (Python, JavaScript, HTML)' },
      { valeur: '< 1 %', label: "d'écart avec le workflow historique" },
      { valeur: 'FR · EN', label: 'interface bilingue' },
    ],
    details: [
      {
        titre: 'Contexte et objectif',
        texte: "Les chercheurs de l'ONERA utilisent CSiPI, un code de simulation qui se pilotait jusqu'ici uniquement en ligne de commande. Ma mission : concevoir une interface graphique qui rende cet outil accessible, de la préparation d'un cas de simulation jusqu'à l'affichage des résultats.",
      },
      {
        titre: 'Architecture de l’interface',
        texte: "Une interface web (HTML, JavaScript, Bootstrap, Plotly.js) reliée à une couche applicative en Python par Eel, via WebSocket. Le code de calcul existant reste intact : l'interface prépare la configuration, lance la simulation et lit les fichiers de résultats pour les afficher.",
      },
      {
        titre: 'Simulations en parallèle, isolées et suivies en temps réel',
        texte: "Chaque simulation tourne dans son propre bac à sable pour que les résultats ne se mélangent jamais. Un sémaphore limite le nombre de calculs simultanés et place les autres en file d'attente. La progression et le journal remontent en direct dans le navigateur, et un arrêt ne laisse aucun processus orphelin.",
      },
      {
        titre: 'Fiabilité des saisies',
        texte: "Les valeurs saisies dans un formulaire arrivent toujours sous forme de texte, alors que la simulation attend des types stricts. J'ai écrit un validateur orienté objet qui contrôle et convertit toute la configuration avant le lancement, et signale clairement chaque erreur à l'utilisateur.",
      },
      {
        titre: 'Tests et validation',
        texte: "Plusieurs cas de référence ont été lancés à la fois par l'ancien workflow en ligne de commande et par l'interface, puis comparés automatiquement. Critère d'acceptation : un écart relatif inférieur à 1 % sur tous les résultats, pour garantir que l'interface ne modifie rien.",
      },
      {
        titre: 'Déploiement et transmission',
        texte: "Application portable sous Linux (RHEL) et Windows, installable sans droits administrateur, avec une version exécutable autonome générée par PyInstaller. J'ai rédigé un manuel utilisateur et un guide développeur complet pour que l'outil reste maintenable après mon départ, puis présenté le travail devant un jury.",
      },
    ],
    images: [
      { src: `${BASE}assets/onera-configuration.png`, cap: "Onglet Configuration : formulaire de paramétrage d’une simulation" },
      { src: `${BASE}assets/onera-simulations.png`, cap: "Gestion des simulations concurrentes avec suivi de progression en temps réel" },
      { src: `${BASE}assets/onera-cycle-job.png`, cap: "Cycle de vie d'une simulation : file d'attente, exécution, succès, échec ou arrêt", diagramme: true },
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
];

// Champs optionnels par projet : github (lien du dépôt) et video (lien YouTube ou fichier dans public/).
export const natation = {
  club: 'ASPTT Toulouse Natation',
  stats: [
    { valeur: '18 ans', label: 'de natation en club, depuis 2008' },
    { valeur: '18 h', label: "d'entraînement par semaine" },
    { valeur: 'National', label: 'championnats de France' },
  ],
  atouts: [
    {
      titre: 'Gestion du temps',
      texte: "Mener 18 heures d'entraînement par semaine en parallèle d'une CUPGE demande une organisation rigoureuse. J'ai appris à planifier, prioriser et rester efficace sous pression.",
    },
    {
      titre: 'Progrès mesurable',
      texte: "En natation, chaque progrès se mesure au centième. J'analyse mes temps, j'ajuste mon entraînement et je recommence : la même boucle que mesurer, corriger et itérer sur un circuit.",
    },
    {
      titre: 'Persévérance',
      texte: "Dix-huit ans dans la même discipline, jusqu'au niveau national. Cette constance m'aide à aller au bout des projets techniques, surtout quand un montage ne fonctionne pas du premier coup.",
    },
  ],
};

export const projetsData = [
  {
    tag: 'Électronique analogique',
    cat: 'Électronique',
    titre: "Amplis audio & pédale d'effet Overdrive-Distorsion",
    probleme: "Comprendre et reproduire l'écrêtage caractéristique d'une pédale Tube Screamer TS808 à partir d'un circuit existant.",
    solution: "Rétro-ingénierie du schéma, simulation du circuit, montage sur plaque LABDEC puis réalisation de la carte électronique. Conception et test d'amplis audio en parallèle.",
    resultat: "Prototype final fonctionnel, avec un écrêtage mesuré et vérifié à l'oscilloscope.",
    imgSrc: `${BASE}assets/pedale-p3b.png`,
  },
  {
    tag: 'Robotique embarquée',
    cat: 'Embarqué',
    titre: 'Robot autonome à évitement d\'obstacles',
    probleme: "Faire rouler un robot en autonomie sans qu'il percute les obstacles sur son chemin.",
    solution: "Châssis 4 roues motrices piloté par une Arduino Uno : capteur ultrasonique HC-SR04 pour mesurer les distances, pont en H L298N pour commander les moteurs, logique d'évitement codée en C++ (mesure d'écho, arrêt, recul, pivot).",
    resultat: "Robot assemblé qui détecte un obstacle, s'arrête, recule et change de direction de lui-même.",
    imgSrc: 'https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Marília Castelli on Unsplash',
    imgCreditHref: 'https://unsplash.com/@liacastelli',
  },
  {
    tag: 'Capteurs & temps réel',
    cat: 'Embarqué',
    titre: 'Radar à ultrasons',
    probleme: "Cartographier son environnement proche avec un simple capteur de distance.",
    solution: "Capteur HC-SR04 monté sur un servomoteur qui balaie la zone, données transmises par liaison série et affichées sous Processing.",
    resultat: "Visualisation en temps réel des obstacles détectés, sous la forme d'un écran radar.",
    imgSrc: 'https://images.unsplash.com/photo-1631378297854-185cff6b0986?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Vishnu Mohanan on Unsplash',
    imgCreditHref: 'https://unsplash.com/@vishnumaiea',
  },
  {
    tag: 'Système embarqué · PBL',
    cat: 'Embarqué',
    titre: 'StrongBox3000 : coffre-fort électronique',
    probleme: "Sécuriser l'accès à un coffre par un code, avec un retour clair pour l'utilisateur.",
    solution: "Microcontrôleur relié à un clavier pour la saisie du code, à un écran pour les messages et à un servomoteur pour le verrou. Projet mené en équipe selon une démarche PBL.",
    resultat: "Coffre fonctionnel validé lors des essais d'intégration, de l'analyse du besoin jusqu'au prototype.",
    imgSrc: 'https://content.instructables.com/FYU/7V00/JASJQJKX/FYU7V00JASJQJKX.jpg',
    imgCredit: 'Image d’illustration : Instructables, Electronic Safe',
    imgCreditHref: 'https://www.instructables.com/Electronic-Safe/',
  },
  {
    tag: 'Traitement du signal',
    cat: 'Électronique',
    titre: 'Chaîne audio : microphone, filtrage et amplification',
    probleme: "Exploiter le signal très faible et bruité d'un microphone.",
    solution: "Préamplification par AOP, filtrage analogique pour atténuer le bruit puis étage d'amplification, avec dimensionnement de chaque composant.",
    resultat: "Signal amplifié et filtré, validé à l'oscilloscope.",
    imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    imgCredit: 'Photo by Alexandre Debiève on Unsplash',
    imgCreditHref: 'https://unsplash.com/@alexkixa',
  },
  {
    tag: 'Programmation embarquée',
    cat: 'Embarqué',
    titre: 'Jouet interactif à servomoteur',
    probleme: "Animer un jouet avec des mouvements précis et répétables.",
    solution: "Microcontrôleur et servomoteur, commande PWM pour positionner l'actionneur et séquences de mouvement programmées.",
    resultat: "Jouet animé fonctionnel, mené du câblage jusqu'aux essais de fonctionnement.",
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

export const licenceSubjects = [
  {
    titre: 'Électronique',
    texte: "Je revois en profondeur les circuits électriques et les filtres : lois de Kirchhoff, régimes transitoires, fonctions de transfert et diagrammes de Bode. Cette matière me donne les bases pour concevoir et analyser les montages que j'utilise ensuite dans mes projets embarqués.",
  },
  {
    titre: 'Thermodynamique',
    texte: "J'y étudie les différents phénomènes qui interviennent dans les échanges d'énergie : transferts de chaleur, premier et second principe, bilans énergétiques. C'est essentiel pour comprendre l'échauffement des composants et le rendement des systèmes électriques.",
  },
  {
    titre: 'Électromagnétisme',
    texte: "Cette matière me permet de comprendre ce qui se passe physiquement à l'intérieur des circuits électriques : champs électrique et magnétique, induction, propagation. Elle fait le lien entre la théorie et le fonctionnement réel des bobines, des moteurs et des transformateurs.",
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
