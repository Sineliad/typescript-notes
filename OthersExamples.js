/*
    TYPESCRIPT
 node --version
 npm --version
 npm i typescript -g
 tsc --version
 tsc output.ts
 tsc output.ts -w es igual a  tsc output.ts -watch Starting compilation in watch mode...
*/


var myString: string = "Dai";
var myAnyVar: any = "Soy cualquiera";
myAnyVar = true;
var myNumberArray: number[] = [1, 2];
var myAnyArray: any[] = ["1", 2, true, undefined];
//tuple
var myArrayTuple: [string, number] = ["1", 2];
var myVoidVar: void = null;

//FUNCIONES
function suma(num1: number | string, num2?: number): void {
  //return num1+num2
  let str = `${num1} - ${num2}`;
  console.log("str", str);
}
console.log(suma("2"));

//INTERFACE
interface ITarea {
  tittle: string;
  text: string;
}

function mostrarTareas(tarea: ITarea) {
  console.log(`${tarea.tittle} ${tarea.text}`);
}
var myTarea: ITarea = { tittle: "Typescript", text: "Aprendiendo interfaces" };
mostrarTareas(myTarea);
//mostrarTareas({tittle:"Typescript", text:"Aprendiendo interfaces" });

//CLASES
class User {
  name: string;
  email: string;
  private age: number;

  public getAge() {
    return this.age;
  }

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}
var Usuario1 = new User("Jhon", "jhon@gmail.com", 32);
console.log(Usuario1.name);
//console.log(Usuario1.getAge());

//HERENCIA
class Member extends User {
  id: number;

  constructor(id: number, name, email, age) {
    super(name, email, age);
    this.id = id;
  }
  getAgeFromChild() {
    super.getAge();
  }
}

var Miembro1 = new Member(1, "Jhon", "jhon@gmail.com", 32);
console.log("Desde el hijo: ",Miembro1.getAge());
