// $('.item').click(function) {
//   if ($(this).hasClass('in-cart')) {
//   alert('ALREADY IN CART')};

//   var current_count = $('.item-count').html();
//       current_value = Math.abs(current_count);
//       new_count     = current_value + 1;
   
//     $('.item').html(new_count);

//     $(this).addClass('in-cart');

//   }

//   };

  $('.item').click(function() {
    if ($(this).hasClass('in-cart')) {
    console.log('ALREADY IN CART');
    }
    // var current_count = $('.item-count').html();
    //     current_value = Math.abs(current_count);
    //     new_count     = current_value + 1;
     
    //   $('.item').html(new_count);
  
    //   $(this).addClass('in-cart');

    //   add_to_cart(this);
  
    });

    $('.toggle').click(function() {
      $('.cart').toggleClass('hide');
    });

    function add_to_cart(line_item) {
      //get img and price of item clicked
      //inject html with img and price
      // var price = $(this).
      debugger;

      var price = $(line_item).data('price'),
          img = $(line_item).data('img');
          line_item_html = '...'

          $('.line-items').prepend(line_item_html);
    };


//create event listener for things modified or created in dom after page load
    $('.line-items').on('click', '.line-item', function(){
      
      var current_value = $('.total').data();
      
      $(this).html('').removeClass('line-item');
    });