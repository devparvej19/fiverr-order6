// 'use strict'

// var cursor = document.querySelector(".follow-img");

// document.addEventListener("mousemove", (e) => {

//     var x = e.clientX;
//     var y = e.clientY;

//     cursor.style.left = `${x}px`;
//     cursor.style.top = `${y}px`;

// })
// let cursorImg = document.querySelectorAll(".follow-img");
// for (let i = 0; i < cursorImg; i++) {
//     cursorImg[i].addEventListener("mousemove", (e) => {
//         let x = e.clientX;
//         let y = e.clientY;
//         this.style.left = `${x}px`;
//         this.style.top = `${y}px`;
//     })

// }
var cursor = document.querySelectorAll(".follow-img");
document.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    console.log(cursor.length)
    for (let i = 0; i < cursor.length; i++) {
        cursor[i].style.left = `${x}px`;
        cursor[i].style.top = `${y}px`;
    }
})


function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);


