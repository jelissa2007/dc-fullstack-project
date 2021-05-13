alert('hi!')

// popout function 
function toggle() {
    let blur = document.getElementById('blur');
    blur.classList.toggle('active')

    let popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

