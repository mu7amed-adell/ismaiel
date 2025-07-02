const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const prevProjects = [
  {
    text: "Facial Expression Recognition Challenge",
    imgPath: "/images/project1.png",
    parag: "Developed an advanced computer vision model that improved FER accuracy from 72.3% to 83%, winning international recognition.",
  },
  {
    text: "Cloud-based Travel Booking Platform",
    imgPath: "/images/project2.png",
    parag: "Built a scalable full-stack travel agency app using Node.js, Express, MongoDB, and Azure cloud infrastructure with VPC integration.",
  },
  {
    text: "YC Directory – Startup Platform",
    imgPath: "/images/project3.png",
    parag: "Created a modern React + Next.js 15 platform with TypeScript, Sanity CMS, and NextAuth for secure and dynamic startup listings.",
  }
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years in AI & Data" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Technologies Used" },
  { value: 60, suffix: "%", label: "Documentation Time Saved" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Creative Problem Solving",
    desc: "Approaches challenges with experimentation, research, and out-of-the-box thinking.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Conveys technical ideas effectively and collaborates across teams.",
  },
  {
    imgPath: "/images/time.png",
    title: "Adaptability",
    desc: "Learns and applies new technologies rapidly to deliver working solutions.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Mohammed's AI solution greatly improved the speed and accuracy of our healthcare transcription process.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "AI Developer – Healthcare Transcription",
    date: "May 2025 – Present",
    responsibilities: [
      "Designed web app using React.js + Flask for real-time medical transcription.",
      "Built LLM agent to extract insights and automate clinical report generation.",
      "Targeted 95% accuracy and 60% reduction in documentation time.",
    ],
  },
  {
    review: "Mohammed streamlined our financial data pipelines, enabling faster analytics and better reporting.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "AI Engineer – Data Management Systems",
    date: "July 2023 – Jan 2024",
    responsibilities: [
      "Created ETL pipelines with Apache NiFi to unify complex financial datasets.",
      "Built real-time analytics dashboards to reduce reporting delays by 40%.",
      "Integrated Metabase and RAG systems to improve analytics performance.",
    ],
  },
  {
    review: "Mohammed balanced military service with ongoing technical growth, showing dedication and resilience.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Republican Guard – Service Desk Soldier",
    date: "Jan 2024 – Mar 2025",
    responsibilities: [
      "Provided IT and operational support during mandatory military service.",
      "Maintained service readiness while continuing AI research and development.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  prevProjects,
};
