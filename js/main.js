(function () {
	let $window = $(window)
	let $doc = $(document)

	$doc.ready(function() {
		let header = $('.header')
		let nav = $('.nav')
		let btn = $('.btn-menu')
    let soc = $('.socials')

		// Fixed header
	    $window.on("scroll", function() {
	    	let scrollTop = $window.scrollTop()

	        if (scrollTop > 0) {
	            header.addClass("header-fixed");
	        } else {
	            header.removeClass("header-fixed");
	        }
	    });

	    // Navigation toggler
	    $('.btn-menu').click(function(e) {
	    	e.preventDefault()
	    	nav.toggleClass('nav-open')
	    	btn.toggleClass('open')
        soc.toggleClass('soc-open')
	    })
	})
}());


