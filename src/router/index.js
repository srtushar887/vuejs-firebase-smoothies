import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addsmoothie from "../components/Addsmoothie";
import Editsmoothie from "../components/Editsmoothie";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-smoothie',
      name: 'Addsmoothie',
      component: Addsmoothie
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'Editsmoothie',
      component: Editsmoothie
    }
  ]
})
