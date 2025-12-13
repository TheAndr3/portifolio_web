"use client";

import Dock from "../ui/Dock";
import ThemeToggle from "../ui/ThemeToogle";
import { Home, User, FolderGit2, BookOpen, FolderGit, Code } from "lucide-react";

export function Navbar() {
  const items = [
    { 
      icon: <Home size={24} className="text-foreground" />, 
      label: 'Início', 
      onClick: () => window.location.href = '/' 
    },
    
    { 
      icon: <BookOpen size={24} className="text-foreground" />, 
      label: 'Blog', 
      onClick: () => window.location.href = '/blog' 
    },
    
    // { 
    //   icon: <User size={24} className="text-foreground" />, 
    //   label: 'Sobre', 
    //   onClick: () => window.location.hash = '#about' 
    // },
    // 
    { 
      icon: <Code size={24} className="text-foreground" />, 
      label: 'Projetos', 
      onClick: () => window.location.hash = '/projects' 
    },

    { 
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-foreground">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="11"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
      ), 
      label: 'LinkedIn', 
      onClick: () => window.open("https://linkedin.com/in/theandr3", "_blank") 
    },
    {
        // Aqui o ThemeToggle entra como um "ícone"
        // Passamos 'pointer-events-auto' para garantir que o clique vá pro toggle
        icon: <div className="pointer-events-auto"><ThemeToggle /></div>,
        label: 'Tema',
        onClick: () => {} // Deixe vazio, o toggle controla o clique internamente
    }
  ];

  return (
    // Posicionamento fixo na parte inferior da tela
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto">
        <Dock 
            items={items} 
            panelHeight={80}
            baseItemSize={50}
            magnification={70}
        />
      </div>
    </div>
  );
}