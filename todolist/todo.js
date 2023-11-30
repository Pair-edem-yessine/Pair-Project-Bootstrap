
$(document).ready(function () {
   $('#butt').click(function() {
     var newtask = $('#task').val();
     if (newtask.length === 0) {
       alert('Please enter a task!');
     } else {
       $('#display').append('<br><li>' + newtask + '<input type=checkbox id=check>'+'</li>');

     }
   });
   
 });
//  fff