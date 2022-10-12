let lastOperator = "";
let lastOperand = 0;

function digits(item){
    let num = Number(item.innerHTML);


    console.log(item.innerHTML);
    let displayDigits = Number(document.getElementById("display").innerHTML);

    document.getElementById("display").innerHTML = displayDigits * 10 + num;



    // if(lastOperator === "")
    // {
    //     console.log(item.innerHTML);
    //     let displayDigits = Number(document.getElementById("display").innerHTML);

    //     document.getElementById("display").innerHTML = displayDigits * 10 + num;
    // }
    // else {
    //     lastOperand = Number(document.getElementById("display").innerHTML);
    //     document.getElementById("display").innerHTML = num;
    // }

    // alternative
    // let num = item.innerHTML;
    // let displayDigits = document.getElementById("display").innerHTML;
    // if(displayDigits === "0")
    //     document.getElementById("display").innerHTML = num;
    // else
    //     document.getElementById("display").innerHTML = displayDigits + num;
}

function del(){
    let displayDigits = document.getElementById("display").innerHTML;
    if(displayDigits.length === 1)
        document.getElementById("display").innerHTML = 0;
    else
        document.getElementById("display").innerHTML = displayDigits.slice(0, displayDigits.length - 1);
}

function ca(){
    document.getElementById("display").innerHTML = 0;
}

function operator(item) {
    let displayDigits = Number(document.getElementById("display").innerHTML);

    

    if(item.innerHTML === "=")
    {
        let result = 0;

        if(lastOperator === "+")
            result = displayDigits + lastOperand;
        if(lastOperator === "-")
            result = lastOperand - displayDigits;
        if(lastOperator === "*")
            result = displayDigits * lastOperand;
        if(lastOperator === "/")
            result = lastOperand / displayDigits;

        document.getElementById("display").innerHTML = result;
        lastOperator = "";
    }
    else
    {
        lastOperator = item.innerHTML;
        lastOperand = displayDigits;
        ca();   
    }
}