import React from 'react';
import { Calendar, Target, Brain, PenTool, CheckCircle, TrendingUp, Heart } from 'lucide-react';

const Method: React.FC = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Organização Inteligente",
      description: "um cronograma feito para sua rotina."
    },
    {
      icon: Target,
      title: "Prioridade Estratégica",
      description: "estudo focado no que mais cai."
    },
    {
      icon: Brain,
      title: "Memorização Acelerada",
      description: "lembre-se de tudo na hora da prova."
    },
    {
      icon: PenTool,
      title: "Treinamento Direcionado",
      description: "redação, provas antigas e simulados."
    }
  ];

  const features = [
    "📅 Cronograma Personalizado — adaptado ao seu tempo disponível.",
    "🗺 Mapa dos Assuntos Mais Cobrados no ENEM.",
    "🧠 Técnicas de Memorização Acelerada.",
    "✍ Treinamento de Redação Nota 1000.",
    "📊 Método passo a passo para revisar e fixar."
  ];

  const tangibleBenefits = [
    "✅ Estude menos e aprenda mais.",
    "✅ Saiba exatamente o que priorizar.",
    "✅ Chegue confiante no dia da prova."
  ];

  const emotionalBenefits = [
    "💪 Sinta-se no controle.",
    "🧘‍♂ Mais foco, menos estresse.",
    "🎯 Tranquilidade por saber que está no caminho certo."
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 4. BENEFÍCIOS */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
            O que você vai receber
          </h3>

          <div className="mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{feature}</p>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg">
              <p className="text-cyan-300 font-semibold text-center">
                📚 São 4 módulos com aulas diretas ao ponto.
              </p>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O que ninguém te conta sobre passar no ENEM
          </h3>
          
          <p className="text-xl text-gray-300 mb-4">
            Passar no ENEM não exige estudar 10 horas por dia.
          </p>
          <p className="text-lg text-cyan-300 mb-12">
            O segredo está em focar nos conteúdos certos, com técnicas comprovadas de memorização e foco.
          </p>

          <h4 className="text-2xl font-bold text-white mb-8">
            O Método "Passando no ENEM Começando Hoje" segue 4 etapas simples:
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h5 className="text-lg font-bold text-white">{step.title}</h5>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h4 className="text-2xl font-bold text-white text-center mb-8 mt-16">
            Benefícios para você
          </h4>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                <h4 className="text-2xl font-bold text-white">TANGÍVEIS</h4>
              </div>
              {tangibleBenefits.map((benefit, index) => (
                <p key={index} className="text-gray-300 text-lg mb-3">{benefit}</p>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-purple-400" />
                <h4 className="text-2xl font-bold text-white">EMOCIONAIS</h4>
              </div>
              {emotionalBenefits.map((benefit, index) => (
                <p key={index} className="text-gray-300 text-lg mb-3">{benefit}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;