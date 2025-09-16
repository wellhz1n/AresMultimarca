import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-wider text-gray-100">
                ARES MULTIMARCAS
              </span>
            </a>
            <p className="mt-4 text-gray-400 text-sm">
              Sua próxima conquista começa aqui. Qualidade e confiança em veículos premium.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navegação</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#estoque" className="text-base text-gray-400 hover:text-yellow-500">Estoque</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-yellow-500">Venda seu Carro</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-yellow-500">Financiamento</a></li>
              <li><a href="#contato" className="text-base text-gray-400 hover:text-yellow-500">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contato</h3>
            <ul className="mt-4 space-y-2 text-base text-gray-400">
              <li>(11) 99999-8888</li>
              <li>contato@ares.com</li>
              <li>Av. Premium, 1234</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Redes Sociais</h3>
             <div className="flex mt-4 space-x-6">
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                     <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.398 1.363.444 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.046 1.064-.197 1.791-.444 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.398-2.427.444-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.046-1.791-.197-2.427-.444a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.398-1.363-.444-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.046-1.064.197-1.791.444-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.522c.636-.247 1.363.398 2.427-.444C9.796 2.013 10.149 2 12.315 2zm-1.002 11.83a4.793 4.793 0 109.586 0 4.793 4.793 0 00-9.586 0zm7.15-4.808a1.143 1.143 0 10-2.286 0 1.143 1.143 0 002.286 0z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ares Multimarcas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;