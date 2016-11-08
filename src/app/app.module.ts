import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AnswerRatioComponent } from './answer-ratio/answer-ratio.component';
import { AnswerPipe } from './answer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnswerRatioComponent,
    AnswerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
