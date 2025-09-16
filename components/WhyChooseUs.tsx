import React from 'react';

const QualityIcon = () => (
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-zinc-800 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    </div>
);


const TrustIcon = () => (
  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-zinc-800 mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  </div>
);

const FinancingIcon = () => (
  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-zinc-800 mb-4">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  </div>
);

const features = [
  {
    icon: <QualityIcon />,
    title: 'Qualidade Garantida',
    description: 'Todos os nossos veículos passam por uma rigorosa inspeção de mais de 150 itens para garantir sua total satisfação e segurança.',
  },
  {
    icon: <TrustIcon />,
    title: 'Garantia e Confiança',
    description: 'Oferecemos garantia completa para motor e câmbio, além de um histórico veicular transparente para uma compra tranquila.',
  },
  {
    icon: <FinancingIcon />,
    title: 'Financiamento Facilitado',
    description: 'Trabalhamos com os melhores bancos para oferecer taxas competitivas e planos de financiamento que cabem no seu bolso.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Por Que Escolher a Ares?</h2>
          <p className="mt-4 text-lg text-gray-400">Nossa paixão por carros reflete na qualidade que entregamos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="p-8 rounded-lg flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;