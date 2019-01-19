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
/*
 node --version
 npm --version
 npm i typescript -g
 tsc --version
 tsc output.ts
 tsc output.ts -w es igual a  tsc output.ts -watch Starting compilation in watch mode...
*/
var myString = "Dai";
var myAnyVar = "Soy cualquiera";
myAnyVar = true;
var myNumberArray = [1, 2];
var myAnyArray = ["1", 2, true, undefined];
//tuple
var myArrayTuple = ["1", 2];
var myVoidVar = null;
//FUNCIONES
function suma(num1, num2) {
    //return num1+num2
    var str = num1 + " - " + num2;
    console.log("str", str);
}
console.log(suma("2"));
function mostrarTareas(tarea) {
    console.log(tarea.tittle + " " + tarea.text);
}
var myTarea = { tittle: "Typescript", text: "Aprendiendo interfaces" };
mostrarTareas(myTarea);
//mostrarTareas({tittle:"Typescript", text:"Aprendiendo interfaces" });
//CLASES
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var Usuario1 = new User("Jhon", "jhon@gmail.com", 32);
console.log(Usuario1.name);
//console.log(Usuario1.getAge());
//HERENCIA
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.getAgeFromChild = function () {
        _super.prototype.getAge.call(this);
    };
    return Member;
}(User));
var Miembro1 = new Member(1, "Jhon", "jhon@gmail.com", 32);
console.log("Desde el hijo: ", Miembro1.getAge());
