// postition won't work correctly if you
// use a custom userChrome.css that modifies
// the browsers default content display.
// UI mods should not affect it.
$(document).ready(function() {
	$("#container").draggable().position({});
	$("#container").mousedown(function() {
        	$("#container").css("transform", "");        
    })
});
