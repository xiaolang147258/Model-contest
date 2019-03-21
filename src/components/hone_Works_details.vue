<template>
  <!--作品详情-->
  <div id="hello" style="width:100%;background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);padding-bottom:1.306666rem;">
      <div class="top_img"><img src="../../static/img/xin/title.png" /></div>
        <div class="act_box">
        	<div class="val_box">
        		<div class="val_box_c">
        			<div class="tou_box"><img src="../../static/img/xin/touxiang.png" alt="" /></div>
        			<div class="val_box_c_p"><p>LUCY</p><div>12235</div></div>
        			<div class="val_box_c_text">
        				我是露丝，因为遇见秀我而自信，遇见不同的自己，感谢遇见
        				感谢遇见...我是露丝，因为遇见秀我而自信，遇见不同的自己，
        				感谢遇见...我是露丝，因为遇见秀我而自信，遇见不同的自己，
        				感谢遇见...我是露丝，因为遇见秀我而自信，遇见不同的自己，
        				感谢遇见...我是露丝，因为遇见秀我而自信，遇见不同的自己，感谢遇见...
        			</div>	 
        		</div>
        		<div class="shuju_box">
        				<div class="shuju_box_c">
        					<p style="font-size:0.426666rem;font-weight:600;">21235</p><p style="font-size: 0.373333rem;">当前点赞</p>
        				</div> 
        				<div class="shuju_box_c" style="margin-left:1.186666rem;">
        					<p style="font-size:0.426666rem;font-weight:600;">21235</p><p style="font-size: 0.373333rem;">排名</p>
        				</div> 
        				<div class="shuju_box_c" style="width: 2.24rem;float:right;margin-right:0.613333rem;">
        					<p style="font-size:0.426666rem;font-weight:600;">21235</p><p style="font-size: 0.373333rem;">距上一名还差</p>
        				</div> 
        	    </div>
        	</div>
        	<p class="jianjie">选手简介</p>
        	<div class="video_box">
        		<img src="../../static/img/_20190319182041.png" alt="" />
        		<video  class="video" ref="video" controls="controls"  webkit-playsinline='true' playsinline='true'></video>
        	</div>
        	<div class="img_boxa">
        		 <div class="img_boxa_c"><img src="../../static/img/xin/asd.png"/></div>
        		 <div class="img_boxa_c"><img src="../../static/img/xin/asd.png"/></div>
        	</div>
        	
        </div>
        
      <div class="btn_box">
      	<p @click="to_home">首页</p><div class="shuxian"></div><p @click="to_sign">我要报名</p><div class="btn_box_btn">给他/她点赞</div>
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
    	show1s:false,
    	
    	
    	
    }
  },
  methods:{
  	 to_home(){
  	 	router.push({
  	   	 path:'./home',
  	   });
  	 },
  	 to_sign(){
  	 	router.push({
  	   	 path:'./Sign_up',
  	   });
  	 },
  	 
  },
  mounted(){
  	  window.scrollTo(0,0);  
  	  store.state.btn_show = false;
  	  
      
	    this.$refs.video.src ='http://video-vote.cieo.com.cn/upload/2019-03-21/ns6nho0mw9i1553140198345Netscape7tjf4ehet9ce872b3b8be8ac09d7c879f92ae74219.mp4'
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
	}
	.video_box img{
		width: 100%;
		min-height: 100%;
	}
	.video_box{
		width: 100%;
		height: 5.386666rem;
		border-radius:0.266666rem;
		overflow: hidden;
		position: relative;
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
		width: 7.386666rem;
		font-size: 0.32rem;
		line-height:0.48rem;
		color: white;
		margin-top: 0.28rem;
		text-align:justify;
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
