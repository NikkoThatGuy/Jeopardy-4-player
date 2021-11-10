var player = 0;
var svar = "potet";


if (player == 1){

}
document.getElementById("submit").onclick = function(){
    var spillersvar = document.getElementById("svarvalgt").value;
    console.log(spillersvar)
    if (spillersvar === svar) {
        document.getElementById("tilbakemelding").innerHTML = "correct";
    }
}