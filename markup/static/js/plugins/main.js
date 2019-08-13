
$(document).ready(function () {
	popup ();

	$("body").css({"visibility": "visible", "opacity": "1"})

	var swiper = new Swiper('.made-slider', {
		slidesPerView: 3,
		loop: true,
		autoplay: {
			delay: 3000,
		},
	});

	var swiper = new Swiper('.team-slider', {
		slidesPerView: 6,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 2500,
		},
	});
	var a = 0;	
	var lazyLoadInstance = new LazyLoad({
		elements_selector: "img"
		// ... more custom settings?
	});

	if ($(".team").length > 0) {
		var oTop = $('.team').offset().top - window.innerHeight +150;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
			var $this = $(this),
				countTo = $this.attr('data-count');
				var floor = Math.floor(Math.random() * 20) + 20;
				var floor2 = floor * 100;
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},
		
				{
					duration: floor2,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
						//alert('finished');
				}
				});
			});
			a = 1;
		}	
		
		$(window).scroll(function() {
			
			var oTop = $('.team').offset().top - window.innerHeight +150;
			if (a == 0 && $(window).scrollTop() > oTop) {
				$('.counter-value').each(function() {
					var $this = $(this),
					countTo = $this.attr('data-count');
					var floor = Math.floor(Math.random() * 20) + 20;
		var floor2 = floor * 100;
		console.log(floor2);
					$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
				},
	
				{
	
				duration: floor2,
				easing: 'swing',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
					//alert('finished');
				}
	
				});
			});
			a = 1;
		}
	
		});
	}


	$(document).ready(function() {
		$('select').niceSelect();
	});

	$('.first-form').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				url: {
					digits: true,

					required: true,
					maxlength: 4,
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				
				$.ajax({
					success: function(){
						var rowId = it.closest('tr').data("id");
					}
				});
			},  
         });
	 });

	 $(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(".number-result").text($input.val());
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(".number-result").text($input.val());
    });
	$(".m-bg-cont").each(function() {
		var it = $(this);
		var src = it.find("img").attr("data-src")
		it.css("background-image", "url(" +src+ ")");
	});

	function parallax() {
		$(".parallax").each(function() {
			var scroll = $(document).scrollTop();
			$(this).css({
				'background-position':'50% '+(-0.5*scroll)+'px'
			});
		})
		$(".parallax-text").each(function() {
			var scroll = $(document).scrollTop();
			$(this).css({
				'opacity': 1 - scroll / 250,
				"margin-top": scroll / 2
			});
		});
	}
	parallax();

	$(window).scroll(function() {
		parallax();		
	});

})