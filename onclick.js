document.addEventListener("DOMContentLoaded", function() {
  const bookItems = document.querySelectorAll(".item");
  bookItems.forEach(function(item) {
    item.onclick = function() {
      alert("你点击了： " + this.textContent);
    };
  });
  bookItems.forEach(function(item) {
    item.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; 
    };
  });
  bookItems.forEach(function(item) {
    item.onmouseout = function() {
      this.style.backgroundColor = ""; 
    };
  });
  bookItems.forEach(function(item) {
    item.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; 
    };
  });
  bookItems.forEach(function(item) {
    item.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; 
    };
  });
})
