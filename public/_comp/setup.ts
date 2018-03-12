declare var loadjs: any
declare var onSetup: any

loadjs([
	'//cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js'
	,'//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
	,'//cdn.jsdelivr.net/npm/signals@1.0.0/dist/signals.js'
	], 'PRELoadB', {  
			async: false //required due to loadjs bug with bundles
		}
)
window.addEventListener('pageshow', function(event) {
	console.log('pageshow:', event.timeStamp)
})