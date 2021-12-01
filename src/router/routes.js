
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue')},
      { path: '/aviones', component: () => import('src/pages/inventario/tipos_page.vue')},
      { path: '/nuevo_tipo_avion', component: () => import('src/pages/inventario/nuevo_tipo_avion_page.vue')},
      { path: '/nuevo_tipo_componente', component: () => import('src/pages/inventario/nuevo_tipo_componente_page.vue')},
      { path: '/nuevo_tipo_subcomponente', component: () => import('src/pages/inventario/nuevo_tipo_subcomponente_page.vue')}

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
