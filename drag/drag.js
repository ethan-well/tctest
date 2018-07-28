var box = document.getElementById('drag'),
    scrollWidth = document.body.clientWidth || document.documentElement.clientWidth,
    scrollHeight = document.body.clientHeight || document.documentElement.clientHeight,
    boxOffsetX, boxOffsetY, startX, startY, mouseX, mouseY, draging;

box.addEventListener('mousedown', function(event) {
  draging = true
  var ev = event || window.event;
  boxOffsetX = box.offsetLeft;
  boxOffsetY = box.offsetTop;
  startX = ev.clientX;
  startY = ev.clientY;
});

document.addEventListener('mouseup', function() {
  draging = false;
});

document.onmousemove = function(ev) {
  if(!draging) return;
  var ev = event || window.event;
  mouseX = event.clientX;
  mouseY = event.clientY;
  
  offsetX = mouseX - startX;
  offsetY = mouseY - startY;

  var newPositionX = boxOffsetX + offsetX;
  var newPositionY = boxOffsetY + offsetY;

  if(newPositionX < 0) {
    newPositionX = 0;
  } else if (newPositionX > (scrollWidth - box.clientWidth)) {
    newPositionX = scrollWidth - box.clientWidth;
  }

  if(newPositionY < 0) {
    newPositionY = 0;
  } else if (newPositionY > (scrollHeight - box.clientHeight)) {
    console.log('xxxxxx');
    newPositionY = scrollHeight - box.clientHeight;
  }

  box.style.left = newPositionX + 'px';
  box.style.top = newPositionY + 'px';
}
