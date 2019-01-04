/* ========== Navigation mobile view js Strat ========== */ 
$(document).ready(function () {
               /* $("#sidebar").mCustomScrollbar({
                    theme: "minimal"
                });*/
                $('#dismiss, .overlay').on('click', function () {
                    $('#sidebar').removeClass('active');
                    $('.overlay').fadeOut();
                });

                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar').toggleClass('active');
                    $('.overlay').fadeIn();
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                });
});
/* ========== Navigation mobile view js Strat ========== */
/* ========== slick slider product js Strat ========== */ 
$(".product_hm").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
          responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
/* ========== slick slider product js Strat ========== */
/* ========== Accodin js Strat ========== */ 
// <![CDATA[			
		$(document).ready(function () {
			$('#pageWrap ul').accordion();
		});		
		// ]]>
/* ========== Accodin js End ========== */

