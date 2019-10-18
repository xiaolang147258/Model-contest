<template>
  <!--作品详情-->
  <div id="hello" style="width:100%;background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);padding-bottom:1.306666rem;">
      <div class="top_img"><img src="../../static/img/xin/title.png" /></div>
        <div class="act_box">
        	<div class="val_box">
        		<div class="val_box_c">
        			<!-- <div class="tou_box"><img :src="act.pic" alt="" /></div> -->
        			<div class="val_box_c_p"><p>{{act.stagename}}</p><div>{{act.id}}</div></div>
        			<div class="val_box_c_text">
                       <p>性别：{{act.sex}}<a></a>&nbsp;&nbsp;&nbsp;&nbsp;身高：{{act.stature_height}}&nbsp;&nbsp;&nbsp;&nbsp;三围：{{act.stature_measurements}}<a></a></p>  
					   <p>现居城市：{{act.city}}<a></a>&nbsp;&nbsp;&nbsp;&nbsp;就读院校：{{act.schools}}</p>  
					   <p>兴趣特长/荣誉：{{act.speciality}}<a></a></p>  
        			</div>	 
        		</div>
        		<div class="shuju_box">
        				<div class="shuju_box_c">
        					<p style="font-size:0.426666rem;font-weight:600;">{{act.like_numbers}}</p><p style="font-size: 0.373333rem;">当前点赞</p>
        				</div> 
        				<div class="shuju_box_c" style="margin-left:1.186666rem;">
        					<p style="font-size:0.426666rem;font-weight:600;">{{act.ranking}}</p><p style="font-size: 0.373333rem;">排名</p>
        				</div> 
        				<div class="shuju_box_c" style="width: 2.24rem;float:right;margin-right:0.613333rem;">
        					<p style="font-size:0.426666rem;font-weight:600;">{{act.disparity}}</p><p style="font-size: 0.373333rem;">距上一名还差</p>
        				</div> 
        	    </div>
        	</div>
        	<p class="jianjie">选手简介</p>
        	<div class="video_box">
        		<img :src="act.front_pic" alt="" />
        		<video class="video" ref="video" controls="controls" :src="act.url" webkit-playsinline='true' playsinline='true'></video>
        	</div>
        	<div class="img_boxa">
        		 <div @click="tu_click(0)" class="img_boxa_c"><img :src="act.pic"/></div>	
        		 <div @click="tu_click(1)" class="img_boxa_c"><img :src="act.front_pic"/></div>
        	</div>
        	
			<p class="pin_title">选手评价（{{commit_box.length}}条）</p>
			
			<div class="pin_box" v-for="(i,index) in commit_box">
				<div class="pin_box_t1">
					 <img :src="i.pic" alt=""><p>{{i.username}}</p><a>{{i.datetime}}</a>
				</div>
				<div class="pin_pbox">{{i.site}}</div>
			</div>
        </div>
		
     <!-- 评论组件 -->
		<van-popup v-model="pin_show1">
			 <mu-scale-transition>
                   <div class="pin" v-show="pin_show2">
					<p>填写评论 :</p>
				    <textarea id="text" onkeydown="if(event.keyCode==32||event.keyCode==13){return false;}" v-model="text_val" placeholder="发布评论，最多输入200个字符" maxlength="200"></textarea> 	  
					  <mu-button @click='guan' style='background:#FFDF63;margin-left:0.966666rem;' class='btn' >关闭</mu-button>
                      <mu-button @click='go_pin' style='float: right;margin-right:0.966666rem;' class='btn' >发布评论</mu-button>
				   </div>
             </mu-scale-transition>
		</van-popup>
		
		
	 <!-- ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, -->
	 
      <div class="btn_box">
      	<div @click="to_sign" class="biao_boxx" style="width:3.386666rem;">
			 <img style="width:0.333333rem;height:0.32rem;margin-left:0.72rem;" src="../../static/img/xin/baoming.png" alt="">
			 <p>我要报名</p>
		</div>
		<div @click="pin_click" class="biao_boxx" style="width:2.76rem;border-left:0.023333rem solid rgba(235,172,172,1);border-right:0.023333rem solid rgba(235,172,172,1);">
			 <img style="width:0.36rem;height:0.333333rem;margin-left:0.76rem;" src="../../static/img/xin/pinglun (1).png" alt="">
			 <p>评价</p>
		</div>
		<div  @click="like_click" class="biao_boxx" style="width: 3.84rem;">
			 <img style="width:0.4rem;height:0.36rem;margin-left:0.6rem;" src="../../static/img/xin/dianzan.png" alt="">
			 <p>给他 / 她点赞</p>
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
import { ImagePreview } from 'vant';
export default {
  
  data () {
    return {
    	show1s:true,
    	act:'',
    	video_show:true,
		commit_box:[],//评论列表数据
		pin_show1:false,
		pin_show2:false,
		text_val:'',
		
    }
  },
  methods:{
	  guan(){
		  this.pin_show1=false;
		  this.pin_show2=false;
		  $('.video').show();
	  },
	  
    go_pin(){//执行点评事件
	  if(this.text_val!=''){
		                      var len =  6;
		  　            　     var $chars='12345678';
		  　　                 var maxPos = $chars.length;
		  　　                 var pwd = '';
		  　                    for(var i = 0; i < len; i++){
		  　　　　                 pwd += $chars.charAt(Math.floor(Math.random()*maxPos));
		  　　                  }
		     
		  axios.get('wechat/comments-save?site='+this.text_val+'&enroll_id='+this.act.id+'&uid='+pwd+'&token='+localStorage.token).then(res=>{
			    	  if(res.code = 200){
			    	 	      console.log(res.data.data,'评论');
			    	 	      this.$toast({message:'评论成功！',duration:3000});
							  this.pin_show2 = false; this.pin_show1 = false;this.text_val = '';
							  this.commit_box = res.data.data.Comment;
							  $('.video').show();
			    	  }else{
			    	  	   this.$toast({message:res.data.msg,duration:3000});
			    	  }
		        }).catch(err=>{
		        	 console.log(err);
		        	 this.$toast({message:'网络错误',duration:3000});
		        });
	  }else{
		  this.$toast({message:'评论内容不能为空！',duration:3000});
	  }
		
	},
    pin_click(){//点击弹出评论框
		this.pin_show1 = true;
		this.pin_show2=false;
		window.setTimeout(()=>{
			this.pin_show2 = true;
		},300)
		$('.video').hide();
	},	  
	  
  	like_click(){
  		axios.get('wechat/enroll-likes?id='+this.act.id+'&token='+localStorage.token).then(res=>{
        	    	  if(res.code = 200){
        	    	 	      console.log(res.data.data,'点赞');
        	    	 	      this.$toast({message:'点赞成功',duration:2000});
        	    	 	      this.git_act();
        	    	  }else{
        	    	  	   this.$toast({message:'你已经对当前选手点赞过了',duration:3000});
        	    	  }
                }).catch(err=>{
                	 console.log(err);
                	 this.$toast({message:'网络错误',duration:3000});
                });
  	},
  	
  	tu_click(i){
		$('.video').hide();
  		var a = [];
  		a[0] = this.act.pic;
		a[1]=this.act.front_pic;
  		ImagePreview({images:a,
		    startPosition:i,
			onClose(){$('.video').show();}
			});
    },
  	
  	 git_act(){
  	 	 axios.get('wechat/enroll-view?id='+this.$route.params.id+'&token='+localStorage.token).then(res=>{
        	    	  if(res.code = 200){
        	    	 	      console.log(res.data.data,'详情数据');
        	    	 	      this.act = res.data.data;
        	    	 	      this.show1s = false;
							  this.commit_box = res.data.data.Comment;
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
  	  
//	  console.log(this.$route.params.id);
      this.git_act()
	    // this.$refs.video.src ='http://video-vote.cieo.com.cn/upload/2019-03-21/ns6nho0mw9i1553140198345Netscape7tjf4ehet9ce872b3b8be8ac09d7c879f92ae74219.mp4'
  },
  
}
</script>

<style scoped>
	.btn{
		width:2.733333rem;
height:0.96rem;
border:0.013333rem solid rgba(240,61,94,1);
background:#4DB1E5;
border: none;
opacity:1;
border-radius:0.48rem;
float: left;
font-size: 0.373333rem;
color: white;
margin-top: 0.193333rem;
	}
	#text{
		width: 100%;
		padding: 0.266666rem;
		font-size: 0.373333rem;
		height: 4rem;
	}
	.pin p{
		font-size: 0.426666rem;
		margin-bottom: 0.266666rem;
		color:#FE4B50;
		font-weight: 600;
	}
	.pin{
		width: 8.72rem;
		height: 6.926666rem;
		background: white;
		border-radius: 0.266666rem;
		padding:0.4rem;
	}
	
	.pin_pbox{
		width: 8.32rem;
		margin: 0.133333rem 0 0 0.88rem;
		font-size: 0.373333rem;
		color: white;
		text-align:justify;
		line-height:0.5rem;
	}
	.pin_box_t1 a{
		font-size: 0.293333rem;
		color: white;
		float: right;
		
	}
	.pin_box_t1 p{
		font-size: 0.346666rem;
		color: white;
		float: left;
	}
	.pin_box_t1 img{
		width: 0.72rem;
		height: 0.72rem;
		float: left;
		margin-right: 0.16rem;
		border-radius: 50%;
	}
	.pin_box_t1{
		width: 100%;
		height: 0.72rem;
		line-height: 0.72rem;
	}
	.pin_box{
		width: 100%;
		padding-bottom: 0.4rem;
	}
	.pin_title{
		font-size: 0.426666rem;
		color: white;
		font-weight: 600;
		margin: 0.8rem 0 0.48rem 0;
	}
	.biao_boxx img{
		float: left;
		margin-top: 0.186666rem;
		margin-right:0.146666rem;
	}
	.biao_boxx{
		height: 0.72rem;
		line-height: 0.72rem;
		text-align: center;
		color: #FF5958;
		font-size: 0.373333rem;
		float: left;
		margin-top: 0.306666rem;
	}
	
	
	
	.val_box_c_text p{
		/* float: left; */
		/* margin-right:0.133333rem; */
		line-height: 0.933333rem;
		
	}
	.img_boxa_c img{
		min-width: 100%;
		height:100%;
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
		z-index:0;
		border-radius:0.266666rem;
		/* background: #000000; */
	}
	.video_box img{
		height: 100%;
		min-width:100%;
		/* min-height: 100%; */position: relative;z-index:0;
	}
	.video_box{
		width:76%;
		height:12.386rem;
		border-radius:0.266666rem;
		overflow: hidden;
		position: relative;
		z-index: 0;
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
		margin-top: 0.533333rem;
		padding-left: 0.666666rem;
	}
	.val_box_c_text{
		width:100%;
		font-size: 0.373333rem;
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
		/* padding-left: 1.933333rem; */
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
		/* padding-left: 0.8rem; */
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
