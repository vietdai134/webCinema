document.getElementById("header_contain").addEventListener("click", function(event) {
    var target = event.target;
    var value=target.textContent;
    if (target.id === 'cinemaApp') {
        alert(target.textContent);
    }
    else if(target.id==='cinemaFB'){
        alert(target.textContent);
    }
    else if (target.id === 'logIn') {
        alert(target.textContent);
    }
    else if(target.id==='theTV'){
        alert(target.textContent);
    }
    else if (target.id === 'htKH') {
        alert(target.textContent);
    }
});


document.getElementById("header_menu").addEventListener("click", function(event) {
    var target = event.target;
    if (target.id === 'shopquatang') {
        alert(target.textContent);
    }
    else if (target.id === 'muave') {
        alert(target.textContent);
    }
    else if(target.id==='phim'){
        alert(target.textContent);
    }
    else if (target.id === 'rapchieuphim') {
        alert(target.textContent);
    }
    else if(target.id==='khuyenmai'){
        alert(target.textContent);
    }
    else if (target.id === 'lienhe') {
        alert(target.textContent);
    }
});


