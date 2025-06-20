import React from 'react';
import { Mail, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=60&fit=crop" 
              alt="Bruno Corrêa" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Especialista em automações e copywriting, ajudando corretores a 
              transformarem seu marketing com inteligência artificial.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>contato@brunocorrea.com</span>
            </div>
          </div>

          {/* Garantias */}
          <div>
            <h4 className="text-lg font-bold mb-4">Suas Garantias</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Suporte por email</span>
              </div>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-lg font-bold mb-4">O Produto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• 100 Prompts Estratégicos</li>
              <li>• 75 páginas de conteúdo</li>
              <li>• Kit de Templates Bônus</li>
              <li>• Checklist Digital</li>
              <li>• Acesso Vitalício</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Bruno Corrêa. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Este produto não garante resultados. Os resultados dependem do seu esforço e dedicação. 
            Todas as informações são baseadas em nossa experiência e podem não se aplicar à sua situação específica.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3">
              ⏰ Última Chance - Oferta Expira em Breve!
            </h4>
            <a 
              href="https://chk.eduzz.com/Z0B55KP6WA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-accent-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              GARANTIR MINHA CÓPIA POR R$ 37
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;