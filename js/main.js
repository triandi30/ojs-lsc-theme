/**
 * Small frontend helpers for LSC Theme.
 */
(function () {
	'use strict';

	function onReady(fn) {
		if (document.readyState !== 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	onReady(function () {
		var nodes = document.querySelectorAll(
			'.page_index_journal .homepage_about, ' +
			'.page_index_journal .current_issue, ' +
			'.page_index_journal .additional_content, ' +
			'.page_index_journal .cmp_announcements, ' +
			'.page_index_journal .lsc_hero'
		);

		if (!nodes.length || !('IntersectionObserver' in window)) {
			return;
		}

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
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
		);

		nodes.forEach(function (el) {
			observer.observe(el);
		});
	});
})();
