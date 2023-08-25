let arr = ["Android", "ios", "Windows", "blackberry"];

// [1] toString() --------------------------------------------
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log("toString() : ", arr.toString(), arr)

// [1] join() --------------------------------------------
// method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator
console.log("join() : ", arr.join('--'), arr)

