"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe, ExternalLink, ArrowLeft } from "lucide-react";

type Category = "All" | "Web" | "Open Source";

type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: Category;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

// Aqui você pode colocar seus projetos reais depois
const projects: Project[] = [
  {
    id: "logicfarma",
    title: "LogicFarma",
    description: "A scalable pharmaceutical management SaaS aimed at streamlining operational workflows and complex inventory control.",
    image: "/logicfarma.png",
    category: "Web",
    techStack: ["Next.js", "MongoDB", "Python", "Tailwind", "ShadCN"],
    liveUrl: "https://logicfarma.app", // Link fictício
  },
  {
    id: "luminus",
    title: "Luminus Project",
    description: "An academic dossier management system built as a RESTful API with Node.js and PostgreSQL, featuring secure stateless authentication and a Next.js frontend.",
    category: "Open Source",
    image: "/luminus.png",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/TheAndr3/Luminus"
  },
  {
    id: "minhas-compras-ba",
    title: "Minhas Compras BA",
    description: "A web application for importing SEFAZ-BA NFC-e invoices with manual captcha resolution, featuring automated scraping and comprehensive architecture.",
    category: "Web",
    techStack: ["FastAPI", "Python", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/TheAndr3/minhasCompras-BA"
  },
  {
    id: "signaldesk",
    title: "SignalDesk",
    description: "Internal multi-tenant Case queue. Workspace members create, claim, and resolve cases while preserving strict workspace isolation and an immutable event history.",
    category: "Open Source",
    techStack: ["NestJS", "TypeScript", "React", "Supabase", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/TheAndr3/SignalDesk"
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");

  const categories: Category[] = ["All", "Web", "Open Source"];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-12 md:py-20 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Navigation / Back Button */}
        <div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <section className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my recent work, open-source projects, and technical experiments. 
            Click on the links to view the source code or access the live version.
          </p>
        </section>

        {/* Filters */}
        <section className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/60 text-secondary-foreground hover:bg-secondary hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Image / Placeholder */}
              <div className="h-56 sm:h-64 w-full relative bg-gradient-to-br from-primary/5 via-secondary/20 to-background flex flex-col items-center justify-center overflow-hidden border-b border-border/50">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity duration-300 group-hover:scale-110 transform">
                    <Globe className="w-16 h-16 mb-4 text-primary" />
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">{project.category}</span>
                  </div>
                )}
                
                {/* Overlay link to make whole image clickable if liveUrl exists */}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-extrabold group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {/* Links (Top Right) */}
                  <div className="flex gap-2 shrink-0 ml-4">
                    {project.githubUrl && (
                      <Link 
                        href={project.githubUrl} 
                        target="_blank"
                        className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
                        title="View Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link 
                        href={project.liveUrl} 
                        target="_blank"
                        className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground rounded-md text-xs font-bold tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-border">
            <p className="text-xl text-muted-foreground">No projects found for this category.</p>
            <button 
              onClick={() => setFilter("All")}
              className="mt-4 text-primary hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}