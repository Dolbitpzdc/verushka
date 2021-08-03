  $('.single-item').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: "<img src='../static/img/prev.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../static/img/next.svg' class='next' alt='2'>",
  });

  var Site = {}

Site.getCookie = function(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

Site.connect = function(form) {
  var name = form["elements"]["service-name"].value
  var email = form["elements"]["service-email"].value
  var course = form["elements"]["course"].value
  var courseOption = form["elements"]["courseOption"].value

  $.ajax({
    url: "/api/connect/",
    method: "POST",
    data: {
			email: email,
      name: name,
      course: course,
      courseOption: courseOption,
    },
    success: function(response) {
      toastr["success"](response.response)
    },
    error: function(error) {
      toastr["error"](error.responseJSON.error)
    }

  });
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}