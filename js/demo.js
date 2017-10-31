// JavaScript Document
/*$(function(){
	var index=1;
	$(".login").bind("mouseover",loginform());
	console.log($(".login"))
	})*/

var index=1;
var x=1;
var y=1;
//载入////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function(){
  heightset();//布局调整
  fix();  //导航栏固定
  manager();                      //店长推荐区点击功能
  newitem();                          //新品区对齐




//点击页面各处收起弹出窗口  
  $(window).click(
     function(){
		index=1;
		$(".login").removeClass("loginyes");
        $(".login_form").eq(0).hide();
        var hs=$(".left").find("ul");
        
        for(i=0;i<hs.length;i++){
        	var th=hs.eq(i);
        	if(th.height()>0){
	        th.attr("z-index","3");
	        th.animate({height:"0"},300,
			function(){th.addClass("borno");}
        	)       		
        	}
        }
     }
  	)
/////////////////////////////////////////////////////////////////////////










/////////////////////////////////////////////////////////////
  $(".login").eq(0).click(function(e){
         
/*    e = e || window.event;
    console.log(e);
    if(e.stopPropagation){e.stopPropagation();}
    else{e.cancelBubble=true;}*/
    stop(e);
  	loginform();	
  })
///////////////////////////////////////////////////////////






  $(".search_input").bind("focus",function(){
	  searchback();
	  })


  $(".search_input").blur(function(){$(window).unbind("keyup keydown")});


  $("#hard").click(function(e){stop(e);storeul("hard","276",300)});


  $("#soft").click(function(e){stop(e);storeul("soft","330",300)});


  $(window).resize(
		 function(){heightset();newitem();}
  	);

})








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











//登录表单的隐藏控制
function loginform(){
var lo=$(".login_form").eq(0);
	if(index==1){
		index=2;
		$(".login").addClass("loginyes");
		lo.show();
		}
	else{
		index=1;
		$(".login").removeClass("loginyes");
		lo.hide();
		}	
	}
