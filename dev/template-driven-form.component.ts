import {Component} from 'angular2/core';


@Component({
    selector: 'my-template-driven',
    template: `
        <h2>Sign-up Form</h2>
        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
            <dive>
                <label for="mail">Mail</label>
                <input ngControl="email" type="text" id="mail" required>
            </dive>
            <dive>
                <label for="password">Password</label>
                <input ngControl="password" type="text" id="passwordail" required>
            </dive>
            <dive>
                <label for="confirm-password">Confirm Password</label>
                <input ngControl="confirm-password" type="text" id="confirm-password" required>
            </dive>
            <button type="submit">Submit</button>
        </form>
    `
})
export class TemplateDrivenComponent {
    onSubmit(form){
        console.log(form);
        console.log(form.value);
    }
}











