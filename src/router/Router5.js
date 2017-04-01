// 复杂动画+watch+404页面 可以尝试换一下mode的out-in 和 in-out
// 404必须放在路由最后

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = {
  template: `
    <div>
        <h2>Home</h2>
        <p>This is Home - {{ $route.query.a }}</p>
    </div>  
  `
};

const Parent = {
  template: `
    <div>
        <h2>Parent</h2>
        <p>This is Parent</p>
    </div>  
  `
};

const Page404 = {
  template: `
    <div>
        <h2>err: 404</h2>
    </div>  
  `,
  beforeRouteEnter:(to,from,next) => {
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave:(to,from,next) => {
    console.log(to);
    console.log(from);
    next();
  },
};

const test404 = {
  template: `
    <div>
        <h2>测试放在404路由之后是否显示</h2>
    </div>  
  `
};

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/Parent', component: Parent,
      beforeEnter: (to,from,next) => {
        console.log(to);
        console.log(from);
        //next() // 可以 next(false)
        next({path: '/abcdefgh'});
      }
    },
    {path: '*', component: Page404},
    {path: '/test404', component: test404}
  ]
});

new Vue({
  router,
  data() {
    return {
      aaa: 'fade1'
    }
  },
  template: `
    <div>
      <button v-on:click="houtui">后退</button>
      <button v-on:click="qianjin">前进</button>
      <button v-on:click="home">返回首页</button>
      <button v-on:click="Query">query</button>
      
      <h1>This is Transition</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/Parent">parent</router-link></li>
        <li><router-link to="/jsjskd">hsudhasd</router-link></li>
        <li><router-link to="/test404">test-404</router-link></li>
      </ul>
      <transition :name="aaa" mode="out-in">
        <router-view></router-view>
      </transition>
      
    </div>
  `,
  watch: {
    '$route'(to,from){
      console.log(to);
      console.log(from);

      if(from.path == '/Parent'){
        this.aaa = 'fade1';
      } else {
        this.aaa = 'fade2';
      }
    }
  },
  methods: {
    houtui: function () {
      router.go(-1)
    },
    qianjin: function () {
      router.go(1)
    },
    home: function () {
      router.push('/')
    },
    Query: function () {
      router.push({path: '/', query: {a:1, b:1}})
    }
  }
}).$mount('#app');
