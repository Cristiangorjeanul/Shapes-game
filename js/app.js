$(document).ready(function () {
  //Random display list
  var $ul = $('.location');
  $('li').sort(function () {
    return (Math.round(Math.random()) - 0.5);
  }).appendTo($ul);

  var number = 0;
  $('.shapes span').each(function (index) {
    var $self = $(this);
    var item = $self.data('value');
    var $target = $('.location li[data-target="' + item + '"]');

    $self.draggable({
      revert: 'invalid',
      helper: 'clone',
      cursor: 'move'
    });

    $target.droppable({
      accept: 'span[data-value="' + item + '"]',
      drop: function (event, ui) {
        if (number < 9) {
          $target.append(ui.draggable);
          $target.addClass('match');
          number++;
        } 
      }
    });
  });


});