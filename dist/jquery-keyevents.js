/*!
 * jQuery-keyEvents - 23th Out 2015
 * https://github.com/miamarti/jquery-keyEvents
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 */
(function($) {
    $.fn.keyEvents = function(options) {
        var defaults = {
        	info: false,
        	callback: function(key){
        		console.info(key);
        	}
        };
        var settings = $.extend({}, defaults, options);
		this.keydown(function(event){
		    var keyCode = event.which || event.keyCode;
		    settings.hasOwnProperty(keyCode.toString()) ? settings[keyCode.toString()](this) : '';
		    (settings.info || options.callback) ? settings.callback(keyCode) : '';
		});
    };
}(jQuery));
