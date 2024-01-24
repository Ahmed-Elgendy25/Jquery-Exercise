$('#sidebar-btn').on('click', function () {
  $('#sidebar').toggleClass('visible');
});

let maxLength = 100; // Set the maximum length

$('.textarea').on('input', function () {
  let currentLength = $(this).val().length;
  counter = maxLength - currentLength;
  console.log(counter);

  // Update the text on the page
  $('.counter').text(`${counter}`);
});

$('#send').on('click', function () {
  $('.textarea').attr('maxlength', 100);
  $('.textarea').val('');
  $('.counter').text('100');
});

// toggle singers-list

$('#singer-one').on('click', function () {
  $('#singer-card-one').slideToggle();
  $('#singer-card-two, #singer-card-three, #singer-card-four').slideUp();
});

$('#singer-two').on('click', function () {
  $('#singer-card-two').removeClass('d-none');
  $('#singer-card-two').slideToggle();
  $('#singer-card-one, #singer-card-three, #singer-card-four').slideUp();
});

$('#singer-three').on('click', function () {
  $('#singer-card-three').removeClass('d-none');
  $('#singer-card-three').slideToggle();
  $('#singer-card-one, #singer-card-two, #singer-card-four').slideUp();
});

$('#singer-four').on('click', function () {
  $('#singer-card-four').removeClass('d-none');
  $('#singer-card-four').slideToggle();
  $('#singer-card-one, #singer-card-two, #singer-card-three').slideUp();
});

// countdown
$(document).ready(function () {
  // Set the target date (replace with your desired date)
  var targetDate = new Date('2025-01-01T00:00:00');

  // Initialize the countdown
  $('#duration').countdown(targetDate, function (event) {
    $('#days-counter span').text(event.strftime('%D'));
    $('#hours-counter span').text(event.strftime('%H'));
    $('#minutes-counter span').text(event.strftime('%M'));
    $('#seconds-counter span').text(event.strftime('%S'));

    // Manually add labels
    $('#days-counter span').next().text('D');
    $('#hours-counter span').next().text('H');
    $('#minutes-counter span').next().text('M');
    $('#seconds-counter span').next().text('S');
  });
});

// scroll behavior

$('.nav-item a[href^="#"]').on('click', function (e) {
  e.preventDefault(); // Prevent the default behavior of the anchor tag

  let aHref = $(this).attr('href');
  let sectionOffset = $(aHref).offset().top;

  $('body, html').animate({ scrollTop: sectionOffset }, 100);
});
