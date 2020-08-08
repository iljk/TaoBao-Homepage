function animate(obj,target,callback){
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            callback && callback();
        }
        // offsetLeft的值是固定的，是依照父元素的定位，不会随着位置的改变而改变
        // 不能用obj.style.left去加step，因为这个返回值是带单位的
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}