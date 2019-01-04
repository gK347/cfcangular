/* ========== Slick js Strat ========== */ 

/* ========== Slick js Strat ========== */
/* ========== Accodin js Strat ========== */ 
(function(jQuery){
     jQuery.fn.extend({  
         accordion: function() {       
			
            return this.each(function() {
            	
            	var $ul = $(this);
            	
				if($ul.data('accordiated'))
					return false;
													
				$.each($ul.find('ul, li>div'), function(){
					$(this).data('accordiated', true);
					$(this).hide();
				});				
				$.each($ul.find('a'), function(){
					$(this).click(function(e){
						activate(this);
						return void(0);
					});
				});				
				var sPath = window.location.href;
				var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
				var findvar=sPage;
				var active = (findvar)?$(this).find('a[href="' + findvar + '"]'):'';
				if(active){
					activate(active, 'toggle');
					$(active).parents().show();
				}
				function activate(el,effect){
					$(el).parent('li').toggleClass('active').siblings().removeClass('active').children('ul, div').slideUp('fast');
					$(el).siblings('ul, div')[(effect || 'slideToggle')]((!effect)?'fast':null);
				}				
            });
        } 
    }); 
})(jQuery);
/* ========== Accodin js End ========== */ 