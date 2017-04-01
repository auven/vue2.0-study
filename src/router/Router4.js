// 路由重定向 和 alias

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router);

var first = { template: '<div><h2>first页面</h2><router-view></router-view></div>'};
var second = { template: '<div>second页面</div>'};

var firstFirst = { template: '<div>firstFirst页面 {{ $route.params.id }}</div>'};
var firstSecond = { template: '<div>firstSecond页面</div>'};

const router = new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello },
    { path: '/first', name: 'first', component: first,
      children: [
        { path: 'first', name: 'firstFirst', component: firstFirst },
        { path: 'second', name: 'firstSecond', component: firstSecond }
      ]
    },
    { path: '/second', name: 'second', component: second, alias: ['/gogo', '/papa'] },

    { path: '/aaa/:id', component: firstFirst },
    { path: '/aaa/:id', redirect: '/aaa/:id' },

    {
      path: '/ccc/:id',
      redirect: xxxx => {
        const { hash,params,query } = xxxx;
        if (params.id == '001') {
          return '/';
        }
      }
    }
  ]
});

new Vue({
  router,
  template: `
    <div>
      <h1>导航</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/first">/first</router-link></li>
          <ol>
            <li><router-link :to="{name: 'firstFirst', params: {id: 123}}">first</router-link></li>
            <li><router-link :to="{path: '/first/second'}">second</router-link></li>
          </ol>
        </li>
        <li><router-link to="/second">second</router-link></li>
        <li><router-link to="/gogo">gogo</router-link></li>
        <li><router-link to="/papa">papa</router-link></li>
        
        <li><router-link to="/aaa/789">aaa</router-link></li>
        <li><router-link to="/aaa/456">bbb</router-link></li>
        <li><router-link to="/ccc/001">ccc</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
  `
}).$mount('#app');
