// popout function 
// function toggle() {
//     let blur=document.getElementById('blur');
//     blur.classList.toggle('active')

//     let popup=document.getElementById('popup');
//     popup.classList.toggle('active')

// }

//cuisine filter dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input=document.getElementById("myInput");
  filter=input.value.toUpperCase();
  div=document.getElementById("myDropdown");
  a=div.getElementsByTagName("a");
  for (i=0; i<a.length; i++) {
    txtValue=a[i].textContent||a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter)>-1) {
      a[i].style.display="";
    } else {
      a[i].style.display="none";
    }
  }
}
// /////stop click of favorites button

// function myFunction() {
//   document.getElementsById("favorites")[0].removeAttribute("onclick");


