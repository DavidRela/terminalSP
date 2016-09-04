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
            var win = window.open("http://gmail.com", '_blank');
            var win2 = window.open("http://www.forocoches.com/foro/forumdisplay.php?f=2", '_blank');
            var win3 = window.open("https://www.reddit.com/r/GlobalOffensive", '_blank');
            var win4 = window.open("https://www.reddit.com/r/GlobalOffensiveTrade", '_blank');
            var win5 = window.open("https://www.reddit.com/r/dota2", '_blank');
            var win6 = window.open("https://steamcommunity.com/home/", '_blank');
            var win7 = window.open("http://www.4chan.org/#", '_blank');
            var win8 = window.open("https://twitter.com/", '_blank');
            var win9 = window.open("https://www.twitch.tv/", '_blank');
            break;
            
        case "ree":
            document.search.action = "http://4chan.org/r9k";
            break;
            
        case "quit":
            //Pending
            break;
            
        default:
            document.search.action = "http://www.google.com/search?hl=en-US&source=hp&q=";
            break;
            
    }
    
}


//by David Rela