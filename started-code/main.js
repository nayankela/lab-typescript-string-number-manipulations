"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(1));
        console.log(word.concat('prograd'));
        console.log(word.slice(1, 3));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var result = "";
        var strArr = sentence.split("");
        for (var index = 0; index < strArr.length; index++) {
            result = result + strArr[index] + " ";
        }
        console.log(result);
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str);
        console.log(str.replace(/[^aeiou]/gi, "").length);
    };
    return StringManipulations;
}());
var obj = new StringManipulations();
obj.print('facePrep');
obj.printWithSpace('facePrep');
obj.findVowel('facePrep');
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var counter = 1;
        for (var index = 2; index < num; index++) {
            if (num % index == 0) {
                ++counter;
            }
        }
        if (counter == 1) {
            console.log("It is Prime :" + num);
        }
        else {
            console.log("Not Prime :" + num);
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 == 1)
            console.log("Magic Number" + num);
        else
            console.log("Not a Magic Number" + num);
    };
    return NumbersManipulations;
}());
var obj1 = new NumbersManipulations();
obj1.findPrime(10);
obj1.findMagic(199);
