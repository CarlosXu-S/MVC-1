import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
$tabBar.on('click', 'li',(e)=>{ //通过监听父元素，来监听子元素，这就是事件委托
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()  //通过index()方法知道排第几个
    $tabContent.children()
        .eq(index).addClass('active')  //eq()就是等于第几个
        .siblings().removeClass('active')                  

});
$tabBar.children().eq(0).trigger('click')