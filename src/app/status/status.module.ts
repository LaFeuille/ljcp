import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HealthService } from './health.service';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexComponent
  ],
  providers: [
    HealthService
  ]
})
export class StatusModule {
}
