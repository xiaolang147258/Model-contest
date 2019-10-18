<template>
  <!--报名-->
  <div id="hello" style="width:100%;background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);padding-bottom:1.426666rem;">
     <div class="top_box">
     	  <div class="top_box_c"><p style="font-size:0.426666rem;font-weight:600;">{{$store.state.Count}}</p><p style="font-size:0.373333rem;">参赛模特</p></div>
        <div style="margin-left:1.72rem;" class="top_box_c"><p style="font-size:0.426666rem;font-weight:600;">{{$store.state.like_numbers}}</p><p style="font-size:0.373333rem;">累计点赞</p></div>
        <div style="margin-left:1.72rem;" class="top_box_c"><p style="font-size:0.426666rem;font-weight:600;">{{$store.state.hits_numbers}}</p><p style="font-size:0.373333rem;">访问量</p></div>
     </div>
     <div class="nai_box">
     	   <div class="inp_a"><div class="name"><p>姓名：</p></div><input v-model="x_name" type="text" placeholder="请输入姓名"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>艺名：</p></div><input v-model="stage_name" type="text" placeholder="请输入艺名"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>年龄：</p></div><input v-model="age" type="number"  placeholder="请输入年龄"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>性别：</p></div>
     	     <div @click="sexa=0" style="margin-right:0.4rem;" :class="{sexs:sexa==0,sex:sexa!=0}">男</div>
     	     <div @click="sexa=1" :class="{sexs:sexa==1,sex:sexa!=1}">女</div> <a>*</a>
     	   </div>
     	   
     	   <div class="inp_a"><div class="name"><p>真实身高：</p></div><input v-model="x_height" type="number" placeholder="请输入身高 CM"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>三围：</p></div><input v-model="Three_dimensions" type="text" placeholder="胸围-腰围-臀围 CM"/><a>*</a></div>
   <!--上传头像-->  	   
     	   <div class="inp_a" style="height:1.393333rem;"><div class="name"><p>头像：</p></div>
     	      <div class="img1">
     	      	<div @click="lan_img(3)" style="width: 100%;height: 100%;overflow: hidden;">
     	      		<img class="feng" :src="img_url1_ss" /></div>
     	      	  <van-uploader v-show='inp1_show_s' class='inp1' :after-read="onRead1_s"></van-uploader> 
     	      	  <img @click="x_img(3)" v-show="inp1_show_s==false" class="xa" src="../../static/img/guanx.png" />
     	      </div>
     	      <a>*</a>
     	   </div>
   	
   <!--上传图片-->  	   
     	   <div class="inp_a" style="height:1.393333rem;"><div class="name"><p>全身照：</p></div>
     	      <div class="img1">
     	      	<div @click="lan_img(1)" style="width: 100%;height: 100%;overflow: hidden;">
     	      		<img class="feng" :src="img_url1" /></div>
     	      	  <van-uploader v-show='inp1_show' class='inp1' :after-read="onRead1"></van-uploader> 
     	      	  <img @click="x_img(1)" v-show="inp1_show==false" class="xa" src="../../static/img/guanx.png" />
     	      </div>
     	      
     	      <!-- <div class="img1" style="margin-left:0.266666rem;">
     	      	<div @click="lan_img(2)" style="width: 100%;height: 100%;overflow: hidden;">
     	      		<img class="feng" :src="img_url2" /></div>
     	      	  <van-uploader v-show='inp1_show2' class='inp1' :after-read="onRead2"></van-uploader> 
     	      	  <img @click="x_img(2)" v-show="inp1_show2==false" class="xa" src="../../static/img/guanx.png" />
     	      </div> -->
     	      <a>*</a>
     	   </div>
 <!--上传视频。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。 --> 	   
     	   <div class="inp_a" style="height:1.393333rem;">
     	   	  <div class="name"><p>小于30M视频：</p></div>
     	      <div class="img1">
     	      	<div @click="video_shows=true" style="width:100%;height:100%;overflow:hidden;position:relative;">
     	      		<img class="feng" :src="videoimg" />
     	      		<img class="bo" v-show="video_show==false" src="../../static/img/bofanganniu.png" alt="" />
     	      	</div>
     	      	  <input style="width:100%;height:100%;opacity:0;" @change="onFileChange"  v-show='video_show' class='inp1'  type="file" accept="video/*">
     	      	  <img @click="video_x" v-show="video_show==false" class="xa" src="../../static/img/guanx.png" />
     	      </div>
     	      <a>*</a>
 <!-- 视频预览 -->
     	     <mu-fade-transition>
     	  	  	 	   <div @click="video_shows=false" v-show="video_shows" style="width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:300;top: 0;left: 0;">
     	  	  	 	  	  <mu-slide-top-transition>
                         <video class="video" preload="auto" v-show="video_shows" id="video" ref="video" controls="controls" webkit-playsinline='true' playsinline='true'></video>
                     </mu-slide-top-transition>
     	  	  	 	   </div>
           </mu-fade-transition>  
     	  </div>
     	  
     	   <div class="inp_a"><div class="name"><p>微信号：</p></div><input v-model="wxid" type="text" placeholder="请输入微信号"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>抖音、快手号：</p></div><input v-model="dyid" type="text" placeholder="请输入抖音号"/></div>
     	   
     	   <!-- <div class="inp_a"><div class="name"><p>微博：</p></div><input v-model="vb_name" type="text" placeholder="请输入微博名"/><a>*</a></div> -->
     	  
     	   <div class="inp_a"><div class="name"><p>手机号码：</p></div><input v-model="x_iphone" max-length="11" type="number" placeholder="请输入手机号码"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>现居城市：</p></div><input v-model="Current_city" type="text" placeholder="请输入现居城市"/><a>*</a></div>
     	   
     	   <div class="inp_a"><div class="name"><p>就读/毕业院校：</p></div><input v-model="graduated_school" type="text"  placeholder="请输入就读/毕业院校"/></div>
     	   
     	   <div class="inp_a"><div class="name"><p>兴趣特长/荣誉：</p></div><input v-model="interest" type="text"  placeholder="兴趣特长/荣誉"/></div>
     	   
     	  
     	   <!-- <div class="inp_a" style="height:2.68rem;"><div class="name"><p>个人简介：</p></div>
     	         <textarea type="text" v-model="Personal_profile"  placeholder="请输入个人简介"/><a>*</a>
     	   </div> -->
     	   
     	   <p class="bto_p">（带*号为必填，所有隐私信息不公开）</p>
     	   
     	   <div class="xuzi"><img @click="gou_show=!gou_show" :src="gou_show?'static/img/xin/gou.png':'static/img/xin/gou_a.png'" alt="" /><a @click="showa=true">报名须知：</a></div>
     	   
     	   <div class="go_jiao" @click="go_click">提交报名</div>
     	   	
     </div>
     
     <van-popup v-model="show1s"><van-loading type="spinner" /></van-popup>
     
     <div class="xuan_xiang_box_c"></div>
     
     <van-popup v-model="showa" position="bottom" :overlay="false">
          <div class="dala">
          	   <p class="titlesa">{{act.title}}</p>
          	   <div class="cone" v-html="act.content"></div>
          	   <div @click="zhi_dao" class="xu_zhi">知道了</div>
          </div>
     </van-popup>
     
