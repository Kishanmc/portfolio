const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public/about.html')));
app.get('/skills', (req, res) => res.sendFile(path.join(__dirname, 'public/skills.html')));
app.get('/projects', (req, res) => res.sendFile(path.join(__dirname, 'public/projects.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public/contact.html')));

app.get('/health', (req, res) => {
    res.json({
        status: "UP",
        environment: NODE_ENV,
        timestamp: new Date().toISOString()
    });
});

app.get('/api/resume', (req, res) => {
    res.json({
        personal: {
            name: "Kishan M C",
            role: "Full Stack Developer | Hackathon Winner | ISE @ BMSIT",
            location: "Bengaluru, India",
            email: "kishanchannesh19@gmail.com",
            phone: "+91 7676432249",
            github: "https://github.com/Kishanmc",
            linkedin: "https://linkedin.com/in/kishanmc"
        },
        summary: "Ambitious and future-focused Information Science Engineering student with strong interests in MERN stack web development, cybersecurity, and CTF challenges. Class Representative with proven leadership, startup exposure, and multiple hackathon victories.",
        education: {
            degree: "B.E. Information Science and Engineering",
            college: "BMS Institute of Technology and Management",
            duration: "2023 - 2027"
        },
        skills: {
            frontend: ["HTML", "CSS", "JavaScript", "React", "Redux"],
            backend: ["Node.js", "Express", "MongoDB"],
            devops: ["Docker", "Kubernetes", "Git", "GitHub"],
            cloud: ["Google Cloud Platform"],
            security: ["Cyber Security", "Ethical Hacking", "CTF"],
            languages: ["C", "C++", "JavaScript", "Python (Basics)"]
        },
        experience: [
            {
                role: "Full Stack Developer",
                company: "Eligarf Technologies",
                period: "Jun 2025 - Aug 2025",
                work: [
                    "Developed and maintained IMEUSWE platform",
                    "Implemented responsive UI",
                    "Integrated backend APIs",
                    "Worked with cross-functional teams"
                ]
            },
            {
                role: "Co-founder",
                company: "SpeedyPick",
                period: "Jan 2025 - Jun 2025",
                work: [
                    "Built hyperlocal pickup platform",
                    "Conducted market research",
                    "Developed prototype",
                    "Handled technical execution"
                ]
            }
        ],
        projects: [
            {
                name: "3D Simulation Lab for STEM",
                description: "Interactive 3D virtual lab for STEM education",
                achievement: "2-Time Hackathon Winner",
                tech: ["Web", "3D", "JavaScript"]
            },
            {
                name: "IMEUSWE",
                description: "Full stack web platform",
                tech: ["MERN", "API", "UI/UX"]
            },
            {
                name: "Cattle Vision",
                description: "AI-based cattle breed and disease detection",
                tech: ["AI", "Image Processing", "Web"]
            }
        ],
        achievements: [
            "PRAVRUTHI National Level Hackathon – First Prize",
            "MEDIVERSE IEEE EMBS Cyber Security CTF – Second Prize",
            "Top Performer – Google Cloud Swag Competition",
            "5-Time Competition Winner"
        ],
        certifications: [
            "Google Cloud Computing Foundations",
            "MongoDB Certification",
            "5-Day Agentic AI Program – Google",
            "Introduction to Generative AI – IBM",
            "Ethical Hacking"
        ],
        leadership: [
            "Class Representative – BMSIT",
            "Competition Team Leader",
            "Volunteer – NITKonnnects (2 Years)"
        ],
        interests: [
            "Hackathons",
            "Startup Building",
            "Cyber Security",
            "Cloud & DevOps",
            "Problem Solving"
        ]
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server started successfully`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`📡 Running at: http://localhost:${PORT}`);
});
