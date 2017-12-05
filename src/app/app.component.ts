import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    label = "Click Me!";
    counter = 0;
    onButtonClick(event){
        this.counter++;
        this.counter % 2 == 0 ? this.label = "Click Me!" : this.label = "Click me again!";
        console.log(event); // shows up in browser console, not terminal
        console.log(`Button was ${event.type}ed`);
    }
}
