/**
 * LSC CDN helpers for OJS — v2
 */
(function () {
	'use strict';

	function onReady(fn) {
		if (document.readyState !== 'loading') fn();
		else document.addEventListener('DOMContentLoaded', fn);
	}

	onReady(function () {
		document.body.classList.add('lsc_cdn');

		var home = document.getElementById('lsc-home') || document.querySelector('.lsc-home');
		if (home) {
			document.body.classList.add('has_lsc_home');

			// Move LSC block to top of journal homepage content
			var page = document.querySelector('.page_index_journal');
			if (page && home.parentElement !== page) {
				page.insertBefore(home, page.firstChild);
			} else if (page && page.firstChild !== home) {
				page.insertBefore(home, page.firstChild);
			}
		}

		var nodes = document.querySelectorAll(
			'.lsc-home__intro, .lsc-home__section, .lsc-home__banner'
		);
		if (!nodes.length || !('IntersectionObserver' in window)) return;

		nodes.forEach(function (el) {
			el.classList.add('lsc_reveal');
		});

		var observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is_visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '0px 0px -6% 0px', threshold: 0.1 }
		);

		nodes.forEach(function (el) {
			observer.observe(el);
		});
	});
})();
