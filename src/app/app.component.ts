import { Component } from '@angular/core';
import { Message} from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloAngular';
  name1 = '';
  content = '';
  messages: Message[] = [];
  addMessage(): void {
    if (!this.name1.trim() || !this.content.trim())
    {
      return;
    }
    const message = new Message(this.name1, this.content);
    this.messages.push(message);
    this.content ='';
  }

}
