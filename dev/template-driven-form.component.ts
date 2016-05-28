import {Component} from 'angular2/core';


@Component({
    selector: 'my-template-driven',
    template: `
        <h2>Sign-up Form</h2>
        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
            <dive>
                <label for="mail">Mail</label>
                <input ngControl="email" type="text" id="mail" required #mail="ngForm">
                <span class="validation-error" *ngIf="!mail.valid">Not valid</span>
            </dive>
            <dive>
                <label for="password">Password</label>
                <input ngControl="password" type="text" id="passwordail" required #password="ngForm">
                <span class="validation-error" *ngIf="!password.valid">Not valid</span>
            </dive>
            <dive>
                <label for="confirm-password">Confirm Password</label>
                <input ngControl="confirm-password" type="text" id="confirm-password" required #passwordConfirm="ngForm">
                <span class="validation-error" *ngIf="!passwordConfirm.valid">Not valid</span>
            </dive>
            <button type="submit" [disabled]="!f.valid || password.value != passwordConfirm.value">Submit</button>
        </form>
        <h2>You submitted</h2>
        <div>Mail: {{user.mail}}</div>
        <div>Password: {{user.password}}</div>
    `
})
export class TemplateDrivenComponent {
    user = {mail: '', password: ''};

    onSubmit(form){
        // console.log(form);
        // console.log(form.value);
        this.user.mail = form.value['email'];
        this.user.password = form.controls['password'].value;
    }
}











