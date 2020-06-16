window.addEventListener("DOMContentLoaded", function() {
    // etoile1
    setInterval(() => {
        document.getElementById('etoile1').classList.add('slide-in-top-etoile1');
        setTimeout(() => {
            document.getElementById('etoile1').classList.remove('slide-in-top-etoile1');
        }, 1500);
    }, 3000);

    // etoile2
    setInterval(() => {
        document.getElementById('etoile2').classList.add('slide-in-top-etoile2');
        setTimeout(() => {
            document.getElementById('etoile2').classList.remove('slide-in-top-etoile2');
        }, 1500);
    }, 4000);

    // etoile3
    setInterval(() => {
        document.getElementById('etoile3').classList.add('slide-in-top-etoile3');
        setTimeout(() => {
            document.getElementById('etoile3').classList.remove('slide-in-top-etoile3');
        }, 1500);
    }, 2000);

    // etoile4
    setInterval(() => {
        document.getElementById('etoile4').classList.add('slide-in-top-etoile4');
        setTimeout(() => {
            document.getElementById('etoile4').classList.remove('slide-in-top-etoile4');
        }, 1500);
    }, 2500);

    // etoile5
    setInterval(() => {
        document.getElementById('etoile5').classList.add('slide-in-top-etoile5');
        setTimeout(() => {
            document.getElementById('etoile5').classList.remove('slide-in-top-etoile5');
        }, 1500);
    }, 3500);
})