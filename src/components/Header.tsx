import React from 'react';
import { Clock, Users, TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="gradient-bg text-white py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-400 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=80&fit=crop" 
            alt="Bruno Corrêa" 
            className="mx-auto h-16 w-auto"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Pare de Perder <span className="text-accent-400">Clientes</span><br />
          por Falta de <span className="text-accent-400">Conteúdo</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
          Descubra como <strong>100 prompts estratégicos de IA</strong> podem transformar 
          seu marketing imobiliário e <strong>triplicar seus leads qualificados </strong> 
          em apenas 30 dias
        </p>

        {/* Social proof indicators */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent-400" />
            <span>Economize 5h/semana</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent-400" />
            <span>+300% leads qualificados</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent-400" />
            <span>Vendas mais rápidas</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-accent-400 rounded-lg blur opacity-75 pulse-ring"></div>
          <button 
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative btn-primary text-xl px-12 py-5 shadow-glow"
          >
            🚀 QUERO TRANSFORMAR MEU MARKETING AGORA
          </button>
        </div>

        {/* Price highlight */}
        <p className="mt-4 text-lg opacity-90">
          <span className="line-through text-gray-300">De R$ 97</span> 
          <span className="text-accent-400 font-bold text-2xl ml-2">por apenas R$ 27</span>
        </p>

        {/* Urgency */}
        <div className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full inline-block animate-pulse">
          ⏰ Oferta por tempo limitado - Últimas 48 horas!
        </div>
      </div>
    </header>
  );
};

export default Header;