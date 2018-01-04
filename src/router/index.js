import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);
Vue.use(VueResource);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path : '/home',
      component : Home
    }
  ]
})
