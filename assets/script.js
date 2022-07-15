var time = moment().format('dddd, MMM Do YYYY, hh:mm a')
$('#currentDay').text(time);


function doubleStack() {
  

var currentTime = moment().format('H')
    // console.log(currentTime)
var divs = $('div')


divs.each(function(index, value){
    var id = $(value).attr('id')
    // console.log(id)

    if(currentTime > id) {
        $(value).next().addClass("past")
    } else if(currentTime === id) {
        $(value).next().addClass('present')        
    }  else if(currentTime < id) {
        $(value).next().addClass('future')

    }

})


}

doubleStack()

$(document).ready(function(){ 

$('.saveInput').on('click', function(){
    var text = $('#test').val()

    localStorage.setItem('Info', text)
})

})

$(document).ready(function(){ 

    $('.saveInput1').on('click', function(){
        var text = $('#test1').val()
    
        localStorage.setItem('Info', text)
    })
    
    })

    $(document).ready(function(){ 

        $('.saveInput2').on('click', function(){
            var text = $('#test2').val()
        
            localStorage.setItem('Info', text)
        })
        
        })

        $(document).ready(function(){ 

            $('.saveInput3').on('click', function(){
                var text = $('#test3').val()
            
                localStorage.setItem('Info', text)
            })
            
            })

            $(document).ready(function(){ 

                $('.saveInput4').on('click', function(){
                    var text = $('#test4').val()
                
                    localStorage.setItem('Info', text)
                })
                
                })

                $(document).ready(function(){ 

                    $('.saveInput5').on('click', function(){
                        var text = $('#test5').val()
                    
                        localStorage.setItem('Info', text)
                    })
                    
                    })

         $(document).ready(function(){ 

          $('.saveInput6').on('click', function(){
              var text = $('#test6').val()
                        
               localStorage.setItem('Info', text)
           })
                        
     })

         $(document).ready(function(){ 

             $('.saveInput7').on('click', function(){
                  var text = $('#test7').val()
                    
               localStorage.setItem('Info', text)
             })
                            
         })

         $(document).ready(function(){ 

                 $('.saveInput8').on('click', function(){
                       var text = $('#test8').val()
                                
                    localStorage.setItem('Info', text)
             })
                                
         })


        //  retrieve local storage Info
//    var noRefresh = localStorage.getItem(text)
         