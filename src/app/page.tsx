import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const links = [
    { name: "Download CV", href: "https://drive.google.com/file/d/1jxaWjmFVQgj3LYePpmJaQeqfC4vRjNFj/view?usp=sharing" },
  ];

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
                Exploring innovation and creating impact through technology.
              </h2>
            </div>

            {/* Sobre Mim */}
            <div className="max-w-xl text-muted-foreground leading-relaxed">
              <h3 className="text-2xl text-foreground font-bold">About Me</h3>
              <p className="text-left">
                I started my computing journey at a very young age, playing and pirating games.
                I am now a Computer Engineering student at UEFS.
                I participated in the 13th edition of Claro Campus Mobile onsite in São Paulo, where I developed solutions bridging technology and social impact.
                Currently, I am focused on finding a development internship to further expand my experience and knowledge.
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

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Professional Experience</h2>

          {/* Item de Experiência: Acredita Bahia */}
          <div className="flex gap-4 md:gap-6">

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
            <div className="flex-1 space-y-2">
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
          <h2 className="text-2xl font-bold text-foreground">Academic Experience</h2>

          <div className="flex gap-4 md:gap-6">

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
            <div className="flex-1 space-y-2">
              {/* Cabeçalho: Empresa + Data */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                <h3 className="text-xl font-bold text-foreground">UEFS</h3>
                <span className="text-sm text-muted-foreground font-medium">August 2025 - Today</span>
              </div>

              {/* Cargo com destaque de cor (como na referência) */}
              <p className="text-blue-500 dark:text-blue-400 font-medium">
                Software Developer (Undergraduate Researcher)
              </p>

                <div className="text-muted-foreground leading-relaxed text-sm md:text-base text-left">
                <div>- Developing LogicFarm, a pharmaceutical management SaaS, utilizing Next.js, Node.js, and MongoDB to streamline operational workflows.</div>
                <div>- Implemented advanced search and data optimization features using Python (Datasketch) for high-performance scientific data analysis.</div>
                <div>- Applied software architecture best practices and design patterns to ensure system scalability and long-term maintainability.</div>
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

        {/* --- LISTA DE LINKS (Abaixo do Hero) --- */}
        <section className="space-y-4 max-w-md">
          <h3 className="text-2xl font-semibold mb-4">CV & Contact</h3>
          <div className="grid gap-3 items-center">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                className="group flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-accent/50 transition-all duration-300"
              >
                <span className="font-medium">{link.name}</span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}

            {/* Email separado para destaque */}
            <a
              href="mailto:andrevinciusdiz@gmail.com"
              className="mt-4 inline-block text-xl text-muted-foreground hover:text-primary transition-colors"
            >
              andrevinciusdiz@gmail.com
            </a>
          </div>
        </section>
        <div className="h-24 md:h-32" />
      </div>
    </main>
  );
}