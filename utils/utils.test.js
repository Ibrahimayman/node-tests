/**
 * Created by Ibrahim Ayman on 14/06/2017.
 */
// we must file ends with **.test.js that tells the app that the file contains test cases.
const utils = require("./utils");
it('should add two numbers', function () {
    var res = utils.add(2, 5);
    if (res !== 7) {
        throw new Error("expected 7, but get " + res);
    }
});


it('should mutiblay numbers', function () {
    var res = utils.squre(5);
    if (res !== (25)) {
        throw new Error("Expected 25 ");
    }
});