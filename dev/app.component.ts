import {Component} from 'angular2/core';
import {TemplateDrivenComponent} from "./template-driven-form.component";

@Component({
    selector: 'my-app',
    template: `
        <my-template-driven></my-template-driven>
    `,
    directives: [TemplateDrivenComponent]
})
export class AppComponent {

}
