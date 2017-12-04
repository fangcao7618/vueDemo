import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
