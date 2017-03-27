import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router);

var first = { template: '<div><h2>first页面</h2><router-view></router-view></div>'};
var second = { template: '<div>second页面</div>'};

var firstFirst = { template: '<div>firstFirst页面 {{ $route.params.id }}</div>'};
var firstSecond = { template: '<div>firstSecond页面</div>'};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/first',
      name: 'first',
      component: first,
      children: [
        {
          path: 'first',
          name: 'firstFirst',
          component: firstFirst
        },
        {
          path: 'second',
          name: 'firstSecond',
          component: firstSecond
        }
      ]
    },
    {
      path: '/second',
      name: 'second',
      component: second
    }
  ]
})
