import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
                      // this ^^^^^ is a magic comment for webpack
  },
  {
    path: '/lessons',
    name: 'LessonIndex',
    // route level code-splitting
    // this generates a separate chunk (lesson.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "lessonIndex" */ '@/views/LessonIndexPage.vue'),
    props: true,
  },
  {
    path: '/lessons/:id',
    name: 'LessonShow',
    component: () => import(/* webpackChunkName: "lessontShow" */ '@/views/LessonShowPage.vue'),
    props: true
  },
  {
    path: '*', // <-- the wildcard route, catches urls not matching any preceding routes
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/NotFoundPage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
