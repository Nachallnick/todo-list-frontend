import ToDo from "./TodoList";


let counter = 0;

export function getList = () => new Promise((res, rej) => {
 counter++;
 counter %=3;
 if(!counter) {
   setTimeout(() => rej(new Error('An error nuber 381272361827123681')), 2000);
 }

 setTimeout(() =>res([
  ToDo
 ]), 2000)
})