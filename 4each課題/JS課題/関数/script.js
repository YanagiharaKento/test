document.write("問１<br>");

function circle(r, π=3.14){
    return r*r*π ;
}

document.write("半径５cmの円の面積は、" + circle(5) + "<br>");

document.write("半径７cmの円の面積は、" + circle(7) + "<br>");

document.write("半径１０cmの円の面積は、" + circle(10) + "<br>");




document.write("<br>問２<br>");

function fee(adult, child, adultRate=500, childRate=200){
    return (adult*adultRate)+(child*childRate);
}

document.write("Aグループの料金は、" + fee(2,4) + "円です。<br>");

document.write("Bグループの料金は、" + fee(1,5) + "円です。<br>");

document.write("Cグループの料金は、" + fee(3,7) + "円です。<br>");


