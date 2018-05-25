var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	startDelay: 10,
	typeSpeed: 50,
	backSpeed: 10,
	backDelay: 2000,
	smartBackspace: false,
	loop: true
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});