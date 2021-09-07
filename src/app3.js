import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')
$square.on('click', ()=>{
    $square.toggleClass('active') //如果没有就加上，如果没有就删掉，jQuery内置的操作
})