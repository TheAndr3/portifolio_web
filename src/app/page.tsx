import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

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
                Full-Stack Software Engineer building scalable applications and data-driven solutions.
              </h2>
            </div>

            {/* Sobre Mim */}
            <div className="max-w-xl text-muted-foreground leading-relaxed">
              <h3 className="text-2xl text-foreground font-bold mb-3">About Me</h3>
              <p className="text-left">
                I am a Full-Stack & Backend Engineer specializing in building scalable web applications and data-driven solutions. With a strong foundation in Next.js, Node.js, TypeScript and Python, I thrive on translating complex business requirements into high-performance, maintainable software architecture. From developing pharmaceutical SaaS platforms to engineering automated data pipelines, I focus on delivering robust systems that drive real impact. Fluent in English (C1) and highly adaptable, I am ready to tackle challenging engineering problems on a global scale.
              </p>
            </div>
          </div>

          {/* Coluna do Avatar (DaisyUI) */}
          <div className="flex-shrink-0">
            <div className="avatar">
              <div className=" relative w-45 md:w-70 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl transition-all duration-500">
                {/* Usando sua foto do GitHub automaticamente */}
                <Image src="https://github.com/TheAndr3.png" alt="André Vinícius" fill />
              </div>
            </div>
          </div>

        </section>

        {/* --- CORE TECH STACK --- */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Core Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["Next.js", "Node.js", "TypeScript", "Python", "MongoDB", "Docker", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-semibold border border-border hover:-translate-y-1 hover:bg-secondary hover:shadow-sm transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Professional Experience</h2>

          {/* Item de Experiência: Acredita Bahia */}
          <div className="flex gap-4 md:gap-6 group">

            {/* Logo da Empresa */}
            <div className="flex-shrink-0 mt-1">
              {/* Container redondo branco estilo referência */}
              <div className=" relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200 overflow-hidden">
                <Image
                  src="/LogoAcredita.png"
                  alt="Logo da Acredita Bahia"
                  fill
                  className="scale-125 object-contain"
                />
              </div>
            </div>

            {/* Conteúdo da Experiência */}
            <div className="flex-1 space-y-2 p-4 -m-4 rounded-xl hover:bg-accent/30 transition-colors">
              {/* Cabeçalho: Empresa + Data */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground">Acredita Bahia</h3>
                <span className="text-sm text-muted-foreground font-medium">July 2025 - December 2025</span>
              </div>

              {/* Cargo com destaque de cor (como na referência) */}
              <p className="text-blue-500 dark:text-blue-400 font-medium">
                Full Stack Developer (Freelance)
              </p>

              {/* Descrição do Cargo (Texto do CV adaptado para parágrafo) */}
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                Developed a Chrome extension (Manifest V3) for automation, utilizing DOM manipulation, local storage, and dynamic templates.
                Created a bulk sending service via Evolution API (Docker), implementing rate limiting, error logging, and RESTful integration.
                Additionally, implemented scripts for parsing and sanitizing CSV/Excel files for contact validation and campaign optimization using Pandas in Python.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Applied Research & Engineering</h2>

          <div className="flex gap-4 md:gap-6 group">

            {/* Logo da Empresa */}
            <div className="flex-shrink-0 mt-1">
              {/* Container redondo branco estilo referência */}
              <div className=" relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200 overflow-hidden">
                <Image
                  src="/brasao-uefs-2.png"
                  alt="Logo da UEFS"
                  fill
                  className="scale-125 object-contain"
                />
              </div>
            </div>

            {/* Conteúdo da Experiência */}
            <div className="flex-1 space-y-2 p-4 -m-4 rounded-xl hover:bg-accent/30 transition-colors">
              {/* Cabeçalho: Empresa + Data */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground">UEFS</h3>
              </div>

              {/* Cargo com destaque de cor e data */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <p className="text-blue-500 dark:text-blue-400 font-medium">
                  Software Developer (Undergraduate Researcher)
                </p>
                <span className="text-sm text-muted-foreground font-medium">August 2025 - Today</span>
              </div>

              <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                <div>- Engineered a scalable pharmaceutical management SaaS (LogicFarma) using Next.js, Node.js, and MongoDB, streamlining complex operational workflows.</div>
                <div>- Implemented high-performance data optimization and advanced search algorithms using Python (Datasketch) to efficiently process scientific data.</div>
                <div>- Architected the system applying industry best practices and design patterns to ensure long-term maintainability and horizontal scalability.</div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline pt-4">
                <p className="text-blue-500 dark:text-blue-400 font-medium">
                  Software Developer (Technological Initiation)
                </p>
                <span className="text-sm text-muted-foreground font-medium">April 2026 - Today</span>
              </div>

              <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                <div>- Architected and developed web and mobile platforms to centralize regional health data, significantly improving accessibility for researchers and public health managers.</div>
                <div>- Built interactive geospatial mapping tools and evidence-based dashboards, empowering stakeholders with real-time data visualization and decision support.</div>
                <div>- Integrated complex health information systems, establishing robust data interoperability across multiple SUS (Unified Health System) care levels.</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- AWARDS & RECOGNITIONS --- */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Awards & Recognitions</h2>

          {/* Item: Claro Campus Mobile */}
          <div className="flex gap-4 md:gap-6 group">
            {/* Logo da Empresa */}
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

            {/* Conteúdo da Experiência */}
            <div className="flex-1 space-y-2 p-4 -m-4 rounded-xl hover:bg-accent/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  Claro
                </h3>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <p className="text-blue-500 dark:text-blue-400 font-medium">
                  13th Edition of Campus Mobile
                </p>
                <span className="text-sm text-muted-foreground font-medium">Jan 2025 - Feb 2025</span>
              </div>

              <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                <div>- Selected as a National Finalist (among hundreds of applicants) in the Health category for the 13th edition of Campus Mobile, pitching an original tech solution.</div>
                <div>- Developed a high-engagement Minimum Viable Product (MVP) using Flutter and prototyped an intuitive, gamified UI/UX using Figma.</div>
                <div>- Refined product architecture and business strategy through intensive mentoring by industry experts from Claro, Alura, and leading healthcare institutions.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Courses and Certifications</h2>

          <div className="grid gap-4">

            {/* Item 1: CESAR School */}

            <div className="flex gap-4 md:gap-6 items-center">
              {/* Logo Placeholder */}
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

              {/* Texto */}
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


            {/* Item 2: Campus Mobile */}
            <div className="flex gap-4 md:gap-6 items-center">
              {/* Logo Placeholder */}
              <div className="flex-shrink-0">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-neutral-200">
                  <Image
                    src="/claro.png"
                    alt="Logo do Instituto Claro"
                    fill
                    className="scale-100 object-contain" // object-contain garante que o logo inteiro apareça sem cortar
                  />
                </div>
              </div>

              {/* Texto */}
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
              Articles and Opinions
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Publications in my personal blog
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I like writing about a variety of things, from random thoughts to professional technical content.
              You can find some examples below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 w-full">
            {posts.map((post) => (
              <div key={post.slug} className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all text-left h-full">
                {/* Image Placeholder - A simple pattern or gradient */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 w-full relative">
                  {post.frontmatter.coverImage && (
                    <Image
                      src={post.frontmatter.coverImage}
                      alt={post.frontmatter.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.frontmatter.title}</h3>
                  <time className="text-sm text-muted-foreground mb-4 block">
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                    {post.frontmatter.description}
                  </p>

                  <div className="space-y-4">
                    {post.frontmatter.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.frontmatter.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors w-fit"
                    >
                      <Globe className="w-4 h-4" />
                      Website
                    </Link>
                  </div>
                </div>
              </div>
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
              Let's build something together
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed max-w-xl mx-auto">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </div>

          <a
            href="mailto:andrevinciusdiz@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold overflow-hidden hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            {/* Efeito de brilho hover */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>

            <span>andrevinciusdiz@gmail.com</span>
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