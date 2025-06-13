import React from 'react';
import { CheckCircle, Clock, TrendingUp, Users, Zap, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Economize 5+ Horas por Semana",
      description: "Pare de quebrar a cabeça pensando no que postar. Com nossos prompts, você cria conteúdo profissional em minutos.",
      result: "Mais tempo para focar no que realmente importa: vender imóveis!"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Triplique Seus Leads Qualificados",
      description: "Conteúdo estratégico que atrai exatamente o tipo de cliente que você quer: compradores e vendedores sérios.",
      result: "Mais negócios fechados, mais comissões no seu bolso!"
    },
    {
      icon: <Users className="w-8 h-8 text-accent-600" />,
      title: "Torne-se Autoridade no Mercado",
      description: "Posicione-se como o especialista que todos procuram com conteúdo que demonstra conhecimento e profissionalismo.",
      result: "Clientes vão te procurar, não o contrário!"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Acelere Suas Vendas",
      description: "Prompts específicos para cada etapa do funil de vendas, desde a captação até o fechamento do negócio.",
      result: "Ciclo de vendas mais rápido e eficiente!"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Nunca Mais Fique Sem Conteúdo",
      description: "100 prompts organizados por categoria garantem que você sempre tenha algo relevante para compartilhar.",
      result: "Presença online consistente e profissional!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que você vai conseguir com este guia:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformações reais que vão impactar diretamente no seu faturamento
          </p>
        </div>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 bg-gray-50 p-4 rounded-lg">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-700">
                        {benefit.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transformation summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Imagine sua rotina daqui a 30 dias...
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-bold mb-3 text-red-200">❌ ANTES (Sem o Guia)</h4>
              <ul className="text-left space-y-2 text-red-100">
                <li>• Perdendo tempo pensando no que postar</li>
                <li>• Conteúdo genérico e sem engajamento</li>
                <li>• Poucos leads qualificados</li>
                <li>• Concorrentes sempre na frente</li>
                <li>• Vendas demoradas e difíceis</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-green-200">✅ DEPOIS (Com o Guia)</h4>
              <ul className="text-left space-y-2 text-green-100">
                <li>• Conteúdo profissional em minutos</li>
                <li>• Posts que geram engajamento real</li>
                <li>• Chuva de leads qualificados</li>
                <li>• Você como referência no mercado</li>
                <li>• Vendas mais rápidas e lucrativas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;