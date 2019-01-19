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
console.log("HOLA MUNDO :)");
//En typescript no se puede cambiar el tipo de dato
//myString = 2; //era un string no le puedo asignar un 2 error TS2322: Type '2' is not assignable to type 'string'.
//Tipos de Datos
var myString = "Dalenis";
var myNumber = 30;
var myBool = true;
var myVarAny = "Puedo ser cualquier tipo de dato";
var myArrayAny = [1, 2, 3, "", true]; // any[] Con esto le digo que este arreglo puede contener cualquier tipo de dato string number...
var myArrayString = ["Item1", "Item2"]; //string[] con esto le digo que el arreglo solo puede contener strings
document.write(myString);
document.write(myNumber.toString());
//Enums
// Valores de tipo número comienza por defecto en 0 uy va aumentando el contador si se quiere que empiece con otro valor seteaar
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//Obtener el valor del enum
var blue = Color.Blue;
console.log("Enum Blue: ", blue);
// Obtener el nombre del enum
var myVar = Color[1];
//let myVar: string = Color[Color.Blue];
console.log("myVar: ", myVar);
//Convetir un número en un string
var x = "hola :)";
var y = 2;
var numStr = String(y);
console.log("numStr: ", typeof (numStr));
//Tuple - una tupla es una lista ordenada de elementos
var myStrNumTuple = ["Hola", 30]; //Solo puedo asignarle al arreglo el primer valor tipo string el segundo tipo numero
document.write(typeof myStrNumTuple);
//void, undefined, null
var myVoid = undefined; //void es para definir tipos de datos vacios
var myNull = null; // puede contener null , undefined
var myUndefined = undefined;
//Funciones
//Le puedo decir a los parametros que tipo de datos son y a la función que tipo de dato tiene que retornar
function getSum(num1, num2) {
    return num1 + num2;
}
//getSum(1, "1");
//Le puedo definir varios tipos de datos a la vez por ejemplo que puede recibir un numero o un string
var getSum2 = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
getSum2(1, "1");
//Definir que un parámetros es opcional es con el signo de interogación ?
function getName(firstname, lastname) {
    return firstname + " " + lastname;
}
getName("Dailenis");
//Función que no retorna nada void
function myVoidFunction() {
    console.log("myVoidFunction");
}
function showTodo(todo) {
    console.log(todo.tittle + " - " + todo.text);
}
var myTodo = { tittle: "Hola", text: "Mundo :)" };
showTodo({ tittle: "Typescript", text: "Aprendiendo interfaces" });
//Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.paidInvoice = function () {
        console.log(this.name + " tiene la memberes\u00EDa paga.");
    };
    User.prototype.ageInYears = function () {
        return this.age + " years";
    };
    return User;
}());
//Instanciar la clase
var User1 = new User("Jhon", "john@gmail.com", 32);
User1.register();
console.log(User1.email);
//console.log(User1.age); No puedo acceder a la edad  porque no es un dato público
console.log(User1.ageInYears());
//Herencia
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.paidInvoice.call(this);
    };
    return Member;
}(User));
