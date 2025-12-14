import Link from "next/link";
import { Code, Construction } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
      <div className="max-w-md space-y-8">
        
        <div className="flex justify-center relative">
          <div className="w-24 h-24 rounded-full bg-accent/30 flex items-center justify-center">
            <Code className="w-10 h-10 text-primary" />
          </div>
          {/* Ícone de construção flutuando */}
          <div className="absolute -top-2 -right-2 bg-background p-2 rounded-full border border-border shadow-sm">
            <Construction className="w-5 h-5 text-yellow-500" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Projects Coming Soon
          </h1>
          <p className="text-muted-foreground text-lg">
            I am preparing a showcase of my best work, including the Luminus project and my freelance cases.
          </p>
        </div>

        <Link 
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}