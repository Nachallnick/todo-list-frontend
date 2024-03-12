let counter = 0;

const todoList = [
    { title: 'title 1', description: 'description 1'},
    { title: 'title 2', description: 'description 2'},
    { title: 'title 3', description: 'description 3'},
    { title: 'title 4', description: 'description 4'},
]

export const getList = (): Promise<typeof todoList> => {
    return new Promise((res, rej) => {
        counter++;
        counter %= 3;
        if (!counter) {
            setTimeout(() => rej(new Error('An error number 381272361827123681')), 2000);
        }

        setTimeout(() => res(todoList), 2000)
    });
}