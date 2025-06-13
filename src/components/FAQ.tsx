import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Eu não entendo nada de IA. Vou conseguir usar os prompts?",
      answer: "Sim! Os prompts foram criados para serem extremamente simples de usar. Você só precisa copiar, colar no ChatGPT ou qualquer IA gratuita, e pronto! Não precisa de conhecimento técnico algum."
    },
    {
      question: "Os prompts funcionam com qualquer IA?",
      answer: "Sim! Os prompts foram testados e funcionam perfeitamente com ChatGPT, Gemini, Claude e outras IAs populares. Você pode usar até mesmo as versões gratuitas."
    },
    {
      question: "Quanto tempo vou economizar usando este guia?",
      answer: "Nossos clientes relatam economizar entre 5-8 horas por semana que antes gastavam pensando em conteúdo. Isso significa mais tempo para focar em vendas e atendimento aos clientes."
    },
    {
      question: "O conteúdo é específico para corretores ou é genérico?",
      answer: "100% específico para corretores de imóveis! Cada prompt foi desenvolvido pensando nas necessidades reais do mercado imobiliário, desde captação até fechamento de vendas."
    },
    {
      question: "Funciona para corretores iniciantes?",
      answer: "Perfeitamente! Na verdade, corretores iniciantes são os que mais se beneficiam, pois conseguem criar conteúdo profissional desde o primeiro dia, competindo de igual para igual com veteranos do mercado."
    },
    {
      question: "E se eu não gostar do conteúdo?",
      answer: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá por email o link para download do ebook e todos os bônus."
    },
    {
      question: "Posso usar os prompts para minha equipe?",
      answer: "Sim! Uma vez que você adquire o guia, pode usar os prompts para toda sua equipe e até mesmo ensinar para outros corretores da sua imobiliária."
    },
    {
      question: "Os prompts geram conteúdo original?",
      answer: "Sim! Cada vez que você usa um prompt, a IA gera conteúdo único e original. Você nunca terá problema de conteúdo duplicado ou genérico."
    },
    {
      question: "Preciso pagar mensalidade para usar?",
      answer: "Não! É um pagamento único de R$ 27 e você tem acesso vitalício ao conteúdo. Sem mensalidades, sem taxas escondidas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire todas suas dúvidas antes de fazer sua compra
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ainda tem dúvidas? Lembre-se: você tem 7 dias de garantia total!
          </p>
          <button 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            🚀 QUERO GARANTIR MINHA CÓPIA AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;