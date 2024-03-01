function telephoneCheck(str) {

  const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

  return pattern.test(str);
}

let number = telephoneCheck("(555)-555 5555");
console.log(number);

console.log(telephoneCheck("1234567890"))