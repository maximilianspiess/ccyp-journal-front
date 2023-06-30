import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FilenavComponent } from './filenav/filenav.component';
import { FilegroupComponent } from './filegroup/filegroup.component';
import { FileopenComponent } from './fileopen/fileopen.component';
import { TitleComponent } from './title/title.component';
import { TextareaComponent } from './textarea/textarea.component';
import { GeneratedQuestionComponent } from './generated-question/generated-question.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilenavComponent,
    FilegroupComponent,
    FileopenComponent,
    TitleComponent,
    TextareaComponent,
    GeneratedQuestionComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
