var nav_height = $('.Navigator').css("height")
if($('div').hasClass('CList')){
    var date_width = $('.deadline .date').css('width')
}
$('.main_container').css("margin-top", nav_height)
function Replace(){
    if($('div').hasClass('quicklink_container')){
        var ql_width = $('.quicklink_container').css('width')
        $('.main_container').css("width", "calc(100%"+"-"+ql_width+")")
        $('.main_container').css("margin-left", ql_width)
        if($('div').hasClass('CList')){
            //$('.homework_item').css("width", "calc("+$(window).width()+'px - '+ql_width+" - "+date_width+')')
            //for(var i = 0; i < $('.CList .day_item').length; i++){
            alert($('.day_item:nth_child(0)').css('display'))
            //}
        }
    }
}

$(document).ready(function () {
    Replace();
});
$(window).resize(function () { 
    Replace();
});