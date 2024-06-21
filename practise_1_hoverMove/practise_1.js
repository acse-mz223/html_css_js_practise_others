let body = document.querySelector('body')
let container = document.querySelector('.container')
let square1 = document.querySelector('.square1')
let square2 = document.querySelector('.square2')
let square3 = document.querySelector('.square3')

//计算中心点
let centerX = body.offsetWidth /2;
let centerY = body.offsetHeight /2;

//计算斜边
function distanceCalculate(a, b){
    return Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
}

//设置比例
let rate = 0.5;

//移动
document.addEventListener('mousemove',(Event) =>{
    // 获取鼠标位置
    let mouseX = Event.clientX;
    let mouseY = Event.clientY;
    // 计算距离
    let distance = rate * distanceCalculate(mouseX - centerX, mouseY - centerY);
    console.log(distance);
    // 计算角度
    let ang = Math.atan2(centerY - mouseY, centerX - mouseX)
    // 更新位置
    square1.style.transform = `translate(${0.5*distance * Math.cos(ang)}px,${0.5*distance * Math.sin(ang)}px)`;
    square2.style.transform = `translate(${distance * Math.cos(ang)}px,${distance * Math.sin(ang)}px)`;
    square3.style.transform = `translate(${2*distance * Math.cos(ang)}px,${2*distance * Math.sin(ang)}px)`;
});