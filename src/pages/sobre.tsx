import { Target, ShieldCheck, Calculator, Scale, HeartHandshake, MapPin, Phone, MessageSquareText } from 'lucide-react';
import { SEOHead } from '@/components/shared/seo-head';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { localBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo';
import teamImg from '@/assets/images/advogadas_inss_team_1790599252786.jpg';
import sealImg from '@/assets/images/vallini_leme_logo_1790599241234.jpg';
import { Button } from '@/components/ui/button';

export function Sobre() {
  return (
    <>
      <SEOHead 
        title="O Escritório | Vallini & Leme Advocacia | Campinas - SP"
        description="Conheça a Vallini & Leme Advocacia. Advogadas especialistas em ações do INSS, planejamento previdenciário, auxílios e pessoas jurídicas na Rua Barão de Jaguara, 707 em Campinas."
        canonicalUrl="/sobre"
        jsonLd={[localBusinessSchema, generateBreadcrumbSchema([{ name: "O Escritório", item: "/sobre" }])]}
      />
      <main className="flex-1 flex flex-col bg-[#050A2A] text-[#F7F7F5]">
        <Breadcrumbs items={[{ label: 'O Escritório' }]} />
        
        <section className="bg-[#050A2A] border-b border-[#10194D]">
          <div className="flex flex-col lg:flex-row min-h-[55dvh]">
            <div className="w-full lg:w-[55%] p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#10194D]">
              <span className="inline-block bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] rounded-sm self-start mb-6">
                Institucional
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Advogadas especialistas em <span className="text-[#D9DAD8] italic font-serif">ações do INSS</span>.
              </h1>
              <p className="text-[#D9DAD8]/80 leading-relaxed max-w-xl text-base md:text-lg mb-6">
                A <strong className="text-white">Vallini & Leme Advocacia</strong> nasceu com o propósito de proporcionar segurança, clareza e dignidade aos segurados da Previdência Social e às empresas que buscam conformidade e redução de passivos.
              </p>
              <p className="text-[#D9DAD8]/80 leading-relaxed max-w-xl text-sm">
                Localizado na Rua Barão de Jaguara, no Centro de Campinas, nosso escritório reúne prática jurídica consolidada, domínio das complexas regras da Reforma da Previdência (EC 103/2019) e cálculos atuariais precisos para que nenhum segurado receba menos do que tem direito por lei.
              </p>
            </div>
            
            <div className="w-full lg:w-[45%] relative bg-[#10194D] min-h-[360px] overflow-hidden group">
              <img 
                src={teamImg} 
                alt="Corpo jurídico Vallini & Leme Advocacia" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A2A] via-[#050A2A]/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-end justify-between p-8">
                <div className="bg-[#050A2A]/90 backdrop-blur-md border border-[#D9DAD8]/30 p-6 w-full flex items-center justify-between">
                  <div>
                    <span className="block text-2xl font-extrabold text-white">INSS & PJ</span>
                    <span className="text-[10px] text-[#D9DAD8] uppercase tracking-widest font-bold">Direito Previdenciário Especializado</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#D9DAD8]/40 overflow-hidden">
                    <img src={sealImg} alt="Selo Oficial" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section className="py-20 lg:py-24 border-b border-[#10194D]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <span className="text-[10px] text-[#D9DAD8] uppercase font-bold tracking-[0.25em] block mb-2">Princípios de Atuação</span>
              <h2 className="text-3xl font-extrabold text-white">Nossos Pilares Fundamentais</h2>
              <p className="text-[#D9DAD8]/80 text-sm mt-2 max-w-xl">
                Valores técnicos e éticos que orientam cada atendimento na Vallini & Leme Advocacia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#10194D]/40 gap-px border border-[#10194D]">
              <div className="bg-[#050A2A] p-10 lg:p-12 hover:bg-[#10194D]/60 transition-colors">
                <div className="w-12 h-12 bg-[#10194D] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm mb-6 text-[#D9DAD8]">
                  <Calculator className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Rigor Técnico e Contábil</h3>
                <p className="text-[#D9DAD8]/80 text-xs leading-relaxed">
                  Cada aposentadoria e benefício é precedido de conferência minuciosa do CNIS e simulações atuariais precisas para assegurar a regra mais vantajosa.
                </p>
              </div>
              
              <div className="bg-[#050A2A] p-10 lg:p-12 hover:bg-[#10194D]/60 transition-colors">
                <div className="w-12 h-12 bg-[#10194D] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm mb-6 text-[#D9DAD8]">
                  <HeartHandshake className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Atendimento Humanizado</h3>
                <p className="text-[#D9DAD8]/80 text-xs leading-relaxed">
                  Compreensão atenta da história de trabalho e das necessidades de cada cliente, proporcionando tranquilidade e acolhimento em todas as etapas.
                </p>
              </div>
              
              <div className="bg-[#050A2A] p-10 lg:p-12 hover:bg-[#10194D]/60 transition-colors">
                <div className="w-12 h-12 bg-[#10194D] border border-[#D9DAD8]/30 flex items-center justify-center rounded-sm mb-6 text-[#D9DAD8]">
                  <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Transparência e Ética</h3>
                <p className="text-[#D9DAD8]/80 text-xs leading-relaxed">
                  Orientações realistas, sem promessas ilusórias. Informamos com total clareza as chances, prazos e investimentos necessários para o seu processo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Localização & Sede */}
        <section className="p-8 lg:p-16 bg-[#10194D] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] text-[#D9DAD8] uppercase font-bold tracking-[0.25em] block mb-2">Sede em Campinas</span>
            <h3 className="text-2xl font-bold text-white mb-3">Atendimento Confortável e Acessível no Centro de Campinas</h3>
            <p className="text-sm text-[#D9DAD8]/80 leading-relaxed">
              Estamos sediadas na <strong className="text-white font-medium">Rua Barão de Jaguara, 707 - Centro, Campinas - SP</strong>. Um espaço reservado e preparado para analisar com calma toda a sua documentação ou prestar consultoria preventiva para sua empresa.
            </p>
          </div>
          <Button size="lg" className="bg-[#D9DAD8] text-[#080F3D] hover:bg-white rounded-none uppercase tracking-widest font-bold text-xs px-8 py-5 shrink-0 h-auto flex items-center gap-2" asChild>
            <a 
              href="https://wa.me/5519953243159?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica%20no%20escrit%C3%B3rio."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Agendar Consulta no WhatsApp</span>
            </a>
          </Button>
        </section>
      </main>
    </>
  );
}
