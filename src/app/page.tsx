import Link from "next/link";
import Image from "next/image";
import { BookOpen, ExternalLink, Github, Globe } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

const featuredProjects = [
  {
    title: "Comanda — Multi-Agent Delivery Customer Support",
    subtitle: "Claude Agent SDK · Model Context Protocol (MCP) · FastAPI · Next.js · SQLite",
    description:
      "Multi-agent orchestration (Reception on Claude Haiku + Order & Refund Specialists on Sonnet) with per-agent MCP servers, deterministic refund calculation in code, 4 tool guardrails, custom Portuguese BM25 + Snowball stemmer from scratch, and a 30-scenario τ-bench evaluation suite (8 adversarial, LLM-as-a-Judge, pass³) achieving 0 policy violations at $0.026/session.",
    links: [
      { label: "Live Replay (Vercel)", href: "https://comanda-blond.vercel.app" },
      { label: "GitHub & 29 ADRs", href: "https://github.com/TheAndr3/comanda" },
      { label: "HF Dataset", href: "https://huggingface.co/datasets/TheAndr3/comanda-delivery-support-eval-ptbr" },
    ],
  },
  {
    title: "LSH Forest & MinHash Clinical Recommender",
    subtitle: "Python · Datasketch · LSH Forest (l=200, k=20) · Serverless LRU Cache · MongoDB",
    description:
      "Production User-Based Collaborative Filtering engine built at UEFS. Compresses patient histories into 200-permutation MinHash signatures indexed in self-tuning LSH Forest prefix trees, with a Memory-First LRU cache (~200ms warm start), batch inference (300 patients/call), deterministic clinical gender filtering, and 4-level graceful degradation.",
    links: [
      { label: "HF Model & Code", href: "https://huggingface.co/TheAndr3/lsh-forest-clinical-recommender" },
      { label: "Technical Article", href: "/blog/lsh-forest-minhash-serverless-recommender" },
    ],
  },
  {
    title: "Flow — High-Throughput Telemetry Pipeline",
    subtitle: "Elixir/OTP · Phoenix · Broadway · Oban · PostgreSQL",
    description:
      "Asynchronous event ingestion and processing pipeline using Elixir/OTP and Broadway with configurable batching and backpressure, persistent background jobs via Oban, real-time Phoenix PubSub broadcasting, and Telemetry Metrics instrumentation.",
    links: [
      { label: "GitHub Repository", href: "https://github.com/TheAndr3/flow" },
    ],
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-12 md:py-20 lg:px-24">
      {/* Container Principal */}
      <div className="max-w-4xl mx-auto space-y-16">

        {/* --- SEÇÃO DO TOPO (Hero) --- */}
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">

          {/* Coluna de Texto */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                André Vinícius
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                AI Engineer & Software Engineer building Multi-Agent Systems, Machine Learning models, and scalable distributed backends.
              </h2>
            </div>

            {/* Sobre Mim */}
            <div className="max-w-xl text-muted-foreground leading-relaxed">
              <h3 className="text-2xl text-foreground font-bold mb-3">About Me</h3>
              <p className="text-left mb-6">
                I am a Software Engineering Intern at the <strong>Brazilian Federal Court of Accounts (TCU)</strong>, an Undergraduate AI & Recommender Systems Researcher at <strong>UEFS</strong>, and a <strong>Google Student Ambassador 2026</strong>. Specializing in Python, TypeScript/Next.js, Go, and Elixir, I build production-grade Multi-Agent LLM architectures (Claude Agent SDK, MCP, deterministic guardrails, τ-bench evaluation), approximate nearest-neighbor recommendation engines (LSH Forest & MinHash), and fault-tolerant distributed backends.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-md text-sm"
                >
                  View All Projects
                </Link>
                <Link
                  href="https://huggingface.co/TheAndr3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-all text-sm border border-border"
                >
                  🤗 Hugging Face
                </Link>
                <Link
                  href="https://dev.to/theandr3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/80 transition-all text-sm border border-border"
                >
                  📝 Dev.to
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna do Avatar */}
          <div className="flex-shrink-0">
            <div className="avatar">
              <div className="relative w-45 md:w-70 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl transition-all duration-500">
                <Image src="https://github.com/TheAndr3.png" alt="André Vinícius" fill />
              </div>
            </div>
          </div>

        </section>

        {/* --- FEATURED AI & SYSTEMS ENGINEERING PROJECTS --- */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold text-foreground">Featured Engineering Projects</h2>
            <Link href="/projects" className="text-sm font-semibold text-primary hover:underline">
              See all projects →
            </Link>
          </div>

          <div className="grid gap-5">
            {featuredProjects.map((proj) => (
              <div
                key={proj.title}
                className="p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{proj.title}</h3>
                  <p className="text-xs font-mono text-blue-500 dark:text-blue-400">{proj.subtitle}</p>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {proj.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {external ? <ExternalLink className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Professional Experience</h2>

          {/* Item de Experiência: TCU */}
          <div className="flex gap-4 md:gap-6 group">
            <div className="flex-shrink-0 mt-1">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200 overflow-hidden">
                <Image
                  src="/tcu.png"
                  alt="Logo da TCU"
                  fill
                  className="scale-100 object-contain"
                />
              </div>
            </div>

            <div className="flex-1 space-y-2 p-4 -m-4 rounded-xl hover:bg-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground">Tribunal de Contas da União (TCU)</h3>
                <span className="text-sm text-muted-foreground font-medium">June 2026 – Present</span>
              </div>

              <p className="text-blue-500 dark:text-blue-400 font-medium">
                Software Engineering Intern
              </p>

              <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left space-y-1">
                <div>- Develop and maintain enterprise backend features and business rules utilizing Apex, PL/SQL, and JavaScript to support federal auditing and oversight platforms.</div>
                <div>- Optimize complex relational SQL queries and persistence routines with a strong focus on performance, reliability, and data integrity.</div>
                <div>- Investigate production issues and implement fixes across mission-critical corporate applications.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Applied Research & Engineering</h2>

          <div className="flex gap-4 md:gap-6 group">
            <div className="flex-shrink-0 mt-1">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200 overflow-hidden">
                <Image
                  src="/brasao-uefs-2.png"
                  alt="Logo da UEFS"
                  fill
                  className="scale-125 object-contain"
                />
              </div>
            </div>

            <div className="flex-1 space-y-2 p-4 -m-4 rounded-xl hover:bg-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground">Universidade Estadual de Feira de Santana (UEFS)</h3>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <p className="text-blue-500 dark:text-blue-400 font-medium">
                  Undergraduate Researcher — Software Engineering & Recommender Systems
                </p>
                <span className="text-sm text-muted-foreground font-medium">September 2025 – Present</span>
              </div>

              <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left space-y-1">
                <div>- Engineered LogicFarma, a pharmaceutical management SaaS built with Next.js, Node.js, and MongoDB following Clean Architecture principles (4,700+ operational records and 1,060+ medications).</div>
                <div>- Designed and deployed in production a Python recommendation engine using <strong>LSH Forest</strong> and <strong>MinHash</strong> (<code>l = 200</code> permutations, <code>k = 20</code> neighbors) with a Memory-First Serverless LRU cache (~200ms warm-start latency).</div>
                <div>- Implemented batch inference (up to 300 patients per HTTP request), deterministic clinical gender filtering, and 4-level graceful degradation (LSH → Partial LSH → Segmented Global Fallback → Timeout Fail-safe).</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LEADERSHIP & EXTRACURRICULAR ACTIVITIES --- */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Leadership & Extracurricular Activities</h2>

          <div className="flex gap-4 md:gap-6 group">
            <div className="flex-shrink-0 mt-1">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200 overflow-hidden">
                <Image
                  src="/google.svg"
                  alt="Logo do Google"
                  fill
                  className="scale-75 object-contain"
                />
              </div>
            </div>

            <div className="flex-1 space-y-2 p-4 -m-4 rounded-xl hover:bg-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground">Google</h3>
                <span className="text-sm text-muted-foreground font-medium">August 2026 – Present</span>
              </div>

              <p className="text-blue-500 dark:text-blue-400 font-medium">
                Google Student Ambassador 2026
              </p>

              <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left space-y-1">
                <div>- Lead campus initiatives to upskill university students in practical applications of Google AI technologies and Gemini workflows.</div>
                <div>- Conduct technical knowledge-sharing sessions on modern development tools and generative AI integration.</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- AWARDS & RECOGNITIONS --- */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Awards & Recognitions</h2>

          <div className="flex gap-4 md:gap-6 group">
            <div className="flex-shrink-0 mt-1">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200 overflow-hidden">
                <Image
                  src="/claro.png"
                  alt="Logo da Claro"
                  fill
                  className="scale-100 object-contain p-1"
                />
              </div>
            </div>

            <div className="flex-1 space-y-2 p-4 -m-4 rounded-xl hover:bg-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  Instituto Claro / LSITEC
                </h3>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <p className="text-blue-500 dark:text-blue-400 font-medium">
                  National Finalist — 13th Edition of Campus Mobile
                </p>
                <span className="text-sm text-muted-foreground font-medium">Dec 2024 – Feb 2025</span>
              </div>

              <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left space-y-1">
                <div>- Selected as a National Finalist in the Health category for the 13th edition of Campus Mobile, pitching an original tech MVP to healthcare executives and engineers.</div>
                <div>- Developed a high-engagement Minimum Viable Product (MVP) and refined product architecture through intensive mentoring at USP/LSITEC.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Courses and Certifications</h2>

          <div className="grid gap-4">
            <div className="flex gap-4 md:gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200">
                  <Image
                    src="/fast.svg"
                    alt="Logo da CesarSchool"
                    fill
                    className="scale-75 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    <Link
                      href="https://drive.google.com/file/d/1AGK4gaDbA85wq7mh-NmLxBRRRUswhhmu/view?usp=sharing"
                      target="_blank"
                      className="flex gap-4 md:gap-6 items-center group p-3 -mx-3 rounded-xl hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      Platform Engineering (FAST)
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                    80 hours
                  </span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  CESAR School
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200">
                  <Image
                    src="/claro.png"
                    alt="Logo do Instituto Claro"
                    fill
                    className="scale-100 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    <Link
                      href="https://drive.google.com/file/d/19SQGiKjzR6AI7tRpcnnlwSxpWKD9PTIo/view?usp=sharing"
                      target="_blank"
                      className="flex gap-4 md:gap-6 items-center group p-3 -mx-3 rounded-xl hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      13th Edition Campus Mobile
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </h3>
                  <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                    Immersive Week
                  </span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                  Instituto Claro / LSITEC
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- ARTICLES AND OPINIONS --- */}
        <section className="space-y-8 flex flex-col justify-center items-center text-center">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              Technical Articles
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Recent Publications
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Deep dives into Multi-Agent LLM orchestration, Model Context Protocol (MCP), Recommender Systems in production, and Neural Networks from scratch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 w-full">
            {posts.map((post) => (
              <div key={post.slug} className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all text-left h-full">
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {post.frontmatter.category || "Engineering"}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors line-clamp-3">
                      {post.frontmatter.title}
                    </h3>
                  </Link>
                  <time className="text-xs text-muted-foreground mb-4 block">
                    {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <p className="text-muted-foreground text-sm line-clamp-4 mb-6 flex-1">
                    {post.frontmatter.description}
                  </p>

                  <div className="space-y-4 mt-auto">
                    {post.frontmatter.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.frontmatter.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Read Blog
                      </Link>
                      {typeof post.frontmatter.devtoUrl === "string" && (
                        <Link
                          href={post.frontmatter.devtoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold hover:bg-secondary/80 transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          Dev.to
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CORE TECH STACK --- */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Core Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "TypeScript",
              "Claude Agent SDK & MCP",
              "LLM Evaluation (τ-bench)",
              "LSH Forest & MinHash",
              "BM25",
              "FastAPI",
              "Next.js",
              "NestJS",
              "Go",
              "Elixir / OTP",
              "PostgreSQL",
              "MongoDB",
              "SQLite",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-semibold border border-border hover:-translate-y-1 hover:bg-secondary hover:shadow-sm transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="flex flex-col items-center justify-center space-y-8 pt-16 pb-8 text-center">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Let&apos;s build something together
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed max-w-xl mx-auto">
              Feel free to reach out if you&apos;re looking for an AI / Software Engineer, have a question, or want to connect.
            </p>
          </div>

          <a
            href="mailto:andrevinciusdiz@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold overflow-hidden hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>

            <span>andrevinciusdiz@gmail.com</span>
            <Github className="w-5 h-5 hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </section>
        <div className="h-24 md:h-32" />
      </div>
    </main>
  );
}
