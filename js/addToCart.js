/*
    This handles the add-to-cart animation when a user clicks on the Add to Cart button.
*/

$(document).ready(function() {
    console.log("ready!");

    $('.add-to-cart').on('click', function() {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parents('.thumbnail').find("img").eq(0);
        if (imgtodrag) {
            // Creates a clone of the image to move to shopping cart
            var imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                // Affects the visual design of the image that has been cloned
                .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                // Transitions the cloned image to the shopping cart
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');

            setTimeout(function() {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function() {
                $(this).detach()
            });
        }
    });
});
