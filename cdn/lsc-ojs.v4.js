/** LSC CDN helpers v4 — minimal, no layout moves */
(function () {
	'use strict';
	function boot() {
		document.body.classList.add('lsc_cdn');
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', boot);
	} else {
		boot();
	}
})();
