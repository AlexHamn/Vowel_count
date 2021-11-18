function getCount(str) {
  var vowelsCount = 0;
  
  let arr = str.split('');

  arr.forEach((e) => {
    if (e == 'a' || e == 'e'|| e == 'i' || e == 'o' || e == 'u') {vowelsCount++}
  })
  
  return vowelsCount;
}
