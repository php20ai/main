function liquidsFunction(){
    var select1=document.getElementById("liquidsselectone");
    var select1value=select1.options[select1.selectedIndex].value;
    var select2=document.getElementById("liquidsselecttwo");
    var select2value=select2.options[select2.selectedIndex].value;
    var select3=document.getElementById("liquidsselectthree");
    var select3value=select3.options[select3.selectedIndex].value;
    var liquidsinputone=document.getElementById("liquidsinputone").value;
    var parsfloatliquids=parseFloat(liquidsinputone);
    

    if (select1value=="Water") {

        if (select2value=="ml" && select3value=="Cups") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)/(250);
            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " ml" +" = "+" " + outputrounded + " Cups" ;

        }

        if (select2value=="Cups" && select3value=="ml") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)*(250);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " Cups" +" = "+" " + outputrounded + " ml" ;

        }


        if (select2value=="ml" && select3value=="Tablespoon") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)/(17.8);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " ml" +" = "+" " + outputrounded + " tablespoon (tbsp)";

        }

        if (select2value=="Tablespoon" && select3value=="ml") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)*(17.8);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " tablespoon (tbsp)" +" = "+" " + outputrounded + " ml"; 

        }

        if (select2value=="Cups" && select3value=="Tablespoon") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(250/(17.8))*(parsfloatliquids);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="Cups") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)/(250/(17.8));

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups"; 

        }

       




    }

    if (select1value=="Milk") {

        if (select2value=="ml" && select3value=="Cups") {
            
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)/(250);
            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " ml" +" = "+" " + outputrounded + " Cups" ;

        }

        if (select2value=="Cups" && select3value=="ml") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)*(250);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " Cups" +" = "+" " + outputrounded + " ml" ;

        }


        if (select2value=="ml" && select3value=="Tablespoon") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)/(17.8);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " ml" +" = "+" " + outputrounded + " tablespoon (tbsp)";

        }

        if (select2value=="Tablespoon" && select3value=="ml") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)*(17.8);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " tablespoon (tbsp)" +" = "+" " + outputrounded + " ml"; 

        }

        if (select2value=="Cups" && select3value=="Tablespoon") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(250/(17.8))*(parsfloatliquids);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="Cups") {
            document.getElementById("liquidsoutput").style.backgroundColor="bisque";

            var output=(parsfloatliquids)/(250/(17.8));

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("liquidsoutput1").innerHTML = parsfloatliquids + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups"; 

        }





    }
    
    
}