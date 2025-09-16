import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Entre em Contato</h2>
          <p className="mt-4 text-lg text-gray-400">Estamos prontos para atender você.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-zinc-800 p-8 rounded-lg text-left">
            <h3 className="text-2xl font-bold text-white mb-6">Nossas Informações</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <svg className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Av. Premium, 1234 - Bairro Nobre<br/>Cidade, Estado - CEP 12345-678</span>
              </div>
               <div className="flex items-center">
                <svg className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>(11) 99999-8888</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>contato@aresmultimarcas.com.br</span>
              </div>
              <div className="flex items-start pt-4 border-t border-zinc-700">
                <svg className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>
                  <strong>Horário de Funcionamento:</strong><br/>
                  Segunda a Sexta: 09:00 - 18:00<br/>
                  Sábado: 09:00 - 14:00
                </span>
              </div>
            </div>
          </div>
           <div className="h-80 lg:h-full w-full rounded-lg overflow-hidden shadow-lg">
                <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1920&auto=format&fit=crop" alt="Localização da loja em um mapa" className="w-full h-full object-cover" loading="lazy" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;