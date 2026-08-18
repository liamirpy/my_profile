const careerSteps = [
  {
    number: "01",
    period: "2015 - 2019",
    type: "Education",
    tone: "education",
    title: "A foundation in systems thinking",
    role: "BEng, Electrical Engineering - Telecommunications",
    place: "University of Isfahan · Isfahan, Iran",
    summary:
      "Built a rigorous base in engineering, mathematics, signals and computation, then applied it to Persian-language sentiment analysis for an e-commerce final project.",
    tags: ["Engineering", "Telecommunications", "NLP"],
  },
  {
    number: "02",
    period: "2017 - 2019",
    type: "Industry",
    tone: "industry",
    title: "From software to physical systems",
    role: "Programmer & Electronics Designer",
    place: "Mobarakeh Steel Company · Isfahan, Iran",
    summary:
      "Reverse-engineered and designed an electronic control board for rolling-equipment speed regulation, implementing control algorithms and evaluating system reliability.",
    tags: ["Embedded systems", "Control", "Reliability"],
  },
  {
    number: "03",
    period: "2019 - 2023",
    type: "Education",
    tone: "education",
    title: "Machine learning meets real-world deployment",
    role: "MSc, Electrical Engineering - Telecommunications",
    place: "Shiraz University of Technology · Shiraz, Iran",
    summary:
      "Developed deep-learning tools for CT image segmentation and a real-time face-mask detector for Raspberry Pi, then translated model outputs into web-based software for practical use.",
    tags: ["Computer vision", "Deep learning", "Edge AI", "Web deployment"],
  },
  {
    number: "04",
    period: "2021 - 2022",
    type: "Industry",
    tone: "industry",
    title: "Building dependable web backends",
    role: "Backend Developer",
    place: "Maralhost · Isfahan, Iran",
    summary:
      "Developed and maintained Django backend functionality, server-side features and data models in a hosting and server-services environment.",
    tags: ["Django", "Linux", "Databases", "Git"],
  },
  {
    number: "05",
    period: "2023 - Present",
    type: "Research",
    tone: "research",
    title: "Machine learning for stroke-related brain function and connectivity",
    role: "PhD Candidate & Research Software Developer",
    place: "Université de Picardie Jules Verne · Amiens, France",
    summary:
      "Developing reproducible machine-learning methods to investigate how stroke affects brain function and functional connectivity. I transform stroke-patient and brain-connectivity data into interpretable features, then design and compare statistical, Bayesian, graph-based, and deep-learning approaches for classifying and predicting stroke-related functional deficits. My work covers preprocessing, feature engineering, optimization, cross-validation, visualization, and interpretation, with the strongest methods translated into reusable Python research pipelines.",
    tags: ["Python", "Statistical learning", "Graph methods", "Reproducibility"],
  },



  {
    number: "06",
    period: "2023 - 2026",
    type: "Research",
    tone: "research",
    title: "Advancing applied machine-learning research",
    role: "Machine Learning Researcher & Author",
    place: "Computer vision, segmentation and generative modelling",
    summary:
      "Published and presented work spanning generative face modelling, deep-learning segmentation, image classification and reproducible model evaluation.",
    tags: ["IEEE IJCB", "Computer vision", "Segmentation", "Generative modelling"],
  },
  {
    number: "07",
    period: "2025 - 2026",
    type: "Teaching",
    tone: "teaching",
    title: "Making technical ideas teachable",
    role: "Teaching Assistant",
    place: "University-level Python & machine learning",
    summary:
      "Delivered approximately 60 hours of instruction, laboratory support and student guidance while communicating technical ideas to multidisciplinary audiences.",
    tags: ["Python", "Machine learning", "Mentoring"],
  },
  {
    number: "08",
    period: "2026",
    type: "Projects",
    tone: "project",
    title: "Engineering intelligent platforms end to end",
    role: "DocuMind, PaperMind & Baxter Chess Robot",
    place: "Independent software engineering projects",
    summary:
      "Built document-intelligence services, hybrid retrieval and grounded question answering, plus a vision-driven robotic chess system integrating perception, planning and control.",
    tags: ["RAG", "OpenSearch", "Docker", "Robotics"],
  },
];

