// Traduction allemande du contenu de src/data/portfolioData.js.
// Même structure, dans le même ordre : seuls les textes sont repris ici.
export default {
  experiences: [
    {
      titre: 'Praktikant Python-Entwicklung: grafische Benutzeroberfläche und wissenschaftliche Visualisierung',
      meta: 'ONERA, Abteilung Physik (DPHY), Toulouse · 8. Juni bis 27. Juli 2026',
      chiffres: [
        { valeur: '≈ 9.700', label: 'Codezeilen (Python, JavaScript, HTML)' },
        { label: 'Abweichung vom bisherigen Workflow' },
        { label: 'zweisprachige Oberfläche' },
      ],
      details: [
        {
          titre: 'Kontext und Ziel',
          texte: 'Die Forschenden der ONERA nutzen CSiPI, einen Simulationscode, der bisher nur über die Kommandozeile bedient werden konnte. Meine Aufgabe: eine grafische Oberfläche entwickeln, die dieses Werkzeug zugänglich macht, von der Vorbereitung eines Simulationsfalls bis zur Anzeige der Ergebnisse.',
        },
        {
          titre: 'Architektur der Oberfläche',
          texte: 'Eine Weboberfläche (HTML, JavaScript, Bootstrap, Plotly.js), die über Eel per WebSocket mit einer Python-Anwendungsschicht verbunden ist. Der bestehende Berechnungscode bleibt unverändert: Die Oberfläche bereitet die Konfiguration vor, startet die Simulation und liest die Ergebnisdateien aus, um sie anzuzeigen.',
        },
        {
          titre: 'Parallele, isolierte Simulationen mit Echtzeitverfolgung',
          texte: 'Jede Simulation läuft in ihrer eigenen Sandbox, damit sich die Ergebnisse nie vermischen. Ein Semaphor begrenzt die Zahl gleichzeitiger Berechnungen und stellt die übrigen in eine Warteschlange. Fortschritt und Protokoll werden live im Browser angezeigt, und ein Abbruch hinterlässt keinen verwaisten Prozess.',
        },
        {
          titre: 'Zuverlässige Eingaben',
          texte: 'Werte aus einem Formular kommen immer als Text an, während die Simulation strenge Datentypen erwartet. Ich habe einen objektorientierten Validator geschrieben, der die gesamte Konfiguration vor dem Start prüft und umwandelt und jeden Fehler klar an den Benutzer meldet.',
        },
        {
          titre: 'Tests und Validierung',
          texte: 'Mehrere Referenzfälle wurden sowohl über den alten Kommandozeilen-Workflow als auch über die Oberfläche ausgeführt und anschließend automatisch verglichen. Abnahmekriterium: eine relative Abweichung unter 1 % bei allen Ergebnissen, um sicherzustellen, dass die Oberfläche nichts verändert.',
        },
        {
          titre: 'Bereitstellung und Übergabe',
          texte: 'Portable Anwendung für Linux (RHEL) und Windows, ohne Administratorrechte installierbar, mit einer eigenständigen, per PyInstaller erzeugten ausführbaren Version. Ich habe ein Benutzerhandbuch und einen vollständigen Entwicklerleitfaden verfasst, damit das Werkzeug nach meinem Weggang wartbar bleibt, und die Arbeit vor einer Jury präsentiert.',
        },
      ],
      images: [
        { cap: 'Registerkarte Konfiguration: Formular zur Einstellung einer Simulation' },
        { cap: 'Verwaltung paralleler Simulationen mit Fortschrittsanzeige in Echtzeit' },
        { cap: 'Lebenszyklus einer Simulation: Warteschlange, Ausführung, Erfolg, Fehler oder Abbruch' },
      ],
    },
    {
      titre: '3D-Designer: Schnupperpraktikum (Modellierung und Animation)',
      meta: 'A3D Design, Limoges · Juli 2021',
      paras: [
        'Einblick in die rechnergestützte mechanische Konstruktion und die 3D-Modellierung mit SolidWorks. Dabei konnte ich die verschiedenen Schritte bei der Vorbereitung einer Baugruppe beobachten: Lesen der Bauteile, Positionieren der Komponenten und Prüfen ihrer mechanischen Stimmigkeit.',
        'Baugruppen- und Explosionsansichten vermitteln den Aufbau eines Mechanismus klar. Sie erleichtern das Erkennen der Komponenten, das Verständnis ihrer Montage und die Vorbereitung von Montage- oder Wartungsarbeiten.',
        'Dieses Praktikum hat meine Sorgfalt, meine Genauigkeit und meine Fähigkeit gestärkt, ein Lastenheft und Termine einzuhalten.',
      ],
      images: [
        { cap: 'Mechanische Baugruppe in SolidWorks: ein Mechanismus aus Bauteilen, Zahnrädern und Verbindungselementen.' },
        { cap: 'Explosionsansicht in SolidWorks: Die Komponenten sind getrennt, damit ihre Lage und Montagereihenfolge sofort erkennbar sind.' },
      ],
    },
  ],

  natation: {
    stats: [
      { valeur: '18 Jahre', label: 'Vereinsschwimmen, seit 2008' },
      { valeur: '18 Std.', label: 'Training pro Woche' },
      { valeur: 'National', label: 'Französische Meisterschaften' },
    ],
    atouts: [
      {
        titre: 'Zeitmanagement',
        texte: '18 Stunden Training pro Woche neben einer CUPGE erfordern eine strenge Organisation. Ich habe gelernt zu planen, Prioritäten zu setzen und unter Druck effizient zu bleiben.',
      },
      {
        titre: 'Messbarer Fortschritt',
        texte: 'Im Schwimmen wird jeder Fortschritt auf die Hundertstelsekunde gemessen. Ich analysiere meine Zeiten, passe mein Training an und beginne von vorn: derselbe Kreislauf wie Messen, Korrigieren und Iterieren an einer Schaltung.',
      },
      {
        titre: 'Durchhaltevermögen',
        texte: 'Achtzehn Jahre in derselben Disziplin, bis auf nationales Niveau. Diese Beständigkeit hilft mir, technische Projekte zu Ende zu bringen, vor allem wenn eine Schaltung nicht auf Anhieb funktioniert.',
      },
    ],
  },

  projetsData: [
    {
      tag: 'Analoge Elektronik',
      titre: 'Audioverstärker & Effektpedal Overdrive-Distortion',
      probleme: 'Die charakteristische Übersteuerung eines Tube-Screamer-TS808-Pedals anhand einer bestehenden Schaltung verstehen und nachbauen.',
      solution: 'Reverse Engineering des Schaltplans, Simulation der Schaltung, Aufbau auf einem LABDEC-Steckbrett und anschließend Fertigung der Platine. Parallel dazu Entwurf und Test von Audioverstärkern.',
      resultat: 'Funktionsfähiger Endprototyp, mit am Oszilloskop gemessener und überprüfter Übersteuerung.',
    },
    {
      tag: 'Eingebettete Robotik',
      titre: 'Autonomer Roboter mit Hinderniserkennung',
      probleme: 'Einen Roboter selbstständig fahren lassen, ohne dass er gegen Hindernisse auf seinem Weg stößt.',
      solution: 'Chassis mit Allradantrieb, gesteuert von einem Arduino Uno: Ultraschallsensor HC-SR04 zur Abstandsmessung, H-Brücke L298N zur Motorsteuerung, Ausweichlogik in C++ (Echomessung, Stopp, Rückwärtsfahrt, Drehung).',
      resultat: 'Montierter Roboter, der ein Hindernis erkennt, anhält, zurücksetzt und selbstständig die Richtung wechselt.',
    },
    {
      tag: 'Sensorik & Echtzeit',
      titre: 'Ultraschallradar',
      probleme: 'Die nähere Umgebung mit einem einfachen Abstandssensor erfassen.',
      solution: 'HC-SR04-Sensor auf einem Servomotor, der den Bereich abtastet; die Daten werden über eine serielle Verbindung übertragen und in Processing angezeigt.',
      resultat: 'Echtzeitanzeige der erkannten Hindernisse in Form eines Radarbildschirms.',
    },
    {
      tag: 'Eingebettetes System · PBL',
      titre: 'StrongBox3000: elektronischer Tresor',
      probleme: 'Den Zugang zu einem Tresor per Code sichern, mit klarer Rückmeldung für den Benutzer.',
      solution: 'Mikrocontroller mit Tastatur zur Codeeingabe, Display für Meldungen und Servomotor für die Verriegelung. Teamprojekt nach dem PBL-Ansatz.',
      resultat: 'Funktionsfähiger Tresor, in den Integrationstests validiert, von der Bedarfsanalyse bis zum Prototyp.',
      imgCredit: 'Illustration: Instructables, Electronic Safe',
    },
    {
      tag: 'Signalverarbeitung',
      titre: 'Audiokette: Mikrofon, Filterung und Verstärkung',
      probleme: 'Das sehr schwache und verrauschte Signal eines Mikrofons nutzbar machen.',
      solution: 'Vorverstärkung mit Operationsverstärker, analoge Filterung zur Rauschunterdrückung und anschließende Verstärkerstufe, mit Dimensionierung jedes Bauteils.',
      resultat: 'Verstärktes und gefiltertes Signal, am Oszilloskop validiert.',
    },
    {
      tag: 'Embedded-Programmierung',
      titre: 'Interaktives Spielzeug mit Servomotor',
      probleme: 'Ein Spielzeug mit präzisen, wiederholbaren Bewegungen animieren.',
      solution: 'Mikrocontroller und Servomotor, PWM-Ansteuerung zur Positionierung des Aktors und programmierte Bewegungsabläufe.',
      resultat: 'Funktionsfähiges animiertes Spielzeug, von der Verkabelung bis zu den Funktionstests umgesetzt.',
      imgCredit: 'Illustration: Neeti Thakur via Hackster.io',
    },
  ],

  pedaleGallery: [
    { cap: '1. Schaltplan des Effekts (Simulation)' },
    { cap: '2. Messung der Übersteuerung am Oszilloskop' },
  ],

  robotGallery: [
    { cap: '1. Bauteilübersicht', credit: 'Foto Robin Glauser, Unsplash' },
    { cap: '2. Arduino Uno, das Gehirn des Roboters', credit: 'Foto Harrison Broadbent, Unsplash' },
    { cap: '3. Verkabelung von Sensor und Motoren', credit: 'Foto Robin Glauser, Unsplash' },
    { cap: '4. Montierter Roboter, fahrbereit', credit: 'Foto Marília Castelli, Unsplash' },
  ],

  skills: [
    { titre: 'Sprachen & Entwicklung', items: ['Python', 'C++ · C', 'SQL', 'HTML · JavaScript · Bash', 'OOP · Git'] },
    { titre: 'Embedded & Elektronik', items: ['Mikrocontroller · Arduino', 'Analoge & digitale Elektronik', 'Sensorik · HF · Signalverarbeitung', 'Regelungstechnik · PID', 'Löten · Prototyping'] },
    { titre: 'Umgebungen & Werkzeuge', items: ['Linux (RHEL) · Windows', 'YAML · JSON', 'Plotly · Datenvisualisierung', 'Grafische Oberflächen (GUI)'] },
    { titre: 'Ingenieurmethoden', items: ['Problembasiertes Lernen (PBL)', 'Projektmanagement', 'Gantt · MoSCoW', 'Technische Dokumentation', 'Tests & Validierung'] },
  ],

  formationCards: [
    { titre: 'Elektronik und Signale', desc: 'Verstärkung, Filterung, Hochfrequenz (HF), Signalverarbeitung für Kommunikationssysteme.' },
    { titre: 'Regelungstechnik', desc: 'Regelgesetze, Regelung, Regelkreise linearer Systeme: PID, Stabilität, Genauigkeit.' },
    { titre: 'Embedded und Informatik', desc: 'Mikrocontroller-Architektur, OOP (C++, Python), Netzwerkprotokolle, SQL.' },
    { titre: 'PBL-Methode', desc: 'Problembasiertes Lernen: Teamarbeit an einem realen Fall, Bedarfsanalyse, Lösungssuche, Prototyping, anschließend Präsentation und Erfahrungsauswertung.' },
  ],

  licenceSubjects: [
    {
      titre: 'Elektronik',
      texte: 'Ich vertiefe elektrische Schaltungen und Filter: Kirchhoffsche Regeln, Einschwingvorgänge, Übertragungsfunktionen und Bode-Diagramme. Dieses Fach gibt mir die Grundlagen, um die Schaltungen zu entwerfen und zu analysieren, die ich danach in meinen Embedded-Projekten einsetze.',
    },
    {
      titre: 'Thermodynamik',
      texte: 'Ich untersuche die verschiedenen Phänomene beim Energieaustausch: Wärmeübertragung, erster und zweiter Hauptsatz, Energiebilanzen. Das ist wesentlich, um die Erwärmung von Bauteilen und den Wirkungsgrad elektrischer Systeme zu verstehen.',
    },
    {
      titre: 'Elektromagnetismus',
      texte: 'Dieses Fach hilft mir zu verstehen, was physikalisch in elektrischen Schaltungen passiert: elektrisches und magnetisches Feld, Induktion, Ausbreitung. Es verbindet die Theorie mit der tatsächlichen Funktionsweise von Spulen, Motoren und Transformatoren.',
    },
  ],

  semesters: [
    {
      label: 'Semester 1',
      credit: 'Foto von Dan Cristian Pădureț auf Unsplash',
      topics: [
        'Mathematik und Logik: komplexe Zahlen, Analysis, boolesche Algebra',
        'Elektrizität: Gleich- und Wechselstrom',
        'Wellen, Frequenzanalyse und Filterung',
        'Mechanik und Messunsicherheit',
        'Algorithmik: C/Arduino, Python',
      ],
    },
    {
      label: 'Semester 2',
      credit: 'Foto von Danist Soh auf Unsplash',
      topics: [
        'Wahrscheinlichkeit, Statistik und Algebra',
        'Wärmelehre und Festigkeitslehre',
        'Datenbanken und SQL',
        'CAD und Produktionsmanagement',
        'Technisch-kaufmännische Argumentation',
      ],
    },
    {
      label: 'Semester 3 · Schwerpunkt SEEE',
      credit: 'Foto von Alexandre Debiève auf Unsplash',
      topics: [
        'Elektromagnetismus und Funktechnik',
        'Analoge Elektronik: Halbleiter, Operationsverstärker',
        'Netzwerke: IP-Adressierung, Ethernet, CCNA',
        'Sensoren, Aktoren, Regelung und Steuerung',
        '3D-Analyse',
      ],
    },
    {
      label: 'Semester 4',
      credit: 'Foto von Christopher Gower auf Unsplash',
      topics: [
        'Objektorientierte Programmierung',
        'Embedded-Programmierung',
        'Rechnerarchitektur und Assembler',
        'Sprachtheorie, Datenstrukturen, Komplexität',
        'Betriebspraktikum (8 Wochen oder mehr)',
      ],
    },
  ],

  formationImages: [
    { cap: 'Audioverstärker, nichtinvertierende Schaltung' },
    { cap: 'Verkabelung eines Ultraschallsensors mit einem Mikrocontroller' },
    { cap: 'Messung und Validierung am Oszilloskop' },
    { cap: 'Entwurf und Layout einer Steuerplatine' },
  ],
};
