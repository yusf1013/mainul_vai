document.getElementsByTagName("h1")[0].innerHTML

function f1(){
    alert("This is from f1");
}

function f2(){
    alert("This is from f2");
}


function show(){
    // document.getElementsByTagName("h1")[0].style.display = ""; // This gives ur plain DOM object. 

    // $("h1")[0].show(); // $("h1")[0] also gives us plain DOM object. 
    // Everything that we have studies so far applies to DOM object. 
    // $("h1") gives us an array of JQuery object. Things that apply to DOM object may not apply to JQuery object. 
    // $("h1").eq(0) or $("h1").eq(1) can give me just one JQuery object. 

    // $("h1").eq(0).show();

    $("h1").show(1000);
}

function hide(){
    // document.getElementsByTagName("h1")[0].style.display = "none";
    // document.querySelector("h1")[0].style.display = "none"; // This works the same. Give plain DOM obj. 
    $("h1").hide(1000);
}

function toggle(){
    // let display = document.getElementsByTagName("h1")[0].style.display;
    
    // if(display === "none")
    //     show();
    // else
    //     hide();

    $("h1").toggle();
}
// $("button")[0].onclick = f2;


$("h1").eq(0).click(
    () => console.log("HI there")
);

$("h1").eq(0).hover(
    () => console.log("Mouse hover"),
    () => console.log("Mouse existing")
);

