if($('div').hasClass('CList')){
    var date_width = $('.deadline .date').css('width')
}
function Replace(){
    var nav_height = $('.Navigator').css("height")
    $('.main_container').css("margin-top", nav_height)
    if($('div').hasClass('quicklink_container')){
        $('.quicklink_container').css("top", nav_height)
        $('.quicklink_container').css("height", "calc(100% - "+nav_height+")")
        var ql_width = $('.quicklink_container').css('width')
        $('.main_container').css("width", "calc(100%"+"-"+ql_width+")")
        $('.main_container').css("margin-left", ql_width)
    }
}

$(document).ready(function () {
    Replace();
});
$(window).on('resize', function () {
    Replace();
});