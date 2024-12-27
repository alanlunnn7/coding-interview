// Your Task:
// 1. Support completed function
// 2. Support priorities
// Feel free to ask if anything unclear

// Define a TypeScript interface for a to-do item
interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

// A class that manages a to-do list
export class TodoList {
  private items: TodoItem[] = [];

  constructor(initialItems: TodoItem[] = []) {
    this.items = initialItems;
  }

  // Add a new to-do item
  public addItem(title: string): void {
    const newItem: TodoItem = {
      id: this.items.length + 1,
      title: title,
      completed: false,
    };
    this.items.push(newItem);
  }

  // Mark a to-do item as complete
  public completeItem(id: number): void {
    // TODO: complete this method
  }

  public setPriority(id: number, priority): void {
    // TODO: complete this method
  }

  // Get the list of to-do items
  public getItems(): TodoItem[] {
    return this.items;
  }
}

// Example usage:
const myTodoList = new TodoList();
myTodoList.addItem("Learn TypeScript");
myTodoList.addItem("Write Refactoring Challenge");

console.log(myTodoList.getItems());
