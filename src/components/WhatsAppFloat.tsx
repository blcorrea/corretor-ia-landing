import React from 'react';
import { MessageCircle } from 'lucide-react';

declare const fbq: any;

const WhatsAppFloat = () => {
  const handleClick = () => {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  };

  const phoneNumber = '5521996253440';
  const message = 'Olá, quero tirar uma dúvida sobre o ebook!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;