import Vue from 'vue';
import VueRouter from 'vue-router';
import Ex1 from '@/views/ex1.vue';
import Ex2 from '@/views/ex2.vue';
import Ex3 from '@/views/ex3.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Ex1',
    component: Ex1,
    meta: {
      title: 'Exercise 1',
    },
  },
  {
    path: '/ex2',
    name: 'Ex2',
    component: Ex2,
    meta: {
      title: 'Exercise 2',
    },
  },
  {
    path: '/ex3',
    name: 'Ex3',
    component: Ex3,
    meta: {
      title: 'Exercise 3',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title || 'Vue 2 + Bootstrap 4';
  next();
});

export default router;
