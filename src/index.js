module.exports = function reverse (n) {
    var number = Math.abs(n);
    var string = String(number).split("").reverse().join("");    
    return Number(string);
}