const skills = [
  {
    index: "01",
    title: "Machine Learning Research",
    description:
      "Research-driven modelling with rigorous validation, interpretation and reproducible experimentation.",
    items: ["Deep learning", "Computer vision", "Statistical learning", "Bayesian methods", "Graph methods", "Optimization"],
  },
  {
    index: "02",
    title: "Software Engineering",
    description:
      "End-to-end software development across Python and JavaScript ecosystems, from backend services to user-facing applications.",
    items: ["Python", "JavaScript", "Node.js", "Express", "Django", "Flask", "Next.js", "React"],
  },
  {
    index: "03",
    title: "Applied AI & Retrieval",
    description:
      "Grounded AI systems that preserve context, source provenance and retrieval quality.",
    items: ["RAG", "Embeddings", "Vector search", "Hybrid retrieval", "Semantic chunking", "Local inference"],
  },
  {
    index: "04",
    title: "Backend, Data & Systems",
    description:
      "Reliable backend architecture and practical infrastructure for asynchronous, reproducible workloads.",
    items: ["REST APIs", "PostgreSQL", "Redis", "OpenSearch", "MongoDB", "Docker", "Nginx", "CI/CD", "Linux"],
  },
];

const projects = [
  {
    eyebrow: "Flagship platform",
    title: "DocuMind",
    subtitle: "Scientific Document Intelligence & RAG Platform",
    description:
      "A self-hosted, multi-service platform for organizing scientific PDFs, retrieving evidence and answering grounded questions with page-level citations.",
    contribution:
      "I designed the platform architecture, asynchronous processing, authentication, database integration, document search and local model inference workflow.",
    stack: ["Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "OpenSearch", "Docker", "Ollama"],
    href: "https://github.com/liamirpy/DocuMind",
    accent: "primary",
  },
  {
    eyebrow: "Document infrastructure",
    title: "PaperMind",
    subtitle: "Scientific PDF Processing Services",
    description:
      "Python services that transform scientific publications into structured, machine-readable representations with hierarchy, figures, tables, formulas, references, provenance and quality information.",
    contribution:
      "Designed reusable APIs and command-line workflows for validation, indexing, retrieval and RAG pipelines, then integrated them into DocuMind.",
    stack: ["Python", "REST APIs", "Document AI", "RAG", "Validation"],
    href: "https://github.com/liamirpy/PaperMind",
    accent: "secondary",
  },
  {
    eyebrow: "Robotics & vision",
    title: "Baxter Chess Robot",
    subtitle: "Vision-Based Robotic Chess System",
    description:
      "A system that detects a human chess move, reconstructs board state, plans a legal response and commands a Baxter robot to move the piece physically.",
    contribution:
      "Integrated computer vision, chess-state reasoning, calibration, motion control and hardware interaction into a complete demonstrator.",
    stack: ["Computer vision", "Robotics", "Planning", "Calibration", "Python"],
    href: "https://github.com/liamirpy/Baxter-chess-playing-Robot",
    accent: "tertiary",
  },
];

const publications = [
  {
    year: "2026",
    venue: "arXiv",
    title: "VRXU-net: A Deep Learning Approach for Brain Ischemic Stroke Lesion Detection and Segmentation in T1W MRI",
    href: "https://arxiv.org/abs/2605.21633",
  },
  {
    year: "2025",
    venue: "medRxiv",
    title: "RAX-NET: Residual Attention Xception Network for Brain Ischemic Stroke Segmentation in T1-Weighted MRI",
    href: "https://doi.org/10.1101/2025.09.26.25336733",
  },
  {
    year: "2024",
    venue: "medRxiv",
    title: "Lumbar Spine Degenerative Classification Using YOLO v8 and DeepScoreNet",
    href: "https://doi.org/10.1101/2024.12.06.24318595",
  },
  {
    year: "2024",
    venue: "arXiv",
    title: "Empowering Medical Imaging with Artificial Intelligence: A Review of ML Approaches for COVID-19 Imaging",
    href: "https://arxiv.org/abs/2401.07020",
  },
  {
    year: "2023",
    venue: "IEEE IJCB",
    title: "Synthetic Face Generation Through Eyes-to-Face Inpainting",
    href: "https://doi.org/10.1109/IJCB57857.2023.10449216",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Amir Mousavi, home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Amir Mousavi</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#projects">Projects</a>
            <a href="#research">Research</a>

            <span className="nav-divider" aria-hidden="true" />

            <a
              className="nav-social"
              href="https://www.linkedin.com/in/amir-mousavi97"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Amir Mousavi's LinkedIn profile"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>

            <a
              className="nav-social"
              href="https://github.com/liamirpy"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Amir Mousavi's GitHub profile"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowIcon /></a>
      </header>

      <div id="content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-heading">
            
            
            <h1 id="hero-title">
              I turn complex machine learning challenges into reliable,
              real-world software systems.
            </h1>
            <p className="hero-kicker">
              Machine Learning Research · Software Engineering · Applied AI · Computer Vision
            </p>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-intro">
                 I&apos;m Amir, a Machine Learning Research Engineer and PhD candidate with a multidisciplinary foundation in
                 electrical engineering, applied mathematics, statistics, optimization, and software engineering.
                  I develop reproducible, end-to-end AI solutions for complex scientific and real-world problems, from 
                  literature review, problem formulation, and data preparation to model development, cross-validation, evaluation,
                   interpretation, and software implementation. My experience spans deep learning, computer vision, generative modelling, 
                   Bayesian and graph-based methods, scientific document intelligence, and retrieval-augmented generation. I combine research rigor
                    with hands-on backend engineering experience in Python, JavaScript, Node.js, Django, REST APIs, SQL and NoSQL databases, search systems,
                     asynchronous processing, Docker, Linux, Git, and CI/CD to build reliable, scalable, and maintainable software.

              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowIcon />
                </a>
                <a className="button button-secondary" href="/amir-mousavi-cv.pdf" download>
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <aside className="hero-card" aria-label="Profile summary">
              <div className="portrait-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/amir_profile.png"
                  alt="Portrait of Amir Mousavi"
                  width={900}
                  height={1000}
                />
              </div>
              <div className="profile-location"><span>Based in</span><strong>France</strong></div>
              <div className="hero-stats">
               <div><strong>10</strong><span>years of technical experience</span></div>
              <div><strong>5</strong><span>selected publications</span></div>
              <div><strong>60</strong><span>hours teaching Python & ML</span></div>
              </div>
            </aside>
          </div>
        </section>

        <section className="proof-strip" aria-label="Core focus areas">
         <div className="proof-track">
        <span>Machine Learning Research</span><i>✦</i>
        <span>Software Engineering</span><i>✦</i>
        <span>Applied AI</span><i>✦</i>
        <span>Computer Vision</span><i>✦</i>
        <span>Backend Systems</span><i>✦</i>
        <span>RAG &amp; Retrieval</span><i>✦</i>
      </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="section-label">01 · About</p>
            <h2 id="about-title">Engineering with depth, curiosity and context.</h2>
          </div>
          <div className="about-layout">
            <p className="about-lead">
              Strong software is more than code. It begins with understanding the problem,
              its constraints and the people who depend on the result.
            </p>
            <div className="about-body">
              <p>
                My path began in electrical engineering, where mathematics, statistics,
                optimization and embedded systems taught me how to reason about complex systems.
                Programming turned that foundation into something practical: first through
                microcontrollers and Python, then through machine learning, computer vision and
                backend development.
              </p>
              <p>
                Graduate study strengthened my statistical and research skills, while professional
                Django development taught me how to build and maintain real software. Today, I work
                across the full path from literature review and mathematical formulation to model
                validation, APIs, databases and deployment. I enjoy the difficult middle: turning
                an ambiguous challenge into a system that is rigorous, useful and built to last.
              </p>
            </div>
          </div>
          <div className="principles-grid">
            <article><span>01</span><h3>Think in systems</h3><p>Understand the full workflow before optimizing a single component.</p></article>
            <article><span>02</span><h3>Make it reproducible</h3><p>Design processes that can be tested, explained and repeated with confidence.</p></article>
            <article><span>03</span><h3>Protect the evidence</h3><p>Preserve provenance, validation and context in data-driven systems.</p></article>
            <article><span>04</span><h3>Build for change</h3><p>Prefer maintainable architecture over short-lived technical shortcuts.</p></article>
          </div>
        </section>

        <section className="journey section-shell" id="journey" aria-labelledby="journey-title">
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">02 · Career journey</p>
              <h2 id="journey-title">One step led naturally to the next.</h2>
            </div>
            <p>
              From telecommunications and embedded control to backend systems, machine-learning
              research and software engineering—a connected path, not a collection of isolated roles.
            </p>
          </div>

          <div className="timeline">
            {careerSteps.map((step) => (
              <article className="timeline-row" key={`${step.number}-${step.period}`}>
                <div className="timeline-period"><span>{step.period}</span><small>{step.type}</small></div>
                <div className={`timeline-node ${step.tone}`}><span>{step.number}</span></div>
                <div className="timeline-card">
                  <p className="timeline-type">{step.type}</p>
                  <h3>{step.title}</h3>
                  <h4>{step.role}</h4>
                  <p className="timeline-place">{step.place}</p>
                  <p className="timeline-summary">{step.summary}</p>
                  <ul className="tag-list" aria-label={`${step.title} skills`}>
                    {step.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="timeline-legend" aria-label="Timeline category colors">
            <span><i className="legend-dot education" />Education</span>
            <span><i className="legend-dot industry" />Industry</span>
            <span><i className="legend-dot research" />Research</span>
            <span><i className="legend-dot project" />Projects</span>
          </div>
        </section>

        <section className="expertise section-shell" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">03 · Expertise</p>
              <h2 id="expertise-title">A broad toolkit, organized around outcomes.</h2>
            </div>
            <p>
              I work across the boundary between research and production, choosing tools for
              the problem rather than forcing the problem into one stack.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.index}>
                <span className="skill-index">{skill.index}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-shell" id="projects" aria-labelledby="projects-title">
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">04 · Selected projects</p>
              <h2 id="projects-title">Complex systems, made tangible.</h2>
            </div>
            <a className="text-link" href="https://github.com/liamirpy" target="_blank" rel="noreferrer">
              View GitHub profile <ArrowIcon />
            </a>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-main">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p className="project-description">{project.description}</p>
                  <details>
                    <summary>My contribution <span aria-hidden="true">+</span></summary>
                    <p>{project.contribution}</p>
                  </details>
                </div>
                <div className="project-side">
                  <ul className="project-stack" aria-label={`${project.title} technology stack`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                    View repository <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="research section-shell" id="research" aria-labelledby="research-title">
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">05 · Research</p>
              <h2 id="research-title">Applied research with engineering discipline.</h2>
            </div>
            <p>
              My research connects computer vision, statistical learning, graph-based methods
              and reproducible scientific computing, with an emphasis on rigorous validation
              and reliable implementation.
            </p>
          </div>
          <div className="research-layout">
            <div className="research-feature">
              <p className="research-kicker">Current doctoral focus</p>
              <h3>Complex scientific data & robust machine learning</h3>
              <p>
                I develop analytical pipelines spanning preprocessing, feature engineering,
                statistical and graph-based modelling, optimization, cross-validation,
                visualization and interpretation.
              </p>
              <div className="research-note">
                <strong>Two international conferences</strong>
                <span>PhD progress and methodological findings presented to multidisciplinary audiences.</span>
              </div>
            </div>
            <div className="publication-list">
              {publications.map((publication) => (
                <a href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
                  <span className="publication-year">{publication.year}</span>
                  <span className="publication-content"><small>{publication.venue}</small><strong>{publication.title}</strong></span>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="more section-shell" aria-labelledby="more-title">
          <div className="section-heading">
            <p className="section-label">06 · Beyond the code</p>
            <h2 id="more-title">Communication matters, too.</h2>
          </div>
          <div className="more-grid">
            <article><span className="more-icon" aria-hidden="true">⌁</span><h3>Teaching</h3><p>Approximately 60 hours of university-level Python and machine-learning instruction, laboratory support and student guidance.</p></article>
            <article><span className="more-icon" aria-hidden="true">◎</span><h3>Presenting</h3><p>Experience explaining methodological developments and research findings to scientific and multidisciplinary audiences.</p></article>
            <article><span className="more-icon" aria-hidden="true">文</span><h3>Languages</h3><p>Persian/Farsi (native), English (professional proficiency) and French (developing proficiency).</p></article>
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid">
            <div>
              <p className="section-label">07 · Contact</p>
              <h2 id="contact-title">Let&apos;s build something useful.</h2>
              <p>
                I&apos;m exploring opportunities as a Machine Learning Research Engineer,
                Machine Learning Engineer or AI/ML Software Engineer, particularly where
                scientific rigour, practical engineering and meaningful real-world impact matter.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-primary" href="mailto:am.mousavi97@gmail.com">
                <span>Email me</span><strong>am.mousavi97@gmail.com</strong><ArrowIcon />
              </a>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/amir-mousavi97" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
                <a href="https://github.com/liamirpy" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
                <a href="/amir-mousavi-cv.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">AM</span><span className="brand-name">Amir Mousavi</span>
        </a>
        <p>Machine learning research · Applied AI · Software engineering</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}