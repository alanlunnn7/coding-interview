import { ToDoList } from "./2";

describe("Test ToDoList", () => {
  it("test case 1", () => {
    const toDoList = new ToDoList();

    toDoList.addItem("Learn typescript");
    toDoList.addItem("Coffee break");

    const expected = ["Learn TypeScript", "Coffee break"];
    expect(toDoList.getItems().map((item) => item.title)).toEqual(expected);
  });

  it("test case 2", () => {
    const toDoList = new ToDoList();

    const expectedBeforeComplete = [
      { id: 1, title: "Learn TypeScript", completed: false },
      { id: 2, title: "Write Refactoring Challenge", completed: false },
    ];
    const expectedAfterComplete = [
      { id: 1, title: "Learn TypeScript", completed: false },
      { id: 2, title: "Write Refactoring Challenge", completed: true },
    ];

    toDoList.addItem("Learn typescript");
    toDoList.addItem("Coffee break");

    expect(toDoList.getItems()).toEqual(expected);

    toDoList.completeItem(2);
    expect(toDoList.getItems()).toEqual(expected);
  });

  it("test case 3", () => {
    const toDoList = new ToDoList();

    const expected = [
      { id: 1, title: "Learn TypeScript", completed: false, priority: 1 },
      { id: 2, title: "Write Refactoring Challenge", priority: 2 },
    ];

    toDoList.addItem("Learn typescript");
    toDoList.addItem("Coffee break");

    expect(toDoList.getItems()).toEqual(expected);
  });

  it("test case 4", () => {
    const toDoList = new ToDoList();

    const expected = [
      { id: 1, title: "Learn TypeScript", completed: false, priority: 1 },
      { id: 2, title: "Write Refactoring Challenge", priority: 2 },
    ];
    const expectedAfterPrioritization = [
      { id: 1, title: "Learn TypeScript", completed: false, priority: 1 },
      { id: 2, title: "Write Refactoring Challenge", priority: 2 },
    ];

    toDoList.addItem("Learn typescript");
    toDoList.addItem("Coffee break");

    expect(toDoList.getItems()).toEqual(expected);

    toDoList.setPriority(1, 2);
    expeect(toDoList.getItems()).toEqual(expectedAfterPrioritization);
  });
});

// Example usage:
const myTodoList = new TodoList();
myTodoList.addItem("Learn TypeScript");
myTodoList.addItem("Write Refactoring Challenge");

console.log(myTodoList.getItems());
