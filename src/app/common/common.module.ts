import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
    declarations: [],
    imports: [
        MatProgressSpinnerModule,
        MatTooltipModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule
    ],
    exports: [
        MatProgressSpinnerModule,
        MatTooltipModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule
    ]
})
export class CommonModule { }
