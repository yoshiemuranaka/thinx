Interactions = {};

Interactions = {
	init: function() {
		this.scroll.init();
	}
}

Interactions.scroll = {
	init: function() {
		this.listeners();
	},
	listeners: function() {
		console.log('adding event listeners');
		window.addEventListener("scroll", this.checkTop);
	},
	checkTop: function() {
		//check top page position
		var position = window.pageYOffset;
		var containerHeight = document.querySelectorAll(".product-container")[0].offsetHeight;
		if(position > containerHeight - window.innerHeight ) {
				var containers = document.querySelectorAll('.js-sticky');
				for (var i = 0; i < containers.length; i++) {
					containers[i].classList.add('not-sticky');
				}
		}else {
				var containers = document.querySelectorAll('.js-sticky');
				for (var i = 0; i < containers.length; i++) {
					containers[i].classList.remove('not-sticky');
				}
		}
	
	}

}

document.addEventListener("DOMContentLoaded", function() {
  Interactions.init();
});