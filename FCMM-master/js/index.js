function toggleTab(){
    const target = $(this).attr('button')
    $('.sec_first_nav .click_color').removeClass('click_color')//클래스 안의 저 클래스 모두 삭제
    $(this).addClass('click_color')//자신에게 클래스 넣어줌
    $(target).addClass('click_color')//타겟에 바뀐 내용 적용
    return false
}

// var bottom = $("#bottom").css({"display":"inline-block"}).siblings().css({"display":"none"})

// var bottom = document.getElementById("bottom")

// function siblingsToggleTop(){
//     $("#top").show().siblings().hide();
// }

function siblingsToggleOuter(){
    $("#outer").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#outer' ).hide();
}

function siblingsToggleTop(){
    $("#top").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#top' ).hide();
}

function siblingsToggleBottom(){
    $("#bottom").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#bottom' ).hide();
}

function siblingsToggleShoes(){
    $("#shoes").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#shoes' ).hide();
}

function siblingsToggleAcc(){
    $("#acc").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#acc' ).hide();
}

function siblingsToggleCosmetics(){
    $("#cosmetics").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#cosmetics' ).hide();
}

function siblingsToggleDog(){
    $("#dog").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#dog' ).hide();
}

function siblingsToggleBurning(){
    $("#burning").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#burning' ).hide();
}

function siblingsToggleWater(){
    $("#water").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#water' ).hide();
}

function siblingsToggleOulet(){
    $("#oulet").show().siblings().show();

    $( '.sec_main_menu a' ).not( 'a#oulet' ).hide();
}

function siblingsToggleAll(){
    $("#oulet").show().siblings().show();
}


// function clickTel(){
//         $("body").css({"background":"black"}).css({"z-index":"90"}).css({"opacity":"0.2"})
//         $(".f_num_pop").css({"display":"block"}).css({"z-index":"100"});
// }



$(document).on('click','.sec_first_nav button', toggleTab).on('click','#box_all',siblingsToggleAll).on('click','#box_outer',siblingsToggleOuter).on('click','#box_top',siblingsToggleTop).on('click','#box_shoes',siblingsToggleShoes).on('click','#box_bottom',siblingsToggleBottom).on('click','#box_acc',siblingsToggleAcc).on('click','#box_cosmetics',siblingsToggleCosmetics).on('click','#box_dog',siblingsToggleDog).on('click','#box_burning',siblingsToggleBurning).on('click','#box_water',siblingsToggleWater).on('click','#box_oulet',siblingsToggleOulet)//클릭하면 .sec_first_nav a에 적용

// 해당 a 클릭시에 ''클래스 제외 전부 삭제 h1 에 innerHTML
