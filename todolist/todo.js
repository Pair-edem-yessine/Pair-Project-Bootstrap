$(document).ready(function () {
    $('#butt').click(function() {
      var newTask = $('#task').val();
      if (newTask) {
        $('#display').append('<br><li><input type="checkbox" id="check">' + newTask + '<button id="removeButton">Delete</button></li>');
      } else {
        alert('Please enter a task!');
      }
    });
    $(document).on('change', '#check', function() {
      $(this).parent().toggleClass('checked');
    });

    $(document).on('click', '#removeButton', function() {
        $(this).parent().remove();
      });
    } )


