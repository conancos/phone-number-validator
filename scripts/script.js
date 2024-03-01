const pattern = document.getElementById('number');
const magicButton = document.querySelector('.ico-button');
const panel = document.querySelector('.calling');

const mainMachine = document.querySelector('.main-machine');

magicButton.addEventListener('click', verificator);
pattern.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        verificator(event);
    }
});

function verificator(event) {
    let str = pattern.value;
    let resultPattern = telephoneCheck(str);
    console.log(resultPattern);

    let containerImage = document.querySelector('.container-image');


    if (resultPattern === false) {
        containerImage.style.animation = "police .5s 8";
        panel.innerHTML = "invalid format";

        setTimeout(() => {
            fail.play();
            setTimeout(() => {
                fail.pause();
            }, 2000);
        }, 0);

        setTimeout(() => {
            containerImage.style.animation = "";
        }, 2000);

        setTimeout(() => {
            panel.innerHTML = "online"
        }, 2000);

    } else {
        panel.innerHTML = "<span>calling <b> .</b><b> .</b><b> .</b>";
        
        setTimeout(() => {
            llamada.play();
            setTimeout(() => {
                llamada.pause();
            }, 4000)
        }, 0);
        
        setTimeout(() => {
            ocupado.play()
            setTimeout(() => {
                ocupado.pause()
            }, 3200)
        }, 4000)
        
        setTimeout(() => {
            panel.innerHTML = "verified !"
            setTimeout(() => {
                panel.innerHTML = "online";
            }, 2500);
        }, 4000);
    };
};

mainMachine.addEventListener("contextmenu", (event) => {
    event.preventDefault();
})