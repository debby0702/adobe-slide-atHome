// setGrid=========================================================
// 1.先依window實體寬度判斷是否為手機(480px)
// 2.再決定套grid-2 or grid-3
// 3.優化式子(提出具名函數setGrid)(用return減少大括號)


const $slide = $('#Slide')
const $grid = $slide.find('.grid')
const $nav = $('#Nav')
const $btns = $nav.find('.nav-btn')
// 方法1.         直接在此判斷--------------
const isMobile = $(window).width() <= 480
// 方法2. 用let宣告變數---------------------
// let isMobile;
// if($(window).width()<= 480){
//     isMobile=true;
// }else{
//     isMobile=false;
// }

function setGrid() {
    if (isMobile) {
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
function setScroll() {
    //   否定     就跳出不執行          
    if (!isMobile) return;
    // else執行下面
    $(window).scroll(function () {
        if ($(this).scrollTop() == 0) {
            $nav.removeClass('nav-active')
            return;
        } $nav.addClass('nav-active')
    })
}

// setFancybox 客製化 =========================================

function setFancybox() {
    // 啟用fancybox (客製化內容用{}包起來；用,隔開)
    $grid.find('a').fancybox({
        protect: true,
        loop: true,


    })
}

// setClickBtn ================================================

function setClickBtn() {
    
    // 每次按鈕被點選，就判斷slide位置
    $btns.click(function () {

        // 節省效能：每次點選，當前頁面按鈕就設定disabled(反灰的input按鈕)
        // 放第一行最好，就不用執行index判斷
        $(this)
        // 該按鈕屬性放上disabled ,要開啟
        .attr('disabled',true)
        // 其他按鈕的disabled ,不開啟
        .siblings().attr('disabled',false)
        // console.log(33)



        const index = $(this).index()
        // console.log(index)

        // 1.if:最耗能寫法(每一行都會執行不會停)
        // if (index == 0) {
        //     $slide.css('transform', 'translate(0,0)');
        // }
        // if (index == 1) {
        //     $slide.css('transform', 'translate(-100vw,0)');
        // }
        // if (index == 2) {
        //     $slide.css('transform', 'translate(-200vw,0)');
        // }
        // if (index == 3) {
        //     $slide.css('transform', 'translate(0,-100vh)');
        // }
        // if (index == 4) {
        //     $slide.css('transform', 'translate(-100vw,-100vh)');
        // }
        // if (index == 5) {
        //     $slide.css('transform', 'translate(-200vw,-100vh)');
        // }

        // ----------------------------------------------------------
        // 2.else if:較不耗能寫法(執行到就停止)
        // if (index == 0) {
        //     $slide.css('transform', 'translate(0,0)');
        // } else if (index == 1) {
        //     $slide.css('transform', 'translate(-100vw,0)');
        // } else if (index == 2) {
        //     $slide.css('transform', 'translate(-200vw,0)');
        // } else if (index == 3) {
        //     $slide.css('transform', 'translate(0,-100vh)');
        // } else if (index == 4) {
        //     $slide.css('transform', 'translate(-100vw,-100vh)');
        // } else if (index == 5) {
        //     $slide.css('transform', 'translate(-200vw,-100vh)');
        // }

        // -------------------------------------------------------------
        // 3.switch + case:最不耗能、最好管理
        // (index)表示要用index值來判斷
        switch(index){
            // 若 index=0
            case 0:
                // 放要執行的事
                $slide.css('transform', 'translate(0,0)');
                // break:對了就不往下執行判斷
                break;
            case 1:
                $slide.css('transform', 'translate(-100vw,0)');
                break;
            case 2:
                $slide.css('transform', 'translate(-200vw,0)');
                break;
            case 3:
                $slide.css('transform', 'translate(0,-100vh)');
                break;
            case 4:
                $slide.css('transform', 'translate(-100vw,-100vh)');
                break;
            case 5:
                $slide.css('transform', 'translate(-200vw,-100vh)');
                break;
        }

    });
}

// ===========================================================


// 整理function
// 所有初始就設定的function放一起
function setInit() {
    setGrid();
    // 節省耗能：初始只有acrobat按鈕被添加disabled的屬性
    $btns.eq(0).attr('disabled',true);
}

// 有事件發生才呼叫的function放一起
function setEvent() {
    setScroll();
    setFancybox();
    setClickBtn();
}

setInit();
setEvent();







