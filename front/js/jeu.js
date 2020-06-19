window.addEventListener("DOMContentLoaded", function() {
    let left = 43;
    let leftArrow = document.getElementById('vaisseau');
    let Lmissile = 49;
    let leftmissile = document.getElementById('missile');

    // deplacement vaisseau
    document.getElementById('left-arrow').addEventListener('click', function () {
        left -= 1;
        Lmissile -= 1;
        leftArrow.style.left = left + "%";
        leftmissile.style.left = Lmissile + "%";
        if (left <= 8) {
            left = 8;
        }
        if (Lmissile <= 14) {
            Lmissile = 14;
        }
    })
    
    
    document.getElementById('right-arrow').addEventListener('click', function () {
        left += 1;
        Lmissile += 1;
        leftArrow.style.left = left + "%";
        leftmissile.style.left = Lmissile + "%";
        if (left >= 78) {
            left = 78;
        }
        if (Lmissile >= 84) {
            Lmissile = 84;
        }
    })

    // tir missile
    let i = 0;
    document.getElementById('fire').addEventListener('click', function () {
        i++;
        // document.getElementById('missile').classList.remove('none');
        document.getElementById('vaisseau').insertAdjacentHTML('beforebegin', `<img id="missile${i}" src="../img/missile.png" alt="">`);
        let missile = document.getElementById(`missile${i}`);
        let topMissile = 85;
        let leftVaisseau = 43;

        missile.style.width = '2%';
        missile.style.position = 'absolute';
        missile.style.left = (leftVaisseau + 6) + '%';

        let intervalMissile = setInterval(() => {
            topMissile -= 1;
            missile.style.top = topMissile + "%";
            if (topMissile <= 0) {
                console.log(`missile${i}`)
                document.getElementById(`missile${i}`).classList.add('none');
                clearInterval(intervalMissile);
            }
        }, 100);
    })

    
    // clear interval
    function clearIntervalMonstre() {
        clearInterval(intervalM1);
        clearInterval(intervalM2);
        clearInterval(intervalM3);
        clearInterval(intervalM4);
        clearInterval(intervalM5);
        clearInterval(intervalM6);
        clearInterval(intervalM7);
        clearInterval(intervalM8);
        clearInterval(intervalM9);
        clearInterval(intervalM10);
        clearInterval(intervalM11);
        clearInterval(intervalM12);
        clearInterval(intervalM13);
        clearInterval(intervalM14);
        clearInterval(intervalM15);
        clearInterval(intervalM16);
        clearInterval(intervalM17);
        clearInterval(intervalM18);
    }

    // deplacement monstre
    let monstre1 = document.getElementById('monstre1');
    let leftMonstre1 = 7.5;
    let topMonstre1 = 5;
    let intervalM1 = setInterval(() => {
        if (leftMonstre1 < 90 && topMonstre1 == 5) {
            leftMonstre1 += 3;
            monstre1.style.left = leftMonstre1 + '%';
        }
        if (leftMonstre1 >= 90) {
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
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 2
    let monstre2 = document.getElementById('monstre2');
    let leftMonstre2 = 22.5;
    let topMonstre2 = 5;
    let intervalM2 = setInterval(() => {
        if (leftMonstre2 < 90 && topMonstre2 == 5) {
            leftMonstre2 += 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (leftMonstre2 >= 90) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 13) {
            leftMonstre2 -= 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 13 && leftMonstre2 <= 0) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 21) {
            leftMonstre2 += 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 21 && leftMonstre2 >= 90) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 29) {
            leftMonstre2 -= 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 29 && leftMonstre2 <= 0) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 37) {
            leftMonstre2 += 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 37 && leftMonstre2 >= 90) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 45) {
            leftMonstre2 -= 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 45 && leftMonstre2 <= 0) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 53) {
            leftMonstre2 += 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 53 && leftMonstre2 >= 90) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 61) {
            leftMonstre2 -= 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 61 && leftMonstre2 <= 0) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 69) {
            leftMonstre2 += 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 69 && leftMonstre2 >= 90) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 77) {
            leftMonstre2 -= 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 77 && leftMonstre2 <= 0) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 == 85) {
            leftMonstre2 += 3;
            monstre2.style.left = leftMonstre2 + '%';
        }
        if (topMonstre2 == 85 && leftMonstre2 >= 90) {
            topMonstre2 += 8;
            monstre2.style.top = topMonstre2 + '%';
        }
        if (topMonstre2 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 3
    let monstre3 = document.getElementById('monstre3');
    let leftMonstre3 = 37.5;
    let topMonstre3 = 5;
    let intervalM3 = setInterval(() => {
        if (leftMonstre3 < 90 && topMonstre3 == 5) {
            leftMonstre3 += 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (leftMonstre3 >= 90) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 13) {
            leftMonstre3 -= 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 13 && leftMonstre3 <= 0) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 21) {
            leftMonstre3 += 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 21 && leftMonstre3 >= 90) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 29) {
            leftMonstre3 -= 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 29 && leftMonstre3 <= 0) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 37) {
            leftMonstre3 += 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 37 && leftMonstre3 >= 90) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 45) {
            leftMonstre3 -= 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 45 && leftMonstre3 <= 0) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 53) {
            leftMonstre3 += 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 53 && leftMonstre3 >= 90) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 61) {
            leftMonstre3 -= 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 61 && leftMonstre3 <= 0) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 69) {
            leftMonstre3 += 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 69 && leftMonstre3 >= 90) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 77) {
            leftMonstre3 -= 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 77 && leftMonstre3 <= 0) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 == 85) {
            leftMonstre3 += 3;
            monstre3.style.left = leftMonstre3 + '%';
        }
        if (topMonstre3 == 85 && leftMonstre3 >= 90) {
            topMonstre3 += 8;
            monstre3.style.top = topMonstre3 + '%';
        }
        if (topMonstre3 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 4
    let monstre4 = document.getElementById('monstre4');
    let leftMonstre4 = 52.5;
    let topMonstre4 = 5;
    let intervalM4 = setInterval(() => {
        if (leftMonstre4 < 90 && topMonstre4 == 5) {
            leftMonstre4 += 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (leftMonstre4 >= 90) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 13) {
            leftMonstre4 -= 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 13 && leftMonstre4 <= 0) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 21) {
            leftMonstre4 += 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 21 && leftMonstre4 >= 90) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 29) {
            leftMonstre4 -= 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 29 && leftMonstre4 <= 0) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 37) {
            leftMonstre4 += 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 37 && leftMonstre4 >= 90) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 45) {
            leftMonstre4 -= 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 45 && leftMonstre4 <= 0) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 53) {
            leftMonstre4 += 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 53 && leftMonstre4 >= 90) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 61) {
            leftMonstre4 -= 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 61 && leftMonstre4 <= 0) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 69) {
            leftMonstre4 += 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 69 && leftMonstre4 >= 90) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 77) {
            leftMonstre4 -= 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 77 && leftMonstre4 <= 0) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 == 85) {
            leftMonstre4 += 3;
            monstre4.style.left = leftMonstre4 + '%';
        }
        if (topMonstre4 == 85 && leftMonstre4 >= 90) {
            topMonstre4 += 8;
            monstre4.style.top = topMonstre4 + '%';
        }
        if (topMonstre4 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 5
    let monstre5 = document.getElementById('monstre5');
    let leftMonstre5 = 67.5;
    let topMonstre5 = 5;
    let intervalM5 = setInterval(() => {
        if (leftMonstre5 < 90 && topMonstre5 == 5) {
            leftMonstre5 += 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (leftMonstre5 >= 90) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 13) {
            leftMonstre5 -= 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 13 && leftMonstre5 <= 0) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 21) {
            leftMonstre5 += 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 21 && leftMonstre5 >= 90) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 29) {
            leftMonstre5 -= 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 29 && leftMonstre5 <= 0) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 37) {
            leftMonstre5 += 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 37 && leftMonstre5 >= 90) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 45) {
            leftMonstre5 -= 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 45 && leftMonstre5 <= 0) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 53) {
            leftMonstre5 += 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 53 && leftMonstre5 >= 90) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 61) {
            leftMonstre5 -= 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 61 && leftMonstre5 <= 0) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 69) {
            leftMonstre5 += 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 69 && leftMonstre5 >= 90) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 77) {
            leftMonstre5 -= 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 77 && leftMonstre5 <= 0) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 == 85) {
            leftMonstre5 += 3;
            monstre5.style.left = leftMonstre5 + '%';
        }
        if (topMonstre5 == 85 && leftMonstre5 >= 90) {
            topMonstre5 += 8;
            monstre5.style.top = topMonstre5 + '%';
        }
        if (topMonstre5 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 6
    let monstre6 = document.getElementById('monstre6');
    let leftMonstre6 = 82.5;
    let topMonstre6 = 5;
    let intervalM6 = setInterval(() => {
        if (leftMonstre6 < 90 && topMonstre6 == 5) {
            leftMonstre6 += 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (leftMonstre6 >= 90) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 13) {
            leftMonstre6 -= 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 13 && leftMonstre6 <= 0) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 21) {
            leftMonstre6 += 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 21 && leftMonstre6 >= 90) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 29) {
            leftMonstre6 -= 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 29 && leftMonstre6 <= 0) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 37) {
            leftMonstre6 += 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 37 && leftMonstre6 >= 90) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 45) {
            leftMonstre6 -= 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 45 && leftMonstre6 <= 0) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 53) {
            leftMonstre6 += 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 53 && leftMonstre6 >= 90) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 61) {
            leftMonstre6 -= 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 61 && leftMonstre6 <= 0) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 69) {
            leftMonstre6 += 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 69 && leftMonstre6 >= 90) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 77) {
            leftMonstre6 -= 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 77 && leftMonstre6 <= 0) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 == 85) {
            leftMonstre6 += 3;
            monstre6.style.left = leftMonstre6 + '%';
        }
        if (topMonstre6 == 85 && leftMonstre6 >= 90) {
            topMonstre6 += 8;
            monstre6.style.top = topMonstre6 + '%';
        }
        if (topMonstre6 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 7
    let monstre7 = document.getElementById('monstre7');
    let leftMonstre7 = 7.5;
    let topMonstre7 = 20;
    let intervalM7 = setInterval(() => {
        if (topMonstre7 == 20) {
            leftMonstre7 += 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 20 && leftMonstre7 >= 90) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 28) {
            leftMonstre7 -= 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 28 && leftMonstre7 <= 0) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 36) {
            leftMonstre7 += 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 36 && leftMonstre7 >= 90) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 44) {
            leftMonstre7 -= 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 44 && leftMonstre7 <= 0) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 52) {
            leftMonstre7 += 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 52 && leftMonstre7 >= 90) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 60) {
            leftMonstre7 -= 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 60 && leftMonstre7 <= 0) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 68) {
            leftMonstre7 += 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 68 && leftMonstre7 >= 90) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 76) {
            leftMonstre7 -= 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 76 && leftMonstre7 <= 0) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 == 84) {
            leftMonstre7 += 3;
            monstre7.style.left = leftMonstre7 + '%';
        }
        if (topMonstre7 == 84 && leftMonstre7 >= 90) {
            topMonstre7 += 8;
            monstre7.style.top = topMonstre7 + '%';
        }
        if (topMonstre7 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 8
    let monstre8 = document.getElementById('monstre8');
    let leftMonstre8 = 22.5;
    let topMonstre8 = 20;
    let intervalM8 = setInterval(() => {
        if (topMonstre8 == 20) {
            leftMonstre8 += 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 20 && leftMonstre8 >= 90) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 28) {
            leftMonstre8 -= 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 28 && leftMonstre8 <= 0) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 36) {
            leftMonstre8 += 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 36 && leftMonstre8 >= 90) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 44) {
            leftMonstre8 -= 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 44 && leftMonstre8 <= 0) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 52) {
            leftMonstre8 += 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 52 && leftMonstre8 >= 90) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 60) {
            leftMonstre8 -= 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 60 && leftMonstre8 <= 0) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 68) {
            leftMonstre8 += 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 68 && leftMonstre8 >= 90) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 76) {
            leftMonstre8 -= 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 76 && leftMonstre8 <= 0) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 == 84) {
            leftMonstre8 += 3;
            monstre8.style.left = leftMonstre8 + '%';
        }
        if (topMonstre8 == 84 && leftMonstre8 >= 90) {
            topMonstre8 += 8;
            monstre8.style.top = topMonstre8 + '%';
        }
        if (topMonstre8 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 9
    let monstre9 = document.getElementById('monstre9');
    let leftMonstre9 = 37.5;
    let topMonstre9 = 20;
    let intervalM9 = setInterval(() => {
        if (topMonstre9 == 20) {
            leftMonstre9 += 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 20 && leftMonstre9 >= 90) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 28) {
            leftMonstre9 -= 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 28 && leftMonstre9 <= 0) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 36) {
            leftMonstre9 += 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 36 && leftMonstre9 >= 90) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 44) {
            leftMonstre9 -= 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 44 && leftMonstre9 <= 0) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 52) {
            leftMonstre9 += 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 52 && leftMonstre9 >= 90) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 60) {
            leftMonstre9 -= 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 60 && leftMonstre9 <= 0) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 68) {
            leftMonstre9 += 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 68 && leftMonstre9 >= 90) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 76) {
            leftMonstre9 -= 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 76 && leftMonstre9 <= 0) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 == 84) {
            leftMonstre9 += 3;
            monstre9.style.left = leftMonstre9 + '%';
        }
        if (topMonstre9 == 84 && leftMonstre9 >= 90) {
            topMonstre9 += 8;
            monstre9.style.top = topMonstre9 + '%';
        }
        if (topMonstre9 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 10
    let monstre10 = document.getElementById('monstre10');
    let leftMonstre10 = 52.5;
    let topMonstre10 = 20;
    let intervalM10 = setInterval(() => {
        if (topMonstre10 == 20) {
            leftMonstre10 += 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 20 && leftMonstre10 >= 90) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 28) {
            leftMonstre10 -= 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 28 && leftMonstre10 <= 0) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 36) {
            leftMonstre10 += 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 36 && leftMonstre10 >= 90) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 44) {
            leftMonstre10 -= 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 44 && leftMonstre10 <= 0) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 52) {
            leftMonstre10 += 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 52 && leftMonstre10 >= 90) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 60) {
            leftMonstre10 -= 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 60 && leftMonstre10 <= 0) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 68) {
            leftMonstre10 += 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 68 && leftMonstre10 >= 90) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 76) {
            leftMonstre10 -= 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 76 && leftMonstre10 <= 0) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 == 84) {
            leftMonstre10 += 3;
            monstre10.style.left = leftMonstre10 + '%';
        }
        if (topMonstre10 == 84 && leftMonstre10 >= 90) {
            topMonstre10 += 8;
            monstre10.style.top = topMonstre10 + '%';
        }
        if (topMonstre10 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 11
    let monstre11 = document.getElementById('monstre11');
    let leftMonstre11 = 67.5;
    let topMonstre11 = 20;
    let intervalM11 = setInterval(() => {
        if (topMonstre11 == 20) {
            leftMonstre11 += 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 20 && leftMonstre11 >= 90) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 28) {
            leftMonstre11 -= 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 28 && leftMonstre11 <= 0) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 36) {
            leftMonstre11 += 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 36 && leftMonstre11 >= 90) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 44) {
            leftMonstre11 -= 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 44 && leftMonstre11 <= 0) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 52) {
            leftMonstre11 += 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 52 && leftMonstre11 >= 90) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 60) {
            leftMonstre11 -= 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 60 && leftMonstre11 <= 0) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 68) {
            leftMonstre11 += 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 68 && leftMonstre11 >= 90) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 76) {
            leftMonstre11 -= 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 76 && leftMonstre11 <= 0) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 == 84) {
            leftMonstre11 += 3;
            monstre11.style.left = leftMonstre11 + '%';
        }
        if (topMonstre11 == 84 && leftMonstre11 >= 90) {
            topMonstre11 += 8;
            monstre11.style.top = topMonstre11 + '%';
        }
        if (topMonstre11 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 12
    let monstre12 = document.getElementById('monstre12');
    let leftMonstre12 = 82.5;
    let topMonstre12 = 20;
    let intervalM12 = setInterval(() => {
        if (topMonstre12 == 20) {
            leftMonstre12 += 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 20 && leftMonstre12 >= 90) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 28) {
            leftMonstre12 -= 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 28 && leftMonstre12 <= 0) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 36) {
            leftMonstre12 += 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 36 && leftMonstre12 >= 90) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 44) {
            leftMonstre12 -= 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 44 && leftMonstre12 <= 0) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 52) {
            leftMonstre12 += 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 52 && leftMonstre12 >= 90) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 60) {
            leftMonstre12 -= 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 60 && leftMonstre12 <= 0) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 68) {
            leftMonstre12 += 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 68 && leftMonstre12 >= 90) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 76) {
            leftMonstre12 -= 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 76 && leftMonstre12 <= 0) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 == 84) {
            leftMonstre12 += 3;
            monstre12.style.left = leftMonstre12 + '%';
        }
        if (topMonstre12 == 84 && leftMonstre12 >= 90) {
            topMonstre12 += 8;
            monstre12.style.top = topMonstre12 + '%';
        }
        if (topMonstre12 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 13
    let monstre13 = document.getElementById('monstre13');
    let leftMonstre13 = 7.5;
    let topMonstre13 = 35;
    let intervalM13 = setInterval(() => {
        if (topMonstre13 == 35) {
            leftMonstre13 += 3;
            monstre13.style.left = leftMonstre13 + '%';
        }
        if (topMonstre13 == 35 && leftMonstre13 >= 90) {
            topMonstre13 += 8;
            monstre13.style.top = topMonstre13 + '%';
        }
        if (topMonstre13 == 43) {
            leftMonstre13 -= 3;
            monstre13.style.left = leftMonstre13 + '%';
        }
        if (topMonstre13 == 43 && leftMonstre13 <= 0) {
            topMonstre13 += 8;
            monstre13.style.top = topMonstre13 + '%';
        }
        if (topMonstre13 == 51) {
            leftMonstre13 += 3;
            monstre13.style.left = leftMonstre13 + '%';
        }
        if (topMonstre13 == 51 && leftMonstre13 >= 90) {
            topMonstre13 += 8;
            monstre13.style.top = topMonstre13 + '%';
        }
        if (topMonstre13 == 59) {
            leftMonstre13 -= 3;
            monstre13.style.left = leftMonstre13 + '%';
        }
        if (topMonstre13 == 59 && leftMonstre13 <= 0) {
            topMonstre13 += 8;
            monstre13.style.top = topMonstre13 + '%';
        }
        if (topMonstre13 == 67) {
            leftMonstre13 += 3;
            monstre13.style.left = leftMonstre13 + '%';
        }
        if (topMonstre13 == 67 && leftMonstre13 >= 90) {
            topMonstre13 += 8;
            monstre13.style.top = topMonstre13 + '%';
        }
        if (topMonstre13 == 75) {
            leftMonstre13 -= 3;
            monstre13.style.left = leftMonstre13 + '%';
        }
        if (topMonstre13 == 75 && leftMonstre13 <= 0) {
            topMonstre13 += 8;
            monstre13.style.top = topMonstre13 + '%';
        }
        if (topMonstre13 == 83) {
            leftMonstre13 += 3;
            monstre13.style.left = leftMonstre13 + '%';
        }
        if (topMonstre13 == 83 && leftMonstre13 >= 90) {
            topMonstre13 += 8;
            monstre13.style.top = topMonstre13 + '%';
        }
        if (topMonstre13 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 14
    let monstre14 = document.getElementById('monstre14');
    let leftMonstre14 = 22.5;
    let topMonstre14 = 35;
    let intervalM14 = setInterval(() => {
        if (topMonstre14 == 35) {
            leftMonstre14 += 3;
            monstre14.style.left = leftMonstre14 + '%';
        }
        if (topMonstre14 == 35 && leftMonstre14 >= 90) {
            topMonstre14 += 8;
            monstre14.style.top = topMonstre14 + '%';
        }
        if (topMonstre14 == 43) {
            leftMonstre14 -= 3;
            monstre14.style.left = leftMonstre14 + '%';
        }
        if (topMonstre14 == 43 && leftMonstre14 <= 0) {
            topMonstre14 += 8;
            monstre14.style.top = topMonstre14 + '%';
        }
        if (topMonstre14 == 51) {
            leftMonstre14 += 3;
            monstre14.style.left = leftMonstre14 + '%';
        }
        if (topMonstre14 == 51 && leftMonstre14 >= 90) {
            topMonstre14 += 8;
            monstre14.style.top = topMonstre14 + '%';
        }
        if (topMonstre14 == 59) {
            leftMonstre14 -= 3;
            monstre14.style.left = leftMonstre14 + '%';
        }
        if (topMonstre14 == 59 && leftMonstre14 <= 0) {
            topMonstre14 += 8;
            monstre14.style.top = topMonstre14 + '%';
        }
        if (topMonstre14 == 67) {
            leftMonstre14 += 3;
            monstre14.style.left = leftMonstre14 + '%';
        }
        if (topMonstre14 == 67 && leftMonstre14 >= 90) {
            topMonstre14 += 8;
            monstre14.style.top = topMonstre14 + '%';
        }
        if (topMonstre14 == 75) {
            leftMonstre14 -= 3;
            monstre14.style.left = leftMonstre14 + '%';
        }
        if (topMonstre14 == 75 && leftMonstre14 <= 0) {
            topMonstre14 += 8;
            monstre14.style.top = topMonstre14 + '%';
        }
        if (topMonstre14 == 83) {
            leftMonstre14 += 3;
            monstre14.style.left = leftMonstre14 + '%';
        }
        if (topMonstre14 == 83 && leftMonstre14 >= 90) {
            topMonstre14 += 8;
            monstre14.style.top = topMonstre14 + '%';
        }
        if (topMonstre14 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 15
    let monstre15 = document.getElementById('monstre15');
    let leftMonstre15 = 37.5;
    let topMonstre15 = 35;
    let intervalM15 = setInterval(() => {
        if (topMonstre15 == 35) {
            leftMonstre15 += 3;
            monstre15.style.left = leftMonstre15 + '%';
        }
        if (topMonstre15 == 35 && leftMonstre15 >= 90) {
            topMonstre15 += 8;
            monstre15.style.top = topMonstre15 + '%';
        }
        if (topMonstre15 == 43) {
            leftMonstre15 -= 3;
            monstre15.style.left = leftMonstre15 + '%';
        }
        if (topMonstre15 == 43 && leftMonstre15 <= 0) {
            topMonstre15 += 8;
            monstre15.style.top = topMonstre15 + '%';
        }
        if (topMonstre15 == 51) {
            leftMonstre15 += 3;
            monstre15.style.left = leftMonstre15 + '%';
        }
        if (topMonstre15 == 51 && leftMonstre15 >= 90) {
            topMonstre15 += 8;
            monstre15.style.top = topMonstre15 + '%';
        }
        if (topMonstre15 == 59) {
            leftMonstre15 -= 3;
            monstre15.style.left = leftMonstre15 + '%';
        }
        if (topMonstre15 == 59 && leftMonstre15 <= 0) {
            topMonstre15 += 8;
            monstre15.style.top = topMonstre15 + '%';
        }
        if (topMonstre15 == 67) {
            leftMonstre15 += 3;
            monstre15.style.left = leftMonstre15 + '%';
        }
        if (topMonstre15 == 67 && leftMonstre15 >= 90) {
            topMonstre15 += 8;
            monstre15.style.top = topMonstre15 + '%';
        }
        if (topMonstre15 == 75) {
            leftMonstre15 -= 3;
            monstre15.style.left = leftMonstre15 + '%';
        }
        if (topMonstre15 == 75 && leftMonstre15 <= 0) {
            topMonstre15 += 8;
            monstre15.style.top = topMonstre15 + '%';
        }
        if (topMonstre15 == 83) {
            leftMonstre15 += 3;
            monstre15.style.left = leftMonstre15 + '%';
        }
        if (topMonstre15 == 83 && leftMonstre15 >= 90) {
            topMonstre15 += 8;
            monstre15.style.top = topMonstre15 + '%';
        }
        if (topMonstre15 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 16
    let monstre16 = document.getElementById('monstre16');
    let leftMonstre16 = 52.5;
    let topMonstre16 = 35;
    let intervalM16 = setInterval(() => {
        if (topMonstre16 == 35) {
            leftMonstre16 += 3;
            monstre16.style.left = leftMonstre16 + '%';
        }
        if (topMonstre16 == 35 && leftMonstre16 >= 90) {
            topMonstre16 += 8;
            monstre16.style.top = topMonstre16 + '%';
        }
        if (topMonstre16 == 43) {
            leftMonstre16 -= 3;
            monstre16.style.left = leftMonstre16 + '%';
        }
        if (topMonstre16 == 43 && leftMonstre16 <= 0) {
            topMonstre16 += 8;
            monstre16.style.top = topMonstre16 + '%';
        }
        if (topMonstre16 == 51) {
            leftMonstre16 += 3;
            monstre16.style.left = leftMonstre16 + '%';
        }
        if (topMonstre16 == 51 && leftMonstre16 >= 90) {
            topMonstre16 += 8;
            monstre16.style.top = topMonstre16 + '%';
        }
        if (topMonstre16 == 59) {
            leftMonstre16 -= 3;
            monstre16.style.left = leftMonstre16 + '%';
        }
        if (topMonstre16 == 59 && leftMonstre16 <= 0) {
            topMonstre16 += 8;
            monstre16.style.top = topMonstre16 + '%';
        }
        if (topMonstre16 == 67) {
            leftMonstre16 += 3;
            monstre16.style.left = leftMonstre16 + '%';
        }
        if (topMonstre16 == 67 && leftMonstre16 >= 90) {
            topMonstre16 += 8;
            monstre16.style.top = topMonstre16 + '%';
        }
        if (topMonstre16 == 75) {
            leftMonstre16 -= 3;
            monstre16.style.left = leftMonstre16 + '%';
        }
        if (topMonstre16 == 75 && leftMonstre16 <= 0) {
            topMonstre16 += 8;
            monstre16.style.top = topMonstre16 + '%';
        }
        if (topMonstre16 == 83) {
            leftMonstre16 += 3;
            monstre16.style.left = leftMonstre16 + '%';
        }
        if (topMonstre16 == 83 && leftMonstre16 >= 90) {
            topMonstre16 += 8;
            monstre16.style.top = topMonstre16 + '%';
        }
        if (topMonstre16 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 17
    let monstre17 = document.getElementById('monstre17');
    let leftMonstre17 = 67.5;
    let topMonstre17 = 35;
    let intervalM17 = setInterval(() => {
        if (topMonstre17 == 35) {
            leftMonstre17 += 3;
            monstre17.style.left = leftMonstre17 + '%';
        }
        if (topMonstre17 == 35 && leftMonstre17 >= 90) {
            topMonstre17 += 8;
            monstre17.style.top = topMonstre17 + '%';
        }
        if (topMonstre17 == 43) {
            leftMonstre17 -= 3;
            monstre17.style.left = leftMonstre17 + '%';
        }
        if (topMonstre17 == 43 && leftMonstre17 <= 0) {
            topMonstre17 += 8;
            monstre17.style.top = topMonstre17 + '%';
        }
        if (topMonstre17 == 51) {
            leftMonstre17 += 3;
            monstre17.style.left = leftMonstre17 + '%';
        }
        if (topMonstre17 == 51 && leftMonstre17 >= 90) {
            topMonstre17 += 8;
            monstre17.style.top = topMonstre17 + '%';
        }
        if (topMonstre17 == 59) {
            leftMonstre17 -= 3;
            monstre17.style.left = leftMonstre17 + '%';
        }
        if (topMonstre17 == 59 && leftMonstre17 <= 0) {
            topMonstre17 += 8;
            monstre17.style.top = topMonstre17 + '%';
        }
        if (topMonstre17 == 67) {
            leftMonstre17 += 3;
            monstre17.style.left = leftMonstre17 + '%';
        }
        if (topMonstre17 == 67 && leftMonstre17 >= 90) {
            topMonstre17 += 8;
            monstre17.style.top = topMonstre17 + '%';
        }
        if (topMonstre17 == 75) {
            leftMonstre17 -= 3;
            monstre17.style.left = leftMonstre17 + '%';
        }
        if (topMonstre17 == 75 && leftMonstre17 <= 0) {
            topMonstre17 += 8;
            monstre17.style.top = topMonstre17 + '%';
        }
        if (topMonstre17 == 83) {
            leftMonstre17 += 3;
            monstre17.style.left = leftMonstre17 + '%';
        }
        if (topMonstre17 == 83 && leftMonstre17 >= 90) {
            topMonstre17 += 8;
            monstre17.style.top = topMonstre17 + '%';
        }
        if (topMonstre17 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);

    // monstre 18
    let monstre18 = document.getElementById('monstre18');
    let leftMonstre18 = 82.5;
    let topMonstre18 = 35;
    let intervalM18 = setInterval(() => {
        if (topMonstre18 == 35) {
            leftMonstre18 += 3;
            monstre18.style.left = leftMonstre18 + '%';
        }
        if (topMonstre18 == 35 && leftMonstre18 >= 90) {
            topMonstre18 += 8;
            monstre18.style.top = topMonstre18 + '%';
        }
        if (topMonstre18 == 43) {
            leftMonstre18 -= 3;
            monstre18.style.left = leftMonstre18 + '%';
        }
        if (topMonstre18 == 43 && leftMonstre18 <= 0) {
            topMonstre18 += 8;
            monstre18.style.top = topMonstre18 + '%';
        }
        if (topMonstre18 == 51) {
            leftMonstre18 += 3;
            monstre18.style.left = leftMonstre18 + '%';
        }
        if (topMonstre18 == 51 && leftMonstre18 >= 90) {
            topMonstre18 += 8;
            monstre18.style.top = topMonstre18 + '%';
        }
        if (topMonstre18 == 59) {
            leftMonstre18 -= 3;
            monstre18.style.left = leftMonstre18 + '%';
        }
        if (topMonstre18 == 59 && leftMonstre18 <= 0) {
            topMonstre18 += 8;
            monstre18.style.top = topMonstre18 + '%';
        }
        if (topMonstre18 == 67) {
            leftMonstre18 += 3;
            monstre18.style.left = leftMonstre18 + '%';
        }
        if (topMonstre18 == 67 && leftMonstre18 >= 90) {
            topMonstre18 += 8;
            monstre18.style.top = topMonstre18 + '%';
        }
        if (topMonstre18 == 75) {
            leftMonstre18 -= 3;
            monstre18.style.left = leftMonstre18 + '%';
        }
        if (topMonstre18 == 75 && leftMonstre18 <= 0) {
            topMonstre18 += 8;
            monstre18.style.top = topMonstre18 + '%';
        }
        if (topMonstre18 == 83) {
            leftMonstre18 += 3;
            monstre18.style.left = leftMonstre18 + '%';
        }
        if (topMonstre18 == 83 && leftMonstre18 >= 90) {
            topMonstre18 += 8;
            monstre18.style.top = topMonstre18 + '%';
        }
        if (topMonstre18 >= 86) {
            document.getElementById('lose').classList.remove('none');
            clearIntervalMonstre();
        }
    }, 100);
})

// restart game
document.getElementById('restart').addEventListener('click', function () {
    document.location.reload();
})
