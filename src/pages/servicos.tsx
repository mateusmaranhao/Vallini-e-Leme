import { Services } from '@/components/sections/services';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { FileText, MessageSquareText } from 'lucide-react';

export function ServicosPage() {
  return (
    <>
      <SEOHead 
        title="Serviços Previdenciários e Ações INSS | Vallini & Leme Advocacia"
        description="Consulta Aposentadoria, Planejamento Previdenciário, Auxílios por Incapacidade e Consultoria para Pessoas Jurídicas. Conheça as áreas de atuação da Vallini & Leme Advocacia em Campinas."
        canonicalUrl="/servicos"
        jsonLd={generateBreadcrumbSchema([{ name: "Serviços Especializados", item: "/servicos" }])}
      />
      <main className="flex-1 flex flex-col bg-[#050A2A] text-[#F7F7F5]">
        <Breadcrumbs items={[{ label: 'Serviços' }]} />
        
        <section className="bg-[#050A2A] border-b border-[#10194D] p-8 lg:p-16 flex flex-col items-center text-center">
          <span className="inline-block bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm mb-6">
            Direito Previdenciário Especializado
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-3xl">
            Nossos Serviços em Ações do INSS e Consultoria
          </h1>
          <p className="text-[#D9DAD8]/80 leading-relaxed max-w-2xl text-base md:text-lg">
            Da análise preventiva de CNIS e planejamento financeiro atuarial aos recursos administrativos e ações judiciais na Justiça Federal em Campinas e região.
          </p>
        </section>

        {/* Grid das soluções */}
        <Services />

        <section className="py-20 bg-[#10194D] text-center px-6 border-b border-[#10194D]">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#050A2A] border border-[#D9DAD8]/30 flex items-center justify-center text-[#D9DAD8] mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Dúvidas sobre seu histórico ou benefício indeferido?
            </h2>
            <p className="text-[#D9DAD8]/80 mb-8 text-sm leading-relaxed">
              Consulte as advogadas especialistas da Vallini & Leme Advocacia e receba uma análise precisa e transparente do seu caso.
            </p>
            <Button size="lg" className="bg-[#D9DAD8] text-[#080F3D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 h-auto transition-all shadow-lg flex items-center gap-2" asChild>
              <a 
                href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20as%20advogadas%20especialistas%20em%20a%C3%A7%C3%B5es%20do%20INSS."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Falar com as Advogadas no WhatsApp</span>
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
