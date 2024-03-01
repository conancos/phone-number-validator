const pattern = document.getElementById('number');
const magicButton = document.querySelector('.ico-button');

console.log(pattern)
console.log(magicButton)


magicButton.addEventListener('click', verificator);

function verificator(event) {
    
    
    if (event.type === "mouseup" || (event.type === "keyup" && event.key === "Enter")) {
     

    

        let str = pattern.value;
        let resultPattern = telephoneCheck(str);
        console.log(resultPattern);
        let containerImage = document.querySelector('.container-image');
        const fail = document.getElementById('fail');
            
            
        if (resultPattern === false) {
            containerImage.style.animation = "police .5s 4";
            fail.play();
            setTimeout(() => {
                containerImage.style.animation = "";
            }, 2000);
        
        } else {
            document.querySelector('.calling').innerHTML = "<span>Calling <b> .</b><b> .</b><b> .</b>";
            setTimeout(() => {
                document.querySelector('.calling').innerHTML = "online";
            }, 6000);
        }
    }
}

/* 
const pattern = document.getElementById('number');
const magicButton = document.querySelector('.ico-button');

magicButton.addEventListener('click', verificator);
pattern.addEventListener('keyup', verificator);

function verificator(event) {
    if (
        event.type === "mouseup" ||
        (event.type === "keyup" && (event.key === "Enter" || event.code === "Enter" || event.type === "click"))
    ) {
        let str = pattern.value;
        let resultPattern = telephoneCheck(str);
        console.log(resultPattern);

        let containerImage = document.querySelector('.container-image');
        const fail = document.getElementById('fail');

        if (resultPattern === false) {
            containerImage.style.animation = "police .5s 4";
            fail.play();
            setTimeout(() => {
                containerImage.style.animation = "";
            }, 2000);
        } else {
            document.querySelector('.calling').innerHTML = "<span>Calling <b> .</b><b> .</b><b> .</b>";
            setTimeout(() => {
                document.querySelector('.calling').innerHTML = "online";
            }, 6000);
        }

        // Evitar que el formulario se envíe automáticamente en caso de ser un botón dentro de un formulario
        if (event.type === "keyup") {
            event.preventDefault();
        }
    }
}

*/


