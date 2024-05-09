var btns = document.querySelectorAll('.btn');
var player = Math.floor(Math.random() * 2) + 1 === 1 ? 'X' : 'O';
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerText === '')
            player = player === 'X' ? 'O' : 'X';
        btn.innerText = player;
        btns = document.querySelectorAll('.btn');
        checkWin();

    });

});



function checkWin() {
    for (let i = 0; i < 8; i += 3) {
        if (btns[i].innerText != ''
            && btns[i].innerText == btns[i + 1].innerText
            && btns[i + 1].innerText == btns[i + 2].innerText) {
            alert("win: " + btns[i].innerText);
            location.reload();
        }
    }


    for (let i = 0; i < 3; i++) {
        if (btns[i].innerText != ''
            && btns[i].innerText == btns[i + 3].innerText
            && btns[i + 3].innerText == btns[i + 6].innerText) {
            alert("win : " + btns[i].innerText);
            location.reload();
        }
    }

    if (btns[0].innerText != ''
        && btns[0].innerText == btns[4].innerText
        && btns[4].innerText == btns[8].innerText) {
        alert("win : " + btns[0].innerText);
        location.reload();
    }

    if (btns[2].innerText != ''
        && btns[2].innerText == btns[4].innerText
        && btns[4].innerText == btns[6].innerText) {
        alert("win : " + btns[2].innerText);
        location.reload();
    }

}