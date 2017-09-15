$(document).ready(function() {
  $(".submit").click(function(event) {
    event.preventDefault();

    var cookies = ["sugar", "chocolate", "lemon"];

    for (var i = 0; i <= cookies.length - 1; i++) {
      var cookie = cookies[i];

      var inputValue = parseInt($("." + cookie).val());

      if (inputValue && inputValue >= 0) {
        var currentValue = parseInt(Cookies.get(cookie));

        if (currentValue) {
          var newValue = currentValue + inputValue;
        } else {
          var newValue = inputValue;
        }

        Cookies.set(cookie, newValue);
      }
    }
  });
});
