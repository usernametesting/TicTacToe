var btns = document.querySelectorAll('.btn');
var player = Math.floor(Math.random() * 2) + 1 === 1 ? 'X' : 'O';
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.innerText === '')
            player = player === 'X' ? 'O' : 'X';
        btn.innerText = player;
        checkWin();
    });

});





function checkWin() {
    for (let i = 0; i < 8; i += 3)
        if (btns[i].innerText != '' && btns[i].innerText == btns[i + 1].innerText && btns[i + 1].innerText == btns[i + 2].innerText) {
            changeColor([btns[i], btns[i + 1], btns[i + 2]]);
            alert("win : " + player);
            reload();
        }



    for (let i = 0; i < 3; i++)
        if (btns[i].innerText != '' && btns[i].innerText == btns[i + 3].innerText && btns[i + 3].innerText == btns[i + 6].innerText) {
            changeColor([btns[i], btns[i + 3], btns[i + 6]]);
            alert("win : " + player);
            reload();
        }


    if (btns[0].innerText != '' && btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText) {
        changeColor([btns[0], btns[4], btns[8]]);
        alert("win : " + player);
        reload();
    }

    if (btns[2].innerText != '' && btns[2].innerText == btns[4].innerText && btns[4].innerText == btns[6].innerText) {
        changeColor([btns[2], btns[4], btns[6]]);
        alert("win : " + player);
        reload();
    }

}


function changeColor(arr) {
    arr.forEach((btn) => {
        btn.style.color = 'green';
    });
}

function reload() {
    setTimeout(function () {
        location.reload();
    }, 700);
}