<!--进度条-->   
    <van-popup v-model="login">
    	<van-circle
       v-model="currentRate"
      :rate="login_nub"
      :speed="100"
      :text="text"
      :stroke-width='60'
      /> 
    </van-popup> 
	
<!-- 报名成功弹出 -->    
	<van-popup v-model="pub_show">
		<div class="tan_box">
			<p>报名成功</p>
			<div class="img_boxx"><img :src="er_url"></div>
			<p style="font-size:0.303333rem;color:#585858">
                   {{up_id}}+{{stage_name}}，欢迎您！请扫码进比赛群。</p>
			<div @click="guan_box" class="xbtn">关闭</div>
		</div>
	</van-popup>
	
	
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
		er_url:'',
		pub_show:false,
		
    	login:false,//进度条显示隐藏
    	currentRate:0,
    	login_nub:0,
    	
    	act:'',
    	
    	showa:false,
    	
    	show1s:false,
    	
    	inp1_show_s:true,
    	img_url1_ss:'static/img/imgjia.png',
    	img_id3:'',//头像
    	
    	video_shows:false,
    	video_show:true,
    	videoimg:'static/img/imgjia.png',
    	video_id:'',//视频
    	
    	img_url1:'static/img/imgjia.png',
    	inp1_show:true,
    	img_url1_s:'',//图片1
    	
    	img_url2:'static/img/imgjia.png',
    	inp1_show2:true,
    	img_url2_s:'',//图片2
    	
    	x_name:"",//姓名
    	stage_name:'',//艺名
    	age:'',//年龄
    	sexa:0,//性别     0为男1为女
    	x_height:'',//真实身高
    	Three_dimensions:'',//三围
    	wxid:'',//微信号
    	dyid:'',//抖音号
    	vb_name:'',//微博名
    	x_iphone:'',//手机号
    	Current_city:'',//现居住城市
    	graduated_school:'',//毕业院校
    	interest:'',//特长、荣誉
    	Personal_profile:'',//个人简介
    	
    	gou_show:false,//打钩选项，默认false
		
		up_id:'',
    	
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%'
    },
    
  },
  methods:{
	  guan_box(){
		   this.pub_show=false;
		   router.push({path:'./home'})
		  },
  	go_click(){//点击提交按钮
  		  console.log(this.img_id3);
		  console.log(this.video_id)
		  console.log(this.img_url1_s);
		  console.log(this.x_name)
		  console.log(this.stage_name);
		  console.log(this.age)
		  console.log(this.x_height);
		  console.log(this.Three_dimensions)
		  console.log(this.wxid)
		  console.log(this.x_iphone);
		  console.log(this.Current_city);
		  
  		  if(this.img_id3!=''&&this.video_id!=''&&this.img_url1_s!=''&&this.x_name!=''&&this.stage_name!=''&&this.age!=''&&this.x_height!=''&&this.Three_dimensions!=''&&this.wxid!=''&&this.x_iphone!=''&&this.Current_city!=''){
  		  	if(this.gou_show){
//		  		
		   var result = [];
			   for(var i=0;i<6;i++){
			     var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
			     result.push(ranNum);
			   }
			    var ider = result.join('');	
		  	var pat = new Date().getFullYear()+(new Date().getMonth()+1)+new Date().getDate()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+ider
		  	
  		  	axios({
            method:"post",
            url:"wechat/enroll-save",
            contentType:"application/json;charset=UTF-8",
            dataType:"json",
            data:{
               token:localStorage.token,
               uid:pat,
               telephone:this.x_iphone,
               wechat:this.wxid,
               surname:this.x_name,
               stagename:this.stage_name,
               stature_height:this.x_height,
               stature_measurements:this.Three_dimensions,
               sex:(this.sexa==0?'男':'女'),
               age:this.age,
               city:this.Current_city,
               schools:this.graduated_school,
               pic:this.img_id3,
               front_pic:this.img_url1_s,
               cover_pic:'',
               url:this.video_id,
               tik_tok:this.dyid,
               weibo:this.vb_name,
               speciality:this.interest,
               site:this.Personal_profile
             }
            }).then(res=>{
            	     console.log(res.data);
            	    if(res.data.code = 200){
						if(res.data.msg=='报名成功'){
							console.log(res,'报名成功');
							this.er_url=res.data.data.qrcode;
							this.up_id = res.data.data.enroll_id;
							this.pub_show = true;
							// this.$toast.success({message:'报名成功',duration:2000});
        	               // window.setTimeout(()=>{router.push({path:'./home'});},1000);
						}else{
							this.$toast.success({message:res.data.msg,duration:3000});
						}
        	    	   } 
             }).catch(err=>{
                      console.log(err);
                       this.$toast({
        	                       message:'网络错误',
        	                       duration:3000
        	                 });
             });
  		  	}else{
  		  		 this.$toast({message:'你没有查看比赛须知',duration:2000});
  		  	}
  		  }else{this.$toast({message:'没有完善信息',duration:1000})}
  	},
  	
  //执行分片上传
    PostFile(file,i,num){
        var name = file.name,                          //文件名
            size = file.size,                          //总大小shardSize = 2 * 1024 * 1024,
            shardSize = 324*512,                //以?MB为一个分片,每个分片的大小
            shardCount = Math.ceil(size / shardSize);  //总片数
            console.log(shardCount,'视频分成几次上传')
        if(i > shardCount){
            return;
        }
        var start = i * shardSize;
        var end = start + shardSize;
        var packet = file.slice(start,end)
        if((i+1) > shardCount){
        	//最后一次上传，而外加一个参数
//      	var fd = {'filename':name,'chunks':shardCount,'act':'combine'},
        	 $.post(
            '/upload-file',
            {"act":"combine","chunks":shardCount,"filename":name},
             e=>{
                if(e.flag){
                	  console.log(e,'最后',num); 
                	 if(num==1){
                	 	  this.img_url1_ss = e.url;
                	 	  this.img_id3 = e.url;
  	 	                this.inp1_show_s = false;
                	 }else if(num==2){
                	 	  this.img_url1 = e.url;
  	 	                this.inp1_show = false;
  	 	                this.img_url1_s = e.url
                	 }else if(num==3){
                	 	  this.img_url2 = e.url;
  	 	                this.inp1_show2 = false;
  	 	                this.img_url2_s = e.url
                	 }else if(num==4){
                	 	 this.$refs.video.src = e.url;
                	   this.video_show = false;
                	   this.videoimg = 'static/img/banner.png'
                	   this.video_id = e.url;
                	 }
                	  window.setTimeout(()=>{this.login_nub = 0;},1000);
                    this.login_nub = 100;
                    this.login = false;
                    Notify({
                     message: '上传成功',
                     duration: 1000,
                     background: '#1989fa'
                   });
                }
             },'json'
           );
          
        }else{
        	 var fd = new FormData();
           fd.append("newfile", packet); //slice方法用于切出文件的一部分
           fd.append("filename", name);
           fd.append("chunks", shardCount); //总片数
           fd.append("chunk", i); //当前是第几片
        
        axios({
            url:"/upload-file",
            method:"post",
            data: fd,
            cache: false,
            //timeout:"10000",
            async: true, //异步
            dataType:"json",
            processData: false, //很重要，告诉jquery不要对form进行处理
            contentType: false, //很重要，指定为false才能形成正确的Content-Type
            }).then(res=>{
                console.log(res);
                /*  表示上一块文件上传成功，继续下一次  */
                if (res.data.code == 'wait') {
                    fd = '';
                    i++;
                    var su = 100/(shardCount+1);
                    this.login_nub = i*su;
                    this.PostFile(file,i,num);
                
                } else {
                    console.log('未知错误');
                }
            }).catch(err=>{ console.log(err)})
	       }
 
    },

  	
  
  	git_ac(){
  		  axios.get('wechat/guide?token='+localStorage.token).then(res=>{
        	    	  if(res.code = 200){
        	    	 	      console.log(res.data);
        	    	 	      this.act = res.data.data
        	    	 	       this.show1s =false;
        	    	  }
                }).catch(err=>{
                	 console.log(err);
                	 this.$toast({message:'网络错误',duration:3000});
                });
  	},
  	
  	zhi_dao(){
  		 this.showa = false;//读完规则关闭规则弹窗
  		 this.gou_show = true;//读完规则自动打钩
  	},
  	
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
       	        this.login = true;
       	        this.login_nub = 0;
       	        
       	        this.PostFile(files[0],0,4);
       	        
//              this.go_cideo(files[0]);
       	        
       	      
       	      	
                //视频预览
//              	 var reader = new FileReader();
//              	 this.file = files[0];
//            	 var _this = this;
//            	 
//              	 reader.onload = function(){
//                 	  _this.$refs.video.src = this.result;
//              	 };
//              	 reader.readAsDataURL(this.file);
//            	  
//               this.creatImg(files);
       	      
          }  
  	},
  	
  	
  	x_img(i){//删除照片
  		if(i==1){
  			  this.img_url1 = 'static/img/imgjia.png';this.inp1_show = true;this.img_url1_s='';
  		}else if(i==2){
  			  this.img_url2 = 'static/img/imgjia.png';this.inp1_show2 = true;this.img_url2_s='';
  		}else{
  			  this.img_url1_ss = 'static/img/imgjia.png';this.inp1_show_s = true;this.img_id3='';
  		}
  	},
  	lan_img(i){//预览图片
  		 let c = i==1?this.img_url1:(i==2?this.img_url2:this.img_url1_ss);
  		 let a = [];a.push(c);
  		 ImagePreview(a);
  	},
  	
  	onRead1_s(file){
  		    console.log(file,'头像');
  		    this.login = true;
  	 	    this.PostFile(file.file,0,1);
  	},
  	
  	 onRead1(file){//上传图片1
  	 	    console.log(file,'图片1');
  	 	    this.login = true;
  	 	    this.PostFile(file.file,0,2); 
  	 },
  	onRead2(file){//上传图片2
  	 	    console.log(file,'图片2');
  	 	    this.login = true;
  	 	    this.PostFile(file.file,0,3);
  	 },
  	
  	
  },
  mounted(){
  	this.git_ac()
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
	.img_boxx img{
		width: 100%;
		height: 100%;
	}
	.xbtn{
		width: 2.333333rem;
		height:0.96rem;
		background:linear-gradient(180deg,rgba(255,127,100,1) 0%,rgba(228,50,86,1) 100%);
		border-radius:0.48rem;
		
		margin: auto;
		margin-top: 0.266666rem;
		text-align: center;
		color: white;
		line-height: 0.96rem;
	}
	.img_boxx{
		width: 3rem;
		height: 3rem;
		margin: 0.266666rem auto;
		background: red;
	}
	.tan_box{
		width: 6rem;
		height: 7rem;
		background: white;
		border-radius: 0.306666rem;
		text-align: center;
		font-size: 0.4rem;
		padding: 0 0.606666rem;
		padding-top: 0.266666rem;
		
	}
	.xu_zhi{
		 width:8.826666rem;
height:0.96rem;
background:rgba(255,255,255,1);
opacity:1;
border-radius:0.133333rem;
line-height: 0.96rem;
    font-size: 0.426666rem;
    color: #FF7F64;
    font-weight: 600;
    text-align: center;
    margin-top: 0.266666rem;
    border: 0.04rem solid #FF7F64;
	}
	.cone{
		font-size: 0.346666rem;
		color: #585858;
		text-align:justify;
		line-height:0.506666rem;
		font-family:MingHei;
	}
	.titlesa{
		font-size: 0.426666rem;
		color: #FE4B50;
		text-align: center;
		font-weight: 600;
		margin-bottom: 0.266666rem;
	}
	.dala{
		width: 100%;
		
		background:white;
		padding: 0 0.4rem;
		padding-top: 0.4rem;
		padding-bottom: 0.533333rem;
		
	}
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
