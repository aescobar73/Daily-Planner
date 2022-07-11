var time = moment().format('MMM Do YYYY')
$('#currentDay').text(time);

var colorChange = $('.time');


colorChange.on('click', function() {
    $('.edit1').css({ 'background-color': ' rgb(224, 90, 90)'})
    

})