//搜索框背景设置
/*function searchback(){
   var inp=$("#searchback");
   var name=inp.attr("class");
   setInterval(function(){
   console.log(inp.val());
   if(inp.val()!==""){
	     inp.removeClass("searchbackground");
	   }
   else{if(inp.attr("class")=="search_input"){
	     inp.addClass("searchbackground");
   }
	   }
   },100)
   $(window).bind("keyup keydown",function textchange(){
   console.log(inp.val());
   if(inp.val()!==""){
	     inp.removeClass("searchbackground");
	   }
   else{if(inp.attr("class")=="search_input"){
	     inp.addClass("searchbackground");
   }
	   }
   });
}*/
//导航区菜单下拉
function storeul(cls,num,time){
    var cl="."+cls+"ware";
    var hi=$(cl).find("ul");
    if(hi.height()>0){
        hi.attr("z-index","3");
        hi.animate({height:"0"},time,
		function(){hi.addClass("borno");}
        	)
    }
    else{hi.removeClass("borno");
    	hi.attr("z-index","4");
    	hi.animate({height:num},time)};
    	var hh=$(".hardware").find("ul");
    	var sh=$(".software").find("ul");
    	if(cls=="hard"&&sh.height()>0){sh.animate({height:"0"},time,function(){sh.addClass("borno")})}
    	if(cls=="soft"&&hh.height()>0){hh.animate({height:"0"},time,function(){hh.addClass("borno")})}
}
//阻止冒泡
function stop(e){
    var e= e ||window.event;
    if(e.stopPropagation){e.stopPropagation();}
    else{e.cancelBubble=true;}
}
//调整高度
function heightset(){
	var lefth=$(".item_topleftin").find("img").height();
	var half=Math.floor(lefth/2)-6;
	$(".right_up").css("height",half);
	$(".right_down").css("height",half);
	//以上为对齐三图布局
	var clientwidth=$(window).width();
	if(clientwidth>810&&clientwidth<=950){
		$(".askfor").css("display","none");
		var lh=$(".wrap").width()-420;
		$(".search_input").width(lh);
		$("#searchout").removeAttr("style");
		$(".wrap").width("90%");
		$(".store_column").width("90%");
		$(".support").css("display","block");
		$(".search").css("border","1px solid #707070");
		$(".searchback").css("display","block");
		$(".search_input").css("display","block");
		$(".hardware").css("display","block");
		$(".software").css("display","block");
		$(".channel").css("display","block");
	}
	else if(clientwidth<810){
		$(".wrap").width("100%");
		$(".store_column").width("100%");
		$(".support").css("display","none");
		$("#searchout").width("20");
		$(".search").css("border","none");
		$(".searchback").css("display","none");
		$(".search_input").css("display","none");
		$(".hardware").css("display","none");
		$(".software").css("display","none");
		$(".channel").css("display","none");
	}
	else{
		$(".askfor").css("display","block");
		$(".search_input").width("304");
		$("#searchout").removeAttr("style");
		$(".wrap").width("90%");
		$(".store_column").width("90%");
		$(".support").css("display","block");
		$(".search").css("border","1px solid #707070");
		$(".searchback").css("display","block");
		$(".search_input").css("display","block");
		if(clientwidth<=1010){
			$(".right").find("a").css("display","none")
		}
		else{$(".right").find("a").css("display","inline-block");
             $(".hardware").css("display","block");
		$(".software").css("display","block");
		$(".channel").css("display","block");

	}
		
	}


	//以上为调整搜索栏随网页宽度变化状态
	interest(clientwidth);
}
//导航栏固定
function fix(){
	$(window).scroll(function(){
		var storemenu=$(".store");
		if($(window).scrollTop()>=84){
			storemenu.addClass("fixed");
		}
		else{if(storemenu.attr("class")=="store fixed"){storemenu.removeClass("fixed")}}
	})
}
//大家都在看
function interest(num){
	var num=num-1200;
	var pad=Math.floor(num/20);
	var z=num+1200;
	var padz=Math.floor(z/15)+"px";
	pady=pad+5+"px";
	padx=pad+"px";
	if(pad>=30){
        pady="35px";
		$(".interest_text").css("padding","30px 0 30px 12.5%");
		$(".item_midleft").removeAttr("style");
		$(".item_midright").removeAttr("style");
		$(".item_midleft").find("li").removeAttr("style");
		$(".item_midleft").find("li").eq(2).css("border-bottom","none");
		$(".mid_pic+p").removeAttr("style");
		$(".mid_pic+p").css({"padding-bottom":pady,"font-size":"16px","line-height":"24px","max-height":"48px"});
		$(".manager_pic").show();
		$(".item_company").removeAttr("style");
		$(".newitem").removeAttr("style");
	}
	else if(pad>=0&&pad<30){
		$(".interest_text").css("padding-top",pad);
		$(".interest_text").css("padding-bottom",pad);
		$(".item_midleft").removeAttr("style");
		$(".item_midright").removeAttr("style");
		$(".item_midleft").find("li").removeAttr("style");
		$(".item_midleft").find("li").eq(2).css("border-bottom","none");
		$(".mid_pic+p").removeAttr("style");
		$(".mid_pic+p").css({"padding-bottom":pady,"font-size":"16px","line-height":"24px","max-height":"48px"});
		$(".manager_pic").show();
		$(".item_company").removeAttr("style");
		$(".newitem").removeAttr("style");
	}
	else{
		var inh=$(".item_midleft").find("li").eq(2).height();
		$(".item_midright").css("width","100%");
		$(".item_midleft").css("width","100%");
		$(".item_midleft").find("li").css({"width":"32.4%","padding":"1.6% 0","margin-right":"1.4%","height":inh,"margin-bottom":"40px"});
		$(".item_midleft").find("li").eq(2).css({"margin-right":"0","border-bottom":"1px solid #C7C7C7"});
		$(".interest_text").css({"padding":"2.5% 0 2.5% 12.5%"});
		$(".mid_pic+p").css({"padding-bottom":padz,"font-size":"14px","line-height":"18px","max-height":"54px"});
		var pset=$(".item_midright").find("p"),
			pfour=pset.eq(3).height();
		for(var i=0;i<pset.length;i++){pset.eq(i).css("height",pfour)}
		$(".manager_pic").hide();
		$(".item_company").css("width","100%");
		$(".newitem").css("padding","0 4px 4px");
	}	
}
//店长推荐区
function manager(){
	var manage=$(".item_company").find("li");
	$(".item_company").find("li").eq(0).click(
		function(){
			if(manage.eq(0).class==null){
				manage.eq(0).attr("class","on");
				manage.eq(1).attr("class","close");
			}
			$(".company_pic").find("a").eq(0).css("margin-left","0")
		}
	)
	$(".item_company").find("li").eq(1).click(
		function(){
			if(manage.eq(1).class==null){
				manage.eq(1).attr("class","on");
				manage.eq(0).attr("class","close");
			}
			$(".company_pic").find("a").eq(0).css("margin-left","-50%")
		}
	)
}
function newitem(){
	var itemh=$(".newitemout").eq(0).height();
	$(".new_pro").css("height",itemh);
	$(".newitems").css("height",itemh);
}














