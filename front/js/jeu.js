window.addEventListener("DOMContentLoaded", function() {
    let left = 40;
    let leftArrow = document.getElementById('vaisseau');
    let missile = 46;
    let leftmissile = document.getElementById('missile');

    document.getElementById('left-arrow').addEventListener('click', function () {
        // alert('je suis a gauche');
        left -= 1;
        missile -= 1;
        leftArrow.style.left = left + "%";
        leftmissile.style.left = missile + "%";
        if (left <= 8) {
            left = 8;
        }
        if (missile <= 14) {
            missile = 14;
        }
    })

    document.getElementById('right-arrow').addEventListener('click', function () {
        // alert('je suis a droite');
        left += 1;
        missile += 1;
        leftArrow.style.left = left + "%";
        leftmissile.style.left = missile + "%";
        if (left >= 78) {
            left = 78;
        }
        if (missile >= 84) {
            missile = 84;
        }
    })
})