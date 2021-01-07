/**
 * 文字效果
 * @param {string} elementQuery 文字元素
 * @param {number} cutNumber 切边（text-shadow 高度
 */
function textShadow(elementQuery, cutNumber) {
  const element = document.querySelector(elementQuery);
  let textShadow = "";
  let i=0;
  for(i; i<Math.floor(element.offsetWidth/cutNumber); i++) {
    textShadow += `${i}px ${i}px 0 #ccc,`;
  }
  element.style.textShadow = textShadow += `${i * 2}px ${i * 2}px 0 rgba(0, 0, 0, 0.2)`;
}

/**
 * 星星点状背景实现
 */
function stars() {
  const count = 200;
  const section = document.querySelector("section");
  let i = 0;
  while(i < count) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    const size = Math.random() * 4;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    const duration = Math.random() * 2;
    star.style.animationDelay = 2 + duration + "s";

    section.appendChild(star);
    i++;
  }
}