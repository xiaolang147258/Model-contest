<template>
  <!--视频-->
  <div id="hello" style="width:100%;background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);padding-bottom:0.8rem;">
     
      <div class="hello_box">
      	   <div class="hello_box_c" v-for="(i,index) in active" @click="go_details(i)">
      	   	   <div class="img_box">
      	   	   	   <img class="img_box_img1" :src="i.pic" alt="" />
      	   	   	   <img class="bo" src="../../static/img/xin/bofanganniu.png" alt="" />
      	   	   </div>
      	   	   <p class="hello_box_c_pbox">{{i.title}}</p>
      	   	   <p class="piao">浏览量：<a>{{i.hits_numbers}}</a>次</p>
      	   </div>
      </div>  
        
        
        
        
     <van-popup v-model="show1s"><van-loading type="spinner" /></van-popup>
     <div class="xuan_xiang_box_c"></div>
  </div>
</template>

<script>

import store from '../vuex/store.js'
import router from '../router/index.js'
import axios from 'axios'
export default {
  
  data () {
    return {
    	show1s:true,
    	active:[],
    	
    	
    }
  },
  methods:{
  	git_act(){
  		 axios.get('tidbits?token='+localStorage.token).then(res=>{
        	    	  if(res.status = 200){
        	    	 	      console.log(res.data.data.TidbitsList)
        	    	 	      this.active = res.data.data.TidbitsList;
        	    	 	      this.show1s =false;
        	    	  }
                }).catch(err=>{
                	 console.log(err);
                	 this.$toast({message:'网络错误',duration:3000});
                });
  	},
  	
  	go_details(i){
  		 localStorage.id = i.id
  		 router.push({
	   	   path: `/vide_workes_details&${i.id}`,
  	   });
  	   
  	},
  	
  	
  },
  mounted(){
  	  this.git_act()
  	  
  	  window.scrollTo(0,0);  
  	  store.state.btn_show = true;
  	  store.state.bottom_1 = false;
      store.state.bottom_2 = false;
      store.state.bottom_3 = false;
      store.state.bottom_4 = true;
      
//	    window.setTimeout(()=>{
//	  	     var a = document.documentElement.clientHeight+'px';
//         $("#hello").css('height',a)
//         $("#hello").fadeToggle()
//	    },500)
	    
  },
  
}
</script>

<style scoped>
	.piao a{
		font-size: 0.373333rem;
		font-weight: 600;
	}
	.piao{
		 font-size: 0.32rem;
		 color: #FF5958;
		 margin-top: 0.18rem;
	}
	.hello_box_c_pbox{
		width: 3.733333rem;
		height:0.9rem;
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.213333rem;
		display: -webkit-box;  
		display: -moz-box;  
		overflow: hidden;  
		text-overflow: ellipsis;  
		word-break: break-all;  
		-webkit-box-orient: vertical;  
		-webkit-line-clamp:2;
	}
	.bo{
		width: 0.973333rem;
		height: 0.973333rem;
		position: absolute;
		top:1.373333rem;
		left:1.373333rem;
	}
	.img_box_img1{
		width: 100%;
		min-height: 100%;
	}
	.img_box{
		width: 3.733333rem;
		height: 3.733333rem;
		border:0.08rem solid rgba(255,89,88,1);
opacity:1;
border-radius:0.08rem;
   overflow: hidden;
   position: relative;
   
	}
	.hello_box_c{
		width: 4.2rem;
		box-shadow:0px 0.053333rem 0.133333rem rgba(243,192,192,1);
opacity:1;
border-radius:0.133333rem;
    text-align: center;
    margin-bottom:0.533333rem;
    padding: 0.24rem 0.226666rem 0.266666rem 0.226666rem;
    height: 6.266666rem;
	}
	.hello_box{
		  width:9.2rem;
     height:12.846666rem;
    background:rgba(255,255,255,1);
opacity:1;
border-radius:0.266666rem;
margin: 0.413333rem auto 0 auto;
     overflow:scroll;
     display:-webkit-flex; 
     display:flex;
		 flex-direction:row;
		 flex-wrap:wrap;
		 justify-content:space-between;
		 padding: 0.266666rem;
		 padding-bottom: 0;
     
	}
	  #hello{
	  	position:fixed;
	  	top: 0;
	  	left: 0;
	  	height: 100%;
	  }
</style>
