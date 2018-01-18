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
        MatGridListModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
