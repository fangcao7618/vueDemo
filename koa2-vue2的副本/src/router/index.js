import VueRouter from 'vue-router';
import Example from '../views/example/example.vue';
import Example1 from '../views/example/example1.vue';

const routes=[{
    path:'/',
    component:Example
},{
    path:'/1',
    component:Example1
}];

const router=new VueRouter({
    mode:'hash',//history  hash
    routes
});

export default router;