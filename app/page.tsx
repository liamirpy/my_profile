// const experienceSteps = [
//   {
//     number: "01",
//     period: "2023 - Expected Sep 2026",
//     type: "Research",
//     tone: "research",
//     title: "Machine learning for post-stroke function and brain networks",
//     role: "PhD Candidate in Neuroscience",
//     place: "Université de Picardie Jules Verne (UPJV) · Amiens, France",
//     summary:
//       "Develop and validate machine-learning models using brain-connectivity and clinical data from approximately 400 stroke patients to model cognitive and motor outcomes, including executive function, processing speed and motor function. My work spans SVMs, regression, ensemble methods, graph-derived features, Kuramoto-model simulations, GNN approaches and reproducible Python research pipelines.",
//     tags: [
//       "Clinical Data",
//       "Brain Connectivity",
//       "SVM",
//       "Statistical Learning",
//       "GNN",
//       "Kuramoto Model",
//       "Python",
//     ],
//   },
//   {
//     number: "02",
//     period: "2026",
//     type: "Applied AI Project",
//     tone: "project",
//     title: "DocuMind",
//     role: "Scientific Document Intelligence & RAG Platform",
//     place: "Applied AI · RAG · Software Engineering",
//     summary:
//       "Architected and developed a self-hosted, multi-service platform for organizing scientific PDFs, retrieving evidence and answering grounded questions with citations. Implemented document extraction, semantic chunking, embeddings, vector, keyword and hybrid retrieval with OpenSearch, local model inference, provenance-aware asynchronous processing, authentication, Docker/Nginx deployment and CI/CD.",
//     tags: [
//       "RAG",
//       "OpenSearch",
//       "Python",
//       "Node.js",
//       "Next.js",
//       "PostgreSQL",
//       "Redis",
//       "Docker",
//     ],
//     href: "https://github.com/liamirpy/DocuMind",
//     linkLabel: "View repository",
//   },
//   {
//     number: "03",
//     period: "2026",
//     type: "Scientific Software",
//     tone: "project",
//     title: "PaperMind",
//     role: "Scientific PDF Processing Services",
//     place: "Scientific Software · Document Processing",
//     summary:
//       "Developed Python and FastAPI services that transform scientific publications into structured, machine-readable packages containing metadata, hierarchical text, references, figures, tables, formulas, provenance and quality information. Designed reusable API and command-line workflows for validation, indexing, retrieval and RAG pipelines.",
//     tags: [
//       "Python",
//       "FastAPI",
//       "REST APIs",
//       "Document AI",
//       "RAG",
//       "Validation",
//     ],
//     href: "https://github.com/liamirpy/PaperMind",
//     linkLabel: "View repository",
//   },
//   {
//     number: "04",
//     period: "2026",
//     type: "Robotics Project",
//     tone: "project",
//     title: "Baxter Chess-Playing Robot",
//     role: "Vision-Based Robotic Chess System",
//     place: "Computer Vision · Robotics · Software Engineering",
//     summary:
//       "Developed a robotic chess system integrating Kinect-based computer vision, chess-state reasoning, Stockfish, FastAPI, ROS, calibration and motion control. The system detects a human move, updates the board state, generates a legal response and commands a Baxter robot to physically move the appropriate chess piece.",
//     tags: [
//       "Computer Vision",
//       "Kinect",
//       "Stockfish",
//       "FastAPI",
//       "ROS",
//       "Robotics",
//       "Python",
//     ],
//     href: "https://github.com/liamirpy/Baxter-chess-playing-Robot",
//     linkLabel: "View repository",
//   },
//   {
//     number: "05",
//     period: "2025 - 2026",
//     type: "Research Project",
//     tone: "research",
//     title: "Brain Ischemic Stroke Lesion Segmentation",
//     role: "Deep Learning & Medical Imaging",
//     place: "T1-Weighted Brain MRI",
//     summary:
//       "Developed deep-learning architectures for automated detection and segmentation of ischemic-stroke lesions from T1-weighted brain MRI. Designed and evaluated segmentation pipelines incorporating convolutional, residual and attention-based components, covering preprocessing, training, validation and quantitative evaluation. The research resulted in the RAX-NET and VRXU-net scientific preprints.",
//     tags: [
//       "Deep Learning",
//       "Medical Imaging",
//       "MRI",
//       "Segmentation",
//       "Computer Vision",
//     ],
//     href: "https://arxiv.org/abs/2605.21633",
//     linkLabel: "View publication",
//   },
//   {
//     number: "06",
//     period: "2025 - 2026",
//     type: "Teaching",
//     tone: "teaching",
//     title: "Teaching Python and machine learning",
//     role: "Teaching Assistant",
//     place: "University-Level Instruction",
//     summary:
//       "Delivered approximately 60 hours of university-level Python and machine-learning instruction, laboratory support and student guidance, helping students understand and apply technical concepts in practical exercises.",
//     tags: ["Python", "Machine Learning", "Teaching", "Mentoring"],
//   },
//   {
//     number: "07",
//     period: "2024",
//     type: "Research Project",
//     tone: "research",
//     title: "Lumbar Spine Degeneration Classification",
//     role: "Deep Learning & Medical Imaging",
//     place: "YOLOv8 · DeepScoreNet",
//     summary:
//       "Developed a deep-learning approach for automated classification of lumbar-spine degeneration using YOLOv8 and DeepScoreNet. Built and evaluated a computer-vision pipeline for identifying relevant spinal structures and classifying degenerative conditions. The work resulted in a manuscript released as a medRxiv preprint.",
//     tags: [
//       "Deep Learning",
//       "YOLOv8",
//       "Medical Imaging",
//       "Classification",
//       "Computer Vision",
//     ],
//     href: "https://doi.org/10.1101/2024.12.06.24318595",
//     linkLabel: "View publication",
//   },
//   {
//     number: "08",
//     period: "2023",
//     type: "Research Project",
//     tone: "research",
//     title: "Synthetic Face Generation",
//     role: "Eyes-to-Face Inpainting",
//     place: "Computer Vision · Generative Modelling · Biometrics",
//     summary:
//       "Developed an eyes-to-face inpainting approach that generates synthetic facial images by combining eye regions from different individuals and reconstructing complete faces. Evaluated synthetic datasets for age and gender estimation and face-recognition training across four benchmark datasets, while investigating demographic biases and representation.",
//     tags: [
//       "Computer Vision",
//       "Generative Modelling",
//       "Biometrics",
//       "Deep Learning",
//       "Face Recognition",
//     ],
//     href: "https://doi.org/10.1109/IJCB57857.2023.10449216",
//     linkLabel: "View publication",
//   },
//   {
//     number: "09",
//     period: "May 2021 - Oct 2022",
//     type: "Industry",
//     tone: "industry",
//     title: "Building secure backend services",
//     role: "Backend Developer",
//     place: "Maralhost · Isfahan, Iran",
//     summary:
//       "Developed and maintained Django-based backend services and API microservices for web and server-management applications, including relational data models and server-side business logic. Designed authentication and authorization mechanisms including Single Sign-On, developed web-vulnerability assessment tools and supported Linux-based deployment, debugging and collaborative Git workflows.",
//     tags: [
//       "Django",
//       "REST APIs",
//       "SSO",
//       "Databases",
//       "Linux",
//       "Security",
//       "Git",
//     ],
//   },
//   {
//     number: "10",
//     period: "2019 - 2023",
//     type: "Research Project",
//     tone: "research",
//     title: "COVID-19 Lung & Lesion Segmentation",
//     role: "Deep Learning, CT Imaging & Web Deployment",
//     place: "Clinical Chest CT Imaging",
//     summary:
//       "Developed a deep-learning pipeline for automated lung and COVID-19 lesion segmentation from chest CT scans using clinical imaging data collected from hospitals. Built and trained segmentation models to quantify affected lung regions and integrated preprocessing, inference and visualization into a web-based application designed for practical use by healthcare professionals.",
//     tags: [
//       "Deep Learning",
//       "CT Imaging",
//       "Segmentation",
//       "Computer Vision",
//       "Python",
//       "Web Deployment",
//     ],
//   },
//   {
//     number: "11",
//     period: "2019 - 2023",
//     type: "AI Project",
//     tone: "project",
//     title: "Real-Time Face-Mask Detection",
//     role: "Edge AI & Computer Vision",
//     place: "Raspberry Pi Deployment",
//     summary:
//       "Developed a real-time deep-learning system for detecting face-mask usage using a Raspberry Pi camera. Implemented image acquisition, preprocessing, inference and visualization for deployment on resource-constrained edge hardware.",
//     tags: [
//       "Deep Learning",
//       "Computer Vision",
//       "Raspberry Pi",
//       "Edge AI",
//       "Python",
//       "Real-Time Inference",
//     ],
//   },
//   {
//     number: "12",
//     period: "2019 - 2023",
//     type: "Education",
//     tone: "education",
//     title: "Deep learning meets medical imaging",
//     role: "MSc, Electrical Engineering - Telecommunications",
//     place: "Shiraz University of Technology · Shiraz, Iran",
//     summary:
//       "Graduate study focused on machine learning, deep learning and medical image analysis. My thesis investigated quantification of damaged lung tissue due to COVID-19 using computed tomography images and led to practical work in segmentation, computer vision and software deployment.",
//     tags: [
//       "Telecommunications",
//       "Deep Learning",
//       "Medical Imaging",
//       "Computer Vision",
//     ],
//   },
//   {
//     number: "13",
//     period: "Oct 2017 - Oct 2019",
//     type: "Industry",
//     tone: "industry",
//     title: "From software to physical control systems",
//     role: "Programmer & Electronics Designer",
//     place: "Mobarakeh Steel Company · Isfahan, Iran",
//     summary:
//       "Analyzed and redesigned an existing electronic control board for rolling-equipment speed regulation, integrating a microcontroller-based control system. Developed control algorithms and evaluated system performance, behavior and reliability under operational conditions.",
//     tags: [
//       "Embedded Systems",
//       "Microcontrollers",
//       "Control",
//       "Electronics",
//       "Reliability",
//     ],
//   },
//   {
//     number: "14",
//     period: "2015 - 2019",
//     type: "Education",
//     tone: "education",
//     title: "A foundation in systems thinking",
//     role: "BEng, Electrical Engineering - Telecommunications",
//     place: "University of Isfahan · Isfahan, Iran",
//     summary:
//       "Built a foundation in electrical engineering, mathematics, signals and computation. My final project applied machine learning to Persian-language e-commerce sentiment analysis with positive/negative classification and negative-term extraction.",
//     tags: [
//       "Electrical Engineering",
//       "Telecommunications",
//       "Mathematics",
//       "NLP",
//     ],
//   },
// ];

