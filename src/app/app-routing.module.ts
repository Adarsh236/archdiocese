import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';

const routes: Routes = [
  { path: '', component: FirstTaskComponent },
  {
    path: 'second-task',
    component: SecondTaskComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
