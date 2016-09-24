// REFERENCES
// http://fiddle.jshell.net/naeluh/n42hf/?utm_source=website&utm_medium=embed&utm_campaign=n42hf

// https://www.youtube.com/watch?v=xFW7ySq5aAc

function getCat() {
  $.ajax({
    headers: {
      "Authorization": "Client-ID 2066dd9c106e48c",
    },
    url: 'https://api.imgur.com/3/gallery/r/cats/top/year',
    dataType: "json",

  })

  .done(function(results) {
    $("#new-cat").animate({
          top: 0
        }, 500);
    
        $("#catbox").css("display", "none"); 
    var z = "";
    console.log(results);
    for (var i = 0; i < 100; i++) {
        var x = Math.floor((Math.random() * 100) + 1);
        var y = results.data[x].is_album;
        console.log(y);
        if (y == false) {
          z = results.data[x].link;
          break;
        }
        else {
          z = results.data[x].link;
        };
    };
    
    var catImg = "url(\"" + z +"\")";
    $("#catbox").css("background-image", catImg);    
    $("#catbox").fadeIn(900);

    })
    
    .fail(function() {
      alert("Failed to fetch data. Check for services outage: http://status.imgur.com/")
    });
};

$(document).ready(function() {
  $('#new-cat').on('click', getCat);

  });        
