function add(){
    var a = parseInt(document.getElementById("add1").value);
    var b = parseInt(document.getElementById("add2").value);
    var sum = a + b;
    alert("This is your final result: "+ sum );
}

function multiply(){
    var a = parseInt(document.getElementById("multiply1").value);
    var b = parseInt(document.getElementById("multiply2").value);
    var product = a * b;
    alert("This is your final result: " + product);
}

function divide(a, b){
    var a = parseInt(document.getElementById("divide1").value);
    var b = parseInt(document.getElementById("divide2").value);
    var dividend = a / b;
    alert("This is your final result: " + dividend);
}

function subtract(a, b){
    var a = parseInt(document.getElementById("subtract1").value);
    var b = parseInt(document.getElementById("subtract2").value);
    var difference = a - b;
    alert("This is your final result: " + difference);
}