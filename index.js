window.sumInputs = function () {
  var inputs = document.getElementsByTagName("input"),
    result1 = document.getElementById("mean"),
    result2 = document.getElementById("median"),
    result3 = document.getElementById("mode"),
    sum = 0;

  for (var i = 0; i < inputs.length; i++) {
    var ip = inputs[i];

    if (ip.name && ip.name.indexOf("mean") < 0) {
      sum += parseInt(ip.value) || 0;
    }
  }

  result1.value = sum / 5;

  var medi = 0,
    numsLen = inputs.length;
  inputs.sort();

  if (
    numsLen % 2 ===
    0 // is even
  ) {
    // average of two middle numbers
    medi = (inputs[numsLen / 2 - 1] + inputs[numsLen / 2]) / 2;
  } else {
    // is odd
    // middle number only
    medi = inputs[(numsLen - 1) / 2];
  }
  result2.value = medi;
};
