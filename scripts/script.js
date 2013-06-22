$(function(){
    $('footer').on('click', function(){
        $('header').animate({
            'height': '1000px'
        }, 2000, function(){alert('listo')}
        )
    })
});