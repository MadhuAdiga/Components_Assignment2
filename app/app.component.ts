import { Component } from '@angular/core';//Import decorator dependencies

@Component({
  selector: 'my-app',//selector
  template: ` <h3> This is the parent Component</h3>

              <!-- Trigger the modal with a button -->
              <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Click to view child component</button>
              
              <child [child_header]="header" [child_body]="body" [child_footer]="footer"></child>`, //use child selector and pass content to the modal component through 3 variables
              
})


export class AppComponent  { 
  header = 'Scooby Doo'; //define 3 variables which hold data for the modal header, body and footer
  body = 'Scooby-Doo is an American animated cartoon franchise, comprising several animated television series produced from 1969 to the present day. '; //define a variable content which holds a string
  footer = 'Scooby-Dooby-Doooo';
  }
