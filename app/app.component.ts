import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>Teldsadsadasl Cersi it was me!</h1>
      <p>{{ message }}</p>
    </div>
  `
})
export class AppComponent {
  message = 'Can you carry on from here?';
}