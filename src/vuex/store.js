import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
  
  var Initialization = {}
  
   Initialization.one=function(url,i){

//           var video_show = localStorage.video_show==1?false:true
       
	 	   	     var options = {
                controls: true,
                url:url,//http://og9dz2jqu.cvoda.com/Zmlyc3R2b2RiOm9jZWFucy0xLm1wNA==_q00000001.m3u8
                type:'video/mp4',
                preload:true,
                stretching:"panscan",
                poster:state.video_b_url,
                autoplay:true // 如为 true，则视频将会自动播放
               }
            
               var player = new QiniuPlayer('demo_video',options); 
        };     
	 	   	Initialization.add = function(url){	}
	 	   	    	
const state = {
	// urls:'http://video-mp.cieo.com.cn',//全局请求头
	urls:'',
	data:{//全局存储当前登录用登录信息
		
	},
	
	cesi:'vuex内部执行方法',
	
	bottom_1:false,
	
	bottom_2:false,
	
	bottom_3:false,
	
	bottom_4:false,
	
	btn_show:true,//低部导航栏显示隐藏控制
	
	video_id:'',//获取作品详情数据的id
	
	video_url:'',//播放器url
    
    video_b_url:'',
    
    dat:{
         
      	 Initializationone:Initialization.one,    
      	 Initializationadd:Initialization.add    
      },
    
    tou_url:'',
    
    Count:0,
    like_numbers:0,
    hits_numbers:0,
    
};
        
	 	
//修改状态
const mutations = {
	 
	 
	 
	 	 
};

export default new Vuex.Store({
	state,
	mutations
});
