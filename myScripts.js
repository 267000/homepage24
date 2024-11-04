var showCalc = false;
function showCalculator(){
   if (showCalc == false){
       document.getElementById("calc").style.opacity = 1;
       showCalc = true;
   }
   else if (showCalc == true){
       document.getElementById("calc").style.opacity = 0;
       showCalc = false;
   }
}
