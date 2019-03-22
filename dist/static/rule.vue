<template>
  <!--规则-->
  <div id="hello" style="width:100%;background:#F8515E;padding:0.266666rem 0;display: none;">
     
        
        
        
     <van-popup v-model="show1s"><van-loading type="spinner" /></van-popup>
     <div class="xuan_xiang_box_c"></div>
  </div>
</template>

<script>

import store from '../../vuex/store.js'
import router from '../../router/index.js'
import axios from 'axios'
export default {
  
  data () {
    return {
    	show1s:false,
    	
    	
    	
    }
  },
  methods:{
  	
  },
  mounted(){
  	  window.scrollTo(0,0);  
  	  store.state.btn_show = true;
  	  store.state.bottom_1 = false;
      store.state.bottom_2 = false;
      store.state.bottom_3 = false;
      store.state.bottom_4 = false;
      
//	    window.setTimeout(()=>{
//	  	     var a = document.documentElement.clientHeight+'px';
//         $("#hello").css('height',a)
//         $("#hello").fadeToggle()
//	    },500)
	    
  },
  
}
</script>

<style scoped>
	
</style>
