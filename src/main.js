import Vue from 'vue'
import App from './App'
import Home from './pages/Home.vue'
import Detail from './pages/Detail.vue'
import VueRouter from 'vue-router'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pokemon/:name',
      component: Detail
    }
  ]
})
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
