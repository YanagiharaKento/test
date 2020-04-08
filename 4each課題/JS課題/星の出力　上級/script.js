document.write("問１<br>");

for(var i=1; i<=25; i++){
    if(i%2==0){
        document.write("☆");
    }else{
        document.write("★");
    }
    if(i%5==0){document.write("<br>");}
}



document.write("<br><br>問２<br>");

for(var i=1; i<=5; i++){
    for(var a=1; a<=5; a++){
        if(a==i){document.write("☆");
        }else{document.write("★");}
    }
    document.write("<br>");
}



document.write("<br><br>問３<br>");

var star = ["☆"];
document.write(star);

for(var i=1; i<=4; i++){
    star.unshift("★");
    document.write("<br>" + star.join(""));
}