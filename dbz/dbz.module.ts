import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './mainpage/mainpage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule {

}
