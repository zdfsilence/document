import './css/normalize.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './vue/Main.vue'
import side from './vue/Side.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
        path: '/',
        components: {
            main,
            side
        }
    }]
})
new Vue({
    router,
    el: '#app'
})
