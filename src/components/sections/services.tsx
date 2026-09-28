import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="servicos" className="border-b border-[#10194D] bg-[#050A2A]">
      <div className="w-full flex flex-col">
        <motion.div 
          className="p-8 lg:p-14 border-b border-[#10194D] bg-[#050A2A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-[#D9DAD8] text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            Áreas de Especialização
          </span>
          <h2 className="text-3xl font-extrabold text-white md:text-4xl max-w-2xl">
            Soluções jurídicas em Ações do INSS e Direito Previdenciário
          </h2>
          <p className="text-[#D9DAD8]/80 text-sm mt-3 max-w-xl">
            Consultoria preventiva, planejamento financeiro e atuação combativa em pedidos administrativos e judiciais.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#10194D]/50 gap-px"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((s) => (
            <motion.div 
              key={s.id} 
              variants={itemVariants}
              className="bg-[#050A2A] p-8 lg:p-10 flex flex-col justify-between group hover:bg-[#10194D]/60 transition-all duration-300 relative border border-transparent hover:border-[#D9DAD8]/20"
            >
              <div className="mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm mb-6 bg-[#10194D] text-[#D9DAD8] border border-[#D9DAD8]/20 group-hover:border-[#D9DAD8]/50 group-hover:bg-[#080F3D] transition-colors">
                  <s.icon className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="font-bold text-base uppercase tracking-wide mb-3 text-white group-hover:text-[#D9DAD8] transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-xs text-[#D9DAD8]/80 leading-relaxed line-clamp-3">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#10194D] flex items-center justify-between">
                <Link 
                  to={`/servicos/${s.id}`} 
                  className="text-xs font-bold uppercase tracking-wider text-[#D9DAD8] hover:text-white flex items-center gap-2 group-hover:translate-x-1 transition-all"
                >
                  <span>Conhecer detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[10px] text-[#D9DAD8]/60 font-mono uppercase">Campinas - SP</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
