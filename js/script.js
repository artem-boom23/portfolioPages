const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        links_menu = document.querySelector('.menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

links_menu.addEventListener('click', () => {
    menu.classList.remove('active');
});

$('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
});

$('form').submit(function(e) {
    $('.overlay, #sorry').fadeIn('slow');
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "../mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        alert("Done");
        $('form').trigger('reset');
    });
    return false;
});


new WOW().init();