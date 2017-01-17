$(function () {

  $(document).ready(function () {
    $.ajax({
      url: 'https://codeschool.pluralsight.com/users/2033027.json',
      dataType: 'jsonp',
      success: function (response) {
        $(response.courses.completed).each(function (i, course) {
          $("#badges").append(
            "<div class='course'>" +
            "<h3>" + course.title + "</h3>" +
            "<img src='" + course.badge + "'/>" +
            "<a href='" + course.url + "' target='_blank' class='btn btn-primary'>See Course</a></div>")
        })
      }
    });
  });
});
