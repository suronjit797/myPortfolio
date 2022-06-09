// init Isotope
var $grid = $('.works_isotope').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'p', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});




$(document).ready(function () {
  // pc
  $('.header_bottom-pc .nav_item.about_nav').click(() => {
    $('.nav_item.about_nav').addClass('active')
    $('.nav_item.about_nav').siblings().removeClass('active')
    $('#about').addClass('active')
    $('#about').siblings().removeClass('active')
  })

  $('.header_bottom-pc .nav_item.resume_nav').click(() => {
    $('.nav_item.resume_nav').addClass('active')
    $('.nav_item.resume_nav').siblings().removeClass('active')
    $('#resume').addClass('active')
    $('#resume').siblings().removeClass('active')
  })

  $('.header_bottom-pc .nav_item.works_nav').click(() => {
    $('.nav_item.works_nav').addClass('active')
    $('.nav_item.works_nav').siblings().removeClass('active')
    $('#works').addClass('active')
    $('#works').siblings().removeClass('active')
  })

  $('.header_bottom-pc .nav_item.contact_nav').click(() => {
    $('.nav_item.contact_nav').addClass('active')
    $('.nav_item.contact_nav').siblings().removeClass('active')
    $('#contact').addClass('active')
    $('#contact').siblings().removeClass('active')
  })

  $('.profile_contact').click(() => {
    $('#contact').addClass('active')
    $('#contact').siblings().removeClass('active')
  });


  // mobile
  $('.mobile_nav').click(function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  });




});


window.addEventListener('load', () => {
  $('.preloader').hide()

})


// main js
const messageForm = document.getElementById('messageForm')

const fullNameData = document.getElementById('fullName')
const emailData = document.getElementById('email')
const messageData = document.getElementById('message')



// mail api





messageForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = fullNameData.value
  const email = emailData.value
  const message = messageData.value
  if (name && email && message) {


    Email.send({
      SecureToken: "9d290e20-10a4-4cc8-bb5a-e7bdcd5671af",
      To: email,
      From: 'suronjit797@gmail.com',
      Subject: `Portfolio contact from - ${name}`,
      Body: message
    })
      .then(message => {
        console.log(message);
        alert('mail send successfully')
        fullNameData.value = ''
        emailData.value = ''
        messageData.value = ''


      });



  } else {
    alert('Please fill up all boxes')
  }
})