// const skills = [
//   {
//     index: "01",
//     title: "Machine Learning & AI",
//     description:
//       "Research-driven AI and machine-learning methods for scientific, clinical and real-world problems.",
//     items: [
//       "Machine learning",
//       "Deep learning",
//       "Computer vision",
//       "Statistical learning",
//       "Bayesian methods",
//       "Graph-based learning",
//       "Generative AI",
//       "Optimization",
//     ],
//   },
//   {
//     index: "02",
//     title: "ML & Scientific Computing",
//     description:
//       "Reproducible model development, validation, statistical analysis and visualization in Python.",
//     items: [
//       "Python",
//       "NumPy",
//       "pandas",
//       "scikit-learn",
//       "XGBoost",
//       "TensorFlow",
//       "Keras",
//       "PyTorch",
//       "Model evaluation",
//       "Cross-validation",
//       "Visualization",
//     ],
//   },
//   {
//     index: "03",
//     title: "Software Engineering",
//     description:
//       "Backend and full-stack software engineering for APIs, services and maintainable applications.",
//     items: [
//       "Python",
//       "JavaScript",
//       "FastAPI",
//       "Django",
//       "Flask",
//       "Node.js",
//       "Express",
//       "Next.js",
//       "React",
//       "REST APIs",
//     ],
//   },
//   {
//     index: "04",
//     title: "Applied AI & RAG",
//     description:
//       "Grounded AI and document-intelligence systems designed around retrieval quality, context and provenance.",
//     items: [
//       "RAG",
//       "Embeddings",
//       "Semantic chunking",
//       "Vector search",
//       "Keyword retrieval",
//       "Hybrid retrieval",
//       "Grounded question answering",
//     ],
//   },
//   {
//     index: "05",
//     title: "Data & Infrastructure",
//     description:
//       "Data, search and deployment infrastructure for reliable multi-service software systems.",
//     items: [
//       "PostgreSQL",
//       "MongoDB",
//       "Redis",
//       "OpenSearch",
//       "Docker",
//       "Nginx",
//       "Linux",
//       "Git",
//       "GitHub Actions",
//       "CI/CD",
//     ],
//   },
// ];

// const publications = [
//   {
//     year: "2026",
//     venue: "arXiv",
//     title:
//       "VRXU-net: A Deep Learning Approach for Brain Ischemic Stroke Lesion Detection and Segmentation in T1W MRI",
//     href: "https://arxiv.org/abs/2605.21633",
//   },
//   {
//     year: "2025",
//     venue: "medRxiv",
//     title:
//       "RAX-NET: Residual Attention Xception Network for Brain Ischemic Stroke Segmentation in T1-Weighted MRI",
//     href: "https://doi.org/10.1101/2025.09.26.25336733",
//   },
//   {
//     year: "2024",
//     venue: "medRxiv",
//     title:
//       "Lumbar Spine Degenerative Classification Using YOLO v8 and DeepScoreNet",
//     href: "https://doi.org/10.1101/2024.12.06.24318595",
//   },
//   {
//     year: "2024",
//     venue: "arXiv",
//     title:
//       "Empowering Medical Imaging with Artificial Intelligence: A Review of Machine Learning Approaches for the Detection, and Segmentation of COVID-19 Using Radiographic and Tomographic Images",
//     href: "https://arxiv.org/abs/2401.07020",
//   },
//   {
//     year: "2023",
//     venue: "IEEE IJCB",
//     title: "Synthetic Face Generation Through Eyes-to-Face Inpainting",
//     href: "https://doi.org/10.1109/IJCB57857.2023.10449216",
//   },
// ];

