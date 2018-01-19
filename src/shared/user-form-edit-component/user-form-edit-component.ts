import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'user-form-edit',
    template: `
        <img id="profile-image" src="assets/profile/profile.jpg">

        <form class="form" [formGroup]="formGroup" novalidate>
            <mat-form-field class="full-width">
              <input matInput formControlName="username" placeholder="User or Email" autocomplete="off">
            </mat-form-field>
          
            <mat-form-field class="full-width">
                <input matInput type="password" formControlName="password" placeholder="Password" autocomplete="off">
            </mat-form-field>
    
            <button [disabled]="!formGroup.valid" mat-raised-button color="primary" (click)="save()">Save</button>    
        </form>
    `
})

export class UserFormEditComponent implements OnInit {

    @Input() public user: any = { username: '', password: '' };
    @Output() public onSave: EventEmitter<any> = new EventEmitter();

    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: [this.user.username, [Validators.required]],
            password: [this.user.password, [Validators.required]]
        });

        console.log(this.formGroup.value);
    }

    save() {
        this.onSave.emit(this.formGroup.value);
    }
}