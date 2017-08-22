document.addEventListener('DOMContentLoaded', function(){

  var catBox = document.querySelectorAll('div.cat-box');

  var SummonKitties = document.querySelector('.summon-cats');

  SummonKitties.addEventListener('click', function(){

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'get',
      dataType: 'json'
    }).done(function(responseData){
      for (var i = 0; i < responseData.cats.length; i++) {
        responseData.cats[i].photo;
        var img = document.createElement('img');
        img.src = responseData.cats[i].photo
        catBox[i].appendChild(img);
      }
      console.log(responseData.cats);


    });
  });


});
