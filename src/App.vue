<template>
  <div id="app"  >
  	
  <transition :name="transitionName" mode=""> 
     <router-view class="transitionBody"></router-view>
  </transition> 
   
   <div v-show="$store.state.btn_show" style="width:100%;height: 1.306666rem;float: left;"></div>
   
   <div v-show="$store.state.btn_show" class="btn">
  	<div style="width: 8.146666rem;height:100%;margin:0 auto;">
  	 <div @click="btn_c1" class="btn_box">
  	 	 <img :src="$store.state.bottom_1?'static/img/shouye_a.png':'static/img/shouye.png'"/>
  	   <p :class="{font_color:$store.state.bottom_1,font_color_s:$store.state.bottom_1==false}">首页</p>
  	 </div>  
  	 
  	 <div @click="btn_c2" style="margin-left:1.866666rem;" class="btn_box">
  	 	<img :src="$store.state.bottom_2?'static/img/baoming_a.png':'static/img/baoming.png'"/>
  	 	<p :class="{font_color:$store.state.bottom_2,font_color_s:$store.state.bottom_2==false}">报名</p>
  	 </div>
  	 
  	 <div @click="btn_c3" style="margin-left:1.866666rem;" class="btn_box">
  	 	<img :src="$store.state.bottom_3?'static/img/cai.png':'static/img/zahngcheng.png'"/>
  	 	<p :class="{font_color:$store.state.bottom_3,font_color_s:$store.state.bottom_3==false}">章程</p>
  	 </div> 
  	 
  	 <div @click="btn_c4" style="float:right;text-align:center;" class="btn_box">
  	 	<img :src="$store.state.bottom_4?'static/img/shipin_a.png':'static/img/shipin.png'"/>
  	 	<p :class="{font_color:$store.state.bottom_4,font_color_s:$store.state.bottom_4==false}">视频</p>
  	 </div>
  	</div> 
  </div>
   
  </div>
</template>

<script>
import router from './router/index.js'
import store from './vuex/store.js'

export default {
  name: 'App',
  store,
  data(){
  	return{
  		  transitionName:'transitionLeft'
  	}
  },
  
  watch: { 
  '$route' (to, from) { 
  	
   const arr = ['/home','/Sign_up','/Charter','Video'];
   const compare = arr.indexOf(to.path)>arr.indexOf(from.path);
   this.transitionName = compare ? 'transitionLeft' : 'transitionRight';
   
  } 
 },
  
 methods:{
 	  btn_c1(){
 	  	 router.push({
  	   	 path:'./home',
  	   });
  	   
 	  },
 	  btn_c2(){
 	  	 router.push({
  	   	 path:'./Sign_up',
  	   });
  	  
 	  },
 	  btn_c3(){
 	  	router.push({
  	   	 path:'./Charter',
  	   });
  	   
 	  },
 	   btn_c4(){
 	  	router.push({
  	   	 path:'./Video',
  	   });
  	   
 	  },
 },
 mounted(){
 	 
 }
}
</script>

<style scoped="scoped">
	.hello{
		  /*padding-bottom:1.306666rem;*/
		  
	}
	
	.font_color{
		 color: #FF002D;
	}
	.font_color_s{
		 color: #BABABA;
	}
	.btn_box{
		 width:0.74rem;
		 height: 100%;
		 float: left;
		 text-align: center;
	}
	.btn_box img{
		 width: 0.64rem;
		 height: 0.64rem;
		 margin-top:0.1rem;
	}
	.btn_box p{
		 font-size:0.336666rem;
		 /*color: #BABABA;*/
	}
	
	#app {
		 /*padding-bottom:1.306666rem;*/
		 
	}
	
	.btn{
		 width: 100%;
		 height: 1.306666rem;
		 background: white;
		 position: fixed;
		 bottom: 0;
		 left: 0;
		 z-index: 200;
		 /*padding: 0 1.346666rem;*/
	}
	.transitionBody{
 transition: all 0.4s ease; /*定义动画的时间和过渡效果*/
}
 
.transitionLeft-enter,
.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0); 
  position: absolute;
  top: 0;
  /*min-height: 100%;*/
   /*当左滑进入右滑进入过渡动画*/
}
 
.transitionLeft-leave-active,
.transitionRight-enter {
  -webkit-transform: translate(-100%, 0); 
  transform: translate(-100%, 0); 
  position: absolute;
  top: 0;
  /*min-height: 100%;*/
}

</style>
