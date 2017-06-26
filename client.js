

$(document).ready(function(){

var counter = 1;

  $('#generateButton').on('click', function(){
    //console.log('button clicked');
    $('.container').append("<div class='div'>" + "<p>" + counter + "</p>" + "<button id='swapNow'>Swap</button>" + "<button id='deleteNow'>Delete</button>" + "</div>");
    counter += 1;
  });

  $('#swapNow').on('click', function(){
    $('.container div').swap("<div class='newDiv'></div>");
  });

  $('#deleteNow').on('click', function(){
    $('.contaner div').remove();
  });

});

//should be switching background-color: red with background-color: yellow using data
