function scrollWintop550left0(options) {
    window.scrollBy({
        top: 400,
        left:0,
        behavior: "smooth",
       });
  }

function revealUnitConverterTable(){
    document.getElementById("clickherebutton").style.display="none";
    document.getElementById("ingredientsConverterTable").style.display="block";
    document.getElementById("backtohomepagebutton").style.display="inline-block";
}

function hideUnitConverterTable(){
    document.getElementById("backtohomepagebutton").style.display="none";
    document.getElementById("ingredientsConverterTable").style.display="none";
    document.getElementById("clickherebutton").style.display="inline-block";

}

function scrollWintopminus550(options) {
    window.scrollBy({
        top: -1000,
        left:0,
        behavior: "smooth",
       });
  }