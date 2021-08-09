import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCommonModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

const modules = [
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCommonModule,
    MatTableModule,
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [...modules],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