// function ArrowIcon() {
//   return <span aria-hidden="true">↗</span>;
// }

// export default function Home() {
//   return (
//     <main id="top">
//       <a className="skip-link" href="#content">
//         Skip to content
//       </a>

//       <header className="site-header">
//         <a className="brand" href="#top" aria-label="Amir Mousavi, home">
//           <span className="brand-mark">AM</span>
//           <span className="brand-name">Amir Mousavi</span>
//         </a>

//         <nav className="desktop-nav" aria-label="Primary navigation">
//           <a href="#about">About</a>
//           <a href="#experience">Experience</a>
//           <a href="#expertise">Expertise</a>
//           <a href="#research">Research</a>

//           <span className="nav-divider" aria-hidden="true" />

//           <a
//             className="nav-social"
//             href="https://www.linkedin.com/in/amir-mousavi97"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Open Amir Mousavi's LinkedIn profile"
//           >
//             LinkedIn <span aria-hidden="true">↗</span>
//           </a>

//           <a
//             className="nav-social"
//             href="https://github.com/liamirpy"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Open Amir Mousavi's GitHub profile"
//           >
//             GitHub <span aria-hidden="true">↗</span>
//           </a>

//           <a
//             className="nav-social"
//             href="https://scholar.google.com/citations?user=Rewu8sQAAAAJ&hl=en"
//             target="_blank"
//             rel="noreferrer"
//             aria-label="Open Amir Mousavi's Google Scholar profile"
//           >
//             Scholar <span aria-hidden="true">↗</span>
//           </a>
//         </nav>

//         <a className="header-cta" href="#contact">
//           Let&apos;s talk <ArrowIcon />
//         </a>
//       </header>

//       <div id="content">
//         <section className="hero section-shell" aria-labelledby="hero-title">
//           <div className="hero-heading">
//             <h1 id="hero-title">
//               I turn complex machine learning challenges into reliable,
//               real-world software systems.
//             </h1>

//             <p className="hero-kicker">
//               Machine Learning Research Engineer · Applied AI · Scientific
//               Software Engineering
//             </p>
//           </div>

//           <div className="hero-content">
//             <div className="hero-copy">
//               <p className="hero-intro">
//                 I&apos;m Amir, a Machine Learning Research Engineer and PhD
//                 candidate in Neuroscience with a multidisciplinary foundation in
//                 electrical engineering, applied mathematics, statistics,
//                 optimization and software engineering. My experience has evolved
//                 from embedded systems and backend development to machine
//                 learning and deep learning for medical imaging, computer vision
//                 and clinical data analysis. I combine mathematical reasoning,
//                 rigorous research methods and software engineering to formulate
//                 complex problems, develop and validate AI/ML solutions, and
//                 translate them into reliable software systems. I&apos;m
//                 particularly motivated by real-world challenges that require
//                 working across disciplines and connecting research, mathematics,
//                 AI and engineering.
//               </p>

//               <div className="hero-actions">
//                 <a className="button button-primary" href="#experience">
//                   Explore my work <ArrowIcon />
//                 </a>

//                 <a
//                   className="button button-secondary"
//                   href="/amir-mousavi-cv.pdf"
//                   download
//                 >
//                   Download CV <span aria-hidden="true">↓</span>
//                 </a>
//               </div>
//             </div>

//             <aside className="hero-card" aria-label="Profile summary">
//               <div className="portrait-photo">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src="/amir_profile.png"
//                   alt="Portrait of Amir Mousavi"
//                   width={900}
//                   height={1000}
//                 />
//               </div>

//               <div className="profile-location">
//                 <span>Based in</span>
//                 <strong>France</strong>
//               </div>

//               <div className="hero-stats">
//                 <div>
//                   <strong>8</strong>
//                   <span>selected AI & engineering projects</span>
//                 </div>

//                 <div>
//                   <strong>5</strong>
//                   <span>selected publications</span>
//                 </div>

//                 <div>
//                   <strong>60</strong>
//                   <span>hours teaching Python & ML</span>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </section>

//         <section className="proof-strip" aria-label="Core focus areas">
//           <div className="proof-track">
//             <span>Machine Learning &amp; AI</span>
//             <i>✦</i>
//             <span>Scientific Computing</span>
//             <i>✦</i>
//             <span>Software Engineering</span>
//             <i>✦</i>
//             <span>Applied AI &amp; RAG</span>
//             <i>✦</i>
//             <span>Medical Imaging</span>
//             <i>✦</i>
//             <span>Computer Vision</span>
//             <i>✦</i>
//           </div>
//         </section>

//         <section
//           className="about section-shell"
//           id="about"
//           aria-labelledby="about-title"
//         >
//           <div className="section-heading">
//             <p className="section-label">01 · About</p>

//             <h2 id="about-title">
//               Engineering with depth, curiosity and context.
//             </h2>
//           </div>

//           <div className="about-layout">
//             <p className="about-lead">
//               I work where research, mathematics, AI and engineering meet:
//               turning complex, multidisciplinary questions into validated models
//               and dependable software.
//             </p>

//             <div className="about-body">
//               <p>
//                 My path began in electrical engineering and embedded control,
//                 then moved through backend development into machine learning,
//                 deep learning and computer vision. That progression gave me both
//                 a systems perspective and hands-on experience building software
//                 that has to work outside a research notebook.
//               </p>

//               <p>
//                 Today my doctoral research focuses on stroke-related brain
//                 connectivity and clinical outcomes, while my broader work spans
//                 medical imaging, scientific document intelligence, retrieval-
//                 augmented generation, computer vision and robotics. I enjoy
//                 working across the full path from problem formulation and
//                 mathematical modelling to validation, APIs, databases,
//                 deployment and maintainable software.
//               </p>
//             </div>
//           </div>

//           <div className="principles-grid">
//             <article>
//               <span>01</span>
//               <h3>Think in systems</h3>
//               <p>
//                 Understand the complete problem and workflow before optimizing a
//                 single component.
//               </p>
//             </article>

//             <article>
//               <span>02</span>
//               <h3>Make it reproducible</h3>
//               <p>
//                 Design experiments and software that can be tested, explained
//                 and repeated with confidence.
//               </p>
//             </article>

//             <article>
//               <span>03</span>
//               <h3>Protect the evidence</h3>
//               <p>
//                 Preserve validation, provenance and context throughout
//                 data-driven workflows.
//               </p>
//             </article>

//             <article>
//               <span>04</span>
//               <h3>Build for change</h3>
//               <p>
//                 Prefer maintainable architecture and clear interfaces over
//                 short-lived technical shortcuts.
//               </p>
//             </article>
//           </div>
//         </section>

//         <section
//           className="journey section-shell"
//           id="experience"
//           aria-labelledby="experience-title"
//         >
//           <div className="section-heading section-heading-split">
//             <div>
//               <p className="section-label">02 · Experience &amp; Projects</p>

//               <h2 id="experience-title">
//                 Research, engineering and projects in one connected path.
//               </h2>
//             </div>

