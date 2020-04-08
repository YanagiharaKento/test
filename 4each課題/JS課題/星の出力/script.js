document.write("問１<br>");

for(var i=1; i<=5; i++){
    document.write("★");
}

document.write("<br><br>問２<br>");


for(var i=1; i<=2; i++){
    for(var a=1; a<=3; a++){
        document.write("★");
    }
    document.write("<br>");
}


document.write("<br><br>問３<br>");

for(var i=1; i<=2; i++){
    for(var a=1; a<=5; a++){
        document.write("☆");
    }
    document.write("<br>");
}


document.write("<br><br>問４<br>");

for(var i=1; i<=4; i++){
    for(var a=1; a<=5; a++){
        document.write("★");
    }
    document.write("<br>");
}



document.write("<br><br>問５<br>");

for(var i=1; i<=4; i++){
    for(var a=1; a<=3; a++){
        document.write("★");
    }
    document.write("<br>");
}


document.write("<br><br>問６<br>");

for(var i=1; i<=3; i++){
    for(var a=1; a<=3; a++){
        if(a % 2 == 1){document.write("★");}
        else{document.write("☆");}
    }
    document.write("<br>");
}


document.write("<br><br>問７<br>");

for(var i=1; i<=4; i++){
    for(var a=1; a<=5; a++){
        if(a % 2 == 1){document.write("★");}
        else{document.write("☆");}
    }
    document.write("<br>");
}


document.write("<br><br>問８<br>");

for(var i=1; i<=5; i++){
    
    var a=1;
    while(a <= i){document.write("★"); a++;}
    
    document.write("<br>");
}