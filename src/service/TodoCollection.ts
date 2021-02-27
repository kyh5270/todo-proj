import { ItemCounts } from '../model/ItemCounts';
import TodoItem from '../model/TodoItem';

class TodoCollection {
    private nextId : number = 1;

    private itemMap : Map<number, TodoItem>;

    constructor(
        public userName : string,
        public todoItems : TodoItem[] = []
    ){
        this.itemMap = new Map<number, TodoItem>();
        todoItems.forEach((item) => this.itemMap.set(item.id, item))
    }

    getTodoById(id : number) : TodoItem | undefined{
        return this.itemMap.get(id);
    }

    addTodo(task : string) : number{
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    // includeComplete is true > return all todolist
    // includeComplete is false > return not complete todolist
    getTodoItems(includeComplete : boolean) :  TodoItem[]{
        return [...this.itemMap.values()].filter(
            (item) => includeComplete || !item.complete
        );
    }

    removeComplete() : void{
        this.itemMap.forEach((item) => {
            if(item.complete){
                this.itemMap.delete(item.id)
            }
        })
    }

    getItemCounts() : ItemCounts {
        return {
            total : this.itemMap.size,
            incomplete : this.getTodoItems(false).length,
        };
    }

    markComplete(id : number, complete: boolean) : void{
        const todoItem = this.getTodoById(id);
        if(todoItem){
            todoItem.complete = complete;
        }
    }
}

export default TodoCollection;