
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue')},
      { path: '/aviones', component: () => import('pages/inventario/aviones_page.vue')},
      { path: '/nuevo_avion', component: () => import('pages/inventario/nuevo_avion_page.vue')}

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
