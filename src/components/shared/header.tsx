import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { prefetchRoute } from '@/lib/prefetch';
import { servicesData } from '@/lib/data';
import logoImg from '@/assets/images/vallini_leme_logo_1790599241234.jpg';
import { MessageSquareText, ChevronDown } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const getLinkClass = (path: string) => {
    let isActive = false;
    if (path.startsWith('/#')) {
      isActive = location.pathname === '/' && location.hash === path.substring(1);
    } else {
      isActive = path === '/' ? location.pathname === '/' && !location.hash : location.pathname.startsWith(path);
    }
    return isActive
      ? "text-white border-b-2 border-[#D9DAD8] pb-1 font-semibold"
      : "text-[#D9DAD8]/70 hover:text-white transition-colors pb-1 border-b-2 border-transparent";
  };

  const isAtuacaoActive = location.pathname.startsWith('/servicos');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#10194D] bg-[#080F3D]/95 backdrop-blur-md h-[76px] flex items-center">
      <div className="w-full flex items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-sm overflow-hidden border border-[#D9DAD8]/40 bg-[#10194D] shrink-0 flex items-center justify-center shadow-inner">
            <img 
              src={logoImg} 
              alt="Vallini & Leme Advocacia" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-lg uppercase text-white leading-none">
              Vallini & Leme
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#D9DAD8]">
              Especialistas em Ações INSS
            </span>
          </div>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-7 lg:flex text-[12px] font-semibold uppercase tracking-wider">
            <Link to="/" className={getLinkClass('/')}>Início</Link>
            <Link to="/sobre" className={getLinkClass('/sobre')} onMouseEnter={() => prefetchRoute('/sobre')}>O Escritório</Link>
            
            {/* Dropdown Atuação */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 pb-1 border-b-2 transition-colors cursor-pointer ${
                  isAtuacaoActive 
                    ? "text-white border-[#D9DAD8] font-semibold" 
                    : "text-[#D9DAD8]/70 hover:text-white border-transparent"
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Atuação</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#080F3D] border border-[#10194D] shadow-2xl py-2 z-50 rounded-none animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="border-b border-[#10194D] pb-1 mb-1">
                    <Link
                      to="/servicos"
                      className="block px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-[#D9DAD8] hover:text-white hover:bg-[#10194D] transition-colors"
                    >
                      Todos os Serviços
                    </Link>
                  </div>
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/servicos/${service.id}`}
                      className="block px-5 py-2.5 text-[12px] font-medium tracking-normal text-[#F7F7F5] hover:text-white hover:bg-[#10194D] transition-colors"
                      onMouseEnter={() => prefetchRoute('/servicos')}
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/#contato" className={getLinkClass('/#contato')}>Contato</Link>
          </nav>

          <Button asChild className="bg-[#10194D] text-white border border-[#D9DAD8]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#D9DAD8] hover:text-[#080F3D] rounded-none hidden md:inline-flex h-auto transition-all shadow-sm">
            <a 
              href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20com%20as%20advogadas%20especialistas%20em%20a%C3%A7%C3%B5es%20do%20INSS."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageSquareText className="w-3.5 h-3.5 text-[#D9DAD8] group-hover:text-[#080F3D]" />
              <span>(19) 95324-3159</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
