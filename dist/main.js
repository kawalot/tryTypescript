var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sweet = (function () {
    function Sweet(name, startColor) {
        console.log("Hello" + name);
        this.color = startColor;
    }
    Sweet.prototype.getcolor = function () {
        console.log(this.color);
    };
    return Sweet;
}());
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, startColor) {
        return _super.call(this, name, startColor) || this;
    }
    Basil.prototype.setNewColor = function (newColor) {
        this.color = newColor;
    };
    return Basil;
}(Sweet));
var basil3 = new Basil("basil", "brite green");
basil3.getcolor();
basil3.setNewColor("Red");
basil3.getcolor();
