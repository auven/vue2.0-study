// 路由表的组件群

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var first = { template: '<div>first内容</div>'};
var second = { template: '<div>second内容</div>' };
var Home = { template: '<div>Home内容</div>' };
var hehe = { template: '<div>hehe</div>' };

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', components: {
      default: Home,
      left: first,
      right: second
    } },
    { path: '/first', name: 'first', components: {
      default: hehe,
      left: first,
      right: second
    } }
  ]
});

new Vue({
  router,
  template: `
    <div id='r'>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/first">/first</router-link></li>
      </ul>
      <router-view></router-view>
      <router-view name="left" style="float: left; width: 50%; height: 300px; background-color: #42b983;"></router-view>
      <router-view name="right" style="float: left; width: 50%; height: 300px; background-color: chocolate;"></router-view>

      <p>{{ $route.name }}</p>
    </div>
  `
}).$mount('#app');
