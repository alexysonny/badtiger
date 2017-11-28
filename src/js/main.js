$(document).ready(function () {
  var id = 1;
  var number = 0;

  function createElement(id) {
    return element =
      '<div class="element' + id + '"><div class="row"><div class="col s6 offset-s3 wrap card-panel hoverable"><div class="row valign-wrapper"><div class="col s2 valign-wrapper"><div class="blockId"><p>' +
      id +
      '</p></div></div><div class="input-field col s6 valign-wrapper"><input type="text" id="name' +
      id +
      '" name="base' +
      id +
      '"><label for="name' +
      id +
      '">Name</label></div><div class="col s4"><div class="row"><div class="col s6 addButton"><a id="addElementButton" class="waves-effect waves-light btn"></a></div><div data-removeId="' + id + '" class="col s6 removeButton"><a class="waves-effect waves-light btn"></a></div></div></div></div></div></div></div>';
  }

  function initialize() {
    var elem = createElement(id);
    $(".container").append(elem);
    id++;
    number++;
  };

/*   function addNewElement(id) {
    var elem = createElement(id);
    $(".container").append(elem);
    id++;
  }; */

  initialize();

  function removeElement (event) {
    /* var elemId = event.data('removeId'); */
    var elemId = $(event.currentTarget).data('removeId');
    $(".element"+elemId ).remove();
  };

  $(".container").on('click', '.addButton', function () {
    var elem = createElement(id);
    $(".container").append(elem);
    id++;
    number++;
  });

  $(".container").on('click', '.removeButton', function(event) {
    var elemId = '.element' + $(event.currentTarget).data('removeid');
    if (number > 1) {
      $(elemId).remove();
      number--;
    } else {
      alert ("Невозможно удалит последний эелемент!");
    }
  });
});
