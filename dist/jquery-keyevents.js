/*!
 * jQuery-keyEvents - 23th Out 2015
 * https://github.com/miamarti/jquery-keyEvents
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 */
(function($) {
    $.fn.keyEvents = function(options) {
        var hashMap = {
			'backspace': '8',
			'delete': '46',
			'insert': '45',
			'home': '36',
			'end': '35',
			'page-up': '33',
			'page-down': '34',
			'esc': '27',
			'tab': '9',
			'caps-lock': '20',
			'shift': '16',
			'ctrl': '17',
			'alt': '18',
			'alt-gr': '225',
			'enter': '13',
			'left': '37',
			'right': '39',
			'up': '38',
			'down': '40'
        };
        var defaults = {
			info: false,
			callback: function(key){
				console.info(key);
			}
        };
        var settings = $.extend({}, defaults, options);
        var keyMap =  $.extend({}, hashMap, settings.keyMap);
		this.keydown(function(event){
			var keyCode = event.which || event.keyCode;
			if(settings.hasOwnProperty(keyCode.toString())){
				settings[keyCode.toString()](this);
			} else {
				for(var name in settings){
					if(keyMap.hasOwnProperty(name)){
						settings[keyMap[name]] = settings[name];
						delete settings[name];
					}
				}
			}
			(settings.info || options.callback) ? settings.callback(keyCode) : '';
		});
    };
}(jQuery));
