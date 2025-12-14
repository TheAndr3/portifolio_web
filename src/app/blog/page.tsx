import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 text-center">
      <div className="max-w-md space-y-8">
        {/* Ícone com fundo suave */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-accent/30 flex items-center justify-center animate-pulse">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Blog Under Construction
          </h1>
          <p className="text-muted-foreground text-lg">
            I am currently writing some awesome articles to share my knowledge and experiences. Stay tuned!
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