<template>
  <!--首页-->
  <div id="hello" style="width:100%;padding-bottom:0.4rem;">
  	  <div class="img_top"><img src="../../static/img/banner.png" alt="" /></div>
      <div class="xin_box">
      	  <div class="xin_box_c"><p>{{gao_zan.Count}}</p><p style="font-size:0.373333rem;">参赛艺人 </p></div>
      	  <div class="xian"></div>	  
      	  <div class="xin_box_c"><p>{{gao_zan.like_numbers}}</p><p style="font-size:0.373333rem;">累计投票 </p></div>
      	  <div class="xian"></div>	  
      	  <div class="xin_box_c"><p>{{gao_zan.hits_numbers}}</p><p style="font-size:0.373333rem;">访问量 </p></div>
      </div>  
      <div class="shou_box">
      	  <div class="inp_box"><img src="../../static/img/sousuo.png" alt="" />
      	  	   <input type="text" id="inp" @blur="to_top" placeholder="输入艺名或编号查询" />
      	  </div>
      	  <div class="data_box">
      	  	 <div class="data_box_c1"><img src="../../static/img/sa.png"/><p>距离报名结束时间还有</p></div>
      	  	 <div v-if="isEnd==false" class="data_box_c2"><p><a>{{shi.d}}&nbsp;</a>天<a>&nbsp;{{shi.h}}&nbsp;</a>时<a>&nbsp;{{shi.m}}&nbsp;</a>分<a>&nbsp;{{shi.s}}&nbsp;</a>秒</p></div>
      	     <div v-else class="data_box_c2"><p>报名已结束</p></div>
      	  </div>
      	  <div @click="go_sign_up" class="btn">我要报名</div>
      </div> 
      
      <div class="img_to1"><img v-for="(i,index) in gao_zan.PicList" class="img_tos" :src="i"/></div>  
     
  <!--tab选择-->
      <div class="tab_box">
      	 <div style="width:6.16rem;height:100%;margin:0 auto;color: #FF9898;">
      	 	 <div @click="git_renqi('likes')" class="tab_box_c" :class="{tab_box_c_s:tab_nu==0}"><img src="../../static/img/jinritrenqi.png"/><p>今日人气榜</p></div>
      	 	 <div @click="git_renqi('week ')" class="tab_box_c" :class="{tab_box_c_s:tab_nu==1}"style="float:right;"><img src="../../static/img/benzhourenqi.png"/><p>本周人气榜</p></div>	
      	 </div>
      </div>
  <!--参赛选手--> 
      <div class="fin">
      	   <div class="fin_c" v-for="(i,index) in home_act" @click="go_details(i)">
      	   	    <div class="fin_cs"><img :src="i.pic"/></div>
      	   	    <p style="margin:0.2rem 0 0.093333rem 0;">参赛号：{{i.id}}</p><p>艺名：{{i.title}}</p><p class="piao">当前得票：<a>{{i.like_numbers}}票</a></p>
      	   	   
      	   	    <div @click.stop v-if="i.like_show==1" class="zan"><img src="../../static/img/yitoupiao.png"/></div>
      	   	    <div @click.stop v-else @click='like_click(i.id,index)' class="zan">给她点赞</div>
      	      
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
    	tab_nu:0,
    	gao_zan:'',//广告位，点赞数，总人数
    	shi:{d:'',h:'',m:'',s:''},
    	isEnd:false,
    	
    	home_act:[],
    	
    }
  },
  created(){
		 let that = this;
		 that.date_deadline_at();
	 },
  methods:{
  	date_deadline_at(){//倒计时函数
  	var interval = setInterval(()=>{
		var date = this.gao_zan.deadline_at-(new Date().getTime()/1000);
		if(date == 0){
			this.isEnd = true;
		}else{
			 this.shi.d = parseInt(date / 60 / 60 / 24);
			 this.shi.h = parseInt(date / 60 / 60 % 24);
			 this.shi.m = parseInt(date / 60 % 60);//计算剩余的分钟
	  	 this.shi.s = parseInt(date % 60);//计算剩余的秒数 
		  }
	   },1000);
  	},
  	
  	like_click(id,index){//点赞
  		axios.get('enroll-likes?id='+id+'&token='+localStorage.token).then(res=>{
        	    	  if(res.code = 200){
        	    	 	      console.log(res.data.data,'点赞');
        	    	 	      this.home_act[index].like_show = 1;
        	    	 	      this.$toast({message:'点赞成功',duration:3000});
        	    	 	      this.home_act[index].like_numbers+=1;
        	    	  }else{
        	    	  	   this.$toast({message:'你已经对当前选手点赞过了',duration:3000});
        	    	  }
                }).catch(err=>{
                	 console.log(err);
                	 this.$toast({message:'网络错误',duration:3000});
                });
  	},
  	
  	
  	git_renqi(val){
  		this.tab_nu = val=='likes'?0:1
  		axios.get('enroll?type='+val+'&token='+localStorage.token).then(res=>{
        	    	  if(res.code = 200){
        	    	 	      
        	    	 	      this.home_act = res.data.data.TidbitsList;
        	    	 	      
        	    	 	      for(var i=0;i<this.home_act.length;i++){
        	    	 	      	  this.home_act[i].like_show = 0;
        	    	 	      }
        	    	 	      
        	    	 	      console.log( this.home_act,'周人气。今日人气');
        	    	 	      
        	    	  }
                }).catch(err=>{
                	 console.log(err);
                	 this.$toast({message:'网络错误',duration:3000});
                });
  	},
  	
  	git_guang(){
  		  axios.get('home-page?token='+localStorage.token).then(res=>{
        	    	  if(res.code = 200){
        	    	 	      console.log(res.data.data,'广告位，点赞数，总人数');
        	    	 	      this.gao_zan = res.data.data;
        	    	 	      store.state.Count = this.gao_zan.Count;
        	    	 	      store.state.like_numbers = this.gao_zan.like_numbers;
        	    	 	      store.state.hits_numbers = this.gao_zan.hits_numbers;
        	    	 	      window.setTimeout(()=>{
        	    	 	      	this.show1s =false;
        	    	 	      },1000)
        	    	 	      
        	    	  }
                }).catch(err=>{
                	 console.log(err);
                	 this.$toast({message:'网络错误',duration:3000});
                });
  	},
  	
  	
  	go_details(i){//跳转作品详情
  		 localStorage.id = i.id;
  		 router.push({
         path: `/hone_Works_details&${i.id}`,
//       path:'/hone_Works_details'
  	   });
  	   
  	},
  	
  	  go_sign_up(){
  	  	router.push({
  	   	 path:'./Sign_up',
  	   });
  	  },
  	  to_top(){
  	      	 window.scrollTo(0,0);  
  	  },
  	  
  	  token_sui(){
  	  	 var len =  32;
　            　     var $chars='ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　               var maxPos = $chars.length;
　　                 var pwd = '';
　                    for(var i = 0; i < len; i++){
　　　　                 pwd += $chars.charAt(Math.floor(Math.random()*maxPos));
　　                  }
         localStorage.token = localStorage.token?localStorage.token:pwd;
  	  },
  	  
  },
  mounted(){
  	  this.token_sui()
  	
  	  this.git_guang();
  	  
  	  this.git_renqi('likes');//默认获取今日人气
  	  
  	  
  	  window.scrollTo(0,0);  
  	  store.state.btn_show = true;
  	  store.state.bottom_1 = true;
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
	.zan img{
		width: 100%;
		height: 100%;
	}
	.zan{
		width: 2.733333rem;
		height: 0.96rem;
		margin: 0.226666rem auto;
		
		border-radius:0.48rem;
		background: #F03D5E;
		text-align: center;
		line-height: 0.96rem;
		font-size: 0.373333rem;
		color: white;
		font-weight: 600;
	}
	.piao a{
		font-size: 0.373333rem;
		font-weight: 600;
	}
	.piao{
		font-size: 0.32rem;
		color: #FF5958;
		margin-top: 0.186666rem;
	}
	.fin_cs img{
		width: 100%;
		min-height:100%;
	}
	
	.fin_cs{
		width:3.733333rem;
height:3.733333rem;
background:rgba(0,0,0,0);
border:0.08rem solid rgba(255,89,88,1);
opacity:1;
border-radius:0.08rem;
      overflow: hidden;
      
      font-size: 0.32rem;
      color: #585858;
      
      
	}
	.fin_c{
		width: 4.2rem;
		height: 7.32rem;
		background:rgba(255,255,255,1);
box-shadow:0px 0.053333rem 0.133333rem rgba(243,192,192,1);
opacity:1;
border-radius:0.133333rem;
        margin-bottom:0.533333rem;
        padding:0.24rem 0.226666rem 0.266666rem 0.226666rem;
        text-align: center;
	}
	.fin{
		width:9.2rem;
background:rgba(255,255,255,1);
opacity:1;
border-radius:0.266666rem;
margin:0.266666rem auto;
padding: 0.266666rem 0.266666rem;
background: white;
display:-webkit-flex; 
         display:flex;
		 flex-direction:row;
		 flex-wrap:wrap;
		 justify-content:space-between;     
       padding-bottom: 0;
	}
	.tab_box_c_s{
		color: white;
		font-weight:600;
		border-bottom: 0.053333rem solid white;
	}
	
	.tab_box_c p{
		font-size: 0.4026666rem;
		
		margin-top: -0.133333rem;
	}
	.tab_box_c img{
		width: 100%;
		height: 2.106666rem;
	}
	.tab_box_c{
		width: 2.106666rem;
		height: 100%;
		float: left;
		text-align: center;
		
	}
	
	
	.tab_box{
		width: 100%;
		height: 2.92rem;
		margin-top: 0.666666rem;
		border-bottom: 0.013333rem solid #FF9898;
	}
	
	
	.img_to1{
		width:9.2rem;
		margin:0.56rem auto 0 auto;
	}
	.img_tos{
		width:9.2rem;
		height:3.813333rem;
		border-radius: 0.266666rem;
		margin-bottom: 0.266rem;
	}
	.btn{
		width: 2.72rem;
		height: 0.96rem;
		background:linear-gradient(180deg,rgba(255,127,100,1) 0%,rgba(228,50,86,1) 100%);
        opacity:1;
        border-radius:0.133333rem;
        margin: auto;
        margin-top: 0.4rem;
        text-align: center;
        line-height: 0.96rem;
        font-size: 0.373333rem;
        color: white;
        font-weight: 600;
	}
	.data_box_c2 a{
		font-size: 0.426666rem;
		color: #585858;
		font-weight: 600;
	}
	.data_box_c2{
		width: 4.56rem;
		height: 0.6rem;
		margin:auto;
		color: #585858;
		line-height: 0.6rem;
		font-size: 0.293333rem;
	}
	.data_box_c1 p{
		float: left;
	}
	.data_box_c1 img{
		width: 0.346666rem;
		height: 0.44rem;
		float: left;
		margin-left: 2.733333rem;
		margin-right: 0.226666rem;
	}
	.data_box_c1{
		 width:100%;
		 height: 0.44rem;
		 line-height: 0.44rem;
		 font-size: 0.32rem;
		 color: #585858;
		 font-weight: 600;
		margin-bottom: 0.306666rem;
	}
	.data_box{
		width: 100%;
		height: 1.946666rem;
		background: #F1F1F1;
		text-align: center;
		padding-top: 0.306666rem;
	}
	.inp_box input{
		width: 3.36rem;
		height: 0.533333rem;
		margin-top: 0.32rem;
		float: left;
		font-size: 0.373333rem;
		border: none;
		line-height: 0.533333rem;
	}
	.inp_box img{
		width: 0.373333rem;
		height: 0.386666rem;
		float: left;
		margin: 0.373333rem 0.2rem 0 0;
	}
	 .inp_box{
	 	width: 100%;
	 	height: 1.133333rem;
	 	line-height: 1.133333rem;
	 	font-size: 0.373333rem;
	 	padding-left:0.48rem;
	 }
	
	.shou_box{
		width:9.2rem;
height:4.84rem;
background:rgba(255,255,255,1);
opacity:1;
border-radius:0.266666rem;
      margin: 0.4rem auto;
      overflow: hidden;
     
	}
	.xian{
		width: 0.013333rem;
		height: 1.133333rem;
		background: white;
		float: left;
		margin-left: 0.07rem;
		margin-right: 0.07rem;
	}
	.xin_box_c p{
		font-size:0.426666rem;
		color: white;
		width: 100%;
	}
	.xin_box_c{
		width:2.96rem;
		height: 1.333333rem;
		float: left;
		text-align: center;
	}
	.xin_box{
		width: 100%;
		height: 2.686666rem;
		background: url('../../static/img/bac.png');
		background-size:100% 100%;background-repeat:no-repeat;
		padding: 0 0.4rem;
		padding-top:0.7rem;
		
	}
	.img_top img{
		width: 100%;
		height: 5.186666rem;
	}
	.img_top{
		width: 100%;
		height:4.8rem;
		overflow: hidden;
		
	}
	#hello{
		background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);
		
	}
	
	
</style>
