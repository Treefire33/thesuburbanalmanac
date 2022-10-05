//Utility funcs
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  var featuredPlants  = ['Peashooter', 'Sunflower', 'Cherry Bomb', 'Wallnut'];
  let rand1 = getRandomInt(featuredPlants.length);
  let rand2 = getRandomInt(featuredPlants.length);
  
  function setFeaturedPlants()
  {
    while(rand2 == rand1)
    {
      rand2 = getRandomInt(featuredPlants.length);
    }
    $('#fp1plant').text(featuredPlants[rand1]);
    $('#fp2plant').text(featuredPlants[rand2]);
    $('#fp1image').attr('src', 'images/'+featuredPlants[rand1].toLowerCase()+'.jpg');
    $('#fp2image').attr('src', 'images/'+featuredPlants[rand2].toLowerCase()+'.jpg');
  }
  
  setFeaturedPlants();
  
  $(function(){
    $('#fp1plant').click(function(){
      window.location.href = "pages/plants/"+featuredPlants[rand1].toLowerCase().replace(' ', '')+".html";
      return false;
    });
    $('#fp2plant').click(function(){
      window.location.href = "pages/plants/"+featuredPlants[rand2].toLowerCase().replace(' ', '')+".html";
      return false;
    });
  });