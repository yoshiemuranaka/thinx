Interactions = {};

Interactions = {
	init: function() {
		this.scroll.init();
		this.formActions.init();
		this.lightbox.init();
	}
}

Interactions.scroll = {
	init: function() {
		this.listeners();
	},
	listeners: function() {
		window.addEventListener("scroll", Interactions.scroll.checkTop);
	},
	checkTop: function() {
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

Interactions.formActions = {
	init: function() {
		this.listeners();
	},
	listeners: function() {
		var controllers = document.querySelectorAll('.js-controller');
		for(var i=0; i < controllers.length; i++) {
			controllers[i].addEventListener("click", Interactions.formActions.checkController);
		}	
	},
	checkController: function() {
		var action = this.getAttribute('data-action');
		if(action == 'add') {
			Interactions.formActions.addQuantity();
		}else if (action == 'subtract') {
			Interactions.formActions.subtractQuantity();
		}
	},
	addQuantity: function() {
		var current = parseFloat(document.getElementById('quantity').value);
		var total = current += 1;
		document.getElementById('quantity').value = total;
	},
	subtractQuantity: function() {
		var current = parseFloat(document.getElementById('quantity').value);
		var total = current -= 1;
		document.getElementById('quantity').value = total;
		console.log('subtracting');
	}
}

Interactions.lightbox = {
	init: function() {
		this.listeners();
	},
	listeners: function() {
		var trigger = document.querySelectorAll('.js-lightbox-trigger');
		for(var i=0; i < trigger.length; i++) {
			trigger[i].addEventListener("click", Interactions.lightbox.activate);
		}	
		var target = document.querySelectorAll('.js-lightbox-target');
		for(var i=0; i < target.length; i++) {
			target[i].addEventListener("click", Interactions.lightbox.close);
		}	
	},
	activate: function() {
		document.getElementById('js-lightbox-target').classList.add('active');
		document.documentElement.classList.add('disable-scroll');
	},
	close: function() {
		this.classList.remove('active');
		document.documentElement.classList.remove('disable-scroll');
	}
}

document.addEventListener("DOMContentLoaded", function() {
  Interactions.init();
});