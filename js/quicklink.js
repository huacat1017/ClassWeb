var nav_height = $('.Navigator').css("height")
$('.quicklink_container').css("top", nav_height)
$('.quicklink_container').css("height", "calc(100% - "+nav_height+")")