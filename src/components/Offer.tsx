import React from 'react';
import { CheckCircle, Clock, Shield, Zap } from 'lucide-react';

const Offer = () => {
  return (
    <section id="oferta" className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Urgency banner */}
        <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block mb-8 animate-pulse">
          ⏰ OFERTA ESPECIAL - Últimas 48 horas!
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Transforme Seu Marketing <span className="text-accent-400">HOJE MESMO</span>
        </h2>

        <p className="text-xl mb-8 opacity-90">
          Tudo que você precisa para se tornar o corretor mais requisitado da sua região
        </p>

        {/* Offer box */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-500 rounded-full blur-2xl opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              🚀 PACOTE COMPLETO - CORRETOR IA PRO
            </h3>

            {/* What's included */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>📚 Ebook com 100 Prompts Estratégicos (75 páginas)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>📱 Mini Ebook - O Corretor 4.0 do Atendimento</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>✅ Raio X do Corretor Digital</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>🎯 Prompts para cada etapa do funil</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>⚡ Acesso imediato após pagamento</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span>🛡️ Garantia de 7 dias</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl text-gray-500 line-through">De R$ 97</span>
                <span className="text-5xl font-bold text-green-600">R$ 37</span>
              </div>
              <p className="text-gray-600">
                Menos que o valor de um almoço - mas que pode transformar sua carreira!
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg blur opacity-75 animate-pulse"></div>
              <a 
                href="https://chk.eduzz.com/Z0B55KP6WA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-500 text-white font-bold py-6 px-12 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-xl"
              >
                🚀 COMPRAR AGORA - ACESSO IMEDIATO
              </a>
            </div>

            {/* Security badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span>Garantia 7 Dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-green-600 p-6 rounded-xl mb-8">
          <h4 className="text-xl font-bold mb-3">🛡️ GARANTIA INCONDICIONAL DE 7 DIAS</h4>
          <p className="text-green-100">
            Se por qualquer motivo você não ficar satisfeito com o conteúdo, 
            devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
          </p>
        </div>

        {/* Scarcity */}
        <div className="bg-red-600 p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">⚠️ ATENÇÃO: OFERTA POR TEMPO LIMITADO</h4>
          <p className="text-red-100 mb-4">
            Este preço promocional de R$ 37 é válido apenas para os próximos compradores. 
            Após essa promoção, o valor volta para R$ 97.
          </p>
          <p className="text-red-200 font-bold">
            Não perca esta oportunidade de transformar seu marketing por menos de R$ 1 por dia!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;