import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home.vue'
import Sign_up from '@/components/Sign_up.vue'
import Charter from '@/components/Charter.vue'
import Video from '@/components/Video.vue'

Vue.use(Router)

export default new Router({
	
  routes: [
      {path:'/home',meta:{title:'首页'},component:home},
      {path:'/Sign_up',meta:{title:'报名'},component:Sign_up},
      {path:'/Charter',meta:{title:'报名'},component:Charter},
      {path:'/Video',meta:{title:'报名'},component:Video},
      
       {path:'/*',meta:{title:'首页'},component:home},
  ]
})
