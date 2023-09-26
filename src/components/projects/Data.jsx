import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Work6 from "../../assets/work6.jpg";
import Work7 from "../../assets/work7.jpg";
import Work8 from "../../assets/work8.jpg";
import Work9 from "../../assets/work9.jpg";

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Segmentation cérébrale",
        description: "Segmentation cérébrale à l'aide de iSeg en Python. L'objectif était de segmenter les différentes matières du cerveau (blanches, grises, etc.)",
        langages: ["Python", "iSeg"],
        category: "ia",
        link: "https://github.com/elena-FT/BrainSegPy"
    },    
    {
        id: 2,
        image: Work2,
        title: "Reconnaissance de bateaux",
        description: "Développement d'un modèle de reconnaissance de neuf types de bateaux à partir d'images en utilisant Python.",
        langages: ["Python", "Tensorflow", "Keras"],
        category: "ia",
        link: "https://github.com/elena-FT/AIrrates-of-the-Caribbean"
    },
    {
        id: 3,
        image: Work3,
        title: "Montre IoT",
        description: "Conception et fabrication d'une montre intelligente capable de mesurer et d'afficher les battements par minute (BPM).",
        langages: ["MicroPython"],
        category: "iot",
        link: "https://github.com/elena-FT/BPM-Watch"
    },
    {
        id: 4,
        image: Work4,
        title: "Share Doc",
        description: "Prototype d’application web pour doctolib",
        langages: ["HTML", "CSS", "JavaScript", "React"],
        category: "web",
        link: "https://github.com/elena-FT/ShareDoc"
    },
    {
        id: 5,
        image: Work5,
        title: "Tiger",
        description: "Réalisation d'un compilateur en Tiger qui transforme des fichiers Tiger en exécutable.",
        langages: ["C++", "Tiger", "Bison", "Flex"],
        category: "others",
        link: ""
    },
    {
        id: 6,
        image: Work6,
        title: "42SH",
        description: "Réalisation d’un Shell.",
        langages: ["C", "Shell"],
        category: "others",
        link: ""
    },
    {
        id: 7,
        image: Work7,
        title: "OCR",
        description: "Reconnaissance optique de caractères. Création/Entrainement d'un réseau de neurones.",
        langages: ["C"],
        category: "app",
        link: ""
    },
    {
        id: 8,
        image: Work8,
        title: "DeBruijnGen",
        description: "Le projet DeBruijnGen est un ensemble de scripts Python conçus pour construire, fusionner et découper le graphe de De Bruijn à partir de données génomiques.",
        langages: ["Python"],
        category: "algorithms",
        link: "https://github.com/elena-FT/DeBruijnGen"
    },
    {
        id: 9,
        image: Work9,
        title: "Elemraa",
        description: "Ce projet a été réalisé lors de l'Hackathon Health Care de Strasbourg en 2023. Il s'agit d'une application mobile destinée à accompagner les femmes dans l'évaluation de leur santé cardiovasculaire et à leur fournir des recommandations personnalisées pour améliorer leur hygiène de vie.",
        langages: ["React", "HTML", "CSS", "JavaScript"],
        category: "app",
        link: "https://github.com/elena-FT/elemraa"
    },
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'ia',
    },
    {
        name: 'iot',
    },
    {
        name: 'algorithms',
    },
    {
        name: 'others',
    }
]