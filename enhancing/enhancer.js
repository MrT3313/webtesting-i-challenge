module.exports = {
  succeed,
  fail,
  repair,
  get,
  add,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

// INITIAL TEST
function add(a, b) {
  return a + b 
}
