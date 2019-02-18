function openCard(e) {
  var obj = document.getElementById("help_card");
  var x;
  var y;
  if (e.pageX) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX;
    y = e.clientY;
  }
  obj.style.top = (y - 220) + "px";
  obj.style.left = (x - 358) + "px";
  obj.style.display = "block";
}

function closeCard() {
  var obj = document.getElementById("help_card");
  obj.style.display = "none";
}
// SPINER
$(document).ready(function() {
  $(".buttonorig").click(function() {
    $(".card").fadeTo("fast", 0.1);
    $(".spin").fadeIn("fast");
  });
});

// Отработка groupinputs
$('.NumGroup').on('input propertychange', function(e) {
    var elem = $(e.target),
        value = elem.val(),
        caret = elem.caret(),
        newValue = value.replace(/[^0-9]/g, ''),
        valueDiff = value.length - newValue.length;

    if (valueDiff) {
        elem
            .val(newValue)
            .caret(caret.start - valueDiff, caret.end - valueDiff);
    }
});

//Меню языка страницы
$(function(){
  $('.lang').hover(function () {
    $('.lang li').fadeIn();        
  },
                   function () {
                     $('.lang li').fadeOut();        
                   });    
  $('.lang li').bind('mouseover', function () {
    $('.lang li').fadeIn();
  });
});*/

// Функция для ввода в input только цифр
if (document.querySelector('.numbercard input')) {
  document.querySelector('.numbercard input').onkeypress = function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
      return false;
    }
  }
}
function getChar(event) {
  if (event.which == null) {
    if (event.keyCode < 32) return null;
    return String.fromCharCode(event.keyCode);
  }
  if (event.which != 0 && event.charCode != 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which);
  }
  return null;
}