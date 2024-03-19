import { DEFAULT_TODO_ITEM, ITodoItem } from "./const";



let counter = 0;

export const getList = (): Promise<ITodoItem[]> => {
  return new Promise((res, rej) => {
    counter++;
    counter %=3;
    if(!counter) {
      setTimeout(() => rej(new Error('An error nuber 381272361827123681')), 2000);
    }
   
    setTimeout(() =>res(
     Array.isArray(DEFAULT_TODO_ITEM) ? DEFAULT_TODO_ITEM : [DEFAULT_TODO_ITEM]
    ), 2000)
   })
}