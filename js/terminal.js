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
