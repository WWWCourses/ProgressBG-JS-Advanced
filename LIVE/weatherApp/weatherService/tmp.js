let jsonStr = `
  {
    "sofia":{
      "tempReal": 30,
      "tempFeel": 12,
      "wind": 1.7
    }
  }`;



let jsonObj = JSON.parse(jsonStr);

console.log(jsonObj.sofia.tempReal);

