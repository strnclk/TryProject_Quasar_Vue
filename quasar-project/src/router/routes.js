import About1 from 'pages/admin/about1.vue';

// Layouts
const MainLayout = () => import('layouts/MainLayout.vue');
const AdminLayout = () => import('layouts/AdminLayout.vue');

// Pages
const About = () => import('pages/About.vue');
const Homepage = () => import('pages/homepage.vue');
const Login = () => import('pages/login.vue');
const cv = () => import('pages/admin/cv.vue');
const homepage1 = () => import('pages/admin/homepage1.vue');
const Header = () => import('src/pages/Header.vue');
const description = () => import('pages/admin/description.vue');
const  yonlendirme= () => import('pages/admin/yonlendirme.vue');
const  aboutadmin= () => import('pages/admin/about1.vue');
const  parallax= () => import('pages/admin/parallax.vue');
const  about2= () => import('pages/admin/about2.vue');
const ErrorNotFound = () => import('pages/ErrorNotFound.vue');

const routes= [
 
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Homepage },
      { path: 'about', component: About },
      { path: 'login', component: Login },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '/admin', component: cv },
      { path: '/header', component: Header },
      { path: '/homepage1', component: homepage1 },
      { path: '/description', component: description },
      { path: '/yonlendirme', component: yonlendirme },
      { path: '/aboutadmin', component: aboutadmin },
      { path: '/parallax', component: parallax },
      { path: '/about2', component: about2 },







    ],
  },
  {
    path: '/:catchAll(.*)',
    component: ErrorNotFound,
  },
];

export default routes;










// const routes = [
//   {
//     path: '/',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: '/about', component: () => import('pages/About.vue') },
//       { path: '/', component: () => import('pages/homepage.vue') },
//       { path: '/#contact', component: () => import('pages/homepage.vue') },
//       { path: '/login', component: () => import('pages/login.vue') },



//     ]
//   },
//   {
//     path: '/admin',
//     component: () => import('layouts/AdminLayout.vue'),
//     children: [
//       { path: 'dashboard', component: () => import('pages/admin/Dashboard.vue') },
//     ]
//   },

//   // Always leave this as last one,
//   // but you can also remove it
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue')
//   }
// ]

// export default routes
