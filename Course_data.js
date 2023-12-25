function YES(num){

if(num==1){
la_txt.value="So, would you like to learn by watching video?";       
}

else if(num==3){
   la_txt.value="Don't worry it would be easy to learn as it is in simple language.";  
    
    document.documentElement.style
    .setProperty('--la_yes-height',  8+'vh');

    document.documentElement.style
    .setProperty('--la_yes-width', 4+'vw');


    document.documentElement.style
    .setProperty('--la_yes-radius', 200+'px');

    document.documentElement.style
    .setProperty('--la_yes-mtop', 5+'vh');


    document.documentElement.style
    .setProperty('--la_yes-mleft', 86+'%');

    document.documentElement.style
    .setProperty('--fnt_size','xx-large');
    
    document.getElementById("la-yes").value="↦";
}

else if(num==4){
   la_txt.value="HTML stands for HYPER TEXT MARKUP \n LANGUAGE This language was created by Tim Berners-Lee in year 1991 but in year 1995 HTML was officially released as HTML 2.0. He also created World Wide Web, HTTP (HyperText Transfer Protocol), and URLs (Universal Resource Locator)";      
}

else if(num==5){
   la_txt.value="So now we will start learning a really simple SYNTAX of HTML";
               
}

else if(num==6){
    la_txt.value="<html>\n <body>\n Simple syntax of html\n </body>\n </html>";

 }

 else if(num==7){
    la_txt.value="<html>             (opening tag of html)\n <body>             (opening tag of body)\n Simple syntax of html   (text of body tag)\n </body              (closing tag of body)\n </html>             (closing tag of html)";
                
 }
 else if(num==8){
    document.documentElement.style
    .setProperty('--la_yes-height',  7+'vh');

    document.documentElement.style
    .setProperty('--la_yes-width', 13+'vw');


    document.documentElement.style
    .setProperty('--la_yes-radius',  6.5+'px');

    document.documentElement.style
    .setProperty('--la_yes-mtop', 5+'vh');


    document.documentElement.style
    .setProperty('--la_yes-mleft', 0+'%');

    document.documentElement.style
    .setProperty('--fnt_size','xx-large');
    
    document.getElementById("la-yes").value="Done";
 }

 else if(num==9){
   document.documentElement.style
   .setProperty('--frame', 'visible');
}
}


function NO(num){
    if(num==1){
      document.documentElement.style
    .setProperty('--lan-display', 'visible');
    la_txt.value="Then select any language you want to learn.";
        }
        
        else if(num==2){
           la_txt.value="So, let's start reading theory.";   
            document.getElementById("la-no").style.display = "none";
        } 

}
