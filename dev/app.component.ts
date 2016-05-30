import {Component} from 'angular2/core';
import {DataDrivenComponent} from "./data-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-data-driven></my-data-driven>
    `,
    directives: [DataDrivenComponent]
})
export class AppComponent {

}