//             <p>
//               Rather than separating projects from experience, this timeline
//               shows how my research, software engineering, industry work and
//               education have developed together.
//             </p>
//           </div>

//           <div className="timeline">
//             {experienceSteps.map((step) => (
//               <article
//                 className="timeline-row"
//                 key={`${step.number}-${step.title}`}
//               >
//                 <div className="timeline-period">
//                   <span>{step.period}</span>
//                   <small>{step.type}</small>
//                 </div>

//                 <div className={`timeline-node ${step.tone}`}>
//                   <span>{step.number}</span>
//                 </div>

//                 <div className="timeline-card">
//                   <p className="timeline-type">{step.type}</p>

//                   <h3>{step.title}</h3>

//                   <h4>{step.role}</h4>

//                   <p className="timeline-place">{step.place}</p>

//                   <p className="timeline-summary">{step.summary}</p>

//                   <ul
//                     className="tag-list"
//                     aria-label={`${step.title} skills`}
//                   >
//                     {step.tags.map((tag) => (
//                       <li key={tag}>{tag}</li>
//                     ))}
//                   </ul>

//                   {step.href ? (
//                     <a
//                       className="text-link"
//                       href={step.href}
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       {step.linkLabel ?? "View project"} <ArrowIcon />
//                     </a>
//                   ) : null}
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div
//             className="timeline-legend"
//             aria-label="Timeline category colors"
//           >
//             <span>
//               <i className="legend-dot research" />
//               Research
//             </span>

//             <span>
//               <i className="legend-dot project" />
//               Projects
//             </span>

//             <span>
//               <i className="legend-dot industry" />
//               Industry
//             </span>

//             <span>
//               <i className="legend-dot education" />
//               Education
//             </span>
//           </div>
//         </section>

//         <section
//           className="expertise section-shell"
//           id="expertise"
//           aria-labelledby="expertise-title"
//         >
//           <div className="section-heading section-heading-split">
//             <div>
//               <p className="section-label">03 · Expertise</p>

//               <h2 id="expertise-title">
//                 A broad toolkit, organized around outcomes.
//               </h2>
//             </div>

//             <p>
//               I work across machine learning, scientific computing and software
//               engineering, selecting methods and technologies according to the
//               problem rather than forcing every problem into the same stack.
//             </p>
//           </div>

//           <div className="skills-grid">
//             {skills.map((skill) => (
//               <article className="skill-card" key={skill.index}>
//                 <span className="skill-index">{skill.index}</span>

//                 <h3>{skill.title}</h3>

//                 <p>{skill.description}</p>

//                 <ul>
//                   {skill.items.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section
//           className="research section-shell"
//           id="research"
//           aria-labelledby="research-title"
//         >
//           <div className="section-heading section-heading-split">
//             <div>
//               <p className="section-label">
//                 04 · Research &amp; Publications
//               </p>

//               <h2 id="research-title">
//                 Applied research with engineering discipline.
//               </h2>
//             </div>

//             <p>
//               My research spans clinical machine learning, brain connectivity,
//               graph-based methods, medical imaging, computer vision and
//               reproducible scientific computing.
//             </p>
//           </div>

//           <div className="research-layout">
//             <div className="research-feature">
//               <p className="research-kicker">
//                 Current doctoral focus
//               </p>

//               <h3>
//                 Post-stroke outcomes, brain connectivity &amp; network dynamics
//               </h3>

//               <p>
//                 I develop and validate machine-learning models using
//                 brain-connectivity and clinical data from approximately 400
//                 stroke patients. My work includes SVMs, regression and ensemble
//                 models, voxel- and graph-derived features, Kuramoto simulations,
//                 structural-connectivity GNN approaches and reproducible Python
//                 pipelines for preprocessing, optimization, cross-validation,
//                 statistical analysis, visualization and interpretation.
//               </p>

//               <div className="research-note">
//                 <strong>NetSci 2025 · OHBM 2026</strong>

//                 <span>
//                   Presented doctoral research at NetSci 2025 in Maastricht and
//                   the OHBM 2026 Annual Meeting in Bordeaux; manuscript currently
//                   under review.
//                 </span>
//               </div>
//             </div>

//             <div className="publication-list">
//               {publications.map((publication) => (
//                 <a
//                   href={publication.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   key={publication.title}
//                 >
//                   <span className="publication-year">
//                     {publication.year}
//                   </span>

//                   <span className="publication-content">
//                     <small>{publication.venue}</small>
//                     <strong>{publication.title}</strong>
//                   </span>

//                   <ArrowIcon />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section
//           className="more section-shell"
//           aria-labelledby="more-title"
//         >
//           <div className="section-heading">
//             <p className="section-label">05 · Beyond the Code</p>

//             <h2 id="more-title">
//               Communication matters, too.
//             </h2>
//           </div>

//           <div className="more-grid">
//             <article>
//               <span className="more-icon" aria-hidden="true">
//                 ⌁
//               </span>

//               <h3>Teaching</h3>

//               <p>
//                 Approximately 60 hours of university-level Python and
//                 machine-learning instruction, laboratory support and student
//                 guidance.
//               </p>
//             </article>

//             <article>
//               <span className="more-icon" aria-hidden="true">
//                 ◎
//               </span>

//               <h3>Presenting</h3>

//               <p>
//                 Presented doctoral research at NetSci 2025 in Maastricht and
//                 the OHBM 2026 Annual Meeting in Bordeaux to international and
//                 multidisciplinary audiences.
//               </p>
//             </article>

//             <article>
//               <span className="more-icon" aria-hidden="true">
//                 文
//               </span>

//               <h3>Languages</h3>

//               <p>
//                 Persian/Farsi (native), English (professional proficiency),
//                 French (B1 listening, A2 speaking, A1 writing).
//               </p>
//             </article>
//           </div>
//         </section>

//         <section
//           className="contact section-shell"
//           id="contact"
//           aria-labelledby="contact-title"
//         >
//           <div className="contact-grid">
//             <div>
//               <p className="section-label">06 · Contact</p>

//               <h2 id="contact-title">
//                 Let&apos;s build something useful.
//               </h2>

//               <p>
//                 I&apos;m exploring opportunities as a Machine Learning Research
//                 Engineer, Applied AI Engineer or Scientific Software Engineer,
//                 particularly where rigorous research, practical engineering and
//                 meaningful real-world impact meet.
//               </p>
//             </div>

//             <div className="contact-actions">
//               <a
//                 className="contact-primary"
//                 href="mailto:am.mousavi97@gmail.com"
//               >
//                 <span>Email me</span>
//                 <strong>am.mousavi97@gmail.com</strong>
//                 <ArrowIcon />
//               </a>

//               <div className="contact-links">
//                 <a
//                   href="https://www.linkedin.com/in/amir-mousavi97"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   LinkedIn <ArrowIcon />
//                 </a>

//                 <a
//                   href="https://github.com/liamirpy"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   GitHub <ArrowIcon />
//                 </a>

//                 <a
//                   href="https://scholar.google.com/citations?user=Rewu8sQAAAAJ&hl=en"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Scholar <ArrowIcon />
//                 </a>

