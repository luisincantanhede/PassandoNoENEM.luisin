import React from 'react';
import { Rocket } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-cyan-400 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Rocket className="mx-auto mb-4 w-16 h-16 text-cyan-400" />
            
            {/* 1. HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Passando no ENEM Começando Hoje
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;