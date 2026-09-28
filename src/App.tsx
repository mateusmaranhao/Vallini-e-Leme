/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { WhatsAppFloat } from '@/components/shared/whatsapp-float';
import { Home } from '@/pages/home';

const Sobre = lazy(() => import('@/pages/sobre').then(m => ({ default: m.Sobre })));
const ServicosPage = lazy(() => import('@/pages/servicos').then(m => ({ default: m.ServicosPage })));
const ServicoDetalhes = lazy(() => import('@/pages/servico-detalhes').then(m => ({ default: m.ServicoDetalhes })));
const Placeholder = lazy(() => import('@/pages/placeholder').then(m => ({ default: m.Placeholder })));

export default function App() {
  return (
    <Router>
      <div className="min-h-[100dvh] flex flex-col bg-[#050A2A] text-[#F7F7F5] selection:bg-[#D9DAD8] selection:text-[#080F3D]">
        <Header />
        <div className="flex-1 flex flex-col">
          <Suspense fallback={
            <div className="flex-1 flex items-center justify-center bg-[#050A2A] min-h-[50vh]">
              <div className="w-8 h-8 border-4 border-[#10194D] border-t-[#D9DAD8] rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/servicos" element={<ServicosPage />} />
              <Route path="/servicos/:id" element={<ServicoDetalhes />} />
              <Route path="*" element={<Placeholder title="Página não encontrada" />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}
