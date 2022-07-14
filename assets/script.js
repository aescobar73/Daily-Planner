var time = moment().format('dddd, MMM Do YYYY, hh:mm a')
$('#currentDay').text(time);


function doubleStack() {
    
    // old method, wasn't reading as am/pm, and was just reading the value of the textarea as a number.

// var times9 = $('.hour9').text()
// var times10 = $('.hour10').text()
// var times11 = $('.hour11').text()
// var times12 = $('.hour12').text()
// var times13 = $('.hour13').text()
// var times14 = $('.hour14').text()
// var times15 = $('.hour15').text()
// var times16 = $('.hour16').text()
// var times17 = $('.hour17').text()
// console.log(times)


// var firstNumber = parseInt(times9)
// var secondNumber = parseInt(times10)
// var thirdNumber = parseInt(times11)
// var fourthNumber = parseInt(times12)
// var fifthNumber = parseInt(times13)
// var sixNumber = parseInt(times14)
// var sevenNumber = parseInt(times15)
// var eightNumber = parseInt(times16)
// var nineNumber = parseInt(times17)

// console.log(divs)
    // var blocks = $("div").attr('id')
    // console.log(blocks)


// if(currentTime > blocks) {
//     $('#hr9').addClass('past') 
// } else if(currentTime == firstNumber) {
//     $('#hr9').addClass('present')
// } else if(currentTime < firstNumber) {
//     $('#hr9').addClass('future')
// }


// if(currentTime > secondNumber) {
//     $('#hr10').addClass('past')
// } else if(currentTime == secondNumber) {
//     $('#hr10').addClass('present')
// } else if(currentTime < secondNumber) {
//     $('#hr10').addClass('future')
// }


// if(currentTime > thirdNumber) {
//     $('#hr11').addClass('past')
// } else if(currentTime == thirdNumber) {
//     $('#hr11').addClass('present')
// } else if(currentTime < thirdNumber) {
//     $('#hr11').addClass('future')
// }


// if(currentTime > fourthNumber) {
//     $('#hr12').addClass('past')
// } else if(currentTime == fourthNumber) {
//     $('#hr12').addClass('present')
// } else if(currentTime < fourthNumber) {
//     $('#hr12').addClass('future')
// }


// if(currentTime > fifthNumber) {
//     $('#hr13').addClass('past')
// } else if(currentTime == fifthNumber) {
//     $('#hr13').addClass('present')
// } else if(currentTime < fifthNumber) {
//     $('#hr13').addClass('future')
// }

// if(currentTime > sixNumber) {
//     $('#hr14').addClass('past')
// } else if(currentTime == sixNumber) {
//     $('#hr14').addClass('present')
// } else if(currentTime < sixNumber) {
//     $('#hr14').addClass('future')
// }


// if(currentTime > sevenNumber) {
//     $('#hr15').addClass('past')
// } else if(currentTime == sevenNumber) {
//     $('#hr15').addClass('present')
// } else if(currentTime < sevenNumber) {
//     $('#hr15').addClass('future')
// }

// if(currentTime > eightNumber) {
//     $('#hr16').addClass('past')
// } else if(currentTime == eightNumber) {
//     $('#hr16').addClass('present')
// } else if(currentTime < eightNumber) {
//     $('#hr16').addClass('future')
// }

// if(currentTime > nineNumber) {
//     $('#hr17').addClass('past')
// } else if(currentTime == nineNumber) {
//     $('#hr17').addClass('present')
// } else if(currentTime < nineNumber) {
//     $('#hr17').addClass('future')
// }




var currentTime = moment().format('H')
    // console.log(currentTime)
var divs = $('div')


divs.each(function(index, value){
    var id = $(value).attr('id')
    console.log(id)

    if(currentTime === id) {
        $(value).next().addClass('present')
        
    } else if(currentTime > id) {
        $(value).next().addClass("past")
    } else if(currentTime < id) {
        $(value).next().addClass('future')

    }

})


}

doubleStack()

// Local Storage

    var getInfo = $('.information')
    var getTime = $('.hour9')

// function getValue() {
//     var info = getInfo.value
//     var tiempo = getTime.value

//     localStorage.setItem(tiempo, info)

// }

$('.button').on('click', function() {
    var info = getInfo.value
    var tiempo = getTime.value

    localStorage.setItem(tiempo, info)


})

// $('.button').on('click' function() {
    
//     var getInfo = $('.information').value
//     var getTime = $('.hour9').value
// })




