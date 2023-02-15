import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import MyTest from '@/components/MyTest'
// import MyRender from '@/components/MyRender'
const HelloWorld = () => import('@/components/HelloWorld') 
const MyTest = () => import('@/components/MyTest') 
const MyRender = () => import('@/components/MyRender')  
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: false   //判断是否缓存
      }
    },
    {
      path: '/render',
      name: 'render',
      component: MyRender,
      meta: {
        keepAlive: false   //判断是否缓存
      }
    },
    {
      path: '/mytest',
      name: 'MyTest',
      component: MyTest,
      meta: {
        keepAlive: true   //判断是否缓存
      }
    }
  ]
})
