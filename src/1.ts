// Legacy code to refactor
export function dataProcessor(input) {
  var output = [];
  if (input && typeof input === "object" && input.constructor === Array) {
    for (var i = 0; i < input.length; i++) {
      var itm = input[i];
      if (itm && typeof itm === "object" && !Array.isArray(itm)) {
        var processed = {};
        for (var key in itm) {
          if (itm.hasOwnProperty(key) && typeof itm[key] === "string") {
            processed[key.toUpperCase()] = itm[key].trim();
          }
        }
        output.push(processed);
      }
    }
  }
  return output;
}
