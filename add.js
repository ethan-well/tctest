// a =            '1232342352352336347354737'
// b = '923412341321241234132431399890239083'
// a2 = 999999999999999999                         1
// b2 = 999999999999999999

function add(a, b) {
  var aToArr = a.split('');
  var btoArr = b.split('');
  
  var aLen = aToArr.length;
  var bLen = btoArr.length;
  
  var addLen = aLen > bLen ? aLen : bLen;
  var temp_len = aLen - bLen;

  // 使 a 和 b 长度相同
  if(temp_len > 0) {
    for(let i = 0; i < temp_len; i++) {
      btoArr.unshift('0');
    }
  } else {
    for(let i = 0; i < Math.abs(temp_len); i++) {
      aToArr.unshift('0');
    }
  }

  var addArr = [];
  var nextTem = 0;  //进位
  // 数组从后往前遍历相加
  for(let i = addLen - 1; 0 <= i; i--) {
     let tmp = parseInt(aToArr[i]) + parseInt(btoArr[i]) + nextTem;
     addArr.push(tmp % 10);
     nextTem = parseInt(tmp / 10);
  }
  
  if(nextTem >  0) {
    addArr.push(nextTem);
  }

  addArrRe = addArr.reverse();
  return addArrRe.join('');
}