<template>
  <!--首页-->
  <div id="hello" style="width:100%;padding-bottom:0.4rem;">
  	  <div class="img_top"><img src="../../static/img/banner.png" alt="" /></div>
      <div class="xin_box">
      	  <div class="xin_box_c"><p>21235</p><p style="font-size:0.373333rem;">参赛艺人 </p></div>
      	  <div class="xian"></div>	  
      	  <div class="xin_box_c"><p>21235</p><p style="font-size:0.373333rem;">累计投票 </p></div>
      	  <div class="xian"></div>	  
      	  <div class="xin_box_c"><p>21235</p><p style="font-size:0.373333rem;">访问量 </p></div>
      </div>  
      <div class="shou_box">
      	  <div class="inp_box"><img src="../../static/img/sousuo.png" alt="" />
      	  	   <input type="text" id="inp" @blur="to_top" placeholder="输入艺名或编号查询" />
      	  </div>
      	  <div class="data_box">
      	  	 <div class="data_box_c1"><img src="../../static/img/sa.png"/><p>距离报名结束时间还有</p></div>
      	  	 <div class="data_box_c2"><p><a>22&nbsp;</a>天<a>&nbsp;16&nbsp;</a>时<a>&nbsp;40&nbsp;</a>分<a>&nbsp;20&nbsp;</a>秒</p></div>
      	  </div>
      	  <div @click="go_sign_up" class="btn">我要报名</div>
      </div> 
      <div class="img_to1"><img src="../../static/img/64e3d4a7cf25df2c440bc7033f3e162951627317104d6-eDSBzc_fw658[1].png"/></div>  
      <div class="img_to1" style="margin:0 auto"><img src="../../static/img/c2fb43516ce96489a3a65af867b286ad3438094db302-98iOdt_fw658[1].png"/></div>  	
  <!--tab选择-->
      <div class="tab_box">
      	 <div style="width:6.16rem;height:100%;margin:0 auto;color: #FF9898;">
      	 	 <div @click="tab_nu=0" class="tab_box_c" :class="{tab_box_c_s:tab_nu==0}"><img src="../../static/img/jinritrenqi.png"/><p>今日人气榜</p></div>
      	 	 <div @click="tab_nu=1" class="tab_box_c" :class="{tab_box_c_s:tab_nu==1}"style="float:right;"><img src="../../static/img/benzhourenqi.png"/><p>本周人气榜</p></div>	
      	 </div>
      </div>
  <!--参赛选手--> 
      <div class="fin">
      	   <div class="fin_c" v-for="(i,index) in 6" @click="go_details">
      	   	    <div class="fin_cs"><img src="../../static/img/_20190319182041.png"/></div>
      	   	    <p style="margin:0.2rem 0 0.093333rem 0;">参赛号：1232</p><p>艺名：阿紫</p><p class="piao">当前得票：<a>123443票</a></p>
      	   	    <div v-if="index%3" class="zan"><img src="../../static/img/yitoupiao.png"/></div>
      	   	    <div v-else class="zan">给她点赞</div>
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
    	show1s:false,
    	
    	tab_nu:0,
    	
    	
    }
  },
  methods:{
  	go_details(){//跳转作品详情
  		 router.push({
  	   	 path:'./hone_Works_details',
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
  	  
  	  
  },
  mounted(){
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
	
	.img_to1 img{
		width:100%;
		height:100%;
	}
	.img_to1{
		width:9.2rem;
		height:3.813333rem;
		border-radius: 0.266666rem;
		overflow:hidden;
		margin:0.56rem auto 0.266666rem auto;
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
