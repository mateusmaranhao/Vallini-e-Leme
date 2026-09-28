import { servicesData } from '@/lib/data';
import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus, Minus, MessageSquareText } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '@/lib/seo';

export function ServicoDetalhes() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const jsonLdData: Record<string, unknown>[] = [
    generateBreadcrumbSchema([
      { name: "Serviços", item: "/servicos" },
      { name: service.shortTitle, item: `/servicos/${service.id}` }
    ]),
    generateServiceSchema(service.title, service.desc, `/servicos/${service.id}`)
  ];

  if (service.faqs && service.faqs.length > 0) {
    jsonLdData.push(generateFAQSchema(service.faqs));
  }

  return (
    <>
      <SEOHead 
        title={`${service.title} | Vallini & Leme Advocacia`}
        description={service.desc}
        canonicalUrl={`/servicos/${service.id}`}
        jsonLd={jsonLdData}
      />
      <main className="flex-1 flex flex-col bg-[#050A2A] text-[#F7F7F5]">
        <Breadcrumbs items={[
          { label: 'Serviços', href: '/servicos' },
          { label: service.shortTitle }
        ]} />

        {/* Hero Section */}
        <section className="bg-[#050A2A] text-white p-8 lg:p-20 flex flex-col border-b border-[#10194D]">
          <div className="max-w-4xl mx-auto flex flex-col items-start w-full">
            <div className="w-12 h-12 bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm mb-6">
              <service.icon className="w-6 h-6 stroke-[2]" />
            </div>
            <span className="text-[10px] text-[#D9DAD8] uppercase font-bold tracking-[0.25em] mb-3">
              Advocacia Previdenciária Especializada
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl font-medium text-[#D9DAD8] mb-6 max-w-3xl leading-snug">
              {service.heroSubtitle}
            </p>
            <p className="text-[#D9DAD8]/80 leading-relaxed text-sm md:text-base max-w-2xl mb-10">
              {service.desc}
            </p>
            <Button size="lg" className="bg-[#D9DAD8] text-[#080F3D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 h-auto transition-all shadow-lg flex items-center gap-2" asChild>
              <a 
                href={`https://wa.me/5519953243159?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20jur%C3%ADdico%20sobre%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Consultar Advogadas sobre este serviço</span>
              </a>
            </Button>
          </div>
        </section>

        {/* Sections */}
        <section className="bg-[#050A2A] border-b border-[#10194D]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[42%] p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#10194D] bg-[#050A2A]">
              <span className="inline-block text-[#D9DAD8] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                Estratégia Jurídica
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
                Como atuamos nesta frente previdenciária
              </h2>
              <p className="text-[#D9DAD8]/80 text-xs leading-relaxed max-w-md">
                Cada detalhe documental e período trabalhado é analisado com precisão para salvaguardar seus direitos e alcançar o máximo valor do benefício.
              </p>
            </div>
            
            <div className="w-full lg:w-[58%] p-8 lg:p-16 bg-[#10194D]/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {service.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2 text-white border-l-2 border-[#D9DAD8] pl-3">
                      {section.title}
                    </h3>
                    <p className="text-[#D9DAD8]/80 text-xs leading-relaxed pl-3.5">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="bg-[#050A2A] border-b border-[#10194D]">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[42%] p-8 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-[#10194D]">
                <span className="inline-block text-[#D9DAD8] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
                  Esclarecimentos
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">
                  Dúvidas Frequentes
                </h2>
                <p className="text-[#D9DAD8]/80 text-xs leading-relaxed">
                  Perguntas frequentes e diretrizes técnicas sobre {service.shortTitle.toLowerCase()}.
                </p>
              </div>
              <div className="w-full lg:w-[58%] p-8 lg:p-12">
                <div className="flex flex-col border-t border-[#10194D]">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#10194D]">
                      <button
                        className="w-full py-6 flex items-center justify-between gap-4 text-left focus:outline-none group"
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      >
                        <span className="font-bold text-sm uppercase tracking-wide text-white group-hover:text-[#D9DAD8] transition-colors">
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 flex items-center justify-center shrink-0 rounded-sm transition-colors ${openFaqIndex === idx ? 'bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/30' : 'bg-[#10194D]/40 text-[#D9DAD8]/60 group-hover:bg-[#10194D] group-hover:text-white'}`}>
                          {openFaqIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-8 text-xs text-[#D9DAD8]/80 leading-relaxed pr-8">
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
        )}
        
        {/* Footer CTA Banner */}
        <section className="bg-[#10194D] p-8 lg:p-16 text-center flex flex-col items-center border-b border-[#10194D]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Precisa de orientação jurídica especializada sobre {service.shortTitle}?
          </h2>
          <p className="text-sm text-[#D9DAD8]/80 mb-8 max-w-lg">
            Entre em contato com as advogadas especialistas da Vallini & Leme Advocacia. Atendimento presencial no Centro de Campinas ou online.
          </p>
          <Button size="lg" className="bg-[#D9DAD8] text-[#080F3D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 h-auto transition-all shadow-lg flex items-center gap-2" asChild>
            <a 
              href={`https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20jur%C3%ADdica%20sobre%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Falar com as Advogadas no WhatsApp</span>
            </a>
          </Button>
        </section>

      </main>
    </>
  );
}
