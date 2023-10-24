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
        title: "BrainSegPy",
        description: "Brain segmentation using iSeg in Python. The goal was to segment different brain tissues (white matter, gray matter, etc.)",
        languages: ["Python", "iSeg"],
        category: "AI",
        link: "https://github.com/elena-FT/BrainSegPy"
    },
    {
        id: 2,
        image: Work2,
        title: "AIrrates of the Caribbean",
        description: "Development of a model for recognizing nine types of boats from images using Python.",
        languages: ["Python", "Tensorflow", "Keras"],
        category: "AI",
        link: "https://github.com/elena-FT/AIrrates-of-the-Caribbean"
    },
    {
        id: 3,
        image: Work3,
        title: "BPM Watch",
        description: "Design and creation of a smartwatch capable of measuring and displaying beats per minute (BPM).",
        languages: ["MicroPython"],
        category: "IOT",
        link: "https://github.com/elena-FT/BPM-Watch"
    },
    {
        id: 4,
        image: Work4,
        title: "Share Doc",
        description: "Prototype of a web application for doctolib",
        languages: ["HTML", "CSS", "JavaScript", "React"],
        category: "Web",
        link: "https://github.com/elena-FT/ShareDoc"
    },
    {
        id: 5,
        image: Work5,
        title: "Tiger",
        description: "Development of a compiler in Tiger that transforms Tiger files into executable code.",
        languages: ["C++", "Tiger", "Bison", "Flex"],
        category: "Others",
        link: ""
    },
    {
        id: 6,
        image: Work6,
        title: "42SH",
        description: "Development of a Shell.",
        languages: ["C", "Shell"],
        category: "Others",
        link: ""
    },
    {
        id: 7,
        image: Work7,
        title: "OCR",
        description: "Optical character recognition. Creation/Training of a neural network.",
        languages: ["C"],
        category: "App",
        link: ""
    },
    {
        id: 8,
        image: Work8,
        title: "DeBruijnGen",
        description: "The DeBruijnGen project is a set of Python scripts designed to build, merge, and cut the De Bruijn graph from genomic data.",
        languages: ["Python"],
        category: "Algorithms",
        link: "https://github.com/elena-FT/DeBruijnGen"
    },
    {
        id: 9,
        image: Work9,
        title: "Elemraa",
        description: "Mobile application designed to assist women in assessing their cardiovascular health.",
        languages: ["React", "HTML", "CSS", "JavaScript"],
        category: "App",
        link: "https://github.com/elena-FT/elemraa"
    },
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'Web',
    },
    {
        name: 'App',
    },
    {
        name: 'AI',
    },
    {
        name: 'IOT',
    },
    {
        name: 'Algorithms',
    },
    {
        name: 'Others',
    }
]
