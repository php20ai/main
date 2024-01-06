function buttersoilsFunction(){
    var select1=document.getElementById("buttersoilsselectone");
    var select1value=select1.options[select1.selectedIndex].value;
    var select2=document.getElementById("buttersoilsselecttwo");
    var select2value=select2.options[select2.selectedIndex].value;
    var select3=document.getElementById("buttersoilsselectthree");
    var select3value=select3.options[select3.selectedIndex].value;
    var buttersoilsinputone=document.getElementById("buttersoilsinputone").value;
    var parsfloatbuttersoils=parseFloat(buttersoilsinputone);
    
    if (parsfloatbuttersoils>=0){
        if (select1value=="butter") {

            if (select2value=="grams" && select3value=="Cups") {
                
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)/(226);
                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " g" +" = "+" " + outputrounded + " Cups" ;

            }

            if (select2value=="Cups" && select3value=="grams") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)*(226);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " Cups" +" = "+" " + outputrounded + " g" ;

            }


            if (select2value=="grams" && select3value=="Tablespoon") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)/(13.6);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)";

            }

            if (select2value=="Tablespoon" && select3value=="grams") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)*(13.6);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g"; 

            }

            if (select2value=="Cups" && select3value=="Tablespoon") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(226/(13.6))*(parsfloatbuttersoils);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="Cups") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)/(226/(13.6));

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups"; 

            }

        




        }

        if (select1value=="oil") {

            if (select2value=="grams" && select3value=="Cups") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)/(224);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " g" +" = "+" " + outputrounded + " Cups";

            }

            if (select2value=="Cups" && select3value=="grams") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(224)*(parsfloatbuttersoils);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " Cups" +" = "+" " + outputrounded + " g";
            }


            if (select2value=="grams" && select3value=="Tablespoon") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)/(13.5);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="grams") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)*(13.5);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g";

            }

            if (select2value=="Cups" && select3value=="Tablespoon") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)*(224/(13.5));

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="Cups") {
                document.getElementById("buttersoilsoutput").style.backgroundColor="bisque";
                var output=(parsfloatbuttersoils)/(224/(13.5));

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("buttersoilsoutput1").innerHTML = parsfloatbuttersoils + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups";

            }




        }
        
        
    }
}