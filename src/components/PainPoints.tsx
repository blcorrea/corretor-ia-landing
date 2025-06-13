import React from 'react';
import { AlertTriangle, Clock, MessageSquare, TrendingDown } from 'lucide-react';

const PainPoints = () => {
  const pains = [
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Sem tempo para criar conteúdo",
      description: "Você passa o dia todo na rua, visitando imóveis e atendendo clientes. Quando sobra tempo para pensar em marketing?"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-red-500" />,
      title: "Sempre as mesmas publicações",
      description: "\"O que eu posto hoje?\" - Você se pergunta isso todos os dias e acaba repetindo o mesmo conteúdo genérico."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Perdendo clientes para concorrentes",
      description: "Enquanto você luta para manter presença online, seus concorrentes estão dominando as redes sociais."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Descrições que não convertem",
      description: "Suas descrições de imóveis são básicas e não despertam o interesse dos compradores."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Você se identifica com essas situações?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Se você é corretor autônomo, provavelmente já passou por pelo menos uma dessas frustrações:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {pain.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {pain.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional hook */}
        <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              O resultado? Você está perdendo dinheiro todos os dias! 💸
            </h3>
            <p className="text-lg text-red-600 mb-6">
              Enquanto você não tem uma estratégia de conteúdo consistente, seus concorrentes estão 
              capturando os clientes que deveriam ser seus. Cada dia que passa sem uma presença 
              digital forte é dinheiro saindo do seu bolso.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <p className="text-xl font-bold text-gray-800">
                Mas e se eu te dissesse que existe uma solução simples e acessível?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;