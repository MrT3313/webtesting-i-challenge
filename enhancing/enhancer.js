module.exports = {
  repair,

  succeed,
  fail,
  get,
  add,
};

function repair(item) {
  if (Object.entries(item).length === 0 ) {
     return item
  } else {
    // -- V2
    item.durability = 100
  
    return {
      ...item,
      // -- V1
      // durability: 100
    }
  }
}

function succeed(item) {
  if(item.enhancement < 20) {
    item.enhancement += 1
  }  
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5
  } else {
    item.durability -= 10
  }
  if (item.enhancement > 16 ) {
    item.enhancement -= 1
  } 


  return { ...item };
}


function get(item) {
  return { ...item };
}

// INITIAL TEST
function add(a, b) {
  return a + b 
}
