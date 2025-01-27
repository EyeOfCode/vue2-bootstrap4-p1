import Vue from 'vue';
import VueRouter from 'vue-router';
import Ex1 from '@/views/ex1.vue';

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
