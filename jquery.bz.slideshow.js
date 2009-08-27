(function($) {
	/*var $slideshow = $.slideshow = function(target) {
		$(target).find('li').each(function() {
			$(this).hide();
		});
		$(target).find('li :first').show();
	};*/
	
	$.fn.slideshow = function(options) {
		var el = this;
		
		el.opts = $.extend({}, options);
		
		$(this).find('li').each(function() {
			$(this).hide();
		});
		
		$(this).find('li:first').show();
		
		$('a[rel*=slideshow]').click(function() {
			el.target = $(this);
			eval("el.find('li:visible').hide("+el.opts.hideMethod+", function() { el.find('li[id='+el.target.attr('href')+']').show("+el.opts.showMethod+"); });");
			//eval("el.find('li[id='+$(this).attr('href')+']').show("+el.opts.showMethod+");");
			return false;
		});
	};
})(jQuery);