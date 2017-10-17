var Sweet = (function () {
    function Sweet(name) {
        console.log("Hello" + name);
    }
    Sweet.prototype.color = function () {
        console.log("Green");
    };
    return Sweet;
}());
var basil = new Sweet("world");
basil.color();
