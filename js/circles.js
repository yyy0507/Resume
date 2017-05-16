/**
 * Created by yyy on 2017/5/9.
 */
var mycanvas1 = document.querySelector("#mycanvas1");
mycanvas1.width = 100;
mycanvas1.height = 20;
mycanvas1.style.border = "1px solid #000";
if(mycanvas1.getContext){
    var painting1 = mycanvas1.getContext("2d");
    painting1.lineWidth = 40;
    painting1.strokeStyle = "blue";
    painting1.beginPath();
    painting1.moveTo(0,0);
    painting1.lineTo(50,0);
    painting1.stroke();

}


var mycanvas2 = document.querySelector("#mycanvas2");
mycanvas2.width = 100;
mycanvas2.height = 20;
mycanvas2.style.border = "1px solid #000";
if(mycanvas2.getContext){
    var painting2 = mycanvas2.getContext("2d");
    painting2.lineWidth = 40;
    painting2.strokeStyle = "blue";
    painting2.beginPath();
    painting2.moveTo(0,0);
    painting2.lineTo(100,0);
    painting2.stroke();

}