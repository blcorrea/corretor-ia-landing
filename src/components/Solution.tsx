import React from 'react';
import { Sparkles, Zap, Target, Rocket } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">A SOLUÇÃO QUE VOCÊ ESTAVA ESPERANDO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Apresento o <span className="gradient-text">Guia Essencial</span><br />
            do Corretor de Imóveis com IA
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            <strong>100 prompts estratégicos</strong> que vão revolucionar seu marketing imobiliário 
            e transformar você no corretor mais requisitado da sua região
          </p>
        </div>

        {/* Book preview */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg blur-xl opacity-30 animate-pulse-slow"></div>
              <img 
                src="https://drive.usercontent.google.com/download?id=1lKrqP6krqlDA3N5iGs0fAHosNebt4yxM&export=view&authuser=0" 
                alt="Capa do Ebook - Guia Essencial do Corretor de Imóveis com IA"
                className="relative w-full max-w-md mx-auto shadow-2xl rounded-lg floating"
                onError={(e) => {
                  // Fallback para uma imagem temporária caso a principal não carregue
                  e.currentTarget.src = "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop";
                }}
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Conteúdo Instantâneo
                  </h3>
                  <p className="text-gray-600">
                    Nunca mais fique sem ideias! Com nossos prompts, você terá conteúdo 
                    para posts, stories, reels e descrições de imóveis em segundos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Marketing Estratégico
                  </h3>
                  <p className="text-gray-600">
                    Cada prompt foi desenvolvido para gerar leads qualificados e 
                    posicionar você como autoridade no mercado imobiliário.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Resultados Rápidos
                  </h3>
                  <p className="text-gray-600">
                    Implemente hoje e veja os primeiros resultados em 48 horas. 
                    Seus concorrentes não vão saber o que aconteceu!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-primary-50 p-8 rounded-xl">
            <div className="text-4xl font-bold text-primary-600 mb-2">75</div>
            <p className="text-gray-700 font-semibold">Páginas de Conteúdo</p>
          </div>
          <div className="bg-accent-50 p-8 rounded-xl">
            <div className="text-4xl font-bold text-accent-600 mb-2">100</div>
            <p className="text-gray-700 font-semibold">Prompts Estratégicos</p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl">
            <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
            <p className="text-gray-700 font-semibold">Possibilidades de Conteúdo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;