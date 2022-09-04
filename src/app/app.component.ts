import { Component } from "@angular/core";


@Component({
  selector: 'Ss-root',
  template:` <div>
    <pm-products></pm-products>
  </div>`
})
export class AppComponent {
  pageTitle : string = 'Smart Store'
}