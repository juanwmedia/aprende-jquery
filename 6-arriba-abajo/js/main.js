// Esperar que el DOM esté listo
$(document).ready(function () {
    // Parent / parents
    /*var $parent = $('.lateral').find('span').last().parents();
    $parent.css('border', '1px solid red');*/

    // Children / find
    var $children = $('main').find('*');
    $children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });
});