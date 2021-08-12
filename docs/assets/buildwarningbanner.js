/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals window */

// Display a warning banner when browsing local or nightly documentation build.
if ( window.location.host !== 'ckeditor.com' ) {
	window.umberto.showWarningBanner(
		`${ window.location.host === 'ckeditor5.github.io' ? 'Nightly' : 'Development' } documentation ahead. ` +
		'Switch to the <a href="https://ckeditor.com/docs/ckeditor5">stable editor documentation</a>.'
	);
}
