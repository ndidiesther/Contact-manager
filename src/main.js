import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  render: h => h(App),
  el:"#app",
  mounted:function(){
        this.method1() //method1 will execute at pageload
  },
  methods:{
        method1:function(){
          console.log("Teacher")
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
             console.log(response.data)
             this.posts = response.data
          })
          .catch((error) => {
            console.log(error)
            this.errorMsg = "Error Retrieving Data"
          })
        }
     },
})
export default {
  mounted() {
    this.function()
  },
}