//                 <a href="/amir-mousavi-cv.pdf" download>
//                   Download CV <span aria-hidden="true">↓</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <footer className="site-footer section-shell">
//         <a className="brand" href="#top" aria-label="Back to top">
//           <span className="brand-mark">AM</span>
//           <span className="brand-name">Amir Mousavi</span>
//         </a>

//         <p>
//           Machine Learning Research Engineer · Applied AI · Scientific Software
//           Engineering
//         </p>

//         <a href="#top">
//           Back to top ↑
//         </a>
//       </footer>
//     </main>
//   );
// }




const experienceSteps = [
  {
    "number": "01",
    "period": "2023 – Present",
    "type": "Research",
    "tone": "research",
    "title": "Machine learning for post-stroke function and brain networks",
    "role": "Machine Learning Researcher / PhD Candidate in Neuroscience",
    "place": "Université de Picardie Jules Verne (UPJV) · Amiens, France",
    "summary": "Develop and evaluate machine-learning models using brain-connectivity, neuroimaging and clinical data from approximately 400 stroke patients to investigate cognitive and motor outcomes. Build reproducible Python pipelines covering preprocessing, feature engineering, hyperparameter optimization, cross-validation and interpretation. Apply SVMs, regression, ensemble learning, voxel-level decoding, graph-based methods, statistical and Bayesian analysis. Presented doctoral research at NetSci 2025 in Maastricht and OHBM 2026 in Bordeaux.",
    "tags": [
      "Machine Learning",
      "Python",
      "Data Science",
      "Statistical Modeling",
      "Graph Analysis",
      "Neuroimaging",
      "SVM",
      "Ensemble Learning",
      "Cross-Validation",
      "Hyperparameter Optimization",
      "Bayesian Analysis",
      "Model Interpretation"
    ]
  },
  {
    "number": "02",
    "period": "2026 – Present",
    "type": "Applied AI Project",
    "tone": "project",
    "title": "DocuMind",
    "role": "Lead Developer & AI Architect — Scientific RAG Platform",
    "place": "Applied AI · RAG · Software Engineering",
    "summary": "Architected and developed a self-hosted, multi-service platform for organizing scientific PDFs, retrieving evidence and answering grounded questions with citations. Implemented document extraction, semantic chunking, embeddings, vector, keyword and hybrid retrieval with OpenSearch, local model inference, provenance-aware asynchronous processing, authentication, Docker/Nginx deployment and CI/CD.",
    "tags": [
      "RAG",
      "Generative AI",
      "LLMs",
      "Embeddings",
      "Hybrid Retrieval",
      "OpenSearch",
      "Python",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Docker",
      "CI/CD",
      "MLOps"
    ],
    "href": "https://github.com/liamirpy/DocuMind",
    "linkLabel": "View repository"
  },
  {
    "number": "03",
    "period": "2026",
    "type": "Scientific Software",
    "tone": "project",
    "title": "PaperMind",
    "role": "Scientific Document Processing & Research Software",
    "place": "Scientific Software · Document Processing",
    "summary": "Developed Python and FastAPI services that transform scientific publications into structured, machine-readable packages containing metadata, hierarchical text, references, figures, tables, formulas, provenance and quality information. Designed reusable API and command-line workflows for validation, indexing, retrieval and RAG pipelines.",
    "tags": [
      "Python",
      "FastAPI",
      "REST APIs",
      "Document AI",
      "PDF Extraction",
      "Data Pipelines",
      "RAG",
      "Provenance",
      "Validation"
    ],
    "href": "https://github.com/liamirpy/PaperMind",
    "linkLabel": "View repository"
  },
  {
    "number": "04",
    "period": "2026",
    "type": "Robotics Project",
    "tone": "project",
    "title": "Baxter Chess-Playing Robot",
    "role": "Vision-Based Robotic Chess System",
    "place": "Computer Vision · Robotics · Software Engineering",
    "summary": "Developed a robotic chess system integrating Kinect-based computer vision, chess-state reasoning, Stockfish, FastAPI, ROS, calibration and motion control. The system detects a human move, updates the board state, generates a legal response and commands a Baxter robot to physically move the appropriate chess piece.",
    "tags": [
      "Computer Vision",
      "Robotics",
      "ROS",
      "Python",
      "FastAPI",
      "Kinect",
      "Motion Control",
      "Robot Calibration",
      "Stockfish",
      "REST APIs",
      "System Integration"
    ],
    "href": "https://github.com/liamirpy/Baxter-chess-playing-Robot",
    "linkLabel": "View repository"
  },
  {
    "number": "05",
    "period": "2025 - 2026",
    "type": "Research Project",
    "tone": "research",
    "title": "GPU-Accelerated Brain Ischemic Stroke Lesion Segmentation",
    "role": "Deep Learning & Medical Imaging",
    "place": "T1-Weighted Brain MRI",
    "summary": "Developed deep-learning models for automated ischemic stroke lesion segmentation in T1-weighted brain MRI. Designed and evaluated RAX-NET and VRXU-net, incorporating attention and residual mechanisms. Built GPU-accelerated TensorFlow training pipelines using CUDA and cuDNN for preprocessing, batching, training and experimentation. Conducted model evaluation and optimization on complex stroke lesions; the work resulted in scientific preprints on both architectures.",
    "tags": [
      "Deep Learning",
      "Computer Vision",
      "Image Segmentation",
      "Medical Imaging",
      "MRI",
      "TensorFlow",
      "CUDA",
      "cuDNN",
      "GPU Computing",
      "Attention Mechanisms",
      "Residual Networks",
      "Model Evaluation"
    ],
    "href": "https://arxiv.org/abs/2605.21633",
    "linkLabel": "View publication"
  },
  {
    "number": "06",
    "period": "2025 - 2026",
    "type": "Teaching",
    "tone": "teaching",
    "title": "Teaching Python & Machine Learning",
    "role": "Teaching Assistant — Python & Machine Learning",
    "place": "Université de Picardie Jules Verne (UPJV) · Amiens, France",
    "summary": "Delivered approximately 60 hours of university-level teaching and laboratory support in Python and machine learning. Supported students with programming, data analysis, model implementation and debugging. Guided hands-on exercises that translated theoretical concepts into working Python implementations, providing individual technical guidance and mentoring during coursework and practical sessions.",
    "tags": [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Programming",
      "Teaching",
      "Mentoring",
      "Technical Communication",
      "Debugging"
    ]
  },
  {
    "period": "2025",
    "type": "Research Collaboration",
    "tone": "research",
    "title": "Neural Dynamics of Conventional and Virtual Reality Trail Making: A Source-Imaging EEG Study",
    "role": "VR, EEG & Research Software Collaboration",
    "place": "Virtual Reality · EEG · Cognitive Neuroscience",
    "summary": "Collaborated on virtual-reality implementations of the Trail Making Test A and B (TMT-A/TMT-B) using a Meta VR headset for cognitive-assessment experiments. Developed and integrated experimental tools for presenting VR-based tasks and supporting EEG signal acquisition. Connected VR interaction, cognitive-task execution and neurophysiological data collection within a research software workflow supporting comparison with conventional Trail Making testing.",
    "tags": [
      "Virtual Reality (VR)",
      "EEG",
      "Research Software",
      "Cognitive Neuroscience",
      "Data Acquisition",
      "System Integration",
      "Human-Computer Interaction",
      "Cognitive Assessment"
    ],
    "number": "07"
  },
  {
    "number": "08",
    "period": "2024",
    "type": "Research Project",
    "tone": "research",
    "title": "Lumbar Spine Degeneration Classification",
    "role": "Deep Learning & Medical Imaging",
    "place": "YOLOv8 · DeepScoreNet",
    "summary": "Developed a deep-learning approach for automated classification of lumbar-spine degeneration using YOLOv8 and DeepScoreNet. Built and evaluated a computer-vision pipeline for identifying relevant spinal structures and classifying degenerative conditions. The work resulted in a manuscript released as a medRxiv preprint.",
    "tags": [
      "Deep Learning",
      "Computer Vision",
      "YOLOv8",
      "Object Detection",
      "Image Classification",
      "Medical Imaging",
      "Python",
      "Model Evaluation"
    ],
    "href": "https://doi.org/10.1101/2024.12.06.24318595",
    "linkLabel": "View publication"
  },
  {
    "number": "09",
    "period": "2023",
    "type": "Research Project",
    "tone": "research",
    "title": "Synthetic Face Generation through Eyes-to-Face Inpainting",
    "role": "Eyes-to-Face Inpainting",
    "place": "Research Project · Published at IEEE IJCB 2023",
    "summary": "Developed an eyes-to-face inpainting approach that generates synthetic facial images by combining eye regions from different individuals and reconstructing complete faces. Evaluated synthetic datasets for age and gender estimation and face-recognition training across four benchmark datasets, while investigating demographic biases and representation.",
    "tags": [
      "Computer Vision",
      "Generative AI",
      "Deep Learning",
      "Image Inpainting",
      "Synthetic Data",
      "Face Recognition",
      "Biometrics",
      "Bias Analysis"
    ],
    "href": "https://doi.org/10.1109/IJCB57857.2023.10449216",
    "linkLabel": "View publication"
  },
  {
    "period": "Jun 2022 – Apr 2023",
    "type": "Research Collaboration",
    "tone": "research",
    "title": "Deep Reinforcement Learning for Secure Wireless Communication",
    "role": "Research Collaborator",
    "place": "Worcester Polytechnic Institute (WPI)",
    "summary": "Collaborated on research applying deep reinforcement learning to secure wireless communication. Implemented Deep Deterministic Policy Gradient (DDPG) for continuous decision-making and optimization, and applied the framework to wireless transmission optimization and performance evaluation.",
    "tags": [
      "Reinforcement Learning",
      "Deep Reinforcement Learning",
      "DDPG",
      "Deep Learning",
      "Python",
      "Optimization",
      "Wireless Communications",
      "Secure Communications"
    ],
    "number": "10"
  },
  {
    "number": "11",
    "period": "May 2021 - Oct 2022",
    "type": "Industry",
    "tone": "industry",
    "title": "Building secure backend services",
    "role": "Backend Developer",
    "place": "Maralhost · Isfahan, Iran",
    "summary": "Developed and maintained Django-based backend services and API microservices for web and server-management applications, including relational data models and server-side business logic. Designed authentication and authorization mechanisms including Single Sign-On, developed web-vulnerability assessment tools and supported Linux-based deployment, debugging and collaborative Git workflows.",
    "tags": [
      "Python",
      "Django",
      "Backend Development",
      "REST APIs",
      "Microservices",
      "Relational Databases",
      "Authentication",
      "Authorization",
      "SSO",
      "Linux",
      "Git"
    ]
  },
  {
    "number": "12",
    "period": "2019 - 2023",
    "type": "Research Project",
    "tone": "research",
    "title": "COVID-19 Lung & Lesion Segmentation",
    "role": "Deep Learning, CT Imaging & Web Deployment",
    "place": "Master’s Research Project · Shiraz University of Technology",
    "summary": "Developed a deep-learning pipeline for automated lung and COVID-19 lesion segmentation from chest CT scans using clinical imaging data collected from hospitals. Built and trained segmentation models to quantify affected lung regions and integrated preprocessing, inference and visualization into a web-based application designed for practical use by healthcare professionals.",
    "tags": [
      "Deep Learning",
      "Computer Vision",
      "Medical Imaging",
      "CT Imaging",
      "Image Segmentation",
      "Python",
      "Image Processing",
      "Model Training",
      "Model Deployment",
      "Web Development"
    ]
  },
  {
    "number": "13",
    "period": "2019 - 2023",
    "type": "AI Project",
    "tone": "project",
    "title": "Real-Time Face-Mask Detection",
    "role": "Edge AI & Computer Vision",
    "place": "Raspberry Pi Deployment",
    "summary": "Developed a real-time deep-learning system for detecting face-mask usage using a Raspberry Pi camera. Implemented image acquisition, preprocessing, inference and visualization for deployment on resource-constrained edge hardware.",
    "tags": [
      "Computer Vision",
      "Deep Learning",
      "Edge AI",
      "Raspberry Pi",
      "Embedded Systems",
      "Real-Time Inference",
      "Image Processing",
      "Python"
    ]
  },
  {
    "number": "14",
    "period": "2019 - 2023",
    "type": "Education",
    "tone": "education",
    "title": "Deep learning meets medical imaging",
    "role": "MSc, Electrical Engineering - Telecommunications",
    "place": "Shiraz University of Technology · Shiraz, Iran",
    "summary": "Graduate study focused on machine learning, deep learning and medical image analysis. My thesis investigated quantification of damaged lung tissue due to COVID-19 using computed tomography images and led to practical work in segmentation, computer vision and software deployment.",
    "tags": [
      "Telecommunications",
      "Deep Learning",
      "Medical Imaging",
      "Computer Vision"
    ]
  },
  {
    "period": "2019",
    "type": "Research Project",
    "tone": "project",
    "title": "Persian NLP for E-commerce Review Analysis",
    "role": "Bachelor’s Thesis",
    "place": "University of Isfahan",
    "summary": "Developed a Persian-language NLP pipeline using approximately 15,000 customer reviews from Digikala. Built a supervised text-classification model with TF-IDF features and a Linear SVM to classify reviews by purchase recommendation. Implemented sentiment-analysis and text-processing workflows, and applied Latent Dirichlet Allocation (LDA) to identify product-related themes in positive and negative feedback.",
    "tags": [
      "NLP",
      "Machine Learning",
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "SVM",
      "Sentiment Analysis",
      "Topic Modeling",
      "LDA",
      "Data Analysis",
      "Persian NLP"
    ],
    "number": "15"
  },
  {
    "number": "16",
    "period": "Oct 2017 - Oct 2019",
    "type": "Industry",
    "tone": "industry",
    "title": "From software to physical control systems",
    "role": "Embedded Systems & Electronics Engineer",
    "place": "Mobarakeh Steel Company · Isfahan, Iran",
    "summary": "Analyzed and redesigned an existing electronic control board for rolling-equipment speed regulation, integrating a microcontroller-based control system. Developed control algorithms and evaluated system performance, behavior and reliability under operational conditions.",
    "tags": [
      "Embedded Systems",
      "Microcontrollers",
      "Electronics",
      "Control Systems",
      "Embedded Programming",
      "Hardware–Software Integration",
      "Industrial Automation",
      "System Testing"
    ]
  },
  {
    "number": "17",
    "period": "2015 - 2019",
    "type": "Education",
    "tone": "education",
    "title": "A foundation in systems thinking",
    "role": "BEng, Electrical Engineering - Telecommunications",
    "place": "University of Isfahan · Isfahan, Iran",
    "summary": "Built a foundation in electrical engineering, mathematics, signals and computation. My final project applied machine learning to Persian-language e-commerce sentiment analysis with positive/negative classification and negative-term extraction.",
    "tags": [
      "Electrical Engineering",
      "Telecommunications",
      "Mathematics",
      "NLP"
    ]
  }
];

