/** LSC CDN helpers v3 */
(function () {
	'use strict';

	function boot() {
		document.body.classList.add('lsc_cdn');

		var home = document.getElementById('lsc-home') || document.querySelector('.lsc-home');
		if (!home) return;

		document.body.classList.add('has_lsc_home');

		var page = document.querySelector('.page_index_journal');
		if (page && home.parentElement) {
			// Prefer top of homepage
			var additional = home.closest('.additional_content');
			if (additional && page.firstElementChild !== additional) {
				page.insertBefore(additional, page.firstElementChild);
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', boot);
	} else {
		boot();
	}
})();
