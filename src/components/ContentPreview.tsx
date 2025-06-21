import React from 'react';
import { BookOpen, MessageSquare, Camera, PenTool, Users, Megaphone } from 'lucide-react';

const ContentPreview = () => {
  const categories = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Posts para Redes Sociais",
      count: "20 prompts",
      examples: [
        "Como criar posts que geram leads qualificados",
        "Prompts para stories que convertem",
        "Conteúdo educativo que posiciona como expert"
      ]
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Roteiros para Reels e Vídeos",
      count: "15 prompts",
      examples: [
        "Scripts para tours virtuais impactantes",
        "Vídeos educativos sobre mercado imobiliário",
        "Depoimentos e cases de sucesso"
      ]
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Descrições de Imóveis",
      count: "25 prompts",
      examples: [
        "Descrições que despertam emoção",
        "Textos persuasivos para anúncios",
        "Headlines que chamam atenção"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atendimento e Relacionamento",
      count: "20 prompts",
      examples: [
        "Respostas para objeções comuns",
        "Follow-up automatizado",
        "Qualificação de leads"
      ]
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Campanhas de Marketing",
      count: "15 prompts",
      examples: [
        "Campanhas de captação de imóveis",
        "Promoções sazonais",
        "Marketing de relacionamento"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Conteúdo Educativo",
      count: "5 prompts bônus",
      examples: [
        "Guias para compradores iniciantes",
        "Dicas de investimento imobiliário",
        "Tendências do mercado"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Veja o que você vai encontrar dentro do guia:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            100 prompts organizados em 6 categorias estratégicas para cobrir todas as suas necessidades de marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl card-hover border-2 border-transparent hover:border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary-100 text-primary-600 p-3 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {category.title}
                  </h3>
                  <span className="text-primary-600 font-semibold text-sm">
                    {category.count}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {category.examples.map((example, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bonus section */}
        <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            🎁 BÔNUS EXCLUSIVOS (Valor: R$ 47)
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">📱 Kit de Templates Prontos</h4>
              <p className="text-accent-100">
                O Corretor 4.0 do Atendimento - Mini E-book sobre Como Atender Clientes com IA no WhatsApp de Forma Humanizada
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-3">✅ Raio X do Corretor Digital</h4>
              <p className="text-accent-100">
                 Ferramenta de autoconhecimento digital que vai te ajudar a entender em que ponto você está na sua jornada para se tornar um Corretor 4.0
              </p>
            </div>
          </div>
        </div>

        {/* Sample prompts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Exemplos de prompts que você vai encontrar:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-3">📝 Para Descrição de Imóveis:</h4>
              <p className="text-blue-700 italic">
                "Crie uma descrição envolvente para um apartamento de 2 quartos que desperte 
                emoção e urgência no comprador, destacando os benefícios únicos do imóvel..."
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-3">📱 Para Posts no Instagram:</h4>
              <p className="text-green-700 italic">
                "Desenvolva um post educativo sobre '5 erros que todo comprador de primeira 
                viagem deve evitar' que posicione você como especialista..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;