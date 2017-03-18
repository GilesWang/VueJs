Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
  
})
Vue.directive('img',{
    inserted:function(el,binding){
        var color=Math.floor(Math.random()*1000000);
        el.style.backgroundColor="#"+color;
        
        var img = new Image();
        img.src=binding.value;
        img.onload=function(){
            el.style.backgroundImage='url('+binding.value+')';
        }
    }
})

var vm1 = new Vue({
    el:'#e1',
    data:{
        list:[
            {url:'http://image59.360doc.com/DownloadImg/2013/03/2014/31067248_24.jpg'},
            {url:'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1307/10/c3/23153395_1373426315896.jpg'},
            {url:'http://image103.360doc.com/DownloadImg/2017/02/1115/91212616_8.jpg'}
        ]
    }
})
