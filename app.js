var btns = document.querySelectorAll('.btn');
// var player = Math.floor(Math.random() * 2) + 1 === 1 ? 'X' : 'O';
var player = 'X';
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerText === '')
            btn.innerText = 'O';
        player = 'O';
        // player = player === 'X' ? 'O' : 'X';
        checkWin() ? reload() : '';
        setTimeout(() => {
            boot();
        }, 700);
    });

});

function boot() {
    player = 'X';
    let checkk = true;
    for (let i = 0; i < 8; i += 3) {
        let temp = 0;
        let count = i + 3;
        for (let k = i; k < count; k++)
            btns[k].innerText == 'O' ? temp++ : btns[k].innerText == 'X' ? temp-- : '';

        if (temp >= 2) {
            for (let k = i; k < count; k++)
                btns[k].innerText == '' ? btns[k].innerText = 'X' : '';
            checkWin() ? reload() : '';
            return;
        }
    }


    for (let i = 0; i < 3; i++) {
        let temp = 0;
        let count = i + 7;
        for (let k = i; k < count; k += 3)
            btns[k].innerText == 'O' ? temp++ : btns[k].innerText == 'X' ? temp-- : '';

        if (temp >= 2) {
            for (let k = i; k < count; k += 3)
                btns[k].innerText == '' ? btns[k].innerText = 'X' : '';
            checkWin() ? reload() : '';
            return;
        }
    }


    temp = 0;
    for (let k = 2; k < 8; k += 2) {
        btns[k].innerText == 'O' ? temp++ : btns[k].innerText == 'X' ? temp-- : '';
    }
    if (temp >= 2) {
        for (let k = 2; k < 8; k += 2)
            btns[k].innerText == '' ? btns[k].innerText = 'X' : '';
        checkWin() ? reload() : '';
        return;
    }

    temp = 0;
    for (let k = 0; k < 12; k += 4) {
        btns[k].innerText == 'O' ? temp++ : btns[k].innerText == 'X' ? temp-- : '';
    }
    if (temp >= 2) {
        for (let k = 0; k < 12; k += 4)
            btns[k].innerText == '' ? btns[k].innerText = 'X' : '';
        checkWin() ? reload() : '';
        return;
    }
    // if (checkk) {
    for (var i = 0; i < btns.length; i++) {
        if (btns[i].innerText == '') {
            btns[i].innerText = 'X';
            player = 'X';
            checkWin() ? reload() : '';
            break;
        }
    }
}

function checkWin() {
    for (let i = 0; i < 8; i += 3)
        if (btns[i].innerText != '' && btns[i].innerText == btns[i + 1].innerText && btns[i + 1].innerText == btns[i + 2].innerText) {
            changeColor([btns[i], btns[i + 1], btns[i + 2]]);
            return true;
        }



    for (let i = 0; i < 3; i++)
        if (btns[i].innerText != '' && btns[i].innerText == btns[i + 3].innerText && btns[i + 3].innerText == btns[i + 6].innerText) {
            changeColor([btns[i], btns[i + 3], btns[i + 6]]);
            return true;
        }


    if (btns[0].innerText != '' && btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText) {
        changeColor([btns[0], btns[4], btns[8]]);
        return true;
    }

    if (btns[2].innerText != '' && btns[2].innerText == btns[4].innerText && btns[4].innerText == btns[6].innerText) {
        changeColor([btns[2], btns[4], btns[6]]);
        return true;
    }
    return false;
}


function changeColor(arr) {
    arr.forEach((btn) => {
        btn.style.color = 'green';
    });
}

function reload() {
    alert("win : " + player);
    setTimeout(function () {
        location.reload();
    }, 700);
}