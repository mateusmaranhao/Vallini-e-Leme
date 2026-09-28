export const prefetchRoute = (path: string) => {
  if (path === '/sobre') {
    import('@/pages/sobre');
  } else if (path.startsWith('/servicos')) {
    import('@/pages/servicos');
    if (path !== '/servicos') {
      import('@/pages/servico-detalhes');
    }
  }
};