const skills = [
  {
    "index": "01",
    "title": "Machine Learning, Data Science & AI",
    "description": "Statistical analysis and model development for high-dimensional scientific, clinical and real-world data.",
    "items": [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Science",
      "Statistical Modeling",
      "Bayesian Analysis",
      "Graph-Based Learning",
      "Reinforcement Learning",
      "NLP",
      "Optimization"
    ]
  },
  {
    "index": "02",
    "title": "Model Development & GPU Computing",
    "description": "Reproducible model development, validation, statistical analysis and visualization in Python.",
    "items": [
      "Python",
      "NumPy",
      "pandas",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "CUDA",
      "cuDNN",
      "Feature Engineering",
      "Cross-Validation",
      "Hyperparameter Optimization",
      "Model Interpretation"
    ]
  },
  {
    "index": "03",
    "title": "Software Engineering",
    "description": "Backend and full-stack software engineering for APIs, services and maintainable applications.",
    "items": [
      "Python",
      "JavaScript",
      "FastAPI",
      "Django",
      "Flask",
      "Node.js",
      "Express",
      "Next.js",
      "React",
      "REST APIs"
    ]
  },
  {
    "index": "04",
    "title": "Generative AI & RAG",
    "description": "Grounded AI and document-intelligence systems designed around retrieval quality, context and provenance.",
    "items": [
      "Generative AI",
      "LLMs",
      "RAG",
      "Embeddings",
      "Semantic Chunking",
      "Vector Search",
      "Keyword Retrieval",
      "Hybrid Retrieval",
      "Local Model Inference",
      "Source-Grounded Question Answering"
    ]
  },
  {
    "index": "05",
    "title": "Backend Infrastructure & MLOps",
    "description": "Data, search and deployment infrastructure for reliable multi-service software systems.",
    "items": [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "OpenSearch",
      "Docker",
      "Nginx",
      "Linux",
      "Git",
      "GitHub Actions",
      "CI/CD"
    ]
  },
  {
    "index": "06",
    "title": "Robotics & Experimental Systems",
    "description": "Software integration connecting perception, physical control and cognitive research experiments.",
    "items": [
      "Robotics",
      "ROS",
      "Kinect",
      "Motion Control",
      "Robot Calibration",
      "Virtual Reality",
      "EEG Data Acquisition",
      "Embedded Systems",
      "Raspberry Pi",
      "System Integration"
    ]
  }
];

