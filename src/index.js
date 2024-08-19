module.exports = function check(str, bracketsConfig) {
  
  const bracketList = {};

  for(let[open,close] of bracketsConfig){
    bracketList[open] = close;
  }

  const order = [];

  for (let char of str){
    if(bracketList[char] === char){
      if(order[order.length-1] === char){
        order.pop();
      } else {
      order.push(char);
    }
  } else if (bracketList[char]){
    order.push(char)
  } else {
    const closeChar = order.pop();
    if(bracketList[closeChar] !==char){
      return false;
    }
  }
}
  return order.length === 0;
 
}