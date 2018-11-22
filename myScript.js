window.onload = function() {
init();
}
function init(){
 alert('Welcome! Enjoy the website.');
}

$(document).ready(function(){
  // Adds smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});
//Scroll to top when arrow up is clicked
//arrow shows when user has scrolled 200px
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
//website returns to top "slowl"
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
var channelID = "UCiGm_E4ZwYSHV3bcW1pnSeQ";
$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
    $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
});
