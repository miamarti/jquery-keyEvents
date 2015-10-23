JQuery keyEvents
===========
[jquery-keyEvents] jQuery keyEvents

<p>
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
<script src="bower_components/jquery-keyEvents/dist/jquery-keyevents.min.js"></script>
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
