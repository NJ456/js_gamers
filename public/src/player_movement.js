

var guyHorizontal = 0;
var guyVertical = 0;

function anim(e){

    let guy=document.getElementById('guy');
    let container=document.getElementById('container');

    console.log("test")
    console.log(e.keyCode)

    // Right 
    if(e.keyCode == 39){
        if(guyHorizontal != 550){
        guyHorizontal +=50;
        guy.style.left = guyHorizontal + 'px';
        }
    }
    // Left
    if(e.keyCode == 37){
        if(guyHorizontal != 0){
        guyHorizontal -=50;
        guy.style.left = guyHorizontal + 'px';
        }
    }
    // Up
    if(e.keyCode == 38){
        if(guyVertical != 0){
        guyVertical -=50;
        guy.style.top = guyVertical + 'px';
        }
    }
    // Down
    if(e.keyCode == 40){
        if(guyVertical != 350){
        guyVertical +=50;
        guy.style.top = guyVertical + 'px';
        }
    }
}

// ULmovement(get.chomp,)
//
// function ULmovement(code,properties){
//   if(code){
//     if(properties != 0){
//       properties -= 50;
//       if(properties == guyVertical){
//
//       }
//
//     }
//   }
// }


var myVar = setInterval(bulletMove, 1000);

var bulletHorizontal = 0;

function bulletMove() {
var bullet=document.getElementById('bullet');
bulletHorizontal += 50;
bullet.style.left = bulletHorizontal + 'px';
removeElement();
}

function removeElement() {
var bullet=document.getElementById('bullet');
bullet.remove();
}

document.onkeydown = anim