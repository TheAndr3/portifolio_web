import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const links = [
    { name: "Download CV", href: "https://drive.google.com/file/d/1jxaWjmFVQgj3LYePpmJaQeqfC4vRjNFj/view?usp=sharing" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12 md:py-20 lg:px-24">
      {/* Container Principal */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* --- SEÇÃO DO TOPO (Hero) --- */}
        <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 md:gap-12">
          
          {/* Coluna de Texto */}
          <div className="flex-1 space-y-6">
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
              <p className = "text-justify">
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
                       <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                         Developed a Chrome extension (Manifest V3) for automation, utilizing DOM manipulation, local storage, and dynamic templates. 
                         Created a bulk sending service via Evolution API (Docker), implementing rate limiting, error logging, and RESTful integration. 
                         Additionally, implemented scripts for parsing and sanitizing CSV/Excel files for contact validation and campaign optimization using Pandas in Python.
                       </p>
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
                                                  href="https://drive.google.com/file/d/1AGK4gaDbA85wq7mh-NmLxBRRRUswhhmu/view?usp=sharing" // <--- COLOQUE O LINK AQUI
                                                  target="_blank" // Abre em nova aba
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
                            
                            
                            {/* Item 2: Campus Mobile - AGORA É UM LINK */}
                           
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
      </div>
    </main>
  );
}