const publications = [
  {
    "year": "2026",
    "venue": "arXiv",
    "title": "VRXU-net: A Deep Learning Approach for Brain Ischemic Stroke Lesion Detection and Segmentation in T1W MRI",
    "href": "https://arxiv.org/abs/2605.21633"
  },
  {
    "year": "2025",
    "venue": "medRxiv",
    "title": "RAX-NET: Residual Attention Xception Network for Brain Ischemic Stroke Segmentation in T1-Weighted MRI",
    "href": "https://doi.org/10.1101/2025.09.26.25336733"
  },
  {
    "year": "2024",
    "venue": "medRxiv",
    "title": "Lumbar Spine Degenerative Classification Using YOLO v8 and DeepScoreNet",
    "href": "https://doi.org/10.1101/2024.12.06.24318595"
  },
  {
    "year": "2024",
    "venue": "arXiv",
    "title": "Empowering Medical Imaging with Artificial Intelligence: A Review of Machine Learning Approaches for the Detection, and Segmentation of COVID-19 Using Radiographic and Tomographic Images",
    "href": "https://arxiv.org/abs/2401.07020"
  },
  {
    "year": "2023",
    "venue": "IEEE IJCB",
    "title": "Synthetic Face Generation Through Eyes-to-Face Inpainting",
    "href": "https://doi.org/10.1109/IJCB57857.2023.10449216"
  }
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Amir Mousavi, home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Amir Mousavi</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
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

          <a
            className="nav-social"
            href="https://scholar.google.com/citations?user=Rewu8sQAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Amir Mousavi's Google Scholar profile"
          >
            Scholar <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <a className="header-cta" href="#contact">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      <div id="content">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title">
              I turn complex data into practical AI and reliable software.
            </h1>

            <p className="hero-kicker">
              AI / Machine Learning Engineer · Data Scientist · Researcher
            </p>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-intro">
                I&apos;m Amir, an AI / Machine Learning Engineer, Data Scientist and PhD candidate in Neuroscience. I combine statistical reasoning, model development and software engineering to solve problems across computer vision, medical imaging, clinical data and generative AI. My work connects research with practical systems—from validated models to APIs, retrieval platforms and deployment.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#experience">
                  Explore my work <ArrowIcon />
                </a>

                <a
                  className="button button-secondary"
                  href="/amir-mousavi-cv.pdf"
                  download
                >
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

              <div className="profile-location">
                <span>Based in</span>
                <strong>France</strong>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>{experienceSteps.filter((step) => step.tone === "project" || step.type === "Research Project" || step.type === "Research Collaboration").length}</strong>
                  <span>selected AI & engineering projects</span>
                </div>

                <div>
                  <strong>{publications.length}</strong>
                  <span>selected publications</span>
                </div>

                <div>
                  <strong>60</strong>
                  <span>hours teaching Python & ML</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="proof-strip" aria-label="Core focus areas">
          <div className="proof-track">
            <span>Machine Learning &amp; AI</span>
            <i>✦</i>
            <span>Data Science &amp; Statistical Modeling</span>
            <i>✦</i>
            <span>Software Engineering</span>
            <i>✦</i>
            <span>Applied AI &amp; RAG</span>
            <i>✦</i>
            <span>Medical Imaging</span>
            <i>✦</i>
            <span>Computer Vision</span>
            <i>✦</i>
          </div>
        </section>

        <section
          className="about section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <p className="section-label">01 · About</p>

            <h2 id="about-title">
              Engineering with depth, curiosity and context.
            </h2>
          </div>

          <div className="about-layout">
            <p className="about-lead">
                I work across AI engineering, machine learning, data science and computer vision, combining analytical thinking with practical system building.
              </p>

            <div className="about-body">
              <p>
                My background spans electrical engineering, mathematics, statistics,
                software engineering and neuroscience. I enjoy understanding complex,
                open-ended problems, analyzing the data and underlying theory,
                experimenting with different approaches, and turning validated results
                into practical AI and software systems.
              </p>
              <p>
                My experience includes medical-image segmentation, synthetic data,
                statistical and graph-based machine learning, NLP, reinforcement
                learning, scientific RAG platforms, robotics and backend development.
                During my PhD, I have further developed my skills in high-dimensional
                data analysis, statistical modeling, optimization and reproducible research.
              </p>
            </div>
          </div>

          <div className="principles-grid">
            <article>
              <span>01</span>
              <h3>Think in systems</h3>
              <p>
                Understand the complete problem and workflow before optimizing a
                single component.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Make it reproducible</h3>
              <p>
                Design experiments and software that can be tested, explained
                and repeated with confidence.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Protect the evidence</h3>
              <p>
                Preserve validation, provenance and context throughout
                data-driven workflows.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Build for change</h3>
              <p>
                Prefer maintainable architecture and clear interfaces over
                short-lived technical shortcuts.
              </p>
            </article>
          </div>
        </section>

        <section
          className="journey section-shell"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">02 · Experience &amp; Projects</p>

              <h2 id="experience-title">
                Research, engineering and projects in one connected path.
              </h2>
            </div>

            <p>
              Research appointments, industry roles, collaborations and independent
              projects, with the methods and skills used in each.
            </p>
          </div>

          <div className="timeline">
            {experienceSteps.map((step) => (
              <article
                className="timeline-row"
                key={`${step.number}-${step.title}`}
              >
                <div className="timeline-period">
                  <span>{step.period}</span>
                  <small>{step.type}</small>
                </div>

                <div className={`timeline-node ${step.tone}`}>
                  <span>{step.number}</span>
                </div>

                <div className="timeline-card">
                  <p className="timeline-type">{step.type}</p>

                  <h3>{step.title}</h3>

                  <h4>{step.role}</h4>

                  <p className="timeline-place">{step.place}</p>

                  <p className="timeline-summary">{step.summary}</p>

                  <p className="timeline-type">Skills</p>

                  <ul
                    className="tag-list"
                    aria-label={`${step.title} skills`}
                  >
                    {step.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  {step.href ? (
                    <a
                      className="text-link"
                      href={step.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {step.linkLabel ?? "View project"} <ArrowIcon />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div
            className="timeline-legend"
            aria-label="Timeline category colors"
          >
            <span>
              <i className="legend-dot research" />
              Research
            </span>

            <span>
              <i className="legend-dot project" />
              Projects
            </span>

            <span>
              <i className="legend-dot industry" />
              Industry
            </span>

            <span>
              <i className="legend-dot education" />
              Education
            </span>
            <span>
              <i className="legend-dot teaching" />
              Teaching
            </span>
          </div>
        </section>

        <section
          className="expertise section-shell"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">03 · Expertise</p>

              <h2 id="expertise-title">
                A broad toolkit, organized around outcomes.
              </h2>
            </div>

            <p>
              My core skills are machine learning, Python, deep learning, computer
              vision and data science, supported by generative AI, backend
              engineering and deployment experience.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.index}>
                <span className="skill-index">{skill.index}</span>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="research section-shell"
          id="research"
          aria-labelledby="research-title"
        >
          <div className="section-heading section-heading-split">
            <div>
              <p className="section-label">
                04 · Research &amp; Publications
              </p>

              <h2 id="research-title">
                Applied research with engineering discipline.
              </h2>
            </div>

            <p>
              My research spans clinical machine learning, brain connectivity,
              graph-based methods, medical imaging, computer vision and
              reproducible scientific computing.
            </p>
          </div>

          <div className="research-layout">
            <div className="research-feature">
              <p className="research-kicker">
                Current doctoral focus
              </p>

              <h3>
                Post-stroke outcomes, brain connectivity &amp; network dynamics
              </h3>

              <p>
                I develop and validate machine-learning models using
                brain-connectivity and clinical data from approximately 400
                stroke patients. My work includes SVMs, regression and ensemble
                models, voxel- and graph-derived features, Kuramoto simulations,
                structural-connectivity GNN approaches and reproducible Python
                pipelines for preprocessing, optimization, cross-validation,
                statistical analysis, visualization and interpretation.
              </p>

              <div className="research-note">
                <strong>NetSci 2025 · OHBM 2026</strong>

                <span>
                  Presented doctoral research at NetSci 2025 in Maastricht and
                  the OHBM 2026 Annual Meeting in Bordeaux; manuscript currently
                  under review.
                </span>
              </div>
            </div>

            <div className="publication-list">
              {publications.map((publication) => (
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  key={publication.title}
                >
                  <span className="publication-year">
                    {publication.year}
                  </span>

                  <span className="publication-content">
                    <small>{publication.venue}</small>
                    <strong>{publication.title}</strong>
                  </span>

                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="more section-shell"
          aria-labelledby="more-title"
        >
          <div className="section-heading">
            <p className="section-label">05 · Beyond the Code</p>

            <h2 id="more-title">
              Communication matters, too.
            </h2>
          </div>

          <div className="more-grid">
            <article>
              <span className="more-icon" aria-hidden="true">
                ⌁
              </span>

              <h3>Teaching</h3>

              <p>
                Approximately 60 hours of university-level Python and
                machine-learning instruction, laboratory support and student
                guidance.
              </p>
            </article>

            <article>
              <span className="more-icon" aria-hidden="true">
                ◎
              </span>

              <h3>Presenting</h3>

              <p>
                Presented doctoral research at NetSci 2025 in Maastricht and
                the OHBM 2026 Annual Meeting in Bordeaux to international and
                multidisciplinary audiences.
              </p>
            </article>

            <article>
              <span className="more-icon" aria-hidden="true">
                文
              </span>

              <h3>Languages</h3>

              <p>
                Persian/Farsi (native), English (professional proficiency),
                French (B1 listening, A2 speaking, A1 writing).
              </p>
            </article>
          </div>
        </section>

        <section
          className="contact section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-grid">
            <div>
              <p className="section-label">06 · Contact</p>

              <h2 id="contact-title">
                Let&apos;s build something useful.
              </h2>

              <p>
                I&apos;m exploring opportunities in AI Engineering, Machine Learning
                Engineering, Data Science, Computer Vision and Research Engineering,
                where analytical thinking and practical system building come together.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="contact-primary"
                href="mailto:am.mousavi97@gmail.com"
              >
                <span>Email me</span>
                <strong>am.mousavi97@gmail.com</strong>
                <ArrowIcon />
              </a>

              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/amir-mousavi97"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowIcon />
                </a>

                <a
                  href="https://github.com/liamirpy"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowIcon />
                </a>

                <a
                  href="https://scholar.google.com/citations?user=Rewu8sQAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Scholar <ArrowIcon />
                </a>

                <a href="/amir-mousavi-cv.pdf" download>
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Amir Mousavi</span>
        </a>

        <p>
          AI / Machine Learning Engineer · Data Scientist · Researcher
        </p>

        <a href="#top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}