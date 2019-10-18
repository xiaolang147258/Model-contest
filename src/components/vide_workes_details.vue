<template>
  <!--作品详情-->
  <div id="hello" style="width:100%;background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);padding-bottom:1.306666rem;">
      <div class="top_img"><img src="../../static/img/xin/title.png" /></div>
        <div class="act_box">
        	<div class="val_box">
        		
        			<div class="val_box_c_text" v-html="act.site"></div>	 
        				  
        	</div>
        	<p class="jianjie">{{act.title}}</p>
        	<div class="video_box">
				<video  class="video" :src="act.url" type="video/mp4" controls="controls" webkit-playsinline='true' playsinline='true'></video>
			</div>
        	
        </div>
        
      <div class="btn_box">
      	<p @click="to_home">首页</p><div class="shuxian"></div><p @click="to_sign">我要报名</p>
		<!-- <div @click="like_click" class="btn_box_btn">给他/她点赞</div> -->
      </div>
     <van-popup v-model="show1s"><van-loading type="spinner" /></van-popup>
     <div class="xuan_xiang_box_c"></div>
  </div>
</template>

<script>



import store from '../vuex/store.js'
import router from '../router/index.js'
import axios from 'axios'
import { ImagePreview } from 'vant';
export default {
  
  data () {
    return {
    	show1s:true,
    	act:'',
    	
    }
  },
  methods:{
  	// like_click(){
  	// 	axios.get('api/enroll-likes?id='+this.act.id+'&token='+localStorage.token).then(res=>{
   //      	    	  if(res.code = 200){
   //      	    	 	      console.log(res.data,'点赞');
   //      	    	 	      this.$toast({message:'点赞成功',duration:2000});
   //      	    	 	      this.git_act();
   //      	    	  }else{
   //      	    	  	   this.$toast({message:'你已经对当前选手点赞过了',duration:3000});
   //      	    	  }
   //              }).catch(err=>{
   //              	 console.log(err);
   //              	 this.$toast({message:'网络错误',duration:3000});
   //              });
  	// },
  	
  	
  	
  	 git_act(){
  	 	 axios.get('wechat/tidbits-view?id='+this.$route.params.id+'&token='+localStorage.token).then(res=>{
        	    	  if(res.code = 200){
        	    	 	      console.log(res.data.data,'详情数据');
        	    	 	      this.act = res.data.data;
        	    	 	      this.show1s = false;
        	    	  }
                }).catch(err=>{
                	 console.log(err);
                	 this.$toast({message:'网络错误',duration:3000});
                });
  	 },
  	
  	 to_home(){
  	 	router.replace({
  	   	 path:'./home',
  	   });
  	 },
  	 to_sign(){
  	 	router.replace({
  	   	 path:'./Sign_up',
  	   });
  	 },
  	 
  },
  mounted(){
	  
  	  window.scrollTo(0,0);
  	  store.state.btn_show = false;
      this.git_act()
	    // this.$refs.video.src ='http://model-competition.panyu.cn/uploads/files/201905/05132310572_200184.mp4'
  },
  
}
</script>

<style scoped>
	.img_boxa_c img{
		width: 100%;
		
		min-height:100%;
	}
	.img_boxa_c{
		width: 4.453333rem;
		height: 100%;
		border-radius:0.266666rem;
		overflow: hidden;
	}
	.img_boxa{
		width: 100%;
		height: 5.386666rem;
		margin-top: 0.266666rem;
		 display:-webkit-flex; 
                 display:flex;
		 flex-direction:row;
		 flex-wrap:wrap;
		 justify-content:space-between;
	}
	.video{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius:0.266666rem;
	}
	.video_box img{
		width: 100%;
		min-height: 100%;
	}
	.video_box{
		width:76%;
		height:12.386rem;
		border-radius:0.266666rem;
		overflow: hidden;
		position: relative;
		margin: 0 auto;
		background: black;
	}
	.jianjie{
		width: 100%;
		font-size: 0.426666rem;
		font-weight: 600;
		color: white;
		margin: 0.546666rem 0 0.28rem 0;
	}
	.tou_box img{
		width: 100%;
		min-height:100%;
	}
	.tou_box{
		width: 1.68rem;
		height: 1.68rem;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		border-radius: 50%;
	}
	.shuju_box_c{
		width: 1.733333rem;
		height: 100%;
		float: left;
		color: white;
		text-align: center;
	}
	.shuju_box{
		width: 100%;
		height: 1.2rem;
		margin-top: 0.733333rem;
		padding-left: 0.666666rem;
	}
	.val_box_c_text{
		width:100%;
		font-size: 0.32rem;
		line-height:0.48rem;
		color: white;
		margin-top: 0.28rem;
		text-align:justify;
	}
	.val_box_c_text p{
		width:100%;
		font-size: 0.32rem;
		line-height:0.48rem;
		color: white;
		margin-top: 0.28rem;
		text-align:justify;
	}
	.val_box_c_text img{
		width: 100%;
	}
	.val_box_c_text p img{
		width: 100%;
	}
	.val_box_c_p div{
		width:1.333333rem;
height:0.56rem;
background:rgba(255,127,100,1);
opacity:1;
border-radius:0.346666rem;
text-align: center;
line-height: 0.56rem;
font-size: 0.293333rem;
color: white;
float: left;
margin-left: 0.266666rem;
	}
	.val_box_c_p p{
		font-size: 0.373333rem;
		color: white;
		float: left;
	}
	.val_box_c_p{
		height: 0.56rem;
		line-height: 0.56rem;
	}
	.val_box_c{
		width: 100%;
		padding-left: 1.933333rem;
		position: relative;
	}
	.val_box{
		width: 100%;
		padding-bottom: 0.313333rem;
		border-bottom:0.013333rem solid #EBACAC;
	}
	.act_box{
		width: 9.2rem;
		margin: 0.76rem auto;
	}
	.btn_box_btn{
		width: 2.72rem;
		height: 0.96rem;
		float: right;
		background:linear-gradient(180deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);
        opacity:1;
        border-radius:0.48rem;
        text-align: center;
        line-height: 0.96rem;
        font-size: 0.373333rem;
        color: white;
        margin: 0.173333rem 0.413333rem 0 0;
	}
	.shuxian{
		 width: 0.023333rem;
		 height: 0.72rem;
		 background: #EBACAC;
		 float: left;
		 margin: 0.306666rem 0.453333rem 0 0.453333rem;
	}
	.btn_box p{
		font-size: 0.373333rem;
		color: #FF5958;
		float: left;
		font-weight: 600;
	}
	.btn_box{
		width: 100%;
		height: 1.306666rem;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 500;
		line-height: 1.306666rem;
		padding-left: 0.8rem;
	}
	.top_img img{
		width: 100%;
		height: 100%;
	}
	.top_img{
		width: 100%;
		height: 2.106666rem;
	}
</style>
