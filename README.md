JQuery keyEvents
===========

[![Join the chat at https://gitter.im/miamarti/jquery-keyEvents](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/miamarti/jquery-keyEvents?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[jquery-keyEvents] jQuery keyEvents

<p>
  <a href="https://gitter.im/miamarti/jquery-keyEvents?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge" target="_blank"><img src="https://badges.gitter.im/Join%20Chat.svg"></a>
  <img src="https://img.shields.io/badge/jquery--keyevents-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg">
  <img src="https://img.shields.io/bower/v/bootstrap.svg">
</p>

## Bower install de dependency
```
$ bower install jquery-keyevents --save
```

## HTML Page include
```
<script src="bower_components/jquery-keyevents/dist/jquery-keyevents.min.js"></script>
```

## Creating KeyEvents
```
$(document).ready(function() {
    
  	$(document).keyEvents({
  		'37': function(){
  		    console.log('L');
  		},
  		'39': function(){
  		    console.log('R');
  		}
  	});
    
});
```
OR
```
$(document).ready(function() {
    
  	$(document).keyEvents({
      'backspace': function(){
  		    console.log('You pressed backspace');
  		},
      'delete': function(){
  		    console.log('You pressed delete');
  		},
      'insert': function(){
  		    console.log('You pressed insert');
  		},
      'home': function(){
  		    console.log('You pressed home');
  		},
      'end': function(){
  		    console.log('You pressed end');
  		},
      'page-up': function(){
  		    console.log('You pressed page-up');
  		},
      'page-down': function(){
  		    console.log('You pressed page-down');
  		},
      'esc': function(){
  		    console.log('You pressed esc');
  		},
      'tab': function(){
  		    console.log('You pressed tab');
  		},
      'caps-lock': function(){
  		    console.log('You pressed caps lock');
  		},
      'shift': function(){
  		    console.log('You pressed shift');
  		},
      'ctrl': function(){
  		    console.log('You pressed ctrl');
  		},
      'alt': function(){
  		    console.log('You pressed alt');
  		},
      'alt-gr': function(){
  		    console.log('You pressed alt gr');
  		},
      'enter': function(){
  		    console.log('You pressed enter');
  		},
      'left': function(){
  		    console.log('You pressed left');
  		},
      'right': function(){
  		    console.log('You pressed right');
  		},
      'up': function(){
  		    console.log('You pressed up');
  		},
      'down': function(){
  		    console.log('You pressed down');
  		},
  		'callback': function(key){
  		    console.log('You pressed key ' + key);
  		}
  	});
    
});
```
