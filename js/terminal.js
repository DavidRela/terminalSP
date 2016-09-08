//TERMINAL COMMANDS TO EXECUTE ON THE FORM LINE

//Function to trigger the Terminal only when "EnterKey" is pressed.
function enterKey(e){
    
    if(e.keyCode == 13){
       terminal();
    }

}

//Terminal function
function terminal(){
    
    var input = document.getElementById("terminalsearch").value;
    
    var commands = ["all", "kek"];
    
    switch (input) {
            
        case "all":
                var linksArray =['https://www.google.com','http://www.facebook.com','http://www.stackoverflow.com'],i;
                $('#open').click(function() {
                    for( i=0; linksArray.length > i; i++){
                        window.open(linksArray[i]);
                    }
                });
                break;
                
        case "buff":
            document.search.action = "http://dotabuff.com";
            break;
            
        case "fa":
            document.search.action = "http://4chan.org/fa";
            break;
            
        case "help":
            alert("Commands:\nall: Opens main links.\nbuff: Opens www.dotabuff.com\nfa: Opens www.4chan.org/fa\nhelp: states all commands\np: Opens www.4chan.org/p\nree: Opens www.4chan.org/r9k\nvg: Opens www.4chan.org/vg\nwp: Opens www.4chan.org/wg");
            break;
        
        case "p":
            document.search.action = "http://4chan.org/p";
            break;
            
        case "ree":
            document.search.action = "http://4chan.org/r9k";
            break;
            
        case "vg":
            document.search.action = "http://4chan.org/vg";
            break;
        
        case "wg":
            document.search.action = "http://4chan.org/wg";
            break;
            
        default:
            document.search.action = "http://www.google.com/search?hl=en-US&source=hp&q=";
            break;
            
    }
    
}


//by David Rela
