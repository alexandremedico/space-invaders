window.addEventListener("DOMContentLoaded", function() {
    let left = 40;
    let leftArrow = document.getElementById('vaisseau');
    let missile = 46;
    let leftmissile = document.getElementById('missile');

    // deplacement vaisseau
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


    // deplacement monstre
    let monstre1 = document.getElementById('monstre1');
    let leftMonstre1 = 7.5;
    let topMonstre1 = 5;
    let bool = true;
    let intervalM1 = setInterval(() => {
        // console.log(leftMonstre1);
        if (leftMonstre1 < 90 && bool == true) {
            leftMonstre1 += 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (leftMonstre1 >= 90) {
            bool = false;
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 13) {
            leftMonstre1 -= 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 13 && leftMonstre1 <= 0) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 21) {
            leftMonstre1 += 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 21 && leftMonstre1 >= 90) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 29) {
            leftMonstre1 -= 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 29 && leftMonstre1 <= 0) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 37) {
            leftMonstre1 += 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 37 && leftMonstre1 >= 90) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 45) {
            leftMonstre1 -= 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 45 && leftMonstre1 <= 0) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 53) {
            leftMonstre1 += 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 53 && leftMonstre1 >= 90) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 61) {
            leftMonstre1 -= 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 61 && leftMonstre1 <= 0) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 69) {
            leftMonstre1 += 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 69 && leftMonstre1 >= 90) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 77) {
            leftMonstre1 -= 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 77 && leftMonstre1 <= 0) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 == 85) {
            leftMonstre1 += 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (topMonstre1 == 85 && leftMonstre1 >= 90) {
            topMonstre1 += 8;
            monstre1.style.top = topMonstre1 + '%';
        }
        if (topMonstre1 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearInterval(intervalM1);
        }
    }, 100);

})

// restart game
document.getElementById('restart').addEventListener('click', function () {
    document.location.reload();
})