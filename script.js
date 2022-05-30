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
            '<button id="btn_menu">Buy</button>' +
            "</ul>" +
            "</div>";
        }
        document.getElementById("it").innerHTML = output;
      }
    };
  
    xhr.send();
  }
  
  load();
  
