<template>
  <!--报名-->
  <div id="hello" style="width:100%;background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);padding-bottom:1.426666rem;">
     <div class="top_box">
     	  <div class="top_box_c"><p style="font-size:0.426666rem;font-weight:600;">21235</p><p style="font-size:0.373333rem;">参赛艺人</p></div>
        <div style="margin-left:1.72rem;" class="top_box_c"><p style="font-size:0.426666rem;font-weight:600;">21235</p><p style="font-size:0.373333rem;">累计投票</p></div>
        <div style="margin-left:1.72rem;" class="top_box_c"><p style="font-size:0.426666rem;font-weight:600;">21235</p><p style="font-size:0.373333rem;">访问量</p></div>
     </div>
     <div class="nai_box">
     	   
     	   <div class="inp_a"><div class="name"><p>姓名：</p></div><input type="text" placeholder="请输入姓名"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>艺名：</p></div><input type="text" placeholder="请输入艺名"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>年龄：</p></div><input type="number" maxlength="2" placeholder="请输入年龄"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>性别：</p></div>
     	     <div @click="sexa=0" style="margin-right:0.4rem;" :class="{sexs:sexa==0,sex:sexa!=0}">男</div>
     	     <div @click="sexa=1" :class="{sexs:sexa==1,sex:sexa!=1}">女</div> <a>*</a>
     	   </div>
     	   
     	   <div class="inp_a"><div class="name"><p>真实身高：</p></div><input type="number" placeholder="请输入身高 CM"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>三围：</p></div><input type="number" maxlength="2" placeholder="请输入三围 CM"/><a>*</a></div>
   <!--上传图片-->  	   
     	   <div class="inp_a" style="height:1.393333rem;"><div class="name"><p>形象照：</p></div>
     	      <div class="img1">
     	      	<div @click="lan_img(1)" style="width: 100%;height: 100%;overflow: hidden;">
     	      		<img class="feng" :src="img_url1" /></div>
     	      	  <van-uploader v-show='inp1_show' class='inp1' :after-read="onRead1"></van-uploader> 
     	      	  <img @click="x_img(1)" v-show="inp1_show==false" class="xa" src="../../static/img/guanx.png" />
     	      </div>
     	      
     	      <div class="img1" style="margin-left:0.266666rem;">
     	      	<div @click="lan_img(2)" style="width: 100%;height: 100%;overflow: hidden;">
     	      		<img class="feng" :src="img_url2" /></div>
     	      	  <van-uploader v-show='inp1_show2' class='inp1' :after-read="onRead2"></van-uploader> 
     	      	  <img @click="x_img(2)" v-show="inp1_show2==false" class="xa" src="../../static/img/guanx.png" />
     	      </div>
     	      <a>*</a>
     	   </div>
 <!--上传视频----------------------------------------------------------------------------------------------------> 	   
     	   <div class="inp_a" style="height:1.393333rem;">
     	   	  <div class="name"><p>小于100M视频：</p></div>
     	      <div class="img1">
     	      	<div @click="video_shows=true" style="width: 100%;height:100%;overflow:hidden;position:relative;">
     	      		<img class="feng" :src="videoimg" />
     	      		<img class="bo" v-show="video_show==false" src="../../static/img/bofanganniu.png" alt="" />
     	      	</div>
     	      	  <input style="width:100%;height:100%;opacity:0;" @change="onFileChange"  v-show='video_show' class='inp1'  type="file" accept="video/*">
     	      	  <img @click="video_x" v-show="video_show==false" class="xa" src="../../static/img/guanx.png" />
     	      </div>
     	      <a>*</a>
 <!--视频预览-----------------------------------------------------------------------------------------------------> 	    	      
     	     <mu-fade-transition>
     	  	  	 	   <div @click="video_shows=false" v-show="video_shows" style="width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:300;top: 0;left: 0;">
     	  	  	 	  	  <mu-slide-top-transition>
                         <video class="video" v-show="video_shows" id="video" ref="video" controls="controls" webkit-playsinline='true' playsinline='true'></video>
                     </mu-slide-top-transition>
     	  	  	 	   </div>
           </mu-fade-transition>  
     	  </div>
     	  
     	  <div class="inp_a"><div class="name"><p>微信号：</p></div><input type="text" placeholder="请输入微信号"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>抖音号：</p></div><input type="text" placeholder="请输入抖音号"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>微博：</p></div><input type="text" placeholder="请输入微博名"/><a>*</a></div>
     	  
     	   <div class="inp_a"><div class="name"><p>手机号码：</p></div><input max-length="11" type="number" placeholder="请输入手机号码"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>现居城市：</p></div><input type="text" placeholder="请输入现居城市"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>就读/毕业院校：</p></div><input type="text"  placeholder="请输入就读/毕业院校"/><a>*</a></div>
     	   
     	   <div class="inp_a" style="height:2.68rem;"><div class="name"><p>兴趣特长/荣誉：</p></div>
     	         <textarea type="text"  placeholder="请输入兴趣特长/荣誉"/><a>*</a>
     	   </div>
     	   
     	   <p class="bto_p">（带*号为必填，所有隐私信息不公开）</p>
     	   
     	   <div class="xuzi"><img @click="gou_show=!gou_show" :src="gou_show?'static/img/xin/gou.png':'static/img/xin/gou_a.png'" alt="" /><a>报名须知：</a></div>
     	   
     	   <div class="go_jiao">提交报名</div>
     	   	
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
import { Notify } from 'vant';
export default {
  
  data () {
    return {
    	gou_show:false,
    	
    	
    	show1s:false,
    	sexa:0,
    	
    	video_shows:false,
    	video_show:true,
    	videoimg:'static/img/imgjia.png',
    	video_id:'',
    	
    	img_url1:'static/img/imgjia.png',
    	inp1_show:true,
    	img_url1_s:'',
    	
    	img_url2:'static/img/imgjia.png',
    	inp1_show2:true,
    	img_url2_s:'',
    	
    }
  },
  methods:{
  	creatImg(file){//生成图片
    
       
    },
  	
  	video_x(){//删除视频
  		this.video_show = true;
  		this.video_id = '';
  		this.$refs.video.src = '';
  		this.videoimg = 'static/img/imgjia.png'
  	},
  	onFileChange(e){//穿入视频
  		 var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        //视频上传
        console.log(files,'视频')
       
        let size =  files[0].size/1024;   
       console.log(size,'  视频大小')
       if(size>=100000){
       	    this.$toast({message:'视频大小不能超过100M',duration:2000}); 
       }else{
       	        this.video_show = false;
            //视频预览
              	 var reader = new FileReader();
              	 this.file = files[0];
              	 var _this = this
              	 reader.onload = function(){
                 	  _this.$refs.video.src = this.result;
              	 };
              	 reader.readAsDataURL(this.file);
              	  Notify({
                     message: '上传成功',
                    duration: 1000,
                    background: '#1989fa'
                  });
                  
                  this.creatImg(files)
                  
          }  
  	},
  	
  	
  	x_img(i){//删除照片
  		if(i==1){
  			  this.img_url1 = 'static/img/imgjia.png';this.inp1_show = true;this.img_url1_s='';
  		}else{
  			  this.img_url2 = 'static/img/imgjia.png';this.inp1_show2 = true;this.img_url2_s='';
  		}
  	},
  	lan_img(i){//预览图片
  		 let c = i==1?this.img_url1:this.img_url2;
  		 let a = [];a.push(c);
  		 ImagePreview(a);
  	},
  	 onRead1(file){//上传图片1
  	 	    console.log(file,'图片1');
  	 	    this.img_url1 = file.content;
  	 	    this.inp1_show = false;
  	 },
  	onRead2(file){//上传图片2
  	 	    console.log(file,'图片2');
  	 	    this.img_url2 = file.content;
  	 	    this.inp1_show2 = false;
  	 },
  	
  	
  	
  },
  mounted(){
  	  window.scrollTo(0,0);  
  	  store.state.btn_show = true;
  	  store.state.bottom_1 = false;
      store.state.bottom_2 = true;
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
	.go_jiao{
		width: 100%;
		height: 0.96rem;
		line-height: 0.96rem;
		text-align: center;
		background: white;
		font-size: 0.426666rem;
		color: #FF7F64;
		font-weight: 600;
		border-radius:10px;
		margin-top: 0.733333rem;
	}
	.xuzi a{
		 color: white;
		 float: left;
	}
	.xuzi img{
		 width: 0.52rem;
		 height: 0.52rem;
		 float: left;
		 margin: 0 0.133333rem 0 0.133333rem;
	}
	.xuzi{
		width: 100%;
		height: 0.52rem;
		 margin-top:0.296666rem;
		 color:white;
		 font-size: 0.346666rem;
		 font-weight: 600;
		 line-height: 0.52rem;
	}
	.bto_p{
		font-size: 0.346666rem;
		color: white;
		margin-top: 0.4rem;
	}
	.inp_a textarea{
		height: 2.68rem;
		font-size: 0.346666rem;
		padding:0.186666rem 0.266666rem 0 0.266666rem;
		color:rgba(235,172,172,1);
		border: none;
		border-radius:0.133333rem;
		background: #B42942;
		float: left;
		width: 5.12rem;
		line-height:0.56rem;
	}
	.video{
		width:100%;
		height: 6.333333rem;
		margin: 4.666666rem auto;
		background: black;
	}
	.bo{
		width: 0.533333rem;
		height: 0.533333rem;
		position: absolute;
		top: 0.426666rem;
		left: 0.426666rem;
	}
	.xa{
		width:0.533333rem;
		height:0.533333rem;
		position: absolute;
		top:-0.266666rem;
		right:-0.266666rem;
	}
	.inp1{
		width: 100%;
		height:100%;
		position: absolute;
		top: 0;
		left:0;
		
	}
	.feng{
		width: 100%;
		min-height: 100%;
	}
	.img1{
		width:1.393333rem;
		height: 100%;
		float: left;
		position: relative;
		/*overflow: hidden;*/
		/*border-radius:0.133333rem;*/
		
	}
	
	.sexs{
		width: 1.386666rem;
		height: 100%;
		float: left;
		border-radius:0.133333rem;
		font-size: 0.346666rem;
		text-align: center;
		color: #FE4B50;
		background: white;
	}
	.sex{
		width: 1.386666rem;
		height: 100%;
		float: left;
		border-radius:0.133333rem;
		font-size: 0.346666rem;
		text-align: center;
		border:0.013333rem solid rgba(255,255,255,1);
		color:white;
	}
	.name p{
		float: right;
		font-size: 0.373333rem;
	}
	.name{
		 width: 2.8rem;
		 height: 100%;
		 float: left;
		 color: white;
		 margin-right: 0.253333rem;
	}
	.inp_a a{
		 color: white;
		 font-size: 0.373333rem;
		 float: left;
		 margin-left: 0.146666rem;
		 line-height: 0.333333rem;
	}
	.inp_a input{
		width: 5.12rem;
		height: 100%;
		font-size: 0.346666rem;
		float: left;
		border: none;
		background:rgba(180,41,66,1);
     opacity:1;
      border-radius:0.133333rem;
      padding-left: 0.266666rem;
      color: white;
      line-height: 0.853333rem;
	}
	.inp_a{
		width: 100%;
		height:0.853333rem;
		line-height: 0.853333rem;
		margin-bottom: 0.4rem;
	}
	
	.nai_box{
		width: 8.826666rem;
		margin: 0 auto;
		padding-top: 0.626666rem;
	}
	.top_box_c p{
		width: 100%;
		text-align: center;
	}
	.top_box_c{
		min-width: 1.493333rem;
		height: 100%;
		padding-top: 0.093333rem;
		color: white;
		float: left;
		text-align: center;
	}
	   .top_box{
	   	width: 100%;
	   	height: 1.506666rem;
	   	box-shadow:0px 3px 6px rgba(219,35,72,1);
	   	background: #FF5958;
	   	padding: 0 0.946666rem;
	   }
</style>
