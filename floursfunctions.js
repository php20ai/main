function floursFunction(){
    var select1=document.getElementById("floursselectone");
    var select1value=select1.options[select1.selectedIndex].value;
    var select2=document.getElementById("floursselecttwo");
    var select2value=select2.options[select2.selectedIndex].value;
    var select3=document.getElementById("floursselectthree");
    var select3value=select3.options[select3.selectedIndex].value;
    var floursinputone=document.getElementById("floursinputone").value;
    var parsfloatflours=parseFloat(floursinputone);
    

    if (select1value=="flour") {

        if (select2value=="grams" && select3value=="Cups") {
            
            document.getElementById("floursoutput").style.backgroundColor="bisque";
            var output=0.01*(parsfloatflours);
            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " g" +" = "+" " + outputrounded + " Cups" ;

        }

        if (select2value=="Cups" && select3value=="grams") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(parsfloatflours)/(0.01);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " Cups" +" = "+" " + outputrounded + " g" ;

        }


        if (select2value=="grams" && select3value=="Tablespoon") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(0.128)*(parsfloatflours);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)" 

        }

        if (select2value=="Tablespoon" && select3value=="grams") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(parsfloatflours)/(0.128);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g"; 

        }

        if (select2value=="Cups" && select3value=="Tablespoon") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=16*(parsfloatflours);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="Cups") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(parsfloatflours)/(16);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups" 

        }

       




    }

    if (select1value=="oats") {

        if (select2value=="grams" && select3value=="Cups") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(parsfloatflours)/(80);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " g" +" = "+" " + outputrounded + " Cups";

        }

        if (select2value=="Cups" && select3value=="grams") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";
            var output=80*(parsfloatflours);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " Cups" +" = "+" " + outputrounded + " g";
        }


        if (select2value=="grams" && select3value=="Tablespoon") {

            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(parsfloatflours)/(10);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="grams") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(parsfloatflours)*(10);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g";

        }

        if (select2value=="Cups" && select3value=="Tablespoon") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=8*(parsfloatflours);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

        }

        if (select2value=="Tablespoon" && select3value=="Cups") {
            document.getElementById("floursoutput").style.backgroundColor="bisque";

            var output=(parsfloatflours)/(8);

            var outputrounded=Math.round(output*100)/100;

            document.getElementById("floursoutput1").innerHTML = parsfloatflours + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups";

        }




    }
    
    
}