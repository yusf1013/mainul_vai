// console.log("Hello world from External JS file!");
// console.log(document.body.getElementsByTagName("a")[0]);
// console.log(document.body.getElementsByClassName("hi")[0]);

// let images = document.body.getElementsByTagName("img");
// let node = document.createTextNode(images[0].alt);

// if(images[0].alt)
//     images[0].parentNode.replaceChild(node, images[0]);

// let node = document.createElement("a");
// node.innerHTML = "<h1>Click</h1>";
// node.href = images[0].src;

// images[0].parentNode.replaceChild(node, images[0]);

// // document.body.appendChild(node);
// console.log(document.body.childNodes[3]);
// document.body.insertBefore(node, document.body.childNodes[3]);

// let pNode = document.body.getElementsByTagName("div")[0];
// pNode.appendChild(node);

// document.body.append("HI");

function onChanged(item){
    console.log(item.value);
    document.getElementById("h1").innerHTML = item.value;
    // console.log(item.se)
}

function changeOption(){
    console.log("Hi");
    let children = document.getElementById("cars").children;
    console.log(children);
    // children[1].value = "Test";
    // children[1].innerHTML = "Test";
    console.log(children[1].value);

    for(let i = 0; i<children.length; i++) {
        if(children[1].value === "audi")
        children[1].innerHTML = "AUDI";
        
    }
}

