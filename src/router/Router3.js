// query append exact

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var users = { template: '<div><h2>Users页面</h2><router-view></router-view></div>'};
var user = { template: '<div>{{ $route.params.username + "------" + $route.query.aaa + "------" + $route.params.id }}</div>' };
var Home = { template: '<div>Home内容</div>' };

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: users,
      children: [
        {
          path: ':username',
          name: 'user',
          component: user
        }
      ]
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
        <li><router-link to="/users">/users</router-link></li>
          <ol>
            <li><router-link :to="{path: '/users/auven', params: {id: 123}, query: {aaa: 'bbb'} }">auven</router-link></li>
            <li><router-link :to="{path: '/users/abcdh', query: {aaa: '222'} }">auven</router-link></li>
            <router-link tag="li" to="about">link</router-link>
            <li><router-link to="about" append>append</router-link></li>
            <li><router-link to="about" exact>exact</router-link></li>
          </ol>
      </ul>
      <router-link tag="p" to="about">link</router-link>
      <router-view></router-view>
  </div>
  `
}).$mount('#app');
