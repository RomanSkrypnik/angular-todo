import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {MainComponent} from './components/main/main.component';
import {TodosComponent} from './components/todos/todos.component';
import {HeaderComponent} from './components/header/header.component';
import {TodoComponent} from './components/todo/todo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
];

@NgModule({
  declarations: [FooterComponent, MainComponent, TodosComponent, HeaderComponent, TodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class TodosModule {
}
