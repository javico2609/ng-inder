import { UserFormEditComponent } from './user-form-edit-component/user-form-edit-component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { 
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
 } from '@angular/material';
import { SwingModule } from 'angular2-swing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,

        SwingModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,

        SwingModule,

        UserFormEditComponent
    ],
    declarations: [
        UserFormEditComponent
    ],
    providers: [],
})
export class SharedModule { }
