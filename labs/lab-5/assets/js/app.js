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
  
    });

    $('.toggle').click(function() {
      $('.cart').toggleClass('hide');
    });
