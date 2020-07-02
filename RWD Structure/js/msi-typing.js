msiTyping = (id, speed = 300) => {
var selector = document.getElementById(id);
var txt = selector.innerHTML;
selector.innerHTML = "";
var i = 0;
(function msi() {
  if (i < txt.length) {
    selector.innerHTML += txt.charAt(i);
    i++;
    setTimeout(msi, speed);
  }
  else {
  i = 0;
  selector.innerHTML = "";
  setTimeout(msi, speed);
 }
})();
}
