import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { FirstTaskComponent } from './first-task/first-task.component';

@NgModule({
  declarations: [HomeComponent, SecondTaskComponent, FirstTaskComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
