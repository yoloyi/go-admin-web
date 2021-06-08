import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {Message} from 'element-ui';


Vue.config.productionTip = false
Vue.prototype.$message = Message


const vue = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

export default vue