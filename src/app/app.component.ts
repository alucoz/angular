import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt';
private list = new TodoList("Wikora",
[ new TodoItem("nic",true),
new TodoItem("nwm",false),
new TodoItem("yyyy")
]);

get username(): string{
  return this.list.user;
};

get itemCount(): number{
   return this.items.length;


}

get items(): readonly TodoItem[]{
  return this.list.items.filter(item => !item.complete);
}

addItem(newItem: string){
  if (newItem != ""){
    this.list.addItem(newItem);
    }
  }
}
