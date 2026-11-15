"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe, ExternalLink, ArrowLeft } from "lucide-react";

type Category = "All" | "AI & ML" | "Backend & Distributed" | "Web";

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

const projects: Project[] = [
  {
    id: "comanda",
    title: "Comanda — Multi-Agent Delivery Support",
    description:
      "Multi-agent orchestration for food-delivery post-order support (Reception on Claude Haiku + Order & Refund Specialists on Sonnet) with isolated MCP servers, deterministic refund rules in code, 4 tool guardrails, custom Portuguese BM25 + Snowball stemmer from scratch, and a 30-scenario τ-bench evaluation suite (8 adversarial, LLM-as-a-Judge, pass³).",
    category: "AI & ML",
    techStack: ["Python", "Claude Agent SDK", "MCP", "FastAPI", "Next.js", "SQLite"],
    githubUrl: "https://github.com/TheAndr3/comanda",
    liveUrl: "https://comanda-blond.vercel.app",
  },
  {
    id: "lsh-recommender",
    title: "LSH Forest & MinHash Clinical Recommender",
    description:
      "User-Based Collaborative Filtering engine in production (UEFS). Compresses patient histories into 200-permutation MinHash signatures indexed in self-tuning LSH Forest prefix trees, with a Memory-First LRU cache (~200ms warm start), batch inference (300 patients/call), and 4-level graceful degradation.",
    image: "/logicfarma.png",
    category: "AI & ML",
    techStack: ["Python", "LSH Forest", "MinHash", "Datasketch", "Next.js", "MongoDB"],
    liveUrl: "https://huggingface.co/TheAndr3/lsh-forest-clinical-recommender",
  },
  {
    id: "flow",
    title: "Flow — Elixir/OTP Telemetry Pipeline",
    description:
      "Asynchronous telemetry ingestion and processing pipeline built with Elixir/OTP and Broadway, featuring configurable batching and backpressure, persistent background jobs via Oban, real-time Phoenix PubSub broadcasting, and Telemetry Metrics.",
    category: "Backend & Distributed",
    techStack: ["Elixir", "Phoenix", "Broadway", "Oban", "PostgreSQL", "ExUnit"],
    githubUrl: "https://github.com/TheAndr3/flow",
  },
  {
    id: "signaldesk",
    title: "SignalDesk — Multi-Tenant Case Queue API",
    description:
      "Multi-tenant backend API in NestJS and TypeScript with JWT authentication, role-based access control (RBAC), transactional concurrency control against race conditions, strict tenant isolation, and Jest/Supertest integration tests.",
    category: "Backend & Distributed",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "Supabase", "Jest", "Docker"],
    githubUrl: "https://github.com/TheAndr3/SignalDesk",
  },
  {
    id: "distributed-2pc",
    title: "Distributed EV Charging System (Two-Phase Commit)",
    description:
      "Concurrent distributed services in Go (goroutines, Gin, HTTP, and MQTT/Mosquitto) implementing the Two-Phase Commit (2PC) protocol (prepare, commit, abort) to coordinate distributed charging reservations across Docker containers.",
    category: "Backend & Distributed",
    techStack: ["Go", "Gin", "Two-Phase Commit (2PC)", "MQTT", "Docker"],
    githubUrl: "https://github.com/TheAndr3/Blockchain-Redes",
  },
  {
    id: "neural-networks-scratch",
    title: "Neural Networks & Computational Intelligence from Scratch",
    description:
      "Pure Python implementations of foundational ML models without black-box frameworks: Multilayer Perceptron (Backpropagation), Kohonen Self-Organizing Maps (SOM), Adaline (LMS Delta Rule), Rosenblatt Perceptron, Fuzzy Inference Controller, and Genetic Algorithms.",
    category: "AI & ML",
    techStack: ["Python", "MLP Backpropagation", "Kohonen SOM", "Adaline LMS", "Fuzzy Logic", "Genetic Algorithms"],
    githubUrl: "https://github.com/TheAndr3/multilayer-perceptron",
    liveUrl: "https://dev.to/theandr3/aprendendo-ml-do-zero-1pnp",
  },
  {
    id: "luminus",
    title: "Luminus Project",
    description:
      "Academic dossier management system built as a RESTful API with Node.js and PostgreSQL, featuring secure stateless authentication and a Next.js frontend.",
    category: "Web",
    image: "/luminus.png",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/TheAndr3/Luminus",
  },
  {
    id: "minhas-compras-ba",
    title: "Minhas Compras BA",
    description:
      "Web application for importing and analyzing SEFAZ-BA NFC-e electronic invoices with FastAPI, Python, React, and PostgreSQL.",
    image: "/minhascompras.png",
    category: "Web",
    techStack: ["FastAPI", "Python", "React", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/TheAndr3/minhasCompras-BA",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");

  const categories: Category[] = ["All", "AI & ML", "Backend & Distributed", "Web"];

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
            Production systems, multi-agent AI architectures, machine learning implementations, and distributed backends.
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
                  <div className="flex flex-col items-center justify-center opacity-50 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-110 transform px-6 text-center">
                    <Globe className="w-14 h-14 mb-3 text-primary" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">{project.category}</span>
                  </div>
                )}

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

                  <div className="flex gap-2 shrink-0 ml-4 z-20">
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
                        title="View Live Demo / Model"
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
      </div>
    </main>
  );
}
