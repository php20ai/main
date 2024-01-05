function syrupsFunction(){
    var select1=document.getElementById("syrupsselectone");
    var select1value=select1.options[select1.selectedIndex].value;
    var select2=document.getElementById("syrupsselecttwo");
    var select2value=select2.options[select2.selectedIndex].value;
    var select3=document.getElementById("syrupsselectthree");
    var select3value=select3.options[select3.selectedIndex].value;
    var syrupsinputone=document.getElementById("syrupsinputone").value;
    var parsfloatsyrups=parseFloat(syrupsinputone);
    

    if (select1value=="Golden Syrup") {

        if (select2value=="grams" && select3value=="Cups") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";

            var output=(parsfloatsyrups)/(350);
            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " g" +" = "+" " + outputrounded + " Cups" ;

        }

        if (select2value=="Cups" && select3value=="grams") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(350)*(parsfloatsyrups);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " Cups" +" = "+" " + outputrounded + " g" ;

        }


        if (select2value=="grams" && select3value=="Tablespoon") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(parsfloatsyrups)/(21.9);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)";

        }

        if (select2value=="Tablespoon" && select3value=="grams") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(21.9)*(parsfloatsyrups);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g"; 

        }

        if (select2value=="Cups" && select3value=="Tablespoon") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(350/(21.9))*(parsfloatsyrups);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="Cups") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(parsfloatsyrups)/(350/(21.9));

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups" 

        }

       




    }

    if (select1value=="Honey") {
        
        if (select2value=="grams" && select3value=="Cups") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(parsfloatsyrups)/(340);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " g" +" = "+" " + outputrounded + " Cups";

        }

        if (select2value=="Cups" && select3value=="grams") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(340)*(parsfloatsyrups);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " Cups" +" = "+" " + outputrounded + " g";
        }


        if (select2value=="grams" && select3value=="Tablespoon") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(parsfloatsyrups)/(20.4);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="grams") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(parsfloatsyrups)*(20.4);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g";

        }

        if (select2value=="Cups" && select3value=="Tablespoon") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(340/(20.4))*(parsfloatsyrups);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="Cups") {
            document.getElementById("syrupsoutput").style.backgroundColor="bisque";
            var output=(parsfloatsyrups)/(340/(20.4));

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("syrupsoutput1").innerHTML = parsfloatsyrups + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups";

        }




    }
    
    
}