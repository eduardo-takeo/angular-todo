import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';

import { ModalService } from './modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    ButtonComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
