const calculateVolume = () => {
    let length = document.getElementById("length").value;

    let volume = (5*(length**3)*(3+Math.sqrt(5)))/(12);

    document.getElementById("result").innerHTML = volume;
    document.getElementById("button").style = "colour: #azure";
}
