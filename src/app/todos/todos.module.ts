import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {MainComponent} from './components/main/main.component';
import {TodosComponent} from './components/todos/todos.component';
import {HeaderComponent} from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
];

@NgModule({
  declarations: [FooterComponent, MainComponent, TodosComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class TodosModule {
}
