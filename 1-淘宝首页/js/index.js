window.addEventListener('load', function () {
    // 头部导航条
    // 地址下拉框
    var location = document.querySelector('.location');
    var toplocation = document.querySelector('.top-location');
    var locationlist = document.querySelector('.location-list');

    location.addEventListener('mouseenter', function () {
        locationlist.style.display = 'block';
        toplocation.classList.remove('closestyle');
        toplocation.classList.add('showstyle');
    })

    location.addEventListener('mouseleave', function () {
        locationlist.style.display = 'none';
        toplocation.classList.remove('showstyle');
        toplocation.classList.add('closestyle');
    })

    // 我的淘宝下拉框
    var mytaobao = document.querySelector('.mytaobao');
    var mytaobaolist = document.querySelector('.mytaobao-list');

    mytaobao.addEventListener('mouseenter', function () {
        mytaobaolist.style.display = 'block';
        mytaobao.classList.remove('closestyle');
        mytaobao.classList.add('showstyle');
    })

    mytaobao.addEventListener('mouseleave', function () {
        mytaobaolist.style.display = 'none';
        mytaobao.classList.remove('showstyle');
        mytaobao.classList.add('closestyle');
    })

    // 购物车下拉菜单
    var gwc = document.querySelector('.gwc');
    var gwclist = document.querySelector('.gwc-list');
    gwc.addEventListener('mouseenter', function () {
        gwclist.style.display = 'block';
        gwc.classList.remove('closestyle');
        gwc.classList.add('showstyle');
    })

    gwc.addEventListener('mouseleave', function () {
        gwclist.style.display = 'none';
        gwc.classList.remove('showstyle');
        gwc.classList.add('closestyle');
    })

    // 收藏夹下拉框
    var scj = document.querySelector('.scj');
    var scjlist = document.querySelector('.scj-list');
    scj.addEventListener('mouseenter', function () {
        scjlist.style.display = 'block';
        scj.classList.remove('closestyle');
        scj.classList.add('showstyle');
    })

    scj.addEventListener('mouseleave', function () {
        scjlist.style.display = 'none';
        scj.classList.remove('showstyle');
        scj.classList.add('closestyle');
    })

    //千牛卖家中心下拉框
    var mjzx = document.querySelector('.mjzx');
    var mjzxlist = document.querySelector('.mjzx-list')
    mjzx.addEventListener('mouseenter', function () {
        mjzxlist.style.display = 'block';
        mjzx.classList.remove('closestyle');
        mjzx.classList.add('showstyle');
    })

    mjzx.addEventListener('mouseleave', function () {
        mjzxlist.style.display = 'none';
        mjzx.classList.remove('showstyle');
        mjzx.classList.add('closestyle');
    })

    //联系客服下拉框
    var lxkf = document.querySelector('.lxkf');
    var lxkflist = document.querySelector('.lxkf-list')
    lxkf.addEventListener('mouseenter', function () {
        lxkflist.style.display = 'block';
        lxkf.classList.remove('closestyle');
        lxkf.classList.add('showstyle');
    })

    lxkf.addEventListener('mouseleave', function () {
        lxkflist.style.display = 'none';
        lxkf.classList.remove('showstyle');
        lxkf.classList.add('closestyle');
    })

    /* 网站导航下拉框 */
    var wzdh = document.querySelector('.wzdh');
    var wzdhlist = document.querySelector('.wzdh-list')
    wzdh.addEventListener('mouseenter', function () {
        wzdhlist.style.display = 'block';
        wzdh.classList.remove('closestyle');
        wzdh.classList.add('showstyle');
    })

    wzdh.addEventListener('mouseleave', function () {
        wzdhlist.style.display = 'none';
        wzdh.classList.remove('showstyle');
        wzdh.classList.add('closestyle');
    })

    // 关闭二维码框框
    var qrcodewrapper = document.querySelector('.qrcode-wrapper');
    var qrcodeclose = document.querySelector('.qrcode-close');
    qrcodeclose.addEventListener('click', function () {
        qrcodewrapper.style.display = 'none';
    })

    //第一个轮播图
    var bannerlbt1 = document.querySelector('.banner-lbt1');
    var lbt1imglist = document.querySelector('.lbt1-imglist');
    var lbt1pointer = document.querySelector('.lbt1-pointer');
    var lbt1prev = document.querySelector('.lbt1-prev');
    var lbt1next = document.querySelector('.lbt1-next');
    var lbt1width = bannerlbt1.offsetWidth;

    //1.1动态生成小点
    for (var i = 0; i < lbt1imglist.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        lbt1pointer.appendChild(li);

        // 1.1.1为每个li添加点击事件
        li.addEventListener('click', function () {

            pointchange(this.getAttribute('index'));

            // 1.1.3 点击圈圈,跳转图片
            var index = this.getAttribute('index');
            lbt1index = index;
            lbt1imglist.style.left = -index * lbt1width + 'px';
        })
    }

    // 1.1.2先默认为第一个小圈圈选中
    // lbt1pointer.children[0].classList.add('lbt1-current');
    lbt1pointer.children[0].className = 'lbt1-current';


    // 2.深拷贝第一张图片和最后一张图片
    var img1 = lbt1imglist.children[0].cloneNode(true);
    lbt1imglist.appendChild(img1);
    // 只需要复制第一张图片就好了
    // var img2 = lbt1imglist.children[4].cloneNode(true);
    // lbt1imglist.insertBefore(img2, lbt1imglist.children[0]);

    var lbt1index = 0;
    //3.点击按钮,移动图片
    //3.1 左键
    lbt1prev.addEventListener('click', function () {
        if (lbt1index == 0) {
            lbt1index = 5;
            lbt1imglist.style.left = -lbt1width*lbt1index + 'px';        
        }
        lbt1index--;
        animate(lbt1imglist,-lbt1width * lbt1index);
        pointchange(lbt1index);
    })

    //3.2 右键
    lbt1next.addEventListener('click', function () {
        if (lbt1index == 5) {
            lbt1index = 0;
            lbt1imglist.style.left = 0;          
        }  
        lbt1index++;
        animate(lbt1imglist,-lbt1width*lbt1index); 
        
        if(lbt1index == 5){
            pointchange(0);
        }else{
            pointchange(lbt1index);
        }
    })

    
    // 4.改变圈圈点击状态
    function pointchange(num) {
        for (var i = 0; i < lbt1pointer.children.length; i++) {
            lbt1pointer.children[i].className = '';
        }
        lbt1pointer.children[num].className = 'lbt1-current';
    }

    //5.设置定时器
    var timer = setInterval(function(){
        lbt1next.click();
    },4000)

    //6.鼠标引入显示左右键，暂停定时器
    bannerlbt1.addEventListener('mouseenter',function(){
        clearInterval(timer);
        lbt1next.style.display = 'block';
        lbt1prev.style.display = 'block';
    })

    //7.鼠标移出隐藏左右键，开启定时器
    bannerlbt1.addEventListener('mouseleave',function(){
        timer = setInterval(function(){
            lbt1next.click();
        },4000)
        lbt1next.style.display = 'none';
        lbt1prev.style.display = 'none';
    })


    // 第二个轮播图
    var bannerlbt2 = document.querySelector('.banner-lbt2');
    var lbt2imglist = document.querySelector('.lbt2-imglist');
    var lbt2prev = document.querySelector('.lbt2-prev');
    var lbt2next = document.querySelector('.lbt2-next');
    var lbt2number = document.querySelector('.lbt2-number');
    var lbt2hdline = document.querySelector('.lbt2-hd-line');
    var lbt2width = bannerlbt2.offsetWidth;
    // 添加属性，更改图片序号、颜色
    for(var i = 0;i < lbt2hdline.children.length;i++){
        lbt2hdline.children[i].setAttribute('index',i+1);

        lbt2hdline.children[i].addEventListener('click',function(){
            linechange(this.getAttribute('index') - 1);
            lbt2number.innerHTML = this.getAttribute('index');

            // 跟换图片

        })
    }

    // 深拷贝第一张图片
    var firstimg = lbt2imglist.children[0].cloneNode(true);
    lbt2imglist.appendChild(firstimg); 

    function linechange(num){
        for(var i = 0;i < lbt2hdline.children.length;i++){
            lbt2hdline.children[i].className = '';
        }
        lbt2hdline.children[num].className = 'lbt2-hd-line-current';
    }

    var lbt2index = 0;
    // 箭头按键
    // 左键
    lbt2prev.addEventListener('click',function(){
        if(lbt2index == 0){
            lbt2index = 6;
            lbt2imglist.style.left = -lbt2width*lbt2index + 'px';
        }
        lbt2index--;
        animate(lbt2imglist,-lbt2index*lbt2width);
        linechange(lbt2index);
        lbt2number.innerHTML = lbt2index + 1;
    })
    // 右键
    lbt2next.addEventListener('click',function(){
        if(lbt2index == 6){
            lbt2index = 0;
            lbt2imglist.style.left = -lbt2width*lbt2index + 'px';
        }
        lbt2index++;
        animate(lbt2imglist,-lbt2index*lbt2width);
        if(lbt2index == 6){
            linechange(0);
            lbt2number.innerHTML = 1;
        }else{
            linechange(lbt2index);
            lbt2number.innerHTML = lbt2index + 1;
        }  
    })

    // 设置定时器
    var lbt2timer = setInterval(function(){
        lbt2next.click();
    },3000);

    // 鼠标移入，停止定时器，显示按键
    bannerlbt2.addEventListener('mouseenter',function(){
        lbt2prev.style.display = 'block';
        lbt2next.style.display = 'block';
        clearInterval(lbt2timer);
    })

    // 鼠标移出，开始定时器，隐藏按键
    bannerlbt2.addEventListener('mouseleave',function(){
        lbt2prev.style.display = 'none';
        lbt2next.style.display = 'none';
        lbt2timer = setInterval(function(){
            lbt2next.click();
        },3000);
    })

    // 用户信息栏，规则文字内容
    var userinforulelist = document.querySelector('.userinfo-rule-list');
    var userinforulecontent = document.querySelector('.userinfo-rule-content-a');
    for(var i = 0;i < userinforulelist.children.length;i++){
        userinforulelist.children[i].setAttribute('index',i + 1);
        userinforulelist.children[i].addEventListener('mouseenter',function(){
            for(var i = 0;i < userinforulelist.children.length;i++){
                userinforulelist.children[i].className = '';
            }
            this.className = 'userinfo-rule-current';
            index = this.getAttribute('index');
            userinforulecontent.innerHTML = '这里是内容' + index;
        })
    }

    //用户信息框里的logo图片
    var userinfologolist = document.querySelector('.userinfo-logo-list');
    var userinfologoimg = document.querySelectorAll('.userinfo-logo-img');
    for(var i = 0;i < userinfologolist.children.length;i++){
        userinfologoimg[i].style.backgroundPosition = '0 -' + i*44 + 'px';
    }

    // 右侧导航条
    var cbnavWrapper = document.querySelector('.cbnav-wrapper');
    var pzhh = document.querySelector('.pzhh');
    var yhh = document.querySelector('.yhh');
    var hhzb = document.querySelector('.hhzb');
    var db = document.querySelector('.db');
    var hp = document.querySelector('.hp');
    var fk = document.querySelector('.fk');
    var bkjb = document.querySelector('.bkjb');
    // 第二个轮播图
    var lbt2 = document.querySelector('.banner-lbt2-hd');
    var lbt2Top = lbt2.offsetTop;
    //有好货,,,返回顶部按键出现
    var yhhWrapper = document.querySelector('.shop-info');
    var yhhTop = yhhWrapper.offsetTop;
    //好货直播
    var goodShop = document.querySelector('.good-shop');
    var goodShopTop = goodShop.offsetTop;

    // 起始位置
    cbnavWrapper.style.top = lbt2Top + 'px';

    // 这里是document，也可以window
    window.addEventListener('scroll',function(e){
        if(window.pageYOffset >= lbt2Top){       
            cbnavWrapper.style.position = 'fixed';
            cbnavWrapper.style.top = 0;
        }else{
            cbnavWrapper.style.position = 'absolute';
            cbnavWrapper.style.top = lbt2Top + 'px';
        }

        // 返回顶部按键出现
        if(window.pageYOffset >= yhhTop){
            db.style.display = 'block';
        }else{
            db.style.display = 'none';
        }

        // 选中框框变色
        function changecolor(obj){
            for(var i = 0;i < cbnavWrapper.children.length;i++){
                cbnavWrapper.children[i].classList.remove('cbnav-wrapper-current');
            }
            obj.classList.add('cbnav-wrapper-current');
        }

        if(window.pageYOffset >= yhhTop && window.pageYOffset <= goodShopTop){
            changecolor(yhh);
        }else if(window.pageYOffset >= goodShopTop){
            changecolor(hhzb);
        }else{
            changecolor(pzhh);
        }

        // 去到品质好或
        pzhh.addEventListener('click',function(){
            goto(window,0);
        })

        // 去到有好货
        yhh.addEventListener('click',function(){
            goto(window,yhhTop);
        })

        //去到好货直播
        hhzb.addEventListener('click',function(){
            goto(window,goodShopTop);
        })

        // 回到顶部
        db.addEventListener('click',function(){
            goto(window,0);
        })

        function goto(obj,target,callback){
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                var step = (target - obj.pageYOffset) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if(obj.pageYOffset === target){
                    clearInterval(obj.timer);
                    callback && callback();
                }

                window.scroll(0,obj.pageYOffset + step);
            },15)
        }
    });
})