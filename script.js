function openFunction(){
    document.getElementById("menu").style.width="100%";
    document.getElementById("menu").style.height="auto";
    document.getElementById("mainbox").style.marginLeft="300px";
    document.getElementById("mainbox").innerHTML="";
}
function closeFunction(){
    document.getElementById("menu").style.width="0px";
    //document.getElementById("menu").style.height="0px";
    document.getElementById("mainbox").style.marginLeft="20px";
    document.getElementById("mainbox").innerHTML="&#9776;";
}
let counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter>4){
        counter = 1;
    }

},5000);


function load() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "items.json", true);
  
    xhr.onload = function () {
      if (this.status == 200) {
        let items = JSON.parse(this.responseText);
        let output = "";
        for (let i in items) {
          output +=
            '<div class="items">' +
            '<img src="'+items[i].picture+'" width="500" height="400">' +
            "<ul list-style-type: none>" +
            "<li> " +
            items[i].name +
            "</li>" +
            "<li> " +
            items[i].description + 
            "</li>" +
            "<li> " + 
            items[i].price + 
            "</li>"+
            '<button id="btn_menu">Add to cart</button>' +
            "</ul>" +
            "</div>";
        }
        document.getElementById("it").innerHTML = output;
      }
    };
  
    xhr.send();
  }
  
  load();
  
  $(document).ready(function(){
    // Add smooth scrolling to all links
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
      } // End if
    });
  });