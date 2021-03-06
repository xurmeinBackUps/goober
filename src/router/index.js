import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
                      // this ^^^^^ is a magic comment for webpack
                      props:true

  },
  {
    path: '/subject', ///:id
    name: 'SubjectShow',
    component: () => import(/* webpackChunkName: "subject" */ '@/views/SubjectShowPage.vue'),
    props: true
  },
  {
    path: '/topic', // /:id
    name: 'TopicShow',
    // route level code-splitting
    // this generates a separate chunk (lesson.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "topic" */ '@/views/TopicShowPage.vue'),
    props: true,
  },
  // {
  //   path: '/lessons/:id',
  //   name: 'LessonShow',
  //   component: () => import(/* webpackChunkName: "lesson" */ '@/views/LessonShowPage.vue'),
  //   props: true
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage.vue'),
    props:true
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
