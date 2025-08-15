export const data = {
  name: "Shanmukha Kumar Karra",
  tagline: "The Urge To Learn Everything",
  contact: {
    email: "shannu2409@gmail.com",
    phone: "+91 7729014867",
    linkedin: "https://www.linkedin.com/in/shanmukha-kumar-karra-7a79ba350/",
    github: "https://github.com/Shannuu2409"
  },
  summary: "Passionate and self-driven aspiring MERN stack developer with hands-on experience in building full-stack web applications. Proficient in JavaScript, HTML, CSS, and comfortable with responsive UI design using Tailwind CSS and Bootstrap. Familiar with version control using Git and GitHub, and experienced in integrating Firebase for authentication and real-time database features. Eager to apply strong problem-solving skills and a growth mindset to contribute to innovative software solutions, explore new technologies, and collaborate effectively in a team-driven environment. Actively seeking job opportunities.",
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sri Venkateswara College Of Engineering (Autonomous), Tirupathi",
      gpa: "8.3",
      year: "2023 – 2026"
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Andhra Polytechnic, Kakinada",
      gpa: "7.6",
      year: "2020 – 2023"
    }
  ],
  skills: {
    languages: ["HTML", "CSS", "JavaScript", "Python", "Java", "PHP"],
    frameworks_databases: ["ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Tailwind CSS", "Next.js (Beginner)", "Bootstrap", "Mongoose", "MySQL"],
    tools: ["Git", "GitHub", "Windows", "Linux", "MS 360", "Figma", "Canva", "Firebase", "Netlify", "Vercel", "AI Tools", "REST APIs", "Postman", "NPM", "Vite", "MongoDB Atlas", "MongoDB Compass"]
  },
  projects: [
    {
      name: "Google Gemini Clone",
      description: "Developed an AI chat application replicating core features of Google Gemini using the Gemini API and React.js. Utilized modern JavaScript practices for efficient data handling and UI updates.",
      github: "https://github.com/Shannuu2409/Gemini-Clone"
    },
    {
      name: "Notes App (Full Stack)",
      description: "Created a responsive full-stack notes management application to add, delete, and update notes with persistent storage. Designed the front-end with React.js, Vite, and Tailwind CSS; built the back-end using Node.js, Express.js, and MongoDB. Implemented Mongoose for schema design and used Postman for API testing.",
      github: "https://github.com/Shannuu2409/Note-app"
    },
    {
      name: "Cricket Live Score Web App",
      description: "Developed a live cricket score website using React.js to display real-time match data from a public cricket API. Built a responsive user interface and focused on efficient API integration and dynamic rendering.",
      github: "https://github.com/Shannuu2409"
    },
    {
      name: "SMDB-The Movie DB App (Full Stack)",
      description: "Developed a live movie database appllication to see movie information,cast, trailer and user can create account and add his favourite movies into watchlist. Designed front-endwith React.js, Vite, Tailwind CSS and TMDB API to fetch movie's data, built the back-end using Node.js and MongoDB for users data aand used Postman for API testing .",
      github: "https://github.com/Shannuu2409/SMDB-Movie-app",
      live: "https://smdb-movie-app.vercel.app/"
    }
  ]
};

// Returns a generic code icon data URL with a fixed size
export const getGenericIconDataUrl = (size = 24) =>
  `data:image/svg+xml;base64,${btoa(`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#22c55e" opacity="0.2"/>
      <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="#22c55e"/>
    </svg>
  `)}`;

// Provide multiple URL candidates (CDNs + local) for robustness
export const getIconCandidates = (name, size = 24) => {
  const logos = {
    HTML: "logos:html-5",
    CSS: "logos:css-3",
    JavaScript: "logos:javascript",
    Python: "logos:python",
    Java: "logos:java",
    PHP: "logos:php",
    ReactJS: "logos:react",
    "ExpressJS": "logos:express",
    NodeJS: "logos:nodejs-icon",
    MongoDB: "logos:mongodb-icon",
    "Tailwind CSS": "logos:tailwindcss-icon",
    "Next.js (Beginner)": "logos:nextjs-icon",
    Bootstrap: "logos:bootstrap",
    Mongoose: "logos:mongodb-icon",
    MySQL: "logos:mysql-icon",
    Git: "logos:git-icon",
    GitHub: "logos:github-icon",
    Windows: "logos:microsoft-windows",
    Linux: "logos:linux-tux",
    "MS 360": "logos:microsoft-office365",
    Figma: "logos:figma",
    Canva: "logos:canva-icon",
    Firebase: "logos:firebase",
    Netlify: "logos:netlify-icon",
    Vercel: "logos:vercel-icon",
    "AI Tools": "logos:google-icon",
    "REST APIs": "logos:rest",
    Postman: "logos:postman-icon",
    NPM: "logos:npm-icon",
    Vite: "logos:vitejs",
    "MongoDB Atlas": "logos:mongodb-icon",
    "MongoDB Compass": "logos:mongodb-icon",
  };

  const key = String(name);
  const icon = logos[key];

  const iconify = icon ? `https://api.iconify.design/${icon}.svg?width=${size}&height=${size}` : null;
  const simple = icon ? `https://cdn.simpleicons.org/${icon.split(":").pop()}` : null;

  // local fallback if user still keeps assets in /public/icons
  const local = `/icons/${key.toLowerCase().replace(/\s+/g, "-")}.svg`;

  const candidates = [iconify, simple, local, getGenericIconDataUrl(size)].filter(Boolean);

  // For problematic ones add alternates explicitly
  if (key === "Canva") {
    candidates.unshift(`https://api.iconify.design/skill-icons:canva.svg?width=${size}&height=${size}`);
  }
  if (key === "MS 360") {
    candidates.unshift(`https://api.iconify.design/logos:microsoft-office.svg?width=${size}&height=${size}`);
    candidates.unshift(`https://api.iconify.design/logos:microsoft-icon.svg?width=${size}&height=${size}`);
  }
  if (key === "Windows") {
    candidates.unshift(`https://api.iconify.design/logos:microsoft-windows.svg?width=${size}&height=${size}`);
  }
  if (key === "REST APIs") {
    candidates.unshift(`https://api.iconify.design/devicon:restapi.svg?width=${size}&height=${size}`);
    candidates.unshift(`https://api.iconify.design/mdi:api.svg?width=${size}&height=${size}`);
  }

  return candidates;
};

// Backwards-compat single URL getter
export const getPlaceholderIcon = (name, size = 24) => {
  const list = getIconCandidates(name, size);
  return list[0] ?? getGenericIconDataUrl(size);
};
