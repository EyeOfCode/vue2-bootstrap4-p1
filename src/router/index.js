import Vue from 'vue';
import VueRouter from 'vue-router';
import Ex1 from '@/views/ex1.vue';
import Ex2 from '@/views/ex2.vue';
import Ex3 from '@/views/ex3.vue';
import Ex4 from '@/views/ex4.vue';
import Ex5 from '@/views/ex5.vue';
import Ex6 from '@/views/ex6.vue';
import Ex7 from '@/views/ex7.vue';
import Ex8 from '@/views/ex8.vue';
import Checkout from '@/views/checkout.vue';

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
  {
    path: '/ex4',
    name: 'Ex4',
    component: Ex4,
    meta: {
      title: 'Exercise 4',
    },
  },
  {
    path: '/ex5',
    name: 'Ex5',
    component: Ex5,
    meta: {
      title: 'Exercise 5',
    },
  },
  {
    path: '/ex6',
    name: 'Ex6',
    component: Ex6,
    meta: {
      title: 'Exercise 6',
    },
  },
  {
    path: '/ex7',
    name: 'Ex7',
    component: Ex7,
    meta: {
      title: 'Exercise 7',
    },
  },
  {
    path: '/ex8',
    name: 'Ex8',
    component: Ex8,
    meta: {
      title: 'Exercise 8',
    },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: {
      title: 'Checkout',
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
