
let display = document.getElementById('comic-date');
let btn = document.getElementById('b1');
btn.addEventListener('click', randomFun);
function randomFun() {
  $.getJSON("https://api.chucknorris.io/jokes/random")
     .done((data) => {
        console.log(data)
        display.innerHTML = data.value;
       })
}

class XkcdComic {
  constructor() {
    // Do not remove the next line - this is a needed workaround!
    this.addCorsHeader();

    
  }
  addCorsHeader() {
    jQuery.ajaxPrefilter(function(options) {
      if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
      }
    });
  }
}

var bla = new XkcdComic();