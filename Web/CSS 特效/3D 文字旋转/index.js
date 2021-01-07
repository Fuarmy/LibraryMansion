Splitting();
let circle = document.querySelector(".circle");
/**
 * 鼠标移动
 * @param {} e
 */
window.onmousemove = function(e) {
  let x = e.clientX/-2;
  circle.style.animation = "none";
  circle.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(15deg)`;
}
/**
 * 鼠标移出
 * @param {*} e
 */
window.onmouseout = function(e) {
  circle.style.animation = "animate 8s linear infinite";
}