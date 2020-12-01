import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
                      // this ^^^^^ is a magic comment foe webpack

  },
  {
    path: '/posts',
    name: 'PostIndex',
    // route level code-splitting
    // this generates a separate chunk (posts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "postIndex" */ '@/views/PostIndexPage.vue'),
    props: true,
  },
  {
    path: '/posts/:id',
    name: 'PostShow',
    component: () => import(/* webpackChunkName: "postShow" */ '@/views/PostShowPage.vue'),
    props: true
  },
  {
    path: '*', // <-- the wildcard route, catches urls not matching any preceding routes
    name: 'NotFound',
    component: () => import(/* webpackChunkName: notFound' */ '@/views/NotFoundPage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
