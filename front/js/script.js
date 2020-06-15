window.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {
        document.getElementById('etoile-1').classList.add('slide-in-top');
        setTimeout(() => {
            document.getElementById('etoile-1').classList.remove('slide-in-top');
        }, 1500);
    }, 3000);
    // setInterval(() => {
        // let i = 0;
        // let j = 0;
        // let etoile = setInterval(() => {
        //     i++;
        //     document.getElementById('etoile-1').insertAdjacentHTML('beforeend', `<div id='etoile${i}'></div>`);
        //     document.getElementById(`etoile${i}`).classList.add('autreEtoile');
        //     if (i == 500) {
        //         clearInterval(etoile);
        //         let supEtoile = setInterval(() => {
        //             j++;
        //             document.getElementById(`etoile${j}`).classList.remove('autreEtoile');
        //             if (j == 500) {
        //                 clearInterval(supEtoile);
        //             }
        //         }, 1);
        //     }
        // }, 1);
    // }, 10000);

    // setInterval(() => {
    //     let i = 0;
    //     let j = 0;
    //     let etoile = setInterval(() => {
    //         i++;
    //         document.getElementById('menu').insertAdjacentHTML('beforeend', `<div id='etoile${i}'></div>`);
    //         document.getElementById(`etoile${i}`).classList.add('autreEtoile');
    //         if (i == 500) {
    //             clearInterval(etoile);
    //             let supEtoile = setInterval(() => {
    //                 j++;
    //                 document.getElementById(`etoile${j}`).classList.remove('autreEtoile');
    //                 if (j == 500) {
    //                     clearInterval(supEtoile);
    //                 }
    //             }, 1);
    //         }
    //     }, 1);
    // }, 10000);
})