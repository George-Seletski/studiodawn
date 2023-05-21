const buttonBox = document.querySelector('.button-box');
var clicked_contact_button_flag = 0;
buttonBox.addEventListener('click', function() {
    buttonBox.classList.toggle('clicked');
    clicked_contact_button_flag += 1;

});