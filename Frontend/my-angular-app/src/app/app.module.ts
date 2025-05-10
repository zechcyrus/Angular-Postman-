import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- add this
import { HttpClientModule } from '@angular/common/http'; // <-- and this



@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }

