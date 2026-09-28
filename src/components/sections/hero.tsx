import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { MessageSquareText, PhoneCall, Calculator, ShieldCheck, MapPin } from 'lucide-react';
import sealImg from '@/assets/images/vallini_leme_logo_1790599241234.jpg';

export function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[82dvh] lg:h-[calc(100vh-76px)] border-b border-[#10194D] overflow-hidden bg-[#050A2A]">
      <motion.div 
        className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center bg-[#050A2A] lg:border-r border-[#10194D]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/30 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#354078] animate-pulse"></span>
            Campinas - SP • Centro
          </span>
        </div>

        <h1 className="text-4xl lg:text-[52px] leading-[1.1] font-extrabold tracking-tight mb-6 text-white">
          Advogadas especialistas em ações do <span className="text-[#D9DAD8] italic font-serif">INSS</span> e Direito Previdenciário.
        </h1>

        <p className="text-[#D9DAD8]/80 text-base lg:text-lg leading-relaxed max-w-[530px] mb-10">
          A <strong className="text-white font-semibold">Vallini & Leme Advocacia</strong> é dedicada à conquista e proteção dos seus benefícios: consulta para aposentadoria, planejamento previdenciário, auxílios por incapacidade e assessoria jurídica para empresas.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <Button size="lg" className="bg-[#D9DAD8] text-[#080F3D] hover:bg-white px-8 py-6 font-bold text-xs uppercase tracking-widest rounded-none h-auto transition-all shadow-lg shadow-black/40 group" asChild>
            <a 
              href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20com%20as%20advogadas%20especialistas%20em%20a%C3%A7%C3%B5es%20do%20INSS."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageSquareText className="w-4 h-4 text-[#080F3D] group-hover:scale-110 transition-transform" />
              <span>Agendar Consulta no WhatsApp</span>
            </a>
          </Button>
          
          <div className="flex flex-col">
            <span className="text-[10px] text-[#D9DAD8]/70 uppercase font-bold tracking-widest mb-1 flex items-center gap-1.5">
              <PhoneCall className="w-3 h-3 text-[#D9DAD8]" />
              Atendimento WhatsApp Direto
            </span>
            <a 
              href="https://wa.me/5519953243159" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-white hover:text-[#D9DAD8] transition-colors font-mono"
            >
              (19) 95324-3159
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#10194D] max-w-lg">
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#D9DAD8]/70 font-bold mb-1">Localização</span>
            <span className="text-xs font-semibold text-white flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D9DAD8]" />
              Centro, Campinas
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#D9DAD8]/70 font-bold mb-1">Especialidade</span>
            <span className="text-xs font-semibold text-[#D9DAD8]">Ações INSS & PJ</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#D9DAD8]/70 font-bold mb-1">Atendimento</span>
            <span className="text-xs font-semibold text-white">Presencial e Online</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full lg:w-[45%] bg-[#080F3D] relative overflow-hidden flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_30%,_#1B2763_0%,_#050A2A_85%)] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop" 
          alt="Ambiente jurídico especializado em Direito Previdenciário"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity"
          fetchPriority="high"
        />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-full h-full p-8 lg:p-12 flex flex-col justify-between text-white">
            <div className="flex justify-end">
              <div className="w-20 h-20 rounded-full border border-[#D9DAD8]/40 p-1 bg-[#050A2A]/85 backdrop-blur-sm shadow-xl">
                <img 
                  src={sealImg} 
                  alt="Selo Oficial Vallini & Leme Advocacia" 
                  className="w-full h-full rounded-full object-cover" 
                />
              </div>
            </div>

            <div>
              <div className="mb-8 border-l-2 border-[#D9DAD8] pl-6 bg-[#050A2A]/70 backdrop-blur-md py-4 pr-6">
                <span className="block text-2xl lg:text-3xl font-light italic mb-2 text-[#EDEDE9] font-serif">
                  "Garantir seu direito previdenciário é assegurar a dignidade do seu futuro."
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D9DAD8]">
                  Vallini & Leme • Advogadas Especialistas em Ações INSS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#050A2A]/85 backdrop-blur-md p-6 border border-[#D9DAD8]/20 shadow-lg">
                  <div className="flex items-center gap-2 mb-2 text-[#D9DAD8]">
                    <Calculator className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Planejamento</span>
                  </div>
                  <span className="block text-2xl font-extrabold text-white">Previdenciário</span>
                  <span className="text-[11px] text-[#D9DAD8]/70">Valor Máximo e Regra Ideal</span>
                </div>

                <div className="bg-[#050A2A]/85 backdrop-blur-md p-6 border border-[#D9DAD8]/20 shadow-lg">
                  <div className="flex items-center gap-2 mb-2 text-[#D9DAD8]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Incapacidade</span>
                  </div>
                  <span className="block text-2xl font-extrabold text-white">Auxílios & BPC</span>
                  <span className="text-[11px] text-[#D9DAD8]/70">Reversão de Negativas INSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
