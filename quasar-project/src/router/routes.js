const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/', component: () => import('pages/homepage.vue') },
      { path: '/#contact', component: () => import('pages/homepage.vue') },
      { path: '/login', component: () => import('pages/login.vue') },



    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
