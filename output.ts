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
var myString: string = "Dalenis";
var myNumber: number = 30;
var myBool: boolean = true;
var myVarAny: any = "Puedo ser cualquier tipo de dato";
var myArrayAny: any[] = [1, 2, 3, "", true]; // any[] Con esto le digo que este arreglo puede contener cualquier tipo de dato string number...
var myArrayString: string[] = ["Item1", "Item2"]; //string[] con esto le digo que el arreglo solo puede contener strings
document.write(myString);
document.write(myNumber.toString());
//Enums
// Valores de tipo número comienza por defecto en 0 uy va aumentando el contador si se quiere que empiece con otro valor seteaar
enum Color {Green , Red, Blue }
//Obtener el valor del enum
let blue: Color = Color.Blue;
console.log("Enum Blue: ", blue);
// Obtener el nombre del enum
let myVar: string = Color[1];
//let myVar: string = Color[Color.Blue];
console.log("myVar: ", myVar);

//Convetir un número en un string
let x: string = "hola :)";
let y: number = 2;
let numStr = String(y);
console.log("numStr: ", typeof(numStr));

//Tuple - una tupla es una lista ordenada de elementos
var myStrNumTuple: [string, number] = ["Hola", 30]; //Solo puedo asignarle al arreglo el primer valor tipo string el segundo tipo numero
document.write(typeof myStrNumTuple);

//void, undefined, null
let myVoid: void = undefined; //void es para definir tipos de datos vacios
let myNull: null = null; // puede contener null , undefined
let myUndefined: undefined = undefined;

//Funciones
//Le puedo decir a los parametros que tipo de datos son y a la función que tipo de dato tiene que retornar
function getSum(num1: number, num2: number): number {
  return num1 + num2;
}
//getSum(1, "1");

//Le puedo definir varios tipos de datos a la vez por ejemplo que puede recibir un numero o un string
const getSum2 = function(num1: number | string, num2: number | string): number {
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
function getName(firstname: string, lastname?: string): string {
  return `${firstname} ${lastname}`;
}
getName("Dailenis");

//Función que no retorna nada void
function myVoidFunction(): void {
  console.log("myVoidFunction");
}

//Interfaces: se deginen estructuras de objetos
interface ITodo {
  tittle: string;
  text: string;
}
function showTodo(todo: ITodo) {
  console.log(`${todo.tittle} - ${todo.text}`);
}
let myTodo: ITodo = { tittle: "Hola", text: "Mundo :)" };
showTodo({ tittle: "Typescript", text: "Aprendiendo interfaces" });

//Clases
class User {
  private name: string; // accesible solo dentro de la clase
  public email: string;
  protected age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  register() {
    console.log(`${this.name} is registered!`);
  }
  paidInvoice (){
      console.log(`${this.name} tiene la memberesía paga.`);
  }

  public ageInYears() {
    return `${this.age} years`;
  }
}
//Instanciar la clase
var User1 = new User("Jhon", "john@gmail.com", 32);
User1.register();
console.log(User1.email);
//console.log(User1.age); No puedo acceder a la edad  porque no es un dato público
console.log(User1.ageInYears());

//Herencia
class Member extends User {
  id: number;

  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice(){
      super.paidInvoice();
  }

}
