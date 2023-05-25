import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { // implements OnInit

  pushLogs: Array<Date>;

  togglePassword = false;
  password = 'tuna'
  username = '';

  onPasswordToggle(): void {
    this.togglePassword = !this.togglePassword;
    this.pushLogs.push(new Date());
  }

  getClass(): string {
    return 'text-white';
  }

  resetUsername(): void {
    this.username = '';
  }

  isEmpty(): boolean {
    return this.username.length === 0;
  }

  constructor() {
    this.pushLogs = new Array<Date>();
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });
  }

  keyCode: string;  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    console.log(e)
    this.keyCode = e.key;
    /*if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      return false;
    }
    if (e.ctrlKey && e.key == "U") {
      return false;
    }
    return true;*/
  }

  /*@HostListener('document:keydown', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
    //console.log(`The user just pressed ${ev.key}!`);
  }*/

  @HostListener('document:visibilitychange', ['$event'])
  visibilitychange(ev:any) {
    if (document.hidden) {
      console.log(`LOG_1_HIDDEN`);
    } else {
      console.log(`LOG_2_NOT_HIDDEN`);
    }
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(ev:any) {
    ev = ev ? ev : window.event;
    var from = ev.relatedTarget || ev.toElement;
    if (!from || from.nodeName == "HTML") {

      console.log(`LOG_3_MOUSE_MOVE`);
    }
  }
}
