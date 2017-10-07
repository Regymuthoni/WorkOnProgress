let carousels = document.getElementsByClassName('slideshow-container');

[].forEach.call(carousels, function (c) {
	// body...


	let next = c.getElementsByClassName('next')[0],
		prev = c.getElementsByClassName('prev')[0],
		bubbles = c.getElementsByClassName('bubbles')[0],
		inner = c.getElementsByClassName('inner')[0],
		imgs = c.getElementsByClassName('img')[0],
		currentImageIndex = 0,
		width = 800;

		function switchImg() {
			inner.style.left = -width * currentImageIndex + 'px';
		}

		next.addEventListener('click', function () {
			currentImageIndex++;

			if (currentImageIndex >=imgs.length){
				currentImageIndex = 0
			}

			switchImg();
		});

		prev.addEventListener('click', function () {
			currentImageIndex--;

			if (currentImageIndex < 0){
				currentImageIndex = imgs.length - 1;
			}

			switchImg();
		});

		console.log('slider')



});
