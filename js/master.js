// setGrid=========================================================
// 1.先依window實體寬度判斷是否為手機(480px)
// 2.再決定套grid-2 or grid-3
// 3.優化式子(提出具名函數setGrid)(用return減少大括號)

const $slide = $('#Slide')
const $grid = $slide.find('.grid')
const $nav = $('#Nav')
// 方法1.         直接在此判斷--------------
const isMobile = $(window).width()<=480
// 方法2. 用let宣告變數---------------------
// let isMobile;
// if($(window).width()<= 480){
//     isMobile=true;
// }else{
//     isMobile=false;
// }

function setGrid(){
    if(isMobile){
        $grid.addClass('grid-2');
        return;
    }
    $grid.addClass('grid-3')
}



// setScrollTop====================================================
// 每次scroll都要判斷scrooTop是否為0
// 來決定nav要刪除/添加class
// 外面再包一層if，因為只有手機版要套class，桌機不用
// // isMoble(isMobile == true); !isMobile(isMobile == false)

// 1.肯定寫法-------------------------------------
// function setScroll(){
//     if(isMobile){
//         $(window).scroll(function(){
//             if($(this).scrollTop()==0){
//                 $nav.removeClass('nav-active')
//                 return;
//             }$nav.addClass('nav-active')
//         })
//     }
// }

// 2.否定寫法---------------------------------------
// function setScroll(){
//     if(!isMobile){
//     // 不做任何事
//     }else{
//         $(window).scroll(function(){
//             if($(this).scrollTop()==0){
//                 $nav.removeClass('nav-active')
//                 return;
//             }$nav.addClass('nav-active')
//         })
//     }
// }
// 3.簡化否定寫法---------------------------------
function setScroll(){
    //   否定     就跳出不執行          
    if(!isMobile) return;
    // else執行下面
    $(window).scroll(function(){
        if($(this).scrollTop()==0){
            $nav.removeClass('nav-active')
            return;
        }$nav.addClass('nav-active')
    })
}

// setFancybox 客製化 =========================================

function setFancybox (){
         // 啟用fancybox (客製化內容用{}包起來；用,隔開)
    $grid.find('a').fancybox({
        protect:true,
        loop:true,
        

    })
}

// ===========================================================


// 整理function
// 所有初始就設定的function放一起
function setInit(){
    setGrid();
}

// 有事件發生才呼叫的function放一起
function setEvent(){
    setScroll();
    setFancybox();
}

setInit();
setEvent();







