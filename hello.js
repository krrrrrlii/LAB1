const calculateArea = () => {
    let length = document.getElementById("height").value;

    let area = (5*(length**3)*(3+Math.sqrt(5)))/(12);

    document.getElementById("result").innerHTML = area;
    document.getElementById("button").style = "colour: #azure";
}