var userIsm = prompt("Ismingizni kiriting");
var ism = "ogabek";


if (!isNaN(userIsm)) {
    console.log(userIsm + " Bu matn emas, to'g'ri ism kiriting!");
    alert("Bu matn emas, to'g'ri ism kiriting!");
} else if (userIsm === ism) {
    console.log(userIsm + " Salom BOSS !");
    alert("Salom BOSS !");
} else {
    if(userIsm !== ism){
    console.log(userIsm + " Salom mehmon");
    alert("Salom mehmon");
    }
}
