import { Link } from 'react-router-dom';
import { prefetchRoute } from '@/lib/prefetch';
import logoImg from '@/assets/images/vallini_leme_logo_1790599241234.jpg';
import { Instagram, Phone, MapPin, MessageSquareText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050A2A] border-t border-[#10194D] text-[#F7F7F5]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#10194D]/40 gap-px">
        <div className="bg-[#050A2A] p-8 lg:p-12 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-sm overflow-hidden border border-[#D9DAD8]/30 bg-[#10194D] shrink-0">
                <img 
                  src={logoImg} 
                  alt="Vallini & Leme Advocacia" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-lg uppercase leading-none text-white">Vallini & Leme</span>
                <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#D9DAD8]">Advocacia Especializada</span>
              </div>
            </div>
            <p className="text-[13px] text-[#D9DAD8]/80 leading-relaxed max-w-[32ch]">
              Advogadas especialistas em Ações do INSS, Planejamento Previdenciário e Consultoria para Pessoas Jurídicas. Atendimento humanizado e rigor técnico em Campinas e região.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com/vallinielemeadvocacia" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-sm bg-[#10194D] border border-[#D9DAD8]/20 flex items-center justify-center text-[#D9DAD8] hover:text-white hover:border-[#D9DAD8] transition-colors"
                aria-label="Instagram Vallini & Leme Advocacia"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#D9DAD8]/70 font-mono">@vallinielemeadvocacia</span>
            </div>
          </div>
        </div>
        
        <div className="bg-[#050A2A] p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#D9DAD8]">Serviços Especializados</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-medium text-[#D9DAD8]/80">
            <li><Link to="/servicos/consulta-aposentadoria" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Consulta Aposentadoria</Link></li>
            <li><Link to="/servicos/planejamento-previdenciario" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Planejamento Previdenciário</Link></li>
            <li><Link to="/servicos/auxilios-por-incapacidade" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Auxílios por Incapacidade</Link></li>
            <li><Link to="/servicos/consulta-pessoas-juridicas" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Consulta para Pessoas Jurídicas</Link></li>
          </ul>
        </div>

        <div className="bg-[#050A2A] p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#D9DAD8]">Institucional</h4>
          <ul className="flex flex-col gap-3.5 text-sm font-medium text-[#D9DAD8]/80">
            <li><Link to="/sobre" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/sobre')}>O Escritório</Link></li>
            <li><Link to="/servicos" className="hover:text-white transition-colors" onMouseEnter={() => prefetchRoute('/servicos')}>Todos os Serviços</Link></li>
            <li><Link to="/#faq" className="hover:text-white transition-colors">Perguntas Frequentes</Link></li>
            <li><Link to="/#contato" className="hover:text-white transition-colors">Endereço & Atendimento</Link></li>
          </ul>
        </div>

        <div className="bg-[#050A2A] p-8 lg:p-12">
          <h4 className="font-bold text-[11px] uppercase tracking-widest mb-6 text-[#D9DAD8]">Endereço & Contato</h4>
          <ul className="flex flex-col gap-3.5 text-[13px] text-[#D9DAD8]/80">
            <li className="font-semibold text-white flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D9DAD8]" />
              Campinas, SP
            </li>
            <li className="text-white">Rua Barão de Jaguara, 707</li>
            <li>Centro - CEP 13015-926</li>
            <li className="text-xs text-[#D9DAD8]/70">Atendimento presencial e telepresencial com agendamento</li>
            <li className="pt-2">
              <a 
                href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20com%20as%20advogadas%20especialistas%20em%20a%C3%A7%C3%B5es%20do%20INSS." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm text-white hover:text-[#D9DAD8] transition-colors bg-[#10194D] px-3.5 py-2.5 rounded-sm border border-[#D9DAD8]/30"
              >
                <MessageSquareText className="w-4 h-4 text-[#D9DAD8]" />
                (19) 95324-3159
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-[#10194D] bg-[#050A2A] p-6 px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#D9DAD8]/70 uppercase tracking-wider font-semibold">
        <p>© {new Date().getFullYear()} Vallini & Leme Advocacia. OAB/SP.</p>
        <p>Advogadas Especialistas em Ações INSS • Campinas - SP</p>
      </div>
    </footer>
  );
}
