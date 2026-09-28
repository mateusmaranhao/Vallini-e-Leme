import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { ServiceMarquee } from '@/components/sections/service-marquee';
import { TestimonialSlider } from '@/components/sections/testimonial-slider';
import { useEffect, useState } from 'react';
import { localBusinessSchema, webSiteSchema, generateFAQSchema } from '@/lib/seo';
import { SEOHead } from '@/components/shared/seo-head';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Minus, MapPin, Phone, Clock, Search, ShieldCheck, Calculator, Instagram, MessageSquareText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { faqData } from '@/lib/data';
import teamImg from '@/assets/images/advogadas_inss_team_1790599252786.jpg';

export function Home() {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEOHead 
        title="Vallini & Leme Advocacia | Especialistas em Ações INSS | Campinas - SP"
        description="Escritório de advocacia em Campinas especializado em ações do INSS, consulta aposentadoria, planejamento previdenciário, auxílios por incapacidade e pessoas jurídicas. Rua Barão de Jaguara, 707."
        canonicalUrl="/"
        jsonLd={[localBusinessSchema, webSiteSchema, generateFAQSchema(faqData)]}
      />
      <main className="flex flex-col bg-[#050A2A]">
        <h1 className="sr-only">Vallini & Leme Advocacia - Advogadas Especialistas em Ações INSS em Campinas</h1>
        <Hero />
      
        <ServiceMarquee />
      
        {/* About Summary */}
        <section className="flex flex-col lg:flex-row border-b border-[#10194D]">
          <div className="w-full lg:w-[48%] bg-[#050A2A] p-8 lg:p-16 flex flex-col justify-center text-white lg:border-r border-[#10194D]">
            <span className="inline-block text-[#D9DAD8] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
              Nossa Essência
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Dedicação artesanal e defesa incisiva dos seus direitos previdenciários.
            </h2>
            <p className="text-[#D9DAD8]/80 leading-relaxed mb-6 text-sm md:text-base">
              A <strong className="text-white font-semibold">Vallini & Leme Advocacia</strong> é um escritório sediado na Rua Barão de Jaguara, no Centro de Campinas, especializado em Ações do INSS e Direito Previdenciário. Acreditamos que cada histórico de trabalho e cada contribuição representam o sustento e a dignidade de uma vida inteira.
            </p>
            <p className="text-[#D9DAD8]/80 leading-relaxed mb-8 text-sm">
              Cada cliente recebe acolhimento humanizado, análise documental cirúrgica e um cálculo previdenciário personalizado para assegurar o benefício mais vantajoso para pessoas físicas e a devida segurança para empresas.
            </p>
            <Button variant="outline" className="self-start rounded-none border-[#D9DAD8] text-[#D9DAD8] hover:bg-[#D9DAD8] hover:text-[#080F3D] uppercase tracking-widest font-bold text-xs px-6 py-3 h-auto transition-all" asChild>
              <Link to="/sobre" onMouseEnter={() => {
                import('@/pages/sobre');
              }}>
                Conheça o Escritório <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="w-full lg:w-[52%] min-h-[420px] bg-[#10194D] relative overflow-hidden group">
            <img 
              src={teamImg} 
              alt="Advogadas Especialistas em Ações INSS - Vallini & Leme Advocacia" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A2A] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#050A2A]/90 backdrop-blur-md border border-[#D9DAD8]/30 flex items-center justify-between">
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold text-[#D9DAD8]">Corpo Jurídico</span>
                <span className="text-sm font-semibold text-white">Advogadas Especialistas em Ações INSS</span>
              </div>
              <span className="text-[11px] text-[#D9DAD8]/80 font-mono uppercase bg-[#10194D] px-2.5 py-1 rounded-sm border border-[#D9DAD8]/20">
                Campinas • SP
              </span>
            </div>
          </div>
        </section>

        <Services />

        {/* Como Funciona a Atuação */}
        <section className="bg-[#050A2A] border-b border-[#10194D]">
          <div className="w-full flex flex-col">
            <div className="p-8 lg:p-14 border-b border-[#10194D]">
              <span className="inline-block text-[#D9DAD8] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">Metodologia</span>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl max-w-2xl">
                Como atuamos na conquista do seu benefício
              </h2>
              <p className="text-[#D9DAD8]/80 text-sm mt-2 max-w-xl">
                Três etapas estratégicas para garantir a máxima segurança jurídica e o maior retorno financeiro.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#10194D]/40 gap-px">
              <div className="bg-[#050A2A] p-8 lg:p-12 group hover:bg-[#10194D]/60 transition-all">
                <div className="w-10 h-10 bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/20 flex items-center justify-center rounded-sm mb-6 font-bold font-mono">01</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-white flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#D9DAD8]" /> Diagnóstico Completo
                </h3>
                <p className="text-xs text-[#D9DAD8]/80 leading-relaxed">
                  Conferência aprofundada do Extrato Previdenciário (CNIS), carteiras de trabalho, carnês e laudos médicos. Identificamos pendências que travam seu pedido.
                </p>
              </div>
              
              <div className="bg-[#050A2A] p-8 lg:p-12 group hover:bg-[#10194D]/60 transition-all">
                <div className="w-10 h-10 bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/20 flex items-center justify-center rounded-sm mb-6 font-bold font-mono">02</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#D9DAD8]" /> Cálculo & Planejamento
                </h3>
                <p className="text-xs text-[#D9DAD8]/80 leading-relaxed">
                  Simulação exata de todas as regras de transição da Reforma da Previdência para determinar a data ideal e o valor máximo da sua Renda Mensal Inicial.
                </p>
              </div>
              
              <div className="bg-[#050A2A] p-8 lg:p-12 group hover:bg-[#10194D]/60 transition-all">
                <div className="w-10 h-10 bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/20 flex items-center justify-center rounded-sm mb-6 font-bold font-mono">03</div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D9DAD8]" /> Atuação Firme no INSS e na Justiça
                </h3>
                <p className="text-xs text-[#D9DAD8]/80 leading-relaxed">
                  Acompanhamento rigoroso do pedido administrativo no INSS e ajuizamento célere de ações na Justiça Federal para reverter indeferimentos e garantir retroativos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares Institucionais */}
        <TestimonialSlider />

        {/* FAQ */}
        <section id="faq" className="bg-[#050A2A] border-b border-[#10194D]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[45%] p-8 lg:p-16 flex flex-col bg-[#050A2A] border-b lg:border-b-0 lg:border-r border-[#10194D]">
              <span className="inline-block text-[#D9DAD8] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
                Dúvidas Frequentes
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6">
                Orientações essenciais sobre ações do INSS e benefícios.
              </h2>
              <p className="text-[#D9DAD8]/80 text-sm leading-relaxed mb-8">
                Tire suas dúvidas sobre consulta de aposentadoria, planejamento previdenciário, auxílios por incapacidade e atendimento empresarial.
              </p>
              <div className="mt-auto p-6 bg-[#10194D] border border-[#D9DAD8]/20">
                <span className="block text-xs uppercase tracking-widest text-[#D9DAD8] font-bold mb-2">Teve seu benefício negado?</span>
                <p className="text-xs text-[#D9DAD8]/80 mb-4">Muitos indeferimentos do INSS são revertidos com atuação técnica especializada.</p>
                <Button size="sm" className="bg-[#D9DAD8] text-[#080F3D] hover:bg-white rounded-none font-bold text-xs uppercase tracking-widest w-full h-auto py-3" asChild>
                  <a 
                    href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20meu%20benef%C3%ADcio%20do%20INSS."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com as Advogadas no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-[55%] p-8 lg:p-12 bg-[#050A2A]">
              <div className="flex flex-col border-t border-[#10194D]">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-[#10194D]">
                    <button
                      className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    >
                      <span className="font-bold text-sm uppercase tracking-wide text-white group-hover:text-[#D9DAD8] transition-colors">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-sm transition-colors ${openIndex === idx ? 'bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/40' : 'bg-[#10194D]/40 text-[#D9DAD8]/60 group-hover:bg-[#10194D] group-hover:text-white'}`}>
                        {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-sm text-[#D9DAD8]/80 leading-relaxed pr-8">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section id="contato" className="flex flex-col lg:flex-row border-b border-[#10194D]">
          <div className="w-full lg:w-[45%] p-8 lg:p-16 flex flex-col bg-[#050A2A] text-white border-r border-[#10194D]">
            <span className="inline-block text-[#D9DAD8] text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
              Localização & Contato
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight mb-10 text-white">
              Visite nosso escritório em Campinas
            </h2>
            <div className="flex flex-col gap-8 mt-auto">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#10194D] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm shrink-0 text-[#D9DAD8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#D9DAD8] mb-1">Endereço</h4>
                  <p className="text-[13px] font-medium leading-relaxed text-[#EDEDE9]">
                    Rua Barão de Jaguara, 707<br />
                    Centro, Campinas - SP<br />
                    CEP 13015-926
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#10194D] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm shrink-0 text-[#D9DAD8]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#D9DAD8] mb-1">Telefone & WhatsApp</h4>
                  <a 
                    href="https://wa.me/5519953243159" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-[#D9DAD8] transition-colors block mb-1 font-mono"
                  >
                    (19) 95324-3159
                  </a>
                  <p className="text-xs text-[#D9DAD8]/70 mb-3">Atendimento com advogadas especialistas em INSS.</p>
                  <Button className="bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-none uppercase tracking-widest font-bold text-[10px] h-8 px-4" asChild>
                    <a 
                      href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20com%20as%20advogadas%20especialistas%20em%20a%C3%A7%C3%B5es%20do%20INSS."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#10194D] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm shrink-0 text-[#D9DAD8]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#D9DAD8] mb-1">Horário de Atendimento</h4>
                  <p className="text-[13px] font-medium leading-relaxed text-[#EDEDE9]">
                    Segunda a Sexta-feira: 09:00 às 18:00<br />
                    Atendimento Presencial ou Online com agendamento prévio
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <div className="w-10 h-10 bg-[#10194D] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm shrink-0 text-[#D9DAD8]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#D9DAD8] mb-1">Instagram Oficial</h4>
                  <a 
                    href="https://instagram.com/vallinielemeadvocacia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[13px] text-white hover:text-[#D9DAD8] transition-colors"
                  >
                    @vallinielemeadvocacia
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[55%] h-[420px] lg:h-auto relative bg-[#10194D]">
            <iframe 
              src="https://maps.google.com/maps?q=Rua+Bar%C3%A3o+de+Jaguara,+707+-+Centro,+Campinas+-+SP,+13015-926&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 grayscale contrast-125 opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-700" 
              loading="lazy"
              title="Localização Vallini & Leme Advocacia - Campinas"
            ></iframe>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#10194D] flex flex-col md:flex-row items-center justify-between p-8 lg:p-14 gap-8 border-b border-[#10194D]">
          <div>
            <span className="text-[10px] text-[#D9DAD8] uppercase font-bold tracking-[0.2em] block mb-2">Consulta Especializada</span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
              Planeje sua aposentadoria ou solucione seu benefício no INSS.
            </h2>
            <p className="text-[#D9DAD8]/80 text-sm">
              Fale agora com as advogadas especialistas e garanta a proteção integral dos seus direitos.
            </p>
          </div>
          <Button size="lg" className="bg-[#D9DAD8] text-[#080F3D] rounded-none hover:bg-white uppercase tracking-widest font-bold text-xs w-full md:w-auto px-10 py-6 h-auto shrink-0 transition-all shadow-xl flex items-center gap-2" asChild>
            <a 
              href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20com%20as%20advogadas%20especialistas%20em%20a%C3%A7%C3%B5es%20do%20INSS."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Agendar no WhatsApp</span>
            </a>
          </Button>
        </section>
      
      </main>
    </>
  );
}
