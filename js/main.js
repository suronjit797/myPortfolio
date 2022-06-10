

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
  $('.header_bottom-pc .nav_item.blog_nav').click(() => {
    $('.nav_item.blog_nav').addClass('active')
    $('.nav_item.blog_nav').siblings().removeClass('active')
    $('#blog').addClass('active')
    $('#blog').siblings().removeClass('active')
  })

  $('.profile_contact').click(() => {
    $('#contact').addClass('active')
    $('#contact').siblings().removeClass('active')
  });

  $('.header_humb').click(() => {
    $('.header_bottom').toggleClass('active')
  });


    // mobile
    $('.mobile_nav').click(function () {
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
    });

    // isotope_body
    $('.isotope_body').click(function (event) {
      $('.isotope_modal').addClass('active')
      $('header').hide()

      const isotopeModalBodyInner = $(".isotope_modal-body_inner");
      const header = $(this).children('.text-center').html()
      const image = $(this).children('.isotope_image').children('.second_img').attr('src')
      const link = $(this).children('.link')[0]
      isotopeModalBodyInner.html(`
        <h3 class='text-center mb-3'> ${header} </h3>
        <div class="row row-cols-md-2 g-3">
        <div class="col">
          <img src=${image} alt="">
        </div>
        <div class="col">
          <ul>
            <li> Mern stack site </li>
            <li> Login register system </li>
            <li> Access from database </li>
            <li> Fully responsive </li>
            <li> Use in this project
                <ul>
                  <li> React </li>
                  <li> Bootstrap </li>
                  <li> Firebase </li>
                  <li> Express </li>
                  <li> MongoDb </li>
                </ul>
            </li>
          </ul>
          <a href="${link}" class='btn btn-primary' target='_blank'> Go to page </a>
        </div>
      </div>

    `)

    });

    // close modal
    $('.fa-times').click(function (event) {
      $('.isotope_modal').removeClass('active')
      $('header').show()
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