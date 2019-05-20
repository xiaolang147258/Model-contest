<template>
  <!--章程-->
  <div id="hello" style="width:100%;background:linear-gradient(135deg,rgba(228,50,86,1) 0%,rgba(255,127,100,1) 100%);padding-bottom:0.4rem;">
     <div class="top_img"><img src="../../static/img/xin/title.png" alt="" /></div>
     <div class="val_box">
     	   <p class="title">{{act.title}}</p>
     	   <div class="p_box" v-html="act.content">
     	   	 <!--<p class="p_c">{{act.content}}</p>-->
     	   	<!--<p class="p_c">第一章  总  则</p>
          <p class="p_c">第一条　“挑战杯”全国大学生课外学术科技作品竞赛是由共青团中央、中国科协、教育部、全国学联主办的大学生课外学术科技活动中一项具有导向性、示范性和群众性的竞赛活动，每两年举办一届。</p>
          <p class="p_c">第二条　竞赛的宗旨：崇尚科学、追求真知、勤奋学习、锐意创新、迎接挑战。</p>
          <p class="p_c">第三条　竞赛的目的：引导和激励高校学生实事求是、刻苦钻研、勇于创新、多出成果、提高素质，培养学生创新精神和实践能力，并在此基础上促进高校学生课外学术科技活动的蓬勃开展，发现和培养一批在学术科技上有作为、有潜力的优秀人才。</p>
          <p class="p_c">第四条　竞赛的基本方式：高等学校在校学生申报自然科学类学术论文、哲学社会科学类社会调查报告和学术论文、科技发明制作三类作品参赛；聘请专家评定出具有较高学术理论水平、实际应用价值和创新意义的优秀作品，给予奖励；组织学术交流和科技成果的展览、转让活动。</p>
          
          <p class="p_c">第二章  组织机构及其职责</p>  
          <p class="p_c">第五条  竞赛设立领导小组，由主办单位和承办单位的有关负责人组成，负责指导竞赛活动，并对全国组织委员会和全国评审委员会提交的问题进行协调和裁决。</p>
          <p class="p_c">第六条  竞赛设立全国组织委员会，由主办单位、承办单位和联合发起单位（含高校、新闻单位、相关企业）的有关负责人组成。主办单位和承办单位分别委派有关负责同志作为组委会成员，各联合发起单位推荐1名主管领导作为组委会成员。全国组织委员会设主任、副主任若干名。获得3次“挑战杯”的高校将获得持续担任组委会副主任成员的资格。</p>
          <p class="p_c">第七条  全国组织委员会的职责如下：</p>
          <p class="p_c">1．审议、修改竞赛的章程。</p>
          <p class="p_c">2．筹集竞赛组织、评审、奖励所需的经费。</p>
          <p class="p_c">3．投票表决竞赛承办高校。</p>
          <p class="p_c">4．议决其它应由组委会议决的事项。</p>
          <p class="p_c">第八条  全国组织委员会下设秘书处，负责按照全国组委会通过的章程组织竞赛活动并向全国组委会报告工作。秘书处设秘书长、副秘书长若干名，由主办单位、承办单位有关领导担任。</p>
          <p class="p_c">第九条  竞赛设立全国评审委员会，由主办单位聘请的相关学科具有高级职称的非高校专家组成。全国评审委员会设主任1名，常务副主任2名，副主任若干名，秘书长1名。全国评审委员会经主办单位批准成立，有权在本章程和评审规则所规定的原则下，独立开展评审工作。</p>
          <p class="p_c">第十条  全国评审委员会职责如下：</p>
          <p class="p_c">1．在本章程和评审规则基础上制定评审实施细则。</p>
          <p class="p_c">2．审看参赛作品及其演示，对作者进行问辩。</p>
          <p class="p_c">3．确定参赛作品获奖等次。</p>-->
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
    	
    	act:'',
    	
    	
    }
  },
  methods:{
  	git_ac(){
  		  axios.get('wechat/constitution?token='+localStorage.token).then(res=>{
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
  	
  },
  mounted(){
  	  window.scrollTo(0,0);  
  	  store.state.btn_show = true;
  	  store.state.bottom_1 = false;
      store.state.bottom_2 = false;
      store.state.bottom_3 = true;
      store.state.bottom_4 = false;
      
      this.git_ac();
      
//	    window.setTimeout(()=>{
//	  	     var a = document.documentElement.clientHeight+'px';
//         $("#hello").css('height',a)
//         $("#hello").fadeToggle()
//	    },500)
	    
  },
  
}
</script>

<style scoped>
	.p_c{
		  margin-top:0.266666rem ;
	}
	.p_box{
		 font-size: 0.346666rem;
		 color: #585858;
		 text-align:justify;
		 line-height:0.506666rem;
		 font-family:MingHei;
		 margin-top: 0.266666rem;
	}
	.title{
		 font-size: 0.426666rem;
		 color: #FE4B50;
		 width: 100%;
		 text-align:center;
		 font-weight:600;
		 /*margin-bottom: 0.266666rem;*/
	}
	.val_box{
		width:9.2rem;
/*height:11rem;*/
background:rgba(255,255,255,1);
opacity:1;
border-radius:0.266666rem;
margin: 0.4rem auto 0 auto;
    padding: 0.4rem 0.4rem;
	}
	.top_img img{
		width: 100%;
		height: 100%;
	}
	 .top_img{
	 	width:100%;
	 	height: 2.106666rem;
	 	
	 }
</style>
