function sugarsFunction(){
    var select1=document.getElementById("sugarsselectone");
    var select1value=select1.options[select1.selectedIndex].value;
    var select2=document.getElementById("sugarsselecttwo");
    var select2value=select2.options[select2.selectedIndex].value;
    var select3=document.getElementById("sugarsselectthree");
    var select3value=select3.options[select3.selectedIndex].value;
    var sugarsinputone=document.getElementById("sugarsinputone").value;
    var parsfloatsugars=parseFloat(sugarsinputone);
    
    if (parsfloatsugars>=0){

        if (select1value=="brown sugar") {
            
            if (select2value=="grams" && select3value=="Cups") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(180);
                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " g" +" = "+" " + outputrounded + " Cups" ;

            }

            if (select2value=="Cups" && select3value=="grams") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(180)*(parsfloatsugars);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " Cups" +" = "+" " + outputrounded + " g" ;

            }


            if (select2value=="grams" && select3value=="Tablespoon") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(13.2);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)" 

            }

            if (select2value=="Tablespoon" && select3value=="grams") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(13.2)*(parsfloatsugars);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g"; 

            }

            if (select2value=="Cups" && select3value=="Tablespoon") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(180/(13.2))*(parsfloatsugars);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="Cups") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(180/(13.2));

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups" 

            }

        

        }

        if (select1value=="granulated sugar") {

            if (select2value=="grams" && select3value=="Cups") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(200);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " g" +" = "+" " + outputrounded + " Cups";

            }

            if (select2value=="Cups" && select3value=="grams") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(200)*(parsfloatsugars);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " Cups" +" = "+" " + outputrounded + " g";
            }


            if (select2value=="grams" && select3value=="Tablespoon") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(12);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="grams") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)*(12);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g";

            }

            if (select2value=="Cups" && select3value=="Tablespoon") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(200/(12))*(parsfloatsugars);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="Cups") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(200/(12));

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups";

            }




        }
        
        if (select1value=="icing sugar") {

            if (select2value=="grams" && select3value=="Cups") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(100);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " g" +" = "+" " + outputrounded + " Cups";

            }

            if (select2value=="Cups" && select3value=="grams") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(100)*(parsfloatsugars);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " Cups" +" = "+" " + outputrounded + " g";
            }


            if (select2value=="grams" && select3value=="Tablespoon") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(7.5);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " g" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="grams") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)*(7.5);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " tablespoon (tbsp)" +" = "+" " + outputrounded + " g";

            }

            if (select2value=="Cups" && select3value=="Tablespoon") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(100/(7.5))*(parsfloatsugars);

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " Cups" +" = "+" " + outputrounded + " tablespoon (tbsp)"; 

            }

            if (select2value=="Tablespoon" && select3value=="Cups") {
                
                document.getElementById("sugarsoutput").style.backgroundColor="bisque";
                var output=(parsfloatsugars)/(100/(7.5));

                var outputrounded=Math.round(output*100)/100;

                document.getElementById("sugarsoutput1").innerHTML = parsfloatsugars + " tablespoon (tbsp)" +" = "+" " + outputrounded + " Cups";

            }




        }
        
        
    }

}