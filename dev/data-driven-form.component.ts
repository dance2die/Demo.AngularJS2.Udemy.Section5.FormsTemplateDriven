import {Component, OnInit} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from "angular2/common";


@Component({
    selector: 'my-data-driven',
    template: `
        <h2>Sign-up Form</h2>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(f)">
            <dive>
                <label for="mail">Mail</label>
                <input [ngFormControl]="myForm.controls['email']" type="text" id="mail">
                <span class="validation-error">Not valid</span>
            </dive>
            <dive>
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.controls['password']" type="text" id="passwordail">
                <span class="validation-error">Not valid</span>
            </dive>
            <dive>
                <label for="confirm-password">Confirm Password</label>
                <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirm-password">
                <span class="validation-error">Not valid</span>
            </dive>
            <button type="submit">Submit</button>
        </form>
        <h2>You submitted</h2>
        <div>Mail: {{user.mail}}</div>
        <div>Password: {{user.password}}</div>
    `
})
export class DataDrivenComponent implements OnInit {
    myForm: ControlGroup;
    user = {mail: '', password: ''};

    constructor(private _formBuilder: FormBuilder){}

    onSubmit(form){
        console.log(this.myForm);
    }

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
            'confirmPassword': ['', Validators.required],
        });
    }
}











