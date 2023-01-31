function reverseString(str) {
  var newStr = '';

    for(let i = str.length-1; i >= 0; i--){
      newStr = newStr.concat('',str[i]);
    }
    return newStr;
}

reverseString('camron');
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;


// function reverse:
//  newstring = '';
// for(iterate through string backwards){
// add string reversed characters to new empty string
//}
//return newstring

