import React from 'react';
import { Play } from 'lucide-react';

const Product: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 3. IMAGEM PRINCIPAL DO PRODUTO */}
          <div className="text-center">
            {/* Student Image */}
            <div className="mb-8">
              <div className="w-80 h-60 mx-auto rounded-lg border border-cyan-500/30 overflow-hidden mb-8">
                <img 
                  src="https://i.imgur.com/5sXwgw6.jpeg" 
                  alt="Estudantes focados preparando-se para o ENEM"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Members Area Preview */}
            <div className="max-w-2xl mx-auto">
              <div className="w-full h-80 border border-cyan-500/30 rounded-lg overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Área de membros do curso com aulas online"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-white font-semibold text-xl">Área de Membros</p>
                    <p className="text-cyan-300">Preview das aulas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;